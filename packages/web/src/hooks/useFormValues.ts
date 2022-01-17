import { useState } from "react";
import _ from "lodash";

export type FormFields = {
  [key: string]: string | number;
};

export default function useFormValues(
  formFields: FormFields
): [
  { [key: string]: string | number },
  (name: string, newValue: string) => void
] {
  const [values, setValues] = useState(() => {
    let map: { [key: string]: string | number } = {};
    map = _.reduce(
      formFields,
      (result, defaultValue, fieldName) => {
        result[fieldName] = defaultValue;
        return result;
      },
      map
    );

    return map;
  });

  const updateValue = (name: string, newValue: string) => {
    setValues((currentValues) => {
      return {
        ...currentValues,
        [name]: newValue,
      };
    });
  };

  return [values, updateValue];
}
