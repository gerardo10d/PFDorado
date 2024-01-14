import Item from "../Item/Item"

// Componente de presentación que se encarga de listar los productos
const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;