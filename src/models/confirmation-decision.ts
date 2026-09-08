import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConfirmationDecision = {
  /** The buyer's decision to the displayed terms. */
  hasAgreed?: boolean;
};

export const confirmationDecisionSchema: Schema<ConfirmationDecision> = s.object<ConfirmationDecision>({
  hasAgreed: s.optional(s.boolean()),
  _keysMap: {
    hasAgreed: "has_agreed",
  },
});
