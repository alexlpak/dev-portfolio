import React, { useContext, useState, createContext, useEffect } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCalculator, faGamepad, faHeart, faMobile, faNoteSticky, faStar } from '@fortawesome/free-solid-svg-icons';

export interface File {
    filename: string;
    icon: IconProp;
    onOpen: () => void;
    preview?: Preview;
};

interface Preview {
    thumbnailSrc: string;
    description: string;
    tags?: string[];
};

export interface Directory {
    directory: string;
    files: File[];
    folders: FolderArray;
    parent?: Directory;
};

interface FolderArray extends Array<Directory> { }

export type Directories = Directory[];

const data: Directories = [
    {
        directory: 'Desktop',
        files: [],
        folders: [
            {
                directory: 'Projects',
                files: [],
                folders: [
                    {
                        directory: 'Client Work',
                        files: [
                            {
                                filename: `Shatter'd Cell Solutions`,
                                icon: faMobile,
                                onOpen: () => alert(`I'm a file!`)
                            },
                            {
                                filename: `Terry Wedding`,
                                icon: faHeart,
                                onOpen: () => alert(`I'm a file!`)
                            },
                        ],
                        folders: []
                    },
                    {
                        directory: 'Personal',
                        files: [
                            {
                                filename: `Pak Wedding`,
                                icon: faHeart,
                                onOpen: () => alert(`I'm a file!`)
                            },
                        ],
                        folders: []
                    },
                    {
                        directory: 'Tools',
                        files: [
                            {
                                filename: `Code Editor`,
                                icon: faNoteSticky,
                                onOpen: () => alert('Well howdy!')
                            },
                            {
                                filename: `Calculator`,
                                icon: faCalculator,
                                onOpen: () => alert('beep beep boop')
                            }
                        ],
                        folders: []
                    },
                    {
                        directory: 'Games',
                        files: [
                            {
                                filename: `Flappy Bird`,
                                icon: faGamepad,
                                onOpen: () => alert('flap flap crash')
                            }
                        ],
                        folders: []
                    }
                ]
            },
        ]
    },
];

interface FileSystemContextType {
    files: Directories;
    setFiles: React.Dispatch<React.SetStateAction<Directories>>;
};

const FileSystemContext = createContext<FileSystemContextType>({} as FileSystemContextType);

export const useFileSystemContext = () => {
    return useContext(FileSystemContext);
};

interface FileSystemContextProviderProps {
    children: React.ReactNode | React.ReactNode[];
};

export const FileSystemContextProvider: React.FC<FileSystemContextProviderProps> = ({ children }) => {
    const [files, setFiles] = useState(data);

    const addParentToObject = (directory: Directory) => {
        directory.folders.forEach(folder => {
            folder.parent = directory;
            addParentToObject(folder);
        });
    };
    
    const addParentToFiles = (directories: Directories) => {
        directories.forEach(directory => {
            addParentToObject(directory);
        });
    };

    useEffect(() => {
        addParentToFiles(files);
        // eslint-disable-next-line
    }, [files]);

    const value = {
        files, setFiles
    };

    return (
        <FileSystemContext.Provider value={value}>
            {children}
        </FileSystemContext.Provider>
    );
};