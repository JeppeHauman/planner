import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Planner",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-white">
        <nav>
          <div className="flex gap-3 p-3 bg-slate-800">
            <Link href={"/calendar"}>Calendar</Link>
            <Link href={"/employees"}>Employees</Link>
          </div>
        </nav>
        <main className="p-3">{children}</main>
      </body>
    </html>
  );
}
