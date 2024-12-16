import { useSelector } from "react-redux";
import { RootState } from "./store";
import CartItem from "./CartItem";

const Cart: React.FC = () => {
  const products = useSelector((state: RootState) => state.cart.products);
  const totalQuantity = products.reduce(
    (total, product) => total + product.quantity,
    0,
  );
  const totalAmount = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );
  return (
    <div>
      <h1>Gio Hang</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </tbody>
      </table>
      <p>
        <strong>Total quantity: </strong> {totalQuantity}
      </p>
      <p>
        <strong>Total price: </strong> {totalAmount}
      </p>
    </div>
  );
};
export default Cart;
