import { createContext, useState } from "react";

export const CustomContext = createContext();
export const CustomContextProvider = ({ children }) => {
  const [mode, setMode] = useState(false);
  console.log(mode);
  return (
    <CustomContext.Provider value={[mode, setMode]}>
      {children}
    </CustomContext.Provider>
  );
};
