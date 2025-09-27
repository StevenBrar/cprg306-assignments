import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="max-w-2xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold text-center text-gray-900">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;