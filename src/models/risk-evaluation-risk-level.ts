import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RiskEvaluationRiskLevel = {
  Pending: "PENDING",
  Normal: "NORMAL",
  Moderate: "MODERATE",
  High: "HIGH",
} as const;
export type RiskEvaluationRiskLevel =
  | (typeof RiskEvaluationRiskLevel)[keyof typeof RiskEvaluationRiskLevel]
  | (string & {});

export const riskEvaluationRiskLevelSchema: EnumSchema<RiskEvaluationRiskLevel> =
  s.enumOf<RiskEvaluationRiskLevel>(RiskEvaluationRiskLevel);
