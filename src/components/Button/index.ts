import Button from "./Button";

export interface Props {
  title: string;
  onClick: () => void;
  className?: string;
}

export default Button;
