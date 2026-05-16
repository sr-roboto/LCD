import { Suspense } from "react";
import LandingView from "@/views/LandingView";
import PageSkeleton from "@/components/PageSkeleton";

export default function Home() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <LandingView />
    </Suspense>
  );
}
