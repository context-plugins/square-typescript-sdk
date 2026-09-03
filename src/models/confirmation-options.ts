import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { confirmationDecisionSchema, type ConfirmationDecision } from "./confirmation-decision.js";

export type ConfirmationOptions = {
  title: string;
  body: string;
  agreeButtonText: string;
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
