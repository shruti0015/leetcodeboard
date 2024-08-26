"use client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { MyForm } from "@/components/custom/lc-form";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/problems");
  };
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center items-center overflow-hidden py-6 sm:py-12">
        <div className="flex flex-col justify-center items-center space-y-4 border border-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:rounded-lg sm:px-10">
          <Button onClick={handleButtonClick}>Go to WhiteBoard</Button>
          <ModeToggle />
        </div>
      </div>
    </>
  );
}