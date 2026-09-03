import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionCancelReasonSchema, type ActionCancelReason } from "./action-cancel-reason.js";
import { confirmationOptionsSchema, type ConfirmationOptions } from "./confirmation-options.js";
import { dataCollectionOptionsSchema, type DataCollectionOptions } from "./data-collection-options.js";
import { deviceMetadataSchema, type DeviceMetadata } from "./device-metadata.js";
import { qrCodeOptionsSchema, type QrCodeOptions } from "./qr-code-options.js";
import { receiptOptionsSchema, type ReceiptOptions } from "./receipt-options.js";
import { saveCardOptionsSchema, type SaveCardOptions } from "./save-card-options.js";
import { selectOptionsSchema, type SelectOptions } from "./select-options.js";
import { signatureOptionsSchema, type SignatureOptions } from "./signature-options.js";
import {
  terminalActionActionTypeSchema,
  type TerminalActionActionType,
} from "./terminal-action-action-type.js";

export type TerminalAction = {
  id?: string;
  deviceId?: string | null;
  deadlineDuration?: string | null;
  status?: string;
  cancelReason?: ActionCancelReason;
  createdAt?: string;
  updatedAt?: string;
  appId?: string;
  locationId?: string;
  type?: TerminalActionActionType;
  qrCodeOptions?: QrCodeOptions;
  saveCardOptions?: SaveCardOptions;
  signatureOptions?: SignatureOptions;
  confirmationOptions?: ConfirmationOptions;
  receiptOptions?: ReceiptOptions;
  dataCollectionOptions?: DataCollectionOptions;
  selectOptions?: SelectOptions;
  deviceMetadata?: DeviceMetadata;
  awaitNextAction?: boolean | null;
  awaitNextActionDuration?: string | null;
};

export const terminalActionSchema: Schema<TerminalAction> = s.object<TerminalAction>({
  id: s.optional(s.string()),
  deviceId: s.optionalNullable(s.string()),
  deadlineDuration: s.optionalNullable(s.string()),
  status: s.optional(s.string()),
  cancelReason: s.optional(s.lazy(() => actionCancelReasonSchema)),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  appId: s.optional(s.string()),
  locationId: s.optional(s.string()),
  type: s.optional(s.lazy(() => terminalActionActionTypeSchema)),
  qrCodeOptions: s.optional(s.lazy(() => qrCodeOptionsSchema)),
  saveCardOptions: s.optional(s.lazy(() => saveCardOptionsSchema)),
  signatureOptions: s.optional(s.lazy(() => signatureOptionsSchema)),
  confirmationOptions: s.optional(s.lazy(() => confirmationOptionsSchema)),
  receiptOptions: s.optional(s.lazy(() => receiptOptionsSchema)),
  dataCollectionOptions: s.optional(s.lazy(() => dataCollectionOptionsSchema)),
  selectOptions: s.optional(s.lazy(() => selectOptionsSchema)),
  deviceMetadata: s.optional(s.lazy(() => deviceMetadataSchema)),
  awaitNextAction: s.optionalNullable(s.boolean()),
  awaitNextActionDuration: s.optionalNullable(s.string()),
  _keysMap: {
    deviceId: "device_id",
    deadlineDuration: "deadline_duration",
    cancelReason: "cancel_reason",
    createdAt: "created_at",
    updatedAt: "updated_at",
    appId: "app_id",
    locationId: "location_id",
    qrCodeOptions: "qr_code_options",
    saveCardOptions: "save_card_options",
    signatureOptions: "signature_options",
    confirmationOptions: "confirmation_options",
    receiptOptions: "receipt_options",
    dataCollectionOptions: "data_collection_options",
    selectOptions: "select_options",
    deviceMetadata: "device_metadata",
    awaitNextAction: "await_next_action",
    awaitNextActionDuration: "await_next_action_duration",
  },
});
