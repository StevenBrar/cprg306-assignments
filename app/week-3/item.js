
export default function Item({ name, quantity, category }) {
    return (
      <li className="border-b py-2 flex justify-between items-center">
        <div>
          <span className="font-semibold text-gray-800">{name}</span>
          <span className="text-sm text-gray-500 ml-2">({category})</span>
        </div>
        <span className="text-sm text-gray-600">Qty: {quantity}</span>
      </li>
    );
  }
  