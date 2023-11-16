import { Btn } from "./Button.styled";

export const Button = ({ children, fnClick }) => {
  return <Btn onClick={fnClick}>{children}</Btn>;
};
