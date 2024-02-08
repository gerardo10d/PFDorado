import { useCart } from '../../context/CartContext'

const CartItem = ({ img, name, price, quantity, id }) => {
    const { removeItem } = useCart();
    const { showNotification, showConfirmation } = useNotification()
    const { removeProductFromLocalStorage } = useLocalStorage()
    const { formatPrice } = useFormatPrice()

    const deleteItem = () => {
        showNotification('success', 'Eliminado correctamente')
        removeItem(id);
        removeProductFromLocalStorage(id)
    };

    const handleDeleteItem = () => {
        showConfirmation({
            text: `¿Desea eliminar ${name} del carrito?`,
            confirmButton: 'Sí, eliminar',
            addAction: deleteItem
        });
    }

    return (
        <div className={classes.container}>
            <img className={classes.img} src={img} alt={`Imagen de ${name}`} />
            <h5>{name}</h5>
            <p>
                <strong>Precio Unitario: </strong>$ {formatPrice(price)}
            </p>
            <p>
                <strong>Cantidad de Unidades: </strong>
                {quantity}
            </p>
            <p>
                <strong>Subtotal: </strong>$ {formatPrice(price * quantity)}
            </p>
            <button onClick={handleDeleteItem}>
                <FaTrashCan className={classes.icon} />
            </button>
        </div>
    )
}

export default CartItem;