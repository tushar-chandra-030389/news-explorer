import moment from "moment";
import config from "@/config";

export const sanitizeNewsParams = (
  searchText: string,
  page: number,
  pageSize: number,
  startDate: string,
  endDate: string
) => {
  const result = {
    searchText,
    page,
    pageSize,
    startDate,
    endDate,
  };
  if (!searchText) {
    return null;
  }

  if (!page || typeof page !== "number" || page <= 0) {
    result.page = 1;
  }

  if (
    !pageSize ||
    typeof pageSize !== "number" ||
    pageSize < 10 ||
    pageSize > 100
  ) {
    result.pageSize = config.defaultPageSize;
  }

  if (!isValidDate(startDate) || !isValidDate(endDate)) {
    return null;
  }

  return result;
};

const isValidDate = (dateString: string) => {
  const regex = /^[1|2][0-9][0-9][0-9]\-[0|1][0-9]\-[0-9][0-9]$/;

  if (!regex.test(dateString)) {
    return null;
  }

  return moment(dateString, "YYYY-MM-DD").isValid();
};
