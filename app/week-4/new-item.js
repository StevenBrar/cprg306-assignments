"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((quant) => Math.min(20, quant + 1));
  const decrement = () => setQuantity((quant) => Math.max(1, quant - 1));

  return (
    <section className="mx-auto w-full max-w-md rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-6 shadow-lg text-white">
      <h2 className="text-2xl font-bold">Quantity</h2>
      <p className="mt-1 text-sm text-indigo-100">Min 1, Max 20</p>

      <div className="mt-6 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={decrement}
          disabled={quantity == 1}
          aria-label="Decrease"
          className="h-12 w-12 rounded-full bg-white text-indigo-600 text-2xl font-bold transition hover:bg-indigo-100 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          -
        </button>

        <div className="h-16 w-20 rounded-lg bg-white text-indigo-700 flex items-center justify-center shadow-inner">
          <span className="text-4xl font-extrabold tabular-nums">{quantity}</span>
        </div>

        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          aria-label="Increase quantity"
          className="h-12 w-12 rounded-full bg-white text-indigo-600 text-2xl font-bold transition hover:bg-indigo-100 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          +
        </button>
      </div>
    </section>
  );
}