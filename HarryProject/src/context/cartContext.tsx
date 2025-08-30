"use client";

<<<<<<< HEAD
import { createContext, useState, useEffect, ReactNode } from "react";
=======
import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { toast } from "sonner";
import { useAuth } from "./auth-context";
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f

export interface CartItem {
  productId: string;
  quantity: number;
<<<<<<< HEAD
  // You can add more details (name, price, etc.) if needed.
=======
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
}

export interface CartContextProps {
  cartItems: CartItem[];
<<<<<<< HEAD
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateCartItem: (productId: string, quantity: number) => void;
=======
  refreshCart: () => Promise<void>;
  addToCart: (item: CartItem) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  updateCartItem: (productId: string, quantity: number) => Promise<void>;
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
}

export const CartContext = createContext<CartContextProps>({
  cartItems: [],
<<<<<<< HEAD
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartItem: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Sync cart changes to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.productId === item.productId);
      if (existingItem) {
        return prev.map((i) =>
          i.productId === item.productId
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prev) =>
      prev.filter((item) => item.productId !== productId)
    );
  };

  const updateCartItem = (productId: string, quantity: number) => {
    setCartItems((prev) => {
      // Remove item if quantity is less than 1
      if (quantity < 1) {
        return prev.filter((item) => item.productId !== productId);
      }
      return prev.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      );
    });
=======
  refreshCart: async () => {},
  addToCart: async () => {},
  removeFromCart: async () => {},
  updateCartItem: async () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Refresh the cart from the backend for the logged-in user.
  const refreshCart = async () => {
    if (!user) {
      setCartItems([]);
      return;
    }
    try {
      const res = await fetch("/api/cart", {
        method: "GET",
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        // Expect the returned data to have an "items" array
        setCartItems(data.items || []);
      } else {
       // toast.error("Failed to load cart.");
      }
    } catch (error) {
      toast.error("Error loading cart.");
    }
  };

  useEffect(() => {
    refreshCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const addToCart = async (item: CartItem) => {
    if (!user) {
      toast.error("Please log in to add items to your cart.");
      return;
    }
    try {
      const res = await fetch("/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(item),
      });
      if (res.ok) {
        toast.success("Added successfully!");
        refreshCart();
      } else {
        toast.error("Failed to add item.");
      }
    } catch (error) {
      toast.error("Error adding item.");
    }
  };

  const removeFromCart = async (productId: string) => {
    if (!user) return;
    try {
      const res = await fetch("/api/cart/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ productId }),
      });
      if (res.ok) {
        toast.success("Item removed.");
        refreshCart();
      } else {
        toast.error("Failed to remove item.");
      }
    } catch (error) {
      toast.error("Error removing item.");
    }
  };

  const updateCartItem = async (productId: string, quantity: number) => {
    if (!user) return;
    try {
      const res = await fetch("/api/cart/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ productId, quantity }),
      });
      if (res.ok) {
        toast.success("Cart updated.");
        refreshCart();
      } else {
        toast.error("Failed to update item.");
      }
    } catch (error) {
      toast.error("Error updating cart.");
    }
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
  };

  return (
    <CartContext.Provider
<<<<<<< HEAD
      value={{ cartItems, addToCart, removeFromCart, updateCartItem }}
=======
      value={{ cartItems, refreshCart, addToCart, removeFromCart, updateCartItem }}
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
    >
      {children}
    </CartContext.Provider>
  );
};
