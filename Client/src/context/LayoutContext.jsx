import { createContext, useContext, useState } from "react";

const LayoutContext = createContext(null);

export function LayoutProvider({ children }) {
  const [isTicketViewsOpen, setIsTicketViewsOpen] = useState(true);
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <LayoutContext.Provider value={{ isTicketViewsOpen, setIsTicketViewsOpen, isCreateOpen, setIsCreateOpen }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const ctx = useContext(LayoutContext);
  if (!ctx) {
    throw new Error("useLayout must be used within LayoutProvider");
  }
  return ctx;
}
