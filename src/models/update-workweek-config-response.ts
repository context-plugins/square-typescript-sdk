import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { workweekConfigSchema, type WorkweekConfig } from "./workweek-config.js";

/**
 * The response to a request to update a `WorkweekConfig` object. The response contains the updated
 * `WorkweekConfig` object and might contain a set of `Error` objects if the request resulted in
 * errors.
 */
export type UpdateWorkweekConfigResponse = {
  /**
   * Sets the day of the week and hour of the day that a business starts a workweek. This is used to
   * calculate overtime pay.
   */
  workweekConfig?: WorkweekConfig;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const updateWorkweekConfigResponseSchema: Schema<UpdateWorkweekConfigResponse> =
  s.object<UpdateWorkweekConfigResponse>({
    workweekConfig: s.optional(s.lazy(() => workweekConfigSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      workweekConfig: "workweek_config",
    },
  });
