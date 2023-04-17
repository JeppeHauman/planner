"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta/client";

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center overflow-x-hidden">
      <SignedOut>
        <SignInButton mode="modal">
          <button className=" border rounded-md border-neutral-200 py-1 px-3">
            Sign in
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton></UserButton>
        <h1>Logged in motherfucker</h1>
      </SignedIn>
      <h1 className="text-6xl text-center mt-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-emerald-500">
        THIS IS THE PLANNER APPLICATION MY FRIENDS! AYOOO
      </h1>
    </div>
  );
}
