import React, { useContext, useState, createContext } from 'react';

interface WindowGlobalContextType {
    windowZIndex: number;
    setWindowZIndex: React.Dispatch<React.SetStateAction<number>>;
    lastClickedWindow: React.MutableRefObject<null>;
    setLastClickedWindow: React.Dispatch<React.SetStateAction<React.MutableRefObject<null>>>;
};

const WindowGlobalContext = createContext({} as WindowGlobalContextType);

export const useWindowGlobalContext = () => {
    return useContext(WindowGlobalContext);
};

interface WindowGlobalContextProviderProps {
    children: React.ReactNode | React.ReactNode[];
};

export const WindowGlobalContextProvider: React.FC<WindowGlobalContextProviderProps> = ({ children }) => {
    const [windowZIndex, setWindowZIndex] = useState(999);
    const [lastClickedWindow, setLastClickedWindow] = useState({} as React.MutableRefObject<null>)

    const value = {
        windowZIndex, setWindowZIndex,
        lastClickedWindow, setLastClickedWindow
    };

    return (
        <WindowGlobalContext.Provider value={value}>
            {children}
        </WindowGlobalContext.Provider>
    )
};