import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { taxCalculationPhaseSchema, type TaxCalculationPhase } from "./tax-calculation-phase.js";
import { taxInclusionTypeSchema, type TaxInclusionType } from "./tax-inclusion-type.js";

export type CatalogTax = {
  name?: string | null;
  calculationPhase?: TaxCalculationPhase;
  inclusionType?: TaxInclusionType;
  percentage?: string | null;
  appliesToCustomAmounts?: boolean | null;
  enabled?: boolean | null;
  appliesToProductSetId?: string | null;
};

export const catalogTaxSchema: Schema<CatalogTax> = s.object<CatalogTax>({
  name: s.optionalNullable(s.string()),
  calculationPhase: s.optional(s.lazy(() => taxCalculationPhaseSchema)),
  inclusionType: s.optional(s.lazy(() => taxInclusionTypeSchema)),
  percentage: s.optionalNullable(s.string()),
  appliesToCustomAmounts: s.optionalNullable(s.boolean()),
  enabled: s.optionalNullable(s.boolean()),
  appliesToProductSetId: s.optionalNullable(s.string()),
  _keysMap: {
    calculationPhase: "calculation_phase",
    inclusionType: "inclusion_type",
    appliesToCustomAmounts: "applies_to_custom_amounts",
    appliesToProductSetId: "applies_to_product_set_id",
  },
});
