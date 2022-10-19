import styled from 'styled-components';
import { Preview } from '../../contexts/FileSystemContext';
import ButtonLink from '../ButtonLink';
import Chip from '../Chip';
import FlexGroup from '../FlexGroup';
import Typography from '../Typography';

const WindowPreviewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    background-color: #3b3b3b;
    color: white;
    padding: 1rem;
    max-width: 18rem;
    & a {
        color: white;
    }
`;

interface WindowThumbnailProps {
    $thumbnailSrc: string;
};

const WindowThumbnail = styled.div<WindowThumbnailProps>`
    background-color: ${({ $thumbnailSrc }) => $thumbnailSrc || 'orange'};
    width: 16rem;
    height: 9rem;
    border-radius: .5rem;
`;

const WindowPreview: React.FC<Preview> = ({ title, thumbnailSrc, description, tags, href, repo: source }) => {
    return (
        <WindowPreviewWrapper>
            {title && <Typography>{title}</Typography>}
            <WindowThumbnail $thumbnailSrc={thumbnailSrc} />
            {description && <Typography>{description}</Typography>}
            {tags && <FlexGroup>                
                {tags && tags.map(tag => {
                    return (
                        <Chip
                            color='black'
                            backgroundColor='white'
                        >
                            {tag}
                        </Chip>
                    )
                })}
            </FlexGroup>}
            {href && <ButtonLink href={href} target='_blank'>View Deployment</ButtonLink>}
            {source && <ButtonLink href={source} target='_blank'>View Source Code</ButtonLink>}
        </WindowPreviewWrapper>
    );
};

export default WindowPreview;