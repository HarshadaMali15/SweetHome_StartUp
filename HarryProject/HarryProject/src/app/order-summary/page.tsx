"use client";

import { Suspense } from "react";
import OrderSummaryPage from "./OrderSummaryPage";

export default function OrderSummaryPageWrapper() {
  return (
    <Suspense fallback={<p>Loading order-summary...</p>}>
      <OrderSummaryPage />
    </Suspense>
  );
}
