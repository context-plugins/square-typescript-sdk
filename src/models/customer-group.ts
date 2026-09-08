import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Represents a group of customer profiles.
 *
 * Customer groups can be created, be modified, and have their membership defined using the
 * Customers API or within the Customer Directory in the Square Seller Dashboard or Point of Sale.
 */
export type CustomerGroup = {
  /** A unique Square-generated ID for the customer group. */
  id?: string;
  /** The name of the customer group. */
  name: string;
  /** The timestamp when the customer group was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp when the customer group was last updated, in RFC 3339 format. */
  updatedAt?: string;
};

export const customerGroupSchema: Schema<CustomerGroup> = s.object<CustomerGroup>({
  id: s.optional(s.string()),
  name: s.string(),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  _keysMap: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
