import React, { useCallback, useContext, useMemo, useState } from "react";

const Context = React.createContext({
  collapsed: false,
  open: () => {},
  close: () => {},
  toggle: () => {},
});

export const useNav = () => useContext(Context);

const NavController = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = useCallback(() => setCollapsed(!collapsed), [collapsed]);
  const open = useCallback(() => setCollapsed(false), []);
  const close = useCallback(() => setCollapsed(true), []);

  const value = useMemo(() => {
    return { collapsed, open, close, toggle };
  }, [collapsed, open, close, toggle]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};


// you can also split the function from the values 
//use an also split with reducer||
//

export default NavController;
