// app/shop/layout.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/check-auth`,
          {
            credentials: "include", // ensures cookies (token/session) are sent
          }
        );

        if (res.ok) {
          setAuthorized(true);
        } else {
          router.replace("/log-in"); // use replace to prevent "back" going to protected page
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        router.replace("/log-in");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) return <p>Checking access...</p>;

  return <>{authorized && children}</>;
}
