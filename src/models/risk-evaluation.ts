import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { riskEvaluationRiskLevelSchema, type RiskEvaluationRiskLevel } from "./risk-evaluation-risk-level.js";

/**
 * Represents fraud risk information for the associated payment.
 *
 * When you take a payment through Square's Payments API (using the `CreatePayment` endpoint),
 * Square evaluates it and assigns a risk level to the payment. Sellers can use this information to
 * determine the course of action (for example, provide the goods/services or refund the payment).
 */
export type RiskEvaluation = {
  /** The timestamp when payment risk was evaluated, in RFC 3339 format. */
  createdAt?: string;
  riskLevel?: RiskEvaluationRiskLevel;
};

export const riskEvaluationSchema: Schema<RiskEvaluation> = s.object<RiskEvaluation>({
  createdAt: s.optional(s.string()),
  riskLevel: s.optional(s.lazy(() => riskEvaluationRiskLevelSchema)),
  _keysMap: {
    createdAt: "created_at",
    riskLevel: "risk_level",
  },
});
