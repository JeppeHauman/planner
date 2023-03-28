import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="flex gap-3">
        <Link href={"/calendar"}>Calender</Link>
        <Link href={"/employees"}>Employees</Link>
      </div>
    </main>
  );
}
