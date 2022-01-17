import { useCallback, useEffect, useRef } from "react";
import _ from "lodash";

import TextInput from "atoms/TextInput";
import RangeInput from "atoms/RangeInput";
import DateInput from "atoms/DateInput";
import useFormValues, { type FormFields } from "hooks/useFormValues";
import useUpdateEffect from "hooks/useUpdateEffect";
import { useAppDispatch } from "hooks/redux";
import { triggerFetchNews } from "state/slices/news";
import { type FetchNewsPayload } from "service/news";
import { formatDateYYYYMMDD } from "utils/formatter";
import { validateNewsParams } from "utils/validate";

const formFields: FormFields = {
  searchText: "",
  perPage: 10,
  page: 1,
  startDate: "",
  endDate: "",
};

export default function NewsControl() {
  const [formValues, updateFieldValue] = useFormValues(formFields);
  const dispatch = useAppDispatch();
  const fetchNews = useCallback(
    (params) => {
      dispatch(triggerFetchNews(params));
    },
    [dispatch]
  );
  const debouncedFetchNews = useRef(
    _.debounce(fetchNews, 250, { maxWait: 1000 })
  );

  useEffect(() => {
    const nowDate = new Date();
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + 1);
    updateFieldValue("startDate", formatDateYYYYMMDD(nowDate));
    updateFieldValue("endDate", formatDateYYYYMMDD(nextDate));
  }, []);

  useUpdateEffect(() => {
    const validationResult = validateNewsParams(formValues as FetchNewsPayload);
    if (validationResult) {
      debouncedFetchNews.current(formValues);
    }
  }, [formValues, debouncedFetchNews]);

  return (
    <div className="flex flex-row flex-wrap md:flex-col md:flex-nowrap pl-1 pr-1">
      <div className="p-2 basis-full sm:basis-1/3">
        <TextInput
          showLabel={false}
          placeholder="Search news"
          name="searchText"
          value={formValues["searchText"] as string}
          onChange={updateFieldValue}
        />
      </div>
      <div className="p-2 basis-1/2 sm:basis-1/3">
        <RangeInput
          label="Listings per page"
          min={5}
          max={20}
          step={1}
          name="perPage"
          value={formValues["perPage"] as number}
          onChange={updateFieldValue}
        />
      </div>
      <div className="p-2 basis-1/2 sm:basis-1/3">
        <RangeInput
          label="Page"
          min={1}
          max={100}
          step={1}
          name="page"
          value={formValues["page"] as number}
          onChange={updateFieldValue}
        />
      </div>
      <div className="p-2 basis-1/2">
        <DateInput
          label="Start date"
          name="startDate"
          value={formValues["startDate"] as string}
          onChange={updateFieldValue}
        />
      </div>
      <div className="p-2 basis-1/2">
        <DateInput
          label="End date"
          name="endDate"
          value={formValues["endDate"] as string}
          onChange={updateFieldValue}
        />
      </div>
    </div>
  );
}
