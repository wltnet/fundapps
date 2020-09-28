import * as React from "react";
import { Props } from ".";

const Dropdown = ({ list, onChange }: Props): React.ReactElement => (
  <select name="source" id="source" onChange={onChange}>
    <option value="Filter by source">Filter by source</option>
    {list.sort().map((source) => (
      <option key={source} value={source}>
        {source}
      </option>
    ))}
  </select>
);

export default Dropdown;
