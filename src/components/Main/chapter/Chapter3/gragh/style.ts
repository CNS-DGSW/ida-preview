import styled from "styled-components";

export const MainGraghLayout = styled.div<{ width: number; height: number }>`
  ${({ width, height }) =>
    `width: ${width}px;
    height: ${height}px;`};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const GraghContentWrapCol = styled.div<{ height: number }>`
  width: 46px;
  height: ${({ height }) => height}px;
`;

interface IGragh {
  height: number;
  startColor: string;
  endColor: string;
}

export const Gragh = styled.div<IGragh>`
  background: linear-gradient(
    ${({ startColor, endColor }) => `${startColor} ,${endColor}`}
  );
  height: ${({ height }) => height}px;
  border-radius: 24px 24px 0px 0px;
`;

export const GraghParagragh = styled.p`
  color: #424344;
  font-size: 1rem;
  margin-bottom: 1rem;
`;
