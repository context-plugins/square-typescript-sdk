import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bankAccountDisabledEventObjectSchema,
  type BankAccountDisabledEventObject,
} from "./bank-account-disabled-event-object.js";

export type BankAccountDisabledEventData = {
  /** Name of the affected object’s type, `"bank_account"`. */
  type?: string | null;
  /** ID of the affected bank account. */
  id?: string;
  object?: BankAccountDisabledEventObject;
};

export const bankAccountDisabledEventDataSchema: Schema<BankAccountDisabledEventData> =
  s.object<BankAccountDisabledEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => bankAccountDisabledEventObjectSchema)),
  });
