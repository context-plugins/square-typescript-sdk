import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customerDeletedEventEventContextMergeSchema,
  type CustomerDeletedEventEventContextMerge,
} from "./customer-deleted-event-event-context-merge.js";

/** Information about the change that triggered the event. */
export type CustomerDeletedEventEventContext = {
  /**
   * Information about a merge operation, which creates a new customer using aggregated properties
   * from two or more existing customers.
   */
  merge?: CustomerDeletedEventEventContextMerge;
};

export const customerDeletedEventEventContextSchema: Schema<CustomerDeletedEventEventContext> =
  s.object<CustomerDeletedEventEventContext>({
    merge: s.optional(s.lazy(() => customerDeletedEventEventContextMergeSchema)),
  });
