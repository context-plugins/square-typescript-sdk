<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — Square (TypeScript)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, request-field placement, error types and server wiring **by lookup**. Model shapes are *not* duplicated here — the map names the file declaring each type and the schema value exported beside it; read the shape there. The compiler is the backstop: a wrong name fails to build.

|  |  |
| --- | --- |
| SDK display name | Square |
| Package | `square` |
| Package version | `2.0` |
| API spec version | `2.0` |
| Import specifier | `square` — the package root is the **only** entry. Deep imports (`square/models/...`) do not resolve; the `exports` map exposes `.` and `./package.json` and nothing else |
| Module format | dual ESM + CommonJS, as folder dialects (`dist/esm`, `dist/commonjs`), each with its own `package.json` marker. No `.mjs`, `.cjs`, `.d.mts` or `.d.cts` files exist |
| Node floor | `>=20` (`engines.node`) |
| TypeScript floor | a resolver that reads `exports` (4.7+), plus whatever the pinned `zod` requires — `zod@4` needs 5.5 or later. The public `.d.ts` chain reaches `zod/v4-mini`, so this is a real constraint rather than a build-tool version |
| Runtime dependency | `zod` (`^3.25.0 \|\| ^4.0.0`), imported as `zod/v4-mini`. The only runtime dependency |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec. If a lookup here fails to compile, trust the compiler and re-read the source file named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file and `package.json` — never to the page that carries them: a page two directories deep writes exactly what a page at the root would. The package ships its `src/` tree, so the same paths resolve inside `node_modules/square/` too. An import specifier ending `.js` inside that source is the NodeNext spelling of the sibling `.ts` file.

---

## Getting a client

```ts
import { PkceMethod, ServerEnvironment, SquareClient } from "square";

const client = new SquareClient({
  serverEnvironment: ServerEnvironment.Production,
  oauth2: {
    clientId: "YOUR_CLIENT_ID",
    redirectUri: "YOUR_REDIRECT_URI",
    pkce: PkceMethod.S256,
    promptForAuthorizationCode: (authorizationUrl, signal) => Promise.resolve("YOUR_AUTHORIZATION_CODE"),
  },
  oauth2ClientSecret: "YOUR_API_KEY",
});
```

The only constructor is `new SquareClient(clientOptions: Partial<ClientOptions> = {})`, so `new SquareClient()` is valid. Resources are memoized lazy getters on the client — `client.oAuth`, `client.v1Transactions`, `client.applePay`, `client.bankAccounts`, `client.bookings`, `client.bookingCustomAttributes`, `client.cards`, `client.cashDrawers`, `client.catalog`, `client.channels`, `client.customers`, `client.customerCustomAttributes`, `client.customerGroups`, `client.customerSegments`, `client.devices`, `client.disputes`, `client.employees`, `client.events`, `client.giftCards`, `client.giftCardActivities`, `client.inventory`, `client.invoices`, `client.labor`, `client.locations`, `client.locationCustomAttributes`, `client.checkoutApi`, `client.transactions`, `client.loyalty`, `client.merchants`, `client.merchantCustomAttributes`, `client.orders`, `client.orderCustomAttributes`, `client.payments`, `client.payouts`, `client.refunds`, `client.sites`, `client.snippets`, `client.subscriptions`, `client.team`, `client.terminal`, `client.transferOrderApi`, `client.vendors`, `client.webhookSubscriptions` — and their classes are exported only for their merged namespaces and for `instanceof`; their constructors take engine internals that are not exported, so reach a resource only through its getter.

All `ClientOptions` fields (source: `src/client-options.ts`; every field is `readonly`):

| Field | Type | Default |
| --- | --- | --- |
| `serverEnvironment` | `ServerEnvironment` | `ServerEnvironment.Production` |
| `serverOptions` | `ServerOptions` | `{}` — each resolver merges its own per-environment defaults in |
| `timeout` | `number` (ms) | `60_000` |
| `fetch` | `FetchLike \| undefined` | the global `fetch`, resolved by the transport |
| `oauth2` | `OAuth2AuthorizationCodeCredentials \| undefined` | unset |
| `oauth2Strategy` | `OAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials> \| undefined` | the built-in grant |
| `oauth2ClientSecret` | `TokenProvider \| undefined` | unset |

The 3 auth fields are all optional, and an unset one is not an error — the operation that wanted it simply sends no credential. What each one puts on the wire, and which operations require it, are under Servers & auth.

Two engine behaviours the table cannot show. A non-finite or non-positive `timeout` is **not** "no timeout" — the transport (`src/core/raw-client.ts`) falls back to its own ceiling and clamps anything above it. And when no `fetch` is reachable the **constructor** throws `SdkError`, not the first call.

**`ClientOptions.fetch` is the one extension point** — there are no hooks, no middleware and no interceptors, so a proxy, a custom agent, extra headers, retries or request logging all go here. A replacement **must forward `init.signal`** to whatever actually performs the request; spreading `...init` does it. Drop it and both the per-call signal and `timeout` go inert — the call neither aborts nor times out.

**Cancellation.** The `signal` on `RequestOptions` is the whole per-request surface. An already-aborted signal rejects immediately, `err.cause` is whatever was passed to `abort()`, and the client-level `timeout` surfaces through the same branch with `err.kind === "timeout"`. There is no per-request timeout.

The entire per-request surface is the optional second argument of every operation:

| Type | Members | Source |
| --- | --- | --- |
| `RequestOptions` | `signal?: AbortSignal` | `src/core/api-request.ts` |

**Not on this SDK.** These are absent by design, not undocumented. This table ships with `src/core/` and is versioned with it.

| You might reach for | Reality |
| --- | --- |
| `maxRetries`, backoff, `Retry-After` handling | no retries. A failed call rejects once |
| a logger, `logLevel`, request/response logging | none. `src/core/` contains no `console` call |
| hooks, middleware, interceptors, `onRequest`/`onResponse` | none. `fetch` is the one extension point |
| pagination, `for await`, auto-paging helpers | no operation is paginated and nothing is async-iterable |
| SSE, `text/event-stream`, `ReadableStream` | no streaming. Every decoder reads the body to completion |
| `FormData`, `Blob`, `File`, multipart, binary bodies | none. The only body kinds are empty, JSON, form-urlencoded and text |
| per-request `headers`, `timeout`, `baseUrl`, idempotency key | none. `RequestOptions` is `{ signal }` |
| the raw `fetch` `Response` | deliberately unreachable. `status` and `headers` are on `asApiResult()` and on a thrown `ResponseError` |

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**, and failures fall into **two disjoint families**. Neither is `instanceof` the other, so the two branches can never overlap and a complete `catch` needs both. `instanceof` is reliable **within one dialect**: a process that loads both — `import` in one file, `require` in another — gets two independent copies of every error class, and `instanceof` across that boundary is `false`. Narrow on `err.kind` or on `err.payload.kind` there, or on `err.name`, which is stable across copies.

- **Family A — the API answered with an error status.** The call rejects with `ResponseError`, or with a subclass of it where the spec declared error bodies for that operation. `err.payload` is a discriminated union whose `kind` names the **response schema the spec declared**, *not* the status code — so two statuses sharing one schema share one arm, and `"undeclared"` is an always-present arm carrying the raw bytes.
- **Family B — no usable response was produced.** The call rejects with a member of the `SquareError` set. `SquareError` is **abstract**: use it for `instanceof`, never construct it.

Core types (public members with their declared types; all are `readonly`):

| Type | Public members | Source |
| --- | --- | --- |
| `ResponseError<P>` | `status: number` · `headers: Headers` · `payload: ErrorPayload<P>`, and a `message` of the form `<status> <statusText>` | `src/core/response-error.ts` |
| `Declared<K, B>` | `kind: K` · `body: B` | `src/core/response-error.ts` |
| `ErrorPayload<P>` | `P` or `{ kind: "undeclared"; rawBody: ArrayBuffer }` | `src/core/response-error.ts` |
| `SquareError` (abstract; declared as `CoreError`) | `kind: ErrorKind` · `message` · `cause` | `src/core/errors.ts` |
| `SchemaError` | `kind: "schema"` · `rawBody: unknown` | `src/core/validation/schema-error.ts` |
| `AuthError` | `kind: "auth"` · `failures: readonly unknown[]` | `src/core/errors.ts` |
| `ApiResult<T, E>` | on success `{ ok: true; status; headers; value: T }`, on failure `{ ok: false; status; headers; errorMessage: string; error }` — `error` carries the **payload**, not the error object | `src/core/api-promise.ts` |

`ErrorKind` is one value per Family B class: `connection` (the `fetch` call rejected, or the body read failed mid-stream), `timeout` (the client-level timeout elapsed), `abort` (the per-call signal aborted, including one that was already aborted), `sdk` (a defect on the SDK side), `schema` (a value failed its schema in **either** direction — inbound the response body was malformed, outbound nothing was sent at all), and `auth` (a credential could not be **obtained**).

**`AuthError` is about obtaining a credential, never about being refused one.** A 401 *from the API* is a Family A `ResponseError` like any other status, so the two are disjoint and one `catch` arm cannot absorb the other. A 401 does have one auth consequence: it invalidates whatever that operation's scheme had cached, so the **next** call re-acquires. The current request is not retried — see Servers & auth.

```ts
try {
  const response = await client.oAuth.obtainToken({ body });
} catch (err) {
  if (err instanceof ResponseError) {
    // TODO: the API answered with an error status — read err.status and err.payload
  }
  if (err instanceof SquareError) {
    // TODO: no usable response was produced — err.kind says which
  }
}
```

A typed subclass narrows further, on `err.payload.kind`. Which arms an operation declares, with the status each covers, is the **Error arms** bullet on its page below.

**Matcher precedence** for a subclass with several arms: an exact numeric status is looked up across the whole table **first**; only then does the first covering wildcard or range win.

**The non-throwing form exists on every operation.** `.asApiResult()` returns `ApiResult<T, E>` and does **not** reject for an HTTP error status — it still rejects for Family B. It must be called on the value the operation returned: `ApiPromise` overrides `Symbol.species`, so `.then()`, `.catch()` and `.finally()` hand back a plain `Promise` and the method is gone.

Of **334 operations**, **0** declare typed error bodies and **334** reject with the base `ResponseError`, whose payload is always the `"undeclared"` arm.

---

## Operations — by resource (43 groups, 334 operations)

Each page below carries one block per operation, with bullets in the fixed order **Server**, **Signature**, **Wire**, **Auth**, **Request body**, **SDK-sent**, **Returns**, **Error**, **Error arms**, then a **Fields** table mapping every request field to the channel it travels on, and a **Type sources** table naming the declaring file and schema value of every type the operation mentions. With `api-reference.md` documenting operations only, that table is the route from an operation to the file declaring what it takes.

**Each block states what is specific to its operation. Everything in the table below holds for EVERY operation unless that operation says otherwise, so a block silent on one of these points is telling you the default here applies — take it and move on rather than opening the source to confirm it.**

| Applies to every operation | Stated where | A block departs from it only by |
| --- | --- | --- |
| **Call shape `op(request, options?)`** — one flat request object first, the per-call options second. There is no positional overload, and no per-call base URL, header, timeout, retry or auth override | here, Getting a client | never — it always holds |
| **The request object is flat and channel-blind.** A field named `body` *is* the whole request body; every other field is fanned out to path, query, header or form by the SDK. Nothing in the object is nested by channel | here | never — the **Fields** table `Channel` column always resolves it |
| **Throw-based, returning `ApiPromise<T, E>`.** `await` it for `T`; call `.asApiResult()` on the returned value for the non-throwing `ApiResult<T, E>`. No operation is result-only | here, Error-handling model | never |
| **`E` is the base `ResponseError`** and the payload is always the `"undeclared"` arm | Error-handling model | the spec declared error bodies — the **Error** bullet names a subclass and an **Error arms** bullet gives each arm's tag, status and body |
| **The request body and its media type are stated on every block**, by a **Request body** bullet that is never omitted. `none` means no body **and no `Content-Type` header** | here | never — the bullet is always present |
| **Resolves once, to one whole value.** No pagination, no streaming, no SSE, no async iterables, no partial results, no multipart and no binary anywhere | here, Not on this SDK | never at this SDK version |
| **Server group `default`** | here, Servers & auth | the operation is on another group — its block carries a **Server** bullet |
| **Every operation states its auth requirement**, by an **Auth** bullet that is never omitted — one scheme, a composition over schemes, or `none` for a public operation | here, Servers & auth | never — the bullet is always present |
| **Every value is schema-encoded before the request is built** — a wrong type or format rejects and nothing is sent. **An omitted field that has a default is still sent, with that default**, filled by the SDK rather than by the server | here, Models | the field has a default — it appears in the **Fields** table `Default` column |
| **Field names are TypeScript camelCase and the wire name is the same** | here | some field differs — the **Fields** table gains a `Wire` column, where an em dash means "same as the field name" |
| **Arrays repeat their key and objects bracket-expand** | the serialization block below | never — this SDK declares no per-field serialization style, so every array takes this one |

**Wire serialization, once, for every channel** (source: `src/core/param-value.ts`, `src/core/url.ts`, `src/core/headers.ts`, `src/core/params.ts`). This block ships with `src/core/` and is versioned with it:

- **`path`** takes no style. An array is comma-joined with each element percent-encoded **separately**; an object becomes one percent-encoded JSON document inside the segment. A field whose encoded value is `undefined` throws `SdkError` naming the unfilled placeholder; `null` collapses the segment.
- **`header`** takes no style. An array is comma-joined un-encoded (OpenAPI `simple`). `undefined` says nothing, while `null` and an empty array are tombstones that remove the header. Later layers win by **lowercased** name, in the order body content type, then client defaults, then operation.
- **`query`** and **`form`** repeat an array's key and bracket-expand an object at any depth (`filter[status]=open`, `ranges[amount][min]=10`). An array of *objects* bracket-expands per element with **no index**, so element boundaries collapse.
- Nullish **fields** are dropped from every channel except `path`, where `null` collapses the segment. A nullish array **element** is dropped, so an all-nullish array emits no key at all.
- `form` bodies use RFC 1866 encoding (space becomes `+`); `query` uses `%20`. On the wire both key and value go through `encodeURIComponent`, plus a further escape of `!`, `'`, `(`, `)` and `*`.

**The verb and route are on the pages below**, where a map for a language whose method names are derived from the route can leave them to the source. A TypeScript method name carries none of it, and a `path` field row is unreadable without the route template it fills.

**Endpoint prose is not on this map.** Where the *semantics* of an operation decide what you must pass — a field whose value changes server-side behaviour, an ordering or exclusivity rule between fields — read `api-reference.md`, whose entries are keyed by the same signature these pages print. Blocks here give you the contract: names, channels, types, defaults, errors.

| Resource (`client.X`) | Ops | Page |
| --- | --- | --- |
| `oAuth` | 3 | [map/operations/oauth.md](map/operations/oauth.md) |
| `v1Transactions` | 3 | [map/operations/v1-transactions.md](map/operations/v1-transactions.md) |
| `applePay` | 1 | [map/operations/apple-pay.md](map/operations/apple-pay.md) |
| `bankAccounts` | 5 | [map/operations/bank-accounts.md](map/operations/bank-accounts.md) |
| `bookings` | 13 | [map/operations/bookings.md](map/operations/bookings.md) |
| `bookingCustomAttributes` | 11 | [map/operations/booking-custom-attributes.md](map/operations/booking-custom-attributes.md) |
| `cards` | 4 | [map/operations/cards.md](map/operations/cards.md) |
| `cashDrawers` | 3 | [map/operations/cash-drawers.md](map/operations/cash-drawers.md) |
| `catalog` | 14 | [map/operations/catalog.md](map/operations/catalog.md) |
| `channels` | 3 | [map/operations/channels.md](map/operations/channels.md) |
| `customers` | 14 | [map/operations/customers.md](map/operations/customers.md) |
| `customerCustomAttributes` | 10 | [map/operations/customer-custom-attributes.md](map/operations/customer-custom-attributes.md) |
| `customerGroups` | 5 | [map/operations/customer-groups.md](map/operations/customer-groups.md) |
| `customerSegments` | 2 | [map/operations/customer-segments.md](map/operations/customer-segments.md) |
| `devices` | 5 | [map/operations/devices.md](map/operations/devices.md) |
| `disputes` | 9 | [map/operations/disputes.md](map/operations/disputes.md) |
| `employees` | 2 | [map/operations/employees.md](map/operations/employees.md) |
| `events` | 4 | [map/operations/events.md](map/operations/events.md) |
| `giftCards` | 7 | [map/operations/gift-cards.md](map/operations/gift-cards.md) |
| `giftCardActivities` | 2 | [map/operations/gift-card-activities.md](map/operations/gift-card-activities.md) |
| `inventory` | 19 | [map/operations/inventory.md](map/operations/inventory.md) |
| `invoices` | 10 | [map/operations/invoices.md](map/operations/invoices.md) |
| `labor` | 27 | [map/operations/labor.md](map/operations/labor.md) |
| `locations` | 4 | [map/operations/locations.md](map/operations/locations.md) |
| `locationCustomAttributes` | 11 | [map/operations/location-custom-attributes.md](map/operations/location-custom-attributes.md) |
| `checkoutApi` | 10 | [map/operations/checkout-api.md](map/operations/checkout-api.md) |
| `transactions` | 4 | [map/operations/transactions.md](map/operations/transactions.md) |
| `loyalty` | 18 | [map/operations/loyalty.md](map/operations/loyalty.md) |
| `merchants` | 2 | [map/operations/merchants.md](map/operations/merchants.md) |
| `merchantCustomAttributes` | 11 | [map/operations/merchant-custom-attributes.md](map/operations/merchant-custom-attributes.md) |
| `orders` | 8 | [map/operations/orders.md](map/operations/orders.md) |
| `orderCustomAttributes` | 11 | [map/operations/order-custom-attributes.md](map/operations/order-custom-attributes.md) |
| `payments` | 7 | [map/operations/payments.md](map/operations/payments.md) |
| `payouts` | 3 | [map/operations/payouts.md](map/operations/payouts.md) |
| `refunds` | 3 | [map/operations/refunds.md](map/operations/refunds.md) |
| `sites` | 1 | [map/operations/sites.md](map/operations/sites.md) |
| `snippets` | 3 | [map/operations/snippets.md](map/operations/snippets.md) |
| `subscriptions` | 12 | [map/operations/subscriptions.md](map/operations/subscriptions.md) |
| `team` | 12 | [map/operations/team.md](map/operations/team.md) |
| `terminal` | 15 | [map/operations/terminal.md](map/operations/terminal.md) |
| `transferOrderApi` | 8 | [map/operations/transfer-order-api.md](map/operations/transfer-order-api.md) |
| `vendors` | 7 | [map/operations/vendors.md](map/operations/vendors.md) |
| `webhookSubscriptions` | 8 | [map/operations/webhook-subscriptions.md](map/operations/webhook-subscriptions.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every module under `src/models/` declares exactly one model type and the schema value beside it, and both are re-exported from the package root. So there are two facts per type, and the map gives both: the **names you import** and the **file you read**.

```ts
import { type AchDetails, achDetailsSchema } from "square";
```

Take the pair from an operation's **Type sources** table. **Do not derive the path from the type name** — the transform is not reversible in general, and the table is the authority. There is no default export.

| Group | Count | Directory |
| --- | --- | --- |
| Objects | 1271 | `src/models/` |
| Enums (open; const companion plus schema) | 203 | `src/models/` |

**Conventions.** Every model is a plain `type`, not a class — build one with an object literal; there is no constructor and no builder. `f: T` is required, `f?: T` is optional (omit the key), and `f: T | null` is a **required, nullable** field where `null` is a value distinct from an omitted key. Optional properties are declared `f?: T`, not `f?: T | undefined`, so under `exactOptionalPropertyTypes` you must **omit or spread** an absent field rather than assign `undefined` to it.

**Schema companions.** `Schema<T, W = Encoded<T>>` is `{ decode(v: unknown): T; encode(v: unknown): W }`, so a schema value is directly usable both ways. `Encoded<T>` is the wire projection — a `Date` becomes `string | number`, a `Uint8Array` becomes a base64 `string`, recursing through arrays and objects. `EnumSchema<T>` adds `readonly values: readonly T[]`, so an enum's known set is testable at run time.

**Enums are open, and are not TypeScript `enum`s.** Each is a `const` companion object plus a union that includes `(string & {})` or `(number & {})`, so **any** value of the right base type is assignable and the schema validates the base type only, never membership. That is deliberate: an unrecognized server value round-trips instead of throwing. Use `.values` to test membership yourself.

| Enum | Members (member to wire value) | Schema value |
| --- | --- | --- |
| `ActionCancelReason` | `BuyerCanceled` to `"BUYER_CANCELED"` · `SellerCanceled` to `"SELLER_CANCELED"` · `TimedOut` to `"TIMED_OUT"` | `actionCancelReasonSchema` |
| `ActivityType` | `Adjustment` to `"ADJUSTMENT"` · `AppFeeRefund` to `"APP_FEE_REFUND"` · `AppFeeRevenue` to `"APP_FEE_REVENUE"` · `AutomaticSavings` to `"AUTOMATIC_SAVINGS"` · `AutomaticSavingsReversed` to `"AUTOMATIC_SAVINGS_REVERSED"` · `Charge` to `"CHARGE"` · `DepositFee` to `"DEPOSIT_FEE"` · `DepositFeeReversed` to `"DEPOSIT_FEE_REVERSED"` · `Dispute` to `"DISPUTE"` · `Escheatment` to `"ESCHEATMENT"` · `Fee` to `"FEE"` · `FreeProcessing` to `"FREE_PROCESSING"` · `HoldAdjustment` to `"HOLD_ADJUSTMENT"` · `InitialBalanceChange` to `"INITIAL_BALANCE_CHANGE"` · `MoneyTransfer` to `"MONEY_TRANSFER"` · `MoneyTransferReversal` to `"MONEY_TRANSFER_REVERSAL"` · `OpenDispute` to `"OPEN_DISPUTE"` · `Other` to `"OTHER"` · `OtherAdjustment` to `"OTHER_ADJUSTMENT"` · `PaidServiceFee` to `"PAID_SERVICE_FEE"` · `PaidServiceFeeRefund` to `"PAID_SERVICE_FEE_REFUND"` · `RedemptionCode` to `"REDEMPTION_CODE"` · `Refund` to `"REFUND"` · `ReleaseAdjustment` to `"RELEASE_ADJUSTMENT"` · `ReserveHold` to `"RESERVE_HOLD"` · `ReserveRelease` to `"RESERVE_RELEASE"` · `ReturnedPayout` to `"RETURNED_PAYOUT"` · `SquareCapitalPayment` to `"SQUARE_CAPITAL_PAYMENT"` · `SquareCapitalReversedPayment` to `"SQUARE_CAPITAL_REVERSED_PAYMENT"` · `SubscriptionFee` to `"SUBSCRIPTION_FEE"` · `SubscriptionFeePaidRefund` to `"SUBSCRIPTION_FEE_PAID_REFUND"` · `SubscriptionFeeRefund` to `"SUBSCRIPTION_FEE_REFUND"` · `TaxOnFee` to `"TAX_ON_FEE"` · `ThirdPartyFee` to `"THIRD_PARTY_FEE"` · `ThirdPartyFeeRefund` to `"THIRD_PARTY_FEE_REFUND"` · `Payout` to `"PAYOUT"` · `AutomaticBitcoinConversions` to `"AUTOMATIC_BITCOIN_CONVERSIONS"` · `AutomaticBitcoinConversionsReversed` to `"AUTOMATIC_BITCOIN_CONVERSIONS_REVERSED"` · `CreditCardRepayment` to `"CREDIT_CARD_REPAYMENT"` · `CreditCardRepaymentReversed` to `"CREDIT_CARD_REPAYMENT_REVERSED"` · `LocalOffersCashback` to `"LOCAL_OFFERS_CASHBACK"` · `LocalOffersFee` to `"LOCAL_OFFERS_FEE"` · `PercentageProcessingEnrollment` to `"PERCENTAGE_PROCESSING_ENROLLMENT"` · `PercentageProcessingDeactivation` to `"PERCENTAGE_PROCESSING_DEACTIVATION"` · `PercentageProcessingRepayment` to `"PERCENTAGE_PROCESSING_REPAYMENT"` · `PercentageProcessingRepaymentReversed` to `"PERCENTAGE_PROCESSING_REPAYMENT_REVERSED"` · `ProcessingFee` to `"PROCESSING_FEE"` · `ProcessingFeeRefund` to `"PROCESSING_FEE_REFUND"` · `UndoProcessingFeeRefund` to `"UNDO_PROCESSING_FEE_REFUND"` · `GiftCardLoadFee` to `"GIFT_CARD_LOAD_FEE"` · `GiftCardLoadFeeRefund` to `"GIFT_CARD_LOAD_FEE_REFUND"` · `UndoGiftCardLoadFeeRefund` to `"UNDO_GIFT_CARD_LOAD_FEE_REFUND"` · `BalanceFoldersTransfer` to `"BALANCE_FOLDERS_TRANSFER"` · `BalanceFoldersTransferReversed` to `"BALANCE_FOLDERS_TRANSFER_REVERSED"` · `GiftCardPoolTransfer` to `"GIFT_CARD_POOL_TRANSFER"` · `GiftCardPoolTransferReversed` to `"GIFT_CARD_POOL_TRANSFER_REVERSED"` · `SquarePayrollTransfer` to `"SQUARE_PAYROLL_TRANSFER"` · `SquarePayrollTransferReversed` to `"SQUARE_PAYROLL_TRANSFER_REVERSED"` | `activityTypeSchema` |
| `ApplicationDetailsExternalSquareProduct` | `Appointments` to `"APPOINTMENTS"` · `EcommerceApi` to `"ECOMMERCE_API"` · `Invoices` to `"INVOICES"` · `OnlineStore` to `"ONLINE_STORE"` · `Other` to `"OTHER"` · `Restaurants` to `"RESTAURANTS"` · `Retail` to `"RETAIL"` · `SquarePos` to `"SQUARE_POS"` · `TerminalApi` to `"TERMINAL_API"` · `VirtualTerminal` to `"VIRTUAL_TERMINAL"` | `applicationDetailsExternalSquareProductSchema` |
| `ApplicationType` | `TerminalApi` to `"TERMINAL_API"` | `applicationTypeSchema` |
| `ArchivedState` | `ArchivedStateNotArchived` to `"ARCHIVED_STATE_NOT_ARCHIVED"` · `ArchivedStateArchived` to `"ARCHIVED_STATE_ARCHIVED"` · `ArchivedStateAll` to `"ARCHIVED_STATE_ALL"` | `archivedStateSchema` |
| `BankAccountStatus` | `VerificationInProgress` to `"VERIFICATION_IN_PROGRESS"` · `Verified` to `"VERIFIED"` · `Disabled` to `"DISABLED"` | `bankAccountStatusSchema` |
| `BankAccountType` | `Checking` to `"CHECKING"` · `Savings` to `"SAVINGS"` · `Investment` to `"INVESTMENT"` · `Other` to `"OTHER"` · `BusinessChecking` to `"BUSINESS_CHECKING"` | `bankAccountTypeSchema` |
| `BatchRetrieveInventoryChangesSortField` | `OccurredAt` to `"OCCURRED_AT"` | `batchRetrieveInventoryChangesSortFieldSchema` |
| `BookingBookingSource` | `FirstPartyMerchant` to `"FIRST_PARTY_MERCHANT"` · `FirstPartyBuyer` to `"FIRST_PARTY_BUYER"` · `ThirdPartyBuyer` to `"THIRD_PARTY_BUYER"` · `Api` to `"API"` | `bookingBookingSourceSchema` |
| `BookingCreatorDetailsCreatorType` | `TeamMember` to `"TEAM_MEMBER"` · `Customer` to `"CUSTOMER"` | `bookingCreatorDetailsCreatorTypeSchema` |
| `BookingStatus` | `Pending` to `"PENDING"` · `CancelledByCustomer` to `"CANCELLED_BY_CUSTOMER"` · `CancelledBySeller` to `"CANCELLED_BY_SELLER"` · `Declined` to `"DECLINED"` · `Accepted` to `"ACCEPTED"` · `NoShow` to `"NO_SHOW"` | `bookingStatusSchema` |
| `BulkRetrieveChannelsRequestConstants` | `MaxBatchSize` to `"MAX_BATCH_SIZE"` | `bulkRetrieveChannelsRequestConstantsSchema` |
| `BusinessAppointmentSettingsAlignmentTime` | `ServiceDuration` to `"SERVICE_DURATION"` · `QuarterHourly` to `"QUARTER_HOURLY"` · `HalfHourly` to `"HALF_HOURLY"` · `Hourly` to `"HOURLY"` | `businessAppointmentSettingsAlignmentTimeSchema` |
| `BusinessAppointmentSettingsBookingLocationType` | `BusinessLocation` to `"BUSINESS_LOCATION"` · `CustomerLocation` to `"CUSTOMER_LOCATION"` · `Phone` to `"PHONE"` | `businessAppointmentSettingsBookingLocationTypeSchema` |
| `BusinessAppointmentSettingsCancellationPolicy` | `CancellationTreatedAsNoShow` to `"CANCELLATION_TREATED_AS_NO_SHOW"` · `CustomPolicy` to `"CUSTOM_POLICY"` | `businessAppointmentSettingsCancellationPolicySchema` |
| `BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType` | `PerTeamMember` to `"PER_TEAM_MEMBER"` · `PerLocation` to `"PER_LOCATION"` | `businessAppointmentSettingsMaxAppointmentsPerDayLimitTypeSchema` |
| `BusinessBookingProfileBookingPolicy` | `AcceptAll` to `"ACCEPT_ALL"` · `RequiresAcceptance` to `"REQUIRES_ACCEPTANCE"` | `businessBookingProfileBookingPolicySchema` |
| `BusinessBookingProfileCustomerTimezoneChoice` | `BusinessLocationTimezone` to `"BUSINESS_LOCATION_TIMEZONE"` · `CustomerChoice` to `"CUSTOMER_CHOICE"` | `businessBookingProfileCustomerTimezoneChoiceSchema` |
| `CardBrand` | `OtherBrand` to `"OTHER_BRAND"` · `Visa` to `"VISA"` · `Mastercard` to `"MASTERCARD"` · `AmericanExpress` to `"AMERICAN_EXPRESS"` · `Discover` to `"DISCOVER"` · `DiscoverDiners` to `"DISCOVER_DINERS"` · `Jcb` to `"JCB"` · `ChinaUnionpay` to `"CHINA_UNIONPAY"` · `SquareGiftCard` to `"SQUARE_GIFT_CARD"` · `SquareCapitalCard` to `"SQUARE_CAPITAL_CARD"` · `Interac` to `"INTERAC"` · `Eftpos` to `"EFTPOS"` · `Felica` to `"FELICA"` · `Ebt` to `"EBT"` | `cardBrandSchema` |
| `CardCoBrand` | `Unknown` to `"UNKNOWN"` · `Afterpay` to `"AFTERPAY"` · `Clearpay` to `"CLEARPAY"` | `cardCoBrandSchema` |
| `CardIssuerAlert` | `IssuerAlertCardClosed` to `"ISSUER_ALERT_CARD_CLOSED"` | `cardIssuerAlertSchema` |
| `CardPrepaidType` | `UnknownPrepaidType` to `"UNKNOWN_PREPAID_TYPE"` · `NotPrepaid` to `"NOT_PREPAID"` · `Prepaid` to `"PREPAID"` | `cardPrepaidTypeSchema` |
| `CardType` | `UnknownCardType` to `"UNKNOWN_CARD_TYPE"` · `Credit` to `"CREDIT"` · `Debit` to `"DEBIT"` | `cardTypeSchema` |
| `CashDrawerEventType` | `NoSale` to `"NO_SALE"` · `CashTenderPayment` to `"CASH_TENDER_PAYMENT"` · `OtherTenderPayment` to `"OTHER_TENDER_PAYMENT"` · `CashTenderCancelledPayment` to `"CASH_TENDER_CANCELLED_PAYMENT"` · `OtherTenderCancelledPayment` to `"OTHER_TENDER_CANCELLED_PAYMENT"` · `CashTenderRefund` to `"CASH_TENDER_REFUND"` · `OtherTenderRefund` to `"OTHER_TENDER_REFUND"` · `PaidIn` to `"PAID_IN"` · `PaidOut` to `"PAID_OUT"` | `cashDrawerEventTypeSchema` |
| `CashDrawerShiftState` | `Open` to `"OPEN"` · `Ended` to `"ENDED"` · `Closed` to `"CLOSED"` | `cashDrawerShiftStateSchema` |
| `CatalogCategoryType` | `RegularCategory` to `"REGULAR_CATEGORY"` · `MenuCategory` to `"MENU_CATEGORY"` · `KitchenCategory` to `"KITCHEN_CATEGORY"` | `catalogCategoryTypeSchema` |
| `CatalogCustomAttributeDefinitionAppVisibility` | `AppVisibilityHidden` to `"APP_VISIBILITY_HIDDEN"` · `AppVisibilityReadOnly` to `"APP_VISIBILITY_READ_ONLY"` · `AppVisibilityReadWriteValues` to `"APP_VISIBILITY_READ_WRITE_VALUES"` | `catalogCustomAttributeDefinitionAppVisibilitySchema` |
| `CatalogCustomAttributeDefinitionSellerVisibility` | `SellerVisibilityHidden` to `"SELLER_VISIBILITY_HIDDEN"` · `SellerVisibilityReadWriteValues` to `"SELLER_VISIBILITY_READ_WRITE_VALUES"` | `catalogCustomAttributeDefinitionSellerVisibilitySchema` |
| `CatalogCustomAttributeDefinitionType` | `String` to `"STRING"` · `Boolean` to `"BOOLEAN"` · `Number` to `"NUMBER"` · `Selection` to `"SELECTION"` | `catalogCustomAttributeDefinitionTypeSchema` |
| `CatalogDiscountModifyTaxBasis` | `ModifyTaxBasis` to `"MODIFY_TAX_BASIS"` · `DoNotModifyTaxBasis` to `"DO_NOT_MODIFY_TAX_BASIS"` | `catalogDiscountModifyTaxBasisSchema` |
| `CatalogDiscountType` | `FixedPercentage` to `"FIXED_PERCENTAGE"` · `FixedAmount` to `"FIXED_AMOUNT"` · `VariablePercentage` to `"VARIABLE_PERCENTAGE"` · `VariableAmount` to `"VARIABLE_AMOUNT"` | `catalogDiscountTypeSchema` |
| `CatalogItemFoodAndBeverageDetailsDietaryPreferenceStandardDietaryPreference` | `DairyFree` to `"DAIRY_FREE"` · `GlutenFree` to `"GLUTEN_FREE"` · `Halal` to `"HALAL"` · `Kosher` to `"KOSHER"` · `NutFree` to `"NUT_FREE"` · `Vegan` to `"VEGAN"` · `Vegetarian` to `"VEGETARIAN"` | `catalogItemFoodAndBeverageDetailsDietaryPreferenceStandardDietaryPreferenceSchema` |
| `CatalogItemFoodAndBeverageDetailsDietaryPreferenceType` | `Standard` to `"STANDARD"` · `Custom` to `"CUSTOM"` | `catalogItemFoodAndBeverageDetailsDietaryPreferenceTypeSchema` |
| `CatalogItemFoodAndBeverageDetailsIngredientStandardIngredient` | `Celery` to `"CELERY"` · `Crustaceans` to `"CRUSTACEANS"` · `Eggs` to `"EGGS"` · `Fish` to `"FISH"` · `Gluten` to `"GLUTEN"` · `Lupin` to `"LUPIN"` · `Milk` to `"MILK"` · `Molluscs` to `"MOLLUSCS"` · `Mustard` to `"MUSTARD"` · `Peanuts` to `"PEANUTS"` · `Sesame` to `"SESAME"` · `Soy` to `"SOY"` · `Sulphites` to `"SULPHITES"` · `TreeNuts` to `"TREE_NUTS"` | `catalogItemFoodAndBeverageDetailsIngredientStandardIngredientSchema` |
| `CatalogItemProductType` | `Regular` to `"REGULAR"` · `GiftCard` to `"GIFT_CARD"` · `AppointmentsService` to `"APPOINTMENTS_SERVICE"` · `FoodAndBev` to `"FOOD_AND_BEV"` · `Event` to `"EVENT"` · `Digital` to `"DIGITAL"` · `Donation` to `"DONATION"` · `LegacySquareOnlineService` to `"LEGACY_SQUARE_ONLINE_SERVICE"` · `LegacySquareOnlineMembership` to `"LEGACY_SQUARE_ONLINE_MEMBERSHIP"` | `catalogItemProductTypeSchema` |
| `CatalogModifierListModifierType` | `List` to `"LIST"` · `Text` to `"TEXT"` | `catalogModifierListModifierTypeSchema` |
| `CatalogModifierListSelectionType` | `Single` to `"SINGLE"` · `Multiple` to `"MULTIPLE"` | `catalogModifierListSelectionTypeSchema` |
| `CatalogModifierToggleOverrideType` | `No` to `"NO"` · `Yes` to `"YES"` · `NotSet` to `"NOT_SET"` | `catalogModifierToggleOverrideTypeSchema` |
| `CatalogObjectType` | `Item` to `"ITEM"` · `Image` to `"IMAGE"` · `Category` to `"CATEGORY"` · `ItemVariation` to `"ITEM_VARIATION"` · `Tax` to `"TAX"` · `Discount` to `"DISCOUNT"` · `ModifierList` to `"MODIFIER_LIST"` · `Modifier` to `"MODIFIER"` · `PricingRule` to `"PRICING_RULE"` · `ProductSet` to `"PRODUCT_SET"` · `TimePeriod` to `"TIME_PERIOD"` · `MeasurementUnit` to `"MEASUREMENT_UNIT"` · `SubscriptionPlanVariation` to `"SUBSCRIPTION_PLAN_VARIATION"` · `ItemOption` to `"ITEM_OPTION"` · `ItemOptionVal` to `"ITEM_OPTION_VAL"` · `CustomAttributeDefinition` to `"CUSTOM_ATTRIBUTE_DEFINITION"` · `QuickAmountsSettings` to `"QUICK_AMOUNTS_SETTINGS"` · `SubscriptionPlan` to `"SUBSCRIPTION_PLAN"` · `AvailabilityPeriod` to `"AVAILABILITY_PERIOD"` | `catalogObjectTypeSchema` |
| `CatalogPricingType` | `FixedPricing` to `"FIXED_PRICING"` · `VariablePricing` to `"VARIABLE_PRICING"` | `catalogPricingTypeSchema` |
| `CatalogQuickAmountType` | `QuickAmountTypeManual` to `"QUICK_AMOUNT_TYPE_MANUAL"` · `QuickAmountTypeAuto` to `"QUICK_AMOUNT_TYPE_AUTO"` | `catalogQuickAmountTypeSchema` |
| `CatalogQuickAmountsSettingsOption` | `Disabled` to `"DISABLED"` · `Manual` to `"MANUAL"` · `Auto` to `"AUTO"` | `catalogQuickAmountsSettingsOptionSchema` |
| `ChangeTiming` | `Immediate` to `"IMMEDIATE"` · `EndOfBillingCycle` to `"END_OF_BILLING_CYCLE"` | `changeTimingSchema` |
| `ChannelStatus` | `Active` to `"ACTIVE"` · `Inactive` to `"INACTIVE"` | `channelStatusSchema` |
| `CheckoutLocationSettingsBrandingButtonShape` | `Squared` to `"SQUARED"` · `Rounded` to `"ROUNDED"` · `Pill` to `"PILL"` | `checkoutLocationSettingsBrandingButtonShapeSchema` |
| `CheckoutLocationSettingsBrandingHeaderType` | `BusinessName` to `"BUSINESS_NAME"` · `FramedLogo` to `"FRAMED_LOGO"` · `FullWidthLogo` to `"FULL_WIDTH_LOGO"` | `checkoutLocationSettingsBrandingHeaderTypeSchema` |
| `CheckoutOptionsPaymentType` | `CardPresent` to `"CARD_PRESENT"` · `ManualCardEntry` to `"MANUAL_CARD_ENTRY"` · `FelicaId` to `"FELICA_ID"` · `FelicaQuicpay` to `"FELICA_QUICPAY"` · `FelicaTransportationGroup` to `"FELICA_TRANSPORTATION_GROUP"` · `FelicaAll` to `"FELICA_ALL"` · `Paypay` to `"PAYPAY"` · `QrCode` to `"QR_CODE"` | `checkoutOptionsPaymentTypeSchema` |
| `ComponentComponentType` | `Application` to `"APPLICATION"` · `CardReader` to `"CARD_READER"` · `Battery` to `"BATTERY"` · `Wifi` to `"WIFI"` · `Ethernet` to `"ETHERNET"` · `Printer` to `"PRINTER"` | `componentComponentTypeSchema` |
| `Country` | `Zz` to `"ZZ"` · `Ad` to `"AD"` · `Ae` to `"AE"` · `Af` to `"AF"` · `Ag` to `"AG"` · `Ai` to `"AI"` · `Al` to `"AL"` · `Am` to `"AM"` · `Ao` to `"AO"` · `Aq` to `"AQ"` · `Ar` to `"AR"` · `As` to `"AS"` · `At` to `"AT"` · `Au` to `"AU"` · `Aw` to `"AW"` · `Ax` to `"AX"` · `Az` to `"AZ"` · `Ba` to `"BA"` · `Bb` to `"BB"` · `Bd` to `"BD"` · `Be` to `"BE"` · `Bf` to `"BF"` · `Bg` to `"BG"` · `Bh` to `"BH"` · `Bi` to `"BI"` · `Bj` to `"BJ"` · `Bl` to `"BL"` · `Bm` to `"BM"` · `Bn` to `"BN"` · `Bo` to `"BO"` · `Bq` to `"BQ"` · `Br` to `"BR"` · `Bs` to `"BS"` · `Bt` to `"BT"` · `Bv` to `"BV"` · `Bw` to `"BW"` · `By` to `"BY"` · `Bz` to `"BZ"` · `Ca` to `"CA"` · `Cc` to `"CC"` · `Cd` to `"CD"` · `Cf` to `"CF"` · `Cg` to `"CG"` · `Ch` to `"CH"` · `Ci` to `"CI"` · `Ck` to `"CK"` · `Cl` to `"CL"` · `Cm` to `"CM"` · `Cn` to `"CN"` · `Co` to `"CO"` · `Cr` to `"CR"` · `Cu` to `"CU"` · `Cv` to `"CV"` · `Cw` to `"CW"` · `Cx` to `"CX"` · `Cy` to `"CY"` · `Cz` to `"CZ"` · `De` to `"DE"` · `Dj` to `"DJ"` · `Dk` to `"DK"` · `Dm` to `"DM"` · `Do` to `"DO"` · `Dz` to `"DZ"` · `Ec` to `"EC"` · `Ee` to `"EE"` · `Eg` to `"EG"` · `Eh` to `"EH"` · `Er` to `"ER"` · `Es` to `"ES"` · `Et` to `"ET"` · `Fi` to `"FI"` · `Fj` to `"FJ"` · `Fk` to `"FK"` · `Fm` to `"FM"` · `Fo` to `"FO"` · `Fr` to `"FR"` · `Ga` to `"GA"` · `Gb` to `"GB"` · `Gd` to `"GD"` · `Ge` to `"GE"` · `Gf` to `"GF"` · `Gg` to `"GG"` · `Gh` to `"GH"` · `Gi` to `"GI"` · `Gl` to `"GL"` · `Gm` to `"GM"` · `Gn` to `"GN"` · `Gp` to `"GP"` · `Gq` to `"GQ"` · `Gr` to `"GR"` · `Gs` to `"GS"` · `Gt` to `"GT"` · `Gu` to `"GU"` · `Gw` to `"GW"` · `Gy` to `"GY"` · `Hk` to `"HK"` · `Hm` to `"HM"` · `Hn` to `"HN"` · `Hr` to `"HR"` · `Ht` to `"HT"` · `Hu` to `"HU"` · `Id` to `"ID"` · `Ie` to `"IE"` · `Il` to `"IL"` · `Im` to `"IM"` · `In` to `"IN"` · `Io` to `"IO"` · `Iq` to `"IQ"` · `Ir` to `"IR"` · `Is` to `"IS"` · `It` to `"IT"` · `Je` to `"JE"` · `Jm` to `"JM"` · `Jo` to `"JO"` · `Jp` to `"JP"` · `Ke` to `"KE"` · `Kg` to `"KG"` · `Kh` to `"KH"` · `Ki` to `"KI"` · `Km` to `"KM"` · `Kn` to `"KN"` · `Kp` to `"KP"` · `Kr` to `"KR"` · `Kw` to `"KW"` · `Ky` to `"KY"` · `Kz` to `"KZ"` · `La` to `"LA"` · `Lb` to `"LB"` · `Lc` to `"LC"` · `Li` to `"LI"` · `Lk` to `"LK"` · `Lr` to `"LR"` · `Ls` to `"LS"` · `Lt` to `"LT"` · `Lu` to `"LU"` · `Lv` to `"LV"` · `Ly` to `"LY"` · `Ma` to `"MA"` · `Mc` to `"MC"` · `Md` to `"MD"` · `Me` to `"ME"` · `Mf` to `"MF"` · `Mg` to `"MG"` · `Mh` to `"MH"` · `Mk` to `"MK"` · `Ml` to `"ML"` · `Mm` to `"MM"` · `Mn` to `"MN"` · `Mo` to `"MO"` · `Mp` to `"MP"` · `Mq` to `"MQ"` · `Mr` to `"MR"` · `Ms` to `"MS"` · `Mt` to `"MT"` · `Mu` to `"MU"` · `Mv` to `"MV"` · `Mw` to `"MW"` · `Mx` to `"MX"` · `My` to `"MY"` · `Mz` to `"MZ"` · `Na` to `"NA"` · `Nc` to `"NC"` · `Ne` to `"NE"` · `Nf` to `"NF"` · `Ng` to `"NG"` · `Ni` to `"NI"` · `Nl` to `"NL"` · `No` to `"NO"` · `Np` to `"NP"` · `Nr` to `"NR"` · `Nu` to `"NU"` · `Nz` to `"NZ"` · `Om` to `"OM"` · `Pa` to `"PA"` · `Pe` to `"PE"` · `Pf` to `"PF"` · `Pg` to `"PG"` · `Ph` to `"PH"` · `Pk` to `"PK"` · `Pl` to `"PL"` · `Pm` to `"PM"` · `Pn` to `"PN"` · `Pr` to `"PR"` · `Ps` to `"PS"` · `Pt` to `"PT"` · `Pw` to `"PW"` · `Py` to `"PY"` · `Qa` to `"QA"` · `Re` to `"RE"` · `Ro` to `"RO"` · `Rs` to `"RS"` · `Ru` to `"RU"` · `Rw` to `"RW"` · `Sa` to `"SA"` · `Sb` to `"SB"` · `Sc` to `"SC"` · `Sd` to `"SD"` · `Se` to `"SE"` · `Sg` to `"SG"` · `Sh` to `"SH"` · `Si` to `"SI"` · `Sj` to `"SJ"` · `Sk` to `"SK"` · `Sl` to `"SL"` · `Sm` to `"SM"` · `Sn` to `"SN"` · `So` to `"SO"` · `Sr` to `"SR"` · `Ss` to `"SS"` · `St` to `"ST"` · `Sv` to `"SV"` · `Sx` to `"SX"` · `Sy` to `"SY"` · `Sz` to `"SZ"` · `Tc` to `"TC"` · `Td` to `"TD"` · `Tf` to `"TF"` · `Tg` to `"TG"` · `Th` to `"TH"` · `Tj` to `"TJ"` · `Tk` to `"TK"` · `Tl` to `"TL"` · `Tm` to `"TM"` · `Tn` to `"TN"` · `To` to `"TO"` · `Tr` to `"TR"` · `Tt` to `"TT"` · `Tv` to `"TV"` · `Tw` to `"TW"` · `Tz` to `"TZ"` · `Ua` to `"UA"` · `Ug` to `"UG"` · `Um` to `"UM"` · `Us` to `"US"` · `Uy` to `"UY"` · `Uz` to `"UZ"` · `Va` to `"VA"` · `Vc` to `"VC"` · `Ve` to `"VE"` · `Vg` to `"VG"` · `Vi` to `"VI"` · `Vn` to `"VN"` · `Vu` to `"VU"` · `Wf` to `"WF"` · `Ws` to `"WS"` · `Ye` to `"YE"` · `Yt` to `"YT"` · `Za` to `"ZA"` · `Zm` to `"ZM"` · `Zw` to `"ZW"` | `countrySchema` |
| `Currency` | `UnknownCurrency` to `"UNKNOWN_CURRENCY"` · `Aed` to `"AED"` · `Afn` to `"AFN"` · `All` to `"ALL"` · `Amd` to `"AMD"` · `Ang` to `"ANG"` · `Aoa` to `"AOA"` · `Ars` to `"ARS"` · `Aud` to `"AUD"` · `Awg` to `"AWG"` · `Azn` to `"AZN"` · `Bam` to `"BAM"` · `Bbd` to `"BBD"` · `Bdt` to `"BDT"` · `Bgn` to `"BGN"` · `Bhd` to `"BHD"` · `Bif` to `"BIF"` · `Bmd` to `"BMD"` · `Bnd` to `"BND"` · `Bob` to `"BOB"` · `Bov` to `"BOV"` · `Brl` to `"BRL"` · `Bsd` to `"BSD"` · `Btn` to `"BTN"` · `Bwp` to `"BWP"` · `Byr` to `"BYR"` · `Bzd` to `"BZD"` · `Cad` to `"CAD"` · `Cdf` to `"CDF"` · `Che` to `"CHE"` · `Chf` to `"CHF"` · `Chw` to `"CHW"` · `Clf` to `"CLF"` · `Clp` to `"CLP"` · `Cny` to `"CNY"` · `Cop` to `"COP"` · `Cou` to `"COU"` · `Crc` to `"CRC"` · `Cuc` to `"CUC"` · `Cup` to `"CUP"` · `Cve` to `"CVE"` · `Czk` to `"CZK"` · `Djf` to `"DJF"` · `Dkk` to `"DKK"` · `Dop` to `"DOP"` · `Dzd` to `"DZD"` · `Egp` to `"EGP"` · `Ern` to `"ERN"` · `Etb` to `"ETB"` · `Eur` to `"EUR"` · `Fjd` to `"FJD"` · `Fkp` to `"FKP"` · `Gbp` to `"GBP"` · `Gel` to `"GEL"` · `Ghs` to `"GHS"` · `Gip` to `"GIP"` · `Gmd` to `"GMD"` · `Gnf` to `"GNF"` · `Gtq` to `"GTQ"` · `Gyd` to `"GYD"` · `Hkd` to `"HKD"` · `Hnl` to `"HNL"` · `Hrk` to `"HRK"` · `Htg` to `"HTG"` · `Huf` to `"HUF"` · `Idr` to `"IDR"` · `Ils` to `"ILS"` · `Inr` to `"INR"` · `Iqd` to `"IQD"` · `Irr` to `"IRR"` · `Isk` to `"ISK"` · `Jmd` to `"JMD"` · `Jod` to `"JOD"` · `Jpy` to `"JPY"` · `Kes` to `"KES"` · `Kgs` to `"KGS"` · `Khr` to `"KHR"` · `Kmf` to `"KMF"` · `Kpw` to `"KPW"` · `Krw` to `"KRW"` · `Kwd` to `"KWD"` · `Kyd` to `"KYD"` · `Kzt` to `"KZT"` · `Lak` to `"LAK"` · `Lbp` to `"LBP"` · `Lkr` to `"LKR"` · `Lrd` to `"LRD"` · `Lsl` to `"LSL"` · `Ltl` to `"LTL"` · `Lvl` to `"LVL"` · `Lyd` to `"LYD"` · `Mad` to `"MAD"` · `Mdl` to `"MDL"` · `Mga` to `"MGA"` · `Mkd` to `"MKD"` · `Mmk` to `"MMK"` · `Mnt` to `"MNT"` · `Mop` to `"MOP"` · `Mro` to `"MRO"` · `Mur` to `"MUR"` · `Mvr` to `"MVR"` · `Mwk` to `"MWK"` · `Mxn` to `"MXN"` · `Mxv` to `"MXV"` · `Myr` to `"MYR"` · `Mzn` to `"MZN"` · `Nad` to `"NAD"` · `Ngn` to `"NGN"` · `Nio` to `"NIO"` · `Nok` to `"NOK"` · `Npr` to `"NPR"` · `Nzd` to `"NZD"` · `Omr` to `"OMR"` · `Pab` to `"PAB"` · `Pen` to `"PEN"` · `Pgk` to `"PGK"` · `Php` to `"PHP"` · `Pkr` to `"PKR"` · `Pln` to `"PLN"` · `Pyg` to `"PYG"` · `Qar` to `"QAR"` · `Ron` to `"RON"` · `Rsd` to `"RSD"` · `Rub` to `"RUB"` · `Rwf` to `"RWF"` · `Sar` to `"SAR"` · `Sbd` to `"SBD"` · `Scr` to `"SCR"` · `Sdg` to `"SDG"` · `Sek` to `"SEK"` · `Sgd` to `"SGD"` · `Shp` to `"SHP"` · `Sll` to `"SLL"` · `Sle` to `"SLE"` · `Sos` to `"SOS"` · `Srd` to `"SRD"` · `Ssp` to `"SSP"` · `Std` to `"STD"` · `Svc` to `"SVC"` · `Syp` to `"SYP"` · `Szl` to `"SZL"` · `Thb` to `"THB"` · `Tjs` to `"TJS"` · `Tmt` to `"TMT"` · `Tnd` to `"TND"` · `Top` to `"TOP"` · `Try` to `"TRY"` · `Ttd` to `"TTD"` · `Twd` to `"TWD"` · `Tzs` to `"TZS"` · `Uah` to `"UAH"` · `Ugx` to `"UGX"` · `Usd` to `"USD"` · `Usn` to `"USN"` · `Uss` to `"USS"` · `Uyi` to `"UYI"` · `Uyu` to `"UYU"` · `Uzs` to `"UZS"` · `Vef` to `"VEF"` · `Vnd` to `"VND"` · `Vuv` to `"VUV"` · `Wst` to `"WST"` · `Xaf` to `"XAF"` · `Xag` to `"XAG"` · `Xau` to `"XAU"` · `Xba` to `"XBA"` · `Xbb` to `"XBB"` · `Xbc` to `"XBC"` · `Xbd` to `"XBD"` · `Xcd` to `"XCD"` · `Xdr` to `"XDR"` · `Xof` to `"XOF"` · `Xpd` to `"XPD"` · `Xpf` to `"XPF"` · `Xpt` to `"XPT"` · `Xts` to `"XTS"` · `Xxx` to `"XXX"` · `Yer` to `"YER"` · `Zar` to `"ZAR"` · `Zmk` to `"ZMK"` · `Zmw` to `"ZMW"` · `Btc` to `"BTC"` · `Xus` to `"XUS"` | `currencySchema` |
| `CustomAttributeDefinitionVisibility` | `VisibilityHidden` to `"VISIBILITY_HIDDEN"` · `VisibilityReadOnly` to `"VISIBILITY_READ_ONLY"` · `VisibilityReadWriteValues` to `"VISIBILITY_READ_WRITE_VALUES"` | `customAttributeDefinitionVisibilitySchema` |
| `CustomerCreationSource` | `Other` to `"OTHER"` · `Appointments` to `"APPOINTMENTS"` · `Coupon` to `"COUPON"` · `DeletionRecovery` to `"DELETION_RECOVERY"` · `Directory` to `"DIRECTORY"` · `Egifting` to `"EGIFTING"` · `EmailCollection` to `"EMAIL_COLLECTION"` · `Feedback` to `"FEEDBACK"` · `Import` to `"IMPORT"` · `Invoices` to `"INVOICES"` · `Loyalty` to `"LOYALTY"` · `Marketing` to `"MARKETING"` · `Merge` to `"MERGE"` · `OnlineStore` to `"ONLINE_STORE"` · `InstantProfile` to `"INSTANT_PROFILE"` · `Terminal` to `"TERMINAL"` · `ThirdParty` to `"THIRD_PARTY"` · `ThirdPartyImport` to `"THIRD_PARTY_IMPORT"` · `UnmergeRecovery` to `"UNMERGE_RECOVERY"` | `customerCreationSourceSchema` |
| `CustomerInclusionExclusion` | `Include` to `"INCLUDE"` · `Exclude` to `"EXCLUDE"` | `customerInclusionExclusionSchema` |
| `CustomerSortField` | `Default` to `"DEFAULT"` · `CreatedAt` to `"CREATED_AT"` | `customerSortFieldSchema` |
| `DataCollectionOptionsInputType` | `Email` to `"EMAIL"` · `PhoneNumber` to `"PHONE_NUMBER"` | `dataCollectionOptionsInputTypeSchema` |
| `DayOfWeek` | `Sun` to `"SUN"` · `Mon` to `"MON"` · `Tue` to `"TUE"` · `Wed` to `"WED"` · `Thu` to `"THU"` · `Fri` to `"FRI"` · `Sat` to `"SAT"` | `dayOfWeekSchema` |
| `DestinationType` | `BankAccount` to `"BANK_ACCOUNT"` · `Card` to `"CARD"` · `SquareBalance` to `"SQUARE_BALANCE"` · `SquareStoredBalance` to `"SQUARE_STORED_BALANCE"` | `destinationTypeSchema` |
| `DeviceAttributesDeviceType` | `Terminal` to `"TERMINAL"` · `Handheld` to `"HANDHELD"` | `deviceAttributesDeviceTypeSchema` |
| `DeviceCodeStatus` | `Unknown` to `"UNKNOWN"` · `Unpaired` to `"UNPAIRED"` · `Paired` to `"PAIRED"` · `Expired` to `"EXPIRED"` | `deviceCodeStatusSchema` |
| `DeviceComponentDetailsExternalPower` | `AvailableCharging` to `"AVAILABLE_CHARGING"` · `AvailableNotInUse` to `"AVAILABLE_NOT_IN_USE"` · `Unavailable` to `"UNAVAILABLE"` · `AvailableInsufficient` to `"AVAILABLE_INSUFFICIENT"` | `deviceComponentDetailsExternalPowerSchema` |
| `DeviceStatusCategory` | `Available` to `"AVAILABLE"` · `NeedsAttention` to `"NEEDS_ATTENTION"` · `Offline` to `"OFFLINE"` | `deviceStatusCategorySchema` |
| `DisputeEvidenceType` | `GenericEvidence` to `"GENERIC_EVIDENCE"` · `OnlineOrAppAccessLog` to `"ONLINE_OR_APP_ACCESS_LOG"` · `AuthorizationDocumentation` to `"AUTHORIZATION_DOCUMENTATION"` · `CancellationOrRefundDocumentation` to `"CANCELLATION_OR_REFUND_DOCUMENTATION"` · `CardholderCommunication` to `"CARDHOLDER_COMMUNICATION"` · `CardholderInformation` to `"CARDHOLDER_INFORMATION"` · `PurchaseAcknowledgement` to `"PURCHASE_ACKNOWLEDGEMENT"` · `DuplicateChargeDocumentation` to `"DUPLICATE_CHARGE_DOCUMENTATION"` · `ProductOrServiceDescription` to `"PRODUCT_OR_SERVICE_DESCRIPTION"` · `Receipt` to `"RECEIPT"` · `ServiceReceivedDocumentation` to `"SERVICE_RECEIVED_DOCUMENTATION"` · `ProofOfDeliveryDocumentation` to `"PROOF_OF_DELIVERY_DOCUMENTATION"` · `RelatedTransactionDocumentation` to `"RELATED_TRANSACTION_DOCUMENTATION"` · `RebuttalExplanation` to `"REBUTTAL_EXPLANATION"` · `TrackingNumber` to `"TRACKING_NUMBER"` | `disputeEvidenceTypeSchema` |
| `DisputeReason` | `AmountDiffers` to `"AMOUNT_DIFFERS"` · `Cancelled` to `"CANCELLED"` · `Duplicate` to `"DUPLICATE"` · `NoKnowledge` to `"NO_KNOWLEDGE"` · `NotAsDescribed` to `"NOT_AS_DESCRIBED"` · `NotReceived` to `"NOT_RECEIVED"` · `PaidByOtherMeans` to `"PAID_BY_OTHER_MEANS"` · `CustomerRequestsCredit` to `"CUSTOMER_REQUESTS_CREDIT"` · `EmvLiabilityShift` to `"EMV_LIABILITY_SHIFT"` | `disputeReasonSchema` |
| `DisputeState` | `InquiryEvidenceRequired` to `"INQUIRY_EVIDENCE_REQUIRED"` · `InquiryProcessing` to `"INQUIRY_PROCESSING"` · `InquiryClosed` to `"INQUIRY_CLOSED"` · `EvidenceRequired` to `"EVIDENCE_REQUIRED"` · `Processing` to `"PROCESSING"` · `Won` to `"WON"` · `Lost` to `"LOST"` · `Accepted` to `"ACCEPTED"` | `disputeStateSchema` |
| `EcomVisibility` | `Unindexed` to `"UNINDEXED"` · `Unavailable` to `"UNAVAILABLE"` · `Hidden` to `"HIDDEN"` · `Visible` to `"VISIBLE"` | `ecomVisibilitySchema` |
| `EmployeeStatus` | `Active` to `"ACTIVE"` · `Inactive` to `"INACTIVE"` | `employeeStatusSchema` |
| `ErrorCategory` | `ApiError` to `"API_ERROR"` · `AuthenticationError` to `"AUTHENTICATION_ERROR"` · `InvalidRequestError` to `"INVALID_REQUEST_ERROR"` · `RateLimitError` to `"RATE_LIMIT_ERROR"` · `PaymentMethodError` to `"PAYMENT_METHOD_ERROR"` · `RefundError` to `"REFUND_ERROR"` · `MerchantSubscriptionError` to `"MERCHANT_SUBSCRIPTION_ERROR"` · `ExternalVendorError` to `"EXTERNAL_VENDOR_ERROR"` | `errorCategorySchema` |
| `ErrorCode` | `InternalServerError` to `"INTERNAL_SERVER_ERROR"` · `Unauthorized` to `"UNAUTHORIZED"` · `AccessTokenExpired` to `"ACCESS_TOKEN_EXPIRED"` · `AccessTokenRevoked` to `"ACCESS_TOKEN_REVOKED"` · `ClientDisabled` to `"CLIENT_DISABLED"` · `Forbidden` to `"FORBIDDEN"` · `InsufficientScopes` to `"INSUFFICIENT_SCOPES"` · `ApplicationDisabled` to `"APPLICATION_DISABLED"` · `V1Application` to `"V1_APPLICATION"` · `V1AccessToken` to `"V1_ACCESS_TOKEN"` · `CardProcessingNotEnabled` to `"CARD_PROCESSING_NOT_ENABLED"` · `MerchantSubscriptionNotFound` to `"MERCHANT_SUBSCRIPTION_NOT_FOUND"` · `BadRequest` to `"BAD_REQUEST"` · `MissingRequiredParameter` to `"MISSING_REQUIRED_PARAMETER"` · `IncorrectType` to `"INCORRECT_TYPE"` · `InvalidTime` to `"INVALID_TIME"` · `InvalidTimeRange` to `"INVALID_TIME_RANGE"` · `InvalidValue` to `"INVALID_VALUE"` · `InvalidCursor` to `"INVALID_CURSOR"` · `UnknownQueryParameter` to `"UNKNOWN_QUERY_PARAMETER"` · `ConflictingParameters` to `"CONFLICTING_PARAMETERS"` · `ExpectedJsonBody` to `"EXPECTED_JSON_BODY"` · `InvalidSortOrder` to `"INVALID_SORT_ORDER"` · `ValueRegexMismatch` to `"VALUE_REGEX_MISMATCH"` · `ValueTooShort` to `"VALUE_TOO_SHORT"` · `ValueTooLong` to `"VALUE_TOO_LONG"` · `ValueTooLow` to `"VALUE_TOO_LOW"` · `ValueTooHigh` to `"VALUE_TOO_HIGH"` · `ValueEmpty` to `"VALUE_EMPTY"` · `ArrayLengthTooLong` to `"ARRAY_LENGTH_TOO_LONG"` · `ArrayLengthTooShort` to `"ARRAY_LENGTH_TOO_SHORT"` · `ArrayEmpty` to `"ARRAY_EMPTY"` · `ExpectedBoolean` to `"EXPECTED_BOOLEAN"` · `ExpectedInteger` to `"EXPECTED_INTEGER"` · `ExpectedFloat` to `"EXPECTED_FLOAT"` · `ExpectedString` to `"EXPECTED_STRING"` · `ExpectedObject` to `"EXPECTED_OBJECT"` · `ExpectedArray` to `"EXPECTED_ARRAY"` · `ExpectedMap` to `"EXPECTED_MAP"` · `ExpectedBase64EncodedByteArray` to `"EXPECTED_BASE64_ENCODED_BYTE_ARRAY"` · `InvalidArrayValue` to `"INVALID_ARRAY_VALUE"` · `InvalidEnumValue` to `"INVALID_ENUM_VALUE"` · `InvalidContentType` to `"INVALID_CONTENT_TYPE"` · `InvalidFormValue` to `"INVALID_FORM_VALUE"` · `CustomerNotFound` to `"CUSTOMER_NOT_FOUND"` · `OneInstrumentExpected` to `"ONE_INSTRUMENT_EXPECTED"` · `NoFieldsSet` to `"NO_FIELDS_SET"` · `TooManyMapEntries` to `"TOO_MANY_MAP_ENTRIES"` · `MapKeyLengthTooShort` to `"MAP_KEY_LENGTH_TOO_SHORT"` · `MapKeyLengthTooLong` to `"MAP_KEY_LENGTH_TOO_LONG"` · `CustomerMissingName` to `"CUSTOMER_MISSING_NAME"` · `CustomerMissingEmail` to `"CUSTOMER_MISSING_EMAIL"` · `InvalidPauseLength` to `"INVALID_PAUSE_LENGTH"` · `InvalidDate` to `"INVALID_DATE"` · `UnsupportedCountry` to `"UNSUPPORTED_COUNTRY"` · `UnsupportedCurrency` to `"UNSUPPORTED_CURRENCY"` · `AppleTtpPinToken` to `"APPLE_TTP_PIN_TOKEN"` · `CardExpired` to `"CARD_EXPIRED"` · `InvalidExpiration` to `"INVALID_EXPIRATION"` · `InvalidExpirationYear` to `"INVALID_EXPIRATION_YEAR"` · `InvalidExpirationDate` to `"INVALID_EXPIRATION_DATE"` · `UnsupportedCardBrand` to `"UNSUPPORTED_CARD_BRAND"` · `UnsupportedEntryMethod` to `"UNSUPPORTED_ENTRY_METHOD"` · `InvalidEncryptedCard` to `"INVALID_ENCRYPTED_CARD"` · `InvalidCard` to `"INVALID_CARD"` · `PaymentAmountMismatch` to `"PAYMENT_AMOUNT_MISMATCH"` · `GenericDecline` to `"GENERIC_DECLINE"` · `CvvFailure` to `"CVV_FAILURE"` · `AddressVerificationFailure` to `"ADDRESS_VERIFICATION_FAILURE"` · `InvalidAccount` to `"INVALID_ACCOUNT"` · `CurrencyMismatch` to `"CURRENCY_MISMATCH"` · `InsufficientFunds` to `"INSUFFICIENT_FUNDS"` · `InsufficientPermissions` to `"INSUFFICIENT_PERMISSIONS"` · `CardholderInsufficientPermissions` to `"CARDHOLDER_INSUFFICIENT_PERMISSIONS"` · `InvalidLocation` to `"INVALID_LOCATION"` · `TransactionLimit` to `"TRANSACTION_LIMIT"` · `VoiceFailure` to `"VOICE_FAILURE"` · `PanFailure` to `"PAN_FAILURE"` · `ExpirationFailure` to `"EXPIRATION_FAILURE"` · `CardNotSupported` to `"CARD_NOT_SUPPORTED"` · `ReaderDeclined` to `"READER_DECLINED"` · `InvalidPin` to `"INVALID_PIN"` · `MissingPin` to `"MISSING_PIN"` · `MissingAccountType` to `"MISSING_ACCOUNT_TYPE"` · `InvalidPostalCode` to `"INVALID_POSTAL_CODE"` · `InvalidFees` to `"INVALID_FEES"` · `ManuallyEnteredPaymentNotSupported` to `"MANUALLY_ENTERED_PAYMENT_NOT_SUPPORTED"` · `PaymentLimitExceeded` to `"PAYMENT_LIMIT_EXCEEDED"` · `GiftCardAvailableAmount` to `"GIFT_CARD_AVAILABLE_AMOUNT"` · `AccountUnusable` to `"ACCOUNT_UNUSABLE"` · `BuyerRefusedPayment` to `"BUYER_REFUSED_PAYMENT"` · `DelayedTransactionExpired` to `"DELAYED_TRANSACTION_EXPIRED"` · `DelayedTransactionCanceled` to `"DELAYED_TRANSACTION_CANCELED"` · `DelayedTransactionCaptured` to `"DELAYED_TRANSACTION_CAPTURED"` · `DelayedTransactionFailed` to `"DELAYED_TRANSACTION_FAILED"` · `CardTokenExpired` to `"CARD_TOKEN_EXPIRED"` · `CardTokenUsed` to `"CARD_TOKEN_USED"` · `AmountTooHigh` to `"AMOUNT_TOO_HIGH"` · `UnsupportedInstrumentType` to `"UNSUPPORTED_INSTRUMENT_TYPE"` · `RefundAmountInvalid` to `"REFUND_AMOUNT_INVALID"` · `RefundAlreadyPending` to `"REFUND_ALREADY_PENDING"` · `PaymentNotRefundable` to `"PAYMENT_NOT_REFUNDABLE"` · `PaymentNotRefundableDueToDispute` to `"PAYMENT_NOT_REFUNDABLE_DUE_TO_DISPUTE"` · `RefundErrorPaymentNeedsCompletion` to `"REFUND_ERROR_PAYMENT_NEEDS_COMPLETION"` · `RefundDeclined` to `"REFUND_DECLINED"` · `InsufficientPermissionsForRefund` to `"INSUFFICIENT_PERMISSIONS_FOR_REFUND"` · `InvalidCardData` to `"INVALID_CARD_DATA"` · `SourceUsed` to `"SOURCE_USED"` · `SourceExpired` to `"SOURCE_EXPIRED"` · `UnsupportedLoyaltyRewardTier` to `"UNSUPPORTED_LOYALTY_REWARD_TIER"` · `LocationMismatch` to `"LOCATION_MISMATCH"` · `OrderUnpaidNotReturnable` to `"ORDER_UNPAID_NOT_RETURNABLE"` · `PartialPaymentDelayCaptureNotSupported` to `"PARTIAL_PAYMENT_DELAY_CAPTURE_NOT_SUPPORTED"` · `IdempotencyKeyReused` to `"IDEMPOTENCY_KEY_REUSED"` · `UnexpectedValue` to `"UNEXPECTED_VALUE"` · `SandboxNotSupported` to `"SANDBOX_NOT_SUPPORTED"` · `InvalidEmailAddress` to `"INVALID_EMAIL_ADDRESS"` · `InvalidPhoneNumber` to `"INVALID_PHONE_NUMBER"` · `CheckoutExpired` to `"CHECKOUT_EXPIRED"` · `BadCertificate` to `"BAD_CERTIFICATE"` · `InvalidSquareVersionFormat` to `"INVALID_SQUARE_VERSION_FORMAT"` · `ApiVersionIncompatible` to `"API_VERSION_INCOMPATIBLE"` · `CardPresenceRequired` to `"CARD_PRESENCE_REQUIRED"` · `UnsupportedSourceType` to `"UNSUPPORTED_SOURCE_TYPE"` · `CardMismatch` to `"CARD_MISMATCH"` · `PlaidError` to `"PLAID_ERROR"` · `PlaidErrorItemLoginRequired` to `"PLAID_ERROR_ITEM_LOGIN_REQUIRED"` · `PlaidErrorRateLimit` to `"PLAID_ERROR_RATE_LIMIT"` · `PaymentSourceNotEnabledForTarget` to `"PAYMENT_SOURCE_NOT_ENABLED_FOR_TARGET"` · `CardDeclined` to `"CARD_DECLINED"` · `VerifyCvvFailure` to `"VERIFY_CVV_FAILURE"` · `VerifyAvsFailure` to `"VERIFY_AVS_FAILURE"` · `CardDeclinedCallIssuer` to `"CARD_DECLINED_CALL_ISSUER"` · `CardDeclinedVerificationRequired` to `"CARD_DECLINED_VERIFICATION_REQUIRED"` · `BadExpiration` to `"BAD_EXPIRATION"` · `ChipInsertionRequired` to `"CHIP_INSERTION_REQUIRED"` · `AllowablePinTriesExceeded` to `"ALLOWABLE_PIN_TRIES_EXCEEDED"` · `ReservationDeclined` to `"RESERVATION_DECLINED"` · `UnknownBodyParameter` to `"UNKNOWN_BODY_PARAMETER"` · `NotFound` to `"NOT_FOUND"` · `ApplePaymentProcessingCertificateHashNotFound` to `"APPLE_PAYMENT_PROCESSING_CERTIFICATE_HASH_NOT_FOUND"` · `MethodNotAllowed` to `"METHOD_NOT_ALLOWED"` · `NotAcceptable` to `"NOT_ACCEPTABLE"` · `RequestTimeout` to `"REQUEST_TIMEOUT"` · `Conflict` to `"CONFLICT"` · `Gone` to `"GONE"` · `RequestEntityTooLarge` to `"REQUEST_ENTITY_TOO_LARGE"` · `UnsupportedMediaType` to `"UNSUPPORTED_MEDIA_TYPE"` · `UnprocessableEntity` to `"UNPROCESSABLE_ENTITY"` · `RateLimited` to `"RATE_LIMITED"` · `NotImplemented` to `"NOT_IMPLEMENTED"` · `BadGateway` to `"BAD_GATEWAY"` · `ServiceUnavailable` to `"SERVICE_UNAVAILABLE"` · `TemporaryError` to `"TEMPORARY_ERROR"` · `GatewayTimeout` to `"GATEWAY_TIMEOUT"` | `errorCodeSchema` |
| `ExcludeStrategy` | `LeastExpensive` to `"LEAST_EXPENSIVE"` · `MostExpensive` to `"MOST_EXPENSIVE"` · `MostExpensiveLowestValue` to `"MOST_EXPENSIVE_LOWEST_VALUE"` | `excludeStrategySchema` |
| `FelicaDetailsFelicaBrand` | `Unknown` to `"UNKNOWN"` · `FelicaId` to `"FELICA_ID"` · `FelicaTransportation` to `"FELICA_TRANSPORTATION"` · `FelicaQp` to `"FELICA_QP"` | `felicaDetailsFelicaBrandSchema` |
| `FulfillmentDeliveryDetailsOrderFulfillmentDeliveryDetailsScheduleType` | `Scheduled` to `"SCHEDULED"` · `Asap` to `"ASAP"` | `fulfillmentDeliveryDetailsOrderFulfillmentDeliveryDetailsScheduleTypeSchema` |
| `FulfillmentFulfillmentLineItemApplication` | `All` to `"ALL"` · `EntryList` to `"ENTRY_LIST"` | `fulfillmentFulfillmentLineItemApplicationSchema` |
| `FulfillmentPickupDetailsScheduleType` | `Scheduled` to `"SCHEDULED"` · `Asap` to `"ASAP"` | `fulfillmentPickupDetailsScheduleTypeSchema` |
| `FulfillmentState` | `Proposed` to `"PROPOSED"` · `Reserved` to `"RESERVED"` · `Prepared` to `"PREPARED"` · `Completed` to `"COMPLETED"` · `Canceled` to `"CANCELED"` · `Failed` to `"FAILED"` | `fulfillmentStateSchema` |
| `FulfillmentType` | `Pickup` to `"PICKUP"` · `Shipment` to `"SHIPMENT"` · `Delivery` to `"DELIVERY"` · `InStore` to `"IN_STORE"` | `fulfillmentTypeSchema` |
| `GiftCardActivityAdjustDecrementReason` | `SuspiciousActivity` to `"SUSPICIOUS_ACTIVITY"` · `BalanceAccidentallyIncreased` to `"BALANCE_ACCIDENTALLY_INCREASED"` · `SupportIssue` to `"SUPPORT_ISSUE"` · `PurchaseWasRefunded` to `"PURCHASE_WAS_REFUNDED"` | `giftCardActivityAdjustDecrementReasonSchema` |
| `GiftCardActivityAdjustIncrementReason` | `Complimentary` to `"COMPLIMENTARY"` · `SupportIssue` to `"SUPPORT_ISSUE"` · `TransactionVoided` to `"TRANSACTION_VOIDED"` | `giftCardActivityAdjustIncrementReasonSchema` |
| `GiftCardActivityBlockReason` | `ChargebackBlock` to `"CHARGEBACK_BLOCK"` | `giftCardActivityBlockReasonSchema` |
| `GiftCardActivityClearBalanceReason` | `SuspiciousActivity` to `"SUSPICIOUS_ACTIVITY"` · `ReuseGiftcard` to `"REUSE_GIFTCARD"` · `UnknownReason` to `"UNKNOWN_REASON"` | `giftCardActivityClearBalanceReasonSchema` |
| `GiftCardActivityDeactivateReason` | `SuspiciousActivity` to `"SUSPICIOUS_ACTIVITY"` · `UnknownReason` to `"UNKNOWN_REASON"` · `ChargebackDeactivate` to `"CHARGEBACK_DEACTIVATE"` | `giftCardActivityDeactivateReasonSchema` |
| `GiftCardActivityRedeemStatus` | `Pending` to `"PENDING"` · `Completed` to `"COMPLETED"` · `Canceled` to `"CANCELED"` | `giftCardActivityRedeemStatusSchema` |
| `GiftCardActivityType` | `Activate` to `"ACTIVATE"` · `Load` to `"LOAD"` · `Redeem` to `"REDEEM"` · `ClearBalance` to `"CLEAR_BALANCE"` · `Deactivate` to `"DEACTIVATE"` · `AdjustIncrement` to `"ADJUST_INCREMENT"` · `AdjustDecrement` to `"ADJUST_DECREMENT"` · `Refund` to `"REFUND"` · `UnlinkedActivityRefund` to `"UNLINKED_ACTIVITY_REFUND"` · `Import` to `"IMPORT"` · `Block` to `"BLOCK"` · `Unblock` to `"UNBLOCK"` · `ImportReversal` to `"IMPORT_REVERSAL"` · `TransferBalanceFrom` to `"TRANSFER_BALANCE_FROM"` · `TransferBalanceTo` to `"TRANSFER_BALANCE_TO"` | `giftCardActivityTypeSchema` |
| `GiftCardActivityUnblockReason` | `ChargebackUnblock` to `"CHARGEBACK_UNBLOCK"` | `giftCardActivityUnblockReasonSchema` |
| `GiftCardGanSource` | `Square` to `"SQUARE"` · `Other` to `"OTHER"` | `giftCardGanSourceSchema` |
| `GiftCardStatus` | `Active` to `"ACTIVE"` · `Deactivated` to `"DEACTIVATED"` · `Blocked` to `"BLOCKED"` · `Pending` to `"PENDING"` | `giftCardStatusSchema` |
| `GiftCardType` | `Physical` to `"PHYSICAL"` · `Digital` to `"DIGITAL"` | `giftCardTypeSchema` |
| `InventoryAdjustmentReasonDirection` | `Increase` to `"INCREASE"` · `Decrease` to `"DECREASE"` | `inventoryAdjustmentReasonDirectionSchema` |
| `InventoryAdjustmentReasonIdType` | `Received` to `"RECEIVED"` · `Damaged` to `"DAMAGED"` · `Theft` to `"THEFT"` · `Lost` to `"LOST"` · `Returned` to `"RETURNED"` · `SpoilageWaste` to `"SPOILAGE_WASTE"` · `SamplesPromotional` to `"SAMPLES_PROMOTIONAL"` · `InternalUse` to `"INTERNAL_USE"` · `VendorReturn` to `"VENDOR_RETURN"` · `ProductionWaste` to `"PRODUCTION_WASTE"` · `Sale` to `"SALE"` · `Recount` to `"RECOUNT"` · `Transfer` to `"TRANSFER"` · `InTransit` to `"IN_TRANSIT"` · `CanceledSale` to `"CANCELED_SALE"` · `Custom` to `"CUSTOM"` | `inventoryAdjustmentReasonIdTypeSchema` |
| `InventoryAlertType` | `None` to `"NONE"` · `LowQuantity` to `"LOW_QUANTITY"` | `inventoryAlertTypeSchema` |
| `InventoryChangeType` | `PhysicalCount` to `"PHYSICAL_COUNT"` · `Adjustment` to `"ADJUSTMENT"` | `inventoryChangeTypeSchema` |
| `InventoryState` | `Custom` to `"CUSTOM"` · `InStock` to `"IN_STOCK"` · `Sold` to `"SOLD"` · `ReturnedByCustomer` to `"RETURNED_BY_CUSTOMER"` · `ReservedForSale` to `"RESERVED_FOR_SALE"` · `SoldOnline` to `"SOLD_ONLINE"` · `OrderedFromVendor` to `"ORDERED_FROM_VENDOR"` · `ReceivedFromVendor` to `"RECEIVED_FROM_VENDOR"` · `InTransitTo` to `"IN_TRANSIT_TO"` · `None` to `"NONE"` · `Waste` to `"WASTE"` · `UnlinkedReturn` to `"UNLINKED_RETURN"` · `Composed` to `"COMPOSED"` · `Decomposed` to `"DECOMPOSED"` · `SupportedByNewerVersion` to `"SUPPORTED_BY_NEWER_VERSION"` · `InTransit` to `"IN_TRANSIT"` · `Untracked` to `"UNTRACKED"` | `inventoryStateSchema` |
| `InvoiceAutomaticPaymentSource` | `None` to `"NONE"` · `CardOnFile` to `"CARD_ON_FILE"` · `BankOnFile` to `"BANK_ON_FILE"` | `invoiceAutomaticPaymentSourceSchema` |
| `InvoiceCustomFieldPlacement` | `AboveLineItems` to `"ABOVE_LINE_ITEMS"` · `BelowLineItems` to `"BELOW_LINE_ITEMS"` | `invoiceCustomFieldPlacementSchema` |
| `InvoiceDeliveryMethod` | `Email` to `"EMAIL"` · `ShareManually` to `"SHARE_MANUALLY"` · `Sms` to `"SMS"` | `invoiceDeliveryMethodSchema` |
| `InvoicePaymentReminderStatus` | `Pending` to `"PENDING"` · `NotApplicable` to `"NOT_APPLICABLE"` · `Sent` to `"SENT"` | `invoicePaymentReminderStatusSchema` |
| `InvoiceRequestMethod` | `Email` to `"EMAIL"` · `ChargeCardOnFile` to `"CHARGE_CARD_ON_FILE"` · `ShareManually` to `"SHARE_MANUALLY"` · `ChargeBankOnFile` to `"CHARGE_BANK_ON_FILE"` · `Sms` to `"SMS"` · `SmsChargeCardOnFile` to `"SMS_CHARGE_CARD_ON_FILE"` · `SmsChargeBankOnFile` to `"SMS_CHARGE_BANK_ON_FILE"` | `invoiceRequestMethodSchema` |
| `InvoiceRequestType` | `Balance` to `"BALANCE"` · `Deposit` to `"DEPOSIT"` · `Installment` to `"INSTALLMENT"` | `invoiceRequestTypeSchema` |
| `InvoiceSortField` | `InvoiceSortDate` to `"INVOICE_SORT_DATE"` | `invoiceSortFieldSchema` |
| `InvoiceStatus` | `Draft` to `"DRAFT"` · `Unpaid` to `"UNPAID"` · `Scheduled` to `"SCHEDULED"` · `PartiallyPaid` to `"PARTIALLY_PAID"` · `Paid` to `"PAID"` · `PartiallyRefunded` to `"PARTIALLY_REFUNDED"` · `Refunded` to `"REFUNDED"` · `Canceled` to `"CANCELED"` · `Failed` to `"FAILED"` · `PaymentPending` to `"PAYMENT_PENDING"` | `invoiceStatusSchema` |
| `JobAssignmentPayType` | `None` to `"NONE"` · `Hourly` to `"HOURLY"` · `Salary` to `"SALARY"` | `jobAssignmentPayTypeSchema` |
| `ListChannelsRequestConstants` | `MaxPageSize` to `"MAX_PAGE_SIZE"` | `listChannelsRequestConstantsSchema` |
| `ListPaymentRefundsRequestSortField` | `CreatedAt` to `"CREATED_AT"` · `UpdatedAt` to `"UPDATED_AT"` | `listPaymentRefundsRequestSortFieldSchema` |
| `ListPaymentsRequestSortField` | `CreatedAt` to `"CREATED_AT"` · `OfflineCreatedAt` to `"OFFLINE_CREATED_AT"` · `UpdatedAt` to `"UPDATED_AT"` | `listPaymentsRequestSortFieldSchema` |
| `LocationCapability` | `CreditCardProcessing` to `"CREDIT_CARD_PROCESSING"` · `AutomaticTransfers` to `"AUTOMATIC_TRANSFERS"` · `UnlinkedRefunds` to `"UNLINKED_REFUNDS"` | `locationCapabilitySchema` |
| `LocationStatus` | `Active` to `"ACTIVE"` · `Inactive` to `"INACTIVE"` | `locationStatusSchema` |
| `LocationType` | `Physical` to `"PHYSICAL"` · `Mobile` to `"MOBILE"` | `locationTypeSchema` |
| `LoyaltyAccountMappingType` | `Phone` to `"PHONE"` | `loyaltyAccountMappingTypeSchema` |
| `LoyaltyEventSource` | `Square` to `"SQUARE"` · `LoyaltyApi` to `"LOYALTY_API"` | `loyaltyEventSourceSchema` |
| `LoyaltyEventType` | `AccumulatePoints` to `"ACCUMULATE_POINTS"` · `CreateReward` to `"CREATE_REWARD"` · `RedeemReward` to `"REDEEM_REWARD"` · `DeleteReward` to `"DELETE_REWARD"` · `AdjustPoints` to `"ADJUST_POINTS"` · `ExpirePoints` to `"EXPIRE_POINTS"` · `Other` to `"OTHER"` · `AccumulatePromotionPoints` to `"ACCUMULATE_PROMOTION_POINTS"` | `loyaltyEventTypeSchema` |
| `LoyaltyProgramAccrualRuleTaxMode` | `BeforeTax` to `"BEFORE_TAX"` · `AfterTax` to `"AFTER_TAX"` | `loyaltyProgramAccrualRuleTaxModeSchema` |
| `LoyaltyProgramAccrualRuleType` | `Visit` to `"VISIT"` · `Spend` to `"SPEND"` · `ItemVariation` to `"ITEM_VARIATION"` · `Category` to `"CATEGORY"` | `loyaltyProgramAccrualRuleTypeSchema` |
| `LoyaltyProgramStatus` | `Inactive` to `"INACTIVE"` · `Active` to `"ACTIVE"` | `loyaltyProgramStatusSchema` |
| `LoyaltyPromotionIncentiveType` | `PointsMultiplier` to `"POINTS_MULTIPLIER"` · `PointsAddition` to `"POINTS_ADDITION"` | `loyaltyPromotionIncentiveTypeSchema` |
| `LoyaltyPromotionStatus` | `Active` to `"ACTIVE"` · `Ended` to `"ENDED"` · `Canceled` to `"CANCELED"` · `Scheduled` to `"SCHEDULED"` | `loyaltyPromotionStatusSchema` |
| `LoyaltyPromotionTriggerLimitInterval` | `AllTime` to `"ALL_TIME"` · `Day` to `"DAY"` | `loyaltyPromotionTriggerLimitIntervalSchema` |
| `LoyaltyRewardStatus` | `Issued` to `"ISSUED"` · `Redeemed` to `"REDEEMED"` · `Deleted` to `"DELETED"` | `loyaltyRewardStatusSchema` |
| `MeasurementUnitArea` | `ImperialAcre` to `"IMPERIAL_ACRE"` · `ImperialSquareInch` to `"IMPERIAL_SQUARE_INCH"` · `ImperialSquareFoot` to `"IMPERIAL_SQUARE_FOOT"` · `ImperialSquareYard` to `"IMPERIAL_SQUARE_YARD"` · `ImperialSquareMile` to `"IMPERIAL_SQUARE_MILE"` · `MetricSquareCentimeter` to `"METRIC_SQUARE_CENTIMETER"` · `MetricSquareMeter` to `"METRIC_SQUARE_METER"` · `MetricSquareKilometer` to `"METRIC_SQUARE_KILOMETER"` | `measurementUnitAreaSchema` |
| `MeasurementUnitGeneric` | `Unit` to `"UNIT"` | `measurementUnitGenericSchema` |
| `MeasurementUnitLength` | `ImperialInch` to `"IMPERIAL_INCH"` · `ImperialFoot` to `"IMPERIAL_FOOT"` · `ImperialYard` to `"IMPERIAL_YARD"` · `ImperialMile` to `"IMPERIAL_MILE"` · `MetricMillimeter` to `"METRIC_MILLIMETER"` · `MetricCentimeter` to `"METRIC_CENTIMETER"` · `MetricMeter` to `"METRIC_METER"` · `MetricKilometer` to `"METRIC_KILOMETER"` | `measurementUnitLengthSchema` |
| `MeasurementUnitTime` | `GenericMillisecond` to `"GENERIC_MILLISECOND"` · `GenericSecond` to `"GENERIC_SECOND"` · `GenericMinute` to `"GENERIC_MINUTE"` · `GenericHour` to `"GENERIC_HOUR"` · `GenericDay` to `"GENERIC_DAY"` | `measurementUnitTimeSchema` |
| `MeasurementUnitUnitType` | `TypeCustom` to `"TYPE_CUSTOM"` · `TypeArea` to `"TYPE_AREA"` · `TypeLength` to `"TYPE_LENGTH"` · `TypeVolume` to `"TYPE_VOLUME"` · `TypeWeight` to `"TYPE_WEIGHT"` · `TypeGeneric` to `"TYPE_GENERIC"` | `measurementUnitUnitTypeSchema` |
| `MeasurementUnitVolume` | `GenericFluidOunce` to `"GENERIC_FLUID_OUNCE"` · `GenericShot` to `"GENERIC_SHOT"` · `GenericCup` to `"GENERIC_CUP"` · `GenericPint` to `"GENERIC_PINT"` · `GenericQuart` to `"GENERIC_QUART"` · `GenericGallon` to `"GENERIC_GALLON"` · `ImperialCubicInch` to `"IMPERIAL_CUBIC_INCH"` · `ImperialCubicFoot` to `"IMPERIAL_CUBIC_FOOT"` · `ImperialCubicYard` to `"IMPERIAL_CUBIC_YARD"` · `MetricMilliliter` to `"METRIC_MILLILITER"` · `MetricLiter` to `"METRIC_LITER"` | `measurementUnitVolumeSchema` |
| `MeasurementUnitWeight` | `ImperialWeightOunce` to `"IMPERIAL_WEIGHT_OUNCE"` · `ImperialPound` to `"IMPERIAL_POUND"` · `ImperialStone` to `"IMPERIAL_STONE"` · `MetricMilligram` to `"METRIC_MILLIGRAM"` · `MetricGram` to `"METRIC_GRAM"` · `MetricKilogram` to `"METRIC_KILOGRAM"` | `measurementUnitWeightSchema` |
| `MerchantStatus` | `Active` to `"ACTIVE"` · `Inactive` to `"INACTIVE"` | `merchantStatusSchema` |
| `OauthAuthorizationRevokedEventRevokerType` | `Application` to `"APPLICATION"` · `Merchant` to `"MERCHANT"` · `Square` to `"SQUARE"` | `oauthAuthorizationRevokedEventRevokerTypeSchema` |
| `OrderCardSurchargeTreatmentType` | `LineItemTreatment` to `"LINE_ITEM_TREATMENT"` · `ApportionedTreatment` to `"APPORTIONED_TREATMENT"` | `orderCardSurchargeTreatmentTypeSchema` |
| `OrderFulfillmentDeliveryDetailsScheduleType` | `Scheduled` to `"SCHEDULED"` · `Asap` to `"ASAP"` | `orderFulfillmentDeliveryDetailsScheduleTypeSchema` |
| `OrderFulfillmentFulfillmentLineItemApplication` | `All` to `"ALL"` · `EntryList` to `"ENTRY_LIST"` | `orderFulfillmentFulfillmentLineItemApplicationSchema` |
| `OrderFulfillmentPickupDetailsScheduleType` | `Scheduled` to `"SCHEDULED"` · `Asap` to `"ASAP"` | `orderFulfillmentPickupDetailsScheduleTypeSchema` |
| `OrderFulfillmentState` | `Proposed` to `"PROPOSED"` · `Reserved` to `"RESERVED"` · `Prepared` to `"PREPARED"` · `Completed` to `"COMPLETED"` · `Canceled` to `"CANCELED"` · `Failed` to `"FAILED"` | `orderFulfillmentStateSchema` |
| `OrderFulfillmentType` | `Pickup` to `"PICKUP"` · `Shipment` to `"SHIPMENT"` · `Delivery` to `"DELIVERY"` | `orderFulfillmentTypeSchema` |
| `OrderLineItemDiscountScope` | `OtherDiscountScope` to `"OTHER_DISCOUNT_SCOPE"` · `LineItem` to `"LINE_ITEM"` · `Order` to `"ORDER"` | `orderLineItemDiscountScopeSchema` |
| `OrderLineItemDiscountType` | `UnknownDiscount` to `"UNKNOWN_DISCOUNT"` · `FixedPercentage` to `"FIXED_PERCENTAGE"` · `FixedAmount` to `"FIXED_AMOUNT"` · `VariablePercentage` to `"VARIABLE_PERCENTAGE"` · `VariableAmount` to `"VARIABLE_AMOUNT"` | `orderLineItemDiscountTypeSchema` |
| `OrderLineItemItemType` | `Item` to `"ITEM"` · `CustomAmount` to `"CUSTOM_AMOUNT"` · `GiftCard` to `"GIFT_CARD"` | `orderLineItemItemTypeSchema` |
| `OrderLineItemTaxScope` | `OtherTaxScope` to `"OTHER_TAX_SCOPE"` · `LineItem` to `"LINE_ITEM"` · `Order` to `"ORDER"` | `orderLineItemTaxScopeSchema` |
| `OrderLineItemTaxType` | `UnknownTax` to `"UNKNOWN_TAX"` · `Additive` to `"ADDITIVE"` · `Inclusive` to `"INCLUSIVE"` | `orderLineItemTaxTypeSchema` |
| `OrderServiceChargeCalculationPhase` | `SubtotalPhase` to `"SUBTOTAL_PHASE"` · `TotalPhase` to `"TOTAL_PHASE"` · `ApportionedPercentagePhase` to `"APPORTIONED_PERCENTAGE_PHASE"` · `ApportionedAmountPhase` to `"APPORTIONED_AMOUNT_PHASE"` | `orderServiceChargeCalculationPhaseSchema` |
| `OrderServiceChargeScope` | `OtherServiceChargeScope` to `"OTHER_SERVICE_CHARGE_SCOPE"` · `LineItem` to `"LINE_ITEM"` · `Order` to `"ORDER"` | `orderServiceChargeScopeSchema` |
| `OrderServiceChargeTreatmentType` | `LineItemTreatment` to `"LINE_ITEM_TREATMENT"` · `ApportionedTreatment` to `"APPORTIONED_TREATMENT"` | `orderServiceChargeTreatmentTypeSchema` |
| `OrderServiceChargeType` | `AutoGratuity` to `"AUTO_GRATUITY"` · `Custom` to `"CUSTOM"` | `orderServiceChargeTypeSchema` |
| `OrderState` | `Open` to `"OPEN"` · `Completed` to `"COMPLETED"` · `Canceled` to `"CANCELED"` · `Draft` to `"DRAFT"` | `orderStateSchema` |
| `PaymentOptionsDelayAction` | `Cancel` to `"CANCEL"` · `Complete` to `"COMPLETE"` | `paymentOptionsDelayActionSchema` |
| `PayoutFeeType` | `TransferFee` to `"TRANSFER_FEE"` · `TaxOnTransferFee` to `"TAX_ON_TRANSFER_FEE"` | `payoutFeeTypeSchema` |
| `PayoutStatus` | `Sent` to `"SENT"` · `Failed` to `"FAILED"` · `Paid` to `"PAID"` | `payoutStatusSchema` |
| `PayoutType` | `Batch` to `"BATCH"` · `Simple` to `"SIMPLE"` | `payoutTypeSchema` |
| `Product` | `SquarePos` to `"SQUARE_POS"` · `ExternalApi` to `"EXTERNAL_API"` · `Billing` to `"BILLING"` · `Appointments` to `"APPOINTMENTS"` · `Invoices` to `"INVOICES"` · `OnlineStore` to `"ONLINE_STORE"` · `Payroll` to `"PAYROLL"` · `Dashboard` to `"DASHBOARD"` · `ItemLibraryImport` to `"ITEM_LIBRARY_IMPORT"` · `Other` to `"OTHER"` | `productSchema` |
| `ProductType` | `TerminalApi` to `"TERMINAL_API"` | `productTypeSchema` |
| `ReferenceType` | `UnknownType` to `"UNKNOWN_TYPE"` · `Location` to `"LOCATION"` · `FirstPartyIntegration` to `"FIRST_PARTY_INTEGRATION"` · `OauthApplication` to `"OAUTH_APPLICATION"` · `OnlineSite` to `"ONLINE_SITE"` · `OnlineCheckout` to `"ONLINE_CHECKOUT"` · `Invoice` to `"INVOICE"` · `GiftCard` to `"GIFT_CARD"` · `GiftCardMarketplace` to `"GIFT_CARD_MARKETPLACE"` · `RecurringSubscription` to `"RECURRING_SUBSCRIPTION"` · `OnlineBookingFlow` to `"ONLINE_BOOKING_FLOW"` · `SquareAssistant` to `"SQUARE_ASSISTANT"` · `CashLocal` to `"CASH_LOCAL"` · `PointOfSale` to `"POINT_OF_SALE"` · `Kiosk` to `"KIOSK"` | `referenceTypeSchema` |
| `RefundStatus` | `Pending` to `"PENDING"` · `Approved` to `"APPROVED"` · `Rejected` to `"REJECTED"` · `Failed` to `"FAILED"` | `refundStatusSchema` |
| `RegisterDomainResponseStatus` | `Pending` to `"PENDING"` · `Verified` to `"VERIFIED"` | `registerDomainResponseStatusSchema` |
| `RiskEvaluationRiskLevel` | `Pending` to `"PENDING"` · `Normal` to `"NORMAL"` · `Moderate` to `"MODERATE"` · `High` to `"HIGH"` | `riskEvaluationRiskLevelSchema` |
| `ScheduledShiftFilterAssignmentStatus` | `Assigned` to `"ASSIGNED"` · `Unassigned` to `"UNASSIGNED"` | `scheduledShiftFilterAssignmentStatusSchema` |
| `ScheduledShiftFilterScheduledShiftStatus` | `Draft` to `"DRAFT"` · `Published` to `"PUBLISHED"` | `scheduledShiftFilterScheduledShiftStatusSchema` |
| `ScheduledShiftNotificationAudience` | `All` to `"ALL"` · `Affected` to `"AFFECTED"` · `None` to `"NONE"` | `scheduledShiftNotificationAudienceSchema` |
| `ScheduledShiftSortField` | `StartAt` to `"START_AT"` · `EndAt` to `"END_AT"` · `CreatedAt` to `"CREATED_AT"` · `UpdatedAt` to `"UPDATED_AT"` | `scheduledShiftSortFieldSchema` |
| `ScheduledShiftWorkdayMatcher` | `StartAt` to `"START_AT"` · `EndAt` to `"END_AT"` · `Intersection` to `"INTERSECTION"` | `scheduledShiftWorkdayMatcherSchema` |
| `SearchCatalogItemsRequestStockLevel` | `Out` to `"OUT"` · `Low` to `"LOW"` | `searchCatalogItemsRequestStockLevelSchema` |
| `SearchEventsSortField` | `Default` to `"DEFAULT"` | `searchEventsSortFieldSchema` |
| `SearchOrdersSortField` | `CreatedAt` to `"CREATED_AT"` · `UpdatedAt` to `"UPDATED_AT"` · `ClosedAt` to `"CLOSED_AT"` | `searchOrdersSortFieldSchema` |
| `SearchVendorsRequestSortField` | `Name` to `"NAME"` · `CreatedAt` to `"CREATED_AT"` | `searchVendorsRequestSortFieldSchema` |
| `ShiftFilterStatus` | `Open` to `"OPEN"` · `Closed` to `"CLOSED"` | `shiftFilterStatusSchema` |
| `ShiftSortField` | `StartAt` to `"START_AT"` · `EndAt` to `"END_AT"` · `CreatedAt` to `"CREATED_AT"` · `UpdatedAt` to `"UPDATED_AT"` | `shiftSortFieldSchema` |
| `ShiftStatus` | `Open` to `"OPEN"` · `Closed` to `"CLOSED"` | `shiftStatusSchema` |
| `ShiftWorkdayMatcher` | `StartAt` to `"START_AT"` · `EndAt` to `"END_AT"` · `Intersection` to `"INTERSECTION"` | `shiftWorkdayMatcherSchema` |
| `SortOrder` | `Desc` to `"DESC"` · `Asc` to `"ASC"` | `sortOrderSchema` |
| `SubscriptionActionType` | `Cancel` to `"CANCEL"` · `Pause` to `"PAUSE"` · `Resume` to `"RESUME"` · `SwapPlan` to `"SWAP_PLAN"` · `ChangeBillingAnchorDate` to `"CHANGE_BILLING_ANCHOR_DATE"` · `Complete` to `"COMPLETE"` | `subscriptionActionTypeSchema` |
| `SubscriptionCadence` | `Daily` to `"DAILY"` · `Weekly` to `"WEEKLY"` · `EveryTwoWeeks` to `"EVERY_TWO_WEEKS"` · `ThirtyDays` to `"THIRTY_DAYS"` · `SixtyDays` to `"SIXTY_DAYS"` · `NinetyDays` to `"NINETY_DAYS"` · `Monthly` to `"MONTHLY"` · `EveryTwoMonths` to `"EVERY_TWO_MONTHS"` · `Quarterly` to `"QUARTERLY"` · `EveryFourMonths` to `"EVERY_FOUR_MONTHS"` · `EverySixMonths` to `"EVERY_SIX_MONTHS"` · `Annual` to `"ANNUAL"` · `EveryTwoYears` to `"EVERY_TWO_YEARS"` | `subscriptionCadenceSchema` |
| `SubscriptionEventInfoCode` | `LocationNotActive` to `"LOCATION_NOT_ACTIVE"` · `LocationCannotAcceptPayment` to `"LOCATION_CANNOT_ACCEPT_PAYMENT"` · `CustomerDeleted` to `"CUSTOMER_DELETED"` · `CustomerNoEmail` to `"CUSTOMER_NO_EMAIL"` · `CustomerNoName` to `"CUSTOMER_NO_NAME"` · `UserProvided` to `"USER_PROVIDED"` | `subscriptionEventInfoCodeSchema` |
| `SubscriptionEventSubscriptionEventType` | `StartSubscription` to `"START_SUBSCRIPTION"` · `PlanChange` to `"PLAN_CHANGE"` · `StopSubscription` to `"STOP_SUBSCRIPTION"` · `DeactivateSubscription` to `"DEACTIVATE_SUBSCRIPTION"` · `ResumeSubscription` to `"RESUME_SUBSCRIPTION"` · `PauseSubscription` to `"PAUSE_SUBSCRIPTION"` · `BillingAnchorDateChanged` to `"BILLING_ANCHOR_DATE_CHANGED"` | `subscriptionEventSubscriptionEventTypeSchema` |
| `SubscriptionPricingType` | `Static` to `"STATIC"` · `Relative` to `"RELATIVE"` | `subscriptionPricingTypeSchema` |
| `SubscriptionStatus` | `Pending` to `"PENDING"` · `Active` to `"ACTIVE"` · `Canceled` to `"CANCELED"` · `Deactivated` to `"DEACTIVATED"` · `Paused` to `"PAUSED"` · `Completed` to `"COMPLETED"` | `subscriptionStatusSchema` |
| `TaxCalculationPhase` | `TaxSubtotalPhase` to `"TAX_SUBTOTAL_PHASE"` · `TaxTotalPhase` to `"TAX_TOTAL_PHASE"` | `taxCalculationPhaseSchema` |
| `TaxInclusionType` | `Additive` to `"ADDITIVE"` · `Inclusive` to `"INCLUSIVE"` | `taxInclusionTypeSchema` |
| `TeamMemberAssignedLocationsAssignmentType` | `AllCurrentAndFutureLocations` to `"ALL_CURRENT_AND_FUTURE_LOCATIONS"` · `ExplicitLocations` to `"EXPLICIT_LOCATIONS"` | `teamMemberAssignedLocationsAssignmentTypeSchema` |
| `TeamMemberInvitationStatus` | `Uninvited` to `"UNINVITED"` · `Pending` to `"PENDING"` · `Accepted` to `"ACCEPTED"` | `teamMemberInvitationStatusSchema` |
| `TeamMemberStatus` | `Active` to `"ACTIVE"` · `Inactive` to `"INACTIVE"` | `teamMemberStatusSchema` |
| `TenderBankAccountDetailsStatus` | `Pending` to `"PENDING"` · `Completed` to `"COMPLETED"` · `Failed` to `"FAILED"` | `tenderBankAccountDetailsStatusSchema` |
| `TenderBuyNowPayLaterDetailsBrand` | `OtherBrand` to `"OTHER_BRAND"` · `Afterpay` to `"AFTERPAY"` | `tenderBuyNowPayLaterDetailsBrandSchema` |
| `TenderBuyNowPayLaterDetailsStatus` | `Authorized` to `"AUTHORIZED"` · `Captured` to `"CAPTURED"` · `Voided` to `"VOIDED"` · `Failed` to `"FAILED"` | `tenderBuyNowPayLaterDetailsStatusSchema` |
| `TenderCardDetailsEntryMethod` | `Swiped` to `"SWIPED"` · `Keyed` to `"KEYED"` · `Emv` to `"EMV"` · `OnFile` to `"ON_FILE"` · `Contactless` to `"CONTACTLESS"` | `tenderCardDetailsEntryMethodSchema` |
| `TenderCardDetailsStatus` | `Authorized` to `"AUTHORIZED"` · `Captured` to `"CAPTURED"` · `Voided` to `"VOIDED"` · `Failed` to `"FAILED"` | `tenderCardDetailsStatusSchema` |
| `TenderSquareAccountDetailsStatus` | `Authorized` to `"AUTHORIZED"` · `Captured` to `"CAPTURED"` · `Voided` to `"VOIDED"` · `Failed` to `"FAILED"` | `tenderSquareAccountDetailsStatusSchema` |
| `TenderType` | `Card` to `"CARD"` · `Cash` to `"CASH"` · `ThirdPartyCard` to `"THIRD_PARTY_CARD"` · `SquareGiftCard` to `"SQUARE_GIFT_CARD"` · `NoSale` to `"NO_SALE"` · `BankAccount` to `"BANK_ACCOUNT"` · `Wallet` to `"WALLET"` · `BuyNowPayLater` to `"BUY_NOW_PAY_LATER"` · `SquareAccount` to `"SQUARE_ACCOUNT"` · `Other` to `"OTHER"` | `tenderTypeSchema` |
| `TerminalActionActionType` | `QrCode` to `"QR_CODE"` · `Ping` to `"PING"` · `SaveCard` to `"SAVE_CARD"` · `Signature` to `"SIGNATURE"` · `Confirmation` to `"CONFIRMATION"` · `Receipt` to `"RECEIPT"` · `DataCollection` to `"DATA_COLLECTION"` · `Select` to `"SELECT"` | `terminalActionActionTypeSchema` |
| `TimecardFilterStatus` | `Open` to `"OPEN"` · `Closed` to `"CLOSED"` | `timecardFilterStatusSchema` |
| `TimecardSortField` | `StartAt` to `"START_AT"` · `EndAt` to `"END_AT"` · `CreatedAt` to `"CREATED_AT"` · `UpdatedAt` to `"UPDATED_AT"` | `timecardSortFieldSchema` |
| `TimecardStatus` | `Open` to `"OPEN"` · `Closed` to `"CLOSED"` | `timecardStatusSchema` |
| `TimecardWorkdayMatcher` | `StartAt` to `"START_AT"` · `EndAt` to `"END_AT"` · `Intersection` to `"INTERSECTION"` | `timecardWorkdayMatcherSchema` |
| `TransactionProduct` | `Register` to `"REGISTER"` · `ExternalApi` to `"EXTERNAL_API"` · `Billing` to `"BILLING"` · `Appointments` to `"APPOINTMENTS"` · `Invoices` to `"INVOICES"` · `OnlineStore` to `"ONLINE_STORE"` · `Payroll` to `"PAYROLL"` · `Other` to `"OTHER"` | `transactionProductSchema` |
| `TransactionType` | `Debit` to `"DEBIT"` · `Credit` to `"CREDIT"` | `transactionTypeSchema` |
| `TransferOrderSortField` | `CreatedAt` to `"CREATED_AT"` · `UpdatedAt` to `"UPDATED_AT"` | `transferOrderSortFieldSchema` |
| `TransferOrderStatus` | `Draft` to `"DRAFT"` · `Started` to `"STARTED"` · `PartiallyReceived` to `"PARTIALLY_RECEIVED"` · `Completed` to `"COMPLETED"` · `Canceled` to `"CANCELED"` | `transferOrderStatusSchema` |
| `V1OrderHistoryEntryAction` | `OrderPlaced` to `"ORDER_PLACED"` · `Declined` to `"DECLINED"` · `PaymentReceived` to `"PAYMENT_RECEIVED"` · `Canceled` to `"CANCELED"` · `Completed` to `"COMPLETED"` · `Refunded` to `"REFUNDED"` · `Expired` to `"EXPIRED"` | `v1OrderHistoryEntryActionSchema` |
| `V1OrderState` | `Pending` to `"PENDING"` · `Open` to `"OPEN"` · `Completed` to `"COMPLETED"` · `Canceled` to `"CANCELED"` · `Refunded` to `"REFUNDED"` · `Rejected` to `"REJECTED"` | `v1OrderStateSchema` |
| `V1TenderCardBrand` | `OtherBrand` to `"OTHER_BRAND"` · `Visa` to `"VISA"` · `MasterCard` to `"MASTER_CARD"` · `AmericanExpress` to `"AMERICAN_EXPRESS"` · `Discover` to `"DISCOVER"` · `DiscoverDiners` to `"DISCOVER_DINERS"` · `Jcb` to `"JCB"` · `ChinaUnionpay` to `"CHINA_UNIONPAY"` · `SquareGiftCard` to `"SQUARE_GIFT_CARD"` | `v1TenderCardBrandSchema` |
| `V1TenderEntryMethod` | `Manual` to `"MANUAL"` · `Scanned` to `"SCANNED"` · `SquareCash` to `"SQUARE_CASH"` · `SquareWallet` to `"SQUARE_WALLET"` · `Swiped` to `"SWIPED"` · `WebForm` to `"WEB_FORM"` · `Other` to `"OTHER"` | `v1TenderEntryMethodSchema` |
| `V1TenderType` | `CreditCard` to `"CREDIT_CARD"` · `Cash` to `"CASH"` · `ThirdPartyCard` to `"THIRD_PARTY_CARD"` · `NoSale` to `"NO_SALE"` · `SquareWallet` to `"SQUARE_WALLET"` · `SquareGiftCard` to `"SQUARE_GIFT_CARD"` · `Unknown` to `"UNKNOWN"` · `Other` to `"OTHER"` | `v1TenderTypeSchema` |
| `V1UpdateOrderRequestAction` | `Complete` to `"COMPLETE"` · `Cancel` to `"CANCEL"` · `Refund` to `"REFUND"` | `v1UpdateOrderRequestActionSchema` |
| `VendorCreatedEventObjectOperation` | `Created` to `"CREATED"` | `vendorCreatedEventObjectOperationSchema` |
| `VendorStatus` | `Active` to `"ACTIVE"` · `Inactive` to `"INACTIVE"` | `vendorStatusSchema` |
| `VendorUpdatedEventObjectOperation` | `Updated` to `"UPDATED"` | `vendorUpdatedEventObjectOperationSchema` |
| `VisibilityFilter` | `All` to `"ALL"` · `Read` to `"READ"` · `ReadWrite` to `"READ_WRITE"` | `visibilityFilterSchema` |
| `Weekday` | `Mon` to `"MON"` · `Tue` to `"TUE"` · `Wed` to `"WED"` · `Thu` to `"THU"` · `Fri` to `"FRI"` · `Sat` to `"SAT"` · `Sun` to `"SUN"` | `weekdaySchema` |

**Wire-name divergences.** Only these model properties are sent and received under a different name; every other property uses its TypeScript name verbatim.

| Type | Property | Wire key |
| --- | --- | --- |
| `AchDetails` | `routingNumber` | `routing_number` |
| `AchDetails` | `accountNumberSuffix` | `account_number_suffix` |
| `AchDetails` | `accountType` | `account_type` |
| `AcceptedPaymentMethods` | `applePay` | `apple_pay` |
| `AcceptedPaymentMethods` | `googlePay` | `google_pay` |
| `AcceptedPaymentMethods` | `cashAppPay` | `cash_app_pay` |
| `AcceptedPaymentMethods` | `afterpayClearpay` | `afterpay_clearpay` |
| `AccumulateLoyaltyPointsRequest` | `accumulatePoints` | `accumulate_points` |
| `AccumulateLoyaltyPointsRequest` | `idempotencyKey` | `idempotency_key` |
| `AccumulateLoyaltyPointsRequest` | `locationId` | `location_id` |
| `AdditionalRecipient` | `locationId` | `location_id` |
| `AdditionalRecipient` | `amountMoney` | `amount_money` |
| `AdditionalRecipient` | `receivableId` | `receivable_id` |
| `Address` | `addressLine1` | `address_line_1` |
| `Address` | `addressLine2` | `address_line_2` |
| `Address` | `addressLine3` | `address_line_3` |
| `Address` | `sublocality2` | `sublocality_2` |
| `Address` | `sublocality3` | `sublocality_3` |
| `Address` | `administrativeDistrictLevel1` | `administrative_district_level_1` |
| `Address` | `administrativeDistrictLevel2` | `administrative_district_level_2` |
| `Address` | `administrativeDistrictLevel3` | `administrative_district_level_3` |
| `Address` | `postalCode` | `postal_code` |
| `Address` | `firstName` | `first_name` |
| `Address` | `lastName` | `last_name` |
| `AdjustLoyaltyPointsRequest` | `idempotencyKey` | `idempotency_key` |
| `AdjustLoyaltyPointsRequest` | `adjustPoints` | `adjust_points` |
| `AdjustLoyaltyPointsRequest` | `allowNegativeBalance` | `allow_negative_balance` |
| `AfterpayDetails` | `emailAddress` | `email_address` |
| `ApplicationDetails` | `squareProduct` | `square_product` |
| `ApplicationDetails` | `applicationId` | `application_id` |
| `AppointmentSegment` | `durationMinutes` | `duration_minutes` |
| `AppointmentSegment` | `serviceVariationId` | `service_variation_id` |
| `AppointmentSegment` | `teamMemberId` | `team_member_id` |
| `AppointmentSegment` | `serviceVariationVersion` | `service_variation_version` |
| `AppointmentSegment` | `intermissionMinutes` | `intermission_minutes` |
| `AppointmentSegment` | `anyTeamMember` | `any_team_member` |
| `AppointmentSegment` | `resourceIds` | `resource_ids` |
| `Availability` | `startAt` | `start_at` |
| `Availability` | `locationId` | `location_id` |
| `Availability` | `appointmentSegments` | `appointment_segments` |
| `BankAccount` | `accountNumberSuffix` | `account_number_suffix` |
| `BankAccount` | `accountType` | `account_type` |
| `BankAccount` | `holderName` | `holder_name` |
| `BankAccount` | `primaryBankIdentificationNumber` | `primary_bank_identification_number` |
| `BankAccount` | `secondaryBankIdentificationNumber` | `secondary_bank_identification_number` |
| `BankAccount` | `debitMandateReferenceId` | `debit_mandate_reference_id` |
| `BankAccount` | `referenceId` | `reference_id` |
| `BankAccount` | `locationId` | `location_id` |
| `BankAccount` | `bankName` | `bank_name` |
| `BankAccount` | `customerId` | `customer_id` |
| `BankAccountCreatedEvent` | `merchantId` | `merchant_id` |
| `BankAccountCreatedEvent` | `locationId` | `location_id` |
| `BankAccountCreatedEvent` | `eventId` | `event_id` |
| `BankAccountCreatedEvent` | `createdAt` | `created_at` |
| `BankAccountCreatedEventObject` | `bankAccount` | `bank_account` |
| `BankAccountDisabledEvent` | `merchantId` | `merchant_id` |
| `BankAccountDisabledEvent` | `locationId` | `location_id` |
| `BankAccountDisabledEvent` | `eventId` | `event_id` |
| `BankAccountDisabledEvent` | `createdAt` | `created_at` |
| `BankAccountDisabledEventObject` | `bankAccount` | `bank_account` |
| `BankAccountPaymentDetails` | `bankName` | `bank_name` |
| `BankAccountPaymentDetails` | `transferType` | `transfer_type` |
| `BankAccountPaymentDetails` | `accountOwnershipType` | `account_ownership_type` |
| `BankAccountPaymentDetails` | `statementDescription` | `statement_description` |
| `BankAccountPaymentDetails` | `achDetails` | `ach_details` |
| `BankAccountVerifiedEvent` | `merchantId` | `merchant_id` |
| `BankAccountVerifiedEvent` | `locationId` | `location_id` |
| `BankAccountVerifiedEvent` | `eventId` | `event_id` |
| `BankAccountVerifiedEvent` | `createdAt` | `created_at` |
| `BankAccountVerifiedEventObject` | `bankAccount` | `bank_account` |
| `BatchChangeInventoryRequest` | `idempotencyKey` | `idempotency_key` |
| `BatchChangeInventoryRequest` | `ignoreUnchangedCounts` | `ignore_unchanged_counts` |
| `BatchDeleteCatalogObjectsRequest` | `objectIds` | `object_ids` |
| `BatchDeleteCatalogObjectsResponse` | `deletedObjectIds` | `deleted_object_ids` |
| `BatchDeleteCatalogObjectsResponse` | `deletedAt` | `deleted_at` |
| `BatchRetrieveCatalogObjectsRequest` | `objectIds` | `object_ids` |
| `BatchRetrieveCatalogObjectsRequest` | `includeRelatedObjects` | `include_related_objects` |
| `BatchRetrieveCatalogObjectsRequest` | `catalogVersion` | `catalog_version` |
| `BatchRetrieveCatalogObjectsRequest` | `includeDeletedObjects` | `include_deleted_objects` |
| `BatchRetrieveCatalogObjectsRequest` | `includeCategoryPathToRoot` | `include_category_path_to_root` |
| `BatchRetrieveCatalogObjectsResponse` | `relatedObjects` | `related_objects` |
| `BatchRetrieveInventoryChangesRequest` | `catalogObjectIds` | `catalog_object_ids` |
| `BatchRetrieveInventoryChangesRequest` | `locationIds` | `location_ids` |
| `BatchRetrieveInventoryChangesRequest` | `updatedAfter` | `updated_after` |
| `BatchRetrieveInventoryChangesRequest` | `updatedBefore` | `updated_before` |
| `BatchRetrieveInventoryChangesRequest` | `reasonIds` | `reason_ids` |
| `BatchRetrieveInventoryCountsRequest` | `catalogObjectIds` | `catalog_object_ids` |
| `BatchRetrieveInventoryCountsRequest` | `locationIds` | `location_ids` |
| `BatchRetrieveInventoryCountsRequest` | `updatedAfter` | `updated_after` |
| `BatchRetrieveOrdersRequest` | `locationId` | `location_id` |
| `BatchRetrieveOrdersRequest` | `orderIds` | `order_ids` |
| `BatchUpsertCatalogObjectsRequest` | `idempotencyKey` | `idempotency_key` |
| `BatchUpsertCatalogObjectsResponse` | `updatedAt` | `updated_at` |
| `BatchUpsertCatalogObjectsResponse` | `idMappings` | `id_mappings` |
| `Booking` | `createdAt` | `created_at` |
| `Booking` | `updatedAt` | `updated_at` |
| `Booking` | `startAt` | `start_at` |
| `Booking` | `locationId` | `location_id` |
| `Booking` | `customerId` | `customer_id` |
| `Booking` | `customerNote` | `customer_note` |
| `Booking` | `sellerNote` | `seller_note` |
| `Booking` | `appointmentSegments` | `appointment_segments` |
| `Booking` | `transitionTimeMinutes` | `transition_time_minutes` |
| `Booking` | `allDay` | `all_day` |
| `Booking` | `locationType` | `location_type` |
| `Booking` | `creatorDetails` | `creator_details` |
| `BookingCreatedEvent` | `merchantId` | `merchant_id` |
| `BookingCreatedEvent` | `eventId` | `event_id` |
| `BookingCreatedEvent` | `createdAt` | `created_at` |
| `BookingCreatorDetails` | `creatorType` | `creator_type` |
| `BookingCreatorDetails` | `teamMemberId` | `team_member_id` |
| `BookingCreatorDetails` | `customerId` | `customer_id` |
| `BookingCustomAttributeDefinitionOwnedCreatedEvent` | `merchantId` | `merchant_id` |
| `BookingCustomAttributeDefinitionOwnedCreatedEvent` | `eventId` | `event_id` |
| `BookingCustomAttributeDefinitionOwnedCreatedEvent` | `createdAt` | `created_at` |
| `BookingCustomAttributeDefinitionOwnedDeletedEvent` | `merchantId` | `merchant_id` |
| `BookingCustomAttributeDefinitionOwnedDeletedEvent` | `eventId` | `event_id` |
| `BookingCustomAttributeDefinitionOwnedDeletedEvent` | `createdAt` | `created_at` |
| `BookingCustomAttributeDefinitionOwnedUpdatedEvent` | `merchantId` | `merchant_id` |
| `BookingCustomAttributeDefinitionOwnedUpdatedEvent` | `eventId` | `event_id` |
| `BookingCustomAttributeDefinitionOwnedUpdatedEvent` | `createdAt` | `created_at` |
| `BookingCustomAttributeDefinitionVisibleCreatedEvent` | `merchantId` | `merchant_id` |
| `BookingCustomAttributeDefinitionVisibleCreatedEvent` | `eventId` | `event_id` |
| `BookingCustomAttributeDefinitionVisibleCreatedEvent` | `createdAt` | `created_at` |
| `BookingCustomAttributeDefinitionVisibleDeletedEvent` | `merchantId` | `merchant_id` |
| `BookingCustomAttributeDefinitionVisibleDeletedEvent` | `eventId` | `event_id` |
| `BookingCustomAttributeDefinitionVisibleDeletedEvent` | `createdAt` | `created_at` |
| `BookingCustomAttributeDefinitionVisibleUpdatedEvent` | `merchantId` | `merchant_id` |
| `BookingCustomAttributeDefinitionVisibleUpdatedEvent` | `eventId` | `event_id` |
| `BookingCustomAttributeDefinitionVisibleUpdatedEvent` | `createdAt` | `created_at` |
| `BookingCustomAttributeDeleteRequest` | `bookingId` | `booking_id` |
| `BookingCustomAttributeDeleteResponse` | `bookingId` | `booking_id` |
| `BookingCustomAttributeOwnedDeletedEvent` | `merchantId` | `merchant_id` |
| `BookingCustomAttributeOwnedDeletedEvent` | `eventId` | `event_id` |
| `BookingCustomAttributeOwnedDeletedEvent` | `createdAt` | `created_at` |
| `BookingCustomAttributeOwnedUpdatedEvent` | `merchantId` | `merchant_id` |
| `BookingCustomAttributeOwnedUpdatedEvent` | `eventId` | `event_id` |
| `BookingCustomAttributeOwnedUpdatedEvent` | `createdAt` | `created_at` |
| `BookingCustomAttributeUpsertRequest` | `bookingId` | `booking_id` |
| `BookingCustomAttributeUpsertRequest` | `customAttribute` | `custom_attribute` |
| `BookingCustomAttributeUpsertRequest` | `idempotencyKey` | `idempotency_key` |
| `BookingCustomAttributeUpsertResponse` | `bookingId` | `booking_id` |
| `BookingCustomAttributeUpsertResponse` | `customAttribute` | `custom_attribute` |
| `BookingCustomAttributeVisibleDeletedEvent` | `merchantId` | `merchant_id` |
| `BookingCustomAttributeVisibleDeletedEvent` | `eventId` | `event_id` |
| `BookingCustomAttributeVisibleDeletedEvent` | `createdAt` | `created_at` |
| `BookingCustomAttributeVisibleUpdatedEvent` | `merchantId` | `merchant_id` |
| `BookingCustomAttributeVisibleUpdatedEvent` | `eventId` | `event_id` |
| `BookingCustomAttributeVisibleUpdatedEvent` | `createdAt` | `created_at` |
| `BookingUpdatedEvent` | `merchantId` | `merchant_id` |
| `BookingUpdatedEvent` | `eventId` | `event_id` |
| `BookingUpdatedEvent` | `createdAt` | `created_at` |
| `Break` | `startAt` | `start_at` |
| `Break` | `endAt` | `end_at` |
| `Break` | `breakTypeId` | `break_type_id` |
| `Break` | `expectedDuration` | `expected_duration` |
| `Break` | `isPaid` | `is_paid` |
| `BreakType` | `locationId` | `location_id` |
| `BreakType` | `breakName` | `break_name` |
| `BreakType` | `expectedDuration` | `expected_duration` |
| `BreakType` | `isPaid` | `is_paid` |
| `BreakType` | `createdAt` | `created_at` |
| `BreakType` | `updatedAt` | `updated_at` |
| `BulkCreateCustomerData` | `givenName` | `given_name` |
| `BulkCreateCustomerData` | `familyName` | `family_name` |
| `BulkCreateCustomerData` | `companyName` | `company_name` |
| `BulkCreateCustomerData` | `emailAddress` | `email_address` |
| `BulkCreateCustomerData` | `phoneNumber` | `phone_number` |
| `BulkCreateCustomerData` | `referenceId` | `reference_id` |
| `BulkCreateCustomerData` | `taxIds` | `tax_ids` |
| `BulkCreateTeamMembersRequest` | `teamMembers` | `team_members` |
| `BulkCreateTeamMembersResponse` | `teamMembers` | `team_members` |
| `BulkDeleteCustomersRequest` | `customerIds` | `customer_ids` |
| `BulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponse` | `locationId` | `location_id` |
| `BulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute` | `orderId` | `order_id` |
| `BulkPublishScheduledShiftsRequest` | `scheduledShifts` | `scheduled_shifts` |
| `BulkPublishScheduledShiftsRequest` | `scheduledShiftNotificationAudience` | `scheduled_shift_notification_audience` |
| `BulkRetrieveBookingsRequest` | `bookingIds` | `booking_ids` |
| `BulkRetrieveChannelsRequest` | `channelIds` | `channel_ids` |
| `BulkRetrieveCustomersRequest` | `customerIds` | `customer_ids` |
| `BulkRetrieveTeamMemberBookingProfilesRequest` | `teamMemberIds` | `team_member_ids` |
| `BulkRetrieveTeamMemberBookingProfilesResponse` | `teamMemberBookingProfiles` | `team_member_booking_profiles` |
| `BulkRetrieveVendorsRequest` | `vendorIds` | `vendor_ids` |
| `BulkSwapPlanRequest` | `newPlanVariationId` | `new_plan_variation_id` |
| `BulkSwapPlanRequest` | `oldPlanVariationId` | `old_plan_variation_id` |
| `BulkSwapPlanRequest` | `locationId` | `location_id` |
| `BulkSwapPlanResponse` | `affectedSubscriptions` | `affected_subscriptions` |
| `BulkUpdateCustomerData` | `givenName` | `given_name` |
| `BulkUpdateCustomerData` | `familyName` | `family_name` |
| `BulkUpdateCustomerData` | `companyName` | `company_name` |
| `BulkUpdateCustomerData` | `emailAddress` | `email_address` |
| `BulkUpdateCustomerData` | `phoneNumber` | `phone_number` |
| `BulkUpdateCustomerData` | `referenceId` | `reference_id` |
| `BulkUpdateCustomerData` | `taxIds` | `tax_ids` |
| `BulkUpdateTeamMembersRequest` | `teamMembers` | `team_members` |
| `BulkUpdateTeamMembersResponse` | `teamMembers` | `team_members` |
| `BulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest` | `customerId` | `customer_id` |
| `BulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest` | `customAttribute` | `custom_attribute` |
| `BulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest` | `idempotencyKey` | `idempotency_key` |
| `BulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponse` | `customerId` | `customer_id` |
| `BulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponse` | `customAttribute` | `custom_attribute` |
| `BulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest` | `locationId` | `location_id` |
| `BulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest` | `customAttribute` | `custom_attribute` |
| `BulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest` | `idempotencyKey` | `idempotency_key` |
| `BulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponse` | `locationId` | `location_id` |
| `BulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponse` | `customAttribute` | `custom_attribute` |
| `BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest` | `merchantId` | `merchant_id` |
| `BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest` | `customAttribute` | `custom_attribute` |
| `BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest` | `idempotencyKey` | `idempotency_key` |
| `BulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponse` | `merchantId` | `merchant_id` |
| `BulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponse` | `customAttribute` | `custom_attribute` |
| `BulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute` | `customAttribute` | `custom_attribute` |
| `BulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute` | `idempotencyKey` | `idempotency_key` |
| `BulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute` | `orderId` | `order_id` |
| `BusinessAppointmentSettings` | `locationTypes` | `location_types` |
| `BusinessAppointmentSettings` | `alignmentTime` | `alignment_time` |
| `BusinessAppointmentSettings` | `minBookingLeadTimeSeconds` | `min_booking_lead_time_seconds` |
| `BusinessAppointmentSettings` | `maxBookingLeadTimeSeconds` | `max_booking_lead_time_seconds` |
| `BusinessAppointmentSettings` | `anyTeamMemberBookingEnabled` | `any_team_member_booking_enabled` |
| `BusinessAppointmentSettings` | `multipleServiceBookingEnabled` | `multiple_service_booking_enabled` |
| `BusinessAppointmentSettings` | `maxAppointmentsPerDayLimitType` | `max_appointments_per_day_limit_type` |
| `BusinessAppointmentSettings` | `maxAppointmentsPerDayLimit` | `max_appointments_per_day_limit` |
| `BusinessAppointmentSettings` | `cancellationWindowSeconds` | `cancellation_window_seconds` |
| `BusinessAppointmentSettings` | `cancellationFeeMoney` | `cancellation_fee_money` |
| `BusinessAppointmentSettings` | `cancellationPolicy` | `cancellation_policy` |
| `BusinessAppointmentSettings` | `cancellationPolicyText` | `cancellation_policy_text` |
| `BusinessAppointmentSettings` | `skipBookingFlowStaffSelection` | `skip_booking_flow_staff_selection` |
| `BusinessBookingProfile` | `sellerId` | `seller_id` |
| `BusinessBookingProfile` | `createdAt` | `created_at` |
| `BusinessBookingProfile` | `bookingEnabled` | `booking_enabled` |
| `BusinessBookingProfile` | `customerTimezoneChoice` | `customer_timezone_choice` |
| `BusinessBookingProfile` | `bookingPolicy` | `booking_policy` |
| `BusinessBookingProfile` | `allowUserCancel` | `allow_user_cancel` |
| `BusinessBookingProfile` | `businessAppointmentSettings` | `business_appointment_settings` |
| `BusinessBookingProfile` | `supportSellerLevelWrites` | `support_seller_level_writes` |
| `BusinessHoursPeriod` | `dayOfWeek` | `day_of_week` |
| `BusinessHoursPeriod` | `startLocalTime` | `start_local_time` |
| `BusinessHoursPeriod` | `endLocalTime` | `end_local_time` |
| `BuyNowPayLaterDetails` | `afterpayDetails` | `afterpay_details` |
| `BuyNowPayLaterDetails` | `clearpayDetails` | `clearpay_details` |
| `CalculateLoyaltyPointsRequest` | `orderId` | `order_id` |
| `CalculateLoyaltyPointsRequest` | `transactionAmountMoney` | `transaction_amount_money` |
| `CalculateLoyaltyPointsRequest` | `loyaltyAccountId` | `loyalty_account_id` |
| `CalculateLoyaltyPointsResponse` | `promotionPoints` | `promotion_points` |
| `CalculateOrderRequest` | `proposedRewards` | `proposed_rewards` |
| `CancelBookingRequest` | `idempotencyKey` | `idempotency_key` |
| `CancelBookingRequest` | `bookingVersion` | `booking_version` |
| `CancelLoyaltyPromotionResponse` | `loyaltyPromotion` | `loyalty_promotion` |
| `CancelPaymentByIdempotencyKeyRequest` | `idempotencyKey` | `idempotency_key` |
| `CancelTransferOrderRequest` | `idempotencyKey` | `idempotency_key` |
| `CancelTransferOrderResponse` | `transferOrder` | `transfer_order` |
| `Card` | `cardBrand` | `card_brand` |
| `Card` | `last4` | `last_4` |
| `Card` | `expMonth` | `exp_month` |
| `Card` | `expYear` | `exp_year` |
| `Card` | `cardholderName` | `cardholder_name` |
| `Card` | `billingAddress` | `billing_address` |
| `Card` | `customerId` | `customer_id` |
| `Card` | `merchantId` | `merchant_id` |
| `Card` | `referenceId` | `reference_id` |
| `Card` | `cardType` | `card_type` |
| `Card` | `prepaidType` | `prepaid_type` |
| `Card` | `createdAt` | `created_at` |
| `Card` | `disabledAt` | `disabled_at` |
| `Card` | `cardCoBrand` | `card_co_brand` |
| `Card` | `issuerAlert` | `issuer_alert` |
| `Card` | `issuerAlertAt` | `issuer_alert_at` |
| `Card` | `hsaFsa` | `hsa_fsa` |
| `CardAutomaticallyUpdatedEvent` | `merchantId` | `merchant_id` |
| `CardAutomaticallyUpdatedEvent` | `eventId` | `event_id` |
| `CardAutomaticallyUpdatedEvent` | `createdAt` | `created_at` |
| `CardCreatedEvent` | `merchantId` | `merchant_id` |
| `CardCreatedEvent` | `eventId` | `event_id` |
| `CardCreatedEvent` | `createdAt` | `created_at` |
| `CardDisabledEvent` | `merchantId` | `merchant_id` |
| `CardDisabledEvent` | `eventId` | `event_id` |
| `CardDisabledEvent` | `createdAt` | `created_at` |
| `CardForgottenEvent` | `merchantId` | `merchant_id` |
| `CardForgottenEvent` | `eventId` | `event_id` |
| `CardForgottenEvent` | `createdAt` | `created_at` |
| `CardForgottenEventCard` | `customerId` | `customer_id` |
| `CardForgottenEventCard` | `referenceId` | `reference_id` |
| `CardForgottenEventCard` | `merchantId` | `merchant_id` |
| `CardPaymentDetails` | `entryMethod` | `entry_method` |
| `CardPaymentDetails` | `cvvStatus` | `cvv_status` |
| `CardPaymentDetails` | `avsStatus` | `avs_status` |
| `CardPaymentDetails` | `authResultCode` | `auth_result_code` |
| `CardPaymentDetails` | `applicationIdentifier` | `application_identifier` |
| `CardPaymentDetails` | `applicationName` | `application_name` |
| `CardPaymentDetails` | `applicationCryptogram` | `application_cryptogram` |
| `CardPaymentDetails` | `verificationMethod` | `verification_method` |
| `CardPaymentDetails` | `verificationResults` | `verification_results` |
| `CardPaymentDetails` | `statementDescription` | `statement_description` |
| `CardPaymentDetails` | `deviceDetails` | `device_details` |
| `CardPaymentDetails` | `cardPaymentTimeline` | `card_payment_timeline` |
| `CardPaymentDetails` | `refundRequiresCardPresence` | `refund_requires_card_presence` |
| `CardPaymentDetails` | `appliedCardSurchargeDetails` | `applied_card_surcharge_details` |
| `CardPaymentDetails` | `walletType` | `wallet_type` |
| `CardPaymentTimeline` | `authorizedAt` | `authorized_at` |
| `CardPaymentTimeline` | `capturedAt` | `captured_at` |
| `CardPaymentTimeline` | `voidedAt` | `voided_at` |
| `CardSurchargeDetails` | `cardSurchargeMoney` | `card_surcharge_money` |
| `CardUpdatedEvent` | `merchantId` | `merchant_id` |
| `CardUpdatedEvent` | `eventId` | `event_id` |
| `CardUpdatedEvent` | `createdAt` | `created_at` |
| `CashAppDetails` | `buyerFullName` | `buyer_full_name` |
| `CashAppDetails` | `buyerCountryCode` | `buyer_country_code` |
| `CashAppDetails` | `buyerCashtag` | `buyer_cashtag` |
| `CashDrawerShift` | `openedAt` | `opened_at` |
| `CashDrawerShift` | `endedAt` | `ended_at` |
| `CashDrawerShift` | `closedAt` | `closed_at` |
| `CashDrawerShift` | `openedCashMoney` | `opened_cash_money` |
| `CashDrawerShift` | `cashPaymentMoney` | `cash_payment_money` |
| `CashDrawerShift` | `cashRefundsMoney` | `cash_refunds_money` |
| `CashDrawerShift` | `cashPaidInMoney` | `cash_paid_in_money` |
| `CashDrawerShift` | `cashPaidOutMoney` | `cash_paid_out_money` |
| `CashDrawerShift` | `expectedCashMoney` | `expected_cash_money` |
| `CashDrawerShift` | `closedCashMoney` | `closed_cash_money` |
| `CashDrawerShift` | `createdAt` | `created_at` |
| `CashDrawerShift` | `updatedAt` | `updated_at` |
| `CashDrawerShift` | `locationId` | `location_id` |
| `CashDrawerShift` | `teamMemberIds` | `team_member_ids` |
| `CashDrawerShift` | `openingTeamMemberId` | `opening_team_member_id` |
| `CashDrawerShift` | `endingTeamMemberId` | `ending_team_member_id` |
| `CashDrawerShift` | `closingTeamMemberId` | `closing_team_member_id` |
| `CashDrawerShiftEvent` | `eventType` | `event_type` |
| `CashDrawerShiftEvent` | `eventMoney` | `event_money` |
| `CashDrawerShiftEvent` | `createdAt` | `created_at` |
| `CashDrawerShiftEvent` | `teamMemberId` | `team_member_id` |
| `CashDrawerShiftSummary` | `openedAt` | `opened_at` |
| `CashDrawerShiftSummary` | `endedAt` | `ended_at` |
| `CashDrawerShiftSummary` | `closedAt` | `closed_at` |
| `CashDrawerShiftSummary` | `openedCashMoney` | `opened_cash_money` |
| `CashDrawerShiftSummary` | `expectedCashMoney` | `expected_cash_money` |
| `CashDrawerShiftSummary` | `closedCashMoney` | `closed_cash_money` |
| `CashDrawerShiftSummary` | `createdAt` | `created_at` |
| `CashDrawerShiftSummary` | `updatedAt` | `updated_at` |
| `CashDrawerShiftSummary` | `locationId` | `location_id` |
| `CashPaymentDetails` | `buyerSuppliedMoney` | `buyer_supplied_money` |
| `CashPaymentDetails` | `changeBackMoney` | `change_back_money` |
| `CatalogAvailabilityPeriod` | `startLocalTime` | `start_local_time` |
| `CatalogAvailabilityPeriod` | `endLocalTime` | `end_local_time` |
| `CatalogAvailabilityPeriod` | `dayOfWeek` | `day_of_week` |
| `CatalogCategory` | `imageIds` | `image_ids` |
| `CatalogCategory` | `categoryType` | `category_type` |
| `CatalogCategory` | `parentCategory` | `parent_category` |
| `CatalogCategory` | `isTopLevel` | `is_top_level` |
| `CatalogCategory` | `availabilityPeriodIds` | `availability_period_ids` |
| `CatalogCategory` | `onlineVisibility` | `online_visibility` |
| `CatalogCategory` | `rootCategory` | `root_category` |
| `CatalogCategory` | `ecomSeoData` | `ecom_seo_data` |
| `CatalogCategory` | `pathToRoot` | `path_to_root` |
| `CatalogCustomAttributeDefinition` | `sourceApplication` | `source_application` |
| `CatalogCustomAttributeDefinition` | `allowedObjectTypes` | `allowed_object_types` |
| `CatalogCustomAttributeDefinition` | `sellerVisibility` | `seller_visibility` |
| `CatalogCustomAttributeDefinition` | `appVisibility` | `app_visibility` |
| `CatalogCustomAttributeDefinition` | `stringConfig` | `string_config` |
| `CatalogCustomAttributeDefinition` | `numberConfig` | `number_config` |
| `CatalogCustomAttributeDefinition` | `selectionConfig` | `selection_config` |
| `CatalogCustomAttributeDefinition` | `customAttributeUsageCount` | `custom_attribute_usage_count` |
| `CatalogCustomAttributeDefinitionSelectionConfig` | `maxAllowedSelections` | `max_allowed_selections` |
| `CatalogCustomAttributeDefinitionSelectionConfig` | `allowedSelections` | `allowed_selections` |
| `CatalogCustomAttributeDefinitionStringConfig` | `enforceUniqueness` | `enforce_uniqueness` |
| `CatalogCustomAttributeValue` | `stringValue` | `string_value` |
| `CatalogCustomAttributeValue` | `customAttributeDefinitionId` | `custom_attribute_definition_id` |
| `CatalogCustomAttributeValue` | `numberValue` | `number_value` |
| `CatalogCustomAttributeValue` | `booleanValue` | `boolean_value` |
| `CatalogCustomAttributeValue` | `selectionUidValues` | `selection_uid_values` |
| `CatalogDiscount` | `discountType` | `discount_type` |
| `CatalogDiscount` | `amountMoney` | `amount_money` |
| `CatalogDiscount` | `pinRequired` | `pin_required` |
| `CatalogDiscount` | `labelColor` | `label_color` |
| `CatalogDiscount` | `modifyTaxBasis` | `modify_tax_basis` |
| `CatalogDiscount` | `maximumAmountMoney` | `maximum_amount_money` |
| `CatalogEcomSeoData` | `pageTitle` | `page_title` |
| `CatalogEcomSeoData` | `pageDescription` | `page_description` |
| `CatalogIdMapping` | `clientObjectId` | `client_object_id` |
| `CatalogIdMapping` | `objectId` | `object_id` |
| `CatalogImage` | `photoStudioOrderId` | `photo_studio_order_id` |
| `CatalogInfoResponse` | `standardUnitDescriptionGroup` | `standard_unit_description_group` |
| `CatalogInfoResponseLimits` | `batchUpsertMaxObjectsPerBatch` | `batch_upsert_max_objects_per_batch` |
| `CatalogInfoResponseLimits` | `batchUpsertMaxTotalObjects` | `batch_upsert_max_total_objects` |
| `CatalogInfoResponseLimits` | `batchRetrieveMaxObjectIds` | `batch_retrieve_max_object_ids` |
| `CatalogInfoResponseLimits` | `searchMaxPageLimit` | `search_max_page_limit` |
| `CatalogInfoResponseLimits` | `batchDeleteMaxObjectIds` | `batch_delete_max_object_ids` |
| `CatalogInfoResponseLimits` | `updateItemTaxesMaxItemIds` | `update_item_taxes_max_item_ids` |
| `CatalogInfoResponseLimits` | `updateItemTaxesMaxTaxesToEnable` | `update_item_taxes_max_taxes_to_enable` |
| `CatalogInfoResponseLimits` | `updateItemTaxesMaxTaxesToDisable` | `update_item_taxes_max_taxes_to_disable` |
| `CatalogInfoResponseLimits` | `updateItemModifierListsMaxItemIds` | `update_item_modifier_lists_max_item_ids` |
| `CatalogInfoResponseLimits` | `updateItemModifierListsMaxModifierListsToEnable` | `update_item_modifier_lists_max_modifier_lists_to_enable` |
| `CatalogInfoResponseLimits` | `updateItemModifierListsMaxModifierListsToDisable` | `update_item_modifier_lists_max_modifier_lists_to_disable` |
| `CatalogItem` | `labelColor` | `label_color` |
| `CatalogItem` | `isTaxable` | `is_taxable` |
| `CatalogItem` | `categoryId` | `category_id` |
| `CatalogItem` | `buyerFacingName` | `buyer_facing_name` |
| `CatalogItem` | `taxIds` | `tax_ids` |
| `CatalogItem` | `modifierListInfo` | `modifier_list_info` |
| `CatalogItem` | `productType` | `product_type` |
| `CatalogItem` | `skipModifierScreen` | `skip_modifier_screen` |
| `CatalogItem` | `itemOptions` | `item_options` |
| `CatalogItem` | `ecomUri` | `ecom_uri` |
| `CatalogItem` | `ecomImageUris` | `ecom_image_uris` |
| `CatalogItem` | `imageIds` | `image_ids` |
| `CatalogItem` | `sortName` | `sort_name` |
| `CatalogItem` | `descriptionHtml` | `description_html` |
| `CatalogItem` | `descriptionPlaintext` | `description_plaintext` |
| `CatalogItem` | `kitchenName` | `kitchen_name` |
| `CatalogItem` | `isArchived` | `is_archived` |
| `CatalogItem` | `ecomSeoData` | `ecom_seo_data` |
| `CatalogItem` | `foodAndBeverageDetails` | `food_and_beverage_details` |
| `CatalogItem` | `reportingCategory` | `reporting_category` |
| `CatalogItem` | `isAlcoholic` | `is_alcoholic` |
| `CatalogItemFoodAndBeverageDetails` | `calorieCount` | `calorie_count` |
| `CatalogItemFoodAndBeverageDetails` | `dietaryPreferences` | `dietary_preferences` |
| `CatalogItemFoodAndBeverageDetailsDietaryPreference` | `standardName` | `standard_name` |
| `CatalogItemFoodAndBeverageDetailsDietaryPreference` | `customName` | `custom_name` |
| `CatalogItemFoodAndBeverageDetailsIngredient` | `standardName` | `standard_name` |
| `CatalogItemFoodAndBeverageDetailsIngredient` | `customName` | `custom_name` |
| `CatalogItemModifierListInfo` | `modifierListId` | `modifier_list_id` |
| `CatalogItemModifierListInfo` | `modifierOverrides` | `modifier_overrides` |
| `CatalogItemModifierListInfo` | `minSelectedModifiers` | `min_selected_modifiers` |
| `CatalogItemModifierListInfo` | `maxSelectedModifiers` | `max_selected_modifiers` |
| `CatalogItemModifierListInfo` | `allowQuantities` | `allow_quantities` |
| `CatalogItemModifierListInfo` | `isConversational` | `is_conversational` |
| `CatalogItemModifierListInfo` | `hiddenFromCustomerOverride` | `hidden_from_customer_override` |
| `CatalogItemOption` | `displayName` | `display_name` |
| `CatalogItemOption` | `showColors` | `show_colors` |
| `CatalogItemOptionForItem` | `itemOptionId` | `item_option_id` |
| `CatalogItemOptionValue` | `itemOptionId` | `item_option_id` |
| `CatalogItemOptionValueForItemVariation` | `itemOptionId` | `item_option_id` |
| `CatalogItemOptionValueForItemVariation` | `itemOptionValueId` | `item_option_value_id` |
| `CatalogItemVariation` | `itemId` | `item_id` |
| `CatalogItemVariation` | `pricingType` | `pricing_type` |
| `CatalogItemVariation` | `priceMoney` | `price_money` |
| `CatalogItemVariation` | `locationOverrides` | `location_overrides` |
| `CatalogItemVariation` | `trackInventory` | `track_inventory` |
| `CatalogItemVariation` | `inventoryAlertType` | `inventory_alert_type` |
| `CatalogItemVariation` | `inventoryAlertThreshold` | `inventory_alert_threshold` |
| `CatalogItemVariation` | `userData` | `user_data` |
| `CatalogItemVariation` | `serviceDuration` | `service_duration` |
| `CatalogItemVariation` | `availableForBooking` | `available_for_booking` |
| `CatalogItemVariation` | `itemOptionValues` | `item_option_values` |
| `CatalogItemVariation` | `measurementUnitId` | `measurement_unit_id` |
| `CatalogItemVariation` | `imageIds` | `image_ids` |
| `CatalogItemVariation` | `teamMemberIds` | `team_member_ids` |
| `CatalogItemVariation` | `stockableConversion` | `stockable_conversion` |
| `CatalogItemVariation` | `kitchenName` | `kitchen_name` |
| `CatalogItemVariation` | `vendorInformation` | `vendor_information` |
| `CatalogItemVariationVendorInformation` | `vendorId` | `vendor_id` |
| `CatalogItemVariationVendorInformation` | `vendorCode` | `vendor_code` |
| `CatalogItemVariationVendorInformation` | `unitCostMoney` | `unit_cost_money` |
| `CatalogMeasurementUnit` | `measurementUnit` | `measurement_unit` |
| `CatalogModifier` | `priceMoney` | `price_money` |
| `CatalogModifier` | `onByDefault` | `on_by_default` |
| `CatalogModifier` | `modifierListId` | `modifier_list_id` |
| `CatalogModifier` | `locationOverrides` | `location_overrides` |
| `CatalogModifier` | `kitchenName` | `kitchen_name` |
| `CatalogModifier` | `imageId` | `image_id` |
| `CatalogModifier` | `hiddenOnline` | `hidden_online` |
| `CatalogModifierList` | `selectionType` | `selection_type` |
| `CatalogModifierList` | `imageIds` | `image_ids` |
| `CatalogModifierList` | `allowQuantities` | `allow_quantities` |
| `CatalogModifierList` | `isConversational` | `is_conversational` |
| `CatalogModifierList` | `modifierType` | `modifier_type` |
| `CatalogModifierList` | `maxLength` | `max_length` |
| `CatalogModifierList` | `textRequired` | `text_required` |
| `CatalogModifierList` | `internalName` | `internal_name` |
| `CatalogModifierList` | `minSelectedModifiers` | `min_selected_modifiers` |
| `CatalogModifierList` | `maxSelectedModifiers` | `max_selected_modifiers` |
| `CatalogModifierList` | `hiddenFromCustomer` | `hidden_from_customer` |
| `CatalogModifierOverride` | `modifierId` | `modifier_id` |
| `CatalogModifierOverride` | `onByDefault` | `on_by_default` |
| `CatalogModifierOverride` | `hiddenOnlineOverride` | `hidden_online_override` |
| `CatalogModifierOverride` | `onByDefaultOverride` | `on_by_default_override` |
| `CatalogObject` | `updatedAt` | `updated_at` |
| `CatalogObject` | `isDeleted` | `is_deleted` |
| `CatalogObject` | `customAttributeValues` | `custom_attribute_values` |
| `CatalogObject` | `catalogV1Ids` | `catalog_v1_ids` |
| `CatalogObject` | `presentAtAllLocations` | `present_at_all_locations` |
| `CatalogObject` | `presentAtLocationIds` | `present_at_location_ids` |
| `CatalogObject` | `absentAtLocationIds` | `absent_at_location_ids` |
| `CatalogObject` | `itemData` | `item_data` |
| `CatalogObject` | `categoryData` | `category_data` |
| `CatalogObject` | `itemVariationData` | `item_variation_data` |
| `CatalogObject` | `taxData` | `tax_data` |
| `CatalogObject` | `discountData` | `discount_data` |
| `CatalogObject` | `modifierListData` | `modifier_list_data` |
| `CatalogObject` | `modifierData` | `modifier_data` |
| `CatalogObject` | `timePeriodData` | `time_period_data` |
| `CatalogObject` | `productSetData` | `product_set_data` |
| `CatalogObject` | `pricingRuleData` | `pricing_rule_data` |
| `CatalogObject` | `imageData` | `image_data` |
| `CatalogObject` | `measurementUnitData` | `measurement_unit_data` |
| `CatalogObject` | `subscriptionPlanData` | `subscription_plan_data` |
| `CatalogObject` | `itemOptionData` | `item_option_data` |
| `CatalogObject` | `itemOptionValueData` | `item_option_value_data` |
| `CatalogObject` | `customAttributeDefinitionData` | `custom_attribute_definition_data` |
| `CatalogObject` | `quickAmountsSettingsData` | `quick_amounts_settings_data` |
| `CatalogObject` | `subscriptionPlanVariationData` | `subscription_plan_variation_data` |
| `CatalogObject` | `availabilityPeriodData` | `availability_period_data` |
| `CatalogObjectReference` | `objectId` | `object_id` |
| `CatalogObjectReference` | `catalogVersion` | `catalog_version` |
| `CatalogPricingRule` | `timePeriodIds` | `time_period_ids` |
| `CatalogPricingRule` | `discountId` | `discount_id` |
| `CatalogPricingRule` | `matchProductsId` | `match_products_id` |
| `CatalogPricingRule` | `applyProductsId` | `apply_products_id` |
| `CatalogPricingRule` | `excludeProductsId` | `exclude_products_id` |
| `CatalogPricingRule` | `validFromDate` | `valid_from_date` |
| `CatalogPricingRule` | `validFromLocalTime` | `valid_from_local_time` |
| `CatalogPricingRule` | `validUntilDate` | `valid_until_date` |
| `CatalogPricingRule` | `validUntilLocalTime` | `valid_until_local_time` |
| `CatalogPricingRule` | `excludeStrategy` | `exclude_strategy` |
| `CatalogPricingRule` | `minimumOrderSubtotalMoney` | `minimum_order_subtotal_money` |
| `CatalogPricingRule` | `customerGroupIdsAny` | `customer_group_ids_any` |
| `CatalogProductSet` | `productIdsAny` | `product_ids_any` |
| `CatalogProductSet` | `productIdsAll` | `product_ids_all` |
| `CatalogProductSet` | `quantityExact` | `quantity_exact` |
| `CatalogProductSet` | `quantityMin` | `quantity_min` |
| `CatalogProductSet` | `quantityMax` | `quantity_max` |
| `CatalogProductSet` | `allProducts` | `all_products` |
| `CatalogQuery` | `sortedAttributeQuery` | `sorted_attribute_query` |
| `CatalogQuery` | `exactQuery` | `exact_query` |
| `CatalogQuery` | `setQuery` | `set_query` |
| `CatalogQuery` | `prefixQuery` | `prefix_query` |
| `CatalogQuery` | `rangeQuery` | `range_query` |
| `CatalogQuery` | `textQuery` | `text_query` |
| `CatalogQuery` | `itemsForTaxQuery` | `items_for_tax_query` |
| `CatalogQuery` | `itemsForModifierListQuery` | `items_for_modifier_list_query` |
| `CatalogQuery` | `itemsForItemOptionsQuery` | `items_for_item_options_query` |
| `CatalogQuery` | `itemVariationsForItemOptionValuesQuery` | `item_variations_for_item_option_values_query` |
| `CatalogQueryExact` | `attributeName` | `attribute_name` |
| `CatalogQueryExact` | `attributeValue` | `attribute_value` |
| `CatalogQueryItemVariationsForItemOptionValues` | `itemOptionValueIds` | `item_option_value_ids` |
| `CatalogQueryItemsForItemOptions` | `itemOptionIds` | `item_option_ids` |
| `CatalogQueryItemsForModifierList` | `modifierListIds` | `modifier_list_ids` |
| `CatalogQueryItemsForTax` | `taxIds` | `tax_ids` |
| `CatalogQueryPrefix` | `attributeName` | `attribute_name` |
| `CatalogQueryPrefix` | `attributePrefix` | `attribute_prefix` |
| `CatalogQueryRange` | `attributeName` | `attribute_name` |
| `CatalogQueryRange` | `attributeMinValue` | `attribute_min_value` |
| `CatalogQueryRange` | `attributeMaxValue` | `attribute_max_value` |
| `CatalogQuerySet` | `attributeName` | `attribute_name` |
| `CatalogQuerySet` | `attributeValues` | `attribute_values` |
| `CatalogQuerySortedAttribute` | `attributeName` | `attribute_name` |
| `CatalogQuerySortedAttribute` | `initialAttributeValue` | `initial_attribute_value` |
| `CatalogQuerySortedAttribute` | `sortOrder` | `sort_order` |
| `CatalogQuickAmountsSettings` | `eligibleForAutoAmounts` | `eligible_for_auto_amounts` |
| `CatalogStockConversion` | `stockableItemVariationId` | `stockable_item_variation_id` |
| `CatalogStockConversion` | `stockableQuantity` | `stockable_quantity` |
| `CatalogStockConversion` | `nonstockableQuantity` | `nonstockable_quantity` |
| `CatalogSubscriptionPlan` | `subscriptionPlanVariations` | `subscription_plan_variations` |
| `CatalogSubscriptionPlan` | `eligibleItemIds` | `eligible_item_ids` |
| `CatalogSubscriptionPlan` | `eligibleCategoryIds` | `eligible_category_ids` |
| `CatalogSubscriptionPlan` | `allItems` | `all_items` |
| `CatalogSubscriptionPlanVariation` | `subscriptionPlanId` | `subscription_plan_id` |
| `CatalogSubscriptionPlanVariation` | `monthlyBillingAnchorDate` | `monthly_billing_anchor_date` |
| `CatalogSubscriptionPlanVariation` | `canProrate` | `can_prorate` |
| `CatalogSubscriptionPlanVariation` | `successorPlanVariationId` | `successor_plan_variation_id` |
| `CatalogTax` | `calculationPhase` | `calculation_phase` |
| `CatalogTax` | `inclusionType` | `inclusion_type` |
| `CatalogTax` | `appliesToCustomAmounts` | `applies_to_custom_amounts` |
| `CatalogTax` | `appliesToProductSetId` | `applies_to_product_set_id` |
| `CatalogV1Id` | `catalogV1Id` | `catalog_v1_id` |
| `CatalogV1Id` | `locationId` | `location_id` |
| `CatalogVersionUpdatedEvent` | `merchantId` | `merchant_id` |
| `CatalogVersionUpdatedEvent` | `eventId` | `event_id` |
| `CatalogVersionUpdatedEvent` | `createdAt` | `created_at` |
| `CatalogVersionUpdatedEventCatalogVersion` | `updatedAt` | `updated_at` |
| `CatalogVersionUpdatedEventObject` | `catalogVersion` | `catalog_version` |
| `CategoryPathToRootNode` | `categoryId` | `category_id` |
| `CategoryPathToRootNode` | `categoryName` | `category_name` |
| `ChangeBillingAnchorDateRequest` | `monthlyBillingAnchorDate` | `monthly_billing_anchor_date` |
| `ChangeBillingAnchorDateRequest` | `effectiveDate` | `effective_date` |
| `Channel` | `merchantId` | `merchant_id` |
| `Channel` | `createdAt` | `created_at` |
| `Channel` | `updatedAt` | `updated_at` |
| `ChargeRequestAdditionalRecipient` | `locationId` | `location_id` |
| `ChargeRequestAdditionalRecipient` | `amountMoney` | `amount_money` |
| `Checkout` | `checkoutPageUrl` | `checkout_page_url` |
| `Checkout` | `askForShippingAddress` | `ask_for_shipping_address` |
| `Checkout` | `merchantSupportEmail` | `merchant_support_email` |
| `Checkout` | `prePopulateBuyerEmail` | `pre_populate_buyer_email` |
| `Checkout` | `prePopulateShippingAddress` | `pre_populate_shipping_address` |
| `Checkout` | `redirectUrl` | `redirect_url` |
| `Checkout` | `createdAt` | `created_at` |
| `Checkout` | `additionalRecipients` | `additional_recipients` |
| `CheckoutLocationSettings` | `locationId` | `location_id` |
| `CheckoutLocationSettings` | `customerNotesEnabled` | `customer_notes_enabled` |
| `CheckoutLocationSettings` | `updatedAt` | `updated_at` |
| `CheckoutLocationSettingsBranding` | `headerType` | `header_type` |
| `CheckoutLocationSettingsBranding` | `buttonColor` | `button_color` |
| `CheckoutLocationSettingsBranding` | `buttonShape` | `button_shape` |
| `CheckoutLocationSettingsTipping` | `smartTippingEnabled` | `smart_tipping_enabled` |
| `CheckoutLocationSettingsTipping` | `defaultPercent` | `default_percent` |
| `CheckoutLocationSettingsTipping` | `smartTips` | `smart_tips` |
| `CheckoutLocationSettingsTipping` | `defaultSmartTip` | `default_smart_tip` |
| `CheckoutMerchantSettings` | `paymentMethods` | `payment_methods` |
| `CheckoutMerchantSettings` | `updatedAt` | `updated_at` |
| `CheckoutMerchantSettingsPaymentMethods` | `applePay` | `apple_pay` |
| `CheckoutMerchantSettingsPaymentMethods` | `googlePay` | `google_pay` |
| `CheckoutMerchantSettingsPaymentMethods` | `cashApp` | `cash_app` |
| `CheckoutMerchantSettingsPaymentMethods` | `afterpayClearpay` | `afterpay_clearpay` |
| `CheckoutMerchantSettingsPaymentMethodsAfterpayClearpay` | `orderEligibilityRange` | `order_eligibility_range` |
| `CheckoutMerchantSettingsPaymentMethodsAfterpayClearpay` | `itemEligibilityRange` | `item_eligibility_range` |
| `CheckoutOptions` | `allowTipping` | `allow_tipping` |
| `CheckoutOptions` | `customFields` | `custom_fields` |
| `CheckoutOptions` | `subscriptionPlanId` | `subscription_plan_id` |
| `CheckoutOptions` | `redirectUrl` | `redirect_url` |
| `CheckoutOptions` | `merchantSupportEmail` | `merchant_support_email` |
| `CheckoutOptions` | `askForShippingAddress` | `ask_for_shipping_address` |
| `CheckoutOptions` | `acceptedPaymentMethods` | `accepted_payment_methods` |
| `CheckoutOptions` | `appFeeMoney` | `app_fee_money` |
| `CheckoutOptions` | `shippingFee` | `shipping_fee` |
| `CheckoutOptions` | `enableCoupon` | `enable_coupon` |
| `CheckoutOptions` | `enableLoyalty` | `enable_loyalty` |
| `ClearpayDetails` | `emailAddress` | `email_address` |
| `CloneOrderRequest` | `orderId` | `order_id` |
| `CloneOrderRequest` | `idempotencyKey` | `idempotency_key` |
| `CollectedData` | `inputText` | `input_text` |
| `CompletePaymentRequest` | `versionToken` | `version_token` |
| `Component` | `applicationDetails` | `application_details` |
| `Component` | `cardReaderDetails` | `card_reader_details` |
| `Component` | `batteryDetails` | `battery_details` |
| `Component` | `wifiDetails` | `wifi_details` |
| `Component` | `ethernetDetails` | `ethernet_details` |
| `ConfirmationDecision` | `hasAgreed` | `has_agreed` |
| `ConfirmationOptions` | `agreeButtonText` | `agree_button_text` |
| `ConfirmationOptions` | `disagreeButtonText` | `disagree_button_text` |
| `CreateBankAccountRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateBankAccountRequest` | `sourceId` | `source_id` |
| `CreateBankAccountRequest` | `customerId` | `customer_id` |
| `CreateBankAccountResponse` | `bankAccount` | `bank_account` |
| `CreateBookingCustomAttributeDefinitionRequest` | `customAttributeDefinition` | `custom_attribute_definition` |
| `CreateBookingCustomAttributeDefinitionRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateBookingCustomAttributeDefinitionResponse` | `customAttributeDefinition` | `custom_attribute_definition` |
| `CreateBookingRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateBreakTypeRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateBreakTypeRequest` | `breakType` | `break_type` |
| `CreateBreakTypeResponse` | `breakType` | `break_type` |
| `CreateCardRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateCardRequest` | `sourceId` | `source_id` |
| `CreateCardRequest` | `verificationToken` | `verification_token` |
| `CreateCatalogImageRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateCatalogImageRequest` | `objectId` | `object_id` |
| `CreateCatalogImageRequest` | `isPrimary` | `is_primary` |
| `CreateCheckoutRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateCheckoutRequest` | `askForShippingAddress` | `ask_for_shipping_address` |
| `CreateCheckoutRequest` | `merchantSupportEmail` | `merchant_support_email` |
| `CreateCheckoutRequest` | `prePopulateBuyerEmail` | `pre_populate_buyer_email` |
| `CreateCheckoutRequest` | `prePopulateShippingAddress` | `pre_populate_shipping_address` |
| `CreateCheckoutRequest` | `redirectUrl` | `redirect_url` |
| `CreateCheckoutRequest` | `additionalRecipients` | `additional_recipients` |
| `CreateCustomerCardRequest` | `cardNonce` | `card_nonce` |
| `CreateCustomerCardRequest` | `billingAddress` | `billing_address` |
| `CreateCustomerCardRequest` | `cardholderName` | `cardholder_name` |
| `CreateCustomerCardRequest` | `verificationToken` | `verification_token` |
| `CreateCustomerCustomAttributeDefinitionRequest` | `customAttributeDefinition` | `custom_attribute_definition` |
| `CreateCustomerCustomAttributeDefinitionRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateCustomerCustomAttributeDefinitionResponse` | `customAttributeDefinition` | `custom_attribute_definition` |
| `CreateCustomerGroupRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateCustomerRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateCustomerRequest` | `givenName` | `given_name` |
| `CreateCustomerRequest` | `familyName` | `family_name` |
| `CreateCustomerRequest` | `companyName` | `company_name` |
| `CreateCustomerRequest` | `emailAddress` | `email_address` |
| `CreateCustomerRequest` | `phoneNumber` | `phone_number` |
| `CreateCustomerRequest` | `referenceId` | `reference_id` |
| `CreateCustomerRequest` | `taxIds` | `tax_ids` |
| `CreateDeviceCodeRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateDeviceCodeRequest` | `deviceCode` | `device_code` |
| `CreateDeviceCodeResponse` | `deviceCode` | `device_code` |
| `CreateDisputeEvidenceFileRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateDisputeEvidenceFileRequest` | `evidenceType` | `evidence_type` |
| `CreateDisputeEvidenceFileRequest` | `contentType` | `content_type` |
| `CreateDisputeEvidenceTextRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateDisputeEvidenceTextRequest` | `evidenceType` | `evidence_type` |
| `CreateDisputeEvidenceTextRequest` | `evidenceText` | `evidence_text` |
| `CreateGiftCardActivityRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateGiftCardActivityRequest` | `giftCardActivity` | `gift_card_activity` |
| `CreateGiftCardActivityResponse` | `giftCardActivity` | `gift_card_activity` |
| `CreateGiftCardRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateGiftCardRequest` | `locationId` | `location_id` |
| `CreateGiftCardRequest` | `giftCard` | `gift_card` |
| `CreateGiftCardResponse` | `giftCard` | `gift_card` |
| `CreateInventoryAdjustmentReasonRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateInventoryAdjustmentReasonRequest` | `adjustmentReason` | `adjustment_reason` |
| `CreateInventoryAdjustmentReasonResponse` | `adjustmentReason` | `adjustment_reason` |
| `CreateInvoiceAttachmentRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateInvoiceRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateJobRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateLocationCustomAttributeDefinitionRequest` | `customAttributeDefinition` | `custom_attribute_definition` |
| `CreateLocationCustomAttributeDefinitionRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateLocationCustomAttributeDefinitionResponse` | `customAttributeDefinition` | `custom_attribute_definition` |
| `CreateLoyaltyAccountRequest` | `loyaltyAccount` | `loyalty_account` |
| `CreateLoyaltyAccountRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateLoyaltyAccountResponse` | `loyaltyAccount` | `loyalty_account` |
| `CreateLoyaltyPromotionRequest` | `loyaltyPromotion` | `loyalty_promotion` |
| `CreateLoyaltyPromotionRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateLoyaltyPromotionResponse` | `loyaltyPromotion` | `loyalty_promotion` |
| `CreateLoyaltyRewardRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateMerchantCustomAttributeDefinitionRequest` | `customAttributeDefinition` | `custom_attribute_definition` |
| `CreateMerchantCustomAttributeDefinitionRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateMerchantCustomAttributeDefinitionResponse` | `customAttributeDefinition` | `custom_attribute_definition` |
| `CreateOrderCustomAttributeDefinitionRequest` | `customAttributeDefinition` | `custom_attribute_definition` |
| `CreateOrderCustomAttributeDefinitionRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateOrderCustomAttributeDefinitionResponse` | `customAttributeDefinition` | `custom_attribute_definition` |
| `CreateOrderRequest` | `idempotencyKey` | `idempotency_key` |
| `CreatePaymentLinkRequest` | `idempotencyKey` | `idempotency_key` |
| `CreatePaymentLinkRequest` | `quickPay` | `quick_pay` |
| `CreatePaymentLinkRequest` | `checkoutOptions` | `checkout_options` |
| `CreatePaymentLinkRequest` | `prePopulatedData` | `pre_populated_data` |
| `CreatePaymentLinkRequest` | `paymentNote` | `payment_note` |
| `CreatePaymentLinkResponse` | `paymentLink` | `payment_link` |
| `CreatePaymentLinkResponse` | `relatedResources` | `related_resources` |
| `CreatePaymentRequest` | `sourceId` | `source_id` |
| `CreatePaymentRequest` | `idempotencyKey` | `idempotency_key` |
| `CreatePaymentRequest` | `amountMoney` | `amount_money` |
| `CreatePaymentRequest` | `tipMoney` | `tip_money` |
| `CreatePaymentRequest` | `appFeeMoney` | `app_fee_money` |
| `CreatePaymentRequest` | `delayDuration` | `delay_duration` |
| `CreatePaymentRequest` | `delayAction` | `delay_action` |
| `CreatePaymentRequest` | `orderId` | `order_id` |
| `CreatePaymentRequest` | `customerId` | `customer_id` |
| `CreatePaymentRequest` | `locationId` | `location_id` |
| `CreatePaymentRequest` | `teamMemberId` | `team_member_id` |
| `CreatePaymentRequest` | `referenceId` | `reference_id` |
| `CreatePaymentRequest` | `verificationToken` | `verification_token` |
| `CreatePaymentRequest` | `acceptPartialAuthorization` | `accept_partial_authorization` |
| `CreatePaymentRequest` | `buyerEmailAddress` | `buyer_email_address` |
| `CreatePaymentRequest` | `buyerPhoneNumber` | `buyer_phone_number` |
| `CreatePaymentRequest` | `billingAddress` | `billing_address` |
| `CreatePaymentRequest` | `shippingAddress` | `shipping_address` |
| `CreatePaymentRequest` | `statementDescriptionIdentifier` | `statement_description_identifier` |
| `CreatePaymentRequest` | `cashDetails` | `cash_details` |
| `CreatePaymentRequest` | `externalDetails` | `external_details` |
| `CreatePaymentRequest` | `customerDetails` | `customer_details` |
| `CreatePaymentRequest` | `offlinePaymentDetails` | `offline_payment_details` |
| `CreateScheduledShiftRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateScheduledShiftRequest` | `scheduledShift` | `scheduled_shift` |
| `CreateScheduledShiftResponse` | `scheduledShift` | `scheduled_shift` |
| `CreateShiftRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateSubscriptionRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateSubscriptionRequest` | `locationId` | `location_id` |
| `CreateSubscriptionRequest` | `planVariationId` | `plan_variation_id` |
| `CreateSubscriptionRequest` | `customerId` | `customer_id` |
| `CreateSubscriptionRequest` | `startDate` | `start_date` |
| `CreateSubscriptionRequest` | `canceledDate` | `canceled_date` |
| `CreateSubscriptionRequest` | `taxPercentage` | `tax_percentage` |
| `CreateSubscriptionRequest` | `priceOverrideMoney` | `price_override_money` |
| `CreateSubscriptionRequest` | `cardId` | `card_id` |
| `CreateSubscriptionRequest` | `monthlyBillingAnchorDate` | `monthly_billing_anchor_date` |
| `CreateTeamMemberRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateTeamMemberRequest` | `teamMember` | `team_member` |
| `CreateTeamMemberResponse` | `teamMember` | `team_member` |
| `CreateTerminalActionRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateTerminalCheckoutRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateTerminalRefundRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateTimecardRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateTransferOrderData` | `sourceLocationId` | `source_location_id` |
| `CreateTransferOrderData` | `destinationLocationId` | `destination_location_id` |
| `CreateTransferOrderData` | `expectedAt` | `expected_at` |
| `CreateTransferOrderData` | `trackingNumber` | `tracking_number` |
| `CreateTransferOrderData` | `createdByTeamMemberId` | `created_by_team_member_id` |
| `CreateTransferOrderData` | `lineItems` | `line_items` |
| `CreateTransferOrderLineData` | `itemVariationId` | `item_variation_id` |
| `CreateTransferOrderLineData` | `quantityOrdered` | `quantity_ordered` |
| `CreateTransferOrderRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateTransferOrderRequest` | `transferOrder` | `transfer_order` |
| `CreateTransferOrderResponse` | `transferOrder` | `transfer_order` |
| `CreateVendorRequest` | `idempotencyKey` | `idempotency_key` |
| `CreateWebhookSubscriptionRequest` | `idempotencyKey` | `idempotency_key` |
| `CustomAttribute` | `updatedAt` | `updated_at` |
| `CustomAttribute` | `createdAt` | `created_at` |
| `CustomAttributeDefinition` | `updatedAt` | `updated_at` |
| `CustomAttributeDefinition` | `createdAt` | `created_at` |
| `CustomAttributeDefinitionEventDataObject` | `customAttributeDefinition` | `custom_attribute_definition` |
| `CustomAttributeEventDataObject` | `customAttribute` | `custom_attribute` |
| `CustomAttributeFilter` | `customAttributeDefinitionId` | `custom_attribute_definition_id` |
| `CustomAttributeFilter` | `stringFilter` | `string_filter` |
| `CustomAttributeFilter` | `numberFilter` | `number_filter` |
| `CustomAttributeFilter` | `selectionUidsFilter` | `selection_uids_filter` |
| `CustomAttributeFilter` | `boolFilter` | `bool_filter` |
| `Customer` | `createdAt` | `created_at` |
| `Customer` | `updatedAt` | `updated_at` |
| `Customer` | `givenName` | `given_name` |
| `Customer` | `familyName` | `family_name` |
| `Customer` | `companyName` | `company_name` |
| `Customer` | `emailAddress` | `email_address` |
| `Customer` | `phoneNumber` | `phone_number` |
| `Customer` | `referenceId` | `reference_id` |
| `Customer` | `creationSource` | `creation_source` |
| `Customer` | `groupIds` | `group_ids` |
| `Customer` | `segmentIds` | `segment_ids` |
| `Customer` | `taxIds` | `tax_ids` |
| `CustomerAddressFilter` | `postalCode` | `postal_code` |
| `CustomerCreatedEvent` | `merchantId` | `merchant_id` |
| `CustomerCreatedEvent` | `eventId` | `event_id` |
| `CustomerCreatedEvent` | `createdAt` | `created_at` |
| `CustomerCreatedEventEventContextMerge` | `fromCustomerIds` | `from_customer_ids` |
| `CustomerCreatedEventEventContextMerge` | `toCustomerId` | `to_customer_id` |
| `CustomerCreatedEventObject` | `eventContext` | `event_context` |
| `CustomerCustomAttributeDefinitionCreatedEvent` | `merchantId` | `merchant_id` |
| `CustomerCustomAttributeDefinitionCreatedEvent` | `eventId` | `event_id` |
| `CustomerCustomAttributeDefinitionCreatedEvent` | `createdAt` | `created_at` |
| `CustomerCustomAttributeDefinitionCreatedPublicEvent` | `merchantId` | `merchant_id` |
| `CustomerCustomAttributeDefinitionCreatedPublicEvent` | `eventId` | `event_id` |
| `CustomerCustomAttributeDefinitionCreatedPublicEvent` | `createdAt` | `created_at` |
| `CustomerCustomAttributeDefinitionDeletedEvent` | `merchantId` | `merchant_id` |
| `CustomerCustomAttributeDefinitionDeletedEvent` | `eventId` | `event_id` |
| `CustomerCustomAttributeDefinitionDeletedEvent` | `createdAt` | `created_at` |
| `CustomerCustomAttributeDefinitionDeletedPublicEvent` | `merchantId` | `merchant_id` |
| `CustomerCustomAttributeDefinitionDeletedPublicEvent` | `eventId` | `event_id` |
| `CustomerCustomAttributeDefinitionDeletedPublicEvent` | `createdAt` | `created_at` |
| `CustomerCustomAttributeDefinitionOwnedCreatedEvent` | `merchantId` | `merchant_id` |
| `CustomerCustomAttributeDefinitionOwnedCreatedEvent` | `eventId` | `event_id` |
| `CustomerCustomAttributeDefinitionOwnedCreatedEvent` | `createdAt` | `created_at` |
| `CustomerCustomAttributeDefinitionOwnedDeletedEvent` | `merchantId` | `merchant_id` |
| `CustomerCustomAttributeDefinitionOwnedDeletedEvent` | `eventId` | `event_id` |
| `CustomerCustomAttributeDefinitionOwnedDeletedEvent` | `createdAt` | `created_at` |
| `CustomerCustomAttributeDefinitionOwnedUpdatedEvent` | `merchantId` | `merchant_id` |
| `CustomerCustomAttributeDefinitionOwnedUpdatedEvent` | `eventId` | `event_id` |
| `CustomerCustomAttributeDefinitionOwnedUpdatedEvent` | `createdAt` | `created_at` |
| `CustomerCustomAttributeDefinitionUpdatedEvent` | `merchantId` | `merchant_id` |
| `CustomerCustomAttributeDefinitionUpdatedEvent` | `eventId` | `event_id` |
| `CustomerCustomAttributeDefinitionUpdatedEvent` | `createdAt` | `created_at` |
| `CustomerCustomAttributeDefinitionUpdatedPublicEvent` | `merchantId` | `merchant_id` |
| `CustomerCustomAttributeDefinitionUpdatedPublicEvent` | `eventId` | `event_id` |
| `CustomerCustomAttributeDefinitionUpdatedPublicEvent` | `createdAt` | `created_at` |
| `CustomerCustomAttributeDefinitionVisibleCreatedEvent` | `merchantId` | `merchant_id` |
| `CustomerCustomAttributeDefinitionVisibleCreatedEvent` | `eventId` | `event_id` |
| `CustomerCustomAttributeDefinitionVisibleCreatedEvent` | `createdAt` | `created_at` |
| `CustomerCustomAttributeDefinitionVisibleDeletedEvent` | `merchantId` | `merchant_id` |
| `CustomerCustomAttributeDefinitionVisibleDeletedEvent` | `eventId` | `event_id` |
| `CustomerCustomAttributeDefinitionVisibleDeletedEvent` | `createdAt` | `created_at` |
| `CustomerCustomAttributeDefinitionVisibleUpdatedEvent` | `merchantId` | `merchant_id` |
| `CustomerCustomAttributeDefinitionVisibleUpdatedEvent` | `eventId` | `event_id` |
| `CustomerCustomAttributeDefinitionVisibleUpdatedEvent` | `createdAt` | `created_at` |
| `CustomerCustomAttributeDeletedEvent` | `merchantId` | `merchant_id` |
| `CustomerCustomAttributeDeletedEvent` | `eventId` | `event_id` |
| `CustomerCustomAttributeDeletedEvent` | `createdAt` | `created_at` |
| `CustomerCustomAttributeDeletedPublicEvent` | `merchantId` | `merchant_id` |
| `CustomerCustomAttributeDeletedPublicEvent` | `eventId` | `event_id` |
| `CustomerCustomAttributeDeletedPublicEvent` | `createdAt` | `created_at` |
| `CustomerCustomAttributeFilter` | `updatedAt` | `updated_at` |
| `CustomerCustomAttributeOwnedDeletedEvent` | `merchantId` | `merchant_id` |
| `CustomerCustomAttributeOwnedDeletedEvent` | `eventId` | `event_id` |
| `CustomerCustomAttributeOwnedDeletedEvent` | `createdAt` | `created_at` |
| `CustomerCustomAttributeOwnedUpdatedEvent` | `merchantId` | `merchant_id` |
| `CustomerCustomAttributeOwnedUpdatedEvent` | `eventId` | `event_id` |
| `CustomerCustomAttributeOwnedUpdatedEvent` | `createdAt` | `created_at` |
| `CustomerCustomAttributeUpdatedEvent` | `merchantId` | `merchant_id` |
| `CustomerCustomAttributeUpdatedEvent` | `eventId` | `event_id` |
| `CustomerCustomAttributeUpdatedEvent` | `createdAt` | `created_at` |
| `CustomerCustomAttributeUpdatedPublicEvent` | `merchantId` | `merchant_id` |
| `CustomerCustomAttributeUpdatedPublicEvent` | `eventId` | `event_id` |
| `CustomerCustomAttributeUpdatedPublicEvent` | `createdAt` | `created_at` |
| `CustomerCustomAttributeVisibleDeletedEvent` | `merchantId` | `merchant_id` |
| `CustomerCustomAttributeVisibleDeletedEvent` | `eventId` | `event_id` |
| `CustomerCustomAttributeVisibleDeletedEvent` | `createdAt` | `created_at` |
| `CustomerCustomAttributeVisibleUpdatedEvent` | `merchantId` | `merchant_id` |
| `CustomerCustomAttributeVisibleUpdatedEvent` | `eventId` | `event_id` |
| `CustomerCustomAttributeVisibleUpdatedEvent` | `createdAt` | `created_at` |
| `CustomerDeletedEvent` | `merchantId` | `merchant_id` |
| `CustomerDeletedEvent` | `eventId` | `event_id` |
| `CustomerDeletedEvent` | `createdAt` | `created_at` |
| `CustomerDeletedEventEventContextMerge` | `fromCustomerIds` | `from_customer_ids` |
| `CustomerDeletedEventEventContextMerge` | `toCustomerId` | `to_customer_id` |
| `CustomerDeletedEventObject` | `eventContext` | `event_context` |
| `CustomerDetails` | `customerInitiated` | `customer_initiated` |
| `CustomerDetails` | `sellerKeyedIn` | `seller_keyed_in` |
| `CustomerFilter` | `creationSource` | `creation_source` |
| `CustomerFilter` | `createdAt` | `created_at` |
| `CustomerFilter` | `updatedAt` | `updated_at` |
| `CustomerFilter` | `emailAddress` | `email_address` |
| `CustomerFilter` | `phoneNumber` | `phone_number` |
| `CustomerFilter` | `referenceId` | `reference_id` |
| `CustomerFilter` | `groupIds` | `group_ids` |
| `CustomerFilter` | `customAttribute` | `custom_attribute` |
| `CustomerFilter` | `segmentIds` | `segment_ids` |
| `CustomerGroup` | `createdAt` | `created_at` |
| `CustomerGroup` | `updatedAt` | `updated_at` |
| `CustomerPreferences` | `emailUnsubscribed` | `email_unsubscribed` |
| `CustomerSegment` | `createdAt` | `created_at` |
| `CustomerSegment` | `updatedAt` | `updated_at` |
| `CustomerTaxIds` | `euVat` | `eu_vat` |
| `CustomerUpdatedEvent` | `merchantId` | `merchant_id` |
| `CustomerUpdatedEvent` | `eventId` | `event_id` |
| `CustomerUpdatedEvent` | `createdAt` | `created_at` |
| `DataCollectionOptions` | `inputType` | `input_type` |
| `DataCollectionOptions` | `collectedData` | `collected_data` |
| `DateRange` | `startDate` | `start_date` |
| `DateRange` | `endDate` | `end_date` |
| `DeleteCatalogObjectResponse` | `deletedObjectIds` | `deleted_object_ids` |
| `DeleteCatalogObjectResponse` | `deletedAt` | `deleted_at` |
| `DeleteInventoryAdjustmentReasonRequest` | `reasonId` | `reason_id` |
| `DeleteInventoryAdjustmentReasonResponse` | `adjustmentReason` | `adjustment_reason` |
| `DeletePaymentLinkResponse` | `cancelledOrderId` | `cancelled_order_id` |
| `DestinationDetails` | `cardDetails` | `card_details` |
| `DestinationDetails` | `cashDetails` | `cash_details` |
| `DestinationDetails` | `externalDetails` | `external_details` |
| `DestinationDetailsCardRefundDetails` | `entryMethod` | `entry_method` |
| `DestinationDetailsCardRefundDetails` | `authResultCode` | `auth_result_code` |
| `DestinationDetailsCashRefundDetails` | `sellerSuppliedMoney` | `seller_supplied_money` |
| `DestinationDetailsCashRefundDetails` | `changeBackMoney` | `change_back_money` |
| `DestinationDetailsExternalRefundDetails` | `sourceId` | `source_id` |
| `DeviceAttributes` | `manufacturersId` | `manufacturers_id` |
| `DeviceAttributes` | `updatedAt` | `updated_at` |
| `DeviceAttributes` | `merchantToken` | `merchant_token` |
| `DeviceCheckoutOptions` | `deviceId` | `device_id` |
| `DeviceCheckoutOptions` | `skipReceiptScreen` | `skip_receipt_screen` |
| `DeviceCheckoutOptions` | `collectSignature` | `collect_signature` |
| `DeviceCheckoutOptions` | `tipSettings` | `tip_settings` |
| `DeviceCheckoutOptions` | `showItemizedCart` | `show_itemized_cart` |
| `DeviceCheckoutOptions` | `allowAutoCardSurcharge` | `allow_auto_card_surcharge` |
| `DeviceCode` | `deviceId` | `device_id` |
| `DeviceCode` | `productType` | `product_type` |
| `DeviceCode` | `locationId` | `location_id` |
| `DeviceCode` | `pairBy` | `pair_by` |
| `DeviceCode` | `createdAt` | `created_at` |
| `DeviceCode` | `statusChangedAt` | `status_changed_at` |
| `DeviceCode` | `pairedAt` | `paired_at` |
| `DeviceCodePairedEvent` | `merchantId` | `merchant_id` |
| `DeviceCodePairedEvent` | `locationId` | `location_id` |
| `DeviceCodePairedEvent` | `eventId` | `event_id` |
| `DeviceCodePairedEvent` | `createdAt` | `created_at` |
| `DeviceCodePairedEventObject` | `deviceCode` | `device_code` |
| `DeviceComponentDetailsApplicationDetails` | `applicationType` | `application_type` |
| `DeviceComponentDetailsApplicationDetails` | `sessionLocation` | `session_location` |
| `DeviceComponentDetailsApplicationDetails` | `deviceCodeId` | `device_code_id` |
| `DeviceComponentDetailsBatteryDetails` | `visiblePercent` | `visible_percent` |
| `DeviceComponentDetailsBatteryDetails` | `externalPower` | `external_power` |
| `DeviceComponentDetailsEthernetDetails` | `ipAddressV4` | `ip_address_v4` |
| `DeviceComponentDetailsEthernetDetails` | `macAddress` | `mac_address` |
| `DeviceComponentDetailsWiFiDetails` | `ipAddressV4` | `ip_address_v4` |
| `DeviceComponentDetailsWiFiDetails` | `secureConnection` | `secure_connection` |
| `DeviceComponentDetailsWiFiDetails` | `signalStrength` | `signal_strength` |
| `DeviceComponentDetailsWiFiDetails` | `macAddress` | `mac_address` |
| `DeviceCreatedEvent` | `merchantId` | `merchant_id` |
| `DeviceCreatedEvent` | `eventId` | `event_id` |
| `DeviceCreatedEvent` | `createdAt` | `created_at` |
| `DeviceDetails` | `deviceId` | `device_id` |
| `DeviceDetails` | `deviceInstallationId` | `device_installation_id` |
| `DeviceDetails` | `deviceName` | `device_name` |
| `DeviceMetadata` | `batteryPercentage` | `battery_percentage` |
| `DeviceMetadata` | `chargingState` | `charging_state` |
| `DeviceMetadata` | `locationId` | `location_id` |
| `DeviceMetadata` | `merchantId` | `merchant_id` |
| `DeviceMetadata` | `networkConnectionType` | `network_connection_type` |
| `DeviceMetadata` | `paymentRegion` | `payment_region` |
| `DeviceMetadata` | `serialNumber` | `serial_number` |
| `DeviceMetadata` | `osVersion` | `os_version` |
| `DeviceMetadata` | `appVersion` | `app_version` |
| `DeviceMetadata` | `wifiNetworkName` | `wifi_network_name` |
| `DeviceMetadata` | `wifiNetworkStrength` | `wifi_network_strength` |
| `DeviceMetadata` | `ipAddress` | `ip_address` |
| `DigitalWalletDetails` | `cashAppDetails` | `cash_app_details` |
| `DigitalWalletDetails` | `lightningDetails` | `lightning_details` |
| `DisableBankAccountResponse` | `bankAccount` | `bank_account` |
| `Dispute` | `disputeId` | `dispute_id` |
| `Dispute` | `amountMoney` | `amount_money` |
| `Dispute` | `dueAt` | `due_at` |
| `Dispute` | `disputedPayment` | `disputed_payment` |
| `Dispute` | `evidenceIds` | `evidence_ids` |
| `Dispute` | `cardBrand` | `card_brand` |
| `Dispute` | `createdAt` | `created_at` |
| `Dispute` | `updatedAt` | `updated_at` |
| `Dispute` | `brandDisputeId` | `brand_dispute_id` |
| `Dispute` | `reportedDate` | `reported_date` |
| `Dispute` | `reportedAt` | `reported_at` |
| `Dispute` | `locationId` | `location_id` |
| `DisputeCreatedEvent` | `merchantId` | `merchant_id` |
| `DisputeCreatedEvent` | `locationId` | `location_id` |
| `DisputeCreatedEvent` | `eventId` | `event_id` |
| `DisputeCreatedEvent` | `createdAt` | `created_at` |
| `DisputeEvidence` | `evidenceId` | `evidence_id` |
| `DisputeEvidence` | `disputeId` | `dispute_id` |
| `DisputeEvidence` | `evidenceFile` | `evidence_file` |
| `DisputeEvidence` | `evidenceText` | `evidence_text` |
| `DisputeEvidence` | `uploadedAt` | `uploaded_at` |
| `DisputeEvidence` | `evidenceType` | `evidence_type` |
| `DisputeEvidenceAddedEvent` | `merchantId` | `merchant_id` |
| `DisputeEvidenceAddedEvent` | `locationId` | `location_id` |
| `DisputeEvidenceAddedEvent` | `eventId` | `event_id` |
| `DisputeEvidenceAddedEvent` | `createdAt` | `created_at` |
| `DisputeEvidenceCreatedEvent` | `merchantId` | `merchant_id` |
| `DisputeEvidenceCreatedEvent` | `locationId` | `location_id` |
| `DisputeEvidenceCreatedEvent` | `eventId` | `event_id` |
| `DisputeEvidenceCreatedEvent` | `createdAt` | `created_at` |
| `DisputeEvidenceDeletedEvent` | `merchantId` | `merchant_id` |
| `DisputeEvidenceDeletedEvent` | `locationId` | `location_id` |
| `DisputeEvidenceDeletedEvent` | `eventId` | `event_id` |
| `DisputeEvidenceDeletedEvent` | `createdAt` | `created_at` |
| `DisputeEvidenceRemovedEvent` | `merchantId` | `merchant_id` |
| `DisputeEvidenceRemovedEvent` | `locationId` | `location_id` |
| `DisputeEvidenceRemovedEvent` | `eventId` | `event_id` |
| `DisputeEvidenceRemovedEvent` | `createdAt` | `created_at` |
| `DisputeStateChangedEvent` | `merchantId` | `merchant_id` |
| `DisputeStateChangedEvent` | `locationId` | `location_id` |
| `DisputeStateChangedEvent` | `eventId` | `event_id` |
| `DisputeStateChangedEvent` | `createdAt` | `created_at` |
| `DisputeStateUpdatedEvent` | `merchantId` | `merchant_id` |
| `DisputeStateUpdatedEvent` | `locationId` | `location_id` |
| `DisputeStateUpdatedEvent` | `eventId` | `event_id` |
| `DisputeStateUpdatedEvent` | `createdAt` | `created_at` |
| `DisputedPayment` | `paymentId` | `payment_id` |
| `ElectronicMoneyDetails` | `felicaDetails` | `felica_details` |
| `Employee` | `firstName` | `first_name` |
| `Employee` | `lastName` | `last_name` |
| `Employee` | `phoneNumber` | `phone_number` |
| `Employee` | `locationIds` | `location_ids` |
| `Employee` | `isOwner` | `is_owner` |
| `Employee` | `createdAt` | `created_at` |
| `Employee` | `updatedAt` | `updated_at` |
| `EmployeeWage` | `employeeId` | `employee_id` |
| `EmployeeWage` | `hourlyRate` | `hourly_rate` |
| `Event` | `merchantId` | `merchant_id` |
| `Event` | `locationId` | `location_id` |
| `Event` | `eventId` | `event_id` |
| `Event` | `createdAt` | `created_at` |
| `EventMetadata` | `eventId` | `event_id` |
| `EventMetadata` | `apiVersion` | `api_version` |
| `EventTypeMetadata` | `eventType` | `event_type` |
| `EventTypeMetadata` | `apiVersionIntroduced` | `api_version_introduced` |
| `EventTypeMetadata` | `releaseStatus` | `release_status` |
| `ExternalPaymentDetails` | `sourceId` | `source_id` |
| `ExternalPaymentDetails` | `sourceFeeMoney` | `source_fee_money` |
| `FelicaDetails` | `terminalId` | `terminal_id` |
| `FelicaDetails` | `felicaMaskedCardNumber` | `felica_masked_card_number` |
| `FelicaDetails` | `felicaBrand` | `felica_brand` |
| `FloatNumberRange` | `startAt` | `start_at` |
| `FloatNumberRange` | `endAt` | `end_at` |
| `Fulfillment` | `lineItemApplication` | `line_item_application` |
| `Fulfillment` | `pickupDetails` | `pickup_details` |
| `Fulfillment` | `shipmentDetails` | `shipment_details` |
| `Fulfillment` | `deliveryDetails` | `delivery_details` |
| `Fulfillment` | `inStoreDetails` | `in_store_details` |
| `FulfillmentDeliveryDetails` | `scheduleType` | `schedule_type` |
| `FulfillmentDeliveryDetails` | `placedAt` | `placed_at` |
| `FulfillmentDeliveryDetails` | `deliverAt` | `deliver_at` |
| `FulfillmentDeliveryDetails` | `prepTimeDuration` | `prep_time_duration` |
| `FulfillmentDeliveryDetails` | `deliveryWindowDuration` | `delivery_window_duration` |
| `FulfillmentDeliveryDetails` | `completedAt` | `completed_at` |
| `FulfillmentDeliveryDetails` | `inProgressAt` | `in_progress_at` |
| `FulfillmentDeliveryDetails` | `rejectedAt` | `rejected_at` |
| `FulfillmentDeliveryDetails` | `readyAt` | `ready_at` |
| `FulfillmentDeliveryDetails` | `deliveredAt` | `delivered_at` |
| `FulfillmentDeliveryDetails` | `canceledAt` | `canceled_at` |
| `FulfillmentDeliveryDetails` | `cancelReason` | `cancel_reason` |
| `FulfillmentDeliveryDetails` | `courierPickupAt` | `courier_pickup_at` |
| `FulfillmentDeliveryDetails` | `courierPickupWindowDuration` | `courier_pickup_window_duration` |
| `FulfillmentDeliveryDetails` | `isNoContactDelivery` | `is_no_contact_delivery` |
| `FulfillmentDeliveryDetails` | `dropoffNotes` | `dropoff_notes` |
| `FulfillmentDeliveryDetails` | `courierProviderName` | `courier_provider_name` |
| `FulfillmentDeliveryDetails` | `courierSupportPhoneNumber` | `courier_support_phone_number` |
| `FulfillmentDeliveryDetails` | `squareDeliveryId` | `square_delivery_id` |
| `FulfillmentDeliveryDetails` | `externalDeliveryId` | `external_delivery_id` |
| `FulfillmentDeliveryDetails` | `managedDelivery` | `managed_delivery` |
| `FulfillmentFulfillmentEntry` | `lineItemUid` | `line_item_uid` |
| `FulfillmentInStoreDetails` | `placedAt` | `placed_at` |
| `FulfillmentInStoreDetails` | `completedAt` | `completed_at` |
| `FulfillmentInStoreDetails` | `inProgressAt` | `in_progress_at` |
| `FulfillmentInStoreDetails` | `preparedAt` | `prepared_at` |
| `FulfillmentInStoreDetails` | `canceledAt` | `canceled_at` |
| `FulfillmentPickupDetails` | `expiresAt` | `expires_at` |
| `FulfillmentPickupDetails` | `autoCompleteDuration` | `auto_complete_duration` |
| `FulfillmentPickupDetails` | `scheduleType` | `schedule_type` |
| `FulfillmentPickupDetails` | `pickupAt` | `pickup_at` |
| `FulfillmentPickupDetails` | `pickupWindowDuration` | `pickup_window_duration` |
| `FulfillmentPickupDetails` | `prepTimeDuration` | `prep_time_duration` |
| `FulfillmentPickupDetails` | `placedAt` | `placed_at` |
| `FulfillmentPickupDetails` | `acceptedAt` | `accepted_at` |
| `FulfillmentPickupDetails` | `rejectedAt` | `rejected_at` |
| `FulfillmentPickupDetails` | `readyAt` | `ready_at` |
| `FulfillmentPickupDetails` | `expiredAt` | `expired_at` |
| `FulfillmentPickupDetails` | `pickedUpAt` | `picked_up_at` |
| `FulfillmentPickupDetails` | `canceledAt` | `canceled_at` |
| `FulfillmentPickupDetails` | `cancelReason` | `cancel_reason` |
| `FulfillmentPickupDetails` | `isCurbsidePickup` | `is_curbside_pickup` |
| `FulfillmentPickupDetails` | `curbsidePickupDetails` | `curbside_pickup_details` |
| `FulfillmentPickupDetailsCurbsidePickupDetails` | `curbsideDetails` | `curbside_details` |
| `FulfillmentPickupDetailsCurbsidePickupDetails` | `buyerArrivedAt` | `buyer_arrived_at` |
| `FulfillmentRecipient` | `customerId` | `customer_id` |
| `FulfillmentRecipient` | `displayName` | `display_name` |
| `FulfillmentRecipient` | `emailAddress` | `email_address` |
| `FulfillmentRecipient` | `phoneNumber` | `phone_number` |
| `FulfillmentShipmentDetails` | `shippingNote` | `shipping_note` |
| `FulfillmentShipmentDetails` | `shippingType` | `shipping_type` |
| `FulfillmentShipmentDetails` | `trackingNumber` | `tracking_number` |
| `FulfillmentShipmentDetails` | `trackingUrl` | `tracking_url` |
| `FulfillmentShipmentDetails` | `placedAt` | `placed_at` |
| `FulfillmentShipmentDetails` | `inProgressAt` | `in_progress_at` |
| `FulfillmentShipmentDetails` | `packagedAt` | `packaged_at` |
| `FulfillmentShipmentDetails` | `expectedShippedAt` | `expected_shipped_at` |
| `FulfillmentShipmentDetails` | `shippedAt` | `shipped_at` |
| `FulfillmentShipmentDetails` | `canceledAt` | `canceled_at` |
| `FulfillmentShipmentDetails` | `cancelReason` | `cancel_reason` |
| `FulfillmentShipmentDetails` | `failedAt` | `failed_at` |
| `FulfillmentShipmentDetails` | `failureReason` | `failure_reason` |
| `GetBankAccountByV1IdResponse` | `bankAccount` | `bank_account` |
| `GetBankAccountResponse` | `bankAccount` | `bank_account` |
| `GetBreakTypeResponse` | `breakType` | `break_type` |
| `GetDeviceCodeResponse` | `deviceCode` | `device_code` |
| `GetEmployeeWageResponse` | `employeeWage` | `employee_wage` |
| `GetTeamMemberWageResponse` | `teamMemberWage` | `team_member_wage` |
| `GiftCard` | `ganSource` | `gan_source` |
| `GiftCard` | `balanceMoney` | `balance_money` |
| `GiftCard` | `createdAt` | `created_at` |
| `GiftCard` | `customerIds` | `customer_ids` |
| `GiftCardActivity` | `locationId` | `location_id` |
| `GiftCardActivity` | `createdAt` | `created_at` |
| `GiftCardActivity` | `giftCardId` | `gift_card_id` |
| `GiftCardActivity` | `giftCardGan` | `gift_card_gan` |
| `GiftCardActivity` | `giftCardBalanceMoney` | `gift_card_balance_money` |
| `GiftCardActivity` | `loadActivityDetails` | `load_activity_details` |
| `GiftCardActivity` | `activateActivityDetails` | `activate_activity_details` |
| `GiftCardActivity` | `redeemActivityDetails` | `redeem_activity_details` |
| `GiftCardActivity` | `clearBalanceActivityDetails` | `clear_balance_activity_details` |
| `GiftCardActivity` | `deactivateActivityDetails` | `deactivate_activity_details` |
| `GiftCardActivity` | `adjustIncrementActivityDetails` | `adjust_increment_activity_details` |
| `GiftCardActivity` | `adjustDecrementActivityDetails` | `adjust_decrement_activity_details` |
| `GiftCardActivity` | `refundActivityDetails` | `refund_activity_details` |
| `GiftCardActivity` | `unlinkedActivityRefundActivityDetails` | `unlinked_activity_refund_activity_details` |
| `GiftCardActivity` | `importActivityDetails` | `import_activity_details` |
| `GiftCardActivity` | `blockActivityDetails` | `block_activity_details` |
| `GiftCardActivity` | `unblockActivityDetails` | `unblock_activity_details` |
| `GiftCardActivity` | `importReversalActivityDetails` | `import_reversal_activity_details` |
| `GiftCardActivity` | `transferBalanceToActivityDetails` | `transfer_balance_to_activity_details` |
| `GiftCardActivity` | `transferBalanceFromActivityDetails` | `transfer_balance_from_activity_details` |
| `GiftCardActivityActivate` | `amountMoney` | `amount_money` |
| `GiftCardActivityActivate` | `orderId` | `order_id` |
| `GiftCardActivityActivate` | `lineItemUid` | `line_item_uid` |
| `GiftCardActivityActivate` | `referenceId` | `reference_id` |
| `GiftCardActivityActivate` | `buyerPaymentInstrumentIds` | `buyer_payment_instrument_ids` |
| `GiftCardActivityAdjustDecrement` | `amountMoney` | `amount_money` |
| `GiftCardActivityAdjustIncrement` | `amountMoney` | `amount_money` |
| `GiftCardActivityCreatedEvent` | `merchantId` | `merchant_id` |
| `GiftCardActivityCreatedEvent` | `eventId` | `event_id` |
| `GiftCardActivityCreatedEvent` | `createdAt` | `created_at` |
| `GiftCardActivityCreatedEventObject` | `giftCardActivity` | `gift_card_activity` |
| `GiftCardActivityImport` | `amountMoney` | `amount_money` |
| `GiftCardActivityImportReversal` | `amountMoney` | `amount_money` |
| `GiftCardActivityLoad` | `amountMoney` | `amount_money` |
| `GiftCardActivityLoad` | `orderId` | `order_id` |
| `GiftCardActivityLoad` | `lineItemUid` | `line_item_uid` |
| `GiftCardActivityLoad` | `referenceId` | `reference_id` |
| `GiftCardActivityLoad` | `buyerPaymentInstrumentIds` | `buyer_payment_instrument_ids` |
| `GiftCardActivityRedeem` | `amountMoney` | `amount_money` |
| `GiftCardActivityRedeem` | `paymentId` | `payment_id` |
| `GiftCardActivityRedeem` | `referenceId` | `reference_id` |
| `GiftCardActivityRefund` | `redeemActivityId` | `redeem_activity_id` |
| `GiftCardActivityRefund` | `amountMoney` | `amount_money` |
| `GiftCardActivityRefund` | `referenceId` | `reference_id` |
| `GiftCardActivityRefund` | `paymentId` | `payment_id` |
| `GiftCardActivityTransferBalanceFrom` | `transferToGiftCardId` | `transfer_to_gift_card_id` |
| `GiftCardActivityTransferBalanceFrom` | `amountMoney` | `amount_money` |
| `GiftCardActivityTransferBalanceTo` | `transferFromGiftCardId` | `transfer_from_gift_card_id` |
| `GiftCardActivityTransferBalanceTo` | `amountMoney` | `amount_money` |
| `GiftCardActivityUnlinkedActivityRefund` | `amountMoney` | `amount_money` |
| `GiftCardActivityUnlinkedActivityRefund` | `referenceId` | `reference_id` |
| `GiftCardActivityUnlinkedActivityRefund` | `paymentId` | `payment_id` |
| `GiftCardActivityUpdatedEvent` | `merchantId` | `merchant_id` |
| `GiftCardActivityUpdatedEvent` | `eventId` | `event_id` |
| `GiftCardActivityUpdatedEvent` | `createdAt` | `created_at` |
| `GiftCardActivityUpdatedEventObject` | `giftCardActivity` | `gift_card_activity` |
| `GiftCardCreatedEvent` | `merchantId` | `merchant_id` |
| `GiftCardCreatedEvent` | `eventId` | `event_id` |
| `GiftCardCreatedEvent` | `createdAt` | `created_at` |
| `GiftCardCreatedEventObject` | `giftCard` | `gift_card` |
| `GiftCardCustomerLinkedEvent` | `merchantId` | `merchant_id` |
| `GiftCardCustomerLinkedEvent` | `eventId` | `event_id` |
| `GiftCardCustomerLinkedEvent` | `createdAt` | `created_at` |
| `GiftCardCustomerLinkedEventObject` | `giftCard` | `gift_card` |
| `GiftCardCustomerLinkedEventObject` | `linkedCustomerId` | `linked_customer_id` |
| `GiftCardCustomerUnlinkedEvent` | `merchantId` | `merchant_id` |
| `GiftCardCustomerUnlinkedEvent` | `eventId` | `event_id` |
| `GiftCardCustomerUnlinkedEvent` | `createdAt` | `created_at` |
| `GiftCardCustomerUnlinkedEventObject` | `giftCard` | `gift_card` |
| `GiftCardCustomerUnlinkedEventObject` | `unlinkedCustomerId` | `unlinked_customer_id` |
| `GiftCardUpdatedEvent` | `merchantId` | `merchant_id` |
| `GiftCardUpdatedEvent` | `eventId` | `event_id` |
| `GiftCardUpdatedEvent` | `createdAt` | `created_at` |
| `GiftCardUpdatedEventObject` | `giftCard` | `gift_card` |
| `InventoryAdjustment` | `referenceId` | `reference_id` |
| `InventoryAdjustment` | `fromState` | `from_state` |
| `InventoryAdjustment` | `toState` | `to_state` |
| `InventoryAdjustment` | `fromLocationId` | `from_location_id` |
| `InventoryAdjustment` | `toLocationId` | `to_location_id` |
| `InventoryAdjustment` | `catalogObjectId` | `catalog_object_id` |
| `InventoryAdjustment` | `catalogObjectType` | `catalog_object_type` |
| `InventoryAdjustment` | `totalPriceMoney` | `total_price_money` |
| `InventoryAdjustment` | `occurredAt` | `occurred_at` |
| `InventoryAdjustment` | `createdAt` | `created_at` |
| `InventoryAdjustment` | `employeeId` | `employee_id` |
| `InventoryAdjustment` | `teamMemberId` | `team_member_id` |
| `InventoryAdjustment` | `transactionId` | `transaction_id` |
| `InventoryAdjustment` | `refundId` | `refund_id` |
| `InventoryAdjustment` | `purchaseOrderId` | `purchase_order_id` |
| `InventoryAdjustment` | `goodsReceiptId` | `goods_receipt_id` |
| `InventoryAdjustment` | `adjustmentGroup` | `adjustment_group` |
| `InventoryAdjustment` | `costMoney` | `cost_money` |
| `InventoryAdjustment` | `vendorId` | `vendor_id` |
| `InventoryAdjustment` | `physicalCountId` | `physical_count_id` |
| `InventoryAdjustment` | `reasonId` | `reason_id` |
| `InventoryAdjustmentGroup` | `rootAdjustmentId` | `root_adjustment_id` |
| `InventoryAdjustmentGroup` | `fromState` | `from_state` |
| `InventoryAdjustmentGroup` | `toState` | `to_state` |
| `InventoryAdjustmentReason` | `createdAt` | `created_at` |
| `InventoryAdjustmentReason` | `updatedAt` | `updated_at` |
| `InventoryAdjustmentReason` | `isDeleted` | `is_deleted` |
| `InventoryAdjustmentReasonId` | `customReasonId` | `custom_reason_id` |
| `InventoryChange` | `physicalCount` | `physical_count` |
| `InventoryChange` | `measurementUnit` | `measurement_unit` |
| `InventoryChange` | `measurementUnitId` | `measurement_unit_id` |
| `InventoryCount` | `catalogObjectId` | `catalog_object_id` |
| `InventoryCount` | `catalogObjectType` | `catalog_object_type` |
| `InventoryCount` | `locationId` | `location_id` |
| `InventoryCount` | `calculatedAt` | `calculated_at` |
| `InventoryCount` | `isEstimated` | `is_estimated` |
| `InventoryCountUpdatedEvent` | `merchantId` | `merchant_id` |
| `InventoryCountUpdatedEvent` | `eventId` | `event_id` |
| `InventoryCountUpdatedEvent` | `createdAt` | `created_at` |
| `InventoryCountUpdatedEventObject` | `inventoryCounts` | `inventory_counts` |
| `InventoryPhysicalCount` | `referenceId` | `reference_id` |
| `InventoryPhysicalCount` | `catalogObjectId` | `catalog_object_id` |
| `InventoryPhysicalCount` | `catalogObjectType` | `catalog_object_type` |
| `InventoryPhysicalCount` | `locationId` | `location_id` |
| `InventoryPhysicalCount` | `employeeId` | `employee_id` |
| `InventoryPhysicalCount` | `teamMemberId` | `team_member_id` |
| `InventoryPhysicalCount` | `occurredAt` | `occurred_at` |
| `InventoryPhysicalCount` | `createdAt` | `created_at` |
| `InventoryPhysicalCount` | `adjustmentId` | `adjustment_id` |
| `Invoice` | `locationId` | `location_id` |
| `Invoice` | `orderId` | `order_id` |
| `Invoice` | `primaryRecipient` | `primary_recipient` |
| `Invoice` | `paymentRequests` | `payment_requests` |
| `Invoice` | `deliveryMethod` | `delivery_method` |
| `Invoice` | `invoiceNumber` | `invoice_number` |
| `Invoice` | `scheduledAt` | `scheduled_at` |
| `Invoice` | `publicUrl` | `public_url` |
| `Invoice` | `nextPaymentAmountMoney` | `next_payment_amount_money` |
| `Invoice` | `createdAt` | `created_at` |
| `Invoice` | `updatedAt` | `updated_at` |
| `Invoice` | `acceptedPaymentMethods` | `accepted_payment_methods` |
| `Invoice` | `customFields` | `custom_fields` |
| `Invoice` | `subscriptionId` | `subscription_id` |
| `Invoice` | `saleOrServiceDate` | `sale_or_service_date` |
| `Invoice` | `paymentConditions` | `payment_conditions` |
| `Invoice` | `storePaymentMethodEnabled` | `store_payment_method_enabled` |
| `Invoice` | `creatorTeamMemberId` | `creator_team_member_id` |
| `InvoiceAcceptedPaymentMethods` | `squareGiftCard` | `square_gift_card` |
| `InvoiceAcceptedPaymentMethods` | `bankAccount` | `bank_account` |
| `InvoiceAcceptedPaymentMethods` | `buyNowPayLater` | `buy_now_pay_later` |
| `InvoiceAcceptedPaymentMethods` | `cashAppPay` | `cash_app_pay` |
| `InvoiceAttachment` | `mimeType` | `mime_type` |
| `InvoiceAttachment` | `uploadedAt` | `uploaded_at` |
| `InvoiceCanceledEvent` | `merchantId` | `merchant_id` |
| `InvoiceCanceledEvent` | `eventId` | `event_id` |
| `InvoiceCanceledEvent` | `createdAt` | `created_at` |
| `InvoiceCreatedEvent` | `merchantId` | `merchant_id` |
| `InvoiceCreatedEvent` | `eventId` | `event_id` |
| `InvoiceCreatedEvent` | `createdAt` | `created_at` |
| `InvoiceDeletedEvent` | `merchantId` | `merchant_id` |
| `InvoiceDeletedEvent` | `eventId` | `event_id` |
| `InvoiceDeletedEvent` | `createdAt` | `created_at` |
| `InvoiceFilter` | `locationIds` | `location_ids` |
| `InvoiceFilter` | `customerIds` | `customer_ids` |
| `InvoicePaymentMadeEvent` | `merchantId` | `merchant_id` |
| `InvoicePaymentMadeEvent` | `eventId` | `event_id` |
| `InvoicePaymentMadeEvent` | `createdAt` | `created_at` |
| `InvoicePaymentReminder` | `relativeScheduledDays` | `relative_scheduled_days` |
| `InvoicePaymentReminder` | `sentAt` | `sent_at` |
| `InvoicePaymentRequest` | `requestMethod` | `request_method` |
| `InvoicePaymentRequest` | `requestType` | `request_type` |
| `InvoicePaymentRequest` | `dueDate` | `due_date` |
| `InvoicePaymentRequest` | `fixedAmountRequestedMoney` | `fixed_amount_requested_money` |
| `InvoicePaymentRequest` | `percentageRequested` | `percentage_requested` |
| `InvoicePaymentRequest` | `tippingEnabled` | `tipping_enabled` |
| `InvoicePaymentRequest` | `automaticPaymentSource` | `automatic_payment_source` |
| `InvoicePaymentRequest` | `cardId` | `card_id` |
| `InvoicePaymentRequest` | `computedAmountMoney` | `computed_amount_money` |
| `InvoicePaymentRequest` | `totalCompletedAmountMoney` | `total_completed_amount_money` |
| `InvoicePaymentRequest` | `roundingAdjustmentIncludedMoney` | `rounding_adjustment_included_money` |
| `InvoicePublishedEvent` | `merchantId` | `merchant_id` |
| `InvoicePublishedEvent` | `eventId` | `event_id` |
| `InvoicePublishedEvent` | `createdAt` | `created_at` |
| `InvoiceRecipient` | `customerId` | `customer_id` |
| `InvoiceRecipient` | `givenName` | `given_name` |
| `InvoiceRecipient` | `familyName` | `family_name` |
| `InvoiceRecipient` | `emailAddress` | `email_address` |
| `InvoiceRecipient` | `phoneNumber` | `phone_number` |
| `InvoiceRecipient` | `companyName` | `company_name` |
| `InvoiceRecipient` | `taxIds` | `tax_ids` |
| `InvoiceRecipientTaxIds` | `euVat` | `eu_vat` |
| `InvoiceRefundedEvent` | `merchantId` | `merchant_id` |
| `InvoiceRefundedEvent` | `eventId` | `event_id` |
| `InvoiceRefundedEvent` | `createdAt` | `created_at` |
| `InvoiceScheduledChargeFailedEvent` | `merchantId` | `merchant_id` |
| `InvoiceScheduledChargeFailedEvent` | `eventId` | `event_id` |
| `InvoiceScheduledChargeFailedEvent` | `createdAt` | `created_at` |
| `InvoiceUpdatedEvent` | `merchantId` | `merchant_id` |
| `InvoiceUpdatedEvent` | `eventId` | `event_id` |
| `InvoiceUpdatedEvent` | `createdAt` | `created_at` |
| `ItemVariationLocationOverrides` | `locationId` | `location_id` |
| `ItemVariationLocationOverrides` | `priceMoney` | `price_money` |
| `ItemVariationLocationOverrides` | `pricingType` | `pricing_type` |
| `ItemVariationLocationOverrides` | `trackInventory` | `track_inventory` |
| `ItemVariationLocationOverrides` | `inventoryAlertType` | `inventory_alert_type` |
| `ItemVariationLocationOverrides` | `inventoryAlertThreshold` | `inventory_alert_threshold` |
| `ItemVariationLocationOverrides` | `soldOut` | `sold_out` |
| `ItemVariationLocationOverrides` | `soldOutValidUntil` | `sold_out_valid_until` |
| `Job` | `isTipEligible` | `is_tip_eligible` |
| `Job` | `createdAt` | `created_at` |
| `Job` | `updatedAt` | `updated_at` |
| `JobAssignment` | `jobTitle` | `job_title` |
| `JobAssignment` | `payType` | `pay_type` |
| `JobAssignment` | `hourlyRate` | `hourly_rate` |
| `JobAssignment` | `annualRate` | `annual_rate` |
| `JobAssignment` | `weeklyHours` | `weekly_hours` |
| `JobAssignment` | `jobId` | `job_id` |
| `JobCreatedEvent` | `merchantId` | `merchant_id` |
| `JobCreatedEvent` | `eventId` | `event_id` |
| `JobCreatedEvent` | `createdAt` | `created_at` |
| `JobUpdatedEvent` | `merchantId` | `merchant_id` |
| `JobUpdatedEvent` | `eventId` | `event_id` |
| `JobUpdatedEvent` | `createdAt` | `created_at` |
| `LaborScheduledShiftCreatedEvent` | `merchantId` | `merchant_id` |
| `LaborScheduledShiftCreatedEvent` | `locationId` | `location_id` |
| `LaborScheduledShiftCreatedEvent` | `eventId` | `event_id` |
| `LaborScheduledShiftCreatedEvent` | `createdAt` | `created_at` |
| `LaborScheduledShiftCreatedEventObject` | `scheduledShift` | `ScheduledShift` |
| `LaborScheduledShiftDeletedEvent` | `merchantId` | `merchant_id` |
| `LaborScheduledShiftDeletedEvent` | `locationId` | `location_id` |
| `LaborScheduledShiftDeletedEvent` | `eventId` | `event_id` |
| `LaborScheduledShiftDeletedEvent` | `createdAt` | `created_at` |
| `LaborScheduledShiftPublishedEvent` | `merchantId` | `merchant_id` |
| `LaborScheduledShiftPublishedEvent` | `locationId` | `location_id` |
| `LaborScheduledShiftPublishedEvent` | `eventId` | `event_id` |
| `LaborScheduledShiftPublishedEvent` | `createdAt` | `created_at` |
| `LaborScheduledShiftPublishedEventObject` | `scheduledShift` | `ScheduledShift` |
| `LaborScheduledShiftUpdatedEvent` | `merchantId` | `merchant_id` |
| `LaborScheduledShiftUpdatedEvent` | `locationId` | `location_id` |
| `LaborScheduledShiftUpdatedEvent` | `eventId` | `event_id` |
| `LaborScheduledShiftUpdatedEvent` | `createdAt` | `created_at` |
| `LaborScheduledShiftUpdatedEventObject` | `scheduledShift` | `ScheduledShift` |
| `LaborShiftCreatedEvent` | `merchantId` | `merchant_id` |
| `LaborShiftCreatedEvent` | `eventId` | `event_id` |
| `LaborShiftCreatedEvent` | `createdAt` | `created_at` |
| `LaborShiftDeletedEvent` | `merchantId` | `merchant_id` |
| `LaborShiftDeletedEvent` | `eventId` | `event_id` |
| `LaborShiftDeletedEvent` | `createdAt` | `created_at` |
| `LaborShiftUpdatedEvent` | `merchantId` | `merchant_id` |
| `LaborShiftUpdatedEvent` | `eventId` | `event_id` |
| `LaborShiftUpdatedEvent` | `createdAt` | `created_at` |
| `LaborTimecardCreatedEvent` | `merchantId` | `merchant_id` |
| `LaborTimecardCreatedEvent` | `eventId` | `event_id` |
| `LaborTimecardCreatedEvent` | `createdAt` | `created_at` |
| `LaborTimecardDeletedEvent` | `merchantId` | `merchant_id` |
| `LaborTimecardDeletedEvent` | `eventId` | `event_id` |
| `LaborTimecardDeletedEvent` | `createdAt` | `created_at` |
| `LaborTimecardUpdatedEvent` | `merchantId` | `merchant_id` |
| `LaborTimecardUpdatedEvent` | `eventId` | `event_id` |
| `LaborTimecardUpdatedEvent` | `createdAt` | `created_at` |
| `LightningDetails` | `paymentUrl` | `payment_url` |
| `LinkCustomerToGiftCardRequest` | `customerId` | `customer_id` |
| `LinkCustomerToGiftCardResponse` | `giftCard` | `gift_card` |
| `ListBankAccountsResponse` | `bankAccounts` | `bank_accounts` |
| `ListBookingCustomAttributeDefinitionsResponse` | `customAttributeDefinitions` | `custom_attribute_definitions` |
| `ListBookingCustomAttributesResponse` | `customAttributes` | `custom_attributes` |
| `ListBreakTypesResponse` | `breakTypes` | `break_types` |
| `ListCashDrawerShiftEventsResponse` | `cashDrawerShiftEvents` | `cash_drawer_shift_events` |
| `ListCashDrawerShiftsResponse` | `cashDrawerShifts` | `cash_drawer_shifts` |
| `ListCustomerCustomAttributeDefinitionsResponse` | `customAttributeDefinitions` | `custom_attribute_definitions` |
| `ListCustomerCustomAttributesResponse` | `customAttributes` | `custom_attributes` |
| `ListDeviceCodesResponse` | `deviceCodes` | `device_codes` |
| `ListEmployeeWagesResponse` | `employeeWages` | `employee_wages` |
| `ListEventTypesResponse` | `eventTypes` | `event_types` |
| `ListGiftCardActivitiesResponse` | `giftCardActivities` | `gift_card_activities` |
| `ListGiftCardsResponse` | `giftCards` | `gift_cards` |
| `ListInventoryAdjustmentReasonsResponse` | `adjustmentReasons` | `adjustment_reasons` |
| `ListLocationBookingProfilesResponse` | `locationBookingProfiles` | `location_booking_profiles` |
| `ListLocationCustomAttributeDefinitionsResponse` | `customAttributeDefinitions` | `custom_attribute_definitions` |
| `ListLocationCustomAttributesResponse` | `customAttributes` | `custom_attributes` |
| `ListLoyaltyPromotionsResponse` | `loyaltyPromotions` | `loyalty_promotions` |
| `ListMerchantCustomAttributeDefinitionsResponse` | `customAttributeDefinitions` | `custom_attribute_definitions` |
| `ListMerchantCustomAttributesResponse` | `customAttributes` | `custom_attributes` |
| `ListOrderCustomAttributeDefinitionsResponse` | `customAttributeDefinitions` | `custom_attribute_definitions` |
| `ListOrderCustomAttributesResponse` | `customAttributes` | `custom_attributes` |
| `ListPaymentLinksResponse` | `paymentLinks` | `payment_links` |
| `ListPayoutEntriesResponse` | `payoutEntries` | `payout_entries` |
| `ListSubscriptionEventsResponse` | `subscriptionEvents` | `subscription_events` |
| `ListTeamMemberBookingProfilesResponse` | `teamMemberBookingProfiles` | `team_member_booking_profiles` |
| `ListTeamMemberWagesResponse` | `teamMemberWages` | `team_member_wages` |
| `ListWebhookEventTypesResponse` | `eventTypes` | `event_types` |
| `ListWorkweekConfigsResponse` | `workweekConfigs` | `workweek_configs` |
| `Location` | `createdAt` | `created_at` |
| `Location` | `merchantId` | `merchant_id` |
| `Location` | `languageCode` | `language_code` |
| `Location` | `phoneNumber` | `phone_number` |
| `Location` | `businessName` | `business_name` |
| `Location` | `websiteUrl` | `website_url` |
| `Location` | `businessHours` | `business_hours` |
| `Location` | `businessEmail` | `business_email` |
| `Location` | `twitterUsername` | `twitter_username` |
| `Location` | `instagramUsername` | `instagram_username` |
| `Location` | `facebookUrl` | `facebook_url` |
| `Location` | `logoUrl` | `logo_url` |
| `Location` | `posBackgroundUrl` | `pos_background_url` |
| `Location` | `fullFormatLogoUrl` | `full_format_logo_url` |
| `Location` | `taxIds` | `tax_ids` |
| `LocationBookingProfile` | `locationId` | `location_id` |
| `LocationBookingProfile` | `bookingSiteUrl` | `booking_site_url` |
| `LocationBookingProfile` | `onlineBookingEnabled` | `online_booking_enabled` |
| `LocationCreatedEvent` | `merchantId` | `merchant_id` |
| `LocationCreatedEvent` | `locationId` | `location_id` |
| `LocationCreatedEvent` | `eventId` | `event_id` |
| `LocationCreatedEvent` | `createdAt` | `created_at` |
| `LocationCustomAttributeDefinitionOwnedCreatedEvent` | `merchantId` | `merchant_id` |
| `LocationCustomAttributeDefinitionOwnedCreatedEvent` | `eventId` | `event_id` |
| `LocationCustomAttributeDefinitionOwnedCreatedEvent` | `createdAt` | `created_at` |
| `LocationCustomAttributeDefinitionOwnedDeletedEvent` | `merchantId` | `merchant_id` |
| `LocationCustomAttributeDefinitionOwnedDeletedEvent` | `eventId` | `event_id` |
| `LocationCustomAttributeDefinitionOwnedDeletedEvent` | `createdAt` | `created_at` |
| `LocationCustomAttributeDefinitionOwnedUpdatedEvent` | `merchantId` | `merchant_id` |
| `LocationCustomAttributeDefinitionOwnedUpdatedEvent` | `eventId` | `event_id` |
| `LocationCustomAttributeDefinitionOwnedUpdatedEvent` | `createdAt` | `created_at` |
| `LocationCustomAttributeDefinitionVisibleCreatedEvent` | `merchantId` | `merchant_id` |
| `LocationCustomAttributeDefinitionVisibleCreatedEvent` | `eventId` | `event_id` |
| `LocationCustomAttributeDefinitionVisibleCreatedEvent` | `createdAt` | `created_at` |
| `LocationCustomAttributeDefinitionVisibleDeletedEvent` | `merchantId` | `merchant_id` |
| `LocationCustomAttributeDefinitionVisibleDeletedEvent` | `eventId` | `event_id` |
| `LocationCustomAttributeDefinitionVisibleDeletedEvent` | `createdAt` | `created_at` |
| `LocationCustomAttributeDefinitionVisibleUpdatedEvent` | `merchantId` | `merchant_id` |
| `LocationCustomAttributeDefinitionVisibleUpdatedEvent` | `eventId` | `event_id` |
| `LocationCustomAttributeDefinitionVisibleUpdatedEvent` | `createdAt` | `created_at` |
| `LocationCustomAttributeOwnedDeletedEvent` | `merchantId` | `merchant_id` |
| `LocationCustomAttributeOwnedDeletedEvent` | `eventId` | `event_id` |
| `LocationCustomAttributeOwnedDeletedEvent` | `createdAt` | `created_at` |
| `LocationCustomAttributeOwnedUpdatedEvent` | `merchantId` | `merchant_id` |
| `LocationCustomAttributeOwnedUpdatedEvent` | `eventId` | `event_id` |
| `LocationCustomAttributeOwnedUpdatedEvent` | `createdAt` | `created_at` |
| `LocationCustomAttributeVisibleDeletedEvent` | `merchantId` | `merchant_id` |
| `LocationCustomAttributeVisibleDeletedEvent` | `eventId` | `event_id` |
| `LocationCustomAttributeVisibleDeletedEvent` | `createdAt` | `created_at` |
| `LocationCustomAttributeVisibleUpdatedEvent` | `merchantId` | `merchant_id` |
| `LocationCustomAttributeVisibleUpdatedEvent` | `eventId` | `event_id` |
| `LocationCustomAttributeVisibleUpdatedEvent` | `createdAt` | `created_at` |
| `LocationSettingsUpdatedEvent` | `merchantId` | `merchant_id` |
| `LocationSettingsUpdatedEvent` | `eventId` | `event_id` |
| `LocationSettingsUpdatedEvent` | `createdAt` | `created_at` |
| `LocationSettingsUpdatedEventObject` | `locationSettings` | `location_settings` |
| `LocationUpdatedEvent` | `merchantId` | `merchant_id` |
| `LocationUpdatedEvent` | `locationId` | `location_id` |
| `LocationUpdatedEvent` | `eventId` | `event_id` |
| `LocationUpdatedEvent` | `createdAt` | `created_at` |
| `LoyaltyAccount` | `programId` | `program_id` |
| `LoyaltyAccount` | `lifetimePoints` | `lifetime_points` |
| `LoyaltyAccount` | `customerId` | `customer_id` |
| `LoyaltyAccount` | `enrolledAt` | `enrolled_at` |
| `LoyaltyAccount` | `createdAt` | `created_at` |
| `LoyaltyAccount` | `updatedAt` | `updated_at` |
| `LoyaltyAccount` | `expiringPointDeadlines` | `expiring_point_deadlines` |
| `LoyaltyAccountCreatedEvent` | `merchantId` | `merchant_id` |
| `LoyaltyAccountCreatedEvent` | `eventId` | `event_id` |
| `LoyaltyAccountCreatedEvent` | `createdAt` | `created_at` |
| `LoyaltyAccountCreatedEventObject` | `loyaltyAccount` | `loyalty_account` |
| `LoyaltyAccountDeletedEvent` | `merchantId` | `merchant_id` |
| `LoyaltyAccountDeletedEvent` | `eventId` | `event_id` |
| `LoyaltyAccountDeletedEvent` | `createdAt` | `created_at` |
| `LoyaltyAccountDeletedEventObject` | `loyaltyAccount` | `loyalty_account` |
| `LoyaltyAccountExpiringPointDeadline` | `expiresAt` | `expires_at` |
| `LoyaltyAccountMapping` | `createdAt` | `created_at` |
| `LoyaltyAccountMapping` | `phoneNumber` | `phone_number` |
| `LoyaltyAccountUpdatedEvent` | `merchantId` | `merchant_id` |
| `LoyaltyAccountUpdatedEvent` | `eventId` | `event_id` |
| `LoyaltyAccountUpdatedEvent` | `createdAt` | `created_at` |
| `LoyaltyAccountUpdatedEventObject` | `loyaltyAccount` | `loyalty_account` |
| `LoyaltyEvent` | `createdAt` | `created_at` |
| `LoyaltyEvent` | `accumulatePoints` | `accumulate_points` |
| `LoyaltyEvent` | `createReward` | `create_reward` |
| `LoyaltyEvent` | `redeemReward` | `redeem_reward` |
| `LoyaltyEvent` | `deleteReward` | `delete_reward` |
| `LoyaltyEvent` | `adjustPoints` | `adjust_points` |
| `LoyaltyEvent` | `loyaltyAccountId` | `loyalty_account_id` |
| `LoyaltyEvent` | `locationId` | `location_id` |
| `LoyaltyEvent` | `expirePoints` | `expire_points` |
| `LoyaltyEvent` | `otherEvent` | `other_event` |
| `LoyaltyEvent` | `accumulatePromotionPoints` | `accumulate_promotion_points` |
| `LoyaltyEventAccumulatePoints` | `loyaltyProgramId` | `loyalty_program_id` |
| `LoyaltyEventAccumulatePoints` | `orderId` | `order_id` |
| `LoyaltyEventAccumulatePromotionPoints` | `loyaltyProgramId` | `loyalty_program_id` |
| `LoyaltyEventAccumulatePromotionPoints` | `loyaltyPromotionId` | `loyalty_promotion_id` |
| `LoyaltyEventAccumulatePromotionPoints` | `orderId` | `order_id` |
| `LoyaltyEventAdjustPoints` | `loyaltyProgramId` | `loyalty_program_id` |
| `LoyaltyEventCreateReward` | `loyaltyProgramId` | `loyalty_program_id` |
| `LoyaltyEventCreateReward` | `rewardId` | `reward_id` |
| `LoyaltyEventCreatedEvent` | `merchantId` | `merchant_id` |
| `LoyaltyEventCreatedEvent` | `eventId` | `event_id` |
| `LoyaltyEventCreatedEvent` | `createdAt` | `created_at` |
| `LoyaltyEventCreatedEventObject` | `loyaltyEvent` | `loyalty_event` |
| `LoyaltyEventDateTimeFilter` | `createdAt` | `created_at` |
| `LoyaltyEventDeleteReward` | `loyaltyProgramId` | `loyalty_program_id` |
| `LoyaltyEventDeleteReward` | `rewardId` | `reward_id` |
| `LoyaltyEventExpirePoints` | `loyaltyProgramId` | `loyalty_program_id` |
| `LoyaltyEventFilter` | `loyaltyAccountFilter` | `loyalty_account_filter` |
| `LoyaltyEventFilter` | `typeFilter` | `type_filter` |
| `LoyaltyEventFilter` | `dateTimeFilter` | `date_time_filter` |
| `LoyaltyEventFilter` | `locationFilter` | `location_filter` |
| `LoyaltyEventFilter` | `orderFilter` | `order_filter` |
| `LoyaltyEventLocationFilter` | `locationIds` | `location_ids` |
| `LoyaltyEventLoyaltyAccountFilter` | `loyaltyAccountId` | `loyalty_account_id` |
| `LoyaltyEventOrderFilter` | `orderId` | `order_id` |
| `LoyaltyEventOther` | `loyaltyProgramId` | `loyalty_program_id` |
| `LoyaltyEventRedeemReward` | `loyaltyProgramId` | `loyalty_program_id` |
| `LoyaltyEventRedeemReward` | `rewardId` | `reward_id` |
| `LoyaltyEventRedeemReward` | `orderId` | `order_id` |
| `LoyaltyProgram` | `rewardTiers` | `reward_tiers` |
| `LoyaltyProgram` | `expirationPolicy` | `expiration_policy` |
| `LoyaltyProgram` | `locationIds` | `location_ids` |
| `LoyaltyProgram` | `createdAt` | `created_at` |
| `LoyaltyProgram` | `updatedAt` | `updated_at` |
| `LoyaltyProgram` | `accrualRules` | `accrual_rules` |
| `LoyaltyProgramAccrualRule` | `accrualType` | `accrual_type` |
| `LoyaltyProgramAccrualRule` | `visitData` | `visit_data` |
| `LoyaltyProgramAccrualRule` | `spendData` | `spend_data` |
| `LoyaltyProgramAccrualRule` | `itemVariationData` | `item_variation_data` |
| `LoyaltyProgramAccrualRule` | `categoryData` | `category_data` |
| `LoyaltyProgramAccrualRuleCategoryData` | `categoryId` | `category_id` |
| `LoyaltyProgramAccrualRuleItemVariationData` | `itemVariationId` | `item_variation_id` |
| `LoyaltyProgramAccrualRuleSpendData` | `amountMoney` | `amount_money` |
| `LoyaltyProgramAccrualRuleSpendData` | `excludedCategoryIds` | `excluded_category_ids` |
| `LoyaltyProgramAccrualRuleSpendData` | `excludedItemVariationIds` | `excluded_item_variation_ids` |
| `LoyaltyProgramAccrualRuleSpendData` | `taxMode` | `tax_mode` |
| `LoyaltyProgramAccrualRuleVisitData` | `minimumAmountMoney` | `minimum_amount_money` |
| `LoyaltyProgramAccrualRuleVisitData` | `taxMode` | `tax_mode` |
| `LoyaltyProgramCreatedEvent` | `merchantId` | `merchant_id` |
| `LoyaltyProgramCreatedEvent` | `eventId` | `event_id` |
| `LoyaltyProgramCreatedEvent` | `createdAt` | `created_at` |
| `LoyaltyProgramCreatedEventObject` | `loyaltyProgram` | `loyalty_program` |
| `LoyaltyProgramExpirationPolicy` | `expirationDuration` | `expiration_duration` |
| `LoyaltyProgramRewardTier` | `createdAt` | `created_at` |
| `LoyaltyProgramRewardTier` | `pricingRuleReference` | `pricing_rule_reference` |
| `LoyaltyProgramUpdatedEvent` | `merchantId` | `merchant_id` |
| `LoyaltyProgramUpdatedEvent` | `eventId` | `event_id` |
| `LoyaltyProgramUpdatedEvent` | `createdAt` | `created_at` |
| `LoyaltyProgramUpdatedEventObject` | `loyaltyProgram` | `loyalty_program` |
| `LoyaltyPromotion` | `availableTime` | `available_time` |
| `LoyaltyPromotion` | `triggerLimit` | `trigger_limit` |
| `LoyaltyPromotion` | `createdAt` | `created_at` |
| `LoyaltyPromotion` | `canceledAt` | `canceled_at` |
| `LoyaltyPromotion` | `updatedAt` | `updated_at` |
| `LoyaltyPromotion` | `loyaltyProgramId` | `loyalty_program_id` |
| `LoyaltyPromotion` | `minimumSpendAmountMoney` | `minimum_spend_amount_money` |
| `LoyaltyPromotion` | `qualifyingItemVariationIds` | `qualifying_item_variation_ids` |
| `LoyaltyPromotion` | `qualifyingCategoryIds` | `qualifying_category_ids` |
| `LoyaltyPromotionAvailableTimeData` | `startDate` | `start_date` |
| `LoyaltyPromotionAvailableTimeData` | `endDate` | `end_date` |
| `LoyaltyPromotionAvailableTimeData` | `timePeriods` | `time_periods` |
| `LoyaltyPromotionCreatedEvent` | `merchantId` | `merchant_id` |
| `LoyaltyPromotionCreatedEvent` | `eventId` | `event_id` |
| `LoyaltyPromotionCreatedEvent` | `createdAt` | `created_at` |
| `LoyaltyPromotionCreatedEventObject` | `loyaltyPromotion` | `loyalty_promotion` |
| `LoyaltyPromotionIncentive` | `pointsMultiplierData` | `points_multiplier_data` |
| `LoyaltyPromotionIncentive` | `pointsAdditionData` | `points_addition_data` |
| `LoyaltyPromotionIncentivePointsAdditionData` | `pointsAddition` | `points_addition` |
| `LoyaltyPromotionIncentivePointsMultiplierData` | `pointsMultiplier` | `points_multiplier` |
| `LoyaltyPromotionUpdatedEvent` | `merchantId` | `merchant_id` |
| `LoyaltyPromotionUpdatedEvent` | `eventId` | `event_id` |
| `LoyaltyPromotionUpdatedEvent` | `createdAt` | `created_at` |
| `LoyaltyPromotionUpdatedEventObject` | `loyaltyPromotion` | `loyalty_promotion` |
| `LoyaltyReward` | `loyaltyAccountId` | `loyalty_account_id` |
| `LoyaltyReward` | `rewardTierId` | `reward_tier_id` |
| `LoyaltyReward` | `orderId` | `order_id` |
| `LoyaltyReward` | `createdAt` | `created_at` |
| `LoyaltyReward` | `updatedAt` | `updated_at` |
| `LoyaltyReward` | `redeemedAt` | `redeemed_at` |
| `MeasurementUnit` | `customUnit` | `custom_unit` |
| `MeasurementUnit` | `areaUnit` | `area_unit` |
| `MeasurementUnit` | `lengthUnit` | `length_unit` |
| `MeasurementUnit` | `volumeUnit` | `volume_unit` |
| `MeasurementUnit` | `weightUnit` | `weight_unit` |
| `MeasurementUnit` | `genericUnit` | `generic_unit` |
| `MeasurementUnit` | `timeUnit` | `time_unit` |
| `Merchant` | `businessName` | `business_name` |
| `Merchant` | `languageCode` | `language_code` |
| `Merchant` | `mainLocationId` | `main_location_id` |
| `Merchant` | `createdAt` | `created_at` |
| `MerchantCustomAttributeDefinitionOwnedCreatedEvent` | `merchantId` | `merchant_id` |
| `MerchantCustomAttributeDefinitionOwnedCreatedEvent` | `eventId` | `event_id` |
| `MerchantCustomAttributeDefinitionOwnedCreatedEvent` | `createdAt` | `created_at` |
| `MerchantCustomAttributeDefinitionOwnedDeletedEvent` | `merchantId` | `merchant_id` |
| `MerchantCustomAttributeDefinitionOwnedDeletedEvent` | `eventId` | `event_id` |
| `MerchantCustomAttributeDefinitionOwnedDeletedEvent` | `createdAt` | `created_at` |
| `MerchantCustomAttributeDefinitionOwnedUpdatedEvent` | `merchantId` | `merchant_id` |
| `MerchantCustomAttributeDefinitionOwnedUpdatedEvent` | `eventId` | `event_id` |
| `MerchantCustomAttributeDefinitionOwnedUpdatedEvent` | `createdAt` | `created_at` |
| `MerchantCustomAttributeDefinitionVisibleCreatedEvent` | `merchantId` | `merchant_id` |
| `MerchantCustomAttributeDefinitionVisibleCreatedEvent` | `eventId` | `event_id` |
| `MerchantCustomAttributeDefinitionVisibleCreatedEvent` | `createdAt` | `created_at` |
| `MerchantCustomAttributeDefinitionVisibleDeletedEvent` | `merchantId` | `merchant_id` |
| `MerchantCustomAttributeDefinitionVisibleDeletedEvent` | `eventId` | `event_id` |
| `MerchantCustomAttributeDefinitionVisibleDeletedEvent` | `createdAt` | `created_at` |
| `MerchantCustomAttributeDefinitionVisibleUpdatedEvent` | `merchantId` | `merchant_id` |
| `MerchantCustomAttributeDefinitionVisibleUpdatedEvent` | `eventId` | `event_id` |
| `MerchantCustomAttributeDefinitionVisibleUpdatedEvent` | `createdAt` | `created_at` |
| `MerchantCustomAttributeOwnedDeletedEvent` | `merchantId` | `merchant_id` |
| `MerchantCustomAttributeOwnedDeletedEvent` | `eventId` | `event_id` |
| `MerchantCustomAttributeOwnedDeletedEvent` | `createdAt` | `created_at` |
| `MerchantCustomAttributeOwnedUpdatedEvent` | `merchantId` | `merchant_id` |
| `MerchantCustomAttributeOwnedUpdatedEvent` | `eventId` | `event_id` |
| `MerchantCustomAttributeOwnedUpdatedEvent` | `createdAt` | `created_at` |
| `MerchantCustomAttributeVisibleDeletedEvent` | `merchantId` | `merchant_id` |
| `MerchantCustomAttributeVisibleDeletedEvent` | `eventId` | `event_id` |
| `MerchantCustomAttributeVisibleDeletedEvent` | `createdAt` | `created_at` |
| `MerchantCustomAttributeVisibleUpdatedEvent` | `merchantId` | `merchant_id` |
| `MerchantCustomAttributeVisibleUpdatedEvent` | `eventId` | `event_id` |
| `MerchantCustomAttributeVisibleUpdatedEvent` | `createdAt` | `created_at` |
| `MerchantSettingsUpdatedEvent` | `merchantId` | `merchant_id` |
| `MerchantSettingsUpdatedEvent` | `eventId` | `event_id` |
| `MerchantSettingsUpdatedEvent` | `createdAt` | `created_at` |
| `MerchantSettingsUpdatedEventObject` | `merchantSettings` | `merchant_settings` |
| `ModifierLocationOverrides` | `locationId` | `location_id` |
| `ModifierLocationOverrides` | `priceMoney` | `price_money` |
| `ModifierLocationOverrides` | `soldOut` | `sold_out` |
| `OauthAuthorizationRevokedEvent` | `merchantId` | `merchant_id` |
| `OauthAuthorizationRevokedEvent` | `eventId` | `event_id` |
| `OauthAuthorizationRevokedEvent` | `createdAt` | `created_at` |
| `OauthAuthorizationRevokedEventRevocationObject` | `revokedAt` | `revoked_at` |
| `OauthAuthorizationRevokedEventRevocationObject` | `revokerType` | `revoker_type` |
| `ObtainTokenRequest` | `clientId` | `client_id` |
| `ObtainTokenRequest` | `clientSecret` | `client_secret` |
| `ObtainTokenRequest` | `redirectUri` | `redirect_uri` |
| `ObtainTokenRequest` | `grantType` | `grant_type` |
| `ObtainTokenRequest` | `refreshToken` | `refresh_token` |
| `ObtainTokenRequest` | `migrationToken` | `migration_token` |
| `ObtainTokenRequest` | `shortLived` | `short_lived` |
| `ObtainTokenRequest` | `codeVerifier` | `code_verifier` |
| `ObtainTokenRequest` | `useJwt` | `use_jwt` |
| `ObtainTokenResponse` | `accessToken` | `access_token` |
| `ObtainTokenResponse` | `tokenType` | `token_type` |
| `ObtainTokenResponse` | `expiresAt` | `expires_at` |
| `ObtainTokenResponse` | `merchantId` | `merchant_id` |
| `ObtainTokenResponse` | `subscriptionId` | `subscription_id` |
| `ObtainTokenResponse` | `planId` | `plan_id` |
| `ObtainTokenResponse` | `idToken` | `id_token` |
| `ObtainTokenResponse` | `refreshToken` | `refresh_token` |
| `ObtainTokenResponse` | `shortLived` | `short_lived` |
| `ObtainTokenResponse` | `refreshTokenExpiresAt` | `refresh_token_expires_at` |
| `OfflinePaymentDetails` | `clientCreatedAt` | `client_created_at` |
| `Order` | `locationId` | `location_id` |
| `Order` | `referenceId` | `reference_id` |
| `Order` | `customerId` | `customer_id` |
| `Order` | `lineItems` | `line_items` |
| `Order` | `serviceCharges` | `service_charges` |
| `Order` | `returnAmounts` | `return_amounts` |
| `Order` | `netAmounts` | `net_amounts` |
| `Order` | `roundingAdjustment` | `rounding_adjustment` |
| `Order` | `createdAt` | `created_at` |
| `Order` | `updatedAt` | `updated_at` |
| `Order` | `closedAt` | `closed_at` |
| `Order` | `totalMoney` | `total_money` |
| `Order` | `totalTaxMoney` | `total_tax_money` |
| `Order` | `totalDiscountMoney` | `total_discount_money` |
| `Order` | `totalTipMoney` | `total_tip_money` |
| `Order` | `totalServiceChargeMoney` | `total_service_charge_money` |
| `Order` | `ticketName` | `ticket_name` |
| `Order` | `pricingOptions` | `pricing_options` |
| `Order` | `netAmountDueMoney` | `net_amount_due_money` |
| `OrderCreated` | `orderId` | `order_id` |
| `OrderCreated` | `locationId` | `location_id` |
| `OrderCreated` | `createdAt` | `created_at` |
| `OrderCreatedEvent` | `merchantId` | `merchant_id` |
| `OrderCreatedEvent` | `eventId` | `event_id` |
| `OrderCreatedEvent` | `createdAt` | `created_at` |
| `OrderCreatedObject` | `orderCreated` | `order_created` |
| `OrderCustomAttributeDefinitionOwnedCreatedEvent` | `merchantId` | `merchant_id` |
| `OrderCustomAttributeDefinitionOwnedCreatedEvent` | `eventId` | `event_id` |
| `OrderCustomAttributeDefinitionOwnedCreatedEvent` | `createdAt` | `created_at` |
| `OrderCustomAttributeDefinitionOwnedDeletedEvent` | `merchantId` | `merchant_id` |
| `OrderCustomAttributeDefinitionOwnedDeletedEvent` | `eventId` | `event_id` |
| `OrderCustomAttributeDefinitionOwnedDeletedEvent` | `createdAt` | `created_at` |
| `OrderCustomAttributeDefinitionOwnedUpdatedEvent` | `merchantId` | `merchant_id` |
| `OrderCustomAttributeDefinitionOwnedUpdatedEvent` | `eventId` | `event_id` |
| `OrderCustomAttributeDefinitionOwnedUpdatedEvent` | `createdAt` | `created_at` |
| `OrderCustomAttributeDefinitionVisibleCreatedEvent` | `merchantId` | `merchant_id` |
| `OrderCustomAttributeDefinitionVisibleCreatedEvent` | `eventId` | `event_id` |
| `OrderCustomAttributeDefinitionVisibleCreatedEvent` | `createdAt` | `created_at` |
| `OrderCustomAttributeDefinitionVisibleDeletedEvent` | `merchantId` | `merchant_id` |
| `OrderCustomAttributeDefinitionVisibleDeletedEvent` | `eventId` | `event_id` |
| `OrderCustomAttributeDefinitionVisibleDeletedEvent` | `createdAt` | `created_at` |
| `OrderCustomAttributeDefinitionVisibleUpdatedEvent` | `merchantId` | `merchant_id` |
| `OrderCustomAttributeDefinitionVisibleUpdatedEvent` | `eventId` | `event_id` |
| `OrderCustomAttributeDefinitionVisibleUpdatedEvent` | `createdAt` | `created_at` |
| `OrderCustomAttributeOwnedDeletedEvent` | `merchantId` | `merchant_id` |
| `OrderCustomAttributeOwnedDeletedEvent` | `eventId` | `event_id` |
| `OrderCustomAttributeOwnedDeletedEvent` | `createdAt` | `created_at` |
| `OrderCustomAttributeOwnedUpdatedEvent` | `merchantId` | `merchant_id` |
| `OrderCustomAttributeOwnedUpdatedEvent` | `eventId` | `event_id` |
| `OrderCustomAttributeOwnedUpdatedEvent` | `createdAt` | `created_at` |
| `OrderCustomAttributeVisibleDeletedEvent` | `merchantId` | `merchant_id` |
| `OrderCustomAttributeVisibleDeletedEvent` | `eventId` | `event_id` |
| `OrderCustomAttributeVisibleDeletedEvent` | `createdAt` | `created_at` |
| `OrderCustomAttributeVisibleUpdatedEvent` | `merchantId` | `merchant_id` |
| `OrderCustomAttributeVisibleUpdatedEvent` | `eventId` | `event_id` |
| `OrderCustomAttributeVisibleUpdatedEvent` | `createdAt` | `created_at` |
| `OrderEntry` | `orderId` | `order_id` |
| `OrderEntry` | `locationId` | `location_id` |
| `OrderFulfillmentUpdated` | `orderId` | `order_id` |
| `OrderFulfillmentUpdated` | `locationId` | `location_id` |
| `OrderFulfillmentUpdated` | `createdAt` | `created_at` |
| `OrderFulfillmentUpdated` | `updatedAt` | `updated_at` |
| `OrderFulfillmentUpdated` | `fulfillmentUpdate` | `fulfillment_update` |
| `OrderFulfillmentUpdatedEvent` | `merchantId` | `merchant_id` |
| `OrderFulfillmentUpdatedEvent` | `eventId` | `event_id` |
| `OrderFulfillmentUpdatedEvent` | `createdAt` | `created_at` |
| `OrderFulfillmentUpdatedObject` | `orderFulfillmentUpdated` | `order_fulfillment_updated` |
| `OrderFulfillmentUpdatedUpdate` | `fulfillmentUid` | `fulfillment_uid` |
| `OrderFulfillmentUpdatedUpdate` | `oldState` | `old_state` |
| `OrderFulfillmentUpdatedUpdate` | `newState` | `new_state` |
| `OrderLineItem` | `quantityUnit` | `quantity_unit` |
| `OrderLineItem` | `catalogObjectId` | `catalog_object_id` |
| `OrderLineItem` | `catalogVersion` | `catalog_version` |
| `OrderLineItem` | `variationName` | `variation_name` |
| `OrderLineItem` | `itemType` | `item_type` |
| `OrderLineItem` | `appliedTaxes` | `applied_taxes` |
| `OrderLineItem` | `appliedDiscounts` | `applied_discounts` |
| `OrderLineItem` | `appliedServiceCharges` | `applied_service_charges` |
| `OrderLineItem` | `basePriceMoney` | `base_price_money` |
| `OrderLineItem` | `variationTotalPriceMoney` | `variation_total_price_money` |
| `OrderLineItem` | `grossSalesMoney` | `gross_sales_money` |
| `OrderLineItem` | `totalTaxMoney` | `total_tax_money` |
| `OrderLineItem` | `totalDiscountMoney` | `total_discount_money` |
| `OrderLineItem` | `totalMoney` | `total_money` |
| `OrderLineItem` | `pricingBlocklists` | `pricing_blocklists` |
| `OrderLineItem` | `totalServiceChargeMoney` | `total_service_charge_money` |
| `OrderLineItemAppliedDiscount` | `discountUid` | `discount_uid` |
| `OrderLineItemAppliedDiscount` | `appliedMoney` | `applied_money` |
| `OrderLineItemAppliedServiceCharge` | `serviceChargeUid` | `service_charge_uid` |
| `OrderLineItemAppliedServiceCharge` | `appliedMoney` | `applied_money` |
| `OrderLineItemAppliedTax` | `taxUid` | `tax_uid` |
| `OrderLineItemAppliedTax` | `appliedMoney` | `applied_money` |
| `OrderLineItemAppliedTax` | `autoApplied` | `auto_applied` |
| `OrderLineItemDiscount` | `catalogObjectId` | `catalog_object_id` |
| `OrderLineItemDiscount` | `catalogVersion` | `catalog_version` |
| `OrderLineItemDiscount` | `amountMoney` | `amount_money` |
| `OrderLineItemDiscount` | `appliedMoney` | `applied_money` |
| `OrderLineItemDiscount` | `rewardIds` | `reward_ids` |
| `OrderLineItemDiscount` | `pricingRuleId` | `pricing_rule_id` |
| `OrderLineItemModifier` | `catalogObjectId` | `catalog_object_id` |
| `OrderLineItemModifier` | `catalogVersion` | `catalog_version` |
| `OrderLineItemModifier` | `basePriceMoney` | `base_price_money` |
| `OrderLineItemModifier` | `totalPriceMoney` | `total_price_money` |
| `OrderLineItemModifier` | `parentModifierUid` | `parent_modifier_uid` |
| `OrderLineItemPricingBlocklists` | `blockedDiscounts` | `blocked_discounts` |
| `OrderLineItemPricingBlocklists` | `blockedTaxes` | `blocked_taxes` |
| `OrderLineItemPricingBlocklists` | `blockedServiceCharges` | `blocked_service_charges` |
| `OrderLineItemPricingBlocklistsBlockedDiscount` | `discountUid` | `discount_uid` |
| `OrderLineItemPricingBlocklistsBlockedDiscount` | `discountCatalogObjectId` | `discount_catalog_object_id` |
| `OrderLineItemPricingBlocklistsBlockedServiceCharge` | `serviceChargeUid` | `service_charge_uid` |
| `OrderLineItemPricingBlocklistsBlockedServiceCharge` | `serviceChargeCatalogObjectId` | `service_charge_catalog_object_id` |
| `OrderLineItemPricingBlocklistsBlockedTax` | `taxUid` | `tax_uid` |
| `OrderLineItemPricingBlocklistsBlockedTax` | `taxCatalogObjectId` | `tax_catalog_object_id` |
| `OrderLineItemTax` | `catalogObjectId` | `catalog_object_id` |
| `OrderLineItemTax` | `catalogVersion` | `catalog_version` |
| `OrderLineItemTax` | `appliedMoney` | `applied_money` |
| `OrderLineItemTax` | `autoApplied` | `auto_applied` |
| `OrderMoneyAmounts` | `totalMoney` | `total_money` |
| `OrderMoneyAmounts` | `taxMoney` | `tax_money` |
| `OrderMoneyAmounts` | `discountMoney` | `discount_money` |
| `OrderMoneyAmounts` | `tipMoney` | `tip_money` |
| `OrderMoneyAmounts` | `serviceChargeMoney` | `service_charge_money` |
| `OrderPricingOptions` | `autoApplyDiscounts` | `auto_apply_discounts` |
| `OrderPricingOptions` | `autoApplyTaxes` | `auto_apply_taxes` |
| `OrderQuantityUnit` | `measurementUnit` | `measurement_unit` |
| `OrderQuantityUnit` | `catalogObjectId` | `catalog_object_id` |
| `OrderQuantityUnit` | `catalogVersion` | `catalog_version` |
| `OrderReturn` | `sourceOrderId` | `source_order_id` |
| `OrderReturn` | `returnLineItems` | `return_line_items` |
| `OrderReturn` | `returnServiceCharges` | `return_service_charges` |
| `OrderReturn` | `returnTaxes` | `return_taxes` |
| `OrderReturn` | `returnDiscounts` | `return_discounts` |
| `OrderReturn` | `returnTips` | `return_tips` |
| `OrderReturn` | `roundingAdjustment` | `rounding_adjustment` |
| `OrderReturn` | `returnAmounts` | `return_amounts` |
| `OrderReturnDiscount` | `sourceDiscountUid` | `source_discount_uid` |
| `OrderReturnDiscount` | `catalogObjectId` | `catalog_object_id` |
| `OrderReturnDiscount` | `catalogVersion` | `catalog_version` |
| `OrderReturnDiscount` | `amountMoney` | `amount_money` |
| `OrderReturnDiscount` | `appliedMoney` | `applied_money` |
| `OrderReturnLineItem` | `sourceLineItemUid` | `source_line_item_uid` |
| `OrderReturnLineItem` | `quantityUnit` | `quantity_unit` |
| `OrderReturnLineItem` | `catalogObjectId` | `catalog_object_id` |
| `OrderReturnLineItem` | `catalogVersion` | `catalog_version` |
| `OrderReturnLineItem` | `variationName` | `variation_name` |
| `OrderReturnLineItem` | `itemType` | `item_type` |
| `OrderReturnLineItem` | `returnModifiers` | `return_modifiers` |
| `OrderReturnLineItem` | `appliedTaxes` | `applied_taxes` |
| `OrderReturnLineItem` | `appliedDiscounts` | `applied_discounts` |
| `OrderReturnLineItem` | `basePriceMoney` | `base_price_money` |
| `OrderReturnLineItem` | `variationTotalPriceMoney` | `variation_total_price_money` |
| `OrderReturnLineItem` | `grossReturnMoney` | `gross_return_money` |
| `OrderReturnLineItem` | `totalTaxMoney` | `total_tax_money` |
| `OrderReturnLineItem` | `totalDiscountMoney` | `total_discount_money` |
| `OrderReturnLineItem` | `totalMoney` | `total_money` |
| `OrderReturnLineItem` | `appliedServiceCharges` | `applied_service_charges` |
| `OrderReturnLineItem` | `totalServiceChargeMoney` | `total_service_charge_money` |
| `OrderReturnLineItemModifier` | `sourceModifierUid` | `source_modifier_uid` |
| `OrderReturnLineItemModifier` | `catalogObjectId` | `catalog_object_id` |
| `OrderReturnLineItemModifier` | `catalogVersion` | `catalog_version` |
| `OrderReturnLineItemModifier` | `basePriceMoney` | `base_price_money` |
| `OrderReturnLineItemModifier` | `totalPriceMoney` | `total_price_money` |
| `OrderReturnServiceCharge` | `sourceServiceChargeUid` | `source_service_charge_uid` |
| `OrderReturnServiceCharge` | `catalogObjectId` | `catalog_object_id` |
| `OrderReturnServiceCharge` | `catalogVersion` | `catalog_version` |
| `OrderReturnServiceCharge` | `amountMoney` | `amount_money` |
| `OrderReturnServiceCharge` | `appliedMoney` | `applied_money` |
| `OrderReturnServiceCharge` | `totalMoney` | `total_money` |
| `OrderReturnServiceCharge` | `totalTaxMoney` | `total_tax_money` |
| `OrderReturnServiceCharge` | `calculationPhase` | `calculation_phase` |
| `OrderReturnServiceCharge` | `appliedTaxes` | `applied_taxes` |
| `OrderReturnServiceCharge` | `treatmentType` | `treatment_type` |
| `OrderReturnTax` | `sourceTaxUid` | `source_tax_uid` |
| `OrderReturnTax` | `catalogObjectId` | `catalog_object_id` |
| `OrderReturnTax` | `catalogVersion` | `catalog_version` |
| `OrderReturnTax` | `appliedMoney` | `applied_money` |
| `OrderReturnTip` | `appliedMoney` | `applied_money` |
| `OrderReturnTip` | `sourceTenderUid` | `source_tender_uid` |
| `OrderReturnTip` | `sourceTenderId` | `source_tender_id` |
| `OrderReward` | `rewardTierId` | `reward_tier_id` |
| `OrderRoundingAdjustment` | `amountMoney` | `amount_money` |
| `OrderServiceCharge` | `catalogObjectId` | `catalog_object_id` |
| `OrderServiceCharge` | `catalogVersion` | `catalog_version` |
| `OrderServiceCharge` | `amountMoney` | `amount_money` |
| `OrderServiceCharge` | `appliedMoney` | `applied_money` |
| `OrderServiceCharge` | `totalMoney` | `total_money` |
| `OrderServiceCharge` | `totalTaxMoney` | `total_tax_money` |
| `OrderServiceCharge` | `calculationPhase` | `calculation_phase` |
| `OrderServiceCharge` | `appliedTaxes` | `applied_taxes` |
| `OrderServiceCharge` | `treatmentType` | `treatment_type` |
| `OrderUpdated` | `orderId` | `order_id` |
| `OrderUpdated` | `locationId` | `location_id` |
| `OrderUpdated` | `createdAt` | `created_at` |
| `OrderUpdated` | `updatedAt` | `updated_at` |
| `OrderUpdatedEvent` | `merchantId` | `merchant_id` |
| `OrderUpdatedEvent` | `eventId` | `event_id` |
| `OrderUpdatedEvent` | `createdAt` | `created_at` |
| `OrderUpdatedObject` | `orderUpdated` | `order_updated` |
| `PauseSubscriptionRequest` | `pauseEffectiveDate` | `pause_effective_date` |
| `PauseSubscriptionRequest` | `pauseCycleDuration` | `pause_cycle_duration` |
| `PauseSubscriptionRequest` | `resumeEffectiveDate` | `resume_effective_date` |
| `PauseSubscriptionRequest` | `resumeChangeTiming` | `resume_change_timing` |
| `PauseSubscriptionRequest` | `pauseReason` | `pause_reason` |
| `PayOrderRequest` | `idempotencyKey` | `idempotency_key` |
| `PayOrderRequest` | `orderVersion` | `order_version` |
| `PayOrderRequest` | `paymentIds` | `payment_ids` |
| `Payment` | `createdAt` | `created_at` |
| `Payment` | `updatedAt` | `updated_at` |
| `Payment` | `amountMoney` | `amount_money` |
| `Payment` | `tipMoney` | `tip_money` |
| `Payment` | `totalMoney` | `total_money` |
| `Payment` | `appFeeMoney` | `app_fee_money` |
| `Payment` | `approvedMoney` | `approved_money` |
| `Payment` | `processingFee` | `processing_fee` |
| `Payment` | `refundedMoney` | `refunded_money` |
| `Payment` | `delayDuration` | `delay_duration` |
| `Payment` | `delayAction` | `delay_action` |
| `Payment` | `delayedUntil` | `delayed_until` |
| `Payment` | `sourceType` | `source_type` |
| `Payment` | `cardDetails` | `card_details` |
| `Payment` | `cashDetails` | `cash_details` |
| `Payment` | `bankAccountDetails` | `bank_account_details` |
| `Payment` | `electronicMoneyDetails` | `electronic_money_details` |
| `Payment` | `externalDetails` | `external_details` |
| `Payment` | `walletDetails` | `wallet_details` |
| `Payment` | `buyNowPayLaterDetails` | `buy_now_pay_later_details` |
| `Payment` | `squareAccountDetails` | `square_account_details` |
| `Payment` | `locationId` | `location_id` |
| `Payment` | `orderId` | `order_id` |
| `Payment` | `referenceId` | `reference_id` |
| `Payment` | `customerId` | `customer_id` |
| `Payment` | `employeeId` | `employee_id` |
| `Payment` | `teamMemberId` | `team_member_id` |
| `Payment` | `refundIds` | `refund_ids` |
| `Payment` | `riskEvaluation` | `risk_evaluation` |
| `Payment` | `terminalCheckoutId` | `terminal_checkout_id` |
| `Payment` | `buyerEmailAddress` | `buyer_email_address` |
| `Payment` | `billingAddress` | `billing_address` |
| `Payment` | `shippingAddress` | `shipping_address` |
| `Payment` | `statementDescriptionIdentifier` | `statement_description_identifier` |
| `Payment` | `receiptNumber` | `receipt_number` |
| `Payment` | `receiptUrl` | `receipt_url` |
| `Payment` | `deviceDetails` | `device_details` |
| `Payment` | `applicationDetails` | `application_details` |
| `Payment` | `isOfflinePayment` | `is_offline_payment` |
| `Payment` | `offlinePaymentDetails` | `offline_payment_details` |
| `Payment` | `versionToken` | `version_token` |
| `PaymentBalanceActivityAppFeeRefundDetail` | `paymentId` | `payment_id` |
| `PaymentBalanceActivityAppFeeRefundDetail` | `refundId` | `refund_id` |
| `PaymentBalanceActivityAppFeeRefundDetail` | `locationId` | `location_id` |
| `PaymentBalanceActivityAppFeeRevenueDetail` | `paymentId` | `payment_id` |
| `PaymentBalanceActivityAppFeeRevenueDetail` | `locationId` | `location_id` |
| `PaymentBalanceActivityAutomaticSavingsDetail` | `paymentId` | `payment_id` |
| `PaymentBalanceActivityAutomaticSavingsDetail` | `payoutId` | `payout_id` |
| `PaymentBalanceActivityAutomaticSavingsReversedDetail` | `paymentId` | `payment_id` |
| `PaymentBalanceActivityAutomaticSavingsReversedDetail` | `payoutId` | `payout_id` |
| `PaymentBalanceActivityChargeDetail` | `paymentId` | `payment_id` |
| `PaymentBalanceActivityDepositFeeDetail` | `payoutId` | `payout_id` |
| `PaymentBalanceActivityDepositFeeReversedDetail` | `payoutId` | `payout_id` |
| `PaymentBalanceActivityDisputeDetail` | `paymentId` | `payment_id` |
| `PaymentBalanceActivityDisputeDetail` | `disputeId` | `dispute_id` |
| `PaymentBalanceActivityFeeDetail` | `paymentId` | `payment_id` |
| `PaymentBalanceActivityFreeProcessingDetail` | `paymentId` | `payment_id` |
| `PaymentBalanceActivityHoldAdjustmentDetail` | `paymentId` | `payment_id` |
| `PaymentBalanceActivityOpenDisputeDetail` | `paymentId` | `payment_id` |
| `PaymentBalanceActivityOpenDisputeDetail` | `disputeId` | `dispute_id` |
| `PaymentBalanceActivityOtherAdjustmentDetail` | `paymentId` | `payment_id` |
| `PaymentBalanceActivityOtherDetail` | `paymentId` | `payment_id` |
| `PaymentBalanceActivityRefundDetail` | `paymentId` | `payment_id` |
| `PaymentBalanceActivityRefundDetail` | `refundId` | `refund_id` |
| `PaymentBalanceActivityReleaseAdjustmentDetail` | `paymentId` | `payment_id` |
| `PaymentBalanceActivityReserveHoldDetail` | `paymentId` | `payment_id` |
| `PaymentBalanceActivityReserveReleaseDetail` | `paymentId` | `payment_id` |
| `PaymentBalanceActivitySquareCapitalPaymentDetail` | `paymentId` | `payment_id` |
| `PaymentBalanceActivitySquareCapitalReversedPaymentDetail` | `paymentId` | `payment_id` |
| `PaymentBalanceActivitySquarePayrollTransferDetail` | `paymentId` | `payment_id` |
| `PaymentBalanceActivitySquarePayrollTransferReversedDetail` | `paymentId` | `payment_id` |
| `PaymentBalanceActivityTaxOnFeeDetail` | `paymentId` | `payment_id` |
| `PaymentBalanceActivityTaxOnFeeDetail` | `taxRateDescription` | `tax_rate_description` |
| `PaymentBalanceActivityThirdPartyFeeDetail` | `paymentId` | `payment_id` |
| `PaymentBalanceActivityThirdPartyFeeRefundDetail` | `paymentId` | `payment_id` |
| `PaymentBalanceActivityThirdPartyFeeRefundDetail` | `refundId` | `refund_id` |
| `PaymentCreatedEvent` | `merchantId` | `merchant_id` |
| `PaymentCreatedEvent` | `eventId` | `event_id` |
| `PaymentCreatedEvent` | `createdAt` | `created_at` |
| `PaymentLink` | `orderId` | `order_id` |
| `PaymentLink` | `checkoutOptions` | `checkout_options` |
| `PaymentLink` | `prePopulatedData` | `pre_populated_data` |
| `PaymentLink` | `longUrl` | `long_url` |
| `PaymentLink` | `createdAt` | `created_at` |
| `PaymentLink` | `updatedAt` | `updated_at` |
| `PaymentLink` | `paymentNote` | `payment_note` |
| `PaymentLinkRelatedResources` | `subscriptionPlans` | `subscription_plans` |
| `PaymentOptions` | `delayDuration` | `delay_duration` |
| `PaymentOptions` | `acceptPartialAuthorization` | `accept_partial_authorization` |
| `PaymentOptions` | `delayAction` | `delay_action` |
| `PaymentRefund` | `locationId` | `location_id` |
| `PaymentRefund` | `destinationType` | `destination_type` |
| `PaymentRefund` | `destinationDetails` | `destination_details` |
| `PaymentRefund` | `amountMoney` | `amount_money` |
| `PaymentRefund` | `appFeeMoney` | `app_fee_money` |
| `PaymentRefund` | `processingFee` | `processing_fee` |
| `PaymentRefund` | `paymentId` | `payment_id` |
| `PaymentRefund` | `orderId` | `order_id` |
| `PaymentRefund` | `createdAt` | `created_at` |
| `PaymentRefund` | `updatedAt` | `updated_at` |
| `PaymentRefund` | `teamMemberId` | `team_member_id` |
| `PaymentRefund` | `terminalRefundId` | `terminal_refund_id` |
| `PaymentUpdatedEvent` | `merchantId` | `merchant_id` |
| `PaymentUpdatedEvent` | `eventId` | `event_id` |
| `PaymentUpdatedEvent` | `createdAt` | `created_at` |
| `Payout` | `locationId` | `location_id` |
| `Payout` | `createdAt` | `created_at` |
| `Payout` | `updatedAt` | `updated_at` |
| `Payout` | `amountMoney` | `amount_money` |
| `Payout` | `payoutFee` | `payout_fee` |
| `Payout` | `arrivalDate` | `arrival_date` |
| `Payout` | `endToEndId` | `end_to_end_id` |
| `PayoutEntry` | `payoutId` | `payout_id` |
| `PayoutEntry` | `effectiveAt` | `effective_at` |
| `PayoutEntry` | `grossAmountMoney` | `gross_amount_money` |
| `PayoutEntry` | `feeAmountMoney` | `fee_amount_money` |
| `PayoutEntry` | `netAmountMoney` | `net_amount_money` |
| `PayoutEntry` | `typeAppFeeRevenueDetails` | `type_app_fee_revenue_details` |
| `PayoutEntry` | `typeAppFeeRefundDetails` | `type_app_fee_refund_details` |
| `PayoutEntry` | `typeAutomaticSavingsDetails` | `type_automatic_savings_details` |
| `PayoutEntry` | `typeAutomaticSavingsReversedDetails` | `type_automatic_savings_reversed_details` |
| `PayoutEntry` | `typeChargeDetails` | `type_charge_details` |
| `PayoutEntry` | `typeDepositFeeDetails` | `type_deposit_fee_details` |
| `PayoutEntry` | `typeDepositFeeReversedDetails` | `type_deposit_fee_reversed_details` |
| `PayoutEntry` | `typeDisputeDetails` | `type_dispute_details` |
| `PayoutEntry` | `typeFeeDetails` | `type_fee_details` |
| `PayoutEntry` | `typeFreeProcessingDetails` | `type_free_processing_details` |
| `PayoutEntry` | `typeHoldAdjustmentDetails` | `type_hold_adjustment_details` |
| `PayoutEntry` | `typeOpenDisputeDetails` | `type_open_dispute_details` |
| `PayoutEntry` | `typeOtherDetails` | `type_other_details` |
| `PayoutEntry` | `typeOtherAdjustmentDetails` | `type_other_adjustment_details` |
| `PayoutEntry` | `typeRefundDetails` | `type_refund_details` |
| `PayoutEntry` | `typeReleaseAdjustmentDetails` | `type_release_adjustment_details` |
| `PayoutEntry` | `typeReserveHoldDetails` | `type_reserve_hold_details` |
| `PayoutEntry` | `typeReserveReleaseDetails` | `type_reserve_release_details` |
| `PayoutEntry` | `typeSquareCapitalPaymentDetails` | `type_square_capital_payment_details` |
| `PayoutEntry` | `typeSquareCapitalReversedPaymentDetails` | `type_square_capital_reversed_payment_details` |
| `PayoutEntry` | `typeTaxOnFeeDetails` | `type_tax_on_fee_details` |
| `PayoutEntry` | `typeThirdPartyFeeDetails` | `type_third_party_fee_details` |
| `PayoutEntry` | `typeThirdPartyFeeRefundDetails` | `type_third_party_fee_refund_details` |
| `PayoutEntry` | `typeSquarePayrollTransferDetails` | `type_square_payroll_transfer_details` |
| `PayoutEntry` | `typeSquarePayrollTransferReversedDetails` | `type_square_payroll_transfer_reversed_details` |
| `PayoutFailedEvent` | `merchantId` | `merchant_id` |
| `PayoutFailedEvent` | `locationId` | `location_id` |
| `PayoutFailedEvent` | `eventId` | `event_id` |
| `PayoutFailedEvent` | `createdAt` | `created_at` |
| `PayoutFee` | `amountMoney` | `amount_money` |
| `PayoutFee` | `effectiveAt` | `effective_at` |
| `PayoutPaidEvent` | `merchantId` | `merchant_id` |
| `PayoutPaidEvent` | `locationId` | `location_id` |
| `PayoutPaidEvent` | `eventId` | `event_id` |
| `PayoutPaidEvent` | `createdAt` | `created_at` |
| `PayoutSentEvent` | `merchantId` | `merchant_id` |
| `PayoutSentEvent` | `locationId` | `location_id` |
| `PayoutSentEvent` | `eventId` | `event_id` |
| `PayoutSentEvent` | `createdAt` | `created_at` |
| `Phase` | `orderTemplateId` | `order_template_id` |
| `Phase` | `planPhaseUid` | `plan_phase_uid` |
| `PhaseInput` | `orderTemplateId` | `order_template_id` |
| `PrePopulatedData` | `buyerEmail` | `buyer_email` |
| `PrePopulatedData` | `buyerPhoneNumber` | `buyer_phone_number` |
| `PrePopulatedData` | `buyerAddress` | `buyer_address` |
| `ProcessingFee` | `effectiveAt` | `effective_at` |
| `ProcessingFee` | `amountMoney` | `amount_money` |
| `PublishInvoiceRequest` | `idempotencyKey` | `idempotency_key` |
| `PublishScheduledShiftRequest` | `idempotencyKey` | `idempotency_key` |
| `PublishScheduledShiftRequest` | `scheduledShiftNotificationAudience` | `scheduled_shift_notification_audience` |
| `PublishScheduledShiftResponse` | `scheduledShift` | `scheduled_shift` |
| `QrCodeOptions` | `barcodeContents` | `barcode_contents` |
| `QuickPay` | `priceMoney` | `price_money` |
| `QuickPay` | `locationId` | `location_id` |
| `ReceiptOptions` | `paymentId` | `payment_id` |
| `ReceiptOptions` | `printOnly` | `print_only` |
| `ReceiptOptions` | `isDuplicate` | `is_duplicate` |
| `ReceiveTransferOrderRequest` | `idempotencyKey` | `idempotency_key` |
| `ReceiveTransferOrderResponse` | `transferOrder` | `transfer_order` |
| `RedeemLoyaltyRewardRequest` | `idempotencyKey` | `idempotency_key` |
| `RedeemLoyaltyRewardRequest` | `locationId` | `location_id` |
| `Refund` | `locationId` | `location_id` |
| `Refund` | `transactionId` | `transaction_id` |
| `Refund` | `tenderId` | `tender_id` |
| `Refund` | `createdAt` | `created_at` |
| `Refund` | `amountMoney` | `amount_money` |
| `Refund` | `processingFeeMoney` | `processing_fee_money` |
| `Refund` | `additionalRecipients` | `additional_recipients` |
| `RefundCreatedEvent` | `merchantId` | `merchant_id` |
| `RefundCreatedEvent` | `eventId` | `event_id` |
| `RefundCreatedEvent` | `createdAt` | `created_at` |
| `RefundPaymentRequest` | `idempotencyKey` | `idempotency_key` |
| `RefundPaymentRequest` | `amountMoney` | `amount_money` |
| `RefundPaymentRequest` | `appFeeMoney` | `app_fee_money` |
| `RefundPaymentRequest` | `paymentId` | `payment_id` |
| `RefundPaymentRequest` | `destinationId` | `destination_id` |
| `RefundPaymentRequest` | `locationId` | `location_id` |
| `RefundPaymentRequest` | `customerId` | `customer_id` |
| `RefundPaymentRequest` | `paymentVersionToken` | `payment_version_token` |
| `RefundPaymentRequest` | `teamMemberId` | `team_member_id` |
| `RefundPaymentRequest` | `cashDetails` | `cash_details` |
| `RefundPaymentRequest` | `externalDetails` | `external_details` |
| `RefundUpdatedEvent` | `merchantId` | `merchant_id` |
| `RefundUpdatedEvent` | `eventId` | `event_id` |
| `RefundUpdatedEvent` | `createdAt` | `created_at` |
| `RegisterDomainRequest` | `domainName` | `domain_name` |
| `RestoreInventoryAdjustmentReasonRequest` | `reasonId` | `reason_id` |
| `RestoreInventoryAdjustmentReasonResponse` | `adjustmentReason` | `adjustment_reason` |
| `ResumeSubscriptionRequest` | `resumeEffectiveDate` | `resume_effective_date` |
| `ResumeSubscriptionRequest` | `resumeChangeTiming` | `resume_change_timing` |
| `RetrieveBookingCustomAttributeDefinitionResponse` | `customAttributeDefinition` | `custom_attribute_definition` |
| `RetrieveBookingCustomAttributeResponse` | `customAttribute` | `custom_attribute` |
| `RetrieveBusinessBookingProfileResponse` | `businessBookingProfile` | `business_booking_profile` |
| `RetrieveCashDrawerShiftResponse` | `cashDrawerShift` | `cash_drawer_shift` |
| `RetrieveCatalogObjectResponse` | `relatedObjects` | `related_objects` |
| `RetrieveCustomerCustomAttributeDefinitionResponse` | `customAttributeDefinition` | `custom_attribute_definition` |
| `RetrieveCustomerCustomAttributeResponse` | `customAttribute` | `custom_attribute` |
| `RetrieveGiftCardFromGanResponse` | `giftCard` | `gift_card` |
| `RetrieveGiftCardFromNonceResponse` | `giftCard` | `gift_card` |
| `RetrieveGiftCardResponse` | `giftCard` | `gift_card` |
| `RetrieveInventoryAdjustmentReasonRequest` | `reasonId` | `reason_id` |
| `RetrieveInventoryAdjustmentReasonResponse` | `adjustmentReason` | `adjustment_reason` |
| `RetrieveLocationBookingProfileResponse` | `locationBookingProfile` | `location_booking_profile` |
| `RetrieveLocationCustomAttributeDefinitionResponse` | `customAttributeDefinition` | `custom_attribute_definition` |
| `RetrieveLocationCustomAttributeResponse` | `customAttribute` | `custom_attribute` |
| `RetrieveLocationSettingsResponse` | `locationSettings` | `location_settings` |
| `RetrieveLoyaltyAccountResponse` | `loyaltyAccount` | `loyalty_account` |
| `RetrieveLoyaltyPromotionResponse` | `loyaltyPromotion` | `loyalty_promotion` |
| `RetrieveMerchantCustomAttributeDefinitionResponse` | `customAttributeDefinition` | `custom_attribute_definition` |
| `RetrieveMerchantCustomAttributeResponse` | `customAttribute` | `custom_attribute` |
| `RetrieveMerchantSettingsResponse` | `merchantSettings` | `merchant_settings` |
| `RetrieveOrderCustomAttributeDefinitionResponse` | `customAttributeDefinition` | `custom_attribute_definition` |
| `RetrieveOrderCustomAttributeResponse` | `customAttribute` | `custom_attribute` |
| `RetrievePaymentLinkResponse` | `paymentLink` | `payment_link` |
| `RetrieveScheduledShiftResponse` | `scheduledShift` | `scheduled_shift` |
| `RetrieveTeamMemberBookingProfileResponse` | `teamMemberBookingProfile` | `team_member_booking_profile` |
| `RetrieveTeamMemberResponse` | `teamMember` | `team_member` |
| `RetrieveTokenStatusResponse` | `expiresAt` | `expires_at` |
| `RetrieveTokenStatusResponse` | `clientId` | `client_id` |
| `RetrieveTokenStatusResponse` | `merchantId` | `merchant_id` |
| `RetrieveTransferOrderResponse` | `transferOrder` | `transfer_order` |
| `RetrieveWageSettingResponse` | `wageSetting` | `wage_setting` |
| `RevokeTokenRequest` | `clientId` | `client_id` |
| `RevokeTokenRequest` | `accessToken` | `access_token` |
| `RevokeTokenRequest` | `merchantId` | `merchant_id` |
| `RevokeTokenRequest` | `revokeOnlyAccessToken` | `revoke_only_access_token` |
| `RiskEvaluation` | `createdAt` | `created_at` |
| `RiskEvaluation` | `riskLevel` | `risk_level` |
| `SaveCardOptions` | `customerId` | `customer_id` |
| `SaveCardOptions` | `cardId` | `card_id` |
| `SaveCardOptions` | `referenceId` | `reference_id` |
| `ScheduledShift` | `draftShiftDetails` | `draft_shift_details` |
| `ScheduledShift` | `publishedShiftDetails` | `published_shift_details` |
| `ScheduledShift` | `createdAt` | `created_at` |
| `ScheduledShift` | `updatedAt` | `updated_at` |
| `ScheduledShiftDetails` | `teamMemberId` | `team_member_id` |
| `ScheduledShiftDetails` | `locationId` | `location_id` |
| `ScheduledShiftDetails` | `jobId` | `job_id` |
| `ScheduledShiftDetails` | `startAt` | `start_at` |
| `ScheduledShiftDetails` | `endAt` | `end_at` |
| `ScheduledShiftDetails` | `isDeleted` | `is_deleted` |
| `ScheduledShiftFilter` | `locationIds` | `location_ids` |
| `ScheduledShiftFilter` | `teamMemberIds` | `team_member_ids` |
| `ScheduledShiftFilter` | `assignmentStatus` | `assignment_status` |
| `ScheduledShiftFilter` | `scheduledShiftStatuses` | `scheduled_shift_statuses` |
| `ScheduledShiftWorkday` | `dateRange` | `date_range` |
| `ScheduledShiftWorkday` | `matchScheduledShiftsBy` | `match_scheduled_shifts_by` |
| `ScheduledShiftWorkday` | `defaultTimezone` | `default_timezone` |
| `SearchAvailabilityFilter` | `startAtRange` | `start_at_range` |
| `SearchAvailabilityFilter` | `locationId` | `location_id` |
| `SearchAvailabilityFilter` | `segmentFilters` | `segment_filters` |
| `SearchAvailabilityFilter` | `bookingId` | `booking_id` |
| `SearchCatalogItemsRequest` | `textFilter` | `text_filter` |
| `SearchCatalogItemsRequest` | `categoryIds` | `category_ids` |
| `SearchCatalogItemsRequest` | `stockLevels` | `stock_levels` |
| `SearchCatalogItemsRequest` | `enabledLocationIds` | `enabled_location_ids` |
| `SearchCatalogItemsRequest` | `sortOrder` | `sort_order` |
| `SearchCatalogItemsRequest` | `productTypes` | `product_types` |
| `SearchCatalogItemsRequest` | `customAttributeFilters` | `custom_attribute_filters` |
| `SearchCatalogItemsRequest` | `archivedState` | `archived_state` |
| `SearchCatalogItemsResponse` | `matchedVariationIds` | `matched_variation_ids` |
| `SearchCatalogObjectsRequest` | `objectTypes` | `object_types` |
| `SearchCatalogObjectsRequest` | `includeDeletedObjects` | `include_deleted_objects` |
| `SearchCatalogObjectsRequest` | `includeRelatedObjects` | `include_related_objects` |
| `SearchCatalogObjectsRequest` | `beginTime` | `begin_time` |
| `SearchCatalogObjectsRequest` | `includeCategoryPathToRoot` | `include_category_path_to_root` |
| `SearchCatalogObjectsResponse` | `relatedObjects` | `related_objects` |
| `SearchCatalogObjectsResponse` | `latestTime` | `latest_time` |
| `SearchEventsFilter` | `eventTypes` | `event_types` |
| `SearchEventsFilter` | `merchantIds` | `merchant_ids` |
| `SearchEventsFilter` | `locationIds` | `location_ids` |
| `SearchEventsFilter` | `createdAt` | `created_at` |
| `SearchLoyaltyAccountsRequestLoyaltyAccountQuery` | `customerIds` | `customer_ids` |
| `SearchLoyaltyAccountsResponse` | `loyaltyAccounts` | `loyalty_accounts` |
| `SearchLoyaltyRewardsRequestLoyaltyRewardQuery` | `loyaltyAccountId` | `loyalty_account_id` |
| `SearchOrdersCustomerFilter` | `customerIds` | `customer_ids` |
| `SearchOrdersDateTimeFilter` | `createdAt` | `created_at` |
| `SearchOrdersDateTimeFilter` | `updatedAt` | `updated_at` |
| `SearchOrdersDateTimeFilter` | `closedAt` | `closed_at` |
| `SearchOrdersFilter` | `stateFilter` | `state_filter` |
| `SearchOrdersFilter` | `dateTimeFilter` | `date_time_filter` |
| `SearchOrdersFilter` | `fulfillmentFilter` | `fulfillment_filter` |
| `SearchOrdersFilter` | `sourceFilter` | `source_filter` |
| `SearchOrdersFilter` | `customerFilter` | `customer_filter` |
| `SearchOrdersFulfillmentFilter` | `fulfillmentTypes` | `fulfillment_types` |
| `SearchOrdersFulfillmentFilter` | `fulfillmentStates` | `fulfillment_states` |
| `SearchOrdersRequest` | `locationIds` | `location_ids` |
| `SearchOrdersRequest` | `returnEntries` | `return_entries` |
| `SearchOrdersResponse` | `orderEntries` | `order_entries` |
| `SearchOrdersSort` | `sortField` | `sort_field` |
| `SearchOrdersSort` | `sortOrder` | `sort_order` |
| `SearchOrdersSourceFilter` | `sourceNames` | `source_names` |
| `SearchScheduledShiftsResponse` | `scheduledShifts` | `scheduled_shifts` |
| `SearchSubscriptionsFilter` | `customerIds` | `customer_ids` |
| `SearchSubscriptionsFilter` | `locationIds` | `location_ids` |
| `SearchSubscriptionsFilter` | `sourceNames` | `source_names` |
| `SearchTeamMembersFilter` | `locationIds` | `location_ids` |
| `SearchTeamMembersFilter` | `isOwner` | `is_owner` |
| `SearchTeamMembersResponse` | `teamMembers` | `team_members` |
| `SearchTransferOrdersResponse` | `transferOrders` | `transfer_orders` |
| `SegmentFilter` | `serviceVariationId` | `service_variation_id` |
| `SegmentFilter` | `teamMemberIdFilter` | `team_member_id_filter` |
| `SelectOption` | `referenceId` | `reference_id` |
| `SelectOptions` | `selectedOption` | `selected_option` |
| `Shift` | `employeeId` | `employee_id` |
| `Shift` | `locationId` | `location_id` |
| `Shift` | `startAt` | `start_at` |
| `Shift` | `endAt` | `end_at` |
| `Shift` | `createdAt` | `created_at` |
| `Shift` | `updatedAt` | `updated_at` |
| `Shift` | `teamMemberId` | `team_member_id` |
| `Shift` | `declaredCashTipMoney` | `declared_cash_tip_money` |
| `ShiftFilter` | `locationIds` | `location_ids` |
| `ShiftFilter` | `employeeIds` | `employee_ids` |
| `ShiftFilter` | `teamMemberIds` | `team_member_ids` |
| `ShiftWage` | `hourlyRate` | `hourly_rate` |
| `ShiftWage` | `jobId` | `job_id` |
| `ShiftWage` | `tipEligible` | `tip_eligible` |
| `ShiftWorkday` | `dateRange` | `date_range` |
| `ShiftWorkday` | `matchShiftsBy` | `match_shifts_by` |
| `ShiftWorkday` | `defaultTimezone` | `default_timezone` |
| `SignatureImage` | `imageType` | `image_type` |
| `Site` | `siteTitle` | `site_title` |
| `Site` | `isPublished` | `is_published` |
| `Site` | `createdAt` | `created_at` |
| `Site` | `updatedAt` | `updated_at` |
| `Snippet` | `siteId` | `site_id` |
| `Snippet` | `createdAt` | `created_at` |
| `Snippet` | `updatedAt` | `updated_at` |
| `SourceApplication` | `applicationId` | `application_id` |
| `SquareAccountDetails` | `paymentSourceToken` | `payment_source_token` |
| `StandardUnitDescriptionGroup` | `standardUnitDescriptions` | `standard_unit_descriptions` |
| `StandardUnitDescriptionGroup` | `languageCode` | `language_code` |
| `StartTransferOrderRequest` | `idempotencyKey` | `idempotency_key` |
| `StartTransferOrderResponse` | `transferOrder` | `transfer_order` |
| `Subscription` | `locationId` | `location_id` |
| `Subscription` | `planVariationId` | `plan_variation_id` |
| `Subscription` | `customerId` | `customer_id` |
| `Subscription` | `startDate` | `start_date` |
| `Subscription` | `canceledDate` | `canceled_date` |
| `Subscription` | `chargedThroughDate` | `charged_through_date` |
| `Subscription` | `taxPercentage` | `tax_percentage` |
| `Subscription` | `invoiceIds` | `invoice_ids` |
| `Subscription` | `priceOverrideMoney` | `price_override_money` |
| `Subscription` | `createdAt` | `created_at` |
| `Subscription` | `cardId` | `card_id` |
| `Subscription` | `monthlyBillingAnchorDate` | `monthly_billing_anchor_date` |
| `Subscription` | `completedDate` | `completed_date` |
| `SubscriptionAction` | `effectiveDate` | `effective_date` |
| `SubscriptionAction` | `monthlyBillingAnchorDate` | `monthly_billing_anchor_date` |
| `SubscriptionAction` | `newPlanVariationId` | `new_plan_variation_id` |
| `SubscriptionCreatedEvent` | `merchantId` | `merchant_id` |
| `SubscriptionCreatedEvent` | `eventId` | `event_id` |
| `SubscriptionCreatedEvent` | `createdAt` | `created_at` |
| `SubscriptionEvent` | `subscriptionEventType` | `subscription_event_type` |
| `SubscriptionEvent` | `effectiveDate` | `effective_date` |
| `SubscriptionEvent` | `monthlyBillingAnchorDate` | `monthly_billing_anchor_date` |
| `SubscriptionEvent` | `planVariationId` | `plan_variation_id` |
| `SubscriptionPhase` | `recurringPriceMoney` | `recurring_price_money` |
| `SubscriptionPricing` | `discountIds` | `discount_ids` |
| `SubscriptionPricing` | `priceMoney` | `price_money` |
| `SubscriptionTestResult` | `statusCode` | `status_code` |
| `SubscriptionTestResult` | `createdAt` | `created_at` |
| `SubscriptionTestResult` | `updatedAt` | `updated_at` |
| `SubscriptionUpdatedEvent` | `merchantId` | `merchant_id` |
| `SubscriptionUpdatedEvent` | `eventId` | `event_id` |
| `SubscriptionUpdatedEvent` | `createdAt` | `created_at` |
| `SwapPlanRequest` | `newPlanVariationId` | `new_plan_variation_id` |
| `TaxIds` | `euVat` | `eu_vat` |
| `TaxIds` | `frSiret` | `fr_siret` |
| `TaxIds` | `frNaf` | `fr_naf` |
| `TaxIds` | `esNif` | `es_nif` |
| `TaxIds` | `jpQii` | `jp_qii` |
| `TeamMember` | `referenceId` | `reference_id` |
| `TeamMember` | `isOwner` | `is_owner` |
| `TeamMember` | `givenName` | `given_name` |
| `TeamMember` | `familyName` | `family_name` |
| `TeamMember` | `emailAddress` | `email_address` |
| `TeamMember` | `phoneNumber` | `phone_number` |
| `TeamMember` | `createdAt` | `created_at` |
| `TeamMember` | `updatedAt` | `updated_at` |
| `TeamMember` | `assignedLocations` | `assigned_locations` |
| `TeamMember` | `wageSetting` | `wage_setting` |
| `TeamMemberAssignedLocations` | `assignmentType` | `assignment_type` |
| `TeamMemberAssignedLocations` | `locationIds` | `location_ids` |
| `TeamMemberBookingProfile` | `teamMemberId` | `team_member_id` |
| `TeamMemberBookingProfile` | `displayName` | `display_name` |
| `TeamMemberBookingProfile` | `isBookable` | `is_bookable` |
| `TeamMemberBookingProfile` | `profileImageUrl` | `profile_image_url` |
| `TeamMemberCreatedEvent` | `merchantId` | `merchant_id` |
| `TeamMemberCreatedEvent` | `eventId` | `event_id` |
| `TeamMemberCreatedEvent` | `createdAt` | `created_at` |
| `TeamMemberCreatedEventObject` | `teamMember` | `team_member` |
| `TeamMemberUpdatedEvent` | `merchantId` | `merchant_id` |
| `TeamMemberUpdatedEvent` | `eventId` | `event_id` |
| `TeamMemberUpdatedEvent` | `createdAt` | `created_at` |
| `TeamMemberUpdatedEventObject` | `teamMember` | `team_member` |
| `TeamMemberWage` | `teamMemberId` | `team_member_id` |
| `TeamMemberWage` | `hourlyRate` | `hourly_rate` |
| `TeamMemberWage` | `jobId` | `job_id` |
| `TeamMemberWage` | `tipEligible` | `tip_eligible` |
| `TeamMemberWageSettingUpdatedEvent` | `merchantId` | `merchant_id` |
| `TeamMemberWageSettingUpdatedEvent` | `eventId` | `event_id` |
| `TeamMemberWageSettingUpdatedEvent` | `createdAt` | `created_at` |
| `TeamMemberWageSettingUpdatedEventObject` | `wageSetting` | `wage_setting` |
| `Tender` | `locationId` | `location_id` |
| `Tender` | `transactionId` | `transaction_id` |
| `Tender` | `createdAt` | `created_at` |
| `Tender` | `amountMoney` | `amount_money` |
| `Tender` | `tipMoney` | `tip_money` |
| `Tender` | `processingFeeMoney` | `processing_fee_money` |
| `Tender` | `customerId` | `customer_id` |
| `Tender` | `cardDetails` | `card_details` |
| `Tender` | `cashDetails` | `cash_details` |
| `Tender` | `bankAccountDetails` | `bank_account_details` |
| `Tender` | `buyNowPayLaterDetails` | `buy_now_pay_later_details` |
| `Tender` | `squareAccountDetails` | `square_account_details` |
| `Tender` | `additionalRecipients` | `additional_recipients` |
| `Tender` | `paymentId` | `payment_id` |
| `TenderBuyNowPayLaterDetails` | `buyNowPayLaterBrand` | `buy_now_pay_later_brand` |
| `TenderCardDetails` | `entryMethod` | `entry_method` |
| `TenderCashDetails` | `buyerTenderedMoney` | `buyer_tendered_money` |
| `TenderCashDetails` | `changeBackMoney` | `change_back_money` |
| `TerminalAction` | `deviceId` | `device_id` |
| `TerminalAction` | `deadlineDuration` | `deadline_duration` |
| `TerminalAction` | `cancelReason` | `cancel_reason` |
| `TerminalAction` | `createdAt` | `created_at` |
| `TerminalAction` | `updatedAt` | `updated_at` |
| `TerminalAction` | `appId` | `app_id` |
| `TerminalAction` | `locationId` | `location_id` |
| `TerminalAction` | `qrCodeOptions` | `qr_code_options` |
| `TerminalAction` | `saveCardOptions` | `save_card_options` |
| `TerminalAction` | `signatureOptions` | `signature_options` |
| `TerminalAction` | `confirmationOptions` | `confirmation_options` |
| `TerminalAction` | `receiptOptions` | `receipt_options` |
| `TerminalAction` | `dataCollectionOptions` | `data_collection_options` |
| `TerminalAction` | `selectOptions` | `select_options` |
| `TerminalAction` | `deviceMetadata` | `device_metadata` |
| `TerminalAction` | `awaitNextAction` | `await_next_action` |
| `TerminalAction` | `awaitNextActionDuration` | `await_next_action_duration` |
| `TerminalActionCreatedEvent` | `merchantId` | `merchant_id` |
| `TerminalActionCreatedEvent` | `eventId` | `event_id` |
| `TerminalActionCreatedEvent` | `createdAt` | `created_at` |
| `TerminalActionQueryFilter` | `deviceId` | `device_id` |
| `TerminalActionQueryFilter` | `createdAt` | `created_at` |
| `TerminalActionQuerySort` | `sortOrder` | `sort_order` |
| `TerminalActionUpdatedEvent` | `merchantId` | `merchant_id` |
| `TerminalActionUpdatedEvent` | `eventId` | `event_id` |
| `TerminalActionUpdatedEvent` | `createdAt` | `created_at` |
| `TerminalCheckout` | `amountMoney` | `amount_money` |
| `TerminalCheckout` | `referenceId` | `reference_id` |
| `TerminalCheckout` | `orderId` | `order_id` |
| `TerminalCheckout` | `paymentOptions` | `payment_options` |
| `TerminalCheckout` | `deviceOptions` | `device_options` |
| `TerminalCheckout` | `deadlineDuration` | `deadline_duration` |
| `TerminalCheckout` | `cancelReason` | `cancel_reason` |
| `TerminalCheckout` | `paymentIds` | `payment_ids` |
| `TerminalCheckout` | `createdAt` | `created_at` |
| `TerminalCheckout` | `updatedAt` | `updated_at` |
| `TerminalCheckout` | `appId` | `app_id` |
| `TerminalCheckout` | `locationId` | `location_id` |
| `TerminalCheckout` | `paymentType` | `payment_type` |
| `TerminalCheckout` | `teamMemberId` | `team_member_id` |
| `TerminalCheckout` | `customerId` | `customer_id` |
| `TerminalCheckout` | `appFeeMoney` | `app_fee_money` |
| `TerminalCheckout` | `statementDescriptionIdentifier` | `statement_description_identifier` |
| `TerminalCheckout` | `tipMoney` | `tip_money` |
| `TerminalCheckoutCreatedEvent` | `merchantId` | `merchant_id` |
| `TerminalCheckoutCreatedEvent` | `eventId` | `event_id` |
| `TerminalCheckoutCreatedEvent` | `createdAt` | `created_at` |
| `TerminalCheckoutQueryFilter` | `deviceId` | `device_id` |
| `TerminalCheckoutQueryFilter` | `createdAt` | `created_at` |
| `TerminalCheckoutQuerySort` | `sortOrder` | `sort_order` |
| `TerminalCheckoutUpdatedEvent` | `merchantId` | `merchant_id` |
| `TerminalCheckoutUpdatedEvent` | `eventId` | `event_id` |
| `TerminalCheckoutUpdatedEvent` | `createdAt` | `created_at` |
| `TerminalRefund` | `refundId` | `refund_id` |
| `TerminalRefund` | `paymentId` | `payment_id` |
| `TerminalRefund` | `orderId` | `order_id` |
| `TerminalRefund` | `amountMoney` | `amount_money` |
| `TerminalRefund` | `deviceId` | `device_id` |
| `TerminalRefund` | `deadlineDuration` | `deadline_duration` |
| `TerminalRefund` | `cancelReason` | `cancel_reason` |
| `TerminalRefund` | `createdAt` | `created_at` |
| `TerminalRefund` | `updatedAt` | `updated_at` |
| `TerminalRefund` | `appId` | `app_id` |
| `TerminalRefund` | `locationId` | `location_id` |
| `TerminalRefundCreatedEvent` | `merchantId` | `merchant_id` |
| `TerminalRefundCreatedEvent` | `eventId` | `event_id` |
| `TerminalRefundCreatedEvent` | `createdAt` | `created_at` |
| `TerminalRefundQueryFilter` | `deviceId` | `device_id` |
| `TerminalRefundQueryFilter` | `createdAt` | `created_at` |
| `TerminalRefundQuerySort` | `sortOrder` | `sort_order` |
| `TerminalRefundUpdatedEvent` | `merchantId` | `merchant_id` |
| `TerminalRefundUpdatedEvent` | `eventId` | `event_id` |
| `TerminalRefundUpdatedEvent` | `createdAt` | `created_at` |
| `TestWebhookSubscriptionRequest` | `eventType` | `event_type` |
| `TestWebhookSubscriptionResponse` | `subscriptionTestResult` | `subscription_test_result` |
| `TimeRange` | `startAt` | `start_at` |
| `TimeRange` | `endAt` | `end_at` |
| `Timecard` | `locationId` | `location_id` |
| `Timecard` | `startAt` | `start_at` |
| `Timecard` | `endAt` | `end_at` |
| `Timecard` | `createdAt` | `created_at` |
| `Timecard` | `updatedAt` | `updated_at` |
| `Timecard` | `teamMemberId` | `team_member_id` |
| `Timecard` | `declaredCashTipMoney` | `declared_cash_tip_money` |
| `TimecardFilter` | `locationIds` | `location_ids` |
| `TimecardFilter` | `teamMemberIds` | `team_member_ids` |
| `TimecardWage` | `hourlyRate` | `hourly_rate` |
| `TimecardWage` | `jobId` | `job_id` |
| `TimecardWage` | `tipEligible` | `tip_eligible` |
| `TimecardWorkday` | `dateRange` | `date_range` |
| `TimecardWorkday` | `matchTimecardsBy` | `match_timecards_by` |
| `TimecardWorkday` | `defaultTimezone` | `default_timezone` |
| `TipSettings` | `allowTipping` | `allow_tipping` |
| `TipSettings` | `separateTipScreen` | `separate_tip_screen` |
| `TipSettings` | `customTipField` | `custom_tip_field` |
| `TipSettings` | `tipPercentages` | `tip_percentages` |
| `TipSettings` | `smartTipping` | `smart_tipping` |
| `Transaction` | `locationId` | `location_id` |
| `Transaction` | `createdAt` | `created_at` |
| `Transaction` | `referenceId` | `reference_id` |
| `Transaction` | `clientId` | `client_id` |
| `Transaction` | `shippingAddress` | `shipping_address` |
| `Transaction` | `orderId` | `order_id` |
| `TransferOrder` | `sourceLocationId` | `source_location_id` |
| `TransferOrder` | `destinationLocationId` | `destination_location_id` |
| `TransferOrder` | `createdAt` | `created_at` |
| `TransferOrder` | `updatedAt` | `updated_at` |
| `TransferOrder` | `expectedAt` | `expected_at` |
| `TransferOrder` | `completedAt` | `completed_at` |
| `TransferOrder` | `trackingNumber` | `tracking_number` |
| `TransferOrder` | `createdByTeamMemberId` | `created_by_team_member_id` |
| `TransferOrder` | `lineItems` | `line_items` |
| `TransferOrderCreatedEvent` | `merchantId` | `merchant_id` |
| `TransferOrderCreatedEvent` | `eventId` | `event_id` |
| `TransferOrderCreatedEvent` | `createdAt` | `created_at` |
| `TransferOrderCreatedEventObject` | `transferOrder` | `transfer_order` |
| `TransferOrderDeletedEvent` | `merchantId` | `merchant_id` |
| `TransferOrderDeletedEvent` | `eventId` | `event_id` |
| `TransferOrderDeletedEvent` | `createdAt` | `created_at` |
| `TransferOrderFilter` | `sourceLocationIds` | `source_location_ids` |
| `TransferOrderFilter` | `destinationLocationIds` | `destination_location_ids` |
| `TransferOrderGoodsReceipt` | `lineItems` | `line_items` |
| `TransferOrderGoodsReceiptLineItem` | `transferOrderLineUid` | `transfer_order_line_uid` |
| `TransferOrderGoodsReceiptLineItem` | `quantityReceived` | `quantity_received` |
| `TransferOrderGoodsReceiptLineItem` | `quantityDamaged` | `quantity_damaged` |
| `TransferOrderGoodsReceiptLineItem` | `quantityCanceled` | `quantity_canceled` |
| `TransferOrderLine` | `itemVariationId` | `item_variation_id` |
| `TransferOrderLine` | `quantityOrdered` | `quantity_ordered` |
| `TransferOrderLine` | `quantityPending` | `quantity_pending` |
| `TransferOrderLine` | `quantityReceived` | `quantity_received` |
| `TransferOrderLine` | `quantityDamaged` | `quantity_damaged` |
| `TransferOrderLine` | `quantityCanceled` | `quantity_canceled` |
| `TransferOrderUpdatedEvent` | `merchantId` | `merchant_id` |
| `TransferOrderUpdatedEvent` | `eventId` | `event_id` |
| `TransferOrderUpdatedEvent` | `createdAt` | `created_at` |
| `TransferOrderUpdatedEventObject` | `transferOrder` | `transfer_order` |
| `UnlinkCustomerFromGiftCardRequest` | `customerId` | `customer_id` |
| `UnlinkCustomerFromGiftCardResponse` | `giftCard` | `gift_card` |
| `UpdateBookingCustomAttributeDefinitionRequest` | `customAttributeDefinition` | `custom_attribute_definition` |
| `UpdateBookingCustomAttributeDefinitionRequest` | `idempotencyKey` | `idempotency_key` |
| `UpdateBookingCustomAttributeDefinitionResponse` | `customAttributeDefinition` | `custom_attribute_definition` |
| `UpdateBookingRequest` | `idempotencyKey` | `idempotency_key` |
| `UpdateBreakTypeRequest` | `breakType` | `break_type` |
| `UpdateBreakTypeResponse` | `breakType` | `break_type` |
| `UpdateCatalogImageRequest` | `idempotencyKey` | `idempotency_key` |
| `UpdateCustomerCustomAttributeDefinitionRequest` | `customAttributeDefinition` | `custom_attribute_definition` |
| `UpdateCustomerCustomAttributeDefinitionRequest` | `idempotencyKey` | `idempotency_key` |
| `UpdateCustomerCustomAttributeDefinitionResponse` | `customAttributeDefinition` | `custom_attribute_definition` |
| `UpdateCustomerRequest` | `givenName` | `given_name` |
| `UpdateCustomerRequest` | `familyName` | `family_name` |
| `UpdateCustomerRequest` | `companyName` | `company_name` |
| `UpdateCustomerRequest` | `emailAddress` | `email_address` |
| `UpdateCustomerRequest` | `phoneNumber` | `phone_number` |
| `UpdateCustomerRequest` | `referenceId` | `reference_id` |
| `UpdateCustomerRequest` | `taxIds` | `tax_ids` |
| `UpdateInventoryAdjustmentReasonRequest` | `reasonId` | `reason_id` |
| `UpdateInventoryAdjustmentReasonRequest` | `adjustmentReason` | `adjustment_reason` |
| `UpdateInventoryAdjustmentReasonResponse` | `adjustmentReason` | `adjustment_reason` |
| `UpdateInventoryAdjustmentRequest` | `idempotencyKey` | `idempotency_key` |
| `UpdateInvoiceRequest` | `idempotencyKey` | `idempotency_key` |
| `UpdateInvoiceRequest` | `fieldsToClear` | `fields_to_clear` |
| `UpdateItemModifierListsRequest` | `itemIds` | `item_ids` |
| `UpdateItemModifierListsRequest` | `modifierListsToEnable` | `modifier_lists_to_enable` |
| `UpdateItemModifierListsRequest` | `modifierListsToDisable` | `modifier_lists_to_disable` |
| `UpdateItemModifierListsResponse` | `updatedAt` | `updated_at` |
| `UpdateItemTaxesRequest` | `itemIds` | `item_ids` |
| `UpdateItemTaxesRequest` | `taxesToEnable` | `taxes_to_enable` |
| `UpdateItemTaxesRequest` | `taxesToDisable` | `taxes_to_disable` |
| `UpdateItemTaxesResponse` | `updatedAt` | `updated_at` |
| `UpdateLocationCustomAttributeDefinitionRequest` | `customAttributeDefinition` | `custom_attribute_definition` |
| `UpdateLocationCustomAttributeDefinitionRequest` | `idempotencyKey` | `idempotency_key` |
| `UpdateLocationCustomAttributeDefinitionResponse` | `customAttributeDefinition` | `custom_attribute_definition` |
| `UpdateLocationSettingsRequest` | `locationSettings` | `location_settings` |
| `UpdateLocationSettingsResponse` | `locationSettings` | `location_settings` |
| `UpdateMerchantCustomAttributeDefinitionRequest` | `customAttributeDefinition` | `custom_attribute_definition` |
| `UpdateMerchantCustomAttributeDefinitionRequest` | `idempotencyKey` | `idempotency_key` |
| `UpdateMerchantCustomAttributeDefinitionResponse` | `customAttributeDefinition` | `custom_attribute_definition` |
| `UpdateMerchantSettingsRequest` | `merchantSettings` | `merchant_settings` |
| `UpdateMerchantSettingsResponse` | `merchantSettings` | `merchant_settings` |
| `UpdateOrderCustomAttributeDefinitionRequest` | `customAttributeDefinition` | `custom_attribute_definition` |
| `UpdateOrderCustomAttributeDefinitionRequest` | `idempotencyKey` | `idempotency_key` |
| `UpdateOrderCustomAttributeDefinitionResponse` | `customAttributeDefinition` | `custom_attribute_definition` |
| `UpdateOrderRequest` | `fieldsToClear` | `fields_to_clear` |
| `UpdateOrderRequest` | `idempotencyKey` | `idempotency_key` |
| `UpdatePaymentLinkRequest` | `paymentLink` | `payment_link` |
| `UpdatePaymentLinkResponse` | `paymentLink` | `payment_link` |
| `UpdatePaymentRequest` | `idempotencyKey` | `idempotency_key` |
| `UpdateScheduledShiftRequest` | `scheduledShift` | `scheduled_shift` |
| `UpdateScheduledShiftResponse` | `scheduledShift` | `scheduled_shift` |
| `UpdateTeamMemberRequest` | `teamMember` | `team_member` |
| `UpdateTeamMemberResponse` | `teamMember` | `team_member` |
| `UpdateTransferOrderData` | `sourceLocationId` | `source_location_id` |
| `UpdateTransferOrderData` | `destinationLocationId` | `destination_location_id` |
| `UpdateTransferOrderData` | `expectedAt` | `expected_at` |
| `UpdateTransferOrderData` | `trackingNumber` | `tracking_number` |
| `UpdateTransferOrderData` | `lineItems` | `line_items` |
| `UpdateTransferOrderLineData` | `itemVariationId` | `item_variation_id` |
| `UpdateTransferOrderLineData` | `quantityOrdered` | `quantity_ordered` |
| `UpdateTransferOrderRequest` | `idempotencyKey` | `idempotency_key` |
| `UpdateTransferOrderRequest` | `transferOrder` | `transfer_order` |
| `UpdateTransferOrderResponse` | `transferOrder` | `transfer_order` |
| `UpdateVendorRequest` | `idempotencyKey` | `idempotency_key` |
| `UpdateWageSettingRequest` | `wageSetting` | `wage_setting` |
| `UpdateWageSettingResponse` | `wageSetting` | `wage_setting` |
| `UpdateWebhookSubscriptionSignatureKeyRequest` | `idempotencyKey` | `idempotency_key` |
| `UpdateWebhookSubscriptionSignatureKeyResponse` | `signatureKey` | `signature_key` |
| `UpdateWorkweekConfigRequest` | `workweekConfig` | `workweek_config` |
| `UpdateWorkweekConfigResponse` | `workweekConfig` | `workweek_config` |
| `UpsertBookingCustomAttributeRequest` | `customAttribute` | `custom_attribute` |
| `UpsertBookingCustomAttributeRequest` | `idempotencyKey` | `idempotency_key` |
| `UpsertBookingCustomAttributeResponse` | `customAttribute` | `custom_attribute` |
| `UpsertCatalogObjectRequest` | `idempotencyKey` | `idempotency_key` |
| `UpsertCatalogObjectResponse` | `catalogObject` | `catalog_object` |
| `UpsertCatalogObjectResponse` | `idMappings` | `id_mappings` |
| `UpsertCustomerCustomAttributeRequest` | `customAttribute` | `custom_attribute` |
| `UpsertCustomerCustomAttributeRequest` | `idempotencyKey` | `idempotency_key` |
| `UpsertCustomerCustomAttributeResponse` | `customAttribute` | `custom_attribute` |
| `UpsertLocationCustomAttributeRequest` | `customAttribute` | `custom_attribute` |
| `UpsertLocationCustomAttributeRequest` | `idempotencyKey` | `idempotency_key` |
| `UpsertLocationCustomAttributeResponse` | `customAttribute` | `custom_attribute` |
| `UpsertMerchantCustomAttributeRequest` | `customAttribute` | `custom_attribute` |
| `UpsertMerchantCustomAttributeRequest` | `idempotencyKey` | `idempotency_key` |
| `UpsertMerchantCustomAttributeResponse` | `customAttribute` | `custom_attribute` |
| `UpsertOrderCustomAttributeRequest` | `customAttribute` | `custom_attribute` |
| `UpsertOrderCustomAttributeRequest` | `idempotencyKey` | `idempotency_key` |
| `UpsertOrderCustomAttributeResponse` | `customAttribute` | `custom_attribute` |
| `V1Money` | `currencyCode` | `currency_code` |
| `V1Order` | `buyerEmail` | `buyer_email` |
| `V1Order` | `recipientName` | `recipient_name` |
| `V1Order` | `recipientPhoneNumber` | `recipient_phone_number` |
| `V1Order` | `shippingAddress` | `shipping_address` |
| `V1Order` | `subtotalMoney` | `subtotal_money` |
| `V1Order` | `totalShippingMoney` | `total_shipping_money` |
| `V1Order` | `totalTaxMoney` | `total_tax_money` |
| `V1Order` | `totalPriceMoney` | `total_price_money` |
| `V1Order` | `totalDiscountMoney` | `total_discount_money` |
| `V1Order` | `createdAt` | `created_at` |
| `V1Order` | `updatedAt` | `updated_at` |
| `V1Order` | `expiresAt` | `expires_at` |
| `V1Order` | `paymentId` | `payment_id` |
| `V1Order` | `buyerNote` | `buyer_note` |
| `V1Order` | `completedNote` | `completed_note` |
| `V1Order` | `refundedNote` | `refunded_note` |
| `V1Order` | `canceledNote` | `canceled_note` |
| `V1Order` | `orderHistory` | `order_history` |
| `V1Order` | `promoCode` | `promo_code` |
| `V1Order` | `btcReceiveAddress` | `btc_receive_address` |
| `V1Order` | `btcPriceSatoshi` | `btc_price_satoshi` |
| `V1OrderHistoryEntry` | `createdAt` | `created_at` |
| `V1Tender` | `employeeId` | `employee_id` |
| `V1Tender` | `receiptUrl` | `receipt_url` |
| `V1Tender` | `cardBrand` | `card_brand` |
| `V1Tender` | `panSuffix` | `pan_suffix` |
| `V1Tender` | `entryMethod` | `entry_method` |
| `V1Tender` | `paymentNote` | `payment_note` |
| `V1Tender` | `totalMoney` | `total_money` |
| `V1Tender` | `tenderedMoney` | `tendered_money` |
| `V1Tender` | `tenderedAt` | `tendered_at` |
| `V1Tender` | `settledAt` | `settled_at` |
| `V1Tender` | `changeBackMoney` | `change_back_money` |
| `V1Tender` | `refundedMoney` | `refunded_money` |
| `V1Tender` | `isExchange` | `is_exchange` |
| `V1UpdateOrderRequest` | `shippedTrackingNumber` | `shipped_tracking_number` |
| `V1UpdateOrderRequest` | `completedNote` | `completed_note` |
| `V1UpdateOrderRequest` | `refundedNote` | `refunded_note` |
| `V1UpdateOrderRequest` | `canceledNote` | `canceled_note` |
| `Vendor` | `createdAt` | `created_at` |
| `Vendor` | `updatedAt` | `updated_at` |
| `Vendor` | `accountNumber` | `account_number` |
| `VendorContact` | `emailAddress` | `email_address` |
| `VendorContact` | `phoneNumber` | `phone_number` |
| `VendorCreatedEvent` | `merchantId` | `merchant_id` |
| `VendorCreatedEvent` | `locationId` | `location_id` |
| `VendorCreatedEvent` | `eventId` | `event_id` |
| `VendorCreatedEvent` | `createdAt` | `created_at` |
| `VendorUpdatedEvent` | `merchantId` | `merchant_id` |
| `VendorUpdatedEvent` | `locationId` | `location_id` |
| `VendorUpdatedEvent` | `eventId` | `event_id` |
| `VendorUpdatedEvent` | `createdAt` | `created_at` |
| `WageSetting` | `teamMemberId` | `team_member_id` |
| `WageSetting` | `jobAssignments` | `job_assignments` |
| `WageSetting` | `isOvertimeExempt` | `is_overtime_exempt` |
| `WageSetting` | `createdAt` | `created_at` |
| `WageSetting` | `updatedAt` | `updated_at` |
| `WebhookSubscription` | `eventTypes` | `event_types` |
| `WebhookSubscription` | `notificationUrl` | `notification_url` |
| `WebhookSubscription` | `apiVersion` | `api_version` |
| `WebhookSubscription` | `signatureKey` | `signature_key` |
| `WebhookSubscription` | `createdAt` | `created_at` |
| `WebhookSubscription` | `updatedAt` | `updated_at` |
| `WorkweekConfig` | `startOfWeek` | `start_of_week` |
| `WorkweekConfig` | `startOfDayLocalTime` | `start_of_day_local_time` |
| `WorkweekConfig` | `createdAt` | `created_at` |
| `WorkweekConfig` | `updatedAt` | `updated_at` |

---

## Servers & auth

**Authentication is per operation.** Every operation declares the requirement it enforces and the SDK sends exactly that: **332 of the 334 operations** require a credential and **2** are public. Each block on a page above carries an **Auth** bullet naming its requirement, `none` included. There is no client-global switch and no per-call override.

| Scheme (as an **Auth** bullet names it) | Configured with | What the SDK sends |
| --- | --- | --- |
| `oauth2` | `oauth2: { clientId, clientSecret?, redirectUri, scope?, state?, pkce?, promptForAuthorizationCode }` | `Authorization: Bearer <access token>` |
| `oauth2ClientSecret` | `oauth2ClientSecret` | header `Authorization: <key>` |

A scheme **contributes** headers, query parameters and cookies rather than mutating the request, so a credential is encoded by exactly the code that encodes an operation's own parameters. The auth layer goes on **last**, which means a scheme's `Authorization` wins over one the operation declared.

**Composition is emitted, not configured.** Where the spec puts two schemes in one requirement the SDK sends **both**; where it lists alternatives the SDK sends the **first configured** one, in the order the **Auth** bullet prints them. The combinators that express this (`allAuth`, `anyAuth`, `noneAuth`) live in the generated resource modules and are **not exported**.

**A credential may be a function.** Every field typed `TokenProvider` is re-read on **every** request with no caching, so a key can rotate without rebuilding the client. An empty string counts as absent, and a function is treated as present without being invoked.

**An unconfigured scheme does not throw.** The request goes out without that credential and the server decides. So a 401 on a call you believed was authenticated is usually an unset credential field rather than an SDK failure — check the operation's **Auth** bullet against what the client was given.

**OAuth2 fetches and caches its own token.** The token request goes through the same client as every other call — same timeout, same `fetch` — sends a form-urlencoded body, and **decodes** the response against a schema rather than casting it. An access token is cached until shortly before it expires; a response carrying no `expires_in` is treated as never expiring (RFC 6749 §5.1); concurrent callers share one in-flight fetch. A refused token endpoint rejects with `AuthError` wrapping the underlying `ResponseError` as `cause`, so it never looks like the business call failing.

| Flow | Token endpoint | Client credentials travel |
| --- | --- | --- |
| `oauth2` | `default` + `/oauth2/token` | as `Authorization: Basic` |

The authorization-code grant differs in three ways. It needs a human, so `promptForAuthorizationCode` is a **required** member of its credentials: the SDK builds the authorization URL from `default` + `/oauth2/authorize` and hands it over, and never opens it itself. PKCE is on by default — `pkce` defaults to `PkceMethod.S256`, and `null` disables it, which then requires a client secret or the scheme throws `AuthError` before prompting. And it is the only grant that can refresh, so acquisition is a ladder: live cache, then a refresh attempt, then a full re-authorization.

**Replacing a grant.** Each OAuth2 scheme's token request is a strategy you can substitute — `oauth2Strategy` on `ClientOptions`. A strategy is one method, `getToken(credentials, signal)`, plus `tryRefreshToken(...)` for the refreshable one. Supply it and the built-in token request is not used, while the caching, the expiry buffer and the single-flight behaviour above still apply.

**The auth types you can name.** Every row below is exported from the package root. `Source` is where to read the declaration, never what to import — the credential shapes themselves are already spelled in the scheme table above.

| Type | Source |
| --- | --- |
| `OAuthToken` | `src/core/auth/oauth2-strategies.ts` |
| `OAuth2CredentialPlacement` | `src/core/auth/oauth2-strategies.ts` |
| `OAuthTokenRefreshable` | `src/core/auth/oauth2-strategies.ts` |
| `AuthorizationCodePrompt` | `src/core/auth/credentials.ts` |
| `PkceMethod` | `src/core/auth/credentials.ts` |

**A 401 invalidates, it does not retry.** On a **401** — 401 only, not 403 — the SDK clears whatever that operation's scheme had cached, so the *next* call re-acquires. The current request still rejects with the operation's `ResponseError`. There is no retry loop on this SDK, and the credential fields are on `ClientOptions`.

**Environments.** `ClientOptions.serverEnvironment` selects one for the whole client (source: `src/servers.ts`). `ServerEnvironment` is a `const` object with a derived union type, not a TypeScript `enum` — and unlike the model enums it is **closed**, so only the values below are assignable.

| `ServerEnvironment` member | Value |
| --- | --- |
| `ServerEnvironment.Production` *(default)* | `production` |
| `ServerEnvironment.Sandbox` | `sandbox` |
| `ServerEnvironment.Custom` | `custom` |

**Server groups.** 1 logical server; each operation is bound to one at generation time, and a block carries a **Server** bullet only when its group is not `default`.

| Group | Options type |
| --- | --- |
| `default` | `DefaultServerOptions` |

**Base URLs and overrides.** One row per group-and-environment pair, so the table stays four columns wide however many environments a spec declares. Every cell is overridden at `serverOptions.<group>.<environment>.<name>`, where `<name>` is `baseUrl` for the whole template or the variable name for one substitution. An override merges with the built-in defaults **per pair, key by key**.

| Group | Environment | Base URL template | Template variables (default) |
| --- | --- | --- | --- |
| `default` | `production` | `https://connect.squareup.com` | — |
| `default` | `sandbox` | `https://connect.squareupsandbox.com` | — |
| `default` | `custom` | `{custom_url}` | `customUrl` = `"https://connect.squareup.com"` |

A `baseUrl` override replaces the template verbatim; variable values are percent-encoded into it, and templates are expanded per request rather than once at construction. An environment value the SDK does not know throws `SdkError` when a server is resolved — at the first call, not at construction. It is the one failure on this surface that throws **synchronously** out of the operation method, so a `try`/`await` catches it but `.asApiResult()` and `.catch()` never see it.

---

## Runtime & packaging

The facts that change what you type, and the floors that decide whether the package loads at all. This section is the home for all of them.

|  |  |
| --- | --- |
| One entry, two dialects | `import` resolves `dist/esm`, `require` resolves `dist/commonjs`, both through the single `.` export. In a TypeScript CommonJS file the typed spelling is `import sdk = require("square")`; a plain `require` destructure works at run time but yields no types. `instanceof` is reliable **within** one dialect — if your app loads both, the two copies declare separate error classes |
| Consumer compiler settings | Under `exactOptionalPropertyTypes`, **omit or spread** an absent optional rather than assigning `undefined` to it. Under `verbatimModuleSyntax`, names that carry no runtime value (the options types, every model type) must be imported with `import type` |
| Required globals, and only these | Always: `fetch` (or a replacement passed as the `fetch` option), `AbortController`, `Headers`, `URL`, `setTimeout` and `clearTimeout`, `JSON`, `BigInt`. Auth adds more, each reached only once the credential needing it is configured. `TextEncoder` and `btoa` build every `Authorization: Basic` value, sent on every OAuth2 token request, whose client credentials travel as Basic by default. `crypto.getRandomValues` and `crypto.subtle.digest` belong to the authorization-code grant's PKCE alone. |
| Values that cross the boundary | `Date` for `date-time`, `string` for `date`, `ArrayBuffer` for an undeclared error body, `Headers` on a result and on a thrown `ResponseError`. The engine also carries a `bigint` int64 path and a base64 `bytes()` codec, reached only where a model uses them |
| Browser distribution | The package ships `dist/esm` and `dist/commonjs` and nothing else — **no bundle, no UMD file, no CDN artifact**. Use it through a bundler, which resolves `zod/v4-mini`, deduplicates it against your own copy and tree-shakes the rest |
| Other runtimes | Deno, Bun, Cloudflare Workers and Vercel Edge are all likely to work — the SDK needs only the globals above and imports no Node built-in — but **none of them is tested for this package**, so nothing here claims support for them |

The browser floor comes from the emitted output rather than the sources: `tshy` builds at `target: ES2022`, so native `#private` fields and methods survive into `dist/`.

| Browser | Minimum | Set by |
| --- | --- | --- |
| Chrome / Edge | **85** | `String.prototype.replaceAll`, logical assignment (`??=`) |
| Firefox | **90** | private class fields and methods |
| Safari / iOS Safari | **15** | private class **methods** |

That table is the **module-load** floor: below it the SDK fails while the module is evaluating, not at the first call. Two things degrade quietly above it. `{ cause }` on the `Error` constructor needs Chrome 93, Firefox 91 or Safari 15, so below that `err.cause` is `undefined`. More consequentially, **cancellation needs `AbortController.abort(reason)` and `AbortSignal.reason`**, which arrived in Chrome 98, Firefox 97 and Safari 15.4 — between the module-load floor and those versions the engine still aborts the request but produces no typed error at all.

One auth floor is not a version at all. `crypto.subtle` is `undefined` on an **insecure origin** in every browser, so the authorization-code grant's default `S256` PKCE fails on a page served over plain `http` — a LAN IP included, since only `localhost` is treated as secure. HTTPS is the fix; `PkceMethod.Plain` avoids `crypto.subtle` entirely.

