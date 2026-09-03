import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shiftSchema, type Shift } from "./shift.js";

export type LaborShiftUpdatedEventObject = {
  shift?: Shift;
};

export const laborShiftUpdatedEventObjectSchema: Schema<LaborShiftUpdatedEventObject> =
  s.object<LaborShiftUpdatedEventObject>({
    shift: s.optional(s.lazy(() => shiftSchema)),
  });
