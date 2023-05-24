"use client";

import { CldImage } from "next-cloudinary";
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
      </SignedIn>
      <h1 className="p-4 text-6xl text-center mt-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-emerald-500">
        Welcome to Planner <br />
        The only app you need for managing your business
      </h1>
    </div>
  );
}
