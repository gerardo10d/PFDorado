import { useState } from "react"
import { collection, getDocs, where, query, documentId, writeBatch, addDoc } from "firebase/firestore"
import { useCart } from "../../context/CartContext"
import { db } from "../../services/firebase/firebaseConfig"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const [userData, setUserData] = useState({name: '', email: '',phone: '',});
    const { cart, total, clearCart } = useCart()

    const createOrder = async (userData) => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: userData,
                items: cart,
                total 
            }
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            const querySnapshot = await getDocs(productsCollection)
            const { docs } = querySnapshot
            
            docs.forEach(doc => {
                const fields = doc.data()
                const stockDb = fields.stock
    
                const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productsAddedToCart.quantity
                console.log(stockDb >= prodQuantity)
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...fields})
                }
            })
    
            if(outOfStock.length === 0) {
                batch.commit()
    
                const orderCollection = collection(db, 'orders')
                const { id } = await addDoc(orderCollection, objOrder)
                
                setOrderId(id)

                clearCart()
            } else {
                console.log('Hay productos sin stock disponible')
            }
        } catch (error) {
            console.log('Error al crear la orden')
        } finally {
            setLoading(false)
        }
        
    }

    if(loading) {
        return <h1>Se esta generando su orden, aguarde por favor...</h1>
    }

    if(orderId) {
        return <h1>El id de su compra es: {orderId}</h1>
    }

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <h1>CHECKOUT</h1>
            <form>
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={userData.name}
                    onChange={handleInputChange}
                />

                <label htmlFor="email">Correo electrónico:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                />

                <label htmlFor="phone">Teléfono:</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={userData.phone}
                    onChange={handleInputChange}
                />

                <button onClick={() => createOrder(userData)}>Generar orden</button>
            </form>
        </>
    )
}

export default Checkout