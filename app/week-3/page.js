import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;