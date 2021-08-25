import React from "react";
import { CustomInput } from "reactstrap";

const FilterCheckbox = ({ categoryId, name, checked, onChange, label }) => {
  return (
    <div>
      <CustomInput
        type="checkbox"
        categoryId={categoryId}
        name={name}
        checked={checked}
        onChange={onChange}
        label={label}
      />
    </div>
  );
};

export default FilterCheckbox;
