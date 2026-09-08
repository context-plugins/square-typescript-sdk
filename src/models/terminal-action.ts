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

/** Represents an action processed by the Square Terminal. */
export type TerminalAction = {
  /** A unique ID for this `TerminalAction`. */
  id?: string;
  /**
   * The unique Id of the device intended for this `TerminalAction`. The Id can be retrieved from
   * /v2/devices api.
   */
  deviceId?: string | null;
  /**
   * The duration as an RFC 3339 duration, after which the action will be automatically canceled.
   * TerminalActions that are `PENDING` will be automatically `CANCELED` and have a cancellation
   * reason of `TIMED_OUT`
   *
   * Default: 5 minutes from creation
   *
   * Maximum: 5 minutes
   */
  deadlineDuration?: string | null;
  /**
   * The status of the `TerminalAction`. Options: `PENDING`, `IN_PROGRESS`, `CANCEL_REQUESTED`,
   * `CANCELED`, `COMPLETED`
   */
  status?: string;
  cancelReason?: ActionCancelReason;
  /** The time when the `TerminalAction` was created as an RFC 3339 timestamp. */
  createdAt?: string;
  /** The time when the `TerminalAction` was last updated as an RFC 3339 timestamp. */
  updatedAt?: string;
  /** The ID of the application that created the action. */
  appId?: string;
  /** The location id the action is attached to, if a link can be made. */
  locationId?: string;
  /**
   * Describes the type of this unit and indicates which field contains the unit information. This
   * is an ‘open’ enum.
   */
  type?: TerminalActionActionType;
  /** Fields to describe the action that displays QR-Codes. */
  qrCodeOptions?: QrCodeOptions;
  /** Describes save-card action fields. */
  saveCardOptions?: SaveCardOptions;
  signatureOptions?: SignatureOptions;
  confirmationOptions?: ConfirmationOptions;
  /** Describes receipt action fields. */
  receiptOptions?: ReceiptOptions;
  dataCollectionOptions?: DataCollectionOptions;
  selectOptions?: SelectOptions;
  deviceMetadata?: DeviceMetadata;
  /**
   * Indicates the action will be linked to another action and requires a waiting dialog to be
   * displayed instead of returning to the idle screen on completion of the action.
   *
   * Only supported on SIGNATURE, CONFIRMATION, DATA_COLLECTION, and SELECT types.
   */
  awaitNextAction?: boolean | null;
  /**
   * The timeout duration of the waiting dialog as an RFC 3339 duration, after which the waiting
   * dialog will no longer be displayed and the Terminal will return to the idle screen.
   *
   * Default: 5 minutes from when the waiting dialog is displayed
   *
   * Maximum: 5 minutes
   */
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
