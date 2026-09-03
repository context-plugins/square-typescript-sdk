import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { refundSchema, type Refund } from "./refund.js";
import { tenderSchema, type Tender } from "./tender.js";
import { transactionProductSchema, type TransactionProduct } from "./transaction-product.js";

export type Transaction = {
  id?: string;
  locationId?: string | null;
  createdAt?: string;
  tenders?: Tender[] | null;
  refunds?: Refund[] | null;
  referenceId?: string | null;
  product?: TransactionProduct;
  clientId?: string | null;
  shippingAddress?: Address;
  orderId?: string | null;
};

export const transactionSchema: Schema<Transaction> = s.object<Transaction>({
  id: s.optional(s.string()),
  locationId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  tenders: s.optionalNullable(s.array(s.lazy(() => tenderSchema))),
  refunds: s.optionalNullable(s.array(s.lazy(() => refundSchema))),
  referenceId: s.optionalNullable(s.string()),
  product: s.optional(s.lazy(() => transactionProductSchema)),
  clientId: s.optionalNullable(s.string()),
  shippingAddress: s.optional(s.lazy(() => addressSchema)),
  orderId: s.optionalNullable(s.string()),
  _keysMap: {
    locationId: "location_id",
    createdAt: "created_at",
    referenceId: "reference_id",
    clientId: "client_id",
    shippingAddress: "shipping_address",
    orderId: "order_id",
  },
});
