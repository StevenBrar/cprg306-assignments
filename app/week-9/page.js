"use client";

import Link from "next/link";
import { useUserAuth } from "../context/AuthContext";

export default function Week9LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => { try { await gitHubSignIn(); } catch (e) { console.error(e); } };
  const handleLogout = async () => { try { await firebaseSignOut(); } catch (e) { console.error(e); } };

  return (
    <main className="mx-auto max-w-3xl p-6">
      {!user ? (
        <>
          <h1 className="text-3xl font-bold mb-4">Welcome to the App</h1>
          <button className="rounded bg-black px-4 py-2 text-white" onClick={handleLogin}>
            Sign in with GitHub
          </button>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-semibold mb-2">
            Welcome, {user.displayName} ({user.email})
          </h1>
          <div className="flex items-center gap-3">
            <button className="rounded bg-gray-200 px-3 py-2" onClick={handleLogout}>Logout</button>
            <Link className="rounded bg-blue-600 px-3 py-2 text-white" href="/week-9/shopping-list">
              Go to Shopping List
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
