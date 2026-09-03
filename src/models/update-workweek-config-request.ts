import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { workweekConfigSchema, type WorkweekConfig } from "./workweek-config.js";

export type UpdateWorkweekConfigRequest = {
  workweekConfig: WorkweekConfig;
};

export const updateWorkweekConfigRequestSchema: Schema<UpdateWorkweekConfigRequest> =
  s.object<UpdateWorkweekConfigRequest>({
    workweekConfig: workweekConfigSchema,
    _keysMap: {
      workweekConfig: "workweek_config",
    },
  });
