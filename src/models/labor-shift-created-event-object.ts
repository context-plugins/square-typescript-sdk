import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shiftSchema, type Shift } from "./shift.js";

export type LaborShiftCreatedEventObject = {
  shift?: Shift;
};

export const laborShiftCreatedEventObjectSchema: Schema<LaborShiftCreatedEventObject> =
  s.object<LaborShiftCreatedEventObject>({
    shift: s.optional(s.lazy(() => shiftSchema)),
  });
