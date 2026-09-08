import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { workweekConfigSchema, type WorkweekConfig } from "./workweek-config.js";

/** A request to update a `WorkweekConfig` object. */
export type UpdateWorkweekConfigRequest = {
  /**
   * Sets the day of the week and hour of the day that a business starts a workweek. This is used to
   * calculate overtime pay.
   */
  workweekConfig: WorkweekConfig;
};

export const updateWorkweekConfigRequestSchema: Schema<UpdateWorkweekConfigRequest> =
  s.object<UpdateWorkweekConfigRequest>({
    workweekConfig: workweekConfigSchema,
    _keysMap: {
      workweekConfig: "workweek_config",
    },
  });
