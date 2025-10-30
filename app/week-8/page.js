"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

function cleanNameForMealDB(raw) {
  if (!raw) return "";
  let base = raw.split(",")[0];
  base = base.replace(
    /[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2580-\u27BF]|\uD83E[\uDD10-\uDDFF]/g,
    "");
  base = base.replace(/[^\p{L}\s]/gu, "");
  return base.trim().toLowerCase();
}


export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    setItems((prev) => [item, ...prev]);
  };

  const handleItemSelect = (item) => {
    const cleaned = cleanNameForMealDB(item?.name ?? "");
    setSelectedItemName(cleaned);
  };

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
        Shopping List + Meal Ideas
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left column: add + list */}
        <div className="md:w-1/2 space-y-6">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* Right column: meal ideas */}
        <div className="md:w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
