import React, { useContext, useState, createContext, useEffect } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGamepad, faHeart, faMobile, faNoteSticky, faStar } from '@fortawesome/free-solid-svg-icons';
import ShatterdCellThumbnail from '../assets/images/shatterd-cell-thumbnail.jpg';
import TerryWeddingThumbnail from '../assets/images/terry-wedding-thumbnail.jpg';
import PakWeddingThumbnail from '../assets/images/pak-wedding-thumbnail.jpg';
import CodeEditorThumbnail from '../assets/images/code-editor-thumbnail.jpg';
import FlappyThumbnail from '../assets/images/ap-flappy-thumbnail.jpg';
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
                directory: 'Client Work',
                files: [
                    {
                        filename: `Shatter'd Cell Solutions`,
                        icon: faMobile,
                        preview: {
                            title: `Shatter'd Cell Solutions`,
                            thumbnailSrc: ShatterdCellThumbnail,
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
                            thumbnailSrc: TerryWeddingThumbnail,
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
                        preview: {
                            title: `Pak Wedding`,
                            thumbnailSrc: PakWeddingThumbnail,
                            description: 'This site was created for my own wedding on November 6th, 2022. The goal for this site was to create something incredibly easy to use for our guests. The database used is AirTable and the backend is a Heroku-deployed Express application.',
                            tags: ['React JS', 'TypeScript', 'Styled Components', 'Express', 'AirTable'],
                            repo: 'https://github.com/alexlpak/joining-the-pak',
                            href: 'https://www.joiningthepak.com/',
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
                            thumbnailSrc: CodeEditorThumbnail,
                            description: 'A simple code editor that highlights basic JavaScript syntax.',
                            tags: ['React', 'SCSS'],
                            repo: 'https://github.com/alexlpak/code-editor',
                            href: 'https://ap-code-editor.netlify.app/',
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
                            thumbnailSrc: FlappyThumbnail,
                            description: 'A simple "Flappy Bird" clone using Phaser JS and TypeScript."',
                            tags: ['Phaser JS', 'TypeScript'],
                            repo: 'https://github.com/alexlpak/ap-flappy',
                            href: 'https://ap-flappy.netlify.app/',
                        }
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