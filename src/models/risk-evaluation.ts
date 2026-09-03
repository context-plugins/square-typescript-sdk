import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { riskEvaluationRiskLevelSchema, type RiskEvaluationRiskLevel } from "./risk-evaluation-risk-level.js";

export type RiskEvaluation = {
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
