import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomField = {
  title: string;
};

export const customFieldSchema: Schema<CustomField> = s.object<CustomField>({
  title: s.string(),
});
