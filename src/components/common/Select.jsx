import React from "react";

const Select = ({ type, array }) => {
  let arrayList = array.map((item) => {
    return <option key={item.id}>{item.name}</option>;
  });
  return (
    <select name={type}>
      <option key='0' hidden defaultValue={type}>Select {type}</option>
      {arrayList}
    </select>
  );
};

export default Select;
