"use client";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelect?.()}
      className="border-b py-3 flex justify-between items-center px-3 cursor-pointer hover:bg-gray-50 focus:outline-none"
    >
      <div>
        <span className="font-semibold text-blue-800">{name}</span>{" "}
        <span className="text-sm text-gray-600">({category})</span>
      </div>
      <span className="text-gray-800">Qty: {quantity}</span>
    </li>
  );
}
