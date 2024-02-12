"use client";
import React, { FC } from "react";
import AsyncSelect from "react-select/async";
import Option from "./Option";
import MultiValueRemove from "./MultiValueRemove";
import MultiValueLabel from "./MultiValueLabel";
import DropdownIndicator from "./DropdownIndicator";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";

type Props = {
  onInputChange: any;
  inputValue: string;
  loadOptions: any;
  error: FetchBaseQueryError | SerializedError | undefined;
  isLoading: boolean;
};

const MultiSelect: FC<Props> = ({
  onInputChange,
  inputValue,
  loadOptions,
  error,
  isLoading,
}) => {
  return (
    <>
      <AsyncSelect
        defaultOptions
        isMulti
        closeMenuOnSelect={false}
        onInputChange={onInputChange}
        inputValue={inputValue}
        cacheOptions
        loadOptions={loadOptions}
        components={{
          Option,
          MultiValueRemove: MultiValueRemove,
          MultiValueLabel: MultiValueLabel,
          DropdownIndicator: DropdownIndicator,
          IndicatorSeparator: null,
        }}
        isLoading={isLoading}
        hideSelectedOptions={false}
        styles={{
          multiValue: (base) => ({
            ...base,
            borderRadius: 12,
            backgroundColor: "#e2e8f0",
            paddingRight: 4,
            paddingLeft: 4,
            marginTop: 4,
            marginBottom: 4,
          }),
          control: (base) => ({
            ...base,
            borderRadius: 12,
            borderColor: "#94a3b8",
          }),
          menu: (base) => ({
            ...base,
            borderRadius: 12,
          }),
        }}
      />
      {error && <div className="text-red-500">Something went wrong</div>}
    </>
  );
};

export default MultiSelect;
