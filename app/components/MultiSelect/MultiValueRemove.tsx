import React from "react";
import { IoMdClose } from "react-icons/io";
import { MultiValueRemoveProps, components } from "react-select";

const MultiValueRemove = (props: MultiValueRemoveProps) => {
  return (
    <components.MultiValueRemove
      {...props}
      innerProps={{
        ...props.innerProps,
        className:
          "bg-slate-400 px-1 py-1 !rounded-md hover:!bg-slate-400 my-2 mr-2",
      }}
    >
      <IoMdClose color="white" size={16} />
    </components.MultiValueRemove>
  );
};

export default MultiValueRemove;
