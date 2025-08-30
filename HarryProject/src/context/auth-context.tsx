// context/auth-context.tsx
<<<<<<< HEAD
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
=======
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f

interface User {
  _id: string;
  name: string;
  email: string;
<<<<<<< HEAD
=======
  
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (user: User) => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
<<<<<<< HEAD
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/check-auth`,
          {
            credentials: "include",
          }
        );

=======
        const res = await fetch('http://localhost:5000/api/auth/check-auth', {
          credentials: 'include',
        });
        
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        }
      } catch (error) {
<<<<<<< HEAD
        console.error("Auth check failed:", error);
=======
        console.error('Auth check failed:', error);
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = (userData: User) => {
    setUser(userData);
<<<<<<< HEAD
    router.push("/shop");
  };

  const logout = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setUser(null);
      router.push("/log-in");
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
=======
    router.push('/shop');
  };

  const logout = async () => {
    await fetch('http://localhost:5000/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });
    setUser(null);
    router.push('/log-in');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout,}}>
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
      {children}
    </AuthContext.Provider>
  );
};

<<<<<<< HEAD
export const useAuth = () => useContext(AuthContext);
=======
export const useAuth = () => useContext(AuthContext);
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
