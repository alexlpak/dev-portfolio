import React, { useContext, useState, createContext, useEffect } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export interface File {
    filename: string;
    icon: IconProp;
    onOpen: () => void;
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
        files: [
            {
                filename: 'test',
                icon: faStar,
                onOpen: () => alert(`I'm a file!`)
            },
            {
                filename: 'test2',
                icon: faStar,
                onOpen: () => alert(`I'm a different file!`)
            }
        ],
        folders: [
            {
                directory: 'pizza',
                files: [],
                folders: [
                    {
                        directory: 'curry',
                        files: [],
                        folders: []
                    }
                ]
            },
            {
                directory: 'images',
                files: [
                    {
                        filename: 'hello',
                        icon: faStar,
                        onOpen: () => {}
                    },
                    {
                        filename: 'random',
                        icon: faStar,
                        onOpen: () => {}
                    }
                ],
                folders: [
                    {
                        directory: 'other',
                        files: [
                            {
                                filename: 'file-yo',
                                icon: faStar,
                                onOpen: () => {}
                            }
                        ],
                        folders: [
                            {
                                directory: 'further down',
                                files: [],
                                folders: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        directory: 'Documents',
        files: [
            {
                filename: 'test',
                icon: faStar,
                onOpen: () => {}
            }
        ],
        folders: [
            {
                directory: 'word',
                files: [
                    {
                        filename: 'test',
                        icon: faStar,
                        onOpen: () => {}
                    }
                ],
                folders: []
            }
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

interface FormContextProviderProps {
    children: React.ReactNode | React.ReactNode[];
};

export const FileSystemContextProvider: React.FC<FormContextProviderProps> = ({ children }) => {
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