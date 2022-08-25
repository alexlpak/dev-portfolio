import React, { useContext, createContext, useRef } from 'react';

interface WindowGlobalContextType {
    windowZIndex: React.MutableRefObject<number>;
    lastClickedWindow: React.MutableRefObject<React.MutableRefObject<null>>;
};

const WindowGlobalContext = createContext({} as WindowGlobalContextType);

export const useWindowGlobalContext = () => {
    return useContext(WindowGlobalContext);
};

interface WindowGlobalContextProviderProps {
    children: React.ReactNode | React.ReactNode[];
};

export const WindowGlobalContextProvider: React.FC<WindowGlobalContextProviderProps> = ({ children }) => {
    const windowZIndex = useRef(999);
    const lastClickedWindow = useRef({} as React.MutableRefObject<null>)

    const value = {
        windowZIndex,
        lastClickedWindow
    };

    return (
        <WindowGlobalContext.Provider value={value}>
            {children}
        </WindowGlobalContext.Provider>
    )
};