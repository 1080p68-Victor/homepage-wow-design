import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

export interface CustomerInfo {
  fullName: string;
  phone: string;
  email: string;
  country: string;
  city: string;
  deliveryMethod: string;
  warehouse: string;
  address: string;
  paymentMethod: string;
  paymentSystem: string;
}

interface CartContextType {
  items: CartItem[];
  customerInfo: CustomerInfo;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  updateCustomerInfo: (info: Partial<CustomerInfo>) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
}

const defaultCustomerInfo: CustomerInfo = {
  fullName: '',
  phone: '',
  email: '',
  country: 'Ukraine',
  city: '',
  deliveryMethod: '',
  warehouse: '',
  address: '',
  paymentMethod: '',
  paymentSystem: '',
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'vvlen_cart';
const CUSTOMER_STORAGE_KEY = 'vvlen_customer';

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>(() => {
    const saved = localStorage.getItem(CUSTOMER_STORAGE_KEY);
    return saved ? { ...defaultCustomerInfo, ...JSON.parse(saved) } : defaultCustomerInfo;
  });

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem(CUSTOMER_STORAGE_KEY, JSON.stringify(customerInfo));
  }, [customerInfo]);

  const addItem = (item: CartItem) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id && i.size === item.size && i.color === item.color);
      if (existing) {
        return prev.map(i => 
          i.id === item.id && i.size === item.size && i.color === item.color
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const updateCustomerInfo = (info: Partial<CustomerInfo>) => {
    setCustomerInfo(prev => ({ ...prev, ...info }));
  };

  const clearCart = () => {
    setItems([]);
    setCustomerInfo(defaultCustomerInfo);
    localStorage.removeItem(CART_STORAGE_KEY);
    localStorage.removeItem(CUSTOMER_STORAGE_KEY);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 2000 ? 0 : 150;
  const total = subtotal + deliveryFee;

  return (
    <CartContext.Provider value={{
      items,
      customerInfo,
      addItem,
      removeItem,
      updateQuantity,
      updateCustomerInfo,
      clearCart,
      totalItems,
      subtotal,
      deliveryFee,
      total,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
