import _ from "lodash";
import { type FetchNewsPayload } from "service/news";

export function validateNewsParams(params: FetchNewsPayload) {
  return _.every(params, (value) => Boolean(value));
}
