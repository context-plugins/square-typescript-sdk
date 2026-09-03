import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { workweekConfigSchema, type WorkweekConfig } from "./workweek-config.js";

export type ListWorkweekConfigsResponse = {
  workweekConfigs?: WorkweekConfig[];
  cursor?: string;
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
