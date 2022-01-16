import { SyntheticEvent } from "react";
import _ from "lodash";

type Props = {
  label?: string;
  showLabel?: boolean;
  placeholder?: string;
  type?: "text" | "email" | "password";
  value?: string;
  onChange?: (e: SyntheticEvent) => void;
};

export default function TextInput(props: Props) {
  const {
    label = "",
    showLabel = true,
    placeholder = "",
    type = "text",
    onChange = _.noop,
    value = "",
  } = props;

  return (
    <label className="block">
      {showLabel && (
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          {label}
        </span>
      )}
      <input
        type={type}
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </label>
  );
}
