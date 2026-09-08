import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bankAccountVerifiedEventObjectSchema,
  type BankAccountVerifiedEventObject,
} from "./bank-account-verified-event-object.js";

export type BankAccountVerifiedEventData = {
  /** Name of the affected object’s type, `"bank_account"`. */
  type?: string | null;
  /** ID of the affected bank account. */
  id?: string;
  object?: BankAccountVerifiedEventObject;
};

export const bankAccountVerifiedEventDataSchema: Schema<BankAccountVerifiedEventData> =
  s.object<BankAccountVerifiedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => bankAccountVerifiedEventObjectSchema)),
  });
