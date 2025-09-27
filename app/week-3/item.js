
export default function Item({ name, quantity, category }) {
    return (
      <li className="border-b flex justify-between items-center">
        <div>
          <span className="font-bold text-blue-800">{name}</span>
          <span className="text-sm text-black-500 ">({category})</span>
        </div>
        <span className="text-lg text-black-600">Qty: {quantity}</span>
      </li>
    );
  }
  