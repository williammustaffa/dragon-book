import React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "semantic-ui-react";
import classNames from "classnames";

function CustomDropdown({ name, label, defaultValue, onChange, error, options }) {
  function handleChange(event, { value }) {
    if (typeof onChange === "function") {
      onChange(event, { name, value });
    }
  }

  return (
    <div className={classNames("custom-dropdown", "field", { error })}>
      {label && <label>{label}</label>}
      <Dropdown
        fluid
        selection
        name="type"
        defaultValue={defaultValue}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
}

CustomDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,
  error: PropTypes.any,
  options: PropTypes.array.isRequired,
};

export default CustomDropdown;