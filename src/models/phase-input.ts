import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PhaseInput = {
  ordinal: number;
  orderTemplateId?: string | null;
};

export const phaseInputSchema: Schema<PhaseInput> = s.object<PhaseInput>({
  ordinal: s.number(),
  orderTemplateId: s.optionalNullable(s.string()),
  _keysMap: {
    orderTemplateId: "order_template_id",
  },
});
