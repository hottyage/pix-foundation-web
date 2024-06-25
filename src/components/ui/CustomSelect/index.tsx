import React from "react";
import Select, { components } from "react-select";

const customStyles = {
  container: (provided: any) => ({
    ...provided,
    borderRadius: 10,
    background: "transparent",
    cursor: "pointer",
    zIndex: 999,
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "white",
    zIndex: 999,
    cursor: "pointer",
    overflow: "none",
    "@media(max-width: 599px)": { textOverflow: "clip" },
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    paddingRight: 0,
  }),
  menu: (provided: any) => ({
    ...provided,
    color: "white",
    background: "#1D1D20",
    borderRadius: 12,
    zIndex: 999,
    cursor: "pointer",
  }),
  option: (provided: any, state: { isSelected: boolean }) => ({
    ...provided,
    color: "white",
    opacity: state.isSelected ? 0.5 : 0.75,
    "&:hover": {
      opacity: 1,
    },
    display: "flex",
    alignItems: "center",
    zIndex: 999,
    cursor: "pointer",
  }),
  control: (provided: any, ...rest: any) => ({
    "&>div:last-of-type>div": {
      transform: rest?.[0]?.menuIsOpen ? "rotate(180deg)" : "",
      color: "rgba(249, 249, 249, 0.75)",
    },
    ...provided,
    backgroundColor: rest?.[0]?.menuIsOpen
      ? "#0B0B0C"
      : "rgba(249, 249, 249, 0.08)",
    width: "100%",
    border: "1px solid rgba(249, 249, 249, 0.08)",
    height: 40,
    borderRadius: 10,
    zIndex: 999,
    cursor: "pointer",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  input: (provided: any) => ({
    ...provided,
    color: "white",
  }),
};

type TSelectOption = {
  value: string;
  label: string;
  icon?: string;
};
export const CustomSelect = ({
  options,
  onChange,
  value,
  isSearchable = false,
}: {
  options: TSelectOption[];
  value: TSelectOption;
  onChange: any;
  isSearchable?: boolean;
}) => {
  const { Option, Control } = components;
  const IconOption = (props: any) => (
    <Option {...props}>
      {props.data.icon && (
        <img
          src={props.data.icon}
          style={{
            width: 20,
            height: 20,
            objectFit: "contain",
            marginRight: 10,
          }}
          alt={props.data.label}
        />
      )}
      {props.data.label}
    </Option>
  );

  const IconControl = (props: any) => {
    return (
      <Control {...props}>
        {value.icon && (
          <img
            src={value.icon}
            style={{
              width: 20,
              height: 20,
              objectFit: "contain",
              marginLeft: 10,
            }}
            alt={"select icon"}
          />
        )}
        {props.children}
      </Control>
    );
  };

  return (
    <Select
      styles={customStyles}
      onChange={onChange}
      value={value}
      options={options}
      isSearchable={isSearchable}
      components={{ Option: IconOption, Control: IconControl }}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: "transparent",
          primary50: "transparent",
          primary: "transparent",
        },
      })}
    />
  );
};
