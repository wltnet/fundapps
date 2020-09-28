import Dropdown from "./Dropdown";
import * as React from "react";

export interface Props {
  list: string[];
  onChange: (event: React.ChangeEvent) => void;
}

export default Dropdown;
