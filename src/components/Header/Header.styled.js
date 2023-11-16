import styled, { keyframes } from "styled-components";

export const MainHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #000000d1;
  padding: 36px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const OptionsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  transition: all 250ms ease;
  cursor: pointer;
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const OptBox = styled.div`
  padding: 8px 0;
  position: absolute;
  bottom: -115px;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: white;
  animation: ${fadeIn} 250ms ease-in-out;
`;
export const Opt = styled.a`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 4px 24px;
  background-color: white;
  color: black;
  &:hover {
    background-color: #d9d9d9;
  }
`;
export const LogIn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 8px;
  padding: 13px 24px;
  color: white;
  transition: all 250ms ease;
  &:hover {
    background-color: #272525;
  }
`;
export const Register = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px 24px;
  border-radius: 8px;
  background-color: white;
  transition: all 250ms ease;
  color: #000;
  &:hover {
    background-color: lightgrey;
  }
`;
