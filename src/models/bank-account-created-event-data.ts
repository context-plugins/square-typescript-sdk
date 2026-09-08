import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bankAccountCreatedEventObjectSchema,
  type BankAccountCreatedEventObject,
} from "./bank-account-created-event-object.js";

export type BankAccountCreatedEventData = {
  /** Name of the affected object’s type, `"bank_account"`. */
  type?: string | null;
  /** ID of the affected bank account. */
  id?: string;
  object?: BankAccountCreatedEventObject;
};

export const bankAccountCreatedEventDataSchema: Schema<BankAccountCreatedEventData> =
  s.object<BankAccountCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => bankAccountCreatedEventObjectSchema)),
  });
