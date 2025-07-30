import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartUIContextType {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
}

const CartUIContext = createContext<CartUIContextType | null>(null);

export const CartUIProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen(prev => !prev);

  const value = {
    isCartOpen,
    openCart,
    closeCart,
    toggleCart,
  };

  return (
    <CartUIContext.Provider value={value}>
      {children}
    </CartUIContext.Provider>
  );
};

export const useCartUI = () => {
  const context = useContext(CartUIContext);
  if (!context) {
    throw new Error("useCartUI must be used within a CartUIProvider");
  }
  return context;
};
