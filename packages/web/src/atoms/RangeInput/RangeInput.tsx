import _ from "lodash";
import { ChangeEvent } from "react";

type Props = {
  label?: string;
  min: number;
  value: number;
  max: number;
  step?: number;
  onChange: (name: string, value: string) => void;
  name: string;
};

export default function RangeInput(props: Props) {
  const {
    label = "",
    min,
    max,
    step = 1,
    value,
    onChange = _.noop,
    name,
  } = props;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <div className="relative pt-1">
      <label className="form-label">{label}</label>
      <input
        type="range"
        className={`
          form-range
          appearance-none
          w-full
          h-6
          p-0
          bg-transparent
          focus:outline-none focus:ring-0 focus:shadow-none
        `}
        min={min}
        max={max}
        step={step}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
}
