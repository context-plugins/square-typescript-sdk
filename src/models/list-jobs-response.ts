import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { jobSchema, type Job } from "./job.js";

/**
 * Represents a [ListJobs](api-endpoint:Team-ListJobs) response. Either `jobs` or `errors` is
 * present in the response. If additional results are available, the `cursor` field is also present.
 */
export type ListJobsResponse = {
  /** The retrieved jobs. A single paged response contains up to 100 jobs. */
  jobs?: Job[];
  /**
   * An opaque cursor used to retrieve the next page of results. This field is present only if the
   * request succeeded and additional results are available. For more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
  /** The errors that occurred during the request. */
  errors?: Error[];
};

export const listJobsResponseSchema: Schema<ListJobsResponse> = s.object<ListJobsResponse>({
  jobs: s.optional(s.array(s.lazy(() => jobSchema))),
  cursor: s.optional(s.string()),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
