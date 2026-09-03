import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  tenderBankAccountDetailsStatusSchema,
  type TenderBankAccountDetailsStatus,
} from "./tender-bank-account-details-status.js";

export type TenderBankAccountDetails = {
  status?: TenderBankAccountDetailsStatus;
};

export const tenderBankAccountDetailsSchema: Schema<TenderBankAccountDetails> =
  s.object<TenderBankAccountDetails>({
    status: s.optional(s.lazy(() => tenderBankAccountDetailsStatusSchema)),
  });
