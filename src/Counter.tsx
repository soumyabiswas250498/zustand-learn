import { useShallow } from "zustand/react/shallow";
import { useBookStore } from "./Store/bookstore";
import React, { useState } from "react";

function Counter() {
  //   const { title, author, amount, updateAmount, qty, updateQty } =
  //     useBookStore();
  const { title, author, amount, updateAmount, qty, updateQty } = useBookStore(
    useShallow((state) => ({
      title: state.title,
      author: state.author,
      amount: state.amount,
      updateAmount: state.updateAmount,
      qty: state.qty,
      updateQty: state.updateQty,
    })),
  );

  const [price, setPrice] = useState(amount);
  console.log(price);
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <h2>Title: {title}</h2>
        <h4>Author: {author}</h4>
        <p> Price: {amount}</p>
        <div className="border-blue-300 border-2">
          <input
            type="number"
            placeholder="price"
            className="border-blue-300"
            onChange={(e) => setPrice(e.target.value)}
          />
          <button
            onClick={() => {
              updateAmount(price);
            }}
            className="bg-slate-500 text-white"
          >
            Update Price
          </button>
        </div>
        <div>
          <h3>Quantity: {qty}</h3>
          <button className="bg-slate-400" onClick={() => updateQty(1)}>
            increase Quantity
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
