"use client";

import { db } from "../../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

/**
 * @param {string} userId // fix?
 * @returns {Promise<Array<{id: string, name: string, quantity: number, category: string}>>} // this as well
 */
export async function getItems(userId) {
  if (!userId) return [];

  const itemsRef = collection(db, "users", userId, "items");
  const q = query(itemsRef);

  const snapshot = await getDocs(q);

  const items = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return items;
}

/**
 * @param {string} userId
 * @param {{name: string, quantity: number, category: string}} item
 * @returns {Promise<string>}
 */
export async function addItem(userId, item) {
  if (!userId) {
    throw new Error("User ID is required to add an item");
  }

  const itemsRef = collection(db, "users", userId, "items");

  const docRef = await addDoc(itemsRef, {
    name: item.name,
    quantity: item.quantity,
    category: item.category,
  });

  return docRef.id;
}
