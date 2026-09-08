import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { confirmationDecisionSchema, type ConfirmationDecision } from "./confirmation-decision.js";

export type ConfirmationOptions = {
  /** The title text to display in the confirmation screen flow on the Terminal. */
  title: string;
  /** The agreement details to display in the confirmation flow on the Terminal. */
  body: string;
  /** The button text to display indicating the customer agrees to the displayed terms. */
  agreeButtonText: string;
  /** The button text to display indicating the customer does not agree to the displayed terms. */
  disagreeButtonText?: string | null;
  decision?: ConfirmationDecision;
};

export const confirmationOptionsSchema: Schema<ConfirmationOptions> = s.object<ConfirmationOptions>({
  title: s.string(),
  body: s.string(),
  agreeButtonText: s.string(),
  disagreeButtonText: s.optionalNullable(s.string()),
  decision: s.optional(s.lazy(() => confirmationDecisionSchema)),
  _keysMap: {
    agreeButtonText: "agree_button_text",
    disagreeButtonText: "disagree_button_text",
  },
});
