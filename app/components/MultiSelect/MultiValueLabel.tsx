import React from "react";
import { MultiValueGenericProps, components } from "react-select";

const MultiValueLabel = (props: MultiValueGenericProps) => {
  return (
    <components.MultiValueLabel
      {...props}
      innerProps={{
        ...props.innerProps,
        className:
          "px-3 py-1 my-1 mr-1 rounded-lg text-slate-900 flex gap-2 items-center",
      }}
    >
      {props.data.title}
    </components.MultiValueLabel>
  );
};

export default MultiValueLabel;
