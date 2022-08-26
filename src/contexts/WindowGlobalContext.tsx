import React, { useContext, createContext, useRef, useState, SetStateAction } from 'react';
import { Directory } from './FileSystemContext';

interface WindowGlobalContextType {
    windowZIndex: React.MutableRefObject<number>;
    lastClickedWindow: React.MutableRefObject<React.MutableRefObject<null>>;
    windows: WindowInitProps[];
    setWindows: React.Dispatch<SetStateAction<WindowInitProps[]>>;
};

const WindowGlobalContext = createContext({} as WindowGlobalContextType);

export const useWindowGlobalContext = () => {
    return useContext(WindowGlobalContext);
};

interface WindowGlobalContextProviderProps {
    children: React.ReactNode | React.ReactNode[];
};

interface WindowInitProps {
    initDirectory: Directory;
    id: string;
    currentDirectory?: Directory;
};

export const WindowGlobalContextProvider: React.FC<WindowGlobalContextProviderProps> = ({ children }) => {
    const windowZIndex = useRef(999);
    const lastClickedWindow = useRef({} as React.MutableRefObject<null>)
    const [windows, setWindows] = useState([] as WindowInitProps[]);

    const value = {
        windowZIndex,
        lastClickedWindow,
        windows, setWindows
    };

    return (
        <WindowGlobalContext.Provider value={value}>
            {children}
        </WindowGlobalContext.Provider>
    )
};