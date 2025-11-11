"use client";

import { useMemo, useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const view = useMemo(() => {
    const copy = Array.isArray(items) ? [...items] : [];
    copy.sort((a, b) => {
      const primary =
        sortBy === "name"
          ? a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
          : a.category.localeCompare(b.category, undefined, {
              sensitivity: "base",
            });
      if (primary !== 0) return primary;
      return a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
    });
    return copy;
  }, [items, sortBy]);

  const button = "px-3 py-1 rounded border transition";
  const active = "bg-blue-600 text-white border-blue-600";
  const inactive = "bg-white text-gray-800 border-gray-300 hover:bg-gray-50";

  return (
    <section className="space-y-4 p-4">
      <div className="flex gap-2">
        <button
          className={`${button} ${sortBy === "name" ? active : inactive}`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`${button} ${sortBy === "category" ? active : inactive}`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>

      <ul className="divide-y rounded border">
        {view.map((it) => (
          <Item
            key={it.id}
            name={it.name}
            quantity={it.quantity}
            category={it.category}
            onSelect={() => onItemSelect?.(it)}
          />
        ))}
      </ul>
    </section>
  );
}
