"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Seller = { name: string; email: string } | null;

type SellerAuthContextType = {
  seller: Seller;
  setSeller: (seller: Seller) => void;
  logoutSeller: () => Promise<void>;
  loading: boolean;
};

const SellerAuthContext = createContext<SellerAuthContextType | undefined>(
  undefined
);

export function SellerAuthProvider({ children }: { children: React.ReactNode }) {
  const [seller, setSeller] = useState<Seller>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/seller/check-auth`,
          {
            credentials: "include", // Ensure cookies are sent
          }
        );

        if (!res.ok) throw new Error("Not authenticated");

        const data = await res.json();
        setSeller(data.seller ?? null); // safely set seller
      } catch (error) {
        setSeller(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const logoutSeller = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/seller/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Seller logout failed:", error);
    } finally {
      setSeller(null);
    }
  };

  return (
    <SellerAuthContext.Provider
      value={{ seller, setSeller, logoutSeller, loading }}
    >
      {children}
    </SellerAuthContext.Provider>
  );
}

export function useSellerAuth() {
  const context = useContext(SellerAuthContext);
  if (!context) {
    throw new Error("useSellerAuth must be used within a SellerAuthProvider");
  }
  return context;
}
