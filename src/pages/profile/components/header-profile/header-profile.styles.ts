import styled from 'styled-components/native';

export const Container = styled.View`
    padding: ${({ theme }) => theme.METRICS.PADDING}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
