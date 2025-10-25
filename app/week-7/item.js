export default function Item({ name, quantity, category }) {
  return (
    <li className="border-b py-3 flex justify-between items-center">
      <div>
        <span className="font-semibold text-blue-800">{name}</span>{" "}
        <span className="text-sm text-gray-600">({category})</span>
      </div>
      <span className="text-gray-800">Qty: {quantity}</span>
    </li>
  );
}
