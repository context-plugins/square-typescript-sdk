import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customerCreatedEventEventContextMergeSchema,
  type CustomerCreatedEventEventContextMerge,
} from "./customer-created-event-event-context-merge.js";

/** Information about the change that triggered the event. */
export type CustomerCreatedEventEventContext = {
  /**
   * Information about a merge operation, which creates a new customer using aggregated properties
   * from two or more existing customers.
   */
  merge?: CustomerCreatedEventEventContextMerge;
};

export const customerCreatedEventEventContextSchema: Schema<CustomerCreatedEventEventContext> =
  s.object<CustomerCreatedEventEventContext>({
    merge: s.optional(s.lazy(() => customerCreatedEventEventContextMergeSchema)),
  });
