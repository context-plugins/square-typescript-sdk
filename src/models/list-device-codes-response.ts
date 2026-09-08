import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceCodeSchema, type DeviceCode } from "./device-code.js";
import { errorSchema, type Error } from "./error.js";

export type ListDeviceCodesResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The queried DeviceCode. */
  deviceCodes?: DeviceCode[];
  /**
   * A pagination cursor to retrieve the next set of results for your original query to the
   * endpoint. This value is present only if the request succeeded and additional results are
   * available.
   *
   * See [Paginating results](https://developer.squareup.com/docs/working-with-apis/pagination) for
   * more information.
   */
  cursor?: string;
};

export const listDeviceCodesResponseSchema: Schema<ListDeviceCodesResponse> =
  s.object<ListDeviceCodesResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    deviceCodes: s.optional(s.array(s.lazy(() => deviceCodeSchema))),
    cursor: s.optional(s.string()),
    _keysMap: {
      deviceCodes: "device_codes",
    },
  });
