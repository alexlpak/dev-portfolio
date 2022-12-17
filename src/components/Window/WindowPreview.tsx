import styled from 'styled-components';
import { Preview } from '../../contexts/FileSystemContext';
import { theme } from '../../styles/theme';
import ButtonLink from '../ButtonLink';
import Chip from '../Chip';
import FlexGroup from '../FlexGroup';
import Typography from '../Typography';

const WindowPreviewWrapper = styled.div`
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
    & a {
        color: white;
    }
`;

interface WindowThumbnailProps {
    $thumbnailSrc: string;
};

const WindowThumbnail = styled.div<WindowThumbnailProps>`
    background-image: url(${({ $thumbnailSrc }) => $thumbnailSrc || 'white'});
    background-size: contain;
    width: 16rem;
    height: 9rem;
    border-radius: .5rem;
`;

const WindowPreview: React.FC<Preview> = ({ title, thumbnailSrc, description, tags, href, repo, download, filesize }) => {
    return (
        <WindowPreviewWrapper>
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