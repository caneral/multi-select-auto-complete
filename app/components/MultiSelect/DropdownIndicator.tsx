import Select, { DropdownIndicatorProps, components } from "react-select";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen ? (
          <IoMdArrowDropup size={26} color="black" />
        ) : (
          <IoMdArrowDropdown size={26} color="black" />
        )}
      </components.DropdownIndicator>
    )
  );
};

export default DropdownIndicator;
