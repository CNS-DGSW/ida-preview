import Image from "next/image";
import styled, { css, keyframes } from "styled-components";

export const NavbarLayout = styled.nav<{
  isDisabled: boolean;
  isDark: boolean;
  isFiexd: boolean;
}>`
  display: ${({ isDisabled }) => (isDisabled ? "none" : "flex")};
  width: 100vw;
  min-height: 60px;
  top: 0;
  margin-bottom: 20px;
  z-index: 1;
  font-size: 14px;
  font-weight: 600;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;

  ${({ isDark }) =>
    !isDark &&
    css`
      background-color: white;
    `}

  ${({ isFiexd }) =>
    isFiexd &&
    css`
      position: fixed;
      top: 0px;
      border-bottom: none;
    `}
`;

const fadein = keyframes`
  from{
    opacity:0
  }to{
    opacity:1
  }
  `;

export const NavbarList = styled.ul<{ isDark: boolean }>`
  width: 989px;
  display: flex;
  justify-content: space-between;
  animation-duration: 1s;
  animation-name: ${fadein};
  transition: 1s;
  svg {
    width: 102px;
    flex-shrink: 0;
    transition: 1s;
    fill: ${({ isDark }) => (isDark ? "#fafafa" : "#424344")};
  }
  @media screen and (max-width: 500px) {
    width: 100vw;
    display: block;
  }

  ${({ isDark }) =>
    isDark &&
    css`
      a {
        transition: 1s;
        color: #fafafa;
      }
      ${NavbarDot} {
        transition: 1s;
        background-color: #fafafa;
      }
    `}
`;
export const NavbarLeftBox = styled.div`
  @media screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #404040;
  }
`;

export const NavbarRightBox = styled.div<{
  isActive: boolean;
  isDark: boolean;
}>`
  width: 350px;
  display: flex;
  z-index: 10;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    padding-top: ${({ isActive }) => (isActive ? "0.3175rem" : "0rem")};
    position: absolute;
    height: ${({ isActive }) => (isActive ? "13.75rem" : "0rem")};
    display: flex;
    flex-direction: column;
    justify-content: none;
    overflow: hidden;
    width: 100%;
    ${({ isDark }) =>
      !isDark &&
      css`
        background-color: white;
      `}

    border-bottom: 1px solid #e0e0e0;
  }
`;

export const NavbarAuthBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;

export const NavbarDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #424344;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const NavContents = styled.div`
  @media screen and (max-width: 500px) {
    text-align: center;
    width: 98%;
    margin: 0px auto;
    margin-bottom: 5px;
    border: 1px solid #e7e9ed;
    border-radius: 8px;
  }
`;

export const ContentsButton = styled(Image)`
  display: none;
  position: absolute;
  right: 0;
  margin-right: 1.25rem;
  z-index: 10;
  width: 20px;
  @media screen and (max-width: 500px) {
    display: inline-block;
    max-width: 20px;
  }
`;
