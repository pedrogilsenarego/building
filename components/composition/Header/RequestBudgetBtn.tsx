"use client";

import { Button } from "@/components/ui/button";
import { ROUTE_PATHS } from "@/constants/router";
import { useRouter } from "next/navigation";

const RequestBudgetBtn = () => {
  const router = useRouter();
  return (
    <Button
      size="lg"
      variant="secondary"
      onClick={() => router.push(ROUTE_PATHS.REQUEST_BUDGET)}
    >
      Pedir Orçamento
    </Button>
  );
};

export default RequestBudgetBtn;
