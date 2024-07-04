import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mt-[94px] flex justify-center h-[600px]">
      <SignUp />
    </div>
  );
}
