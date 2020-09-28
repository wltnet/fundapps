import * as React from "react";
import { Wrapper } from "./styled";
import { Props } from ".";

const Button = ({ title, onClick, className }: Props): React.ReactElement => (
  <Wrapper className={className} onClick={onClick}>
    {title}
  </Wrapper>
);

export default Button;
