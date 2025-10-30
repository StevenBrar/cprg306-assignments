"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems((prev) => [item, ...prev]);
  };

  return (
    <main className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center text-gray-900">
        Shopping List
      </h1>

      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
