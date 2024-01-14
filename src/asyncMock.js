// Array de objetos con los productos
const products = [
    {
        id: '1', name: 'Chaqueta de cuero estilo motociclista', price: 380000, category: 'chaqueta', stock: 10, description: 'Una chaqueta de cuero estilo motociclista es una prenda robusta y elegante que se inspira en la moda de los motociclistas. Suele estar confeccionada en cuero genuino o sintético, con detalles de cremalleras asimétricas y solapas anchas. Este tipo de chaqueta brinda un aspecto moderno y atrevido, perfecto para aquellos que buscan un estilo audaz y urbano.'
    },
    {
        id: '2', name: 'Chaqueta acolchada para exteriores', price: 320000, category: 'chaqueta', stock: 20, description: 'La chaqueta acolchada es ideal para climas fríos, ya que está diseñada para proporcionar aislamiento térmico. Suele tener un exterior resistente al viento y al agua, con un relleno de material aislante, como plumas o fibras sintéticas. Este tipo de chaqueta es versátil y funcional, perfecta para actividades al aire libre durante el invierno, y a menudo cuenta con capucha desmontable.'
    },
    {
        id: '3', name: 'Blazer de lana para ocasiones formales', price: 350000, category: 'chaqueta', stock: 15, description: 'Un blazer de lana es una opción elegante para ocasiones más formales. Confeccionado en lana de alta calidad, este tipo de chaqueta presenta un corte estructurado y detalles como solapas clásicas, botones frontales y bolsillos con ribetes. Puede ser usado sobre camisas formales para eventos de negocios o combinado con camisas casuales para un toque más relajado en eventos sociales.'
    },
    {
        id: '4', name: 'Camisa Oxford de manga larga', price: 120000, category: 'camisa', stock: 8, description: 'La camisa Oxford es un clásico atemporal que se destaca por su tejido de algodón resistente y duradero, con un patrón de tejido en espiga. Esta camisa suele tener un cuello abotonado y botones en los puños. Es versátil y puede utilizarse tanto en contextos casuales como en situaciones más formales, dependiendo de cómo se combine. Es una elección popular para la oficina o eventos semi-formales.'
    },
    {
        id: '5', name: 'Camisa de lino de manga corta', price: 110000, category: 'camisa', stock: 15, description: 'Perfecta para climas cálidos y días soleados, la camisa de lino de manga corta es ligera y transpirable. Confeccionada en lino, un tejido natural que absorbe la humedad y permite la circulación del aire, esta camisa proporciona comodidad y estilo durante el verano. Suelen tener cortes más relajados y pueden llevarse con pantalones cortos, chinos o incluso jeans para un look casual y fresco. Los colores claros y los patrones son comunes en este tipo de camisas.'
    },
    {
        id: '6', name: 'Pantalones chinos', price: 220000, category: 'pantalones', stock: 18, description: 'Los pantalones chinos son una opción versátil y elegante que se sitúa entre la formalidad de los pantalones de vestir y la informalidad de los jeans. Generalmente confeccionados en algodón o una mezcla de algodón y elastano, los chinos presentan un corte recto y un estilo más estructurado. Tienen un aspecto pulido y son adecuados para situaciones que requieren un código de vestimenta semiformal. Los colores más comunes incluyen caqui, beige, azul marino y gris.'
    },
    {
        id: '7', name: 'Jeans slim fit', price: 250000, category: 'pantalones', stock: 12, description: 'Los jeans slim fit son una opción moderna y ajustada que se adapta más ceñidamente al cuerpo que los jeans rectos tradicionales. Están confeccionados en denim resistente y suelen tener un toque de elastano para mayor comodidad y flexibilidad. Este estilo de pantalón es popular para un look casual y contemporáneo. Pueden ser usados con camisetas, camisas o suéteres, y son ideales para situaciones informales. Los colores y lavados varían, desde el clásico azul hasta tonos más oscuros o desgastados.'
    },
    {
        id: '8', name: 'Zapatos Oxford', price: 320000, category: 'zapatos', stock: 6, description: 'Los zapatos Oxford son un clásico atemporal en el calzado formal para hombres. Se caracterizan por su diseño elegante y estructurado, con cierre de cordones y una lengüeta que se superpone al empeine. Estos zapatos suelen tener una punta redonda o ligeramente puntiaguda. Son ideales para ocasiones formales y se pueden usar con trajes, esmoquines o atuendos de negocios. Los materiales comunes incluyen cuero liso o pulido, y están disponibles en colores como negro, marrón y tonos más claros.'
    },
    {
        id: '9', name: 'Chelsea boots', price: 380000, category: 'zapatos', stock: 4, description: 'Las Chelsea boots son un tipo de botas para hombre que se caracterizan por su diseño elegante y su facilidad para poner y quitar gracias a su característico elástico lateral.'
    }

]

// Función que retorna una promesa emulando retrasos en la red (500 milisegundos)
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}