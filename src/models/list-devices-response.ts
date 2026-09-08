import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceSchema, type Device } from "./device.js";
import { errorSchema, type Error } from "./error.js";

export type ListDevicesResponse = {
  /** Information about errors that occurred during the request. */
  errors?: Error[];
  /** The requested list of `Device` objects. */
  devices?: Device[];
  /**
   * The pagination cursor to be used in a subsequent request. If empty, this is the final response.
   * See
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination)
   * for more information.
   */
  cursor?: string;
};

export const listDevicesResponseSchema: Schema<ListDevicesResponse> = s.object<ListDevicesResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  devices: s.optional(s.array(s.lazy(() => deviceSchema))),
  cursor: s.optional(s.string()),
});
