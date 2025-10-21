import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
      <h1 className="text-4xl font-bold text-center text-gray-900">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}