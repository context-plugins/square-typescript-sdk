import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateCatalogImageRequest = {
  /**
   * A unique string that identifies this UpdateCatalogImage request. Keys can be any valid string
   * but must be unique for every UpdateCatalogImage request.
   *
   * See [Idempotency
   * keys](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency) for
   * more information.
   */
  idempotencyKey: string;
};

export const updateCatalogImageRequestSchema: Schema<UpdateCatalogImageRequest> =
  s.object<UpdateCatalogImageRequest>({
    idempotencyKey: s.string(),
    _keysMap: {
      idempotencyKey: "idempotency_key",
    },
  });
