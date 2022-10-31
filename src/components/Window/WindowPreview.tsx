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
    background-color: rgb(59 59 59 / 50%);
    color: white;
    padding: 1rem;
    max-width: 18rem;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: normal;
    & a {
        color: white;
    }
`;

interface WindowThumbnailProps {
    $thumbnailSrc: string;
};

const WindowThumbnail = styled.div<WindowThumbnailProps>`
    background-image: url(${({ $thumbnailSrc }) => $thumbnailSrc || 'orange'});
    background-size: contain;
    width: 16rem;
    height: 9rem;
    border-radius: .5rem;
`;

const WindowPreview: React.FC<Preview> = ({ title, thumbnailSrc, description, tags, href, repo: source }) => {
    return (
        <WindowPreviewWrapper>
            {title && <Typography size='1.25rem'>{title}</Typography>}
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
            {href && <ButtonLink href={href} target='_blank'>View Deployment</ButtonLink>}
            {/* {source && <ButtonLink href={source} target='_blank'>View Source Code</ButtonLink>} */}
        </WindowPreviewWrapper>
    );
};

export default WindowPreview;