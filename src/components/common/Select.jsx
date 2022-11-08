import React from "react";

const Select = ({ isEnabled, type, info, array, setText }) => {
  console.info(info)
  console.info(array)
  return array !== undefined ? (
    <select name={type} disabled={!isEnabled} onChange={({target})=>setText(target.value)}>
      <option key="0" hidden defaultValue={type}>
        Select {type}
      </option>
      {array.map((item) => {
        return <option key={item.id}>{item.name}</option>;
      })}
    </select>
  ) : (
    ""
  );
};

export default Select;
