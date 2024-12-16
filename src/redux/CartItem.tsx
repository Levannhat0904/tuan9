import React from "react";
import { deleteProduct, Product, updateProduct } from "./cartSlice";
import { useDispatch } from "react-redux";

interface CartItemProps {
  product: Product;
}
const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const dispatch = useDispatch();
  const handleQuantityChange = (even: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateProduct({ id: product.id, quatity: +even.target.value }));
  };
  const handleDelete = () => {
    dispatch(deleteProduct(product.id));
  };
  return (
    <div>
      <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <input
            type="number"
            value={product.quantity}
            min="1"
            onChange={handleQuantityChange}
          />
        </td>
        <td>
          <button onClick={handleDelete}>Delete</button>
        </td>
      </tr>
    </div>
  );
};
export default CartItem;
