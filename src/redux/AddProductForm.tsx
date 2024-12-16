import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./cartSlice";

const AddProductForm: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newProduct = {
      id: Date.now(),
      name,
      price,
      quantity,
    };
    dispatch(addProduct(newProduct));
    setName("");
    setPrice(0);
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tên sản phẩm"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Giá"
        value={price}
        onChange={(e) => setPrice(+e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Số lượng"
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
        required
      />
      <button type="submit">Thêm sản phẩm</button>
    </form>
  );
};

export default AddProductForm;
