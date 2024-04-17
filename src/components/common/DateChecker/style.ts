import styled from "styled-components";

export const DateCheckerLayout = styled.div`
  width: 600px;
  height: 537px;
  word-break: keep-all;
  margin-top: 60px;
`;

export const DateCheckerDay = styled.h1`
  color: #1485ee;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 201px;
  font-family: Pretendard;
  font-weight: 700;
  letter-spacing: -8.04px;
`;

export const DateCheckerTime = styled.h3`
  color: #1485ee;
  text-align: center;
  text-align: center;
  font-size: 46px;
  font-family: Pretendard;
  font-weight: 700;
  letter-spacing: -1.84px;
`;
export const DateCheckerDateBox = styled.div``;

const DateCheckerDate = styled.h2`
  color: #212121;
  text-align: center;
  font-size: 47px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 68px;
  letter-spacing: -1.88px;
`;

export const DateCheckeStartDate = styled(DateCheckerDate)``;

export const DateCheckerEndDate = styled(DateCheckerDate)``;
export const DateCheckerDescription = styled.p`
  width: 481px;
  color: #424344;
  text-align: center;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.8px;
  margin: 1rem auto;
`;
