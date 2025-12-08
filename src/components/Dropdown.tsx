import React, { FC } from "react";
import { DropdownProps, DropdownControl, CountryOption } from "@/types/forms";

const Dropdown: FC<DropdownProps & DropdownControl> = ({
  options,
  selected,
  placeholder,
  onSelect,
  buttonClass = "w-full px-4 py-1 bg-white text-black rounded-md text-left border border-gray-300 flex items-center justify-between",
  itemClass = "px-4 py-1 cursor-pointer hover:bg-gray-100",
  openDropdown,
  openName,
}) => {
  const isOpen = openName === placeholder;
  const buttonTextColor = (!selected || selected === placeholder) ? "text-gray-400" : "text-black";
  return (
    <div className="relative">
      <button
        type="button"
        className={`${buttonClass} ${buttonTextColor}`}
        onClick={() => openDropdown(isOpen ? "" : placeholder)}
      >
        <span>{selected || placeholder}</span>
        <span className="pointer-events-none ml-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 8L10 12L14 8"
              stroke={(!selected || selected === placeholder) ? "#9ca3af" : "#000"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="absolute left-0 w-full mt-1 bg-white rounded-md shadow-lg z-20 max-h-60 overflow-auto">
          {(options as any[]).map((opt) => {
            const value = typeof opt === "string" ? opt : (opt as CountryOption).name;
            const key = typeof opt === "string" ? opt : (opt as CountryOption).code;
            const textColor = value === placeholder ? "text-gray-400" : "text-black";
            return (
              <div
                key={key}
                className={`${itemClass} ${textColor}`}
                onClick={() => {
                  onSelect(value);
                  openDropdown("");
                }}
              >
                {value}
              </div>
            );
          })}
        </div>
      )}
      <input type="hidden" name={placeholder.toLowerCase()} value={selected} />
    </div>
  );
};

export default Dropdown;
