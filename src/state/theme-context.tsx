'use client';
import React from 'react';

type ThemeContextType = {
  isOpenSidebar: boolean;
  toggleSidebar(): void;
};

const ThemeContext = React.createContext<ThemeContextType>({
  isOpenSidebar: false,
  toggleSidebar: () => {},
});

export const ThemeProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isOpenSidebar, setOpenSidebar] = React.useState<boolean>(false);
  const toggleSidebar = (): void => {
    setOpenSidebar(!isOpenSidebar);
  };
  return (
    <ThemeContext.Provider
      value={{
        isOpenSidebar,
        toggleSidebar,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
