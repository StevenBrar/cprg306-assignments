"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const [name, setName] = useState("");                
  const [category, setCategory] = useState("produce"); 

  const increment = () => setQuantity((quant) => Math.min(20, quant + 1));
  const decrement = () => setQuantity((quant) => Math.max(1, quant - 1));

  const submit = (e) => {
    e.preventDefault();

    const item = { name, quantity, category };
    console.log("New item:", item);

    alert(
      `New Item\n\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`
    );

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <section className="mx-auto w-full max-w-md rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-6 shadow-xl text-white">
      <h2 className="text-2xl font-extrabold tracking-tight">Week 5 — New Item</h2>

      <form onSubmit={submit} className="mt-6 space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold">
            Item Name<span className="opacity-80"> *</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}    
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Milk 4L"
            className="mt-2 w-full rounded-lg bg-white/95 text-indigo-900 px-3 py-2 outline-none ring-2 ring-transparent focus:ring-white/60 shadow"
          />
        </div>

        <div>
          <span className="block text-sm font-semibold">Quantity</span>
          <p className="mt-1 text-xs text-indigo-100">Min 1 - Max 20</p>

          <div className="mt-3 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity == 1}
              aria-label="Decrease quantity"
              className="h-12 w-12 rounded-full bg-white text-indigo-600 text-2xl font-bold transition hover:bg-indigo-100 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              -
            </button>

            <div className="h-16 w-24 rounded-xl bg-white text-indigo-700 flex items-center justify-center shadow-inner">
              <span className="text-4xl font-extrabold tabular-nums">
                {quantity}
              </span>
            </div>

            <button
              type="button"
              onClick={increment}
              disabled={quantity == 20}
              aria-label="Increase quantity"
              className="h-14 w-14 rounded-full bg-white text-indigo-600 text-2xl font-bold transition hover:bg-indigo-150 active:scale-95 "
            >
              +
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-semibold">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-2 w-full rounded-lg bg-white/95 text-indigo-900 px-3 py-2 outline-none ring-2 ring-transparent focus:ring-white/60 shadow"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-white/95 text-indigo-700 font-bold py-3 shadow hover:bg-white active:scale-[0.99] transition"
        >
          Add Item
        </button>
      </form>
    </section>
  );
}
