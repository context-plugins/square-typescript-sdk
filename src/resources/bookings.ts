import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  bulkRetrieveBookingsRequestSchema,
  type BulkRetrieveBookingsRequest,
} from "../models/bulk-retrieve-bookings-request.js";
import {
  bulkRetrieveBookingsResponseSchema,
  type BulkRetrieveBookingsResponse,
} from "../models/bulk-retrieve-bookings-response.js";
import {
  bulkRetrieveTeamMemberBookingProfilesRequestSchema,
  type BulkRetrieveTeamMemberBookingProfilesRequest,
} from "../models/bulk-retrieve-team-member-booking-profiles-request.js";
import {
  bulkRetrieveTeamMemberBookingProfilesResponseSchema,
  type BulkRetrieveTeamMemberBookingProfilesResponse,
} from "../models/bulk-retrieve-team-member-booking-profiles-response.js";
import { cancelBookingRequestSchema, type CancelBookingRequest } from "../models/cancel-booking-request.js";
import {
  cancelBookingResponseSchema,
  type CancelBookingResponse,
} from "../models/cancel-booking-response.js";
import { createBookingRequestSchema, type CreateBookingRequest } from "../models/create-booking-request.js";
import {
  createBookingResponseSchema,
  type CreateBookingResponse,
} from "../models/create-booking-response.js";
import { listBookingsResponseSchema, type ListBookingsResponse } from "../models/list-bookings-response.js";
import {
  listLocationBookingProfilesResponseSchema,
  type ListLocationBookingProfilesResponse,
} from "../models/list-location-booking-profiles-response.js";
import {
  listTeamMemberBookingProfilesResponseSchema,
  type ListTeamMemberBookingProfilesResponse,
} from "../models/list-team-member-booking-profiles-response.js";
import {
  retrieveBookingResponseSchema,
  type RetrieveBookingResponse,
} from "../models/retrieve-booking-response.js";
import {
  retrieveBusinessBookingProfileResponseSchema,
  type RetrieveBusinessBookingProfileResponse,
} from "../models/retrieve-business-booking-profile-response.js";
import {
  retrieveLocationBookingProfileResponseSchema,
  type RetrieveLocationBookingProfileResponse,
} from "../models/retrieve-location-booking-profile-response.js";
import {
  retrieveTeamMemberBookingProfileResponseSchema,
  type RetrieveTeamMemberBookingProfileResponse,
} from "../models/retrieve-team-member-booking-profile-response.js";
import {
  searchAvailabilityRequestSchema,
  type SearchAvailabilityRequest,
} from "../models/search-availability-request.js";
import {
  searchAvailabilityResponseSchema,
  type SearchAvailabilityResponse,
} from "../models/search-availability-response.js";
import { updateBookingRequestSchema, type UpdateBookingRequest } from "../models/update-booking-request.js";
import {
  updateBookingResponseSchema,
  type UpdateBookingResponse,
} from "../models/update-booking-response.js";
import type { Servers } from "../servers.js";

export class Bookings {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * BulkRetrieveBookings
   *
   * @remarks
   * Bulk-Retrieves a list of bookings by booking IDs.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth
   * scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
   * `APPOINTMENTS_READ` for the OAuth scope.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  bulkRetrieveBookings(
    request: Bookings.BulkRetrieveBookingsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkRetrieveBookingsResponse, ResponseError> {
    return this.#rawClient.execute<BulkRetrieveBookingsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/bookings/bulk-retrieve"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: bulkRetrieveBookingsRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkRetrieveBookingsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * BulkRetrieveTeamMemberBookingProfiles
   *
   * @remarks
   * Retrieves one or more team members' booking profiles.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  bulkRetrieveTeamMemberBookingProfiles(
    request: Bookings.BulkRetrieveTeamMemberBookingProfilesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkRetrieveTeamMemberBookingProfilesResponse, ResponseError> {
    return this.#rawClient.execute<BulkRetrieveTeamMemberBookingProfilesResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/bookings/team-member-booking-profiles/bulk-retrieve"),
        auth: this.#auth.oauth2,
        body: {
          kind: "json",
          value: request.body,
          schema: bulkRetrieveTeamMemberBookingProfilesRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: bulkRetrieveTeamMemberBookingProfilesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * CancelBooking
   *
   * @remarks
   * Cancels an existing booking.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth
   * scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
   * `APPOINTMENTS_WRITE` for the OAuth scope.
   *
   * For calls to this endpoint with seller-level permissions to succeed, the seller must have
   * subscribed to *Appointments Plus* or *Appointments Premium*.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  cancelBooking(
    request: Bookings.CancelBookingRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CancelBookingResponse, ResponseError> {
    return this.#rawClient.execute<CancelBookingResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/bookings/{booking_id}/cancel"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "booking_id", value: request.bookingId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: cancelBookingRequestSchema },
      },
      {
        success: { kind: "json", schema: cancelBookingResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * CreateBooking
   *
   * @remarks
   * Creates a booking.
   *
   * The required input must include the following:
   * - `Booking.location_id`
   * - `Booking.start_at`
   * - `Booking.AppointmentSegment.team_member_id`
   * - `Booking.AppointmentSegment.service_variation_id`
   * - `Booking.AppointmentSegment.service_variation_version`
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth
   * scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
   * `APPOINTMENTS_WRITE` for the OAuth scope.
   *
   * For calls to this endpoint with seller-level permissions to succeed, the seller must have
   * subscribed to *Appointments Plus* or *Appointments Premium*.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  createBooking(
    request: Bookings.CreateBookingRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateBookingResponse, ResponseError> {
    return this.#rawClient.execute<CreateBookingResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/bookings"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createBookingRequestSchema },
      },
      {
        success: { kind: "json", schema: createBookingResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * ListBookings
   *
   * @remarks
   * Retrieve a collection of bookings.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth
   * scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
   * `APPOINTMENTS_READ` for the OAuth scope.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  listBookings(
    request: Bookings.ListBookingsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListBookingsResponse, ResponseError> {
    return this.#rawClient.execute<ListBookingsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/bookings"),
        auth: this.#auth.oauth2,
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "customer_id", value: request.customerId, schema: s.optional(s.string()) },
          { name: "team_member_id", value: request.teamMemberId, schema: s.optional(s.string()) },
          { name: "location_id", value: request.locationId, schema: s.optional(s.string()) },
          { name: "start_at_min", value: request.startAtMin, schema: s.optional(s.string()) },
          { name: "start_at_max", value: request.startAtMax, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listBookingsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * ListLocationBookingProfiles
   *
   * @remarks
   * Lists location booking profiles of a seller.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  listLocationBookingProfiles(
    request: Bookings.ListLocationBookingProfilesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListLocationBookingProfilesResponse, ResponseError> {
    return this.#rawClient.execute<ListLocationBookingProfilesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/bookings/location-booking-profiles"),
        auth: this.#auth.oauth2,
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listLocationBookingProfilesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * ListTeamMemberBookingProfiles
   *
   * @remarks
   * Lists booking profiles for team members.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  listTeamMemberBookingProfiles(
    request: Bookings.ListTeamMemberBookingProfilesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTeamMemberBookingProfilesResponse, ResponseError> {
    return this.#rawClient.execute<ListTeamMemberBookingProfilesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/bookings/team-member-booking-profiles"),
        auth: this.#auth.oauth2,
        query: [
          { name: "bookable_only", value: request.bookableOnly, schema: s.defaulted(s.boolean(), false) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "location_id", value: request.locationId, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTeamMemberBookingProfilesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * RetrieveBooking
   *
   * @remarks
   * Retrieves a booking.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth
   * scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
   * `APPOINTMENTS_READ` for the OAuth scope.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  retrieveBooking(
    request: Bookings.RetrieveBookingRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveBookingResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveBookingResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/bookings/{booking_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "booking_id", value: request.bookingId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveBookingResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * RetrieveBusinessBookingProfile
   *
   * @remarks
   * Retrieves a seller's booking profile.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  retrieveBusinessBookingProfile(
    options?: RequestOptions,
  ): ApiPromise<RetrieveBusinessBookingProfileResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveBusinessBookingProfileResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/bookings/business-booking-profile"),
        auth: this.#auth.oauth2,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveBusinessBookingProfileResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * RetrieveLocationBookingProfile
   *
   * @remarks
   * Retrieves a seller's location booking profile.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  retrieveLocationBookingProfile(
    request: Bookings.RetrieveLocationBookingProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveLocationBookingProfileResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveLocationBookingProfileResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/bookings/location-booking-profiles/{location_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "location_id", value: request.locationId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveLocationBookingProfileResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * RetrieveTeamMemberBookingProfile
   *
   * @remarks
   * Retrieves a team member's booking profile.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  retrieveTeamMemberBookingProfile(
    request: Bookings.RetrieveTeamMemberBookingProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveTeamMemberBookingProfileResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveTeamMemberBookingProfileResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/bookings/team-member-booking-profiles/{team_member_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "team_member_id", value: request.teamMemberId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveTeamMemberBookingProfileResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * SearchAvailability
   *
   * @remarks
   * Searches for availabilities for booking.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth
   * scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
   * `APPOINTMENTS_READ` for the OAuth scope.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  searchAvailability(
    request: Bookings.SearchAvailabilityRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchAvailabilityResponse, ResponseError> {
    return this.#rawClient.execute<SearchAvailabilityResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/bookings/availability/search"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: searchAvailabilityRequestSchema },
      },
      {
        success: { kind: "json", schema: searchAvailabilityResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * UpdateBooking
   *
   * @remarks
   * Updates a booking.
   *
   * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth
   * scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
   * `APPOINTMENTS_WRITE` for the OAuth scope.
   *
   * For calls to this endpoint with seller-level permissions to succeed, the seller must have
   * subscribed to *Appointments Plus* or *Appointments Premium*.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  updateBooking(
    request: Bookings.UpdateBookingRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateBookingResponse, ResponseError> {
    return this.#rawClient.execute<UpdateBookingResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/bookings/{booking_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "booking_id", value: request.bookingId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateBookingRequestSchema },
      },
      {
        success: { kind: "json", schema: updateBookingResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Bookings {
  export type BulkRetrieveBookingsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BulkRetrieveBookingsRequest;
  };

  export type BulkRetrieveTeamMemberBookingProfilesRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BulkRetrieveTeamMemberBookingProfilesRequest;
  };

  export type CancelBookingRequestParams = {
    /** The ID of the [Booking](entity:Booking) object representing the to-be-cancelled booking. */
    bookingId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CancelBookingRequest;
  };

  export type CreateBookingRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateBookingRequest;
  };

  export type ListBookingsRequest = {
    /** The maximum number of results per page to return in a paged response. */
    limit?: number;
    /**
     * The pagination cursor from the preceding response to return the next page of the results. Do
     * not set this when retrieving the first page of the results.
     */
    cursor?: string;
    /**
     * The [customer](entity:Customer) for whom to retrieve bookings. If this is not set, bookings
     * for all customers are retrieved.
     */
    customerId?: string;
    /**
     * The team member for whom to retrieve bookings. If this is not set, bookings of all members
     * are retrieved.
     */
    teamMemberId?: string;
    /**
     * The location for which to retrieve bookings. If this is not set, all locations' bookings are
     * retrieved.
     */
    locationId?: string;
    /**
     * The RFC 3339 timestamp specifying the earliest of the start time. If this is not set, the
     * current time is used.
     */
    startAtMin?: string;
    /**
     * The RFC 3339 timestamp specifying the latest of the start time. If this is not set, the time
     * of 31 days after `start_at_min` is used.
     */
    startAtMax?: string;
  };

  export type ListLocationBookingProfilesRequest = {
    /** The maximum number of results to return in a paged response. */
    limit?: number;
    /**
     * The pagination cursor from the preceding response to return the next page of the results. Do
     * not set this when retrieving the first page of the results.
     */
    cursor?: string;
  };

  export type ListTeamMemberBookingProfilesRequest = {
    /**
     * Indicates whether to include only bookable team members in the returned result (`true`) or
     * not (`false`).
     *
     * @default false
     */
    bookableOnly?: boolean;
    /** The maximum number of results to return in a paged response. */
    limit?: number;
    /**
     * The pagination cursor from the preceding response to return the next page of the results. Do
     * not set this when retrieving the first page of the results.
     */
    cursor?: string;
    /**
     * Indicates whether to include only team members enabled at the given location in the returned
     * result.
     */
    locationId?: string;
  };

  export type RetrieveBookingRequest = {
    /** The ID of the [Booking](entity:Booking) object representing the to-be-retrieved booking. */
    bookingId: string;
  };

  export type RetrieveLocationBookingProfileRequest = {
    /** The ID of the location to retrieve the booking profile. */
    locationId: string;
  };

  export type RetrieveTeamMemberBookingProfileRequest = {
    /** The ID of the team member to retrieve. */
    teamMemberId: string;
  };

  export type SearchAvailabilityRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: SearchAvailabilityRequest;
  };

  export type UpdateBookingRequestParams = {
    /** The ID of the [Booking](entity:Booking) object representing the to-be-updated booking. */
    bookingId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateBookingRequest;
  };
}
