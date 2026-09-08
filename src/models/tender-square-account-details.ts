import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  tenderSquareAccountDetailsStatusSchema,
  type TenderSquareAccountDetailsStatus,
} from "./tender-square-account-details-status.js";

/** Represents the details of a tender with `type` `SQUARE_ACCOUNT`. */
export type TenderSquareAccountDetails = {
  status?: TenderSquareAccountDetailsStatus;
};

export const tenderSquareAccountDetailsSchema: Schema<TenderSquareAccountDetails> =
  s.object<TenderSquareAccountDetails>({
    status: s.optional(s.lazy(() => tenderSquareAccountDetailsStatusSchema)),
  });
