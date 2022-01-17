import _ from "lodash";
import { ChangeEvent } from "react";

import "./dateInput.module.scss";

type Props = {
  label?: string;
  value: string;
  onChange: (name: string, value: string) => void;
  name: string;
};

export default function DateInput(props: Props) {
  const { label = "", value, onChange = _.noop, name } = props;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <div className="flex flex-col items-start">
      <label htmlFor="floatingInput" className="">
        {label}
      </label>
      <input
        type="date"
        data-date=""
        data-date-format="YYYY MM DD"
        value={value}
        className="bg-backgroundSecondary"
        onChange={handleOnChange}
      />
    </div>
  );
}
