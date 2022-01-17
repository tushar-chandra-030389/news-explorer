import { ChangeEvent } from "react";
import _ from "lodash";

type Props = {
  label?: string;
  showLabel?: boolean;
  placeholder?: string;
  type?: "text" | "email" | "password";
  value?: string;
  onChange: (name: string, value: string) => void;
  name: string;
};

export default function TextInput(props: Props) {
  const {
    label = "",
    showLabel = true,
    placeholder = "",
    type = "text",
    onChange = _.noop,
    value = "",
    name,
  } = props;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <label className="block">
      {showLabel && (
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-50">
          {label}
        </span>
      )}
      <input
        type={type}
        className="mt-1 px-3 py-2 bg-backgroundSecondary border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </label>
  );
}
