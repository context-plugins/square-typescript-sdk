import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents a phase, which can override subscription phases as defined by plan_id */
export type Phase = {
  /** id of subscription phase */
  uid?: string | null;
  /** index of phase in total subscription plan */
  ordinal?: number | null;
  /** id of order to be used in billing */
  orderTemplateId?: string | null;
  /** the uid from the plan's phase in catalog */
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
