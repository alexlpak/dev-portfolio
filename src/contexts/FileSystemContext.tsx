import React, { useContext, useState, createContext, useEffect } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCalculator, faGamepad, faHeart, faMobile, faNoteSticky, faStar } from '@fortawesome/free-solid-svg-icons';

export interface FileType {
    filename: string;
    icon: IconProp;
    onOpen?: () => void;
    preview: Preview;
};

export const EmptyFile: FileType = {
    filename: '',
    icon: faStar,
    preview: {
        title: '',
        thumbnailSrc: '',
        description: '',
        tags: [''],
        repo: '',
        href: ''
    }
};

export interface Preview {
    title: string;
    thumbnailSrc: string;
    description: string;
    tags: string[];
    repo: string;
    href: string;
};

export interface Directory {
    directory: string;
    files: FileType[];
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
                                preview: {
                                    title: `Shatter'd Cell Solutions`,
                                    thumbnailSrc: '',
                                    description: 'Created for a cell phone repair shop in Edmond, Oklahoma, the goal for this site was to redesign and simplify their site, focusing on user-experience.',
                                    tags: ['React JS', 'Styled Components', 'React Router'],
                                    href: 'https://shatterdcell.com/',
                                    repo: 'https://github.com/alexlpak/shatterd-cell-solutions',
                                }
                            },
                            {
                                filename: `Terry Wedding`,
                                icon: faHeart,
                                preview: {
                                    title: `Terry Wedding`,
                                    thumbnailSrc: '',
                                    description: 'Created for a couple who got married January, 2020. This website introduces the couple to users, as well as providing an intuitive RSVP process that links with a backend database that was setup in Google\'s Firebase Realtime DB.\n\nThe couple was provided a specific page that allows them to view RSVP analytics and manage invited guests.',
                                    tags: ['jQuery', 'Firebase Realtime DB'],
                                    href: 'https://alexlpak.github.io/terry-wedding/',
                                    repo: 'https://github.com/alexlpak/terry-wedding',
                                }
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
                                onOpen: () => alert(`I'm a file!`),
                                preview: {
                                    title: `Pak Wedding`,
                                    thumbnailSrc: '',
                                    description: '',
                                    tags: [],
                                    repo: '',
                                    href: '',
                                }
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
                                preview: {
                                    title: `Code Editor`,
                                    thumbnailSrc: '',
                                    description: '',
                                    tags: [],
                                    repo: '',
                                    href: '',
                                }
                            },
                            {
                                filename: `Calculator`,
                                icon: faCalculator,
                                preview: {
                                    title: `Calculator`,
                                    thumbnailSrc: '',
                                    description: '',
                                    tags: [],
                                    repo: '',
                                    href: '',
                                }
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
                                preview: {
                                    title: `Flappy Bird`,
                                    thumbnailSrc: '',
                                    description: '',
                                    tags: [],
                                    repo: '',
                                    href: '',
                                }
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
    selectedFile: FileType;
    setSelectedFile: React.Dispatch<React.SetStateAction<FileType>>;
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
    const [selectedFile, setSelectedFile] = useState(EmptyFile);

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
        files, setFiles,
        selectedFile, setSelectedFile
    };

    return (
        <FileSystemContext.Provider value={value}>
            {children}
        </FileSystemContext.Provider>
    );
};