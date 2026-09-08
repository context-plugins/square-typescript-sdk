import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { workweekConfigSchema, type WorkweekConfig } from "./workweek-config.js";

/**
 * The response to a request for a set of `WorkweekConfig` objects. The response contains the
 * requested `WorkweekConfig` objects and might contain a set of `Error` objects if the request
 * resulted in errors.
 */
export type ListWorkweekConfigsResponse = {
  /** A page of `WorkweekConfig` results. */
  workweekConfigs?: WorkweekConfig[];
  /**
   * The value supplied in the subsequent request to fetch the next page of `WorkweekConfig`
   * results.
   */
  cursor?: string;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const listWorkweekConfigsResponseSchema: Schema<ListWorkweekConfigsResponse> =
  s.object<ListWorkweekConfigsResponse>({
    workweekConfigs: s.optional(s.array(s.lazy(() => workweekConfigSchema))),
    cursor: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      workweekConfigs: "workweek_configs",
    },
  });
