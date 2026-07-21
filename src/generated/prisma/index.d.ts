
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Businesses
 * 
 */
export type Businesses = $Result.DefaultSelection<Prisma.$BusinessesPayload>
/**
 * Model Clients
 * 
 */
export type Clients = $Result.DefaultSelection<Prisma.$ClientsPayload>
/**
 * Model Notifications
 * 
 */
export type Notifications = $Result.DefaultSelection<Prisma.$NotificationsPayload>
/**
 * Model Measurements
 * 
 */
export type Measurements = $Result.DefaultSelection<Prisma.$MeasurementsPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model Payments
 * 
 */
export type Payments = $Result.DefaultSelection<Prisma.$PaymentsPayload>
/**
 * Model Income
 * 
 */
export type Income = $Result.DefaultSelection<Prisma.$IncomePayload>
/**
 * Model Expenses
 * 
 */
export type Expenses = $Result.DefaultSelection<Prisma.$ExpensesPayload>
/**
 * Model FinancialRecord
 * 
 */
export type FinancialRecord = $Result.DefaultSelection<Prisma.$FinancialRecordPayload>
/**
 * Model Events
 * 
 */
export type Events = $Result.DefaultSelection<Prisma.$EventsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const CompletionStatus: {
  Complete: 'Complete',
  InProgress: 'InProgress',
  Pending: 'Pending'
};

export type CompletionStatus = (typeof CompletionStatus)[keyof typeof CompletionStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type CompletionStatus = $Enums.CompletionStatus

export const CompletionStatus: typeof $Enums.CompletionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.businesses`: Exposes CRUD operations for the **Businesses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Businesses
    * const businesses = await prisma.businesses.findMany()
    * ```
    */
  get businesses(): Prisma.BusinessesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clients`: Exposes CRUD operations for the **Clients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.clients.findMany()
    * ```
    */
  get clients(): Prisma.ClientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **Notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.NotificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.measurements`: Exposes CRUD operations for the **Measurements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Measurements
    * const measurements = await prisma.measurements.findMany()
    * ```
    */
  get measurements(): Prisma.MeasurementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **Payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.PaymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.income`: Exposes CRUD operations for the **Income** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incomes
    * const incomes = await prisma.income.findMany()
    * ```
    */
  get income(): Prisma.IncomeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expenses`: Exposes CRUD operations for the **Expenses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expenses.findMany()
    * ```
    */
  get expenses(): Prisma.ExpensesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.financialRecord`: Exposes CRUD operations for the **FinancialRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinancialRecords
    * const financialRecords = await prisma.financialRecord.findMany()
    * ```
    */
  get financialRecord(): Prisma.FinancialRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.events`: Exposes CRUD operations for the **Events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.EventsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Businesses: 'Businesses',
    Clients: 'Clients',
    Notifications: 'Notifications',
    Measurements: 'Measurements',
    Orders: 'Orders',
    Payments: 'Payments',
    Income: 'Income',
    Expenses: 'Expenses',
    FinancialRecord: 'FinancialRecord',
    Events: 'Events'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "businesses" | "clients" | "notifications" | "measurements" | "orders" | "payments" | "income" | "expenses" | "financialRecord" | "events"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Businesses: {
        payload: Prisma.$BusinessesPayload<ExtArgs>
        fields: Prisma.BusinessesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessesPayload>
          }
          findFirst: {
            args: Prisma.BusinessesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessesPayload>
          }
          findMany: {
            args: Prisma.BusinessesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessesPayload>[]
          }
          create: {
            args: Prisma.BusinessesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessesPayload>
          }
          createMany: {
            args: Prisma.BusinessesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessesPayload>[]
          }
          delete: {
            args: Prisma.BusinessesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessesPayload>
          }
          update: {
            args: Prisma.BusinessesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessesPayload>
          }
          deleteMany: {
            args: Prisma.BusinessesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessesPayload>[]
          }
          upsert: {
            args: Prisma.BusinessesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessesPayload>
          }
          aggregate: {
            args: Prisma.BusinessesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinesses>
          }
          groupBy: {
            args: Prisma.BusinessesGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessesGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessesCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessesCountAggregateOutputType> | number
          }
        }
      }
      Clients: {
        payload: Prisma.$ClientsPayload<ExtArgs>
        fields: Prisma.ClientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          findFirst: {
            args: Prisma.ClientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          findMany: {
            args: Prisma.ClientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>[]
          }
          create: {
            args: Prisma.ClientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          createMany: {
            args: Prisma.ClientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>[]
          }
          delete: {
            args: Prisma.ClientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          update: {
            args: Prisma.ClientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          deleteMany: {
            args: Prisma.ClientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>[]
          }
          upsert: {
            args: Prisma.ClientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          aggregate: {
            args: Prisma.ClientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClients>
          }
          groupBy: {
            args: Prisma.ClientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientsCountArgs<ExtArgs>
            result: $Utils.Optional<ClientsCountAggregateOutputType> | number
          }
        }
      }
      Notifications: {
        payload: Prisma.$NotificationsPayload<ExtArgs>
        fields: Prisma.NotificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findFirst: {
            args: Prisma.NotificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findMany: {
            args: Prisma.NotificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          create: {
            args: Prisma.NotificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          createMany: {
            args: Prisma.NotificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          delete: {
            args: Prisma.NotificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          update: {
            args: Prisma.NotificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          deleteMany: {
            args: Prisma.NotificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          upsert: {
            args: Prisma.NotificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.NotificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      Measurements: {
        payload: Prisma.$MeasurementsPayload<ExtArgs>
        fields: Prisma.MeasurementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeasurementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeasurementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementsPayload>
          }
          findFirst: {
            args: Prisma.MeasurementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeasurementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementsPayload>
          }
          findMany: {
            args: Prisma.MeasurementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementsPayload>[]
          }
          create: {
            args: Prisma.MeasurementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementsPayload>
          }
          createMany: {
            args: Prisma.MeasurementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeasurementsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementsPayload>[]
          }
          delete: {
            args: Prisma.MeasurementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementsPayload>
          }
          update: {
            args: Prisma.MeasurementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementsPayload>
          }
          deleteMany: {
            args: Prisma.MeasurementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeasurementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeasurementsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementsPayload>[]
          }
          upsert: {
            args: Prisma.MeasurementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementsPayload>
          }
          aggregate: {
            args: Prisma.MeasurementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeasurements>
          }
          groupBy: {
            args: Prisma.MeasurementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeasurementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeasurementsCountArgs<ExtArgs>
            result: $Utils.Optional<MeasurementsCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      Payments: {
        payload: Prisma.$PaymentsPayload<ExtArgs>
        fields: Prisma.PaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findFirst: {
            args: Prisma.PaymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findMany: {
            args: Prisma.PaymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          create: {
            args: Prisma.PaymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          createMany: {
            args: Prisma.PaymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          delete: {
            args: Prisma.PaymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          update: {
            args: Prisma.PaymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          upsert: {
            args: Prisma.PaymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.PaymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      Income: {
        payload: Prisma.$IncomePayload<ExtArgs>
        fields: Prisma.IncomeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncomeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncomeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>
          }
          findFirst: {
            args: Prisma.IncomeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncomeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>
          }
          findMany: {
            args: Prisma.IncomeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>[]
          }
          create: {
            args: Prisma.IncomeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>
          }
          createMany: {
            args: Prisma.IncomeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncomeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>[]
          }
          delete: {
            args: Prisma.IncomeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>
          }
          update: {
            args: Prisma.IncomeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>
          }
          deleteMany: {
            args: Prisma.IncomeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncomeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncomeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>[]
          }
          upsert: {
            args: Prisma.IncomeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>
          }
          aggregate: {
            args: Prisma.IncomeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncome>
          }
          groupBy: {
            args: Prisma.IncomeGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncomeGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncomeCountArgs<ExtArgs>
            result: $Utils.Optional<IncomeCountAggregateOutputType> | number
          }
        }
      }
      Expenses: {
        payload: Prisma.$ExpensesPayload<ExtArgs>
        fields: Prisma.ExpensesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpensesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpensesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>
          }
          findFirst: {
            args: Prisma.ExpensesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpensesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>
          }
          findMany: {
            args: Prisma.ExpensesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>[]
          }
          create: {
            args: Prisma.ExpensesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>
          }
          createMany: {
            args: Prisma.ExpensesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpensesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>[]
          }
          delete: {
            args: Prisma.ExpensesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>
          }
          update: {
            args: Prisma.ExpensesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>
          }
          deleteMany: {
            args: Prisma.ExpensesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpensesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpensesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>[]
          }
          upsert: {
            args: Prisma.ExpensesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>
          }
          aggregate: {
            args: Prisma.ExpensesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenses>
          }
          groupBy: {
            args: Prisma.ExpensesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpensesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpensesCountArgs<ExtArgs>
            result: $Utils.Optional<ExpensesCountAggregateOutputType> | number
          }
        }
      }
      FinancialRecord: {
        payload: Prisma.$FinancialRecordPayload<ExtArgs>
        fields: Prisma.FinancialRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinancialRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinancialRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialRecordPayload>
          }
          findFirst: {
            args: Prisma.FinancialRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinancialRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialRecordPayload>
          }
          findMany: {
            args: Prisma.FinancialRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialRecordPayload>[]
          }
          create: {
            args: Prisma.FinancialRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialRecordPayload>
          }
          createMany: {
            args: Prisma.FinancialRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinancialRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialRecordPayload>[]
          }
          delete: {
            args: Prisma.FinancialRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialRecordPayload>
          }
          update: {
            args: Prisma.FinancialRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialRecordPayload>
          }
          deleteMany: {
            args: Prisma.FinancialRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinancialRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinancialRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialRecordPayload>[]
          }
          upsert: {
            args: Prisma.FinancialRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialRecordPayload>
          }
          aggregate: {
            args: Prisma.FinancialRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinancialRecord>
          }
          groupBy: {
            args: Prisma.FinancialRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinancialRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinancialRecordCountArgs<ExtArgs>
            result: $Utils.Optional<FinancialRecordCountAggregateOutputType> | number
          }
        }
      }
      Events: {
        payload: Prisma.$EventsPayload<ExtArgs>
        fields: Prisma.EventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          findFirst: {
            args: Prisma.EventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          findMany: {
            args: Prisma.EventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          create: {
            args: Prisma.EventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          createMany: {
            args: Prisma.EventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          delete: {
            args: Prisma.EventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          update: {
            args: Prisma.EventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          deleteMany: {
            args: Prisma.EventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          upsert: {
            args: Prisma.EventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          aggregate: {
            args: Prisma.EventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvents>
          }
          groupBy: {
            args: Prisma.EventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventsCountArgs<ExtArgs>
            result: $Utils.Optional<EventsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    businesses?: BusinessesOmit
    clients?: ClientsOmit
    notifications?: NotificationsOmit
    measurements?: MeasurementsOmit
    orders?: OrdersOmit
    payments?: PaymentsOmit
    income?: IncomeOmit
    expenses?: ExpensesOmit
    financialRecord?: FinancialRecordOmit
    events?: EventsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    notifications: number
    events: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | UsersCountOutputTypeCountNotificationsArgs
    events?: boolean | UsersCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventsWhereInput
  }


  /**
   * Count Type BusinessesCountOutputType
   */

  export type BusinessesCountOutputType = {
    clients: number
    orders: number
    financialRecords: number
    income: number
    expenses: number
  }

  export type BusinessesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | BusinessesCountOutputTypeCountClientsArgs
    orders?: boolean | BusinessesCountOutputTypeCountOrdersArgs
    financialRecords?: boolean | BusinessesCountOutputTypeCountFinancialRecordsArgs
    income?: boolean | BusinessesCountOutputTypeCountIncomeArgs
    expenses?: boolean | BusinessesCountOutputTypeCountExpensesArgs
  }

  // Custom InputTypes
  /**
   * BusinessesCountOutputType without action
   */
  export type BusinessesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessesCountOutputType
     */
    select?: BusinessesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusinessesCountOutputType without action
   */
  export type BusinessesCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientsWhereInput
  }

  /**
   * BusinessesCountOutputType without action
   */
  export type BusinessesCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }

  /**
   * BusinessesCountOutputType without action
   */
  export type BusinessesCountOutputTypeCountFinancialRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialRecordWhereInput
  }

  /**
   * BusinessesCountOutputType without action
   */
  export type BusinessesCountOutputTypeCountIncomeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncomeWhereInput
  }

  /**
   * BusinessesCountOutputType without action
   */
  export type BusinessesCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpensesWhereInput
  }


  /**
   * Count Type ClientsCountOutputType
   */

  export type ClientsCountOutputType = {
    orders: number
  }

  export type ClientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ClientsCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientsCountOutputType
     */
    select?: ClientsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    Fname: string | null
    Sname: string | null
    email: string | null
    role: $Enums.Role | null
    phone: string | null
    profile_url: string | null
    accountStatus: boolean | null
    password: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    Fname: string | null
    Sname: string | null
    email: string | null
    role: $Enums.Role | null
    phone: string | null
    profile_url: string | null
    accountStatus: boolean | null
    password: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    Fname: number
    Sname: number
    email: number
    role: number
    phone: number
    profile_url: number
    accountStatus: number
    password: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    Fname?: true
    Sname?: true
    email?: true
    role?: true
    phone?: true
    profile_url?: true
    accountStatus?: true
    password?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    Fname?: true
    Sname?: true
    email?: true
    role?: true
    phone?: true
    profile_url?: true
    accountStatus?: true
    password?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    Fname?: true
    Sname?: true
    email?: true
    role?: true
    phone?: true
    profile_url?: true
    accountStatus?: true
    password?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    Fname: string
    Sname: string
    email: string
    role: $Enums.Role
    phone: string | null
    profile_url: string | null
    accountStatus: boolean
    password: string
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Fname?: boolean
    Sname?: boolean
    email?: boolean
    role?: boolean
    phone?: boolean
    profile_url?: boolean
    accountStatus?: boolean
    password?: boolean
    notifications?: boolean | Users$notificationsArgs<ExtArgs>
    events?: boolean | Users$eventsArgs<ExtArgs>
    business?: boolean | Users$businessArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Fname?: boolean
    Sname?: boolean
    email?: boolean
    role?: boolean
    phone?: boolean
    profile_url?: boolean
    accountStatus?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Fname?: boolean
    Sname?: boolean
    email?: boolean
    role?: boolean
    phone?: boolean
    profile_url?: boolean
    accountStatus?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    Fname?: boolean
    Sname?: boolean
    email?: boolean
    role?: boolean
    phone?: boolean
    profile_url?: boolean
    accountStatus?: boolean
    password?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Fname" | "Sname" | "email" | "role" | "phone" | "profile_url" | "accountStatus" | "password", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | Users$notificationsArgs<ExtArgs>
    events?: boolean | Users$eventsArgs<ExtArgs>
    business?: boolean | Users$businessArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      notifications: Prisma.$NotificationsPayload<ExtArgs>[]
      events: Prisma.$EventsPayload<ExtArgs>[]
      business: Prisma.$BusinessesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      Fname: string
      Sname: string
      email: string
      role: $Enums.Role
      phone: string | null
      profile_url: string | null
      accountStatus: boolean
      password: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notifications<T extends Users$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Users$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends Users$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Users$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    business<T extends Users$businessArgs<ExtArgs> = {}>(args?: Subset<T, Users$businessArgs<ExtArgs>>): Prisma__BusinessesClient<$Result.GetResult<Prisma.$BusinessesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly Fname: FieldRef<"Users", 'String'>
    readonly Sname: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'Role'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly profile_url: FieldRef<"Users", 'String'>
    readonly accountStatus: FieldRef<"Users", 'Boolean'>
    readonly password: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.notifications
   */
  export type Users$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    cursor?: NotificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Users.events
   */
  export type Users$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    where?: EventsWhereInput
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    cursor?: EventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Users.business
   */
  export type Users$businessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Businesses
     */
    select?: BusinessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Businesses
     */
    omit?: BusinessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessesInclude<ExtArgs> | null
    where?: BusinessesWhereInput
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Businesses
   */

  export type AggregateBusinesses = {
    _count: BusinessesCountAggregateOutputType | null
    _min: BusinessesMinAggregateOutputType | null
    _max: BusinessesMaxAggregateOutputType | null
  }

  export type BusinessesMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    currency: string | null
    logo: string | null
    userId: string | null
  }

  export type BusinessesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    currency: string | null
    logo: string | null
    userId: string | null
  }

  export type BusinessesCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    address: number
    currency: number
    logo: number
    userId: number
    _all: number
  }


  export type BusinessesMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    currency?: true
    logo?: true
    userId?: true
  }

  export type BusinessesMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    currency?: true
    logo?: true
    userId?: true
  }

  export type BusinessesCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    currency?: true
    logo?: true
    userId?: true
    _all?: true
  }

  export type BusinessesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Businesses to aggregate.
     */
    where?: BusinessesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessesOrderByWithRelationInput | BusinessesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Businesses
    **/
    _count?: true | BusinessesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessesMaxAggregateInputType
  }

  export type GetBusinessesAggregateType<T extends BusinessesAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinesses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinesses[P]>
      : GetScalarType<T[P], AggregateBusinesses[P]>
  }




  export type BusinessesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessesWhereInput
    orderBy?: BusinessesOrderByWithAggregationInput | BusinessesOrderByWithAggregationInput[]
    by: BusinessesScalarFieldEnum[] | BusinessesScalarFieldEnum
    having?: BusinessesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessesCountAggregateInputType | true
    _min?: BusinessesMinAggregateInputType
    _max?: BusinessesMaxAggregateInputType
  }

  export type BusinessesGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    address: string
    currency: string
    logo: string | null
    userId: string
    _count: BusinessesCountAggregateOutputType | null
    _min: BusinessesMinAggregateOutputType | null
    _max: BusinessesMaxAggregateOutputType | null
  }

  type GetBusinessesGroupByPayload<T extends BusinessesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessesGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessesGroupByOutputType[P]>
        }
      >
    >


  export type BusinessesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    currency?: boolean
    logo?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    clients?: boolean | Businesses$clientsArgs<ExtArgs>
    orders?: boolean | Businesses$ordersArgs<ExtArgs>
    financialRecords?: boolean | Businesses$financialRecordsArgs<ExtArgs>
    income?: boolean | Businesses$incomeArgs<ExtArgs>
    expenses?: boolean | Businesses$expensesArgs<ExtArgs>
    _count?: boolean | BusinessesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businesses"]>

  export type BusinessesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    currency?: boolean
    logo?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businesses"]>

  export type BusinessesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    currency?: boolean
    logo?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businesses"]>

  export type BusinessesSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    currency?: boolean
    logo?: boolean
    userId?: boolean
  }

  export type BusinessesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "address" | "currency" | "logo" | "userId", ExtArgs["result"]["businesses"]>
  export type BusinessesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    clients?: boolean | Businesses$clientsArgs<ExtArgs>
    orders?: boolean | Businesses$ordersArgs<ExtArgs>
    financialRecords?: boolean | Businesses$financialRecordsArgs<ExtArgs>
    income?: boolean | Businesses$incomeArgs<ExtArgs>
    expenses?: boolean | Businesses$expensesArgs<ExtArgs>
    _count?: boolean | BusinessesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusinessesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type BusinessesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $BusinessesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Businesses"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      clients: Prisma.$ClientsPayload<ExtArgs>[]
      orders: Prisma.$OrdersPayload<ExtArgs>[]
      financialRecords: Prisma.$FinancialRecordPayload<ExtArgs>[]
      income: Prisma.$IncomePayload<ExtArgs>[]
      expenses: Prisma.$ExpensesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      address: string
      currency: string
      logo: string | null
      userId: string
    }, ExtArgs["result"]["businesses"]>
    composites: {}
  }

  type BusinessesGetPayload<S extends boolean | null | undefined | BusinessesDefaultArgs> = $Result.GetResult<Prisma.$BusinessesPayload, S>

  type BusinessesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessesCountAggregateInputType | true
    }

  export interface BusinessesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Businesses'], meta: { name: 'Businesses' } }
    /**
     * Find zero or one Businesses that matches the filter.
     * @param {BusinessesFindUniqueArgs} args - Arguments to find a Businesses
     * @example
     * // Get one Businesses
     * const businesses = await prisma.businesses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessesFindUniqueArgs>(args: SelectSubset<T, BusinessesFindUniqueArgs<ExtArgs>>): Prisma__BusinessesClient<$Result.GetResult<Prisma.$BusinessesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Businesses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessesFindUniqueOrThrowArgs} args - Arguments to find a Businesses
     * @example
     * // Get one Businesses
     * const businesses = await prisma.businesses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessesFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessesClient<$Result.GetResult<Prisma.$BusinessesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessesFindFirstArgs} args - Arguments to find a Businesses
     * @example
     * // Get one Businesses
     * const businesses = await prisma.businesses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessesFindFirstArgs>(args?: SelectSubset<T, BusinessesFindFirstArgs<ExtArgs>>): Prisma__BusinessesClient<$Result.GetResult<Prisma.$BusinessesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Businesses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessesFindFirstOrThrowArgs} args - Arguments to find a Businesses
     * @example
     * // Get one Businesses
     * const businesses = await prisma.businesses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessesFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessesFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessesClient<$Result.GetResult<Prisma.$BusinessesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businesses
     * const businesses = await prisma.businesses.findMany()
     * 
     * // Get first 10 Businesses
     * const businesses = await prisma.businesses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessesWithIdOnly = await prisma.businesses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessesFindManyArgs>(args?: SelectSubset<T, BusinessesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Businesses.
     * @param {BusinessesCreateArgs} args - Arguments to create a Businesses.
     * @example
     * // Create one Businesses
     * const Businesses = await prisma.businesses.create({
     *   data: {
     *     // ... data to create a Businesses
     *   }
     * })
     * 
     */
    create<T extends BusinessesCreateArgs>(args: SelectSubset<T, BusinessesCreateArgs<ExtArgs>>): Prisma__BusinessesClient<$Result.GetResult<Prisma.$BusinessesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Businesses.
     * @param {BusinessesCreateManyArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const businesses = await prisma.businesses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessesCreateManyArgs>(args?: SelectSubset<T, BusinessesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Businesses and returns the data saved in the database.
     * @param {BusinessesCreateManyAndReturnArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const businesses = await prisma.businesses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Businesses and only return the `id`
     * const businessesWithIdOnly = await prisma.businesses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessesCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Businesses.
     * @param {BusinessesDeleteArgs} args - Arguments to delete one Businesses.
     * @example
     * // Delete one Businesses
     * const Businesses = await prisma.businesses.delete({
     *   where: {
     *     // ... filter to delete one Businesses
     *   }
     * })
     * 
     */
    delete<T extends BusinessesDeleteArgs>(args: SelectSubset<T, BusinessesDeleteArgs<ExtArgs>>): Prisma__BusinessesClient<$Result.GetResult<Prisma.$BusinessesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Businesses.
     * @param {BusinessesUpdateArgs} args - Arguments to update one Businesses.
     * @example
     * // Update one Businesses
     * const businesses = await prisma.businesses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessesUpdateArgs>(args: SelectSubset<T, BusinessesUpdateArgs<ExtArgs>>): Prisma__BusinessesClient<$Result.GetResult<Prisma.$BusinessesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Businesses.
     * @param {BusinessesDeleteManyArgs} args - Arguments to filter Businesses to delete.
     * @example
     * // Delete a few Businesses
     * const { count } = await prisma.businesses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessesDeleteManyArgs>(args?: SelectSubset<T, BusinessesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businesses
     * const businesses = await prisma.businesses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessesUpdateManyArgs>(args: SelectSubset<T, BusinessesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses and returns the data updated in the database.
     * @param {BusinessesUpdateManyAndReturnArgs} args - Arguments to update many Businesses.
     * @example
     * // Update many Businesses
     * const businesses = await prisma.businesses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Businesses and only return the `id`
     * const businessesWithIdOnly = await prisma.businesses.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusinessesUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Businesses.
     * @param {BusinessesUpsertArgs} args - Arguments to update or create a Businesses.
     * @example
     * // Update or create a Businesses
     * const businesses = await prisma.businesses.upsert({
     *   create: {
     *     // ... data to create a Businesses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Businesses we want to update
     *   }
     * })
     */
    upsert<T extends BusinessesUpsertArgs>(args: SelectSubset<T, BusinessesUpsertArgs<ExtArgs>>): Prisma__BusinessesClient<$Result.GetResult<Prisma.$BusinessesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessesCountArgs} args - Arguments to filter Businesses to count.
     * @example
     * // Count the number of Businesses
     * const count = await prisma.businesses.count({
     *   where: {
     *     // ... the filter for the Businesses we want to count
     *   }
     * })
    **/
    count<T extends BusinessesCountArgs>(
      args?: Subset<T, BusinessesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessesAggregateArgs>(args: Subset<T, BusinessesAggregateArgs>): Prisma.PrismaPromise<GetBusinessesAggregateType<T>>

    /**
     * Group by Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessesGroupByArgs['orderBy'] }
        : { orderBy?: BusinessesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Businesses model
   */
  readonly fields: BusinessesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Businesses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    clients<T extends Businesses$clientsArgs<ExtArgs> = {}>(args?: Subset<T, Businesses$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Businesses$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Businesses$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    financialRecords<T extends Businesses$financialRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Businesses$financialRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    income<T extends Businesses$incomeArgs<ExtArgs> = {}>(args?: Subset<T, Businesses$incomeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends Businesses$expensesArgs<ExtArgs> = {}>(args?: Subset<T, Businesses$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Businesses model
   */
  interface BusinessesFieldRefs {
    readonly id: FieldRef<"Businesses", 'String'>
    readonly name: FieldRef<"Businesses", 'String'>
    readonly email: FieldRef<"Businesses", 'String'>
    readonly phone: FieldRef<"Businesses", 'String'>
    readonly address: FieldRef<"Businesses", 'String'>
    readonly currency: FieldRef<"Businesses", 'String'>
    readonly logo: FieldRef<"Businesses", 'String'>
    readonly userId: FieldRef<"Businesses", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Businesses findUnique
   */
  export type BusinessesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Businesses
     */
    select?: BusinessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Businesses
     */
    omit?: BusinessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessesInclude<ExtArgs> | null
    /**
     * Filter, which Businesses to fetch.
     */
    where: BusinessesWhereUniqueInput
  }

  /**
   * Businesses findUniqueOrThrow
   */
  export type BusinessesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Businesses
     */
    select?: BusinessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Businesses
     */
    omit?: BusinessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessesInclude<ExtArgs> | null
    /**
     * Filter, which Businesses to fetch.
     */
    where: BusinessesWhereUniqueInput
  }

  /**
   * Businesses findFirst
   */
  export type BusinessesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Businesses
     */
    select?: BusinessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Businesses
     */
    omit?: BusinessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessesInclude<ExtArgs> | null
    /**
     * Filter, which Businesses to fetch.
     */
    where?: BusinessesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessesOrderByWithRelationInput | BusinessesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessesScalarFieldEnum | BusinessesScalarFieldEnum[]
  }

  /**
   * Businesses findFirstOrThrow
   */
  export type BusinessesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Businesses
     */
    select?: BusinessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Businesses
     */
    omit?: BusinessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessesInclude<ExtArgs> | null
    /**
     * Filter, which Businesses to fetch.
     */
    where?: BusinessesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessesOrderByWithRelationInput | BusinessesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessesScalarFieldEnum | BusinessesScalarFieldEnum[]
  }

  /**
   * Businesses findMany
   */
  export type BusinessesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Businesses
     */
    select?: BusinessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Businesses
     */
    omit?: BusinessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessesInclude<ExtArgs> | null
    /**
     * Filter, which Businesses to fetch.
     */
    where?: BusinessesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessesOrderByWithRelationInput | BusinessesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Businesses.
     */
    cursor?: BusinessesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessesScalarFieldEnum | BusinessesScalarFieldEnum[]
  }

  /**
   * Businesses create
   */
  export type BusinessesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Businesses
     */
    select?: BusinessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Businesses
     */
    omit?: BusinessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessesInclude<ExtArgs> | null
    /**
     * The data needed to create a Businesses.
     */
    data: XOR<BusinessesCreateInput, BusinessesUncheckedCreateInput>
  }

  /**
   * Businesses createMany
   */
  export type BusinessesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Businesses.
     */
    data: BusinessesCreateManyInput | BusinessesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Businesses createManyAndReturn
   */
  export type BusinessesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Businesses
     */
    select?: BusinessesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Businesses
     */
    omit?: BusinessesOmit<ExtArgs> | null
    /**
     * The data used to create many Businesses.
     */
    data: BusinessesCreateManyInput | BusinessesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Businesses update
   */
  export type BusinessesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Businesses
     */
    select?: BusinessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Businesses
     */
    omit?: BusinessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessesInclude<ExtArgs> | null
    /**
     * The data needed to update a Businesses.
     */
    data: XOR<BusinessesUpdateInput, BusinessesUncheckedUpdateInput>
    /**
     * Choose, which Businesses to update.
     */
    where: BusinessesWhereUniqueInput
  }

  /**
   * Businesses updateMany
   */
  export type BusinessesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessesUpdateManyMutationInput, BusinessesUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessesWhereInput
    /**
     * Limit how many Businesses to update.
     */
    limit?: number
  }

  /**
   * Businesses updateManyAndReturn
   */
  export type BusinessesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Businesses
     */
    select?: BusinessesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Businesses
     */
    omit?: BusinessesOmit<ExtArgs> | null
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessesUpdateManyMutationInput, BusinessesUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessesWhereInput
    /**
     * Limit how many Businesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Businesses upsert
   */
  export type BusinessesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Businesses
     */
    select?: BusinessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Businesses
     */
    omit?: BusinessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessesInclude<ExtArgs> | null
    /**
     * The filter to search for the Businesses to update in case it exists.
     */
    where: BusinessesWhereUniqueInput
    /**
     * In case the Businesses found by the `where` argument doesn't exist, create a new Businesses with this data.
     */
    create: XOR<BusinessesCreateInput, BusinessesUncheckedCreateInput>
    /**
     * In case the Businesses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessesUpdateInput, BusinessesUncheckedUpdateInput>
  }

  /**
   * Businesses delete
   */
  export type BusinessesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Businesses
     */
    select?: BusinessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Businesses
     */
    omit?: BusinessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessesInclude<ExtArgs> | null
    /**
     * Filter which Businesses to delete.
     */
    where: BusinessesWhereUniqueInput
  }

  /**
   * Businesses deleteMany
   */
  export type BusinessesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Businesses to delete
     */
    where?: BusinessesWhereInput
    /**
     * Limit how many Businesses to delete.
     */
    limit?: number
  }

  /**
   * Businesses.clients
   */
  export type Businesses$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    where?: ClientsWhereInput
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    cursor?: ClientsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Businesses.orders
   */
  export type Businesses$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Businesses.financialRecords
   */
  export type Businesses$financialRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRecord
     */
    select?: FinancialRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRecord
     */
    omit?: FinancialRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRecordInclude<ExtArgs> | null
    where?: FinancialRecordWhereInput
    orderBy?: FinancialRecordOrderByWithRelationInput | FinancialRecordOrderByWithRelationInput[]
    cursor?: FinancialRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinancialRecordScalarFieldEnum | FinancialRecordScalarFieldEnum[]
  }

  /**
   * Businesses.income
   */
  export type Businesses$incomeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    where?: IncomeWhereInput
    orderBy?: IncomeOrderByWithRelationInput | IncomeOrderByWithRelationInput[]
    cursor?: IncomeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncomeScalarFieldEnum | IncomeScalarFieldEnum[]
  }

  /**
   * Businesses.expenses
   */
  export type Businesses$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesInclude<ExtArgs> | null
    where?: ExpensesWhereInput
    orderBy?: ExpensesOrderByWithRelationInput | ExpensesOrderByWithRelationInput[]
    cursor?: ExpensesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * Businesses without action
   */
  export type BusinessesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Businesses
     */
    select?: BusinessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Businesses
     */
    omit?: BusinessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessesInclude<ExtArgs> | null
  }


  /**
   * Model Clients
   */

  export type AggregateClients = {
    _count: ClientsCountAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  export type ClientsMinAggregateOutputType = {
    id: string | null
    Fname: string | null
    Sname: string | null
    email: string | null
    phone: string | null
    businessId: string | null
    activeOrder: boolean | null
  }

  export type ClientsMaxAggregateOutputType = {
    id: string | null
    Fname: string | null
    Sname: string | null
    email: string | null
    phone: string | null
    businessId: string | null
    activeOrder: boolean | null
  }

  export type ClientsCountAggregateOutputType = {
    id: number
    Fname: number
    Sname: number
    email: number
    phone: number
    businessId: number
    activeOrder: number
    _all: number
  }


  export type ClientsMinAggregateInputType = {
    id?: true
    Fname?: true
    Sname?: true
    email?: true
    phone?: true
    businessId?: true
    activeOrder?: true
  }

  export type ClientsMaxAggregateInputType = {
    id?: true
    Fname?: true
    Sname?: true
    email?: true
    phone?: true
    businessId?: true
    activeOrder?: true
  }

  export type ClientsCountAggregateInputType = {
    id?: true
    Fname?: true
    Sname?: true
    email?: true
    phone?: true
    businessId?: true
    activeOrder?: true
    _all?: true
  }

  export type ClientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to aggregate.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientsMaxAggregateInputType
  }

  export type GetClientsAggregateType<T extends ClientsAggregateArgs> = {
        [P in keyof T & keyof AggregateClients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClients[P]>
      : GetScalarType<T[P], AggregateClients[P]>
  }




  export type ClientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientsWhereInput
    orderBy?: ClientsOrderByWithAggregationInput | ClientsOrderByWithAggregationInput[]
    by: ClientsScalarFieldEnum[] | ClientsScalarFieldEnum
    having?: ClientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientsCountAggregateInputType | true
    _min?: ClientsMinAggregateInputType
    _max?: ClientsMaxAggregateInputType
  }

  export type ClientsGroupByOutputType = {
    id: string
    Fname: string
    Sname: string
    email: string | null
    phone: string
    businessId: string
    activeOrder: boolean
    _count: ClientsCountAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  type GetClientsGroupByPayload<T extends ClientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientsGroupByOutputType[P]>
            : GetScalarType<T[P], ClientsGroupByOutputType[P]>
        }
      >
    >


  export type ClientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Fname?: boolean
    Sname?: boolean
    email?: boolean
    phone?: boolean
    businessId?: boolean
    activeOrder?: boolean
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
    measurements?: boolean | Clients$measurementsArgs<ExtArgs>
    orders?: boolean | Clients$ordersArgs<ExtArgs>
    _count?: boolean | ClientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clients"]>

  export type ClientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Fname?: boolean
    Sname?: boolean
    email?: boolean
    phone?: boolean
    businessId?: boolean
    activeOrder?: boolean
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clients"]>

  export type ClientsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Fname?: boolean
    Sname?: boolean
    email?: boolean
    phone?: boolean
    businessId?: boolean
    activeOrder?: boolean
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clients"]>

  export type ClientsSelectScalar = {
    id?: boolean
    Fname?: boolean
    Sname?: boolean
    email?: boolean
    phone?: boolean
    businessId?: boolean
    activeOrder?: boolean
  }

  export type ClientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Fname" | "Sname" | "email" | "phone" | "businessId" | "activeOrder", ExtArgs["result"]["clients"]>
  export type ClientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
    measurements?: boolean | Clients$measurementsArgs<ExtArgs>
    orders?: boolean | Clients$ordersArgs<ExtArgs>
    _count?: boolean | ClientsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
  }
  export type ClientsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
  }

  export type $ClientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clients"
    objects: {
      business: Prisma.$BusinessesPayload<ExtArgs>
      measurements: Prisma.$MeasurementsPayload<ExtArgs> | null
      orders: Prisma.$OrdersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      Fname: string
      Sname: string
      email: string | null
      phone: string
      businessId: string
      activeOrder: boolean
    }, ExtArgs["result"]["clients"]>
    composites: {}
  }

  type ClientsGetPayload<S extends boolean | null | undefined | ClientsDefaultArgs> = $Result.GetResult<Prisma.$ClientsPayload, S>

  type ClientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientsCountAggregateInputType | true
    }

  export interface ClientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clients'], meta: { name: 'Clients' } }
    /**
     * Find zero or one Clients that matches the filter.
     * @param {ClientsFindUniqueArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientsFindUniqueArgs>(args: SelectSubset<T, ClientsFindUniqueArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientsFindUniqueOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientsFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindFirstArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientsFindFirstArgs>(args?: SelectSubset<T, ClientsFindFirstArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindFirstOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientsFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.clients.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.clients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientsWithIdOnly = await prisma.clients.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientsFindManyArgs>(args?: SelectSubset<T, ClientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clients.
     * @param {ClientsCreateArgs} args - Arguments to create a Clients.
     * @example
     * // Create one Clients
     * const Clients = await prisma.clients.create({
     *   data: {
     *     // ... data to create a Clients
     *   }
     * })
     * 
     */
    create<T extends ClientsCreateArgs>(args: SelectSubset<T, ClientsCreateArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientsCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const clients = await prisma.clients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientsCreateManyArgs>(args?: SelectSubset<T, ClientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientsCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const clients = await prisma.clients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientsWithIdOnly = await prisma.clients.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientsCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clients.
     * @param {ClientsDeleteArgs} args - Arguments to delete one Clients.
     * @example
     * // Delete one Clients
     * const Clients = await prisma.clients.delete({
     *   where: {
     *     // ... filter to delete one Clients
     *   }
     * })
     * 
     */
    delete<T extends ClientsDeleteArgs>(args: SelectSubset<T, ClientsDeleteArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clients.
     * @param {ClientsUpdateArgs} args - Arguments to update one Clients.
     * @example
     * // Update one Clients
     * const clients = await prisma.clients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientsUpdateArgs>(args: SelectSubset<T, ClientsUpdateArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientsDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.clients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientsDeleteManyArgs>(args?: SelectSubset<T, ClientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const clients = await prisma.clients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientsUpdateManyArgs>(args: SelectSubset<T, ClientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientsUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const clients = await prisma.clients.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientsWithIdOnly = await prisma.clients.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientsUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clients.
     * @param {ClientsUpsertArgs} args - Arguments to update or create a Clients.
     * @example
     * // Update or create a Clients
     * const clients = await prisma.clients.upsert({
     *   create: {
     *     // ... data to create a Clients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clients we want to update
     *   }
     * })
     */
    upsert<T extends ClientsUpsertArgs>(args: SelectSubset<T, ClientsUpsertArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.clients.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientsCountArgs>(
      args?: Subset<T, ClientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientsAggregateArgs>(args: Subset<T, ClientsAggregateArgs>): Prisma.PrismaPromise<GetClientsAggregateType<T>>

    /**
     * Group by Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientsGroupByArgs['orderBy'] }
        : { orderBy?: ClientsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clients model
   */
  readonly fields: ClientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessesDefaultArgs<ExtArgs>>): Prisma__BusinessesClient<$Result.GetResult<Prisma.$BusinessesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    measurements<T extends Clients$measurementsArgs<ExtArgs> = {}>(args?: Subset<T, Clients$measurementsArgs<ExtArgs>>): Prisma__MeasurementsClient<$Result.GetResult<Prisma.$MeasurementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends Clients$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Clients$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Clients model
   */
  interface ClientsFieldRefs {
    readonly id: FieldRef<"Clients", 'String'>
    readonly Fname: FieldRef<"Clients", 'String'>
    readonly Sname: FieldRef<"Clients", 'String'>
    readonly email: FieldRef<"Clients", 'String'>
    readonly phone: FieldRef<"Clients", 'String'>
    readonly businessId: FieldRef<"Clients", 'String'>
    readonly activeOrder: FieldRef<"Clients", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Clients findUnique
   */
  export type ClientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients findUniqueOrThrow
   */
  export type ClientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients findFirst
   */
  export type ClientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Clients findFirstOrThrow
   */
  export type ClientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Clients findMany
   */
  export type ClientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Clients create
   */
  export type ClientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The data needed to create a Clients.
     */
    data: XOR<ClientsCreateInput, ClientsUncheckedCreateInput>
  }

  /**
   * Clients createMany
   */
  export type ClientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientsCreateManyInput | ClientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clients createManyAndReturn
   */
  export type ClientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientsCreateManyInput | ClientsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Clients update
   */
  export type ClientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The data needed to update a Clients.
     */
    data: XOR<ClientsUpdateInput, ClientsUncheckedUpdateInput>
    /**
     * Choose, which Clients to update.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients updateMany
   */
  export type ClientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientsUpdateManyMutationInput, ClientsUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientsWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Clients updateManyAndReturn
   */
  export type ClientsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientsUpdateManyMutationInput, ClientsUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientsWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Clients upsert
   */
  export type ClientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The filter to search for the Clients to update in case it exists.
     */
    where: ClientsWhereUniqueInput
    /**
     * In case the Clients found by the `where` argument doesn't exist, create a new Clients with this data.
     */
    create: XOR<ClientsCreateInput, ClientsUncheckedCreateInput>
    /**
     * In case the Clients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientsUpdateInput, ClientsUncheckedUpdateInput>
  }

  /**
   * Clients delete
   */
  export type ClientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter which Clients to delete.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients deleteMany
   */
  export type ClientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientsWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Clients.measurements
   */
  export type Clients$measurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurements
     */
    select?: MeasurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurements
     */
    omit?: MeasurementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementsInclude<ExtArgs> | null
    where?: MeasurementsWhereInput
  }

  /**
   * Clients.orders
   */
  export type Clients$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Clients without action
   */
  export type ClientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
  }


  /**
   * Model Notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    read: boolean | null
    type: string | null
    message: string | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    read: boolean | null
    type: string | null
    message: string | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    read: number
    type: number
    message: number
    _all: number
  }


  export type NotificationsMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    read?: true
    type?: true
    message?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    read?: true
    type?: true
    message?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    read?: true
    type?: true
    message?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to aggregate.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type NotificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithAggregationInput | NotificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: NotificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: string
    userId: string
    createdAt: Date
    read: boolean
    type: string
    message: string
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends NotificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type NotificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    read?: boolean
    type?: boolean
    message?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    read?: boolean
    type?: boolean
    message?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    read?: boolean
    type?: boolean
    message?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    read?: boolean
    type?: boolean
    message?: boolean
  }

  export type NotificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "read" | "type" | "message", ExtArgs["result"]["notifications"]>
  export type NotificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type NotificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type NotificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $NotificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notifications"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      createdAt: Date
      read: boolean
      type: string
      message: string
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type NotificationsGetPayload<S extends boolean | null | undefined | NotificationsDefaultArgs> = $Result.GetResult<Prisma.$NotificationsPayload, S>

  type NotificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface NotificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notifications'], meta: { name: 'Notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {NotificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationsFindUniqueArgs>(args: SelectSubset<T, NotificationsFindUniqueArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationsFindFirstArgs>(args?: SelectSubset<T, NotificationsFindFirstArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationsFindManyArgs>(args?: SelectSubset<T, NotificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {NotificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends NotificationsCreateArgs>(args: SelectSubset<T, NotificationsCreateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationsCreateManyArgs>(args?: SelectSubset<T, NotificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationsCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notifications.
     * @param {NotificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends NotificationsDeleteArgs>(args: SelectSubset<T, NotificationsDeleteArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {NotificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationsUpdateArgs>(args: SelectSubset<T, NotificationsUpdateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationsDeleteManyArgs>(args?: SelectSubset<T, NotificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationsUpdateManyArgs>(args: SelectSubset<T, NotificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationsUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notifications.
     * @param {NotificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends NotificationsUpsertArgs>(args: SelectSubset<T, NotificationsUpsertArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationsCountArgs>(
      args?: Subset<T, NotificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationsGroupByArgs['orderBy'] }
        : { orderBy?: NotificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notifications model
   */
  readonly fields: NotificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notifications model
   */
  interface NotificationsFieldRefs {
    readonly id: FieldRef<"Notifications", 'String'>
    readonly userId: FieldRef<"Notifications", 'String'>
    readonly createdAt: FieldRef<"Notifications", 'DateTime'>
    readonly read: FieldRef<"Notifications", 'Boolean'>
    readonly type: FieldRef<"Notifications", 'String'>
    readonly message: FieldRef<"Notifications", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notifications findUnique
   */
  export type NotificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findUniqueOrThrow
   */
  export type NotificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findFirst
   */
  export type NotificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findFirstOrThrow
   */
  export type NotificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findMany
   */
  export type NotificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications create
   */
  export type NotificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Notifications.
     */
    data: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
  }

  /**
   * Notifications createMany
   */
  export type NotificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notifications createManyAndReturn
   */
  export type NotificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notifications update
   */
  export type NotificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Notifications.
     */
    data: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
    /**
     * Choose, which Notifications to update.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications updateMany
   */
  export type NotificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notifications updateManyAndReturn
   */
  export type NotificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notifications upsert
   */
  export type NotificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Notifications to update in case it exists.
     */
    where: NotificationsWhereUniqueInput
    /**
     * In case the Notifications found by the `where` argument doesn't exist, create a new Notifications with this data.
     */
    create: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
    /**
     * In case the Notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
  }

  /**
   * Notifications delete
   */
  export type NotificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter which Notifications to delete.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications deleteMany
   */
  export type NotificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notifications without action
   */
  export type NotificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
  }


  /**
   * Model Measurements
   */

  export type AggregateMeasurements = {
    _count: MeasurementsCountAggregateOutputType | null
    _min: MeasurementsMinAggregateOutputType | null
    _max: MeasurementsMaxAggregateOutputType | null
  }

  export type MeasurementsMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    height: string | null
    shoulders: string | null
    hand: string | null
    chest: string | null
    waist: string | null
    hips: string | null
  }

  export type MeasurementsMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    height: string | null
    shoulders: string | null
    hand: string | null
    chest: string | null
    waist: string | null
    hips: string | null
  }

  export type MeasurementsCountAggregateOutputType = {
    id: number
    clientId: number
    height: number
    shoulders: number
    hand: number
    chest: number
    waist: number
    hips: number
    _all: number
  }


  export type MeasurementsMinAggregateInputType = {
    id?: true
    clientId?: true
    height?: true
    shoulders?: true
    hand?: true
    chest?: true
    waist?: true
    hips?: true
  }

  export type MeasurementsMaxAggregateInputType = {
    id?: true
    clientId?: true
    height?: true
    shoulders?: true
    hand?: true
    chest?: true
    waist?: true
    hips?: true
  }

  export type MeasurementsCountAggregateInputType = {
    id?: true
    clientId?: true
    height?: true
    shoulders?: true
    hand?: true
    chest?: true
    waist?: true
    hips?: true
    _all?: true
  }

  export type MeasurementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Measurements to aggregate.
     */
    where?: MeasurementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measurements to fetch.
     */
    orderBy?: MeasurementsOrderByWithRelationInput | MeasurementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeasurementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Measurements
    **/
    _count?: true | MeasurementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeasurementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeasurementsMaxAggregateInputType
  }

  export type GetMeasurementsAggregateType<T extends MeasurementsAggregateArgs> = {
        [P in keyof T & keyof AggregateMeasurements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeasurements[P]>
      : GetScalarType<T[P], AggregateMeasurements[P]>
  }




  export type MeasurementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeasurementsWhereInput
    orderBy?: MeasurementsOrderByWithAggregationInput | MeasurementsOrderByWithAggregationInput[]
    by: MeasurementsScalarFieldEnum[] | MeasurementsScalarFieldEnum
    having?: MeasurementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeasurementsCountAggregateInputType | true
    _min?: MeasurementsMinAggregateInputType
    _max?: MeasurementsMaxAggregateInputType
  }

  export type MeasurementsGroupByOutputType = {
    id: string
    clientId: string
    height: string
    shoulders: string
    hand: string
    chest: string
    waist: string
    hips: string
    _count: MeasurementsCountAggregateOutputType | null
    _min: MeasurementsMinAggregateOutputType | null
    _max: MeasurementsMaxAggregateOutputType | null
  }

  type GetMeasurementsGroupByPayload<T extends MeasurementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeasurementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeasurementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeasurementsGroupByOutputType[P]>
            : GetScalarType<T[P], MeasurementsGroupByOutputType[P]>
        }
      >
    >


  export type MeasurementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    height?: boolean
    shoulders?: boolean
    hand?: boolean
    chest?: boolean
    waist?: boolean
    hips?: boolean
    client?: boolean | ClientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measurements"]>

  export type MeasurementsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    height?: boolean
    shoulders?: boolean
    hand?: boolean
    chest?: boolean
    waist?: boolean
    hips?: boolean
    client?: boolean | ClientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measurements"]>

  export type MeasurementsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    height?: boolean
    shoulders?: boolean
    hand?: boolean
    chest?: boolean
    waist?: boolean
    hips?: boolean
    client?: boolean | ClientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measurements"]>

  export type MeasurementsSelectScalar = {
    id?: boolean
    clientId?: boolean
    height?: boolean
    shoulders?: boolean
    hand?: boolean
    chest?: boolean
    waist?: boolean
    hips?: boolean
  }

  export type MeasurementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "height" | "shoulders" | "hand" | "chest" | "waist" | "hips", ExtArgs["result"]["measurements"]>
  export type MeasurementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientsDefaultArgs<ExtArgs>
  }
  export type MeasurementsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientsDefaultArgs<ExtArgs>
  }
  export type MeasurementsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientsDefaultArgs<ExtArgs>
  }

  export type $MeasurementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Measurements"
    objects: {
      client: Prisma.$ClientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      height: string
      shoulders: string
      hand: string
      chest: string
      waist: string
      hips: string
    }, ExtArgs["result"]["measurements"]>
    composites: {}
  }

  type MeasurementsGetPayload<S extends boolean | null | undefined | MeasurementsDefaultArgs> = $Result.GetResult<Prisma.$MeasurementsPayload, S>

  type MeasurementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeasurementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeasurementsCountAggregateInputType | true
    }

  export interface MeasurementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Measurements'], meta: { name: 'Measurements' } }
    /**
     * Find zero or one Measurements that matches the filter.
     * @param {MeasurementsFindUniqueArgs} args - Arguments to find a Measurements
     * @example
     * // Get one Measurements
     * const measurements = await prisma.measurements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeasurementsFindUniqueArgs>(args: SelectSubset<T, MeasurementsFindUniqueArgs<ExtArgs>>): Prisma__MeasurementsClient<$Result.GetResult<Prisma.$MeasurementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Measurements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeasurementsFindUniqueOrThrowArgs} args - Arguments to find a Measurements
     * @example
     * // Get one Measurements
     * const measurements = await prisma.measurements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeasurementsFindUniqueOrThrowArgs>(args: SelectSubset<T, MeasurementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeasurementsClient<$Result.GetResult<Prisma.$MeasurementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Measurements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementsFindFirstArgs} args - Arguments to find a Measurements
     * @example
     * // Get one Measurements
     * const measurements = await prisma.measurements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeasurementsFindFirstArgs>(args?: SelectSubset<T, MeasurementsFindFirstArgs<ExtArgs>>): Prisma__MeasurementsClient<$Result.GetResult<Prisma.$MeasurementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Measurements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementsFindFirstOrThrowArgs} args - Arguments to find a Measurements
     * @example
     * // Get one Measurements
     * const measurements = await prisma.measurements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeasurementsFindFirstOrThrowArgs>(args?: SelectSubset<T, MeasurementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeasurementsClient<$Result.GetResult<Prisma.$MeasurementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Measurements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Measurements
     * const measurements = await prisma.measurements.findMany()
     * 
     * // Get first 10 Measurements
     * const measurements = await prisma.measurements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const measurementsWithIdOnly = await prisma.measurements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeasurementsFindManyArgs>(args?: SelectSubset<T, MeasurementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Measurements.
     * @param {MeasurementsCreateArgs} args - Arguments to create a Measurements.
     * @example
     * // Create one Measurements
     * const Measurements = await prisma.measurements.create({
     *   data: {
     *     // ... data to create a Measurements
     *   }
     * })
     * 
     */
    create<T extends MeasurementsCreateArgs>(args: SelectSubset<T, MeasurementsCreateArgs<ExtArgs>>): Prisma__MeasurementsClient<$Result.GetResult<Prisma.$MeasurementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Measurements.
     * @param {MeasurementsCreateManyArgs} args - Arguments to create many Measurements.
     * @example
     * // Create many Measurements
     * const measurements = await prisma.measurements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeasurementsCreateManyArgs>(args?: SelectSubset<T, MeasurementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Measurements and returns the data saved in the database.
     * @param {MeasurementsCreateManyAndReturnArgs} args - Arguments to create many Measurements.
     * @example
     * // Create many Measurements
     * const measurements = await prisma.measurements.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Measurements and only return the `id`
     * const measurementsWithIdOnly = await prisma.measurements.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeasurementsCreateManyAndReturnArgs>(args?: SelectSubset<T, MeasurementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Measurements.
     * @param {MeasurementsDeleteArgs} args - Arguments to delete one Measurements.
     * @example
     * // Delete one Measurements
     * const Measurements = await prisma.measurements.delete({
     *   where: {
     *     // ... filter to delete one Measurements
     *   }
     * })
     * 
     */
    delete<T extends MeasurementsDeleteArgs>(args: SelectSubset<T, MeasurementsDeleteArgs<ExtArgs>>): Prisma__MeasurementsClient<$Result.GetResult<Prisma.$MeasurementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Measurements.
     * @param {MeasurementsUpdateArgs} args - Arguments to update one Measurements.
     * @example
     * // Update one Measurements
     * const measurements = await prisma.measurements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeasurementsUpdateArgs>(args: SelectSubset<T, MeasurementsUpdateArgs<ExtArgs>>): Prisma__MeasurementsClient<$Result.GetResult<Prisma.$MeasurementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Measurements.
     * @param {MeasurementsDeleteManyArgs} args - Arguments to filter Measurements to delete.
     * @example
     * // Delete a few Measurements
     * const { count } = await prisma.measurements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeasurementsDeleteManyArgs>(args?: SelectSubset<T, MeasurementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Measurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Measurements
     * const measurements = await prisma.measurements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeasurementsUpdateManyArgs>(args: SelectSubset<T, MeasurementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Measurements and returns the data updated in the database.
     * @param {MeasurementsUpdateManyAndReturnArgs} args - Arguments to update many Measurements.
     * @example
     * // Update many Measurements
     * const measurements = await prisma.measurements.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Measurements and only return the `id`
     * const measurementsWithIdOnly = await prisma.measurements.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MeasurementsUpdateManyAndReturnArgs>(args: SelectSubset<T, MeasurementsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Measurements.
     * @param {MeasurementsUpsertArgs} args - Arguments to update or create a Measurements.
     * @example
     * // Update or create a Measurements
     * const measurements = await prisma.measurements.upsert({
     *   create: {
     *     // ... data to create a Measurements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Measurements we want to update
     *   }
     * })
     */
    upsert<T extends MeasurementsUpsertArgs>(args: SelectSubset<T, MeasurementsUpsertArgs<ExtArgs>>): Prisma__MeasurementsClient<$Result.GetResult<Prisma.$MeasurementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Measurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementsCountArgs} args - Arguments to filter Measurements to count.
     * @example
     * // Count the number of Measurements
     * const count = await prisma.measurements.count({
     *   where: {
     *     // ... the filter for the Measurements we want to count
     *   }
     * })
    **/
    count<T extends MeasurementsCountArgs>(
      args?: Subset<T, MeasurementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeasurementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Measurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeasurementsAggregateArgs>(args: Subset<T, MeasurementsAggregateArgs>): Prisma.PrismaPromise<GetMeasurementsAggregateType<T>>

    /**
     * Group by Measurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeasurementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeasurementsGroupByArgs['orderBy'] }
        : { orderBy?: MeasurementsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeasurementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeasurementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Measurements model
   */
  readonly fields: MeasurementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Measurements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeasurementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientsDefaultArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Measurements model
   */
  interface MeasurementsFieldRefs {
    readonly id: FieldRef<"Measurements", 'String'>
    readonly clientId: FieldRef<"Measurements", 'String'>
    readonly height: FieldRef<"Measurements", 'String'>
    readonly shoulders: FieldRef<"Measurements", 'String'>
    readonly hand: FieldRef<"Measurements", 'String'>
    readonly chest: FieldRef<"Measurements", 'String'>
    readonly waist: FieldRef<"Measurements", 'String'>
    readonly hips: FieldRef<"Measurements", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Measurements findUnique
   */
  export type MeasurementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurements
     */
    select?: MeasurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurements
     */
    omit?: MeasurementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementsInclude<ExtArgs> | null
    /**
     * Filter, which Measurements to fetch.
     */
    where: MeasurementsWhereUniqueInput
  }

  /**
   * Measurements findUniqueOrThrow
   */
  export type MeasurementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurements
     */
    select?: MeasurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurements
     */
    omit?: MeasurementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementsInclude<ExtArgs> | null
    /**
     * Filter, which Measurements to fetch.
     */
    where: MeasurementsWhereUniqueInput
  }

  /**
   * Measurements findFirst
   */
  export type MeasurementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurements
     */
    select?: MeasurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurements
     */
    omit?: MeasurementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementsInclude<ExtArgs> | null
    /**
     * Filter, which Measurements to fetch.
     */
    where?: MeasurementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measurements to fetch.
     */
    orderBy?: MeasurementsOrderByWithRelationInput | MeasurementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Measurements.
     */
    cursor?: MeasurementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Measurements.
     */
    distinct?: MeasurementsScalarFieldEnum | MeasurementsScalarFieldEnum[]
  }

  /**
   * Measurements findFirstOrThrow
   */
  export type MeasurementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurements
     */
    select?: MeasurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurements
     */
    omit?: MeasurementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementsInclude<ExtArgs> | null
    /**
     * Filter, which Measurements to fetch.
     */
    where?: MeasurementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measurements to fetch.
     */
    orderBy?: MeasurementsOrderByWithRelationInput | MeasurementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Measurements.
     */
    cursor?: MeasurementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Measurements.
     */
    distinct?: MeasurementsScalarFieldEnum | MeasurementsScalarFieldEnum[]
  }

  /**
   * Measurements findMany
   */
  export type MeasurementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurements
     */
    select?: MeasurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurements
     */
    omit?: MeasurementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementsInclude<ExtArgs> | null
    /**
     * Filter, which Measurements to fetch.
     */
    where?: MeasurementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measurements to fetch.
     */
    orderBy?: MeasurementsOrderByWithRelationInput | MeasurementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Measurements.
     */
    cursor?: MeasurementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Measurements.
     */
    distinct?: MeasurementsScalarFieldEnum | MeasurementsScalarFieldEnum[]
  }

  /**
   * Measurements create
   */
  export type MeasurementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurements
     */
    select?: MeasurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurements
     */
    omit?: MeasurementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementsInclude<ExtArgs> | null
    /**
     * The data needed to create a Measurements.
     */
    data: XOR<MeasurementsCreateInput, MeasurementsUncheckedCreateInput>
  }

  /**
   * Measurements createMany
   */
  export type MeasurementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Measurements.
     */
    data: MeasurementsCreateManyInput | MeasurementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Measurements createManyAndReturn
   */
  export type MeasurementsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurements
     */
    select?: MeasurementsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Measurements
     */
    omit?: MeasurementsOmit<ExtArgs> | null
    /**
     * The data used to create many Measurements.
     */
    data: MeasurementsCreateManyInput | MeasurementsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Measurements update
   */
  export type MeasurementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurements
     */
    select?: MeasurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurements
     */
    omit?: MeasurementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementsInclude<ExtArgs> | null
    /**
     * The data needed to update a Measurements.
     */
    data: XOR<MeasurementsUpdateInput, MeasurementsUncheckedUpdateInput>
    /**
     * Choose, which Measurements to update.
     */
    where: MeasurementsWhereUniqueInput
  }

  /**
   * Measurements updateMany
   */
  export type MeasurementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Measurements.
     */
    data: XOR<MeasurementsUpdateManyMutationInput, MeasurementsUncheckedUpdateManyInput>
    /**
     * Filter which Measurements to update
     */
    where?: MeasurementsWhereInput
    /**
     * Limit how many Measurements to update.
     */
    limit?: number
  }

  /**
   * Measurements updateManyAndReturn
   */
  export type MeasurementsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurements
     */
    select?: MeasurementsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Measurements
     */
    omit?: MeasurementsOmit<ExtArgs> | null
    /**
     * The data used to update Measurements.
     */
    data: XOR<MeasurementsUpdateManyMutationInput, MeasurementsUncheckedUpdateManyInput>
    /**
     * Filter which Measurements to update
     */
    where?: MeasurementsWhereInput
    /**
     * Limit how many Measurements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Measurements upsert
   */
  export type MeasurementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurements
     */
    select?: MeasurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurements
     */
    omit?: MeasurementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementsInclude<ExtArgs> | null
    /**
     * The filter to search for the Measurements to update in case it exists.
     */
    where: MeasurementsWhereUniqueInput
    /**
     * In case the Measurements found by the `where` argument doesn't exist, create a new Measurements with this data.
     */
    create: XOR<MeasurementsCreateInput, MeasurementsUncheckedCreateInput>
    /**
     * In case the Measurements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeasurementsUpdateInput, MeasurementsUncheckedUpdateInput>
  }

  /**
   * Measurements delete
   */
  export type MeasurementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurements
     */
    select?: MeasurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurements
     */
    omit?: MeasurementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementsInclude<ExtArgs> | null
    /**
     * Filter which Measurements to delete.
     */
    where: MeasurementsWhereUniqueInput
  }

  /**
   * Measurements deleteMany
   */
  export type MeasurementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Measurements to delete
     */
    where?: MeasurementsWhereInput
    /**
     * Limit how many Measurements to delete.
     */
    limit?: number
  }

  /**
   * Measurements without action
   */
  export type MeasurementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurements
     */
    select?: MeasurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurements
     */
    omit?: MeasurementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementsInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersMinAggregateOutputType = {
    id: string | null
    item: string | null
    description: string | null
    collectionDate: Date | null
    completionStatus: $Enums.CompletionStatus | null
    businessId: string | null
    clientId: string | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: string | null
    item: string | null
    description: string | null
    collectionDate: Date | null
    completionStatus: $Enums.CompletionStatus | null
    businessId: string | null
    clientId: string | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    item: number
    description: number
    collectionDate: number
    completionStatus: number
    businessId: number
    clientId: number
    _all: number
  }


  export type OrdersMinAggregateInputType = {
    id?: true
    item?: true
    description?: true
    collectionDate?: true
    completionStatus?: true
    businessId?: true
    clientId?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    item?: true
    description?: true
    collectionDate?: true
    completionStatus?: true
    businessId?: true
    clientId?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    item?: true
    description?: true
    collectionDate?: true
    completionStatus?: true
    businessId?: true
    clientId?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: string
    item: string
    description: string | null
    collectionDate: Date
    completionStatus: $Enums.CompletionStatus
    businessId: string
    clientId: string
    _count: OrdersCountAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    description?: boolean
    collectionDate?: boolean
    completionStatus?: boolean
    businessId?: boolean
    clientId?: boolean
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
    client?: boolean | ClientsDefaultArgs<ExtArgs>
    payments?: boolean | Orders$paymentsArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    description?: boolean
    collectionDate?: boolean
    completionStatus?: boolean
    businessId?: boolean
    clientId?: boolean
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
    client?: boolean | ClientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    description?: boolean
    collectionDate?: boolean
    completionStatus?: boolean
    businessId?: boolean
    clientId?: boolean
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
    client?: boolean | ClientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    id?: boolean
    item?: boolean
    description?: boolean
    collectionDate?: boolean
    completionStatus?: boolean
    businessId?: boolean
    clientId?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "item" | "description" | "collectionDate" | "completionStatus" | "businessId" | "clientId", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
    client?: boolean | ClientsDefaultArgs<ExtArgs>
    payments?: boolean | Orders$paymentsArgs<ExtArgs>
  }
  export type OrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
    client?: boolean | ClientsDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
    client?: boolean | ClientsDefaultArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      business: Prisma.$BusinessesPayload<ExtArgs>
      client: Prisma.$ClientsPayload<ExtArgs>
      payments: Prisma.$PaymentsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      item: string
      description: string | null
      collectionDate: Date
      completionStatus: $Enums.CompletionStatus
      businessId: string
      clientId: string
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrdersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrdersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrdersUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessesDefaultArgs<ExtArgs>>): Prisma__BusinessesClient<$Result.GetResult<Prisma.$BusinessesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends ClientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientsDefaultArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Orders$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Orders$paymentsArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'String'>
    readonly item: FieldRef<"Orders", 'String'>
    readonly description: FieldRef<"Orders", 'String'>
    readonly collectionDate: FieldRef<"Orders", 'DateTime'>
    readonly completionStatus: FieldRef<"Orders", 'CompletionStatus'>
    readonly businessId: FieldRef<"Orders", 'String'>
    readonly clientId: FieldRef<"Orders", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders createManyAndReturn
   */
  export type OrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders updateManyAndReturn
   */
  export type OrdersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders.payments
   */
  export type Orders$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    where?: PaymentsWhereInput
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model Payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    paidAmount: number | null
    totalAmount: number | null
  }

  export type PaymentsSumAggregateOutputType = {
    paidAmount: number | null
    totalAmount: number | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    paidAmount: number | null
    totalAmount: number | null
    createdAt: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    paidAmount: number | null
    totalAmount: number | null
    createdAt: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    orderId: number
    paidAmount: number
    totalAmount: number
    createdAt: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    paidAmount?: true
    totalAmount?: true
  }

  export type PaymentsSumAggregateInputType = {
    paidAmount?: true
    totalAmount?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    orderId?: true
    paidAmount?: true
    totalAmount?: true
    createdAt?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    orderId?: true
    paidAmount?: true
    totalAmount?: true
    createdAt?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    orderId?: true
    paidAmount?: true
    totalAmount?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to aggregate.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type PaymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithAggregationInput | PaymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: PaymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: string
    orderId: string
    paidAmount: number
    totalAmount: number
    createdAt: Date
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends PaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    paidAmount?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    paidAmount?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    paidAmount?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectScalar = {
    id?: boolean
    orderId?: boolean
    paidAmount?: boolean
    totalAmount?: boolean
    createdAt?: boolean
  }

  export type PaymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "paidAmount" | "totalAmount" | "createdAt", ExtArgs["result"]["payments"]>
  export type PaymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }
  export type PaymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }
  export type PaymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }

  export type $PaymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payments"
    objects: {
      order: Prisma.$OrdersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      paidAmount: number
      totalAmount: number
      createdAt: Date
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type PaymentsGetPayload<S extends boolean | null | undefined | PaymentsDefaultArgs> = $Result.GetResult<Prisma.$PaymentsPayload, S>

  type PaymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface PaymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payments'], meta: { name: 'Payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {PaymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentsFindUniqueArgs>(args: SelectSubset<T, PaymentsFindUniqueArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentsFindFirstArgs>(args?: SelectSubset<T, PaymentsFindFirstArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentsFindManyArgs>(args?: SelectSubset<T, PaymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {PaymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends PaymentsCreateArgs>(args: SelectSubset<T, PaymentsCreateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentsCreateManyArgs>(args?: SelectSubset<T, PaymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentsCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payments.
     * @param {PaymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends PaymentsDeleteArgs>(args: SelectSubset<T, PaymentsDeleteArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {PaymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentsUpdateArgs>(args: SelectSubset<T, PaymentsUpdateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentsDeleteManyArgs>(args?: SelectSubset<T, PaymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentsUpdateManyArgs>(args: SelectSubset<T, PaymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentsUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payments.
     * @param {PaymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends PaymentsUpsertArgs>(args: SelectSubset<T, PaymentsUpsertArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentsCountArgs>(
      args?: Subset<T, PaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payments model
   */
  readonly fields: PaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payments model
   */
  interface PaymentsFieldRefs {
    readonly id: FieldRef<"Payments", 'String'>
    readonly orderId: FieldRef<"Payments", 'String'>
    readonly paidAmount: FieldRef<"Payments", 'Float'>
    readonly totalAmount: FieldRef<"Payments", 'Float'>
    readonly createdAt: FieldRef<"Payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payments findUnique
   */
  export type PaymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findUniqueOrThrow
   */
  export type PaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findFirst
   */
  export type PaymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findFirstOrThrow
   */
  export type PaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findMany
   */
  export type PaymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments create
   */
  export type PaymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Payments.
     */
    data: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
  }

  /**
   * Payments createMany
   */
  export type PaymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payments createManyAndReturn
   */
  export type PaymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payments update
   */
  export type PaymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Payments.
     */
    data: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
    /**
     * Choose, which Payments to update.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments updateMany
   */
  export type PaymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payments updateManyAndReturn
   */
  export type PaymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payments upsert
   */
  export type PaymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Payments to update in case it exists.
     */
    where: PaymentsWhereUniqueInput
    /**
     * In case the Payments found by the `where` argument doesn't exist, create a new Payments with this data.
     */
    create: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
    /**
     * In case the Payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
  }

  /**
   * Payments delete
   */
  export type PaymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter which Payments to delete.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments deleteMany
   */
  export type PaymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payments without action
   */
  export type PaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
  }


  /**
   * Model Income
   */

  export type AggregateIncome = {
    _count: IncomeCountAggregateOutputType | null
    _avg: IncomeAvgAggregateOutputType | null
    _sum: IncomeSumAggregateOutputType | null
    _min: IncomeMinAggregateOutputType | null
    _max: IncomeMaxAggregateOutputType | null
  }

  export type IncomeAvgAggregateOutputType = {
    amount: number | null
  }

  export type IncomeSumAggregateOutputType = {
    amount: number | null
  }

  export type IncomeMinAggregateOutputType = {
    id: string | null
    amount: number | null
    businessId: string | null
    description: string | null
    createdAt: Date | null
    category: string | null
  }

  export type IncomeMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    businessId: string | null
    description: string | null
    createdAt: Date | null
    category: string | null
  }

  export type IncomeCountAggregateOutputType = {
    id: number
    amount: number
    businessId: number
    description: number
    createdAt: number
    category: number
    _all: number
  }


  export type IncomeAvgAggregateInputType = {
    amount?: true
  }

  export type IncomeSumAggregateInputType = {
    amount?: true
  }

  export type IncomeMinAggregateInputType = {
    id?: true
    amount?: true
    businessId?: true
    description?: true
    createdAt?: true
    category?: true
  }

  export type IncomeMaxAggregateInputType = {
    id?: true
    amount?: true
    businessId?: true
    description?: true
    createdAt?: true
    category?: true
  }

  export type IncomeCountAggregateInputType = {
    id?: true
    amount?: true
    businessId?: true
    description?: true
    createdAt?: true
    category?: true
    _all?: true
  }

  export type IncomeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Income to aggregate.
     */
    where?: IncomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incomes to fetch.
     */
    orderBy?: IncomeOrderByWithRelationInput | IncomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Incomes
    **/
    _count?: true | IncomeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncomeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncomeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncomeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncomeMaxAggregateInputType
  }

  export type GetIncomeAggregateType<T extends IncomeAggregateArgs> = {
        [P in keyof T & keyof AggregateIncome]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncome[P]>
      : GetScalarType<T[P], AggregateIncome[P]>
  }




  export type IncomeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncomeWhereInput
    orderBy?: IncomeOrderByWithAggregationInput | IncomeOrderByWithAggregationInput[]
    by: IncomeScalarFieldEnum[] | IncomeScalarFieldEnum
    having?: IncomeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncomeCountAggregateInputType | true
    _avg?: IncomeAvgAggregateInputType
    _sum?: IncomeSumAggregateInputType
    _min?: IncomeMinAggregateInputType
    _max?: IncomeMaxAggregateInputType
  }

  export type IncomeGroupByOutputType = {
    id: string
    amount: number
    businessId: string
    description: string
    createdAt: Date
    category: string
    _count: IncomeCountAggregateOutputType | null
    _avg: IncomeAvgAggregateOutputType | null
    _sum: IncomeSumAggregateOutputType | null
    _min: IncomeMinAggregateOutputType | null
    _max: IncomeMaxAggregateOutputType | null
  }

  type GetIncomeGroupByPayload<T extends IncomeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncomeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncomeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncomeGroupByOutputType[P]>
            : GetScalarType<T[P], IncomeGroupByOutputType[P]>
        }
      >
    >


  export type IncomeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    businessId?: boolean
    description?: boolean
    createdAt?: boolean
    category?: boolean
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["income"]>

  export type IncomeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    businessId?: boolean
    description?: boolean
    createdAt?: boolean
    category?: boolean
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["income"]>

  export type IncomeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    businessId?: boolean
    description?: boolean
    createdAt?: boolean
    category?: boolean
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["income"]>

  export type IncomeSelectScalar = {
    id?: boolean
    amount?: boolean
    businessId?: boolean
    description?: boolean
    createdAt?: boolean
    category?: boolean
  }

  export type IncomeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "businessId" | "description" | "createdAt" | "category", ExtArgs["result"]["income"]>
  export type IncomeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
  }
  export type IncomeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
  }
  export type IncomeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
  }

  export type $IncomePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Income"
    objects: {
      business: Prisma.$BusinessesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      businessId: string
      description: string
      createdAt: Date
      category: string
    }, ExtArgs["result"]["income"]>
    composites: {}
  }

  type IncomeGetPayload<S extends boolean | null | undefined | IncomeDefaultArgs> = $Result.GetResult<Prisma.$IncomePayload, S>

  type IncomeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncomeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncomeCountAggregateInputType | true
    }

  export interface IncomeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Income'], meta: { name: 'Income' } }
    /**
     * Find zero or one Income that matches the filter.
     * @param {IncomeFindUniqueArgs} args - Arguments to find a Income
     * @example
     * // Get one Income
     * const income = await prisma.income.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncomeFindUniqueArgs>(args: SelectSubset<T, IncomeFindUniqueArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Income that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncomeFindUniqueOrThrowArgs} args - Arguments to find a Income
     * @example
     * // Get one Income
     * const income = await prisma.income.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncomeFindUniqueOrThrowArgs>(args: SelectSubset<T, IncomeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Income that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeFindFirstArgs} args - Arguments to find a Income
     * @example
     * // Get one Income
     * const income = await prisma.income.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncomeFindFirstArgs>(args?: SelectSubset<T, IncomeFindFirstArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Income that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeFindFirstOrThrowArgs} args - Arguments to find a Income
     * @example
     * // Get one Income
     * const income = await prisma.income.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncomeFindFirstOrThrowArgs>(args?: SelectSubset<T, IncomeFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incomes
     * const incomes = await prisma.income.findMany()
     * 
     * // Get first 10 Incomes
     * const incomes = await prisma.income.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incomeWithIdOnly = await prisma.income.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncomeFindManyArgs>(args?: SelectSubset<T, IncomeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Income.
     * @param {IncomeCreateArgs} args - Arguments to create a Income.
     * @example
     * // Create one Income
     * const Income = await prisma.income.create({
     *   data: {
     *     // ... data to create a Income
     *   }
     * })
     * 
     */
    create<T extends IncomeCreateArgs>(args: SelectSubset<T, IncomeCreateArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Incomes.
     * @param {IncomeCreateManyArgs} args - Arguments to create many Incomes.
     * @example
     * // Create many Incomes
     * const income = await prisma.income.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncomeCreateManyArgs>(args?: SelectSubset<T, IncomeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Incomes and returns the data saved in the database.
     * @param {IncomeCreateManyAndReturnArgs} args - Arguments to create many Incomes.
     * @example
     * // Create many Incomes
     * const income = await prisma.income.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Incomes and only return the `id`
     * const incomeWithIdOnly = await prisma.income.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncomeCreateManyAndReturnArgs>(args?: SelectSubset<T, IncomeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Income.
     * @param {IncomeDeleteArgs} args - Arguments to delete one Income.
     * @example
     * // Delete one Income
     * const Income = await prisma.income.delete({
     *   where: {
     *     // ... filter to delete one Income
     *   }
     * })
     * 
     */
    delete<T extends IncomeDeleteArgs>(args: SelectSubset<T, IncomeDeleteArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Income.
     * @param {IncomeUpdateArgs} args - Arguments to update one Income.
     * @example
     * // Update one Income
     * const income = await prisma.income.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncomeUpdateArgs>(args: SelectSubset<T, IncomeUpdateArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Incomes.
     * @param {IncomeDeleteManyArgs} args - Arguments to filter Incomes to delete.
     * @example
     * // Delete a few Incomes
     * const { count } = await prisma.income.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncomeDeleteManyArgs>(args?: SelectSubset<T, IncomeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incomes
     * const income = await prisma.income.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncomeUpdateManyArgs>(args: SelectSubset<T, IncomeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incomes and returns the data updated in the database.
     * @param {IncomeUpdateManyAndReturnArgs} args - Arguments to update many Incomes.
     * @example
     * // Update many Incomes
     * const income = await prisma.income.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Incomes and only return the `id`
     * const incomeWithIdOnly = await prisma.income.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IncomeUpdateManyAndReturnArgs>(args: SelectSubset<T, IncomeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Income.
     * @param {IncomeUpsertArgs} args - Arguments to update or create a Income.
     * @example
     * // Update or create a Income
     * const income = await prisma.income.upsert({
     *   create: {
     *     // ... data to create a Income
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Income we want to update
     *   }
     * })
     */
    upsert<T extends IncomeUpsertArgs>(args: SelectSubset<T, IncomeUpsertArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Incomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeCountArgs} args - Arguments to filter Incomes to count.
     * @example
     * // Count the number of Incomes
     * const count = await prisma.income.count({
     *   where: {
     *     // ... the filter for the Incomes we want to count
     *   }
     * })
    **/
    count<T extends IncomeCountArgs>(
      args?: Subset<T, IncomeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncomeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Income.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncomeAggregateArgs>(args: Subset<T, IncomeAggregateArgs>): Prisma.PrismaPromise<GetIncomeAggregateType<T>>

    /**
     * Group by Income.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IncomeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncomeGroupByArgs['orderBy'] }
        : { orderBy?: IncomeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IncomeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncomeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Income model
   */
  readonly fields: IncomeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Income.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncomeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessesDefaultArgs<ExtArgs>>): Prisma__BusinessesClient<$Result.GetResult<Prisma.$BusinessesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Income model
   */
  interface IncomeFieldRefs {
    readonly id: FieldRef<"Income", 'String'>
    readonly amount: FieldRef<"Income", 'Float'>
    readonly businessId: FieldRef<"Income", 'String'>
    readonly description: FieldRef<"Income", 'String'>
    readonly createdAt: FieldRef<"Income", 'DateTime'>
    readonly category: FieldRef<"Income", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Income findUnique
   */
  export type IncomeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * Filter, which Income to fetch.
     */
    where: IncomeWhereUniqueInput
  }

  /**
   * Income findUniqueOrThrow
   */
  export type IncomeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * Filter, which Income to fetch.
     */
    where: IncomeWhereUniqueInput
  }

  /**
   * Income findFirst
   */
  export type IncomeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * Filter, which Income to fetch.
     */
    where?: IncomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incomes to fetch.
     */
    orderBy?: IncomeOrderByWithRelationInput | IncomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incomes.
     */
    cursor?: IncomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incomes.
     */
    distinct?: IncomeScalarFieldEnum | IncomeScalarFieldEnum[]
  }

  /**
   * Income findFirstOrThrow
   */
  export type IncomeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * Filter, which Income to fetch.
     */
    where?: IncomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incomes to fetch.
     */
    orderBy?: IncomeOrderByWithRelationInput | IncomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incomes.
     */
    cursor?: IncomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incomes.
     */
    distinct?: IncomeScalarFieldEnum | IncomeScalarFieldEnum[]
  }

  /**
   * Income findMany
   */
  export type IncomeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * Filter, which Incomes to fetch.
     */
    where?: IncomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incomes to fetch.
     */
    orderBy?: IncomeOrderByWithRelationInput | IncomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Incomes.
     */
    cursor?: IncomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incomes.
     */
    distinct?: IncomeScalarFieldEnum | IncomeScalarFieldEnum[]
  }

  /**
   * Income create
   */
  export type IncomeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * The data needed to create a Income.
     */
    data: XOR<IncomeCreateInput, IncomeUncheckedCreateInput>
  }

  /**
   * Income createMany
   */
  export type IncomeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Incomes.
     */
    data: IncomeCreateManyInput | IncomeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Income createManyAndReturn
   */
  export type IncomeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * The data used to create many Incomes.
     */
    data: IncomeCreateManyInput | IncomeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Income update
   */
  export type IncomeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * The data needed to update a Income.
     */
    data: XOR<IncomeUpdateInput, IncomeUncheckedUpdateInput>
    /**
     * Choose, which Income to update.
     */
    where: IncomeWhereUniqueInput
  }

  /**
   * Income updateMany
   */
  export type IncomeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Incomes.
     */
    data: XOR<IncomeUpdateManyMutationInput, IncomeUncheckedUpdateManyInput>
    /**
     * Filter which Incomes to update
     */
    where?: IncomeWhereInput
    /**
     * Limit how many Incomes to update.
     */
    limit?: number
  }

  /**
   * Income updateManyAndReturn
   */
  export type IncomeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * The data used to update Incomes.
     */
    data: XOR<IncomeUpdateManyMutationInput, IncomeUncheckedUpdateManyInput>
    /**
     * Filter which Incomes to update
     */
    where?: IncomeWhereInput
    /**
     * Limit how many Incomes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Income upsert
   */
  export type IncomeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * The filter to search for the Income to update in case it exists.
     */
    where: IncomeWhereUniqueInput
    /**
     * In case the Income found by the `where` argument doesn't exist, create a new Income with this data.
     */
    create: XOR<IncomeCreateInput, IncomeUncheckedCreateInput>
    /**
     * In case the Income was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncomeUpdateInput, IncomeUncheckedUpdateInput>
  }

  /**
   * Income delete
   */
  export type IncomeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * Filter which Income to delete.
     */
    where: IncomeWhereUniqueInput
  }

  /**
   * Income deleteMany
   */
  export type IncomeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incomes to delete
     */
    where?: IncomeWhereInput
    /**
     * Limit how many Incomes to delete.
     */
    limit?: number
  }

  /**
   * Income without action
   */
  export type IncomeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
  }


  /**
   * Model Expenses
   */

  export type AggregateExpenses = {
    _count: ExpensesCountAggregateOutputType | null
    _avg: ExpensesAvgAggregateOutputType | null
    _sum: ExpensesSumAggregateOutputType | null
    _min: ExpensesMinAggregateOutputType | null
    _max: ExpensesMaxAggregateOutputType | null
  }

  export type ExpensesAvgAggregateOutputType = {
    amount: number | null
  }

  export type ExpensesSumAggregateOutputType = {
    amount: number | null
  }

  export type ExpensesMinAggregateOutputType = {
    id: string | null
    amount: number | null
    businessId: string | null
    description: string | null
    createdAt: Date | null
    category: string | null
  }

  export type ExpensesMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    businessId: string | null
    description: string | null
    createdAt: Date | null
    category: string | null
  }

  export type ExpensesCountAggregateOutputType = {
    id: number
    amount: number
    businessId: number
    description: number
    createdAt: number
    category: number
    _all: number
  }


  export type ExpensesAvgAggregateInputType = {
    amount?: true
  }

  export type ExpensesSumAggregateInputType = {
    amount?: true
  }

  export type ExpensesMinAggregateInputType = {
    id?: true
    amount?: true
    businessId?: true
    description?: true
    createdAt?: true
    category?: true
  }

  export type ExpensesMaxAggregateInputType = {
    id?: true
    amount?: true
    businessId?: true
    description?: true
    createdAt?: true
    category?: true
  }

  export type ExpensesCountAggregateInputType = {
    id?: true
    amount?: true
    businessId?: true
    description?: true
    createdAt?: true
    category?: true
    _all?: true
  }

  export type ExpensesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to aggregate.
     */
    where?: ExpensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpensesOrderByWithRelationInput | ExpensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpensesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpensesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpensesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpensesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpensesMaxAggregateInputType
  }

  export type GetExpensesAggregateType<T extends ExpensesAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenses[P]>
      : GetScalarType<T[P], AggregateExpenses[P]>
  }




  export type ExpensesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpensesWhereInput
    orderBy?: ExpensesOrderByWithAggregationInput | ExpensesOrderByWithAggregationInput[]
    by: ExpensesScalarFieldEnum[] | ExpensesScalarFieldEnum
    having?: ExpensesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpensesCountAggregateInputType | true
    _avg?: ExpensesAvgAggregateInputType
    _sum?: ExpensesSumAggregateInputType
    _min?: ExpensesMinAggregateInputType
    _max?: ExpensesMaxAggregateInputType
  }

  export type ExpensesGroupByOutputType = {
    id: string
    amount: number
    businessId: string
    description: string
    createdAt: Date
    category: string
    _count: ExpensesCountAggregateOutputType | null
    _avg: ExpensesAvgAggregateOutputType | null
    _sum: ExpensesSumAggregateOutputType | null
    _min: ExpensesMinAggregateOutputType | null
    _max: ExpensesMaxAggregateOutputType | null
  }

  type GetExpensesGroupByPayload<T extends ExpensesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpensesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpensesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpensesGroupByOutputType[P]>
            : GetScalarType<T[P], ExpensesGroupByOutputType[P]>
        }
      >
    >


  export type ExpensesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    businessId?: boolean
    description?: boolean
    createdAt?: boolean
    category?: boolean
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenses"]>

  export type ExpensesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    businessId?: boolean
    description?: boolean
    createdAt?: boolean
    category?: boolean
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenses"]>

  export type ExpensesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    businessId?: boolean
    description?: boolean
    createdAt?: boolean
    category?: boolean
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenses"]>

  export type ExpensesSelectScalar = {
    id?: boolean
    amount?: boolean
    businessId?: boolean
    description?: boolean
    createdAt?: boolean
    category?: boolean
  }

  export type ExpensesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "businessId" | "description" | "createdAt" | "category", ExtArgs["result"]["expenses"]>
  export type ExpensesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
  }
  export type ExpensesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
  }
  export type ExpensesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
  }

  export type $ExpensesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expenses"
    objects: {
      business: Prisma.$BusinessesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      businessId: string
      description: string
      createdAt: Date
      category: string
    }, ExtArgs["result"]["expenses"]>
    composites: {}
  }

  type ExpensesGetPayload<S extends boolean | null | undefined | ExpensesDefaultArgs> = $Result.GetResult<Prisma.$ExpensesPayload, S>

  type ExpensesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpensesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpensesCountAggregateInputType | true
    }

  export interface ExpensesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expenses'], meta: { name: 'Expenses' } }
    /**
     * Find zero or one Expenses that matches the filter.
     * @param {ExpensesFindUniqueArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpensesFindUniqueArgs>(args: SelectSubset<T, ExpensesFindUniqueArgs<ExtArgs>>): Prisma__ExpensesClient<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expenses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpensesFindUniqueOrThrowArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpensesFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpensesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpensesClient<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesFindFirstArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpensesFindFirstArgs>(args?: SelectSubset<T, ExpensesFindFirstArgs<ExtArgs>>): Prisma__ExpensesClient<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expenses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesFindFirstOrThrowArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpensesFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpensesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpensesClient<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expenses.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expenses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expensesWithIdOnly = await prisma.expenses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpensesFindManyArgs>(args?: SelectSubset<T, ExpensesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expenses.
     * @param {ExpensesCreateArgs} args - Arguments to create a Expenses.
     * @example
     * // Create one Expenses
     * const Expenses = await prisma.expenses.create({
     *   data: {
     *     // ... data to create a Expenses
     *   }
     * })
     * 
     */
    create<T extends ExpensesCreateArgs>(args: SelectSubset<T, ExpensesCreateArgs<ExtArgs>>): Prisma__ExpensesClient<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {ExpensesCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expenses = await prisma.expenses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpensesCreateManyArgs>(args?: SelectSubset<T, ExpensesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpensesCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expenses = await prisma.expenses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expensesWithIdOnly = await prisma.expenses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpensesCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpensesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expenses.
     * @param {ExpensesDeleteArgs} args - Arguments to delete one Expenses.
     * @example
     * // Delete one Expenses
     * const Expenses = await prisma.expenses.delete({
     *   where: {
     *     // ... filter to delete one Expenses
     *   }
     * })
     * 
     */
    delete<T extends ExpensesDeleteArgs>(args: SelectSubset<T, ExpensesDeleteArgs<ExtArgs>>): Prisma__ExpensesClient<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expenses.
     * @param {ExpensesUpdateArgs} args - Arguments to update one Expenses.
     * @example
     * // Update one Expenses
     * const expenses = await prisma.expenses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpensesUpdateArgs>(args: SelectSubset<T, ExpensesUpdateArgs<ExtArgs>>): Prisma__ExpensesClient<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {ExpensesDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expenses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpensesDeleteManyArgs>(args?: SelectSubset<T, ExpensesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expenses = await prisma.expenses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpensesUpdateManyArgs>(args: SelectSubset<T, ExpensesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {ExpensesUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expenses = await prisma.expenses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `id`
     * const expensesWithIdOnly = await prisma.expenses.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpensesUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpensesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expenses.
     * @param {ExpensesUpsertArgs} args - Arguments to update or create a Expenses.
     * @example
     * // Update or create a Expenses
     * const expenses = await prisma.expenses.upsert({
     *   create: {
     *     // ... data to create a Expenses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expenses we want to update
     *   }
     * })
     */
    upsert<T extends ExpensesUpsertArgs>(args: SelectSubset<T, ExpensesUpsertArgs<ExtArgs>>): Prisma__ExpensesClient<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expenses.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpensesCountArgs>(
      args?: Subset<T, ExpensesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpensesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpensesAggregateArgs>(args: Subset<T, ExpensesAggregateArgs>): Prisma.PrismaPromise<GetExpensesAggregateType<T>>

    /**
     * Group by Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpensesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpensesGroupByArgs['orderBy'] }
        : { orderBy?: ExpensesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpensesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpensesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expenses model
   */
  readonly fields: ExpensesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expenses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpensesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessesDefaultArgs<ExtArgs>>): Prisma__BusinessesClient<$Result.GetResult<Prisma.$BusinessesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expenses model
   */
  interface ExpensesFieldRefs {
    readonly id: FieldRef<"Expenses", 'String'>
    readonly amount: FieldRef<"Expenses", 'Float'>
    readonly businessId: FieldRef<"Expenses", 'String'>
    readonly description: FieldRef<"Expenses", 'String'>
    readonly createdAt: FieldRef<"Expenses", 'DateTime'>
    readonly category: FieldRef<"Expenses", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Expenses findUnique
   */
  export type ExpensesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where: ExpensesWhereUniqueInput
  }

  /**
   * Expenses findUniqueOrThrow
   */
  export type ExpensesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where: ExpensesWhereUniqueInput
  }

  /**
   * Expenses findFirst
   */
  export type ExpensesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpensesOrderByWithRelationInput | ExpensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * Expenses findFirstOrThrow
   */
  export type ExpensesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpensesOrderByWithRelationInput | ExpensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * Expenses findMany
   */
  export type ExpensesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpensesOrderByWithRelationInput | ExpensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * Expenses create
   */
  export type ExpensesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesInclude<ExtArgs> | null
    /**
     * The data needed to create a Expenses.
     */
    data: XOR<ExpensesCreateInput, ExpensesUncheckedCreateInput>
  }

  /**
   * Expenses createMany
   */
  export type ExpensesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpensesCreateManyInput | ExpensesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expenses createManyAndReturn
   */
  export type ExpensesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpensesCreateManyInput | ExpensesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expenses update
   */
  export type ExpensesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesInclude<ExtArgs> | null
    /**
     * The data needed to update a Expenses.
     */
    data: XOR<ExpensesUpdateInput, ExpensesUncheckedUpdateInput>
    /**
     * Choose, which Expenses to update.
     */
    where: ExpensesWhereUniqueInput
  }

  /**
   * Expenses updateMany
   */
  export type ExpensesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpensesUpdateManyMutationInput, ExpensesUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpensesWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expenses updateManyAndReturn
   */
  export type ExpensesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpensesUpdateManyMutationInput, ExpensesUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpensesWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expenses upsert
   */
  export type ExpensesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesInclude<ExtArgs> | null
    /**
     * The filter to search for the Expenses to update in case it exists.
     */
    where: ExpensesWhereUniqueInput
    /**
     * In case the Expenses found by the `where` argument doesn't exist, create a new Expenses with this data.
     */
    create: XOR<ExpensesCreateInput, ExpensesUncheckedCreateInput>
    /**
     * In case the Expenses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpensesUpdateInput, ExpensesUncheckedUpdateInput>
  }

  /**
   * Expenses delete
   */
  export type ExpensesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesInclude<ExtArgs> | null
    /**
     * Filter which Expenses to delete.
     */
    where: ExpensesWhereUniqueInput
  }

  /**
   * Expenses deleteMany
   */
  export type ExpensesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpensesWhereInput
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number
  }

  /**
   * Expenses without action
   */
  export type ExpensesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesInclude<ExtArgs> | null
  }


  /**
   * Model FinancialRecord
   */

  export type AggregateFinancialRecord = {
    _count: FinancialRecordCountAggregateOutputType | null
    _avg: FinancialRecordAvgAggregateOutputType | null
    _sum: FinancialRecordSumAggregateOutputType | null
    _min: FinancialRecordMinAggregateOutputType | null
    _max: FinancialRecordMaxAggregateOutputType | null
  }

  export type FinancialRecordAvgAggregateOutputType = {
    income: number | null
    expenses: number | null
    profit: number | null
  }

  export type FinancialRecordSumAggregateOutputType = {
    income: number | null
    expenses: number | null
    profit: number | null
  }

  export type FinancialRecordMinAggregateOutputType = {
    id: string | null
    businessId: string | null
    date: Date | null
    income: number | null
    expenses: number | null
    profit: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinancialRecordMaxAggregateOutputType = {
    id: string | null
    businessId: string | null
    date: Date | null
    income: number | null
    expenses: number | null
    profit: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinancialRecordCountAggregateOutputType = {
    id: number
    businessId: number
    date: number
    income: number
    expenses: number
    profit: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FinancialRecordAvgAggregateInputType = {
    income?: true
    expenses?: true
    profit?: true
  }

  export type FinancialRecordSumAggregateInputType = {
    income?: true
    expenses?: true
    profit?: true
  }

  export type FinancialRecordMinAggregateInputType = {
    id?: true
    businessId?: true
    date?: true
    income?: true
    expenses?: true
    profit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinancialRecordMaxAggregateInputType = {
    id?: true
    businessId?: true
    date?: true
    income?: true
    expenses?: true
    profit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinancialRecordCountAggregateInputType = {
    id?: true
    businessId?: true
    date?: true
    income?: true
    expenses?: true
    profit?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FinancialRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialRecord to aggregate.
     */
    where?: FinancialRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialRecords to fetch.
     */
    orderBy?: FinancialRecordOrderByWithRelationInput | FinancialRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinancialRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinancialRecords
    **/
    _count?: true | FinancialRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinancialRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinancialRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinancialRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinancialRecordMaxAggregateInputType
  }

  export type GetFinancialRecordAggregateType<T extends FinancialRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateFinancialRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinancialRecord[P]>
      : GetScalarType<T[P], AggregateFinancialRecord[P]>
  }




  export type FinancialRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialRecordWhereInput
    orderBy?: FinancialRecordOrderByWithAggregationInput | FinancialRecordOrderByWithAggregationInput[]
    by: FinancialRecordScalarFieldEnum[] | FinancialRecordScalarFieldEnum
    having?: FinancialRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinancialRecordCountAggregateInputType | true
    _avg?: FinancialRecordAvgAggregateInputType
    _sum?: FinancialRecordSumAggregateInputType
    _min?: FinancialRecordMinAggregateInputType
    _max?: FinancialRecordMaxAggregateInputType
  }

  export type FinancialRecordGroupByOutputType = {
    id: string
    businessId: string
    date: Date
    income: number
    expenses: number
    profit: number
    createdAt: Date
    updatedAt: Date
    _count: FinancialRecordCountAggregateOutputType | null
    _avg: FinancialRecordAvgAggregateOutputType | null
    _sum: FinancialRecordSumAggregateOutputType | null
    _min: FinancialRecordMinAggregateOutputType | null
    _max: FinancialRecordMaxAggregateOutputType | null
  }

  type GetFinancialRecordGroupByPayload<T extends FinancialRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinancialRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinancialRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinancialRecordGroupByOutputType[P]>
            : GetScalarType<T[P], FinancialRecordGroupByOutputType[P]>
        }
      >
    >


  export type FinancialRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    date?: boolean
    income?: boolean
    expenses?: boolean
    profit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialRecord"]>

  export type FinancialRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    date?: boolean
    income?: boolean
    expenses?: boolean
    profit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialRecord"]>

  export type FinancialRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    date?: boolean
    income?: boolean
    expenses?: boolean
    profit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialRecord"]>

  export type FinancialRecordSelectScalar = {
    id?: boolean
    businessId?: boolean
    date?: boolean
    income?: boolean
    expenses?: boolean
    profit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FinancialRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "businessId" | "date" | "income" | "expenses" | "profit" | "createdAt" | "updatedAt", ExtArgs["result"]["financialRecord"]>
  export type FinancialRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
  }
  export type FinancialRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
  }
  export type FinancialRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessesDefaultArgs<ExtArgs>
  }

  export type $FinancialRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinancialRecord"
    objects: {
      business: Prisma.$BusinessesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      businessId: string
      date: Date
      income: number
      expenses: number
      profit: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["financialRecord"]>
    composites: {}
  }

  type FinancialRecordGetPayload<S extends boolean | null | undefined | FinancialRecordDefaultArgs> = $Result.GetResult<Prisma.$FinancialRecordPayload, S>

  type FinancialRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinancialRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinancialRecordCountAggregateInputType | true
    }

  export interface FinancialRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinancialRecord'], meta: { name: 'FinancialRecord' } }
    /**
     * Find zero or one FinancialRecord that matches the filter.
     * @param {FinancialRecordFindUniqueArgs} args - Arguments to find a FinancialRecord
     * @example
     * // Get one FinancialRecord
     * const financialRecord = await prisma.financialRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinancialRecordFindUniqueArgs>(args: SelectSubset<T, FinancialRecordFindUniqueArgs<ExtArgs>>): Prisma__FinancialRecordClient<$Result.GetResult<Prisma.$FinancialRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FinancialRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinancialRecordFindUniqueOrThrowArgs} args - Arguments to find a FinancialRecord
     * @example
     * // Get one FinancialRecord
     * const financialRecord = await prisma.financialRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinancialRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, FinancialRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinancialRecordClient<$Result.GetResult<Prisma.$FinancialRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancialRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialRecordFindFirstArgs} args - Arguments to find a FinancialRecord
     * @example
     * // Get one FinancialRecord
     * const financialRecord = await prisma.financialRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinancialRecordFindFirstArgs>(args?: SelectSubset<T, FinancialRecordFindFirstArgs<ExtArgs>>): Prisma__FinancialRecordClient<$Result.GetResult<Prisma.$FinancialRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancialRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialRecordFindFirstOrThrowArgs} args - Arguments to find a FinancialRecord
     * @example
     * // Get one FinancialRecord
     * const financialRecord = await prisma.financialRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinancialRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, FinancialRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinancialRecordClient<$Result.GetResult<Prisma.$FinancialRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FinancialRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinancialRecords
     * const financialRecords = await prisma.financialRecord.findMany()
     * 
     * // Get first 10 FinancialRecords
     * const financialRecords = await prisma.financialRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financialRecordWithIdOnly = await prisma.financialRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinancialRecordFindManyArgs>(args?: SelectSubset<T, FinancialRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FinancialRecord.
     * @param {FinancialRecordCreateArgs} args - Arguments to create a FinancialRecord.
     * @example
     * // Create one FinancialRecord
     * const FinancialRecord = await prisma.financialRecord.create({
     *   data: {
     *     // ... data to create a FinancialRecord
     *   }
     * })
     * 
     */
    create<T extends FinancialRecordCreateArgs>(args: SelectSubset<T, FinancialRecordCreateArgs<ExtArgs>>): Prisma__FinancialRecordClient<$Result.GetResult<Prisma.$FinancialRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FinancialRecords.
     * @param {FinancialRecordCreateManyArgs} args - Arguments to create many FinancialRecords.
     * @example
     * // Create many FinancialRecords
     * const financialRecord = await prisma.financialRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinancialRecordCreateManyArgs>(args?: SelectSubset<T, FinancialRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinancialRecords and returns the data saved in the database.
     * @param {FinancialRecordCreateManyAndReturnArgs} args - Arguments to create many FinancialRecords.
     * @example
     * // Create many FinancialRecords
     * const financialRecord = await prisma.financialRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinancialRecords and only return the `id`
     * const financialRecordWithIdOnly = await prisma.financialRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinancialRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, FinancialRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FinancialRecord.
     * @param {FinancialRecordDeleteArgs} args - Arguments to delete one FinancialRecord.
     * @example
     * // Delete one FinancialRecord
     * const FinancialRecord = await prisma.financialRecord.delete({
     *   where: {
     *     // ... filter to delete one FinancialRecord
     *   }
     * })
     * 
     */
    delete<T extends FinancialRecordDeleteArgs>(args: SelectSubset<T, FinancialRecordDeleteArgs<ExtArgs>>): Prisma__FinancialRecordClient<$Result.GetResult<Prisma.$FinancialRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FinancialRecord.
     * @param {FinancialRecordUpdateArgs} args - Arguments to update one FinancialRecord.
     * @example
     * // Update one FinancialRecord
     * const financialRecord = await prisma.financialRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinancialRecordUpdateArgs>(args: SelectSubset<T, FinancialRecordUpdateArgs<ExtArgs>>): Prisma__FinancialRecordClient<$Result.GetResult<Prisma.$FinancialRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FinancialRecords.
     * @param {FinancialRecordDeleteManyArgs} args - Arguments to filter FinancialRecords to delete.
     * @example
     * // Delete a few FinancialRecords
     * const { count } = await prisma.financialRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinancialRecordDeleteManyArgs>(args?: SelectSubset<T, FinancialRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinancialRecords
     * const financialRecord = await prisma.financialRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinancialRecordUpdateManyArgs>(args: SelectSubset<T, FinancialRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialRecords and returns the data updated in the database.
     * @param {FinancialRecordUpdateManyAndReturnArgs} args - Arguments to update many FinancialRecords.
     * @example
     * // Update many FinancialRecords
     * const financialRecord = await prisma.financialRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FinancialRecords and only return the `id`
     * const financialRecordWithIdOnly = await prisma.financialRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FinancialRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, FinancialRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FinancialRecord.
     * @param {FinancialRecordUpsertArgs} args - Arguments to update or create a FinancialRecord.
     * @example
     * // Update or create a FinancialRecord
     * const financialRecord = await prisma.financialRecord.upsert({
     *   create: {
     *     // ... data to create a FinancialRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinancialRecord we want to update
     *   }
     * })
     */
    upsert<T extends FinancialRecordUpsertArgs>(args: SelectSubset<T, FinancialRecordUpsertArgs<ExtArgs>>): Prisma__FinancialRecordClient<$Result.GetResult<Prisma.$FinancialRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FinancialRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialRecordCountArgs} args - Arguments to filter FinancialRecords to count.
     * @example
     * // Count the number of FinancialRecords
     * const count = await prisma.financialRecord.count({
     *   where: {
     *     // ... the filter for the FinancialRecords we want to count
     *   }
     * })
    **/
    count<T extends FinancialRecordCountArgs>(
      args?: Subset<T, FinancialRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinancialRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinancialRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FinancialRecordAggregateArgs>(args: Subset<T, FinancialRecordAggregateArgs>): Prisma.PrismaPromise<GetFinancialRecordAggregateType<T>>

    /**
     * Group by FinancialRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FinancialRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinancialRecordGroupByArgs['orderBy'] }
        : { orderBy?: FinancialRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FinancialRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinancialRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinancialRecord model
   */
  readonly fields: FinancialRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinancialRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinancialRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessesDefaultArgs<ExtArgs>>): Prisma__BusinessesClient<$Result.GetResult<Prisma.$BusinessesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FinancialRecord model
   */
  interface FinancialRecordFieldRefs {
    readonly id: FieldRef<"FinancialRecord", 'String'>
    readonly businessId: FieldRef<"FinancialRecord", 'String'>
    readonly date: FieldRef<"FinancialRecord", 'DateTime'>
    readonly income: FieldRef<"FinancialRecord", 'Float'>
    readonly expenses: FieldRef<"FinancialRecord", 'Float'>
    readonly profit: FieldRef<"FinancialRecord", 'Float'>
    readonly createdAt: FieldRef<"FinancialRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"FinancialRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FinancialRecord findUnique
   */
  export type FinancialRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRecord
     */
    select?: FinancialRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRecord
     */
    omit?: FinancialRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRecordInclude<ExtArgs> | null
    /**
     * Filter, which FinancialRecord to fetch.
     */
    where: FinancialRecordWhereUniqueInput
  }

  /**
   * FinancialRecord findUniqueOrThrow
   */
  export type FinancialRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRecord
     */
    select?: FinancialRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRecord
     */
    omit?: FinancialRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRecordInclude<ExtArgs> | null
    /**
     * Filter, which FinancialRecord to fetch.
     */
    where: FinancialRecordWhereUniqueInput
  }

  /**
   * FinancialRecord findFirst
   */
  export type FinancialRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRecord
     */
    select?: FinancialRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRecord
     */
    omit?: FinancialRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRecordInclude<ExtArgs> | null
    /**
     * Filter, which FinancialRecord to fetch.
     */
    where?: FinancialRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialRecords to fetch.
     */
    orderBy?: FinancialRecordOrderByWithRelationInput | FinancialRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialRecords.
     */
    cursor?: FinancialRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialRecords.
     */
    distinct?: FinancialRecordScalarFieldEnum | FinancialRecordScalarFieldEnum[]
  }

  /**
   * FinancialRecord findFirstOrThrow
   */
  export type FinancialRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRecord
     */
    select?: FinancialRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRecord
     */
    omit?: FinancialRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRecordInclude<ExtArgs> | null
    /**
     * Filter, which FinancialRecord to fetch.
     */
    where?: FinancialRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialRecords to fetch.
     */
    orderBy?: FinancialRecordOrderByWithRelationInput | FinancialRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialRecords.
     */
    cursor?: FinancialRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialRecords.
     */
    distinct?: FinancialRecordScalarFieldEnum | FinancialRecordScalarFieldEnum[]
  }

  /**
   * FinancialRecord findMany
   */
  export type FinancialRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRecord
     */
    select?: FinancialRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRecord
     */
    omit?: FinancialRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRecordInclude<ExtArgs> | null
    /**
     * Filter, which FinancialRecords to fetch.
     */
    where?: FinancialRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialRecords to fetch.
     */
    orderBy?: FinancialRecordOrderByWithRelationInput | FinancialRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinancialRecords.
     */
    cursor?: FinancialRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialRecords.
     */
    distinct?: FinancialRecordScalarFieldEnum | FinancialRecordScalarFieldEnum[]
  }

  /**
   * FinancialRecord create
   */
  export type FinancialRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRecord
     */
    select?: FinancialRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRecord
     */
    omit?: FinancialRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a FinancialRecord.
     */
    data: XOR<FinancialRecordCreateInput, FinancialRecordUncheckedCreateInput>
  }

  /**
   * FinancialRecord createMany
   */
  export type FinancialRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinancialRecords.
     */
    data: FinancialRecordCreateManyInput | FinancialRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinancialRecord createManyAndReturn
   */
  export type FinancialRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRecord
     */
    select?: FinancialRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRecord
     */
    omit?: FinancialRecordOmit<ExtArgs> | null
    /**
     * The data used to create many FinancialRecords.
     */
    data: FinancialRecordCreateManyInput | FinancialRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancialRecord update
   */
  export type FinancialRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRecord
     */
    select?: FinancialRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRecord
     */
    omit?: FinancialRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a FinancialRecord.
     */
    data: XOR<FinancialRecordUpdateInput, FinancialRecordUncheckedUpdateInput>
    /**
     * Choose, which FinancialRecord to update.
     */
    where: FinancialRecordWhereUniqueInput
  }

  /**
   * FinancialRecord updateMany
   */
  export type FinancialRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinancialRecords.
     */
    data: XOR<FinancialRecordUpdateManyMutationInput, FinancialRecordUncheckedUpdateManyInput>
    /**
     * Filter which FinancialRecords to update
     */
    where?: FinancialRecordWhereInput
    /**
     * Limit how many FinancialRecords to update.
     */
    limit?: number
  }

  /**
   * FinancialRecord updateManyAndReturn
   */
  export type FinancialRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRecord
     */
    select?: FinancialRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRecord
     */
    omit?: FinancialRecordOmit<ExtArgs> | null
    /**
     * The data used to update FinancialRecords.
     */
    data: XOR<FinancialRecordUpdateManyMutationInput, FinancialRecordUncheckedUpdateManyInput>
    /**
     * Filter which FinancialRecords to update
     */
    where?: FinancialRecordWhereInput
    /**
     * Limit how many FinancialRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancialRecord upsert
   */
  export type FinancialRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRecord
     */
    select?: FinancialRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRecord
     */
    omit?: FinancialRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the FinancialRecord to update in case it exists.
     */
    where: FinancialRecordWhereUniqueInput
    /**
     * In case the FinancialRecord found by the `where` argument doesn't exist, create a new FinancialRecord with this data.
     */
    create: XOR<FinancialRecordCreateInput, FinancialRecordUncheckedCreateInput>
    /**
     * In case the FinancialRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinancialRecordUpdateInput, FinancialRecordUncheckedUpdateInput>
  }

  /**
   * FinancialRecord delete
   */
  export type FinancialRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRecord
     */
    select?: FinancialRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRecord
     */
    omit?: FinancialRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRecordInclude<ExtArgs> | null
    /**
     * Filter which FinancialRecord to delete.
     */
    where: FinancialRecordWhereUniqueInput
  }

  /**
   * FinancialRecord deleteMany
   */
  export type FinancialRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialRecords to delete
     */
    where?: FinancialRecordWhereInput
    /**
     * Limit how many FinancialRecords to delete.
     */
    limit?: number
  }

  /**
   * FinancialRecord without action
   */
  export type FinancialRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRecord
     */
    select?: FinancialRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRecord
     */
    omit?: FinancialRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRecordInclude<ExtArgs> | null
  }


  /**
   * Model Events
   */

  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsMinAggregateOutputType = {
    id: string | null
    title: string | null
    start: Date | null
    end: Date | null
    description: string | null
    userId: string | null
  }

  export type EventsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    start: Date | null
    end: Date | null
    description: string | null
    userId: string | null
  }

  export type EventsCountAggregateOutputType = {
    id: number
    title: number
    start: number
    end: number
    description: number
    userId: number
    _all: number
  }


  export type EventsMinAggregateInputType = {
    id?: true
    title?: true
    start?: true
    end?: true
    description?: true
    userId?: true
  }

  export type EventsMaxAggregateInputType = {
    id?: true
    title?: true
    start?: true
    end?: true
    description?: true
    userId?: true
  }

  export type EventsCountAggregateInputType = {
    id?: true
    title?: true
    start?: true
    end?: true
    description?: true
    userId?: true
    _all?: true
  }

  export type EventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to aggregate.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type EventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventsWhereInput
    orderBy?: EventsOrderByWithAggregationInput | EventsOrderByWithAggregationInput[]
    by: EventsScalarFieldEnum[] | EventsScalarFieldEnum
    having?: EventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }

  export type EventsGroupByOutputType = {
    id: string
    title: string
    start: Date
    end: Date
    description: string | null
    userId: string
    _count: EventsCountAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends EventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type EventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    start?: boolean
    end?: boolean
    description?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type EventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    start?: boolean
    end?: boolean
    description?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type EventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    start?: boolean
    end?: boolean
    description?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type EventsSelectScalar = {
    id?: boolean
    title?: boolean
    start?: boolean
    end?: boolean
    description?: boolean
    userId?: boolean
  }

  export type EventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "start" | "end" | "description" | "userId", ExtArgs["result"]["events"]>
  export type EventsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type EventsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type EventsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $EventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Events"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      start: Date
      end: Date
      description: string | null
      userId: string
    }, ExtArgs["result"]["events"]>
    composites: {}
  }

  type EventsGetPayload<S extends boolean | null | undefined | EventsDefaultArgs> = $Result.GetResult<Prisma.$EventsPayload, S>

  type EventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventsCountAggregateInputType | true
    }

  export interface EventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Events'], meta: { name: 'Events' } }
    /**
     * Find zero or one Events that matches the filter.
     * @param {EventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventsFindUniqueArgs>(args: SelectSubset<T, EventsFindUniqueArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Events that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventsFindUniqueOrThrowArgs>(args: SelectSubset<T, EventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventsFindFirstArgs>(args?: SelectSubset<T, EventsFindFirstArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventsFindFirstOrThrowArgs>(args?: SelectSubset<T, EventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventsFindManyArgs>(args?: SelectSubset<T, EventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Events.
     * @param {EventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
     */
    create<T extends EventsCreateArgs>(args: SelectSubset<T, EventsCreateArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventsCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventsCreateManyArgs>(args?: SelectSubset<T, EventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventsCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventsCreateManyAndReturnArgs>(args?: SelectSubset<T, EventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Events.
     * @param {EventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
     */
    delete<T extends EventsDeleteArgs>(args: SelectSubset<T, EventsDeleteArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Events.
     * @param {EventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventsUpdateArgs>(args: SelectSubset<T, EventsUpdateArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventsDeleteManyArgs>(args?: SelectSubset<T, EventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventsUpdateManyArgs>(args: SelectSubset<T, EventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventsUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventsUpdateManyAndReturnArgs>(args: SelectSubset<T, EventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Events.
     * @param {EventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
     */
    upsert<T extends EventsUpsertArgs>(args: SelectSubset<T, EventsUpsertArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventsCountArgs>(
      args?: Subset<T, EventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventsGroupByArgs['orderBy'] }
        : { orderBy?: EventsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Events model
   */
  readonly fields: EventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Events model
   */
  interface EventsFieldRefs {
    readonly id: FieldRef<"Events", 'String'>
    readonly title: FieldRef<"Events", 'String'>
    readonly start: FieldRef<"Events", 'DateTime'>
    readonly end: FieldRef<"Events", 'DateTime'>
    readonly description: FieldRef<"Events", 'String'>
    readonly userId: FieldRef<"Events", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Events findUnique
   */
  export type EventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events findUniqueOrThrow
   */
  export type EventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events findFirst
   */
  export type EventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events findFirstOrThrow
   */
  export type EventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events findMany
   */
  export type EventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events create
   */
  export type EventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The data needed to create a Events.
     */
    data: XOR<EventsCreateInput, EventsUncheckedCreateInput>
  }

  /**
   * Events createMany
   */
  export type EventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventsCreateManyInput | EventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Events createManyAndReturn
   */
  export type EventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventsCreateManyInput | EventsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Events update
   */
  export type EventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The data needed to update a Events.
     */
    data: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
    /**
     * Choose, which Events to update.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events updateMany
   */
  export type EventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Events updateManyAndReturn
   */
  export type EventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Events upsert
   */
  export type EventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The filter to search for the Events to update in case it exists.
     */
    where: EventsWhereUniqueInput
    /**
     * In case the Events found by the `where` argument doesn't exist, create a new Events with this data.
     */
    create: XOR<EventsCreateInput, EventsUncheckedCreateInput>
    /**
     * In case the Events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
  }

  /**
   * Events delete
   */
  export type EventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter which Events to delete.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events deleteMany
   */
  export type EventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Events without action
   */
  export type EventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    Fname: 'Fname',
    Sname: 'Sname',
    email: 'email',
    role: 'role',
    phone: 'phone',
    profile_url: 'profile_url',
    accountStatus: 'accountStatus',
    password: 'password'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const BusinessesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    currency: 'currency',
    logo: 'logo',
    userId: 'userId'
  };

  export type BusinessesScalarFieldEnum = (typeof BusinessesScalarFieldEnum)[keyof typeof BusinessesScalarFieldEnum]


  export const ClientsScalarFieldEnum: {
    id: 'id',
    Fname: 'Fname',
    Sname: 'Sname',
    email: 'email',
    phone: 'phone',
    businessId: 'businessId',
    activeOrder: 'activeOrder'
  };

  export type ClientsScalarFieldEnum = (typeof ClientsScalarFieldEnum)[keyof typeof ClientsScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    read: 'read',
    type: 'type',
    message: 'message'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const MeasurementsScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    height: 'height',
    shoulders: 'shoulders',
    hand: 'hand',
    chest: 'chest',
    waist: 'waist',
    hips: 'hips'
  };

  export type MeasurementsScalarFieldEnum = (typeof MeasurementsScalarFieldEnum)[keyof typeof MeasurementsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    item: 'item',
    description: 'description',
    collectionDate: 'collectionDate',
    completionStatus: 'completionStatus',
    businessId: 'businessId',
    clientId: 'clientId'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    paidAmount: 'paidAmount',
    totalAmount: 'totalAmount',
    createdAt: 'createdAt'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const IncomeScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    businessId: 'businessId',
    description: 'description',
    createdAt: 'createdAt',
    category: 'category'
  };

  export type IncomeScalarFieldEnum = (typeof IncomeScalarFieldEnum)[keyof typeof IncomeScalarFieldEnum]


  export const ExpensesScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    businessId: 'businessId',
    description: 'description',
    createdAt: 'createdAt',
    category: 'category'
  };

  export type ExpensesScalarFieldEnum = (typeof ExpensesScalarFieldEnum)[keyof typeof ExpensesScalarFieldEnum]


  export const FinancialRecordScalarFieldEnum: {
    id: 'id',
    businessId: 'businessId',
    date: 'date',
    income: 'income',
    expenses: 'expenses',
    profit: 'profit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FinancialRecordScalarFieldEnum = (typeof FinancialRecordScalarFieldEnum)[keyof typeof FinancialRecordScalarFieldEnum]


  export const EventsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    start: 'start',
    end: 'end',
    description: 'description',
    userId: 'userId'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CompletionStatus'
   */
  export type EnumCompletionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompletionStatus'>
    


  /**
   * Reference to a field of type 'CompletionStatus[]'
   */
  export type ListEnumCompletionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompletionStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    Fname?: StringFilter<"Users"> | string
    Sname?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    phone?: StringNullableFilter<"Users"> | string | null
    profile_url?: StringNullableFilter<"Users"> | string | null
    accountStatus?: BoolFilter<"Users"> | boolean
    password?: StringFilter<"Users"> | string
    notifications?: NotificationsListRelationFilter
    events?: EventsListRelationFilter
    business?: XOR<BusinessesNullableScalarRelationFilter, BusinessesWhereInput> | null
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    Fname?: SortOrder
    Sname?: SortOrder
    email?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    profile_url?: SortOrderInput | SortOrder
    accountStatus?: SortOrder
    password?: SortOrder
    notifications?: NotificationsOrderByRelationAggregateInput
    events?: EventsOrderByRelationAggregateInput
    business?: BusinessesOrderByWithRelationInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    Fname?: StringFilter<"Users"> | string
    Sname?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    phone?: StringNullableFilter<"Users"> | string | null
    profile_url?: StringNullableFilter<"Users"> | string | null
    accountStatus?: BoolFilter<"Users"> | boolean
    password?: StringFilter<"Users"> | string
    notifications?: NotificationsListRelationFilter
    events?: EventsListRelationFilter
    business?: XOR<BusinessesNullableScalarRelationFilter, BusinessesWhereInput> | null
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    Fname?: SortOrder
    Sname?: SortOrder
    email?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    profile_url?: SortOrderInput | SortOrder
    accountStatus?: SortOrder
    password?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    Fname?: StringWithAggregatesFilter<"Users"> | string
    Sname?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    role?: EnumRoleWithAggregatesFilter<"Users"> | $Enums.Role
    phone?: StringNullableWithAggregatesFilter<"Users"> | string | null
    profile_url?: StringNullableWithAggregatesFilter<"Users"> | string | null
    accountStatus?: BoolWithAggregatesFilter<"Users"> | boolean
    password?: StringWithAggregatesFilter<"Users"> | string
  }

  export type BusinessesWhereInput = {
    AND?: BusinessesWhereInput | BusinessesWhereInput[]
    OR?: BusinessesWhereInput[]
    NOT?: BusinessesWhereInput | BusinessesWhereInput[]
    id?: StringFilter<"Businesses"> | string
    name?: StringFilter<"Businesses"> | string
    email?: StringFilter<"Businesses"> | string
    phone?: StringFilter<"Businesses"> | string
    address?: StringFilter<"Businesses"> | string
    currency?: StringFilter<"Businesses"> | string
    logo?: StringNullableFilter<"Businesses"> | string | null
    userId?: StringFilter<"Businesses"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    clients?: ClientsListRelationFilter
    orders?: OrdersListRelationFilter
    financialRecords?: FinancialRecordListRelationFilter
    income?: IncomeListRelationFilter
    expenses?: ExpensesListRelationFilter
  }

  export type BusinessesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    currency?: SortOrder
    logo?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UsersOrderByWithRelationInput
    clients?: ClientsOrderByRelationAggregateInput
    orders?: OrdersOrderByRelationAggregateInput
    financialRecords?: FinancialRecordOrderByRelationAggregateInput
    income?: IncomeOrderByRelationAggregateInput
    expenses?: ExpensesOrderByRelationAggregateInput
  }

  export type BusinessesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: BusinessesWhereInput | BusinessesWhereInput[]
    OR?: BusinessesWhereInput[]
    NOT?: BusinessesWhereInput | BusinessesWhereInput[]
    name?: StringFilter<"Businesses"> | string
    email?: StringFilter<"Businesses"> | string
    phone?: StringFilter<"Businesses"> | string
    address?: StringFilter<"Businesses"> | string
    currency?: StringFilter<"Businesses"> | string
    logo?: StringNullableFilter<"Businesses"> | string | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    clients?: ClientsListRelationFilter
    orders?: OrdersListRelationFilter
    financialRecords?: FinancialRecordListRelationFilter
    income?: IncomeListRelationFilter
    expenses?: ExpensesListRelationFilter
  }, "id" | "userId">

  export type BusinessesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    currency?: SortOrder
    logo?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: BusinessesCountOrderByAggregateInput
    _max?: BusinessesMaxOrderByAggregateInput
    _min?: BusinessesMinOrderByAggregateInput
  }

  export type BusinessesScalarWhereWithAggregatesInput = {
    AND?: BusinessesScalarWhereWithAggregatesInput | BusinessesScalarWhereWithAggregatesInput[]
    OR?: BusinessesScalarWhereWithAggregatesInput[]
    NOT?: BusinessesScalarWhereWithAggregatesInput | BusinessesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Businesses"> | string
    name?: StringWithAggregatesFilter<"Businesses"> | string
    email?: StringWithAggregatesFilter<"Businesses"> | string
    phone?: StringWithAggregatesFilter<"Businesses"> | string
    address?: StringWithAggregatesFilter<"Businesses"> | string
    currency?: StringWithAggregatesFilter<"Businesses"> | string
    logo?: StringNullableWithAggregatesFilter<"Businesses"> | string | null
    userId?: StringWithAggregatesFilter<"Businesses"> | string
  }

  export type ClientsWhereInput = {
    AND?: ClientsWhereInput | ClientsWhereInput[]
    OR?: ClientsWhereInput[]
    NOT?: ClientsWhereInput | ClientsWhereInput[]
    id?: StringFilter<"Clients"> | string
    Fname?: StringFilter<"Clients"> | string
    Sname?: StringFilter<"Clients"> | string
    email?: StringNullableFilter<"Clients"> | string | null
    phone?: StringFilter<"Clients"> | string
    businessId?: StringFilter<"Clients"> | string
    activeOrder?: BoolFilter<"Clients"> | boolean
    business?: XOR<BusinessesScalarRelationFilter, BusinessesWhereInput>
    measurements?: XOR<MeasurementsNullableScalarRelationFilter, MeasurementsWhereInput> | null
    orders?: OrdersListRelationFilter
  }

  export type ClientsOrderByWithRelationInput = {
    id?: SortOrder
    Fname?: SortOrder
    Sname?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    businessId?: SortOrder
    activeOrder?: SortOrder
    business?: BusinessesOrderByWithRelationInput
    measurements?: MeasurementsOrderByWithRelationInput
    orders?: OrdersOrderByRelationAggregateInput
  }

  export type ClientsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: ClientsWhereInput | ClientsWhereInput[]
    OR?: ClientsWhereInput[]
    NOT?: ClientsWhereInput | ClientsWhereInput[]
    Fname?: StringFilter<"Clients"> | string
    Sname?: StringFilter<"Clients"> | string
    email?: StringNullableFilter<"Clients"> | string | null
    businessId?: StringFilter<"Clients"> | string
    activeOrder?: BoolFilter<"Clients"> | boolean
    business?: XOR<BusinessesScalarRelationFilter, BusinessesWhereInput>
    measurements?: XOR<MeasurementsNullableScalarRelationFilter, MeasurementsWhereInput> | null
    orders?: OrdersListRelationFilter
  }, "id" | "phone">

  export type ClientsOrderByWithAggregationInput = {
    id?: SortOrder
    Fname?: SortOrder
    Sname?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    businessId?: SortOrder
    activeOrder?: SortOrder
    _count?: ClientsCountOrderByAggregateInput
    _max?: ClientsMaxOrderByAggregateInput
    _min?: ClientsMinOrderByAggregateInput
  }

  export type ClientsScalarWhereWithAggregatesInput = {
    AND?: ClientsScalarWhereWithAggregatesInput | ClientsScalarWhereWithAggregatesInput[]
    OR?: ClientsScalarWhereWithAggregatesInput[]
    NOT?: ClientsScalarWhereWithAggregatesInput | ClientsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Clients"> | string
    Fname?: StringWithAggregatesFilter<"Clients"> | string
    Sname?: StringWithAggregatesFilter<"Clients"> | string
    email?: StringNullableWithAggregatesFilter<"Clients"> | string | null
    phone?: StringWithAggregatesFilter<"Clients"> | string
    businessId?: StringWithAggregatesFilter<"Clients"> | string
    activeOrder?: BoolWithAggregatesFilter<"Clients"> | boolean
  }

  export type NotificationsWhereInput = {
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    id?: StringFilter<"Notifications"> | string
    userId?: StringFilter<"Notifications"> | string
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
    read?: BoolFilter<"Notifications"> | boolean
    type?: StringFilter<"Notifications"> | string
    message?: StringFilter<"Notifications"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type NotificationsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    read?: SortOrder
    type?: SortOrder
    message?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type NotificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    userId?: StringFilter<"Notifications"> | string
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
    read?: BoolFilter<"Notifications"> | boolean
    type?: StringFilter<"Notifications"> | string
    message?: StringFilter<"Notifications"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type NotificationsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    read?: SortOrder
    type?: SortOrder
    message?: SortOrder
    _count?: NotificationsCountOrderByAggregateInput
    _max?: NotificationsMaxOrderByAggregateInput
    _min?: NotificationsMinOrderByAggregateInput
  }

  export type NotificationsScalarWhereWithAggregatesInput = {
    AND?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    OR?: NotificationsScalarWhereWithAggregatesInput[]
    NOT?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notifications"> | string
    userId?: StringWithAggregatesFilter<"Notifications"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notifications"> | Date | string
    read?: BoolWithAggregatesFilter<"Notifications"> | boolean
    type?: StringWithAggregatesFilter<"Notifications"> | string
    message?: StringWithAggregatesFilter<"Notifications"> | string
  }

  export type MeasurementsWhereInput = {
    AND?: MeasurementsWhereInput | MeasurementsWhereInput[]
    OR?: MeasurementsWhereInput[]
    NOT?: MeasurementsWhereInput | MeasurementsWhereInput[]
    id?: StringFilter<"Measurements"> | string
    clientId?: StringFilter<"Measurements"> | string
    height?: StringFilter<"Measurements"> | string
    shoulders?: StringFilter<"Measurements"> | string
    hand?: StringFilter<"Measurements"> | string
    chest?: StringFilter<"Measurements"> | string
    waist?: StringFilter<"Measurements"> | string
    hips?: StringFilter<"Measurements"> | string
    client?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
  }

  export type MeasurementsOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    height?: SortOrder
    shoulders?: SortOrder
    hand?: SortOrder
    chest?: SortOrder
    waist?: SortOrder
    hips?: SortOrder
    client?: ClientsOrderByWithRelationInput
  }

  export type MeasurementsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clientId?: string
    AND?: MeasurementsWhereInput | MeasurementsWhereInput[]
    OR?: MeasurementsWhereInput[]
    NOT?: MeasurementsWhereInput | MeasurementsWhereInput[]
    height?: StringFilter<"Measurements"> | string
    shoulders?: StringFilter<"Measurements"> | string
    hand?: StringFilter<"Measurements"> | string
    chest?: StringFilter<"Measurements"> | string
    waist?: StringFilter<"Measurements"> | string
    hips?: StringFilter<"Measurements"> | string
    client?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
  }, "id" | "clientId">

  export type MeasurementsOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    height?: SortOrder
    shoulders?: SortOrder
    hand?: SortOrder
    chest?: SortOrder
    waist?: SortOrder
    hips?: SortOrder
    _count?: MeasurementsCountOrderByAggregateInput
    _max?: MeasurementsMaxOrderByAggregateInput
    _min?: MeasurementsMinOrderByAggregateInput
  }

  export type MeasurementsScalarWhereWithAggregatesInput = {
    AND?: MeasurementsScalarWhereWithAggregatesInput | MeasurementsScalarWhereWithAggregatesInput[]
    OR?: MeasurementsScalarWhereWithAggregatesInput[]
    NOT?: MeasurementsScalarWhereWithAggregatesInput | MeasurementsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Measurements"> | string
    clientId?: StringWithAggregatesFilter<"Measurements"> | string
    height?: StringWithAggregatesFilter<"Measurements"> | string
    shoulders?: StringWithAggregatesFilter<"Measurements"> | string
    hand?: StringWithAggregatesFilter<"Measurements"> | string
    chest?: StringWithAggregatesFilter<"Measurements"> | string
    waist?: StringWithAggregatesFilter<"Measurements"> | string
    hips?: StringWithAggregatesFilter<"Measurements"> | string
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id?: StringFilter<"Orders"> | string
    item?: StringFilter<"Orders"> | string
    description?: StringNullableFilter<"Orders"> | string | null
    collectionDate?: DateTimeFilter<"Orders"> | Date | string
    completionStatus?: EnumCompletionStatusFilter<"Orders"> | $Enums.CompletionStatus
    businessId?: StringFilter<"Orders"> | string
    clientId?: StringFilter<"Orders"> | string
    business?: XOR<BusinessesScalarRelationFilter, BusinessesWhereInput>
    client?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
    payments?: XOR<PaymentsNullableScalarRelationFilter, PaymentsWhereInput> | null
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    item?: SortOrder
    description?: SortOrderInput | SortOrder
    collectionDate?: SortOrder
    completionStatus?: SortOrder
    businessId?: SortOrder
    clientId?: SortOrder
    business?: BusinessesOrderByWithRelationInput
    client?: ClientsOrderByWithRelationInput
    payments?: PaymentsOrderByWithRelationInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    item?: StringFilter<"Orders"> | string
    description?: StringNullableFilter<"Orders"> | string | null
    collectionDate?: DateTimeFilter<"Orders"> | Date | string
    completionStatus?: EnumCompletionStatusFilter<"Orders"> | $Enums.CompletionStatus
    businessId?: StringFilter<"Orders"> | string
    clientId?: StringFilter<"Orders"> | string
    business?: XOR<BusinessesScalarRelationFilter, BusinessesWhereInput>
    client?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
    payments?: XOR<PaymentsNullableScalarRelationFilter, PaymentsWhereInput> | null
  }, "id">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    item?: SortOrder
    description?: SortOrderInput | SortOrder
    collectionDate?: SortOrder
    completionStatus?: SortOrder
    businessId?: SortOrder
    clientId?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Orders"> | string
    item?: StringWithAggregatesFilter<"Orders"> | string
    description?: StringNullableWithAggregatesFilter<"Orders"> | string | null
    collectionDate?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    completionStatus?: EnumCompletionStatusWithAggregatesFilter<"Orders"> | $Enums.CompletionStatus
    businessId?: StringWithAggregatesFilter<"Orders"> | string
    clientId?: StringWithAggregatesFilter<"Orders"> | string
  }

  export type PaymentsWhereInput = {
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    id?: StringFilter<"Payments"> | string
    orderId?: StringFilter<"Payments"> | string
    paidAmount?: FloatFilter<"Payments"> | number
    totalAmount?: FloatFilter<"Payments"> | number
    createdAt?: DateTimeFilter<"Payments"> | Date | string
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
  }

  export type PaymentsOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    paidAmount?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    order?: OrdersOrderByWithRelationInput
  }

  export type PaymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId?: string
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    paidAmount?: FloatFilter<"Payments"> | number
    totalAmount?: FloatFilter<"Payments"> | number
    createdAt?: DateTimeFilter<"Payments"> | Date | string
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
  }, "id" | "orderId">

  export type PaymentsOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    paidAmount?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentsCountOrderByAggregateInput
    _avg?: PaymentsAvgOrderByAggregateInput
    _max?: PaymentsMaxOrderByAggregateInput
    _min?: PaymentsMinOrderByAggregateInput
    _sum?: PaymentsSumOrderByAggregateInput
  }

  export type PaymentsScalarWhereWithAggregatesInput = {
    AND?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    OR?: PaymentsScalarWhereWithAggregatesInput[]
    NOT?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payments"> | string
    orderId?: StringWithAggregatesFilter<"Payments"> | string
    paidAmount?: FloatWithAggregatesFilter<"Payments"> | number
    totalAmount?: FloatWithAggregatesFilter<"Payments"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
  }

  export type IncomeWhereInput = {
    AND?: IncomeWhereInput | IncomeWhereInput[]
    OR?: IncomeWhereInput[]
    NOT?: IncomeWhereInput | IncomeWhereInput[]
    id?: StringFilter<"Income"> | string
    amount?: FloatFilter<"Income"> | number
    businessId?: StringFilter<"Income"> | string
    description?: StringFilter<"Income"> | string
    createdAt?: DateTimeFilter<"Income"> | Date | string
    category?: StringFilter<"Income"> | string
    business?: XOR<BusinessesScalarRelationFilter, BusinessesWhereInput>
  }

  export type IncomeOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    businessId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    category?: SortOrder
    business?: BusinessesOrderByWithRelationInput
  }

  export type IncomeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IncomeWhereInput | IncomeWhereInput[]
    OR?: IncomeWhereInput[]
    NOT?: IncomeWhereInput | IncomeWhereInput[]
    amount?: FloatFilter<"Income"> | number
    businessId?: StringFilter<"Income"> | string
    description?: StringFilter<"Income"> | string
    createdAt?: DateTimeFilter<"Income"> | Date | string
    category?: StringFilter<"Income"> | string
    business?: XOR<BusinessesScalarRelationFilter, BusinessesWhereInput>
  }, "id">

  export type IncomeOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    businessId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    category?: SortOrder
    _count?: IncomeCountOrderByAggregateInput
    _avg?: IncomeAvgOrderByAggregateInput
    _max?: IncomeMaxOrderByAggregateInput
    _min?: IncomeMinOrderByAggregateInput
    _sum?: IncomeSumOrderByAggregateInput
  }

  export type IncomeScalarWhereWithAggregatesInput = {
    AND?: IncomeScalarWhereWithAggregatesInput | IncomeScalarWhereWithAggregatesInput[]
    OR?: IncomeScalarWhereWithAggregatesInput[]
    NOT?: IncomeScalarWhereWithAggregatesInput | IncomeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Income"> | string
    amount?: FloatWithAggregatesFilter<"Income"> | number
    businessId?: StringWithAggregatesFilter<"Income"> | string
    description?: StringWithAggregatesFilter<"Income"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Income"> | Date | string
    category?: StringWithAggregatesFilter<"Income"> | string
  }

  export type ExpensesWhereInput = {
    AND?: ExpensesWhereInput | ExpensesWhereInput[]
    OR?: ExpensesWhereInput[]
    NOT?: ExpensesWhereInput | ExpensesWhereInput[]
    id?: StringFilter<"Expenses"> | string
    amount?: FloatFilter<"Expenses"> | number
    businessId?: StringFilter<"Expenses"> | string
    description?: StringFilter<"Expenses"> | string
    createdAt?: DateTimeFilter<"Expenses"> | Date | string
    category?: StringFilter<"Expenses"> | string
    business?: XOR<BusinessesScalarRelationFilter, BusinessesWhereInput>
  }

  export type ExpensesOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    businessId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    category?: SortOrder
    business?: BusinessesOrderByWithRelationInput
  }

  export type ExpensesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpensesWhereInput | ExpensesWhereInput[]
    OR?: ExpensesWhereInput[]
    NOT?: ExpensesWhereInput | ExpensesWhereInput[]
    amount?: FloatFilter<"Expenses"> | number
    businessId?: StringFilter<"Expenses"> | string
    description?: StringFilter<"Expenses"> | string
    createdAt?: DateTimeFilter<"Expenses"> | Date | string
    category?: StringFilter<"Expenses"> | string
    business?: XOR<BusinessesScalarRelationFilter, BusinessesWhereInput>
  }, "id">

  export type ExpensesOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    businessId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    category?: SortOrder
    _count?: ExpensesCountOrderByAggregateInput
    _avg?: ExpensesAvgOrderByAggregateInput
    _max?: ExpensesMaxOrderByAggregateInput
    _min?: ExpensesMinOrderByAggregateInput
    _sum?: ExpensesSumOrderByAggregateInput
  }

  export type ExpensesScalarWhereWithAggregatesInput = {
    AND?: ExpensesScalarWhereWithAggregatesInput | ExpensesScalarWhereWithAggregatesInput[]
    OR?: ExpensesScalarWhereWithAggregatesInput[]
    NOT?: ExpensesScalarWhereWithAggregatesInput | ExpensesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Expenses"> | string
    amount?: FloatWithAggregatesFilter<"Expenses"> | number
    businessId?: StringWithAggregatesFilter<"Expenses"> | string
    description?: StringWithAggregatesFilter<"Expenses"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Expenses"> | Date | string
    category?: StringWithAggregatesFilter<"Expenses"> | string
  }

  export type FinancialRecordWhereInput = {
    AND?: FinancialRecordWhereInput | FinancialRecordWhereInput[]
    OR?: FinancialRecordWhereInput[]
    NOT?: FinancialRecordWhereInput | FinancialRecordWhereInput[]
    id?: StringFilter<"FinancialRecord"> | string
    businessId?: StringFilter<"FinancialRecord"> | string
    date?: DateTimeFilter<"FinancialRecord"> | Date | string
    income?: FloatFilter<"FinancialRecord"> | number
    expenses?: FloatFilter<"FinancialRecord"> | number
    profit?: FloatFilter<"FinancialRecord"> | number
    createdAt?: DateTimeFilter<"FinancialRecord"> | Date | string
    updatedAt?: DateTimeFilter<"FinancialRecord"> | Date | string
    business?: XOR<BusinessesScalarRelationFilter, BusinessesWhereInput>
  }

  export type FinancialRecordOrderByWithRelationInput = {
    id?: SortOrder
    businessId?: SortOrder
    date?: SortOrder
    income?: SortOrder
    expenses?: SortOrder
    profit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    business?: BusinessesOrderByWithRelationInput
  }

  export type FinancialRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    businessId_date?: FinancialRecordBusinessIdDateCompoundUniqueInput
    AND?: FinancialRecordWhereInput | FinancialRecordWhereInput[]
    OR?: FinancialRecordWhereInput[]
    NOT?: FinancialRecordWhereInput | FinancialRecordWhereInput[]
    businessId?: StringFilter<"FinancialRecord"> | string
    date?: DateTimeFilter<"FinancialRecord"> | Date | string
    income?: FloatFilter<"FinancialRecord"> | number
    expenses?: FloatFilter<"FinancialRecord"> | number
    profit?: FloatFilter<"FinancialRecord"> | number
    createdAt?: DateTimeFilter<"FinancialRecord"> | Date | string
    updatedAt?: DateTimeFilter<"FinancialRecord"> | Date | string
    business?: XOR<BusinessesScalarRelationFilter, BusinessesWhereInput>
  }, "id" | "businessId_date">

  export type FinancialRecordOrderByWithAggregationInput = {
    id?: SortOrder
    businessId?: SortOrder
    date?: SortOrder
    income?: SortOrder
    expenses?: SortOrder
    profit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FinancialRecordCountOrderByAggregateInput
    _avg?: FinancialRecordAvgOrderByAggregateInput
    _max?: FinancialRecordMaxOrderByAggregateInput
    _min?: FinancialRecordMinOrderByAggregateInput
    _sum?: FinancialRecordSumOrderByAggregateInput
  }

  export type FinancialRecordScalarWhereWithAggregatesInput = {
    AND?: FinancialRecordScalarWhereWithAggregatesInput | FinancialRecordScalarWhereWithAggregatesInput[]
    OR?: FinancialRecordScalarWhereWithAggregatesInput[]
    NOT?: FinancialRecordScalarWhereWithAggregatesInput | FinancialRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FinancialRecord"> | string
    businessId?: StringWithAggregatesFilter<"FinancialRecord"> | string
    date?: DateTimeWithAggregatesFilter<"FinancialRecord"> | Date | string
    income?: FloatWithAggregatesFilter<"FinancialRecord"> | number
    expenses?: FloatWithAggregatesFilter<"FinancialRecord"> | number
    profit?: FloatWithAggregatesFilter<"FinancialRecord"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FinancialRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FinancialRecord"> | Date | string
  }

  export type EventsWhereInput = {
    AND?: EventsWhereInput | EventsWhereInput[]
    OR?: EventsWhereInput[]
    NOT?: EventsWhereInput | EventsWhereInput[]
    id?: StringFilter<"Events"> | string
    title?: StringFilter<"Events"> | string
    start?: DateTimeFilter<"Events"> | Date | string
    end?: DateTimeFilter<"Events"> | Date | string
    description?: StringNullableFilter<"Events"> | string | null
    userId?: StringFilter<"Events"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type EventsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    start?: SortOrder
    end?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type EventsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventsWhereInput | EventsWhereInput[]
    OR?: EventsWhereInput[]
    NOT?: EventsWhereInput | EventsWhereInput[]
    title?: StringFilter<"Events"> | string
    start?: DateTimeFilter<"Events"> | Date | string
    end?: DateTimeFilter<"Events"> | Date | string
    description?: StringNullableFilter<"Events"> | string | null
    userId?: StringFilter<"Events"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type EventsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    start?: SortOrder
    end?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: EventsCountOrderByAggregateInput
    _max?: EventsMaxOrderByAggregateInput
    _min?: EventsMinOrderByAggregateInput
  }

  export type EventsScalarWhereWithAggregatesInput = {
    AND?: EventsScalarWhereWithAggregatesInput | EventsScalarWhereWithAggregatesInput[]
    OR?: EventsScalarWhereWithAggregatesInput[]
    NOT?: EventsScalarWhereWithAggregatesInput | EventsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Events"> | string
    title?: StringWithAggregatesFilter<"Events"> | string
    start?: DateTimeWithAggregatesFilter<"Events"> | Date | string
    end?: DateTimeWithAggregatesFilter<"Events"> | Date | string
    description?: StringNullableWithAggregatesFilter<"Events"> | string | null
    userId?: StringWithAggregatesFilter<"Events"> | string
  }

  export type UsersCreateInput = {
    id?: string
    Fname: string
    Sname: string
    email: string
    role: $Enums.Role
    phone?: string | null
    profile_url?: string | null
    accountStatus?: boolean
    password: string
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    events?: EventsCreateNestedManyWithoutUserInput
    business?: BusinessesCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    Fname: string
    Sname: string
    email: string
    role: $Enums.Role
    phone?: string | null
    profile_url?: string | null
    accountStatus?: boolean
    password: string
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    events?: EventsUncheckedCreateNestedManyWithoutUserInput
    business?: BusinessesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Fname?: StringFieldUpdateOperationsInput | string
    Sname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null
    accountStatus?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    events?: EventsUpdateManyWithoutUserNestedInput
    business?: BusinessesUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Fname?: StringFieldUpdateOperationsInput | string
    Sname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null
    accountStatus?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    events?: EventsUncheckedUpdateManyWithoutUserNestedInput
    business?: BusinessesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    Fname: string
    Sname: string
    email: string
    role: $Enums.Role
    phone?: string | null
    profile_url?: string | null
    accountStatus?: boolean
    password: string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    Fname?: StringFieldUpdateOperationsInput | string
    Sname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null
    accountStatus?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    Fname?: StringFieldUpdateOperationsInput | string
    Sname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null
    accountStatus?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessesCreateInput = {
    id?: string
    name?: string
    email?: string
    phone?: string
    address?: string
    currency?: string
    logo?: string | null
    user: UsersCreateNestedOneWithoutBusinessInput
    clients?: ClientsCreateNestedManyWithoutBusinessInput
    orders?: OrdersCreateNestedManyWithoutBusinessInput
    financialRecords?: FinancialRecordCreateNestedManyWithoutBusinessInput
    income?: IncomeCreateNestedManyWithoutBusinessInput
    expenses?: ExpensesCreateNestedManyWithoutBusinessInput
  }

  export type BusinessesUncheckedCreateInput = {
    id?: string
    name?: string
    email?: string
    phone?: string
    address?: string
    currency?: string
    logo?: string | null
    userId: string
    clients?: ClientsUncheckedCreateNestedManyWithoutBusinessInput
    orders?: OrdersUncheckedCreateNestedManyWithoutBusinessInput
    financialRecords?: FinancialRecordUncheckedCreateNestedManyWithoutBusinessInput
    income?: IncomeUncheckedCreateNestedManyWithoutBusinessInput
    expenses?: ExpensesUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneRequiredWithoutBusinessNestedInput
    clients?: ClientsUpdateManyWithoutBusinessNestedInput
    orders?: OrdersUpdateManyWithoutBusinessNestedInput
    financialRecords?: FinancialRecordUpdateManyWithoutBusinessNestedInput
    income?: IncomeUpdateManyWithoutBusinessNestedInput
    expenses?: ExpensesUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    clients?: ClientsUncheckedUpdateManyWithoutBusinessNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutBusinessNestedInput
    financialRecords?: FinancialRecordUncheckedUpdateManyWithoutBusinessNestedInput
    income?: IncomeUncheckedUpdateManyWithoutBusinessNestedInput
    expenses?: ExpensesUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessesCreateManyInput = {
    id?: string
    name?: string
    email?: string
    phone?: string
    address?: string
    currency?: string
    logo?: string | null
    userId: string
  }

  export type BusinessesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BusinessesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ClientsCreateInput = {
    id?: string
    Fname: string
    Sname: string
    email?: string | null
    phone: string
    activeOrder?: boolean
    business: BusinessesCreateNestedOneWithoutClientsInput
    measurements?: MeasurementsCreateNestedOneWithoutClientInput
    orders?: OrdersCreateNestedManyWithoutClientInput
  }

  export type ClientsUncheckedCreateInput = {
    id?: string
    Fname: string
    Sname: string
    email?: string | null
    phone: string
    businessId: string
    activeOrder?: boolean
    measurements?: MeasurementsUncheckedCreateNestedOneWithoutClientInput
    orders?: OrdersUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Fname?: StringFieldUpdateOperationsInput | string
    Sname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    activeOrder?: BoolFieldUpdateOperationsInput | boolean
    business?: BusinessesUpdateOneRequiredWithoutClientsNestedInput
    measurements?: MeasurementsUpdateOneWithoutClientNestedInput
    orders?: OrdersUpdateManyWithoutClientNestedInput
  }

  export type ClientsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Fname?: StringFieldUpdateOperationsInput | string
    Sname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    activeOrder?: BoolFieldUpdateOperationsInput | boolean
    measurements?: MeasurementsUncheckedUpdateOneWithoutClientNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientsCreateManyInput = {
    id?: string
    Fname: string
    Sname: string
    email?: string | null
    phone: string
    businessId: string
    activeOrder?: boolean
  }

  export type ClientsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    Fname?: StringFieldUpdateOperationsInput | string
    Sname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    activeOrder?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClientsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    Fname?: StringFieldUpdateOperationsInput | string
    Sname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    activeOrder?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationsCreateInput = {
    id?: string
    createdAt?: Date | string
    read: boolean
    type: string
    message: string
    user: UsersCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationsUncheckedCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    read: boolean
    type: string
    message: string
  }

  export type NotificationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationsCreateManyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    read: boolean
    type: string
    message: string
  }

  export type NotificationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type MeasurementsCreateInput = {
    id?: string
    height: string
    shoulders: string
    hand: string
    chest: string
    waist: string
    hips: string
    client: ClientsCreateNestedOneWithoutMeasurementsInput
  }

  export type MeasurementsUncheckedCreateInput = {
    id?: string
    clientId: string
    height: string
    shoulders: string
    hand: string
    chest: string
    waist: string
    hips: string
  }

  export type MeasurementsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    shoulders?: StringFieldUpdateOperationsInput | string
    hand?: StringFieldUpdateOperationsInput | string
    chest?: StringFieldUpdateOperationsInput | string
    waist?: StringFieldUpdateOperationsInput | string
    hips?: StringFieldUpdateOperationsInput | string
    client?: ClientsUpdateOneRequiredWithoutMeasurementsNestedInput
  }

  export type MeasurementsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    shoulders?: StringFieldUpdateOperationsInput | string
    hand?: StringFieldUpdateOperationsInput | string
    chest?: StringFieldUpdateOperationsInput | string
    waist?: StringFieldUpdateOperationsInput | string
    hips?: StringFieldUpdateOperationsInput | string
  }

  export type MeasurementsCreateManyInput = {
    id?: string
    clientId: string
    height: string
    shoulders: string
    hand: string
    chest: string
    waist: string
    hips: string
  }

  export type MeasurementsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    shoulders?: StringFieldUpdateOperationsInput | string
    hand?: StringFieldUpdateOperationsInput | string
    chest?: StringFieldUpdateOperationsInput | string
    waist?: StringFieldUpdateOperationsInput | string
    hips?: StringFieldUpdateOperationsInput | string
  }

  export type MeasurementsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    shoulders?: StringFieldUpdateOperationsInput | string
    hand?: StringFieldUpdateOperationsInput | string
    chest?: StringFieldUpdateOperationsInput | string
    waist?: StringFieldUpdateOperationsInput | string
    hips?: StringFieldUpdateOperationsInput | string
  }

  export type OrdersCreateInput = {
    id?: string
    item: string
    description?: string | null
    collectionDate: Date | string
    completionStatus?: $Enums.CompletionStatus
    business: BusinessesCreateNestedOneWithoutOrdersInput
    client: ClientsCreateNestedOneWithoutOrdersInput
    payments?: PaymentsCreateNestedOneWithoutOrderInput
  }

  export type OrdersUncheckedCreateInput = {
    id?: string
    item: string
    description?: string | null
    collectionDate: Date | string
    completionStatus?: $Enums.CompletionStatus
    businessId: string
    clientId: string
    payments?: PaymentsUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrdersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    collectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionStatus?: EnumCompletionStatusFieldUpdateOperationsInput | $Enums.CompletionStatus
    business?: BusinessesUpdateOneRequiredWithoutOrdersNestedInput
    client?: ClientsUpdateOneRequiredWithoutOrdersNestedInput
    payments?: PaymentsUpdateOneWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    collectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionStatus?: EnumCompletionStatusFieldUpdateOperationsInput | $Enums.CompletionStatus
    businessId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    payments?: PaymentsUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrdersCreateManyInput = {
    id?: string
    item: string
    description?: string | null
    collectionDate: Date | string
    completionStatus?: $Enums.CompletionStatus
    businessId: string
    clientId: string
  }

  export type OrdersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    collectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionStatus?: EnumCompletionStatusFieldUpdateOperationsInput | $Enums.CompletionStatus
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    collectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionStatus?: EnumCompletionStatusFieldUpdateOperationsInput | $Enums.CompletionStatus
    businessId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentsCreateInput = {
    id?: string
    paidAmount: number
    totalAmount: number
    createdAt?: Date | string
    order: OrdersCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentsUncheckedCreateInput = {
    id?: string
    orderId: string
    paidAmount: number
    totalAmount: number
    createdAt?: Date | string
  }

  export type PaymentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paidAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paidAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsCreateManyInput = {
    id?: string
    orderId: string
    paidAmount: number
    totalAmount: number
    createdAt?: Date | string
  }

  export type PaymentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paidAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paidAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomeCreateInput = {
    id?: string
    amount: number
    description: string
    createdAt?: Date | string
    category: string
    business: BusinessesCreateNestedOneWithoutIncomeInput
  }

  export type IncomeUncheckedCreateInput = {
    id?: string
    amount: number
    businessId: string
    description: string
    createdAt?: Date | string
    category: string
  }

  export type IncomeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    business?: BusinessesUpdateOneRequiredWithoutIncomeNestedInput
  }

  export type IncomeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    businessId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type IncomeCreateManyInput = {
    id?: string
    amount: number
    businessId: string
    description: string
    createdAt?: Date | string
    category: string
  }

  export type IncomeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type IncomeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    businessId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type ExpensesCreateInput = {
    id?: string
    amount: number
    description: string
    createdAt?: Date | string
    category: string
    business: BusinessesCreateNestedOneWithoutExpensesInput
  }

  export type ExpensesUncheckedCreateInput = {
    id?: string
    amount: number
    businessId: string
    description: string
    createdAt?: Date | string
    category: string
  }

  export type ExpensesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    business?: BusinessesUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpensesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    businessId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type ExpensesCreateManyInput = {
    id?: string
    amount: number
    businessId: string
    description: string
    createdAt?: Date | string
    category: string
  }

  export type ExpensesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type ExpensesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    businessId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type FinancialRecordCreateInput = {
    id?: string
    date: Date | string
    income?: number
    expenses?: number
    profit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    business: BusinessesCreateNestedOneWithoutFinancialRecordsInput
  }

  export type FinancialRecordUncheckedCreateInput = {
    id?: string
    businessId: string
    date: Date | string
    income?: number
    expenses?: number
    profit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: FloatFieldUpdateOperationsInput | number
    expenses?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessesUpdateOneRequiredWithoutFinancialRecordsNestedInput
  }

  export type FinancialRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: FloatFieldUpdateOperationsInput | number
    expenses?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialRecordCreateManyInput = {
    id?: string
    businessId: string
    date: Date | string
    income?: number
    expenses?: number
    profit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: FloatFieldUpdateOperationsInput | number
    expenses?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: FloatFieldUpdateOperationsInput | number
    expenses?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventsCreateInput = {
    id?: string
    title: string
    start: Date | string
    end: Date | string
    description?: string | null
    user: UsersCreateNestedOneWithoutEventsInput
  }

  export type EventsUncheckedCreateInput = {
    id?: string
    title: string
    start: Date | string
    end: Date | string
    description?: string | null
    userId: string
  }

  export type EventsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EventsCreateManyInput = {
    id?: string
    title: string
    start: Date | string
    end: Date | string
    description?: string | null
    userId: string
  }

  export type EventsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotificationsListRelationFilter = {
    every?: NotificationsWhereInput
    some?: NotificationsWhereInput
    none?: NotificationsWhereInput
  }

  export type EventsListRelationFilter = {
    every?: EventsWhereInput
    some?: EventsWhereInput
    none?: EventsWhereInput
  }

  export type BusinessesNullableScalarRelationFilter = {
    is?: BusinessesWhereInput | null
    isNot?: BusinessesWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NotificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    Fname?: SortOrder
    Sname?: SortOrder
    email?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    profile_url?: SortOrder
    accountStatus?: SortOrder
    password?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    Fname?: SortOrder
    Sname?: SortOrder
    email?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    profile_url?: SortOrder
    accountStatus?: SortOrder
    password?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    Fname?: SortOrder
    Sname?: SortOrder
    email?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    profile_url?: SortOrder
    accountStatus?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type ClientsListRelationFilter = {
    every?: ClientsWhereInput
    some?: ClientsWhereInput
    none?: ClientsWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type FinancialRecordListRelationFilter = {
    every?: FinancialRecordWhereInput
    some?: FinancialRecordWhereInput
    none?: FinancialRecordWhereInput
  }

  export type IncomeListRelationFilter = {
    every?: IncomeWhereInput
    some?: IncomeWhereInput
    none?: IncomeWhereInput
  }

  export type ExpensesListRelationFilter = {
    every?: ExpensesWhereInput
    some?: ExpensesWhereInput
    none?: ExpensesWhereInput
  }

  export type ClientsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FinancialRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncomeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpensesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    currency?: SortOrder
    logo?: SortOrder
    userId?: SortOrder
  }

  export type BusinessesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    currency?: SortOrder
    logo?: SortOrder
    userId?: SortOrder
  }

  export type BusinessesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    currency?: SortOrder
    logo?: SortOrder
    userId?: SortOrder
  }

  export type BusinessesScalarRelationFilter = {
    is?: BusinessesWhereInput
    isNot?: BusinessesWhereInput
  }

  export type MeasurementsNullableScalarRelationFilter = {
    is?: MeasurementsWhereInput | null
    isNot?: MeasurementsWhereInput | null
  }

  export type ClientsCountOrderByAggregateInput = {
    id?: SortOrder
    Fname?: SortOrder
    Sname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    businessId?: SortOrder
    activeOrder?: SortOrder
  }

  export type ClientsMaxOrderByAggregateInput = {
    id?: SortOrder
    Fname?: SortOrder
    Sname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    businessId?: SortOrder
    activeOrder?: SortOrder
  }

  export type ClientsMinOrderByAggregateInput = {
    id?: SortOrder
    Fname?: SortOrder
    Sname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    businessId?: SortOrder
    activeOrder?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NotificationsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    read?: SortOrder
    type?: SortOrder
    message?: SortOrder
  }

  export type NotificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    read?: SortOrder
    type?: SortOrder
    message?: SortOrder
  }

  export type NotificationsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    read?: SortOrder
    type?: SortOrder
    message?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ClientsScalarRelationFilter = {
    is?: ClientsWhereInput
    isNot?: ClientsWhereInput
  }

  export type MeasurementsCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    height?: SortOrder
    shoulders?: SortOrder
    hand?: SortOrder
    chest?: SortOrder
    waist?: SortOrder
    hips?: SortOrder
  }

  export type MeasurementsMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    height?: SortOrder
    shoulders?: SortOrder
    hand?: SortOrder
    chest?: SortOrder
    waist?: SortOrder
    hips?: SortOrder
  }

  export type MeasurementsMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    height?: SortOrder
    shoulders?: SortOrder
    hand?: SortOrder
    chest?: SortOrder
    waist?: SortOrder
    hips?: SortOrder
  }

  export type EnumCompletionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CompletionStatus | EnumCompletionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CompletionStatus[] | ListEnumCompletionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompletionStatus[] | ListEnumCompletionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCompletionStatusFilter<$PrismaModel> | $Enums.CompletionStatus
  }

  export type PaymentsNullableScalarRelationFilter = {
    is?: PaymentsWhereInput | null
    isNot?: PaymentsWhereInput | null
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    description?: SortOrder
    collectionDate?: SortOrder
    completionStatus?: SortOrder
    businessId?: SortOrder
    clientId?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    description?: SortOrder
    collectionDate?: SortOrder
    completionStatus?: SortOrder
    businessId?: SortOrder
    clientId?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    description?: SortOrder
    collectionDate?: SortOrder
    completionStatus?: SortOrder
    businessId?: SortOrder
    clientId?: SortOrder
  }

  export type EnumCompletionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompletionStatus | EnumCompletionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CompletionStatus[] | ListEnumCompletionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompletionStatus[] | ListEnumCompletionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCompletionStatusWithAggregatesFilter<$PrismaModel> | $Enums.CompletionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCompletionStatusFilter<$PrismaModel>
    _max?: NestedEnumCompletionStatusFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type OrdersScalarRelationFilter = {
    is?: OrdersWhereInput
    isNot?: OrdersWhereInput
  }

  export type PaymentsCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    paidAmount?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentsAvgOrderByAggregateInput = {
    paidAmount?: SortOrder
    totalAmount?: SortOrder
  }

  export type PaymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    paidAmount?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentsMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    paidAmount?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentsSumOrderByAggregateInput = {
    paidAmount?: SortOrder
    totalAmount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IncomeCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    businessId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    category?: SortOrder
  }

  export type IncomeAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type IncomeMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    businessId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    category?: SortOrder
  }

  export type IncomeMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    businessId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    category?: SortOrder
  }

  export type IncomeSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ExpensesCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    businessId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    category?: SortOrder
  }

  export type ExpensesAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ExpensesMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    businessId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    category?: SortOrder
  }

  export type ExpensesMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    businessId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    category?: SortOrder
  }

  export type ExpensesSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FinancialRecordBusinessIdDateCompoundUniqueInput = {
    businessId: string
    date: Date | string
  }

  export type FinancialRecordCountOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    date?: SortOrder
    income?: SortOrder
    expenses?: SortOrder
    profit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinancialRecordAvgOrderByAggregateInput = {
    income?: SortOrder
    expenses?: SortOrder
    profit?: SortOrder
  }

  export type FinancialRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    date?: SortOrder
    income?: SortOrder
    expenses?: SortOrder
    profit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinancialRecordMinOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    date?: SortOrder
    income?: SortOrder
    expenses?: SortOrder
    profit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinancialRecordSumOrderByAggregateInput = {
    income?: SortOrder
    expenses?: SortOrder
    profit?: SortOrder
  }

  export type EventsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    start?: SortOrder
    end?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type EventsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    start?: SortOrder
    end?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type EventsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    start?: SortOrder
    end?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type NotificationsCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type EventsCreateNestedManyWithoutUserInput = {
    create?: XOR<EventsCreateWithoutUserInput, EventsUncheckedCreateWithoutUserInput> | EventsCreateWithoutUserInput[] | EventsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutUserInput | EventsCreateOrConnectWithoutUserInput[]
    createMany?: EventsCreateManyUserInputEnvelope
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
  }

  export type BusinessesCreateNestedOneWithoutUserInput = {
    create?: XOR<BusinessesCreateWithoutUserInput, BusinessesUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessesCreateOrConnectWithoutUserInput
    connect?: BusinessesWhereUniqueInput
  }

  export type NotificationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type EventsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventsCreateWithoutUserInput, EventsUncheckedCreateWithoutUserInput> | EventsCreateWithoutUserInput[] | EventsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutUserInput | EventsCreateOrConnectWithoutUserInput[]
    createMany?: EventsCreateManyUserInputEnvelope
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
  }

  export type BusinessesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<BusinessesCreateWithoutUserInput, BusinessesUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessesCreateOrConnectWithoutUserInput
    connect?: BusinessesWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NotificationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutUserInput | NotificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutUserInput | NotificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutUserInput | NotificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type EventsUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventsCreateWithoutUserInput, EventsUncheckedCreateWithoutUserInput> | EventsCreateWithoutUserInput[] | EventsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutUserInput | EventsCreateOrConnectWithoutUserInput[]
    upsert?: EventsUpsertWithWhereUniqueWithoutUserInput | EventsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventsCreateManyUserInputEnvelope
    set?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    disconnect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    delete?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    update?: EventsUpdateWithWhereUniqueWithoutUserInput | EventsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventsUpdateManyWithWhereWithoutUserInput | EventsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventsScalarWhereInput | EventsScalarWhereInput[]
  }

  export type BusinessesUpdateOneWithoutUserNestedInput = {
    create?: XOR<BusinessesCreateWithoutUserInput, BusinessesUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessesCreateOrConnectWithoutUserInput
    upsert?: BusinessesUpsertWithoutUserInput
    disconnect?: BusinessesWhereInput | boolean
    delete?: BusinessesWhereInput | boolean
    connect?: BusinessesWhereUniqueInput
    update?: XOR<XOR<BusinessesUpdateToOneWithWhereWithoutUserInput, BusinessesUpdateWithoutUserInput>, BusinessesUncheckedUpdateWithoutUserInput>
  }

  export type NotificationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutUserInput | NotificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutUserInput | NotificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutUserInput | NotificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type EventsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventsCreateWithoutUserInput, EventsUncheckedCreateWithoutUserInput> | EventsCreateWithoutUserInput[] | EventsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutUserInput | EventsCreateOrConnectWithoutUserInput[]
    upsert?: EventsUpsertWithWhereUniqueWithoutUserInput | EventsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventsCreateManyUserInputEnvelope
    set?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    disconnect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    delete?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    update?: EventsUpdateWithWhereUniqueWithoutUserInput | EventsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventsUpdateManyWithWhereWithoutUserInput | EventsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventsScalarWhereInput | EventsScalarWhereInput[]
  }

  export type BusinessesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<BusinessesCreateWithoutUserInput, BusinessesUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessesCreateOrConnectWithoutUserInput
    upsert?: BusinessesUpsertWithoutUserInput
    disconnect?: BusinessesWhereInput | boolean
    delete?: BusinessesWhereInput | boolean
    connect?: BusinessesWhereUniqueInput
    update?: XOR<XOR<BusinessesUpdateToOneWithWhereWithoutUserInput, BusinessesUpdateWithoutUserInput>, BusinessesUncheckedUpdateWithoutUserInput>
  }

  export type UsersCreateNestedOneWithoutBusinessInput = {
    create?: XOR<UsersCreateWithoutBusinessInput, UsersUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBusinessInput
    connect?: UsersWhereUniqueInput
  }

  export type ClientsCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ClientsCreateWithoutBusinessInput, ClientsUncheckedCreateWithoutBusinessInput> | ClientsCreateWithoutBusinessInput[] | ClientsUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ClientsCreateOrConnectWithoutBusinessInput | ClientsCreateOrConnectWithoutBusinessInput[]
    createMany?: ClientsCreateManyBusinessInputEnvelope
    connect?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutBusinessInput = {
    create?: XOR<OrdersCreateWithoutBusinessInput, OrdersUncheckedCreateWithoutBusinessInput> | OrdersCreateWithoutBusinessInput[] | OrdersUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutBusinessInput | OrdersCreateOrConnectWithoutBusinessInput[]
    createMany?: OrdersCreateManyBusinessInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type FinancialRecordCreateNestedManyWithoutBusinessInput = {
    create?: XOR<FinancialRecordCreateWithoutBusinessInput, FinancialRecordUncheckedCreateWithoutBusinessInput> | FinancialRecordCreateWithoutBusinessInput[] | FinancialRecordUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: FinancialRecordCreateOrConnectWithoutBusinessInput | FinancialRecordCreateOrConnectWithoutBusinessInput[]
    createMany?: FinancialRecordCreateManyBusinessInputEnvelope
    connect?: FinancialRecordWhereUniqueInput | FinancialRecordWhereUniqueInput[]
  }

  export type IncomeCreateNestedManyWithoutBusinessInput = {
    create?: XOR<IncomeCreateWithoutBusinessInput, IncomeUncheckedCreateWithoutBusinessInput> | IncomeCreateWithoutBusinessInput[] | IncomeUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: IncomeCreateOrConnectWithoutBusinessInput | IncomeCreateOrConnectWithoutBusinessInput[]
    createMany?: IncomeCreateManyBusinessInputEnvelope
    connect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
  }

  export type ExpensesCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ExpensesCreateWithoutBusinessInput, ExpensesUncheckedCreateWithoutBusinessInput> | ExpensesCreateWithoutBusinessInput[] | ExpensesUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ExpensesCreateOrConnectWithoutBusinessInput | ExpensesCreateOrConnectWithoutBusinessInput[]
    createMany?: ExpensesCreateManyBusinessInputEnvelope
    connect?: ExpensesWhereUniqueInput | ExpensesWhereUniqueInput[]
  }

  export type ClientsUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ClientsCreateWithoutBusinessInput, ClientsUncheckedCreateWithoutBusinessInput> | ClientsCreateWithoutBusinessInput[] | ClientsUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ClientsCreateOrConnectWithoutBusinessInput | ClientsCreateOrConnectWithoutBusinessInput[]
    createMany?: ClientsCreateManyBusinessInputEnvelope
    connect?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<OrdersCreateWithoutBusinessInput, OrdersUncheckedCreateWithoutBusinessInput> | OrdersCreateWithoutBusinessInput[] | OrdersUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutBusinessInput | OrdersCreateOrConnectWithoutBusinessInput[]
    createMany?: OrdersCreateManyBusinessInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type FinancialRecordUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<FinancialRecordCreateWithoutBusinessInput, FinancialRecordUncheckedCreateWithoutBusinessInput> | FinancialRecordCreateWithoutBusinessInput[] | FinancialRecordUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: FinancialRecordCreateOrConnectWithoutBusinessInput | FinancialRecordCreateOrConnectWithoutBusinessInput[]
    createMany?: FinancialRecordCreateManyBusinessInputEnvelope
    connect?: FinancialRecordWhereUniqueInput | FinancialRecordWhereUniqueInput[]
  }

  export type IncomeUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<IncomeCreateWithoutBusinessInput, IncomeUncheckedCreateWithoutBusinessInput> | IncomeCreateWithoutBusinessInput[] | IncomeUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: IncomeCreateOrConnectWithoutBusinessInput | IncomeCreateOrConnectWithoutBusinessInput[]
    createMany?: IncomeCreateManyBusinessInputEnvelope
    connect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
  }

  export type ExpensesUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ExpensesCreateWithoutBusinessInput, ExpensesUncheckedCreateWithoutBusinessInput> | ExpensesCreateWithoutBusinessInput[] | ExpensesUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ExpensesCreateOrConnectWithoutBusinessInput | ExpensesCreateOrConnectWithoutBusinessInput[]
    createMany?: ExpensesCreateManyBusinessInputEnvelope
    connect?: ExpensesWhereUniqueInput | ExpensesWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutBusinessNestedInput = {
    create?: XOR<UsersCreateWithoutBusinessInput, UsersUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBusinessInput
    upsert?: UsersUpsertWithoutBusinessInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutBusinessInput, UsersUpdateWithoutBusinessInput>, UsersUncheckedUpdateWithoutBusinessInput>
  }

  export type ClientsUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ClientsCreateWithoutBusinessInput, ClientsUncheckedCreateWithoutBusinessInput> | ClientsCreateWithoutBusinessInput[] | ClientsUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ClientsCreateOrConnectWithoutBusinessInput | ClientsCreateOrConnectWithoutBusinessInput[]
    upsert?: ClientsUpsertWithWhereUniqueWithoutBusinessInput | ClientsUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ClientsCreateManyBusinessInputEnvelope
    set?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
    disconnect?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
    delete?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
    connect?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
    update?: ClientsUpdateWithWhereUniqueWithoutBusinessInput | ClientsUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ClientsUpdateManyWithWhereWithoutBusinessInput | ClientsUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ClientsScalarWhereInput | ClientsScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<OrdersCreateWithoutBusinessInput, OrdersUncheckedCreateWithoutBusinessInput> | OrdersCreateWithoutBusinessInput[] | OrdersUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutBusinessInput | OrdersCreateOrConnectWithoutBusinessInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutBusinessInput | OrdersUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: OrdersCreateManyBusinessInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutBusinessInput | OrdersUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutBusinessInput | OrdersUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type FinancialRecordUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<FinancialRecordCreateWithoutBusinessInput, FinancialRecordUncheckedCreateWithoutBusinessInput> | FinancialRecordCreateWithoutBusinessInput[] | FinancialRecordUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: FinancialRecordCreateOrConnectWithoutBusinessInput | FinancialRecordCreateOrConnectWithoutBusinessInput[]
    upsert?: FinancialRecordUpsertWithWhereUniqueWithoutBusinessInput | FinancialRecordUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: FinancialRecordCreateManyBusinessInputEnvelope
    set?: FinancialRecordWhereUniqueInput | FinancialRecordWhereUniqueInput[]
    disconnect?: FinancialRecordWhereUniqueInput | FinancialRecordWhereUniqueInput[]
    delete?: FinancialRecordWhereUniqueInput | FinancialRecordWhereUniqueInput[]
    connect?: FinancialRecordWhereUniqueInput | FinancialRecordWhereUniqueInput[]
    update?: FinancialRecordUpdateWithWhereUniqueWithoutBusinessInput | FinancialRecordUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: FinancialRecordUpdateManyWithWhereWithoutBusinessInput | FinancialRecordUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: FinancialRecordScalarWhereInput | FinancialRecordScalarWhereInput[]
  }

  export type IncomeUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<IncomeCreateWithoutBusinessInput, IncomeUncheckedCreateWithoutBusinessInput> | IncomeCreateWithoutBusinessInput[] | IncomeUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: IncomeCreateOrConnectWithoutBusinessInput | IncomeCreateOrConnectWithoutBusinessInput[]
    upsert?: IncomeUpsertWithWhereUniqueWithoutBusinessInput | IncomeUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: IncomeCreateManyBusinessInputEnvelope
    set?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    disconnect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    delete?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    connect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    update?: IncomeUpdateWithWhereUniqueWithoutBusinessInput | IncomeUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: IncomeUpdateManyWithWhereWithoutBusinessInput | IncomeUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: IncomeScalarWhereInput | IncomeScalarWhereInput[]
  }

  export type ExpensesUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ExpensesCreateWithoutBusinessInput, ExpensesUncheckedCreateWithoutBusinessInput> | ExpensesCreateWithoutBusinessInput[] | ExpensesUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ExpensesCreateOrConnectWithoutBusinessInput | ExpensesCreateOrConnectWithoutBusinessInput[]
    upsert?: ExpensesUpsertWithWhereUniqueWithoutBusinessInput | ExpensesUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ExpensesCreateManyBusinessInputEnvelope
    set?: ExpensesWhereUniqueInput | ExpensesWhereUniqueInput[]
    disconnect?: ExpensesWhereUniqueInput | ExpensesWhereUniqueInput[]
    delete?: ExpensesWhereUniqueInput | ExpensesWhereUniqueInput[]
    connect?: ExpensesWhereUniqueInput | ExpensesWhereUniqueInput[]
    update?: ExpensesUpdateWithWhereUniqueWithoutBusinessInput | ExpensesUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ExpensesUpdateManyWithWhereWithoutBusinessInput | ExpensesUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ExpensesScalarWhereInput | ExpensesScalarWhereInput[]
  }

  export type ClientsUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ClientsCreateWithoutBusinessInput, ClientsUncheckedCreateWithoutBusinessInput> | ClientsCreateWithoutBusinessInput[] | ClientsUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ClientsCreateOrConnectWithoutBusinessInput | ClientsCreateOrConnectWithoutBusinessInput[]
    upsert?: ClientsUpsertWithWhereUniqueWithoutBusinessInput | ClientsUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ClientsCreateManyBusinessInputEnvelope
    set?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
    disconnect?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
    delete?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
    connect?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
    update?: ClientsUpdateWithWhereUniqueWithoutBusinessInput | ClientsUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ClientsUpdateManyWithWhereWithoutBusinessInput | ClientsUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ClientsScalarWhereInput | ClientsScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<OrdersCreateWithoutBusinessInput, OrdersUncheckedCreateWithoutBusinessInput> | OrdersCreateWithoutBusinessInput[] | OrdersUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutBusinessInput | OrdersCreateOrConnectWithoutBusinessInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutBusinessInput | OrdersUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: OrdersCreateManyBusinessInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutBusinessInput | OrdersUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutBusinessInput | OrdersUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type FinancialRecordUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<FinancialRecordCreateWithoutBusinessInput, FinancialRecordUncheckedCreateWithoutBusinessInput> | FinancialRecordCreateWithoutBusinessInput[] | FinancialRecordUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: FinancialRecordCreateOrConnectWithoutBusinessInput | FinancialRecordCreateOrConnectWithoutBusinessInput[]
    upsert?: FinancialRecordUpsertWithWhereUniqueWithoutBusinessInput | FinancialRecordUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: FinancialRecordCreateManyBusinessInputEnvelope
    set?: FinancialRecordWhereUniqueInput | FinancialRecordWhereUniqueInput[]
    disconnect?: FinancialRecordWhereUniqueInput | FinancialRecordWhereUniqueInput[]
    delete?: FinancialRecordWhereUniqueInput | FinancialRecordWhereUniqueInput[]
    connect?: FinancialRecordWhereUniqueInput | FinancialRecordWhereUniqueInput[]
    update?: FinancialRecordUpdateWithWhereUniqueWithoutBusinessInput | FinancialRecordUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: FinancialRecordUpdateManyWithWhereWithoutBusinessInput | FinancialRecordUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: FinancialRecordScalarWhereInput | FinancialRecordScalarWhereInput[]
  }

  export type IncomeUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<IncomeCreateWithoutBusinessInput, IncomeUncheckedCreateWithoutBusinessInput> | IncomeCreateWithoutBusinessInput[] | IncomeUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: IncomeCreateOrConnectWithoutBusinessInput | IncomeCreateOrConnectWithoutBusinessInput[]
    upsert?: IncomeUpsertWithWhereUniqueWithoutBusinessInput | IncomeUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: IncomeCreateManyBusinessInputEnvelope
    set?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    disconnect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    delete?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    connect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    update?: IncomeUpdateWithWhereUniqueWithoutBusinessInput | IncomeUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: IncomeUpdateManyWithWhereWithoutBusinessInput | IncomeUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: IncomeScalarWhereInput | IncomeScalarWhereInput[]
  }

  export type ExpensesUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ExpensesCreateWithoutBusinessInput, ExpensesUncheckedCreateWithoutBusinessInput> | ExpensesCreateWithoutBusinessInput[] | ExpensesUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ExpensesCreateOrConnectWithoutBusinessInput | ExpensesCreateOrConnectWithoutBusinessInput[]
    upsert?: ExpensesUpsertWithWhereUniqueWithoutBusinessInput | ExpensesUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ExpensesCreateManyBusinessInputEnvelope
    set?: ExpensesWhereUniqueInput | ExpensesWhereUniqueInput[]
    disconnect?: ExpensesWhereUniqueInput | ExpensesWhereUniqueInput[]
    delete?: ExpensesWhereUniqueInput | ExpensesWhereUniqueInput[]
    connect?: ExpensesWhereUniqueInput | ExpensesWhereUniqueInput[]
    update?: ExpensesUpdateWithWhereUniqueWithoutBusinessInput | ExpensesUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ExpensesUpdateManyWithWhereWithoutBusinessInput | ExpensesUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ExpensesScalarWhereInput | ExpensesScalarWhereInput[]
  }

  export type BusinessesCreateNestedOneWithoutClientsInput = {
    create?: XOR<BusinessesCreateWithoutClientsInput, BusinessesUncheckedCreateWithoutClientsInput>
    connectOrCreate?: BusinessesCreateOrConnectWithoutClientsInput
    connect?: BusinessesWhereUniqueInput
  }

  export type MeasurementsCreateNestedOneWithoutClientInput = {
    create?: XOR<MeasurementsCreateWithoutClientInput, MeasurementsUncheckedCreateWithoutClientInput>
    connectOrCreate?: MeasurementsCreateOrConnectWithoutClientInput
    connect?: MeasurementsWhereUniqueInput
  }

  export type OrdersCreateNestedManyWithoutClientInput = {
    create?: XOR<OrdersCreateWithoutClientInput, OrdersUncheckedCreateWithoutClientInput> | OrdersCreateWithoutClientInput[] | OrdersUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutClientInput | OrdersCreateOrConnectWithoutClientInput[]
    createMany?: OrdersCreateManyClientInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type MeasurementsUncheckedCreateNestedOneWithoutClientInput = {
    create?: XOR<MeasurementsCreateWithoutClientInput, MeasurementsUncheckedCreateWithoutClientInput>
    connectOrCreate?: MeasurementsCreateOrConnectWithoutClientInput
    connect?: MeasurementsWhereUniqueInput
  }

  export type OrdersUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<OrdersCreateWithoutClientInput, OrdersUncheckedCreateWithoutClientInput> | OrdersCreateWithoutClientInput[] | OrdersUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutClientInput | OrdersCreateOrConnectWithoutClientInput[]
    createMany?: OrdersCreateManyClientInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type BusinessesUpdateOneRequiredWithoutClientsNestedInput = {
    create?: XOR<BusinessesCreateWithoutClientsInput, BusinessesUncheckedCreateWithoutClientsInput>
    connectOrCreate?: BusinessesCreateOrConnectWithoutClientsInput
    upsert?: BusinessesUpsertWithoutClientsInput
    connect?: BusinessesWhereUniqueInput
    update?: XOR<XOR<BusinessesUpdateToOneWithWhereWithoutClientsInput, BusinessesUpdateWithoutClientsInput>, BusinessesUncheckedUpdateWithoutClientsInput>
  }

  export type MeasurementsUpdateOneWithoutClientNestedInput = {
    create?: XOR<MeasurementsCreateWithoutClientInput, MeasurementsUncheckedCreateWithoutClientInput>
    connectOrCreate?: MeasurementsCreateOrConnectWithoutClientInput
    upsert?: MeasurementsUpsertWithoutClientInput
    disconnect?: MeasurementsWhereInput | boolean
    delete?: MeasurementsWhereInput | boolean
    connect?: MeasurementsWhereUniqueInput
    update?: XOR<XOR<MeasurementsUpdateToOneWithWhereWithoutClientInput, MeasurementsUpdateWithoutClientInput>, MeasurementsUncheckedUpdateWithoutClientInput>
  }

  export type OrdersUpdateManyWithoutClientNestedInput = {
    create?: XOR<OrdersCreateWithoutClientInput, OrdersUncheckedCreateWithoutClientInput> | OrdersCreateWithoutClientInput[] | OrdersUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutClientInput | OrdersCreateOrConnectWithoutClientInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutClientInput | OrdersUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: OrdersCreateManyClientInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutClientInput | OrdersUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutClientInput | OrdersUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type MeasurementsUncheckedUpdateOneWithoutClientNestedInput = {
    create?: XOR<MeasurementsCreateWithoutClientInput, MeasurementsUncheckedCreateWithoutClientInput>
    connectOrCreate?: MeasurementsCreateOrConnectWithoutClientInput
    upsert?: MeasurementsUpsertWithoutClientInput
    disconnect?: MeasurementsWhereInput | boolean
    delete?: MeasurementsWhereInput | boolean
    connect?: MeasurementsWhereUniqueInput
    update?: XOR<XOR<MeasurementsUpdateToOneWithWhereWithoutClientInput, MeasurementsUpdateWithoutClientInput>, MeasurementsUncheckedUpdateWithoutClientInput>
  }

  export type OrdersUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<OrdersCreateWithoutClientInput, OrdersUncheckedCreateWithoutClientInput> | OrdersCreateWithoutClientInput[] | OrdersUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutClientInput | OrdersCreateOrConnectWithoutClientInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutClientInput | OrdersUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: OrdersCreateManyClientInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutClientInput | OrdersUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutClientInput | OrdersUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutNotificationsInput
    connect?: UsersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsersUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutNotificationsInput
    upsert?: UsersUpsertWithoutNotificationsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutNotificationsInput, UsersUpdateWithoutNotificationsInput>, UsersUncheckedUpdateWithoutNotificationsInput>
  }

  export type ClientsCreateNestedOneWithoutMeasurementsInput = {
    create?: XOR<ClientsCreateWithoutMeasurementsInput, ClientsUncheckedCreateWithoutMeasurementsInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutMeasurementsInput
    connect?: ClientsWhereUniqueInput
  }

  export type ClientsUpdateOneRequiredWithoutMeasurementsNestedInput = {
    create?: XOR<ClientsCreateWithoutMeasurementsInput, ClientsUncheckedCreateWithoutMeasurementsInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutMeasurementsInput
    upsert?: ClientsUpsertWithoutMeasurementsInput
    connect?: ClientsWhereUniqueInput
    update?: XOR<XOR<ClientsUpdateToOneWithWhereWithoutMeasurementsInput, ClientsUpdateWithoutMeasurementsInput>, ClientsUncheckedUpdateWithoutMeasurementsInput>
  }

  export type BusinessesCreateNestedOneWithoutOrdersInput = {
    create?: XOR<BusinessesCreateWithoutOrdersInput, BusinessesUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: BusinessesCreateOrConnectWithoutOrdersInput
    connect?: BusinessesWhereUniqueInput
  }

  export type ClientsCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ClientsCreateWithoutOrdersInput, ClientsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutOrdersInput
    connect?: ClientsWhereUniqueInput
  }

  export type PaymentsCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput
    connect?: PaymentsWhereUniqueInput
  }

  export type PaymentsUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput
    connect?: PaymentsWhereUniqueInput
  }

  export type EnumCompletionStatusFieldUpdateOperationsInput = {
    set?: $Enums.CompletionStatus
  }

  export type BusinessesUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<BusinessesCreateWithoutOrdersInput, BusinessesUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: BusinessesCreateOrConnectWithoutOrdersInput
    upsert?: BusinessesUpsertWithoutOrdersInput
    connect?: BusinessesWhereUniqueInput
    update?: XOR<XOR<BusinessesUpdateToOneWithWhereWithoutOrdersInput, BusinessesUpdateWithoutOrdersInput>, BusinessesUncheckedUpdateWithoutOrdersInput>
  }

  export type ClientsUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ClientsCreateWithoutOrdersInput, ClientsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutOrdersInput
    upsert?: ClientsUpsertWithoutOrdersInput
    connect?: ClientsWhereUniqueInput
    update?: XOR<XOR<ClientsUpdateToOneWithWhereWithoutOrdersInput, ClientsUpdateWithoutOrdersInput>, ClientsUncheckedUpdateWithoutOrdersInput>
  }

  export type PaymentsUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput
    upsert?: PaymentsUpsertWithoutOrderInput
    disconnect?: PaymentsWhereInput | boolean
    delete?: PaymentsWhereInput | boolean
    connect?: PaymentsWhereUniqueInput
    update?: XOR<XOR<PaymentsUpdateToOneWithWhereWithoutOrderInput, PaymentsUpdateWithoutOrderInput>, PaymentsUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentsUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput
    upsert?: PaymentsUpsertWithoutOrderInput
    disconnect?: PaymentsWhereInput | boolean
    delete?: PaymentsWhereInput | boolean
    connect?: PaymentsWhereUniqueInput
    update?: XOR<XOR<PaymentsUpdateToOneWithWhereWithoutOrderInput, PaymentsUpdateWithoutOrderInput>, PaymentsUncheckedUpdateWithoutOrderInput>
  }

  export type OrdersCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<OrdersCreateWithoutPaymentsInput, OrdersUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutPaymentsInput
    connect?: OrdersWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrdersUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<OrdersCreateWithoutPaymentsInput, OrdersUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutPaymentsInput
    upsert?: OrdersUpsertWithoutPaymentsInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutPaymentsInput, OrdersUpdateWithoutPaymentsInput>, OrdersUncheckedUpdateWithoutPaymentsInput>
  }

  export type BusinessesCreateNestedOneWithoutIncomeInput = {
    create?: XOR<BusinessesCreateWithoutIncomeInput, BusinessesUncheckedCreateWithoutIncomeInput>
    connectOrCreate?: BusinessesCreateOrConnectWithoutIncomeInput
    connect?: BusinessesWhereUniqueInput
  }

  export type BusinessesUpdateOneRequiredWithoutIncomeNestedInput = {
    create?: XOR<BusinessesCreateWithoutIncomeInput, BusinessesUncheckedCreateWithoutIncomeInput>
    connectOrCreate?: BusinessesCreateOrConnectWithoutIncomeInput
    upsert?: BusinessesUpsertWithoutIncomeInput
    connect?: BusinessesWhereUniqueInput
    update?: XOR<XOR<BusinessesUpdateToOneWithWhereWithoutIncomeInput, BusinessesUpdateWithoutIncomeInput>, BusinessesUncheckedUpdateWithoutIncomeInput>
  }

  export type BusinessesCreateNestedOneWithoutExpensesInput = {
    create?: XOR<BusinessesCreateWithoutExpensesInput, BusinessesUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: BusinessesCreateOrConnectWithoutExpensesInput
    connect?: BusinessesWhereUniqueInput
  }

  export type BusinessesUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<BusinessesCreateWithoutExpensesInput, BusinessesUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: BusinessesCreateOrConnectWithoutExpensesInput
    upsert?: BusinessesUpsertWithoutExpensesInput
    connect?: BusinessesWhereUniqueInput
    update?: XOR<XOR<BusinessesUpdateToOneWithWhereWithoutExpensesInput, BusinessesUpdateWithoutExpensesInput>, BusinessesUncheckedUpdateWithoutExpensesInput>
  }

  export type BusinessesCreateNestedOneWithoutFinancialRecordsInput = {
    create?: XOR<BusinessesCreateWithoutFinancialRecordsInput, BusinessesUncheckedCreateWithoutFinancialRecordsInput>
    connectOrCreate?: BusinessesCreateOrConnectWithoutFinancialRecordsInput
    connect?: BusinessesWhereUniqueInput
  }

  export type BusinessesUpdateOneRequiredWithoutFinancialRecordsNestedInput = {
    create?: XOR<BusinessesCreateWithoutFinancialRecordsInput, BusinessesUncheckedCreateWithoutFinancialRecordsInput>
    connectOrCreate?: BusinessesCreateOrConnectWithoutFinancialRecordsInput
    upsert?: BusinessesUpsertWithoutFinancialRecordsInput
    connect?: BusinessesWhereUniqueInput
    update?: XOR<XOR<BusinessesUpdateToOneWithWhereWithoutFinancialRecordsInput, BusinessesUpdateWithoutFinancialRecordsInput>, BusinessesUncheckedUpdateWithoutFinancialRecordsInput>
  }

  export type UsersCreateNestedOneWithoutEventsInput = {
    create?: XOR<UsersCreateWithoutEventsInput, UsersUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEventsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<UsersCreateWithoutEventsInput, UsersUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEventsInput
    upsert?: UsersUpsertWithoutEventsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutEventsInput, UsersUpdateWithoutEventsInput>, UsersUncheckedUpdateWithoutEventsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCompletionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CompletionStatus | EnumCompletionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CompletionStatus[] | ListEnumCompletionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompletionStatus[] | ListEnumCompletionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCompletionStatusFilter<$PrismaModel> | $Enums.CompletionStatus
  }

  export type NestedEnumCompletionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompletionStatus | EnumCompletionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CompletionStatus[] | ListEnumCompletionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompletionStatus[] | ListEnumCompletionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCompletionStatusWithAggregatesFilter<$PrismaModel> | $Enums.CompletionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCompletionStatusFilter<$PrismaModel>
    _max?: NestedEnumCompletionStatusFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NotificationsCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    read: boolean
    type: string
    message: string
  }

  export type NotificationsUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    read: boolean
    type: string
    message: string
  }

  export type NotificationsCreateOrConnectWithoutUserInput = {
    where: NotificationsWhereUniqueInput
    create: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput>
  }

  export type NotificationsCreateManyUserInputEnvelope = {
    data: NotificationsCreateManyUserInput | NotificationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventsCreateWithoutUserInput = {
    id?: string
    title: string
    start: Date | string
    end: Date | string
    description?: string | null
  }

  export type EventsUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    start: Date | string
    end: Date | string
    description?: string | null
  }

  export type EventsCreateOrConnectWithoutUserInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutUserInput, EventsUncheckedCreateWithoutUserInput>
  }

  export type EventsCreateManyUserInputEnvelope = {
    data: EventsCreateManyUserInput | EventsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BusinessesCreateWithoutUserInput = {
    id?: string
    name?: string
    email?: string
    phone?: string
    address?: string
    currency?: string
    logo?: string | null
    clients?: ClientsCreateNestedManyWithoutBusinessInput
    orders?: OrdersCreateNestedManyWithoutBusinessInput
    financialRecords?: FinancialRecordCreateNestedManyWithoutBusinessInput
    income?: IncomeCreateNestedManyWithoutBusinessInput
    expenses?: ExpensesCreateNestedManyWithoutBusinessInput
  }

  export type BusinessesUncheckedCreateWithoutUserInput = {
    id?: string
    name?: string
    email?: string
    phone?: string
    address?: string
    currency?: string
    logo?: string | null
    clients?: ClientsUncheckedCreateNestedManyWithoutBusinessInput
    orders?: OrdersUncheckedCreateNestedManyWithoutBusinessInput
    financialRecords?: FinancialRecordUncheckedCreateNestedManyWithoutBusinessInput
    income?: IncomeUncheckedCreateNestedManyWithoutBusinessInput
    expenses?: ExpensesUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessesCreateOrConnectWithoutUserInput = {
    where: BusinessesWhereUniqueInput
    create: XOR<BusinessesCreateWithoutUserInput, BusinessesUncheckedCreateWithoutUserInput>
  }

  export type NotificationsUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationsWhereUniqueInput
    update: XOR<NotificationsUpdateWithoutUserInput, NotificationsUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput>
  }

  export type NotificationsUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationsWhereUniqueInput
    data: XOR<NotificationsUpdateWithoutUserInput, NotificationsUncheckedUpdateWithoutUserInput>
  }

  export type NotificationsUpdateManyWithWhereWithoutUserInput = {
    where: NotificationsScalarWhereInput
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationsScalarWhereInput = {
    AND?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    OR?: NotificationsScalarWhereInput[]
    NOT?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    id?: StringFilter<"Notifications"> | string
    userId?: StringFilter<"Notifications"> | string
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
    read?: BoolFilter<"Notifications"> | boolean
    type?: StringFilter<"Notifications"> | string
    message?: StringFilter<"Notifications"> | string
  }

  export type EventsUpsertWithWhereUniqueWithoutUserInput = {
    where: EventsWhereUniqueInput
    update: XOR<EventsUpdateWithoutUserInput, EventsUncheckedUpdateWithoutUserInput>
    create: XOR<EventsCreateWithoutUserInput, EventsUncheckedCreateWithoutUserInput>
  }

  export type EventsUpdateWithWhereUniqueWithoutUserInput = {
    where: EventsWhereUniqueInput
    data: XOR<EventsUpdateWithoutUserInput, EventsUncheckedUpdateWithoutUserInput>
  }

  export type EventsUpdateManyWithWhereWithoutUserInput = {
    where: EventsScalarWhereInput
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyWithoutUserInput>
  }

  export type EventsScalarWhereInput = {
    AND?: EventsScalarWhereInput | EventsScalarWhereInput[]
    OR?: EventsScalarWhereInput[]
    NOT?: EventsScalarWhereInput | EventsScalarWhereInput[]
    id?: StringFilter<"Events"> | string
    title?: StringFilter<"Events"> | string
    start?: DateTimeFilter<"Events"> | Date | string
    end?: DateTimeFilter<"Events"> | Date | string
    description?: StringNullableFilter<"Events"> | string | null
    userId?: StringFilter<"Events"> | string
  }

  export type BusinessesUpsertWithoutUserInput = {
    update: XOR<BusinessesUpdateWithoutUserInput, BusinessesUncheckedUpdateWithoutUserInput>
    create: XOR<BusinessesCreateWithoutUserInput, BusinessesUncheckedCreateWithoutUserInput>
    where?: BusinessesWhereInput
  }

  export type BusinessesUpdateToOneWithWhereWithoutUserInput = {
    where?: BusinessesWhereInput
    data: XOR<BusinessesUpdateWithoutUserInput, BusinessesUncheckedUpdateWithoutUserInput>
  }

  export type BusinessesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    clients?: ClientsUpdateManyWithoutBusinessNestedInput
    orders?: OrdersUpdateManyWithoutBusinessNestedInput
    financialRecords?: FinancialRecordUpdateManyWithoutBusinessNestedInput
    income?: IncomeUpdateManyWithoutBusinessNestedInput
    expenses?: ExpensesUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    clients?: ClientsUncheckedUpdateManyWithoutBusinessNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutBusinessNestedInput
    financialRecords?: FinancialRecordUncheckedUpdateManyWithoutBusinessNestedInput
    income?: IncomeUncheckedUpdateManyWithoutBusinessNestedInput
    expenses?: ExpensesUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type UsersCreateWithoutBusinessInput = {
    id?: string
    Fname: string
    Sname: string
    email: string
    role: $Enums.Role
    phone?: string | null
    profile_url?: string | null
    accountStatus?: boolean
    password: string
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    events?: EventsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutBusinessInput = {
    id?: string
    Fname: string
    Sname: string
    email: string
    role: $Enums.Role
    phone?: string | null
    profile_url?: string | null
    accountStatus?: boolean
    password: string
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    events?: EventsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutBusinessInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutBusinessInput, UsersUncheckedCreateWithoutBusinessInput>
  }

  export type ClientsCreateWithoutBusinessInput = {
    id?: string
    Fname: string
    Sname: string
    email?: string | null
    phone: string
    activeOrder?: boolean
    measurements?: MeasurementsCreateNestedOneWithoutClientInput
    orders?: OrdersCreateNestedManyWithoutClientInput
  }

  export type ClientsUncheckedCreateWithoutBusinessInput = {
    id?: string
    Fname: string
    Sname: string
    email?: string | null
    phone: string
    activeOrder?: boolean
    measurements?: MeasurementsUncheckedCreateNestedOneWithoutClientInput
    orders?: OrdersUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientsCreateOrConnectWithoutBusinessInput = {
    where: ClientsWhereUniqueInput
    create: XOR<ClientsCreateWithoutBusinessInput, ClientsUncheckedCreateWithoutBusinessInput>
  }

  export type ClientsCreateManyBusinessInputEnvelope = {
    data: ClientsCreateManyBusinessInput | ClientsCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutBusinessInput = {
    id?: string
    item: string
    description?: string | null
    collectionDate: Date | string
    completionStatus?: $Enums.CompletionStatus
    client: ClientsCreateNestedOneWithoutOrdersInput
    payments?: PaymentsCreateNestedOneWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutBusinessInput = {
    id?: string
    item: string
    description?: string | null
    collectionDate: Date | string
    completionStatus?: $Enums.CompletionStatus
    clientId: string
    payments?: PaymentsUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutBusinessInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutBusinessInput, OrdersUncheckedCreateWithoutBusinessInput>
  }

  export type OrdersCreateManyBusinessInputEnvelope = {
    data: OrdersCreateManyBusinessInput | OrdersCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type FinancialRecordCreateWithoutBusinessInput = {
    id?: string
    date: Date | string
    income?: number
    expenses?: number
    profit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialRecordUncheckedCreateWithoutBusinessInput = {
    id?: string
    date: Date | string
    income?: number
    expenses?: number
    profit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialRecordCreateOrConnectWithoutBusinessInput = {
    where: FinancialRecordWhereUniqueInput
    create: XOR<FinancialRecordCreateWithoutBusinessInput, FinancialRecordUncheckedCreateWithoutBusinessInput>
  }

  export type FinancialRecordCreateManyBusinessInputEnvelope = {
    data: FinancialRecordCreateManyBusinessInput | FinancialRecordCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type IncomeCreateWithoutBusinessInput = {
    id?: string
    amount: number
    description: string
    createdAt?: Date | string
    category: string
  }

  export type IncomeUncheckedCreateWithoutBusinessInput = {
    id?: string
    amount: number
    description: string
    createdAt?: Date | string
    category: string
  }

  export type IncomeCreateOrConnectWithoutBusinessInput = {
    where: IncomeWhereUniqueInput
    create: XOR<IncomeCreateWithoutBusinessInput, IncomeUncheckedCreateWithoutBusinessInput>
  }

  export type IncomeCreateManyBusinessInputEnvelope = {
    data: IncomeCreateManyBusinessInput | IncomeCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type ExpensesCreateWithoutBusinessInput = {
    id?: string
    amount: number
    description: string
    createdAt?: Date | string
    category: string
  }

  export type ExpensesUncheckedCreateWithoutBusinessInput = {
    id?: string
    amount: number
    description: string
    createdAt?: Date | string
    category: string
  }

  export type ExpensesCreateOrConnectWithoutBusinessInput = {
    where: ExpensesWhereUniqueInput
    create: XOR<ExpensesCreateWithoutBusinessInput, ExpensesUncheckedCreateWithoutBusinessInput>
  }

  export type ExpensesCreateManyBusinessInputEnvelope = {
    data: ExpensesCreateManyBusinessInput | ExpensesCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutBusinessInput = {
    update: XOR<UsersUpdateWithoutBusinessInput, UsersUncheckedUpdateWithoutBusinessInput>
    create: XOR<UsersCreateWithoutBusinessInput, UsersUncheckedCreateWithoutBusinessInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutBusinessInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutBusinessInput, UsersUncheckedUpdateWithoutBusinessInput>
  }

  export type UsersUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    Fname?: StringFieldUpdateOperationsInput | string
    Sname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null
    accountStatus?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    events?: EventsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    Fname?: StringFieldUpdateOperationsInput | string
    Sname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null
    accountStatus?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    events?: EventsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClientsUpsertWithWhereUniqueWithoutBusinessInput = {
    where: ClientsWhereUniqueInput
    update: XOR<ClientsUpdateWithoutBusinessInput, ClientsUncheckedUpdateWithoutBusinessInput>
    create: XOR<ClientsCreateWithoutBusinessInput, ClientsUncheckedCreateWithoutBusinessInput>
  }

  export type ClientsUpdateWithWhereUniqueWithoutBusinessInput = {
    where: ClientsWhereUniqueInput
    data: XOR<ClientsUpdateWithoutBusinessInput, ClientsUncheckedUpdateWithoutBusinessInput>
  }

  export type ClientsUpdateManyWithWhereWithoutBusinessInput = {
    where: ClientsScalarWhereInput
    data: XOR<ClientsUpdateManyMutationInput, ClientsUncheckedUpdateManyWithoutBusinessInput>
  }

  export type ClientsScalarWhereInput = {
    AND?: ClientsScalarWhereInput | ClientsScalarWhereInput[]
    OR?: ClientsScalarWhereInput[]
    NOT?: ClientsScalarWhereInput | ClientsScalarWhereInput[]
    id?: StringFilter<"Clients"> | string
    Fname?: StringFilter<"Clients"> | string
    Sname?: StringFilter<"Clients"> | string
    email?: StringNullableFilter<"Clients"> | string | null
    phone?: StringFilter<"Clients"> | string
    businessId?: StringFilter<"Clients"> | string
    activeOrder?: BoolFilter<"Clients"> | boolean
  }

  export type OrdersUpsertWithWhereUniqueWithoutBusinessInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutBusinessInput, OrdersUncheckedUpdateWithoutBusinessInput>
    create: XOR<OrdersCreateWithoutBusinessInput, OrdersUncheckedCreateWithoutBusinessInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutBusinessInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutBusinessInput, OrdersUncheckedUpdateWithoutBusinessInput>
  }

  export type OrdersUpdateManyWithWhereWithoutBusinessInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutBusinessInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    id?: StringFilter<"Orders"> | string
    item?: StringFilter<"Orders"> | string
    description?: StringNullableFilter<"Orders"> | string | null
    collectionDate?: DateTimeFilter<"Orders"> | Date | string
    completionStatus?: EnumCompletionStatusFilter<"Orders"> | $Enums.CompletionStatus
    businessId?: StringFilter<"Orders"> | string
    clientId?: StringFilter<"Orders"> | string
  }

  export type FinancialRecordUpsertWithWhereUniqueWithoutBusinessInput = {
    where: FinancialRecordWhereUniqueInput
    update: XOR<FinancialRecordUpdateWithoutBusinessInput, FinancialRecordUncheckedUpdateWithoutBusinessInput>
    create: XOR<FinancialRecordCreateWithoutBusinessInput, FinancialRecordUncheckedCreateWithoutBusinessInput>
  }

  export type FinancialRecordUpdateWithWhereUniqueWithoutBusinessInput = {
    where: FinancialRecordWhereUniqueInput
    data: XOR<FinancialRecordUpdateWithoutBusinessInput, FinancialRecordUncheckedUpdateWithoutBusinessInput>
  }

  export type FinancialRecordUpdateManyWithWhereWithoutBusinessInput = {
    where: FinancialRecordScalarWhereInput
    data: XOR<FinancialRecordUpdateManyMutationInput, FinancialRecordUncheckedUpdateManyWithoutBusinessInput>
  }

  export type FinancialRecordScalarWhereInput = {
    AND?: FinancialRecordScalarWhereInput | FinancialRecordScalarWhereInput[]
    OR?: FinancialRecordScalarWhereInput[]
    NOT?: FinancialRecordScalarWhereInput | FinancialRecordScalarWhereInput[]
    id?: StringFilter<"FinancialRecord"> | string
    businessId?: StringFilter<"FinancialRecord"> | string
    date?: DateTimeFilter<"FinancialRecord"> | Date | string
    income?: FloatFilter<"FinancialRecord"> | number
    expenses?: FloatFilter<"FinancialRecord"> | number
    profit?: FloatFilter<"FinancialRecord"> | number
    createdAt?: DateTimeFilter<"FinancialRecord"> | Date | string
    updatedAt?: DateTimeFilter<"FinancialRecord"> | Date | string
  }

  export type IncomeUpsertWithWhereUniqueWithoutBusinessInput = {
    where: IncomeWhereUniqueInput
    update: XOR<IncomeUpdateWithoutBusinessInput, IncomeUncheckedUpdateWithoutBusinessInput>
    create: XOR<IncomeCreateWithoutBusinessInput, IncomeUncheckedCreateWithoutBusinessInput>
  }

  export type IncomeUpdateWithWhereUniqueWithoutBusinessInput = {
    where: IncomeWhereUniqueInput
    data: XOR<IncomeUpdateWithoutBusinessInput, IncomeUncheckedUpdateWithoutBusinessInput>
  }

  export type IncomeUpdateManyWithWhereWithoutBusinessInput = {
    where: IncomeScalarWhereInput
    data: XOR<IncomeUpdateManyMutationInput, IncomeUncheckedUpdateManyWithoutBusinessInput>
  }

  export type IncomeScalarWhereInput = {
    AND?: IncomeScalarWhereInput | IncomeScalarWhereInput[]
    OR?: IncomeScalarWhereInput[]
    NOT?: IncomeScalarWhereInput | IncomeScalarWhereInput[]
    id?: StringFilter<"Income"> | string
    amount?: FloatFilter<"Income"> | number
    businessId?: StringFilter<"Income"> | string
    description?: StringFilter<"Income"> | string
    createdAt?: DateTimeFilter<"Income"> | Date | string
    category?: StringFilter<"Income"> | string
  }

  export type ExpensesUpsertWithWhereUniqueWithoutBusinessInput = {
    where: ExpensesWhereUniqueInput
    update: XOR<ExpensesUpdateWithoutBusinessInput, ExpensesUncheckedUpdateWithoutBusinessInput>
    create: XOR<ExpensesCreateWithoutBusinessInput, ExpensesUncheckedCreateWithoutBusinessInput>
  }

  export type ExpensesUpdateWithWhereUniqueWithoutBusinessInput = {
    where: ExpensesWhereUniqueInput
    data: XOR<ExpensesUpdateWithoutBusinessInput, ExpensesUncheckedUpdateWithoutBusinessInput>
  }

  export type ExpensesUpdateManyWithWhereWithoutBusinessInput = {
    where: ExpensesScalarWhereInput
    data: XOR<ExpensesUpdateManyMutationInput, ExpensesUncheckedUpdateManyWithoutBusinessInput>
  }

  export type ExpensesScalarWhereInput = {
    AND?: ExpensesScalarWhereInput | ExpensesScalarWhereInput[]
    OR?: ExpensesScalarWhereInput[]
    NOT?: ExpensesScalarWhereInput | ExpensesScalarWhereInput[]
    id?: StringFilter<"Expenses"> | string
    amount?: FloatFilter<"Expenses"> | number
    businessId?: StringFilter<"Expenses"> | string
    description?: StringFilter<"Expenses"> | string
    createdAt?: DateTimeFilter<"Expenses"> | Date | string
    category?: StringFilter<"Expenses"> | string
  }

  export type BusinessesCreateWithoutClientsInput = {
    id?: string
    name?: string
    email?: string
    phone?: string
    address?: string
    currency?: string
    logo?: string | null
    user: UsersCreateNestedOneWithoutBusinessInput
    orders?: OrdersCreateNestedManyWithoutBusinessInput
    financialRecords?: FinancialRecordCreateNestedManyWithoutBusinessInput
    income?: IncomeCreateNestedManyWithoutBusinessInput
    expenses?: ExpensesCreateNestedManyWithoutBusinessInput
  }

  export type BusinessesUncheckedCreateWithoutClientsInput = {
    id?: string
    name?: string
    email?: string
    phone?: string
    address?: string
    currency?: string
    logo?: string | null
    userId: string
    orders?: OrdersUncheckedCreateNestedManyWithoutBusinessInput
    financialRecords?: FinancialRecordUncheckedCreateNestedManyWithoutBusinessInput
    income?: IncomeUncheckedCreateNestedManyWithoutBusinessInput
    expenses?: ExpensesUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessesCreateOrConnectWithoutClientsInput = {
    where: BusinessesWhereUniqueInput
    create: XOR<BusinessesCreateWithoutClientsInput, BusinessesUncheckedCreateWithoutClientsInput>
  }

  export type MeasurementsCreateWithoutClientInput = {
    id?: string
    height: string
    shoulders: string
    hand: string
    chest: string
    waist: string
    hips: string
  }

  export type MeasurementsUncheckedCreateWithoutClientInput = {
    id?: string
    height: string
    shoulders: string
    hand: string
    chest: string
    waist: string
    hips: string
  }

  export type MeasurementsCreateOrConnectWithoutClientInput = {
    where: MeasurementsWhereUniqueInput
    create: XOR<MeasurementsCreateWithoutClientInput, MeasurementsUncheckedCreateWithoutClientInput>
  }

  export type OrdersCreateWithoutClientInput = {
    id?: string
    item: string
    description?: string | null
    collectionDate: Date | string
    completionStatus?: $Enums.CompletionStatus
    business: BusinessesCreateNestedOneWithoutOrdersInput
    payments?: PaymentsCreateNestedOneWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutClientInput = {
    id?: string
    item: string
    description?: string | null
    collectionDate: Date | string
    completionStatus?: $Enums.CompletionStatus
    businessId: string
    payments?: PaymentsUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutClientInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutClientInput, OrdersUncheckedCreateWithoutClientInput>
  }

  export type OrdersCreateManyClientInputEnvelope = {
    data: OrdersCreateManyClientInput | OrdersCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type BusinessesUpsertWithoutClientsInput = {
    update: XOR<BusinessesUpdateWithoutClientsInput, BusinessesUncheckedUpdateWithoutClientsInput>
    create: XOR<BusinessesCreateWithoutClientsInput, BusinessesUncheckedCreateWithoutClientsInput>
    where?: BusinessesWhereInput
  }

  export type BusinessesUpdateToOneWithWhereWithoutClientsInput = {
    where?: BusinessesWhereInput
    data: XOR<BusinessesUpdateWithoutClientsInput, BusinessesUncheckedUpdateWithoutClientsInput>
  }

  export type BusinessesUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneRequiredWithoutBusinessNestedInput
    orders?: OrdersUpdateManyWithoutBusinessNestedInput
    financialRecords?: FinancialRecordUpdateManyWithoutBusinessNestedInput
    income?: IncomeUpdateManyWithoutBusinessNestedInput
    expenses?: ExpensesUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessesUncheckedUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    orders?: OrdersUncheckedUpdateManyWithoutBusinessNestedInput
    financialRecords?: FinancialRecordUncheckedUpdateManyWithoutBusinessNestedInput
    income?: IncomeUncheckedUpdateManyWithoutBusinessNestedInput
    expenses?: ExpensesUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type MeasurementsUpsertWithoutClientInput = {
    update: XOR<MeasurementsUpdateWithoutClientInput, MeasurementsUncheckedUpdateWithoutClientInput>
    create: XOR<MeasurementsCreateWithoutClientInput, MeasurementsUncheckedCreateWithoutClientInput>
    where?: MeasurementsWhereInput
  }

  export type MeasurementsUpdateToOneWithWhereWithoutClientInput = {
    where?: MeasurementsWhereInput
    data: XOR<MeasurementsUpdateWithoutClientInput, MeasurementsUncheckedUpdateWithoutClientInput>
  }

  export type MeasurementsUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    shoulders?: StringFieldUpdateOperationsInput | string
    hand?: StringFieldUpdateOperationsInput | string
    chest?: StringFieldUpdateOperationsInput | string
    waist?: StringFieldUpdateOperationsInput | string
    hips?: StringFieldUpdateOperationsInput | string
  }

  export type MeasurementsUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    shoulders?: StringFieldUpdateOperationsInput | string
    hand?: StringFieldUpdateOperationsInput | string
    chest?: StringFieldUpdateOperationsInput | string
    waist?: StringFieldUpdateOperationsInput | string
    hips?: StringFieldUpdateOperationsInput | string
  }

  export type OrdersUpsertWithWhereUniqueWithoutClientInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutClientInput, OrdersUncheckedUpdateWithoutClientInput>
    create: XOR<OrdersCreateWithoutClientInput, OrdersUncheckedCreateWithoutClientInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutClientInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutClientInput, OrdersUncheckedUpdateWithoutClientInput>
  }

  export type OrdersUpdateManyWithWhereWithoutClientInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutClientInput>
  }

  export type UsersCreateWithoutNotificationsInput = {
    id?: string
    Fname: string
    Sname: string
    email: string
    role: $Enums.Role
    phone?: string | null
    profile_url?: string | null
    accountStatus?: boolean
    password: string
    events?: EventsCreateNestedManyWithoutUserInput
    business?: BusinessesCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutNotificationsInput = {
    id?: string
    Fname: string
    Sname: string
    email: string
    role: $Enums.Role
    phone?: string | null
    profile_url?: string | null
    accountStatus?: boolean
    password: string
    events?: EventsUncheckedCreateNestedManyWithoutUserInput
    business?: BusinessesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutNotificationsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
  }

  export type UsersUpsertWithoutNotificationsInput = {
    update: XOR<UsersUpdateWithoutNotificationsInput, UsersUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutNotificationsInput, UsersUncheckedUpdateWithoutNotificationsInput>
  }

  export type UsersUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    Fname?: StringFieldUpdateOperationsInput | string
    Sname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null
    accountStatus?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    events?: EventsUpdateManyWithoutUserNestedInput
    business?: BusinessesUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    Fname?: StringFieldUpdateOperationsInput | string
    Sname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null
    accountStatus?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    events?: EventsUncheckedUpdateManyWithoutUserNestedInput
    business?: BusinessesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ClientsCreateWithoutMeasurementsInput = {
    id?: string
    Fname: string
    Sname: string
    email?: string | null
    phone: string
    activeOrder?: boolean
    business: BusinessesCreateNestedOneWithoutClientsInput
    orders?: OrdersCreateNestedManyWithoutClientInput
  }

  export type ClientsUncheckedCreateWithoutMeasurementsInput = {
    id?: string
    Fname: string
    Sname: string
    email?: string | null
    phone: string
    businessId: string
    activeOrder?: boolean
    orders?: OrdersUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientsCreateOrConnectWithoutMeasurementsInput = {
    where: ClientsWhereUniqueInput
    create: XOR<ClientsCreateWithoutMeasurementsInput, ClientsUncheckedCreateWithoutMeasurementsInput>
  }

  export type ClientsUpsertWithoutMeasurementsInput = {
    update: XOR<ClientsUpdateWithoutMeasurementsInput, ClientsUncheckedUpdateWithoutMeasurementsInput>
    create: XOR<ClientsCreateWithoutMeasurementsInput, ClientsUncheckedCreateWithoutMeasurementsInput>
    where?: ClientsWhereInput
  }

  export type ClientsUpdateToOneWithWhereWithoutMeasurementsInput = {
    where?: ClientsWhereInput
    data: XOR<ClientsUpdateWithoutMeasurementsInput, ClientsUncheckedUpdateWithoutMeasurementsInput>
  }

  export type ClientsUpdateWithoutMeasurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    Fname?: StringFieldUpdateOperationsInput | string
    Sname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    activeOrder?: BoolFieldUpdateOperationsInput | boolean
    business?: BusinessesUpdateOneRequiredWithoutClientsNestedInput
    orders?: OrdersUpdateManyWithoutClientNestedInput
  }

  export type ClientsUncheckedUpdateWithoutMeasurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    Fname?: StringFieldUpdateOperationsInput | string
    Sname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    activeOrder?: BoolFieldUpdateOperationsInput | boolean
    orders?: OrdersUncheckedUpdateManyWithoutClientNestedInput
  }

  export type BusinessesCreateWithoutOrdersInput = {
    id?: string
    name?: string
    email?: string
    phone?: string
    address?: string
    currency?: string
    logo?: string | null
    user: UsersCreateNestedOneWithoutBusinessInput
    clients?: ClientsCreateNestedManyWithoutBusinessInput
    financialRecords?: FinancialRecordCreateNestedManyWithoutBusinessInput
    income?: IncomeCreateNestedManyWithoutBusinessInput
    expenses?: ExpensesCreateNestedManyWithoutBusinessInput
  }

  export type BusinessesUncheckedCreateWithoutOrdersInput = {
    id?: string
    name?: string
    email?: string
    phone?: string
    address?: string
    currency?: string
    logo?: string | null
    userId: string
    clients?: ClientsUncheckedCreateNestedManyWithoutBusinessInput
    financialRecords?: FinancialRecordUncheckedCreateNestedManyWithoutBusinessInput
    income?: IncomeUncheckedCreateNestedManyWithoutBusinessInput
    expenses?: ExpensesUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessesCreateOrConnectWithoutOrdersInput = {
    where: BusinessesWhereUniqueInput
    create: XOR<BusinessesCreateWithoutOrdersInput, BusinessesUncheckedCreateWithoutOrdersInput>
  }

  export type ClientsCreateWithoutOrdersInput = {
    id?: string
    Fname: string
    Sname: string
    email?: string | null
    phone: string
    activeOrder?: boolean
    business: BusinessesCreateNestedOneWithoutClientsInput
    measurements?: MeasurementsCreateNestedOneWithoutClientInput
  }

  export type ClientsUncheckedCreateWithoutOrdersInput = {
    id?: string
    Fname: string
    Sname: string
    email?: string | null
    phone: string
    businessId: string
    activeOrder?: boolean
    measurements?: MeasurementsUncheckedCreateNestedOneWithoutClientInput
  }

  export type ClientsCreateOrConnectWithoutOrdersInput = {
    where: ClientsWhereUniqueInput
    create: XOR<ClientsCreateWithoutOrdersInput, ClientsUncheckedCreateWithoutOrdersInput>
  }

  export type PaymentsCreateWithoutOrderInput = {
    id?: string
    paidAmount: number
    totalAmount: number
    createdAt?: Date | string
  }

  export type PaymentsUncheckedCreateWithoutOrderInput = {
    id?: string
    paidAmount: number
    totalAmount: number
    createdAt?: Date | string
  }

  export type PaymentsCreateOrConnectWithoutOrderInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
  }

  export type BusinessesUpsertWithoutOrdersInput = {
    update: XOR<BusinessesUpdateWithoutOrdersInput, BusinessesUncheckedUpdateWithoutOrdersInput>
    create: XOR<BusinessesCreateWithoutOrdersInput, BusinessesUncheckedCreateWithoutOrdersInput>
    where?: BusinessesWhereInput
  }

  export type BusinessesUpdateToOneWithWhereWithoutOrdersInput = {
    where?: BusinessesWhereInput
    data: XOR<BusinessesUpdateWithoutOrdersInput, BusinessesUncheckedUpdateWithoutOrdersInput>
  }

  export type BusinessesUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneRequiredWithoutBusinessNestedInput
    clients?: ClientsUpdateManyWithoutBusinessNestedInput
    financialRecords?: FinancialRecordUpdateManyWithoutBusinessNestedInput
    income?: IncomeUpdateManyWithoutBusinessNestedInput
    expenses?: ExpensesUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessesUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    clients?: ClientsUncheckedUpdateManyWithoutBusinessNestedInput
    financialRecords?: FinancialRecordUncheckedUpdateManyWithoutBusinessNestedInput
    income?: IncomeUncheckedUpdateManyWithoutBusinessNestedInput
    expenses?: ExpensesUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type ClientsUpsertWithoutOrdersInput = {
    update: XOR<ClientsUpdateWithoutOrdersInput, ClientsUncheckedUpdateWithoutOrdersInput>
    create: XOR<ClientsCreateWithoutOrdersInput, ClientsUncheckedCreateWithoutOrdersInput>
    where?: ClientsWhereInput
  }

  export type ClientsUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ClientsWhereInput
    data: XOR<ClientsUpdateWithoutOrdersInput, ClientsUncheckedUpdateWithoutOrdersInput>
  }

  export type ClientsUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    Fname?: StringFieldUpdateOperationsInput | string
    Sname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    activeOrder?: BoolFieldUpdateOperationsInput | boolean
    business?: BusinessesUpdateOneRequiredWithoutClientsNestedInput
    measurements?: MeasurementsUpdateOneWithoutClientNestedInput
  }

  export type ClientsUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    Fname?: StringFieldUpdateOperationsInput | string
    Sname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    activeOrder?: BoolFieldUpdateOperationsInput | boolean
    measurements?: MeasurementsUncheckedUpdateOneWithoutClientNestedInput
  }

  export type PaymentsUpsertWithoutOrderInput = {
    update: XOR<PaymentsUpdateWithoutOrderInput, PaymentsUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
    where?: PaymentsWhereInput
  }

  export type PaymentsUpdateToOneWithWhereWithoutOrderInput = {
    where?: PaymentsWhereInput
    data: XOR<PaymentsUpdateWithoutOrderInput, PaymentsUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentsUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    paidAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    paidAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateWithoutPaymentsInput = {
    id?: string
    item: string
    description?: string | null
    collectionDate: Date | string
    completionStatus?: $Enums.CompletionStatus
    business: BusinessesCreateNestedOneWithoutOrdersInput
    client: ClientsCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutPaymentsInput = {
    id?: string
    item: string
    description?: string | null
    collectionDate: Date | string
    completionStatus?: $Enums.CompletionStatus
    businessId: string
    clientId: string
  }

  export type OrdersCreateOrConnectWithoutPaymentsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutPaymentsInput, OrdersUncheckedCreateWithoutPaymentsInput>
  }

  export type OrdersUpsertWithoutPaymentsInput = {
    update: XOR<OrdersUpdateWithoutPaymentsInput, OrdersUncheckedUpdateWithoutPaymentsInput>
    create: XOR<OrdersCreateWithoutPaymentsInput, OrdersUncheckedCreateWithoutPaymentsInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutPaymentsInput, OrdersUncheckedUpdateWithoutPaymentsInput>
  }

  export type OrdersUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    collectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionStatus?: EnumCompletionStatusFieldUpdateOperationsInput | $Enums.CompletionStatus
    business?: BusinessesUpdateOneRequiredWithoutOrdersNestedInput
    client?: ClientsUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    collectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionStatus?: EnumCompletionStatusFieldUpdateOperationsInput | $Enums.CompletionStatus
    businessId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessesCreateWithoutIncomeInput = {
    id?: string
    name?: string
    email?: string
    phone?: string
    address?: string
    currency?: string
    logo?: string | null
    user: UsersCreateNestedOneWithoutBusinessInput
    clients?: ClientsCreateNestedManyWithoutBusinessInput
    orders?: OrdersCreateNestedManyWithoutBusinessInput
    financialRecords?: FinancialRecordCreateNestedManyWithoutBusinessInput
    expenses?: ExpensesCreateNestedManyWithoutBusinessInput
  }

  export type BusinessesUncheckedCreateWithoutIncomeInput = {
    id?: string
    name?: string
    email?: string
    phone?: string
    address?: string
    currency?: string
    logo?: string | null
    userId: string
    clients?: ClientsUncheckedCreateNestedManyWithoutBusinessInput
    orders?: OrdersUncheckedCreateNestedManyWithoutBusinessInput
    financialRecords?: FinancialRecordUncheckedCreateNestedManyWithoutBusinessInput
    expenses?: ExpensesUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessesCreateOrConnectWithoutIncomeInput = {
    where: BusinessesWhereUniqueInput
    create: XOR<BusinessesCreateWithoutIncomeInput, BusinessesUncheckedCreateWithoutIncomeInput>
  }

  export type BusinessesUpsertWithoutIncomeInput = {
    update: XOR<BusinessesUpdateWithoutIncomeInput, BusinessesUncheckedUpdateWithoutIncomeInput>
    create: XOR<BusinessesCreateWithoutIncomeInput, BusinessesUncheckedCreateWithoutIncomeInput>
    where?: BusinessesWhereInput
  }

  export type BusinessesUpdateToOneWithWhereWithoutIncomeInput = {
    where?: BusinessesWhereInput
    data: XOR<BusinessesUpdateWithoutIncomeInput, BusinessesUncheckedUpdateWithoutIncomeInput>
  }

  export type BusinessesUpdateWithoutIncomeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneRequiredWithoutBusinessNestedInput
    clients?: ClientsUpdateManyWithoutBusinessNestedInput
    orders?: OrdersUpdateManyWithoutBusinessNestedInput
    financialRecords?: FinancialRecordUpdateManyWithoutBusinessNestedInput
    expenses?: ExpensesUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessesUncheckedUpdateWithoutIncomeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    clients?: ClientsUncheckedUpdateManyWithoutBusinessNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutBusinessNestedInput
    financialRecords?: FinancialRecordUncheckedUpdateManyWithoutBusinessNestedInput
    expenses?: ExpensesUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessesCreateWithoutExpensesInput = {
    id?: string
    name?: string
    email?: string
    phone?: string
    address?: string
    currency?: string
    logo?: string | null
    user: UsersCreateNestedOneWithoutBusinessInput
    clients?: ClientsCreateNestedManyWithoutBusinessInput
    orders?: OrdersCreateNestedManyWithoutBusinessInput
    financialRecords?: FinancialRecordCreateNestedManyWithoutBusinessInput
    income?: IncomeCreateNestedManyWithoutBusinessInput
  }

  export type BusinessesUncheckedCreateWithoutExpensesInput = {
    id?: string
    name?: string
    email?: string
    phone?: string
    address?: string
    currency?: string
    logo?: string | null
    userId: string
    clients?: ClientsUncheckedCreateNestedManyWithoutBusinessInput
    orders?: OrdersUncheckedCreateNestedManyWithoutBusinessInput
    financialRecords?: FinancialRecordUncheckedCreateNestedManyWithoutBusinessInput
    income?: IncomeUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessesCreateOrConnectWithoutExpensesInput = {
    where: BusinessesWhereUniqueInput
    create: XOR<BusinessesCreateWithoutExpensesInput, BusinessesUncheckedCreateWithoutExpensesInput>
  }

  export type BusinessesUpsertWithoutExpensesInput = {
    update: XOR<BusinessesUpdateWithoutExpensesInput, BusinessesUncheckedUpdateWithoutExpensesInput>
    create: XOR<BusinessesCreateWithoutExpensesInput, BusinessesUncheckedCreateWithoutExpensesInput>
    where?: BusinessesWhereInput
  }

  export type BusinessesUpdateToOneWithWhereWithoutExpensesInput = {
    where?: BusinessesWhereInput
    data: XOR<BusinessesUpdateWithoutExpensesInput, BusinessesUncheckedUpdateWithoutExpensesInput>
  }

  export type BusinessesUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneRequiredWithoutBusinessNestedInput
    clients?: ClientsUpdateManyWithoutBusinessNestedInput
    orders?: OrdersUpdateManyWithoutBusinessNestedInput
    financialRecords?: FinancialRecordUpdateManyWithoutBusinessNestedInput
    income?: IncomeUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessesUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    clients?: ClientsUncheckedUpdateManyWithoutBusinessNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutBusinessNestedInput
    financialRecords?: FinancialRecordUncheckedUpdateManyWithoutBusinessNestedInput
    income?: IncomeUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessesCreateWithoutFinancialRecordsInput = {
    id?: string
    name?: string
    email?: string
    phone?: string
    address?: string
    currency?: string
    logo?: string | null
    user: UsersCreateNestedOneWithoutBusinessInput
    clients?: ClientsCreateNestedManyWithoutBusinessInput
    orders?: OrdersCreateNestedManyWithoutBusinessInput
    income?: IncomeCreateNestedManyWithoutBusinessInput
    expenses?: ExpensesCreateNestedManyWithoutBusinessInput
  }

  export type BusinessesUncheckedCreateWithoutFinancialRecordsInput = {
    id?: string
    name?: string
    email?: string
    phone?: string
    address?: string
    currency?: string
    logo?: string | null
    userId: string
    clients?: ClientsUncheckedCreateNestedManyWithoutBusinessInput
    orders?: OrdersUncheckedCreateNestedManyWithoutBusinessInput
    income?: IncomeUncheckedCreateNestedManyWithoutBusinessInput
    expenses?: ExpensesUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessesCreateOrConnectWithoutFinancialRecordsInput = {
    where: BusinessesWhereUniqueInput
    create: XOR<BusinessesCreateWithoutFinancialRecordsInput, BusinessesUncheckedCreateWithoutFinancialRecordsInput>
  }

  export type BusinessesUpsertWithoutFinancialRecordsInput = {
    update: XOR<BusinessesUpdateWithoutFinancialRecordsInput, BusinessesUncheckedUpdateWithoutFinancialRecordsInput>
    create: XOR<BusinessesCreateWithoutFinancialRecordsInput, BusinessesUncheckedCreateWithoutFinancialRecordsInput>
    where?: BusinessesWhereInput
  }

  export type BusinessesUpdateToOneWithWhereWithoutFinancialRecordsInput = {
    where?: BusinessesWhereInput
    data: XOR<BusinessesUpdateWithoutFinancialRecordsInput, BusinessesUncheckedUpdateWithoutFinancialRecordsInput>
  }

  export type BusinessesUpdateWithoutFinancialRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneRequiredWithoutBusinessNestedInput
    clients?: ClientsUpdateManyWithoutBusinessNestedInput
    orders?: OrdersUpdateManyWithoutBusinessNestedInput
    income?: IncomeUpdateManyWithoutBusinessNestedInput
    expenses?: ExpensesUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessesUncheckedUpdateWithoutFinancialRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    clients?: ClientsUncheckedUpdateManyWithoutBusinessNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutBusinessNestedInput
    income?: IncomeUncheckedUpdateManyWithoutBusinessNestedInput
    expenses?: ExpensesUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type UsersCreateWithoutEventsInput = {
    id?: string
    Fname: string
    Sname: string
    email: string
    role: $Enums.Role
    phone?: string | null
    profile_url?: string | null
    accountStatus?: boolean
    password: string
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    business?: BusinessesCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutEventsInput = {
    id?: string
    Fname: string
    Sname: string
    email: string
    role: $Enums.Role
    phone?: string | null
    profile_url?: string | null
    accountStatus?: boolean
    password: string
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    business?: BusinessesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutEventsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutEventsInput, UsersUncheckedCreateWithoutEventsInput>
  }

  export type UsersUpsertWithoutEventsInput = {
    update: XOR<UsersUpdateWithoutEventsInput, UsersUncheckedUpdateWithoutEventsInput>
    create: XOR<UsersCreateWithoutEventsInput, UsersUncheckedCreateWithoutEventsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutEventsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutEventsInput, UsersUncheckedUpdateWithoutEventsInput>
  }

  export type UsersUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    Fname?: StringFieldUpdateOperationsInput | string
    Sname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null
    accountStatus?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    business?: BusinessesUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    Fname?: StringFieldUpdateOperationsInput | string
    Sname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null
    accountStatus?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    business?: BusinessesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type NotificationsCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    read: boolean
    type: string
    message: string
  }

  export type EventsCreateManyUserInput = {
    id?: string
    title: string
    start: Date | string
    end: Date | string
    description?: string | null
  }

  export type NotificationsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type EventsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientsCreateManyBusinessInput = {
    id?: string
    Fname: string
    Sname: string
    email?: string | null
    phone: string
    activeOrder?: boolean
  }

  export type OrdersCreateManyBusinessInput = {
    id?: string
    item: string
    description?: string | null
    collectionDate: Date | string
    completionStatus?: $Enums.CompletionStatus
    clientId: string
  }

  export type FinancialRecordCreateManyBusinessInput = {
    id?: string
    date: Date | string
    income?: number
    expenses?: number
    profit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncomeCreateManyBusinessInput = {
    id?: string
    amount: number
    description: string
    createdAt?: Date | string
    category: string
  }

  export type ExpensesCreateManyBusinessInput = {
    id?: string
    amount: number
    description: string
    createdAt?: Date | string
    category: string
  }

  export type ClientsUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    Fname?: StringFieldUpdateOperationsInput | string
    Sname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    activeOrder?: BoolFieldUpdateOperationsInput | boolean
    measurements?: MeasurementsUpdateOneWithoutClientNestedInput
    orders?: OrdersUpdateManyWithoutClientNestedInput
  }

  export type ClientsUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    Fname?: StringFieldUpdateOperationsInput | string
    Sname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    activeOrder?: BoolFieldUpdateOperationsInput | boolean
    measurements?: MeasurementsUncheckedUpdateOneWithoutClientNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientsUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    Fname?: StringFieldUpdateOperationsInput | string
    Sname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    activeOrder?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrdersUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    collectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionStatus?: EnumCompletionStatusFieldUpdateOperationsInput | $Enums.CompletionStatus
    client?: ClientsUpdateOneRequiredWithoutOrdersNestedInput
    payments?: PaymentsUpdateOneWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    collectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionStatus?: EnumCompletionStatusFieldUpdateOperationsInput | $Enums.CompletionStatus
    clientId?: StringFieldUpdateOperationsInput | string
    payments?: PaymentsUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    collectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionStatus?: EnumCompletionStatusFieldUpdateOperationsInput | $Enums.CompletionStatus
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type FinancialRecordUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: FloatFieldUpdateOperationsInput | number
    expenses?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialRecordUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: FloatFieldUpdateOperationsInput | number
    expenses?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialRecordUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: FloatFieldUpdateOperationsInput | number
    expenses?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomeUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type IncomeUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type IncomeUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type ExpensesUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type ExpensesUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type ExpensesUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type OrdersCreateManyClientInput = {
    id?: string
    item: string
    description?: string | null
    collectionDate: Date | string
    completionStatus?: $Enums.CompletionStatus
    businessId: string
  }

  export type OrdersUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    collectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionStatus?: EnumCompletionStatusFieldUpdateOperationsInput | $Enums.CompletionStatus
    business?: BusinessesUpdateOneRequiredWithoutOrdersNestedInput
    payments?: PaymentsUpdateOneWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    collectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionStatus?: EnumCompletionStatusFieldUpdateOperationsInput | $Enums.CompletionStatus
    businessId?: StringFieldUpdateOperationsInput | string
    payments?: PaymentsUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    collectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionStatus?: EnumCompletionStatusFieldUpdateOperationsInput | $Enums.CompletionStatus
    businessId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}