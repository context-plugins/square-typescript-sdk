import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Phase = {
  uid?: string | null;
  ordinal?: number | null;
  orderTemplateId?: string | null;
  planPhaseUid?: string | null;
};

export const phaseSchema: Schema<Phase> = s.object<Phase>({
  uid: s.optionalNullable(s.string()),
  ordinal: s.optionalNullable(s.number()),
  orderTemplateId: s.optionalNullable(s.string()),
  planPhaseUid: s.optionalNullable(s.string()),
  _keysMap: {
    orderTemplateId: "order_template_id",
    planPhaseUid: "plan_phase_uid",
  },
});
