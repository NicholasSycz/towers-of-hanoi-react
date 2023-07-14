import styled from 'styled-components';

// generates a unique color for each disk based on its size
const generateDiskColor = (size: number): string => {
    const hue = (size * 120) % 360;
    return `hsl(${hue}, 80%, 60%)`;
  };

export const DiskWrapper = styled.div<{ size: number }>`
    height: 20px;
    border-radius: 3px;
    margin-bottom: 3px;
    width: ${({ size }) => size * 60}px;
    background-color: ${({ size }) => generateDiskColor(size)};
`;
