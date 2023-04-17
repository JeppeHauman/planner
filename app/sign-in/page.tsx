import { SignIn } from "@clerk/nextjs/app-beta";

export default async function Page({ searchParams }: any) {
  const { redirectUrl } = searchParams;

  return (
    <div className="flex justify-center items-center h-full">
      <SignIn redirectUrl={redirectUrl || "/"} />
    </div>
  );
}
