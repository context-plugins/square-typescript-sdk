import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { workweekConfigSchema, type WorkweekConfig } from "./workweek-config.js";

export type UpdateWorkweekConfigResponse = {
  workweekConfig?: WorkweekConfig;
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
