"use client";
import { useEffect, useState } from "react";


async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
        ingredient
      )}`
    );
    const data = await res.json();
    return Array.isArray(data?.meals) ? data.meals : [];
  } catch {
    return [];
  }
}

export default function MealIdeas({ ingredient }) 
{
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const list = await fetchMealIdeas(ingredient);
    setMeals(list);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <section className="p-4 rounded border bg-white space-y-3 w-full">
      <h2 className="text-xl font-bold">
        Meal ideas {ingredient ? `for “${ingredient}”` : ""}
      </h2>

      {!ingredient && (
        <p className="text-gray-600">Select an item to see meal ideas.</p>
      )}

      {ingredient && meals.length === 0 && (
        <p className="text-gray-600">No meals found.</p>
      )}

      {meals.length > 0 && (
        <ul className="grid gap-3 sm:grid-cols-2">
          {meals.map((m) => (
            <li
              key={m.idMeal}
              className="flex items-center gap-3 p-2 rounded border"
            >
              <img
                src={m.strMealThumb}
                alt={m.strMeal}
                className="h-12 w-12 rounded object-cover"
              />
              <span className="font-medium">{m.strMeal}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
