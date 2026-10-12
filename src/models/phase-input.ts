import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents the arguments used to construct a new phase. */
export type PhaseInput = {
  /** index of phase in total subscription plan */
  ordinal: number;
  /** id of order to be used in billing */
  orderTemplateId?: string | null;
};

export const phaseInputSchema: Schema<PhaseInput> = s.object<PhaseInput>({
  ordinal: s.int(),
  orderTemplateId: s.optionalNullable(s.string()),
  _keysMap: {
    orderTemplateId: "order_template_id",
  },
});
