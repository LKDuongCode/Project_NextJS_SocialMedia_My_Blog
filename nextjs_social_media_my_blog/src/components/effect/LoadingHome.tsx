"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "../../styles/effect/loadingEffect.css";

export default function LoadingHome() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 1000); // 1000ms = 1 second
    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="lds-ripple">
        <div />
        <div />
      </div>

      <Image
        src={"/loading-background-home.webp"}
        alt={""}
        fill
        className="absolute blur-md -z-10 "
      />
    </div>
  );
}
