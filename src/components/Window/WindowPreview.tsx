import styled from 'styled-components';
import { Preview } from '../../contexts/FileSystemContext';
import { theme } from '../../styles/theme';
import ButtonLink from '../ButtonLink';
import Chip from '../Chip';
import FlexGroup from '../FlexGroup';
import Typography from '../Typography';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const WindowPreviewWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    background-color: ${theme.colors.darkTransparentLite};
    color: white;
    padding: 1rem;
    width: 18rem;
    font-family: 'Open Sans', sans-serif;
    line-height: normal;
    height: 100%;
    & a {
        color: white;
    };
`;

interface WindowThumbnailProps {
    $thumbnailSrc: string;
};

const WindowThumbnail = styled.div<WindowThumbnailProps>`
    @keyframes loading {
        from {
            background-color: rgba(255 255 255 / 5%);
        };
        to {
            background-color: rgba(255 255 255 / 25%);
        };
    };
    animation: 1s infinite alternate loading;
    background: url(${({ $thumbnailSrc }) => $thumbnailSrc});
    background-size: contain;
    width: 16rem;
    height: 9rem;
    border-radius: .5rem;
    flex-shrink: 0;
    transition: all 100ms ease;
`;

const WindowPreview: React.FC<Preview> = ({ title, thumbnailSrc, description, tags, href, repo, download, filesize }) => {
    const windowPreviewRef = useRef(null);

    return (
        <WindowPreviewWrapper
            ref={windowPreviewRef}
        >
            {title && <Typography textAlign='center' size='1.25rem'>{title}</Typography>}
            <WindowThumbnail $thumbnailSrc={thumbnailSrc} />
            {description && <Typography>{description}</Typography>}
            {tags && <FlexGroup centered>                
                {tags && tags.map(tag => {
                    return (
                        <Chip
                            key={`${tag}-${title}`}
                            color='black'
                            backgroundColor='white'
                        >
                            {tag}
                        </Chip>
                    )
                })}
            </FlexGroup>}
            {href && <ButtonLink filesize={filesize} download={download} href={href} target='_blank'>{download ? 'Download' : 'View Deployment'}</ButtonLink>}
            {repo && <ButtonLink href={repo} target='_blank'>View Source Code</ButtonLink>}
        </WindowPreviewWrapper>
    );
};

export default WindowPreview;