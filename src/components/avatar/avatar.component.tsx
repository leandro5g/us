import React from 'react';

import { Container, ImageAvatar } from './avatar.styles';

const Avatar: React.FC = () => {
    return (
        <Container>
            <ImageAvatar
                source={{
                    uri: 'https://avatars.githubusercontent.com/u/100235332?v=4'
                }}
            />
        </Container>
    );
};

export { Avatar };
