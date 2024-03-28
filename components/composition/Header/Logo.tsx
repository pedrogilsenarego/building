"use client";

import { ROUTE_PATHS } from "@/constants/router";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(ROUTE_PATHS.HOME)}
      className="cursor-pointer"
    >
      <p>Logo</p>
    </div>
  );
};

export default Logo;
