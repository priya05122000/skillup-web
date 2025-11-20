// Common form-related types
export interface CountryOption {
  name: string;
  code: string;
}

export interface DropdownProps {
  options: string[] | CountryOption[];
  selected: string;
  placeholder: string;
  onSelect: (value: string) => void;
  buttonClass?: string;
  itemClass?: string;
}

export interface DropdownControl {
  openDropdown: (name: string) => void;
  openName: string;
}

export type FormInputProps = {
  type: "text" | "email" | "tel";
  placeholder: string;
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
