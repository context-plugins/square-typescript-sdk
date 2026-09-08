import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RiskEvaluationRiskLevel = {
  /** Indicates Square is still evaluating the payment. */
  Pending: "PENDING",
  /** Indicates payment risk is within the normal range. */
  Normal: "NORMAL",
  /** Indicates elevated risk level associated with the payment. */
  Moderate: "MODERATE",
  /** Indicates significantly elevated risk level with the payment. */
  High: "HIGH",
} as const;
export type RiskEvaluationRiskLevel =
  | (typeof RiskEvaluationRiskLevel)[keyof typeof RiskEvaluationRiskLevel]
  | (string & {});

export const riskEvaluationRiskLevelSchema: EnumSchema<RiskEvaluationRiskLevel> =
  s.enumOf<RiskEvaluationRiskLevel>(RiskEvaluationRiskLevel);
