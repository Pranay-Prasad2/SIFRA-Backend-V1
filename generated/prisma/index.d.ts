
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Goal
 * 
 */
export type Goal = $Result.DefaultSelection<Prisma.$GoalPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Routine
 * 
 */
export type Routine = $Result.DefaultSelection<Prisma.$RoutinePayload>
/**
 * Model TimeBlock
 * 
 */
export type TimeBlock = $Result.DefaultSelection<Prisma.$TimeBlockPayload>
/**
 * Model TaskSession
 * 
 */
export type TaskSession = $Result.DefaultSelection<Prisma.$TaskSessionPayload>
/**
 * Model Availability
 * 
 */
export type Availability = $Result.DefaultSelection<Prisma.$AvailabilityPayload>
/**
 * Model Settings
 * 
 */
export type Settings = $Result.DefaultSelection<Prisma.$SettingsPayload>
/**
 * Model AIContext
 * 
 */
export type AIContext = $Result.DefaultSelection<Prisma.$AIContextPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TaskStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  SKIPPED: 'SKIPPED'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const TaskPriority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type TaskPriority = (typeof TaskPriority)[keyof typeof TaskPriority]


export const TimeBlockType: {
  TASK: 'TASK',
  ROUTINE: 'ROUTINE',
  BREAK: 'BREAK',
  MEETING: 'MEETING',
  BUFFER: 'BUFFER',
  PERSONAL: 'PERSONAL'
};

export type TimeBlockType = (typeof TimeBlockType)[keyof typeof TimeBlockType]


export const RoutineFrequency: {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  CUSTOM: 'CUSTOM'
};

export type RoutineFrequency = (typeof RoutineFrequency)[keyof typeof RoutineFrequency]

}

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type TaskPriority = $Enums.TaskPriority

export const TaskPriority: typeof $Enums.TaskPriority

export type TimeBlockType = $Enums.TimeBlockType

export const TimeBlockType: typeof $Enums.TimeBlockType

export type RoutineFrequency = $Enums.RoutineFrequency

export const RoutineFrequency: typeof $Enums.RoutineFrequency

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
 * const users = await prisma.user.findMany()
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
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **Goal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goals
    * const goals = await prisma.goal.findMany()
    * ```
    */
  get goal(): Prisma.GoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routine`: Exposes CRUD operations for the **Routine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routines
    * const routines = await prisma.routine.findMany()
    * ```
    */
  get routine(): Prisma.RoutineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timeBlock`: Exposes CRUD operations for the **TimeBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeBlocks
    * const timeBlocks = await prisma.timeBlock.findMany()
    * ```
    */
  get timeBlock(): Prisma.TimeBlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskSession`: Exposes CRUD operations for the **TaskSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskSessions
    * const taskSessions = await prisma.taskSession.findMany()
    * ```
    */
  get taskSession(): Prisma.TaskSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availability`: Exposes CRUD operations for the **Availability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Availabilities
    * const availabilities = await prisma.availability.findMany()
    * ```
    */
  get availability(): Prisma.AvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **Settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.SettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIContext`: Exposes CRUD operations for the **AIContext** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIContexts
    * const aIContexts = await prisma.aIContext.findMany()
    * ```
    */
  get aIContext(): Prisma.AIContextDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    Goal: 'Goal',
    Task: 'Task',
    Routine: 'Routine',
    TimeBlock: 'TimeBlock',
    TaskSession: 'TaskSession',
    Availability: 'Availability',
    Settings: 'Settings',
    AIContext: 'AIContext'
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
      modelProps: "user" | "goal" | "task" | "routine" | "timeBlock" | "taskSession" | "availability" | "settings" | "aIContext"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Goal: {
        payload: Prisma.$GoalPayload<ExtArgs>
        fields: Prisma.GoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findFirst: {
            args: Prisma.GoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findMany: {
            args: Prisma.GoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          create: {
            args: Prisma.GoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          createMany: {
            args: Prisma.GoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          delete: {
            args: Prisma.GoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          update: {
            args: Prisma.GoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          deleteMany: {
            args: Prisma.GoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          upsert: {
            args: Prisma.GoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoal>
          }
          groupBy: {
            args: Prisma.GoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoalCountArgs<ExtArgs>
            result: $Utils.Optional<GoalCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Routine: {
        payload: Prisma.$RoutinePayload<ExtArgs>
        fields: Prisma.RoutineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoutineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoutineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          findFirst: {
            args: Prisma.RoutineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoutineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          findMany: {
            args: Prisma.RoutineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>[]
          }
          create: {
            args: Prisma.RoutineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          createMany: {
            args: Prisma.RoutineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoutineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>[]
          }
          delete: {
            args: Prisma.RoutineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          update: {
            args: Prisma.RoutineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          deleteMany: {
            args: Prisma.RoutineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoutineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoutineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>[]
          }
          upsert: {
            args: Prisma.RoutineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          aggregate: {
            args: Prisma.RoutineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoutine>
          }
          groupBy: {
            args: Prisma.RoutineGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoutineGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoutineCountArgs<ExtArgs>
            result: $Utils.Optional<RoutineCountAggregateOutputType> | number
          }
        }
      }
      TimeBlock: {
        payload: Prisma.$TimeBlockPayload<ExtArgs>
        fields: Prisma.TimeBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>
          }
          findFirst: {
            args: Prisma.TimeBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>
          }
          findMany: {
            args: Prisma.TimeBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>[]
          }
          create: {
            args: Prisma.TimeBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>
          }
          createMany: {
            args: Prisma.TimeBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimeBlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>[]
          }
          delete: {
            args: Prisma.TimeBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>
          }
          update: {
            args: Prisma.TimeBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>
          }
          deleteMany: {
            args: Prisma.TimeBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimeBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimeBlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>[]
          }
          upsert: {
            args: Prisma.TimeBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>
          }
          aggregate: {
            args: Prisma.TimeBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeBlock>
          }
          groupBy: {
            args: Prisma.TimeBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimeBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeBlockCountArgs<ExtArgs>
            result: $Utils.Optional<TimeBlockCountAggregateOutputType> | number
          }
        }
      }
      TaskSession: {
        payload: Prisma.$TaskSessionPayload<ExtArgs>
        fields: Prisma.TaskSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSessionPayload>
          }
          findFirst: {
            args: Prisma.TaskSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSessionPayload>
          }
          findMany: {
            args: Prisma.TaskSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSessionPayload>[]
          }
          create: {
            args: Prisma.TaskSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSessionPayload>
          }
          createMany: {
            args: Prisma.TaskSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSessionPayload>[]
          }
          delete: {
            args: Prisma.TaskSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSessionPayload>
          }
          update: {
            args: Prisma.TaskSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSessionPayload>
          }
          deleteMany: {
            args: Prisma.TaskSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSessionPayload>[]
          }
          upsert: {
            args: Prisma.TaskSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSessionPayload>
          }
          aggregate: {
            args: Prisma.TaskSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskSession>
          }
          groupBy: {
            args: Prisma.TaskSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskSessionCountArgs<ExtArgs>
            result: $Utils.Optional<TaskSessionCountAggregateOutputType> | number
          }
        }
      }
      Availability: {
        payload: Prisma.$AvailabilityPayload<ExtArgs>
        fields: Prisma.AvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findFirst: {
            args: Prisma.AvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findMany: {
            args: Prisma.AvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          create: {
            args: Prisma.AvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          createMany: {
            args: Prisma.AvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          delete: {
            args: Prisma.AvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          update: {
            args: Prisma.AvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.AvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          aggregate: {
            args: Prisma.AvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailability>
          }
          groupBy: {
            args: Prisma.AvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityCountAggregateOutputType> | number
          }
        }
      }
      Settings: {
        payload: Prisma.$SettingsPayload<ExtArgs>
        fields: Prisma.SettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findFirst: {
            args: Prisma.SettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findMany: {
            args: Prisma.SettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          create: {
            args: Prisma.SettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          createMany: {
            args: Prisma.SettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          delete: {
            args: Prisma.SettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          update: {
            args: Prisma.SettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          deleteMany: {
            args: Prisma.SettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          upsert: {
            args: Prisma.SettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.SettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
          }
        }
      }
      AIContext: {
        payload: Prisma.$AIContextPayload<ExtArgs>
        fields: Prisma.AIContextFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIContextFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIContextFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextPayload>
          }
          findFirst: {
            args: Prisma.AIContextFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIContextFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextPayload>
          }
          findMany: {
            args: Prisma.AIContextFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextPayload>[]
          }
          create: {
            args: Prisma.AIContextCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextPayload>
          }
          createMany: {
            args: Prisma.AIContextCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIContextCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextPayload>[]
          }
          delete: {
            args: Prisma.AIContextDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextPayload>
          }
          update: {
            args: Prisma.AIContextUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextPayload>
          }
          deleteMany: {
            args: Prisma.AIContextDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIContextUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIContextUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextPayload>[]
          }
          upsert: {
            args: Prisma.AIContextUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextPayload>
          }
          aggregate: {
            args: Prisma.AIContextAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIContext>
          }
          groupBy: {
            args: Prisma.AIContextGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIContextGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIContextCountArgs<ExtArgs>
            result: $Utils.Optional<AIContextCountAggregateOutputType> | number
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
    user?: UserOmit
    goal?: GoalOmit
    task?: TaskOmit
    routine?: RoutineOmit
    timeBlock?: TimeBlockOmit
    taskSession?: TaskSessionOmit
    availability?: AvailabilityOmit
    settings?: SettingsOmit
    aIContext?: AIContextOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    goals: number
    tasks: number
    routines: number
    timeBlocks: number
    availability: number
    aiContexts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goals?: boolean | UserCountOutputTypeCountGoalsArgs
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
    routines?: boolean | UserCountOutputTypeCountRoutinesArgs
    timeBlocks?: boolean | UserCountOutputTypeCountTimeBlocksArgs
    availability?: boolean | UserCountOutputTypeCountAvailabilityArgs
    aiContexts?: boolean | UserCountOutputTypeCountAiContextsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoutinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTimeBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeBlockWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAiContextsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIContextWhereInput
  }


  /**
   * Count Type GoalCountOutputType
   */

  export type GoalCountOutputType = {
    tasks: number
  }

  export type GoalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | GoalCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCountOutputType
     */
    select?: GoalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    timeBlocks: number
    sessions: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timeBlocks?: boolean | TaskCountOutputTypeCountTimeBlocksArgs
    sessions?: boolean | TaskCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountTimeBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeBlockWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskSessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    goals?: boolean | User$goalsArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    routines?: boolean | User$routinesArgs<ExtArgs>
    timeBlocks?: boolean | User$timeBlocksArgs<ExtArgs>
    availability?: boolean | User$availabilityArgs<ExtArgs>
    aiContexts?: boolean | User$aiContextsArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goals?: boolean | User$goalsArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    routines?: boolean | User$routinesArgs<ExtArgs>
    timeBlocks?: boolean | User$timeBlocksArgs<ExtArgs>
    availability?: boolean | User$availabilityArgs<ExtArgs>
    aiContexts?: boolean | User$aiContextsArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      goals: Prisma.$GoalPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      routines: Prisma.$RoutinePayload<ExtArgs>[]
      timeBlocks: Prisma.$TimeBlockPayload<ExtArgs>[]
      availability: Prisma.$AvailabilityPayload<ExtArgs>[]
      aiContexts: Prisma.$AIContextPayload<ExtArgs>[]
      settings: Prisma.$SettingsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    goals<T extends User$goalsArgs<ExtArgs> = {}>(args?: Subset<T, User$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    routines<T extends User$routinesArgs<ExtArgs> = {}>(args?: Subset<T, User$routinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    timeBlocks<T extends User$timeBlocksArgs<ExtArgs> = {}>(args?: Subset<T, User$timeBlocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    availability<T extends User$availabilityArgs<ExtArgs> = {}>(args?: Subset<T, User$availabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiContexts<T extends User$aiContextsArgs<ExtArgs> = {}>(args?: Subset<T, User$aiContextsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settings<T extends User$settingsArgs<ExtArgs> = {}>(args?: Subset<T, User$settingsArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.goals
   */
  export type User$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    cursor?: GoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * User.tasks
   */
  export type User$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.routines
   */
  export type User$routinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    where?: RoutineWhereInput
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    cursor?: RoutineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * User.timeBlocks
   */
  export type User$timeBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    where?: TimeBlockWhereInput
    orderBy?: TimeBlockOrderByWithRelationInput | TimeBlockOrderByWithRelationInput[]
    cursor?: TimeBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeBlockScalarFieldEnum | TimeBlockScalarFieldEnum[]
  }

  /**
   * User.availability
   */
  export type User$availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    cursor?: AvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * User.aiContexts
   */
  export type User$aiContextsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextInclude<ExtArgs> | null
    where?: AIContextWhereInput
    orderBy?: AIContextOrderByWithRelationInput | AIContextOrderByWithRelationInput[]
    cursor?: AIContextWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIContextScalarFieldEnum | AIContextScalarFieldEnum[]
  }

  /**
   * User.settings
   */
  export type User$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    where?: SettingsWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  export type GoalMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    targetDate: Date | null
    isActive: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoalMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    targetDate: Date | null
    isActive: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoalCountAggregateOutputType = {
    id: number
    title: number
    description: number
    targetDate: number
    isActive: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GoalMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    targetDate?: true
    isActive?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoalMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    targetDate?: true
    isActive?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoalCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    targetDate?: true
    isActive?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goal to aggregate.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Goals
    **/
    _count?: true | GoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalMaxAggregateInputType
  }

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
        [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>
  }




  export type GoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithAggregationInput | GoalOrderByWithAggregationInput[]
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum
    having?: GoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalCountAggregateInputType | true
    _min?: GoalMinAggregateInputType
    _max?: GoalMaxAggregateInputType
  }

  export type GoalGroupByOutputType = {
    id: string
    title: string
    description: string | null
    targetDate: Date | null
    isActive: boolean
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: GoalCountAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  type GetGoalGroupByPayload<T extends GoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalGroupByOutputType[P]>
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
        }
      >
    >


  export type GoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    targetDate?: boolean
    isActive?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | Goal$tasksArgs<ExtArgs>
    _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    targetDate?: boolean
    isActive?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    targetDate?: boolean
    isActive?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    targetDate?: boolean
    isActive?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "targetDate" | "isActive" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["goal"]>
  export type GoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | Goal$tasksArgs<ExtArgs>
    _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Goal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      targetDate: Date | null
      isActive: boolean
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["goal"]>
    composites: {}
  }

  type GoalGetPayload<S extends boolean | null | undefined | GoalDefaultArgs> = $Result.GetResult<Prisma.$GoalPayload, S>

  type GoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoalCountAggregateInputType | true
    }

  export interface GoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Goal'], meta: { name: 'Goal' } }
    /**
     * Find zero or one Goal that matches the filter.
     * @param {GoalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoalFindUniqueArgs>(args: SelectSubset<T, GoalFindUniqueArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoalFindUniqueOrThrowArgs>(args: SelectSubset<T, GoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoalFindFirstArgs>(args?: SelectSubset<T, GoalFindFirstArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoalFindFirstOrThrowArgs>(args?: SelectSubset<T, GoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     * 
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalWithIdOnly = await prisma.goal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoalFindManyArgs>(args?: SelectSubset<T, GoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goal.
     * @param {GoalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     * 
     */
    create<T extends GoalCreateArgs>(args: SelectSubset<T, GoalCreateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goals.
     * @param {GoalCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoalCreateManyArgs>(args?: SelectSubset<T, GoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goals and returns the data saved in the database.
     * @param {GoalCreateManyAndReturnArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoalCreateManyAndReturnArgs>(args?: SelectSubset<T, GoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Goal.
     * @param {GoalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     * 
     */
    delete<T extends GoalDeleteArgs>(args: SelectSubset<T, GoalDeleteArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goal.
     * @param {GoalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoalUpdateArgs>(args: SelectSubset<T, GoalUpdateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goals.
     * @param {GoalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoalDeleteManyArgs>(args?: SelectSubset<T, GoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoalUpdateManyArgs>(args: SelectSubset<T, GoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals and returns the data updated in the database.
     * @param {GoalUpdateManyAndReturnArgs} args - Arguments to update many Goals.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.updateManyAndReturn({
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
    updateManyAndReturn<T extends GoalUpdateManyAndReturnArgs>(args: SelectSubset<T, GoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Goal.
     * @param {GoalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
     */
    upsert<T extends GoalUpsertArgs>(args: SelectSubset<T, GoalUpsertArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
    **/
    count<T extends GoalCountArgs>(
      args?: Subset<T, GoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoalAggregateArgs>(args: Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalGroupByArgs} args - Group by arguments.
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
      T extends GoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalGroupByArgs['orderBy'] }
        : { orderBy?: GoalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Goal model
   */
  readonly fields: GoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends Goal$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Goal$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Goal model
   */
  interface GoalFieldRefs {
    readonly id: FieldRef<"Goal", 'String'>
    readonly title: FieldRef<"Goal", 'String'>
    readonly description: FieldRef<"Goal", 'String'>
    readonly targetDate: FieldRef<"Goal", 'DateTime'>
    readonly isActive: FieldRef<"Goal", 'Boolean'>
    readonly userId: FieldRef<"Goal", 'String'>
    readonly createdAt: FieldRef<"Goal", 'DateTime'>
    readonly updatedAt: FieldRef<"Goal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Goal findUnique
   */
  export type GoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findUniqueOrThrow
   */
  export type GoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findFirst
   */
  export type GoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findFirstOrThrow
   */
  export type GoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findMany
   */
  export type GoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goals to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal create
   */
  export type GoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to create a Goal.
     */
    data: XOR<GoalCreateInput, GoalUncheckedCreateInput>
  }

  /**
   * Goal createMany
   */
  export type GoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Goal createManyAndReturn
   */
  export type GoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal update
   */
  export type GoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to update a Goal.
     */
    data: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
    /**
     * Choose, which Goal to update.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal updateMany
   */
  export type GoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
  }

  /**
   * Goal updateManyAndReturn
   */
  export type GoalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal upsert
   */
  export type GoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The filter to search for the Goal to update in case it exists.
     */
    where: GoalWhereUniqueInput
    /**
     * In case the Goal found by the `where` argument doesn't exist, create a new Goal with this data.
     */
    create: XOR<GoalCreateInput, GoalUncheckedCreateInput>
    /**
     * In case the Goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
  }

  /**
   * Goal delete
   */
  export type GoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter which Goal to delete.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal deleteMany
   */
  export type GoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goals to delete
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to delete.
     */
    limit?: number
  }

  /**
   * Goal.tasks
   */
  export type Goal$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Goal without action
   */
  export type GoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    estimatedMinutes: number | null
    completedMinutes: number | null
    order: number | null
  }

  export type TaskSumAggregateOutputType = {
    estimatedMinutes: number | null
    completedMinutes: number | null
    order: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    priority: $Enums.TaskPriority | null
    status: $Enums.TaskStatus | null
    estimatedMinutes: number | null
    completedMinutes: number | null
    order: number | null
    userId: string | null
    goalId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    priority: $Enums.TaskPriority | null
    status: $Enums.TaskStatus | null
    estimatedMinutes: number | null
    completedMinutes: number | null
    order: number | null
    userId: string | null
    goalId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    priority: number
    status: number
    estimatedMinutes: number
    completedMinutes: number
    order: number
    userId: number
    goalId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    estimatedMinutes?: true
    completedMinutes?: true
    order?: true
  }

  export type TaskSumAggregateInputType = {
    estimatedMinutes?: true
    completedMinutes?: true
    order?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    estimatedMinutes?: true
    completedMinutes?: true
    order?: true
    userId?: true
    goalId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    estimatedMinutes?: true
    completedMinutes?: true
    order?: true
    userId?: true
    goalId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    estimatedMinutes?: true
    completedMinutes?: true
    order?: true
    userId?: true
    goalId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    description: string | null
    priority: $Enums.TaskPriority
    status: $Enums.TaskStatus
    estimatedMinutes: number
    completedMinutes: number
    order: number | null
    userId: string
    goalId: string | null
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    estimatedMinutes?: boolean
    completedMinutes?: boolean
    order?: boolean
    userId?: boolean
    goalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | Task$goalArgs<ExtArgs>
    timeBlocks?: boolean | Task$timeBlocksArgs<ExtArgs>
    sessions?: boolean | Task$sessionsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    estimatedMinutes?: boolean
    completedMinutes?: boolean
    order?: boolean
    userId?: boolean
    goalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | Task$goalArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    estimatedMinutes?: boolean
    completedMinutes?: boolean
    order?: boolean
    userId?: boolean
    goalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | Task$goalArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    estimatedMinutes?: boolean
    completedMinutes?: boolean
    order?: boolean
    userId?: boolean
    goalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "priority" | "status" | "estimatedMinutes" | "completedMinutes" | "order" | "userId" | "goalId" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | Task$goalArgs<ExtArgs>
    timeBlocks?: boolean | Task$timeBlocksArgs<ExtArgs>
    sessions?: boolean | Task$sessionsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | Task$goalArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | Task$goalArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      goal: Prisma.$GoalPayload<ExtArgs> | null
      timeBlocks: Prisma.$TimeBlockPayload<ExtArgs>[]
      sessions: Prisma.$TaskSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      priority: $Enums.TaskPriority
      status: $Enums.TaskStatus
      estimatedMinutes: number
      completedMinutes: number
      order: number | null
      userId: string
      goalId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    goal<T extends Task$goalArgs<ExtArgs> = {}>(args?: Subset<T, Task$goalArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    timeBlocks<T extends Task$timeBlocksArgs<ExtArgs> = {}>(args?: Subset<T, Task$timeBlocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Task$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Task$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly priority: FieldRef<"Task", 'TaskPriority'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly estimatedMinutes: FieldRef<"Task", 'Int'>
    readonly completedMinutes: FieldRef<"Task", 'Int'>
    readonly order: FieldRef<"Task", 'Int'>
    readonly userId: FieldRef<"Task", 'String'>
    readonly goalId: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.goal
   */
  export type Task$goalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
  }

  /**
   * Task.timeBlocks
   */
  export type Task$timeBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    where?: TimeBlockWhereInput
    orderBy?: TimeBlockOrderByWithRelationInput | TimeBlockOrderByWithRelationInput[]
    cursor?: TimeBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeBlockScalarFieldEnum | TimeBlockScalarFieldEnum[]
  }

  /**
   * Task.sessions
   */
  export type Task$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSession
     */
    select?: TaskSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSession
     */
    omit?: TaskSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSessionInclude<ExtArgs> | null
    where?: TaskSessionWhereInput
    orderBy?: TaskSessionOrderByWithRelationInput | TaskSessionOrderByWithRelationInput[]
    cursor?: TaskSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskSessionScalarFieldEnum | TaskSessionScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model Routine
   */

  export type AggregateRoutine = {
    _count: RoutineCountAggregateOutputType | null
    _avg: RoutineAvgAggregateOutputType | null
    _sum: RoutineSumAggregateOutputType | null
    _min: RoutineMinAggregateOutputType | null
    _max: RoutineMaxAggregateOutputType | null
  }

  export type RoutineAvgAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type RoutineSumAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type RoutineMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    frequency: $Enums.RoutineFrequency | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    isActive: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoutineMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    frequency: $Enums.RoutineFrequency | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    isActive: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoutineCountAggregateOutputType = {
    id: number
    title: number
    description: number
    frequency: number
    dayOfWeek: number
    startTime: number
    endTime: number
    isActive: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoutineAvgAggregateInputType = {
    dayOfWeek?: true
  }

  export type RoutineSumAggregateInputType = {
    dayOfWeek?: true
  }

  export type RoutineMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    frequency?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isActive?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoutineMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    frequency?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isActive?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoutineCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    frequency?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isActive?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoutineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routine to aggregate.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routines
    **/
    _count?: true | RoutineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoutineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoutineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoutineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoutineMaxAggregateInputType
  }

  export type GetRoutineAggregateType<T extends RoutineAggregateArgs> = {
        [P in keyof T & keyof AggregateRoutine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoutine[P]>
      : GetScalarType<T[P], AggregateRoutine[P]>
  }




  export type RoutineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineWhereInput
    orderBy?: RoutineOrderByWithAggregationInput | RoutineOrderByWithAggregationInput[]
    by: RoutineScalarFieldEnum[] | RoutineScalarFieldEnum
    having?: RoutineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoutineCountAggregateInputType | true
    _avg?: RoutineAvgAggregateInputType
    _sum?: RoutineSumAggregateInputType
    _min?: RoutineMinAggregateInputType
    _max?: RoutineMaxAggregateInputType
  }

  export type RoutineGroupByOutputType = {
    id: string
    title: string
    description: string | null
    frequency: $Enums.RoutineFrequency
    dayOfWeek: number | null
    startTime: string
    endTime: string
    isActive: boolean
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: RoutineCountAggregateOutputType | null
    _avg: RoutineAvgAggregateOutputType | null
    _sum: RoutineSumAggregateOutputType | null
    _min: RoutineMinAggregateOutputType | null
    _max: RoutineMaxAggregateOutputType | null
  }

  type GetRoutineGroupByPayload<T extends RoutineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoutineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoutineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoutineGroupByOutputType[P]>
            : GetScalarType<T[P], RoutineGroupByOutputType[P]>
        }
      >
    >


  export type RoutineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    frequency?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isActive?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routine"]>

  export type RoutineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    frequency?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isActive?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routine"]>

  export type RoutineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    frequency?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isActive?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routine"]>

  export type RoutineSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    frequency?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isActive?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoutineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "frequency" | "dayOfWeek" | "startTime" | "endTime" | "isActive" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["routine"]>
  export type RoutineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoutineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoutineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoutinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Routine"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      frequency: $Enums.RoutineFrequency
      dayOfWeek: number | null
      startTime: string
      endTime: string
      isActive: boolean
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["routine"]>
    composites: {}
  }

  type RoutineGetPayload<S extends boolean | null | undefined | RoutineDefaultArgs> = $Result.GetResult<Prisma.$RoutinePayload, S>

  type RoutineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoutineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoutineCountAggregateInputType | true
    }

  export interface RoutineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Routine'], meta: { name: 'Routine' } }
    /**
     * Find zero or one Routine that matches the filter.
     * @param {RoutineFindUniqueArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoutineFindUniqueArgs>(args: SelectSubset<T, RoutineFindUniqueArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Routine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoutineFindUniqueOrThrowArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoutineFindUniqueOrThrowArgs>(args: SelectSubset<T, RoutineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Routine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineFindFirstArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoutineFindFirstArgs>(args?: SelectSubset<T, RoutineFindFirstArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Routine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineFindFirstOrThrowArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoutineFindFirstOrThrowArgs>(args?: SelectSubset<T, RoutineFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routines
     * const routines = await prisma.routine.findMany()
     * 
     * // Get first 10 Routines
     * const routines = await prisma.routine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routineWithIdOnly = await prisma.routine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoutineFindManyArgs>(args?: SelectSubset<T, RoutineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Routine.
     * @param {RoutineCreateArgs} args - Arguments to create a Routine.
     * @example
     * // Create one Routine
     * const Routine = await prisma.routine.create({
     *   data: {
     *     // ... data to create a Routine
     *   }
     * })
     * 
     */
    create<T extends RoutineCreateArgs>(args: SelectSubset<T, RoutineCreateArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routines.
     * @param {RoutineCreateManyArgs} args - Arguments to create many Routines.
     * @example
     * // Create many Routines
     * const routine = await prisma.routine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoutineCreateManyArgs>(args?: SelectSubset<T, RoutineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Routines and returns the data saved in the database.
     * @param {RoutineCreateManyAndReturnArgs} args - Arguments to create many Routines.
     * @example
     * // Create many Routines
     * const routine = await prisma.routine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Routines and only return the `id`
     * const routineWithIdOnly = await prisma.routine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoutineCreateManyAndReturnArgs>(args?: SelectSubset<T, RoutineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Routine.
     * @param {RoutineDeleteArgs} args - Arguments to delete one Routine.
     * @example
     * // Delete one Routine
     * const Routine = await prisma.routine.delete({
     *   where: {
     *     // ... filter to delete one Routine
     *   }
     * })
     * 
     */
    delete<T extends RoutineDeleteArgs>(args: SelectSubset<T, RoutineDeleteArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Routine.
     * @param {RoutineUpdateArgs} args - Arguments to update one Routine.
     * @example
     * // Update one Routine
     * const routine = await prisma.routine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoutineUpdateArgs>(args: SelectSubset<T, RoutineUpdateArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routines.
     * @param {RoutineDeleteManyArgs} args - Arguments to filter Routines to delete.
     * @example
     * // Delete a few Routines
     * const { count } = await prisma.routine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoutineDeleteManyArgs>(args?: SelectSubset<T, RoutineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routines
     * const routine = await prisma.routine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoutineUpdateManyArgs>(args: SelectSubset<T, RoutineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routines and returns the data updated in the database.
     * @param {RoutineUpdateManyAndReturnArgs} args - Arguments to update many Routines.
     * @example
     * // Update many Routines
     * const routine = await prisma.routine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Routines and only return the `id`
     * const routineWithIdOnly = await prisma.routine.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoutineUpdateManyAndReturnArgs>(args: SelectSubset<T, RoutineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Routine.
     * @param {RoutineUpsertArgs} args - Arguments to update or create a Routine.
     * @example
     * // Update or create a Routine
     * const routine = await prisma.routine.upsert({
     *   create: {
     *     // ... data to create a Routine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Routine we want to update
     *   }
     * })
     */
    upsert<T extends RoutineUpsertArgs>(args: SelectSubset<T, RoutineUpsertArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineCountArgs} args - Arguments to filter Routines to count.
     * @example
     * // Count the number of Routines
     * const count = await prisma.routine.count({
     *   where: {
     *     // ... the filter for the Routines we want to count
     *   }
     * })
    **/
    count<T extends RoutineCountArgs>(
      args?: Subset<T, RoutineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoutineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Routine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoutineAggregateArgs>(args: Subset<T, RoutineAggregateArgs>): Prisma.PrismaPromise<GetRoutineAggregateType<T>>

    /**
     * Group by Routine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineGroupByArgs} args - Group by arguments.
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
      T extends RoutineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoutineGroupByArgs['orderBy'] }
        : { orderBy?: RoutineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoutineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoutineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Routine model
   */
  readonly fields: RoutineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Routine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoutineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Routine model
   */
  interface RoutineFieldRefs {
    readonly id: FieldRef<"Routine", 'String'>
    readonly title: FieldRef<"Routine", 'String'>
    readonly description: FieldRef<"Routine", 'String'>
    readonly frequency: FieldRef<"Routine", 'RoutineFrequency'>
    readonly dayOfWeek: FieldRef<"Routine", 'Int'>
    readonly startTime: FieldRef<"Routine", 'String'>
    readonly endTime: FieldRef<"Routine", 'String'>
    readonly isActive: FieldRef<"Routine", 'Boolean'>
    readonly userId: FieldRef<"Routine", 'String'>
    readonly createdAt: FieldRef<"Routine", 'DateTime'>
    readonly updatedAt: FieldRef<"Routine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Routine findUnique
   */
  export type RoutineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine findUniqueOrThrow
   */
  export type RoutineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine findFirst
   */
  export type RoutineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routines.
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routines.
     */
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * Routine findFirstOrThrow
   */
  export type RoutineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routines.
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routines.
     */
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * Routine findMany
   */
  export type RoutineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routines to fetch.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routines.
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routines.
     */
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * Routine create
   */
  export type RoutineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * The data needed to create a Routine.
     */
    data: XOR<RoutineCreateInput, RoutineUncheckedCreateInput>
  }

  /**
   * Routine createMany
   */
  export type RoutineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routines.
     */
    data: RoutineCreateManyInput | RoutineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Routine createManyAndReturn
   */
  export type RoutineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * The data used to create many Routines.
     */
    data: RoutineCreateManyInput | RoutineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Routine update
   */
  export type RoutineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * The data needed to update a Routine.
     */
    data: XOR<RoutineUpdateInput, RoutineUncheckedUpdateInput>
    /**
     * Choose, which Routine to update.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine updateMany
   */
  export type RoutineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routines.
     */
    data: XOR<RoutineUpdateManyMutationInput, RoutineUncheckedUpdateManyInput>
    /**
     * Filter which Routines to update
     */
    where?: RoutineWhereInput
    /**
     * Limit how many Routines to update.
     */
    limit?: number
  }

  /**
   * Routine updateManyAndReturn
   */
  export type RoutineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * The data used to update Routines.
     */
    data: XOR<RoutineUpdateManyMutationInput, RoutineUncheckedUpdateManyInput>
    /**
     * Filter which Routines to update
     */
    where?: RoutineWhereInput
    /**
     * Limit how many Routines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Routine upsert
   */
  export type RoutineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * The filter to search for the Routine to update in case it exists.
     */
    where: RoutineWhereUniqueInput
    /**
     * In case the Routine found by the `where` argument doesn't exist, create a new Routine with this data.
     */
    create: XOR<RoutineCreateInput, RoutineUncheckedCreateInput>
    /**
     * In case the Routine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoutineUpdateInput, RoutineUncheckedUpdateInput>
  }

  /**
   * Routine delete
   */
  export type RoutineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter which Routine to delete.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine deleteMany
   */
  export type RoutineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routines to delete
     */
    where?: RoutineWhereInput
    /**
     * Limit how many Routines to delete.
     */
    limit?: number
  }

  /**
   * Routine without action
   */
  export type RoutineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
  }


  /**
   * Model TimeBlock
   */

  export type AggregateTimeBlock = {
    _count: TimeBlockCountAggregateOutputType | null
    _min: TimeBlockMinAggregateOutputType | null
    _max: TimeBlockMaxAggregateOutputType | null
  }

  export type TimeBlockMinAggregateOutputType = {
    id: string | null
    date: Date | null
    startTime: Date | null
    endTime: Date | null
    type: $Enums.TimeBlockType | null
    title: string | null
    completed: boolean | null
    userId: string | null
    taskId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimeBlockMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    startTime: Date | null
    endTime: Date | null
    type: $Enums.TimeBlockType | null
    title: string | null
    completed: boolean | null
    userId: string | null
    taskId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimeBlockCountAggregateOutputType = {
    id: number
    date: number
    startTime: number
    endTime: number
    type: number
    title: number
    completed: number
    userId: number
    taskId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TimeBlockMinAggregateInputType = {
    id?: true
    date?: true
    startTime?: true
    endTime?: true
    type?: true
    title?: true
    completed?: true
    userId?: true
    taskId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimeBlockMaxAggregateInputType = {
    id?: true
    date?: true
    startTime?: true
    endTime?: true
    type?: true
    title?: true
    completed?: true
    userId?: true
    taskId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimeBlockCountAggregateInputType = {
    id?: true
    date?: true
    startTime?: true
    endTime?: true
    type?: true
    title?: true
    completed?: true
    userId?: true
    taskId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TimeBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeBlock to aggregate.
     */
    where?: TimeBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeBlocks to fetch.
     */
    orderBy?: TimeBlockOrderByWithRelationInput | TimeBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeBlocks
    **/
    _count?: true | TimeBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeBlockMaxAggregateInputType
  }

  export type GetTimeBlockAggregateType<T extends TimeBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeBlock[P]>
      : GetScalarType<T[P], AggregateTimeBlock[P]>
  }




  export type TimeBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeBlockWhereInput
    orderBy?: TimeBlockOrderByWithAggregationInput | TimeBlockOrderByWithAggregationInput[]
    by: TimeBlockScalarFieldEnum[] | TimeBlockScalarFieldEnum
    having?: TimeBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeBlockCountAggregateInputType | true
    _min?: TimeBlockMinAggregateInputType
    _max?: TimeBlockMaxAggregateInputType
  }

  export type TimeBlockGroupByOutputType = {
    id: string
    date: Date
    startTime: Date
    endTime: Date
    type: $Enums.TimeBlockType
    title: string
    completed: boolean
    userId: string
    taskId: string | null
    createdAt: Date
    updatedAt: Date
    _count: TimeBlockCountAggregateOutputType | null
    _min: TimeBlockMinAggregateOutputType | null
    _max: TimeBlockMaxAggregateOutputType | null
  }

  type GetTimeBlockGroupByPayload<T extends TimeBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeBlockGroupByOutputType[P]>
            : GetScalarType<T[P], TimeBlockGroupByOutputType[P]>
        }
      >
    >


  export type TimeBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    type?: boolean
    title?: boolean
    completed?: boolean
    userId?: boolean
    taskId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TimeBlock$taskArgs<ExtArgs>
  }, ExtArgs["result"]["timeBlock"]>

  export type TimeBlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    type?: boolean
    title?: boolean
    completed?: boolean
    userId?: boolean
    taskId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TimeBlock$taskArgs<ExtArgs>
  }, ExtArgs["result"]["timeBlock"]>

  export type TimeBlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    type?: boolean
    title?: boolean
    completed?: boolean
    userId?: boolean
    taskId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TimeBlock$taskArgs<ExtArgs>
  }, ExtArgs["result"]["timeBlock"]>

  export type TimeBlockSelectScalar = {
    id?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    type?: boolean
    title?: boolean
    completed?: boolean
    userId?: boolean
    taskId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TimeBlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "startTime" | "endTime" | "type" | "title" | "completed" | "userId" | "taskId" | "createdAt" | "updatedAt", ExtArgs["result"]["timeBlock"]>
  export type TimeBlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TimeBlock$taskArgs<ExtArgs>
  }
  export type TimeBlockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TimeBlock$taskArgs<ExtArgs>
  }
  export type TimeBlockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TimeBlock$taskArgs<ExtArgs>
  }

  export type $TimeBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimeBlock"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      task: Prisma.$TaskPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      startTime: Date
      endTime: Date
      type: $Enums.TimeBlockType
      title: string
      completed: boolean
      userId: string
      taskId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["timeBlock"]>
    composites: {}
  }

  type TimeBlockGetPayload<S extends boolean | null | undefined | TimeBlockDefaultArgs> = $Result.GetResult<Prisma.$TimeBlockPayload, S>

  type TimeBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimeBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimeBlockCountAggregateInputType | true
    }

  export interface TimeBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimeBlock'], meta: { name: 'TimeBlock' } }
    /**
     * Find zero or one TimeBlock that matches the filter.
     * @param {TimeBlockFindUniqueArgs} args - Arguments to find a TimeBlock
     * @example
     * // Get one TimeBlock
     * const timeBlock = await prisma.timeBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimeBlockFindUniqueArgs>(args: SelectSubset<T, TimeBlockFindUniqueArgs<ExtArgs>>): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TimeBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimeBlockFindUniqueOrThrowArgs} args - Arguments to find a TimeBlock
     * @example
     * // Get one TimeBlock
     * const timeBlock = await prisma.timeBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimeBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, TimeBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockFindFirstArgs} args - Arguments to find a TimeBlock
     * @example
     * // Get one TimeBlock
     * const timeBlock = await prisma.timeBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimeBlockFindFirstArgs>(args?: SelectSubset<T, TimeBlockFindFirstArgs<ExtArgs>>): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockFindFirstOrThrowArgs} args - Arguments to find a TimeBlock
     * @example
     * // Get one TimeBlock
     * const timeBlock = await prisma.timeBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimeBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, TimeBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TimeBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeBlocks
     * const timeBlocks = await prisma.timeBlock.findMany()
     * 
     * // Get first 10 TimeBlocks
     * const timeBlocks = await prisma.timeBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeBlockWithIdOnly = await prisma.timeBlock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimeBlockFindManyArgs>(args?: SelectSubset<T, TimeBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TimeBlock.
     * @param {TimeBlockCreateArgs} args - Arguments to create a TimeBlock.
     * @example
     * // Create one TimeBlock
     * const TimeBlock = await prisma.timeBlock.create({
     *   data: {
     *     // ... data to create a TimeBlock
     *   }
     * })
     * 
     */
    create<T extends TimeBlockCreateArgs>(args: SelectSubset<T, TimeBlockCreateArgs<ExtArgs>>): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TimeBlocks.
     * @param {TimeBlockCreateManyArgs} args - Arguments to create many TimeBlocks.
     * @example
     * // Create many TimeBlocks
     * const timeBlock = await prisma.timeBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimeBlockCreateManyArgs>(args?: SelectSubset<T, TimeBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimeBlocks and returns the data saved in the database.
     * @param {TimeBlockCreateManyAndReturnArgs} args - Arguments to create many TimeBlocks.
     * @example
     * // Create many TimeBlocks
     * const timeBlock = await prisma.timeBlock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimeBlocks and only return the `id`
     * const timeBlockWithIdOnly = await prisma.timeBlock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimeBlockCreateManyAndReturnArgs>(args?: SelectSubset<T, TimeBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TimeBlock.
     * @param {TimeBlockDeleteArgs} args - Arguments to delete one TimeBlock.
     * @example
     * // Delete one TimeBlock
     * const TimeBlock = await prisma.timeBlock.delete({
     *   where: {
     *     // ... filter to delete one TimeBlock
     *   }
     * })
     * 
     */
    delete<T extends TimeBlockDeleteArgs>(args: SelectSubset<T, TimeBlockDeleteArgs<ExtArgs>>): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TimeBlock.
     * @param {TimeBlockUpdateArgs} args - Arguments to update one TimeBlock.
     * @example
     * // Update one TimeBlock
     * const timeBlock = await prisma.timeBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimeBlockUpdateArgs>(args: SelectSubset<T, TimeBlockUpdateArgs<ExtArgs>>): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TimeBlocks.
     * @param {TimeBlockDeleteManyArgs} args - Arguments to filter TimeBlocks to delete.
     * @example
     * // Delete a few TimeBlocks
     * const { count } = await prisma.timeBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimeBlockDeleteManyArgs>(args?: SelectSubset<T, TimeBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeBlocks
     * const timeBlock = await prisma.timeBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimeBlockUpdateManyArgs>(args: SelectSubset<T, TimeBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeBlocks and returns the data updated in the database.
     * @param {TimeBlockUpdateManyAndReturnArgs} args - Arguments to update many TimeBlocks.
     * @example
     * // Update many TimeBlocks
     * const timeBlock = await prisma.timeBlock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TimeBlocks and only return the `id`
     * const timeBlockWithIdOnly = await prisma.timeBlock.updateManyAndReturn({
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
    updateManyAndReturn<T extends TimeBlockUpdateManyAndReturnArgs>(args: SelectSubset<T, TimeBlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TimeBlock.
     * @param {TimeBlockUpsertArgs} args - Arguments to update or create a TimeBlock.
     * @example
     * // Update or create a TimeBlock
     * const timeBlock = await prisma.timeBlock.upsert({
     *   create: {
     *     // ... data to create a TimeBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeBlock we want to update
     *   }
     * })
     */
    upsert<T extends TimeBlockUpsertArgs>(args: SelectSubset<T, TimeBlockUpsertArgs<ExtArgs>>): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TimeBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockCountArgs} args - Arguments to filter TimeBlocks to count.
     * @example
     * // Count the number of TimeBlocks
     * const count = await prisma.timeBlock.count({
     *   where: {
     *     // ... the filter for the TimeBlocks we want to count
     *   }
     * })
    **/
    count<T extends TimeBlockCountArgs>(
      args?: Subset<T, TimeBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimeBlockAggregateArgs>(args: Subset<T, TimeBlockAggregateArgs>): Prisma.PrismaPromise<GetTimeBlockAggregateType<T>>

    /**
     * Group by TimeBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockGroupByArgs} args - Group by arguments.
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
      T extends TimeBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeBlockGroupByArgs['orderBy'] }
        : { orderBy?: TimeBlockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimeBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimeBlock model
   */
  readonly fields: TimeBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    task<T extends TimeBlock$taskArgs<ExtArgs> = {}>(args?: Subset<T, TimeBlock$taskArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TimeBlock model
   */
  interface TimeBlockFieldRefs {
    readonly id: FieldRef<"TimeBlock", 'String'>
    readonly date: FieldRef<"TimeBlock", 'DateTime'>
    readonly startTime: FieldRef<"TimeBlock", 'DateTime'>
    readonly endTime: FieldRef<"TimeBlock", 'DateTime'>
    readonly type: FieldRef<"TimeBlock", 'TimeBlockType'>
    readonly title: FieldRef<"TimeBlock", 'String'>
    readonly completed: FieldRef<"TimeBlock", 'Boolean'>
    readonly userId: FieldRef<"TimeBlock", 'String'>
    readonly taskId: FieldRef<"TimeBlock", 'String'>
    readonly createdAt: FieldRef<"TimeBlock", 'DateTime'>
    readonly updatedAt: FieldRef<"TimeBlock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TimeBlock findUnique
   */
  export type TimeBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * Filter, which TimeBlock to fetch.
     */
    where: TimeBlockWhereUniqueInput
  }

  /**
   * TimeBlock findUniqueOrThrow
   */
  export type TimeBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * Filter, which TimeBlock to fetch.
     */
    where: TimeBlockWhereUniqueInput
  }

  /**
   * TimeBlock findFirst
   */
  export type TimeBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * Filter, which TimeBlock to fetch.
     */
    where?: TimeBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeBlocks to fetch.
     */
    orderBy?: TimeBlockOrderByWithRelationInput | TimeBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeBlocks.
     */
    cursor?: TimeBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeBlocks.
     */
    distinct?: TimeBlockScalarFieldEnum | TimeBlockScalarFieldEnum[]
  }

  /**
   * TimeBlock findFirstOrThrow
   */
  export type TimeBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * Filter, which TimeBlock to fetch.
     */
    where?: TimeBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeBlocks to fetch.
     */
    orderBy?: TimeBlockOrderByWithRelationInput | TimeBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeBlocks.
     */
    cursor?: TimeBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeBlocks.
     */
    distinct?: TimeBlockScalarFieldEnum | TimeBlockScalarFieldEnum[]
  }

  /**
   * TimeBlock findMany
   */
  export type TimeBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * Filter, which TimeBlocks to fetch.
     */
    where?: TimeBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeBlocks to fetch.
     */
    orderBy?: TimeBlockOrderByWithRelationInput | TimeBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeBlocks.
     */
    cursor?: TimeBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeBlocks.
     */
    distinct?: TimeBlockScalarFieldEnum | TimeBlockScalarFieldEnum[]
  }

  /**
   * TimeBlock create
   */
  export type TimeBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * The data needed to create a TimeBlock.
     */
    data: XOR<TimeBlockCreateInput, TimeBlockUncheckedCreateInput>
  }

  /**
   * TimeBlock createMany
   */
  export type TimeBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimeBlocks.
     */
    data: TimeBlockCreateManyInput | TimeBlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeBlock createManyAndReturn
   */
  export type TimeBlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * The data used to create many TimeBlocks.
     */
    data: TimeBlockCreateManyInput | TimeBlockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeBlock update
   */
  export type TimeBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * The data needed to update a TimeBlock.
     */
    data: XOR<TimeBlockUpdateInput, TimeBlockUncheckedUpdateInput>
    /**
     * Choose, which TimeBlock to update.
     */
    where: TimeBlockWhereUniqueInput
  }

  /**
   * TimeBlock updateMany
   */
  export type TimeBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimeBlocks.
     */
    data: XOR<TimeBlockUpdateManyMutationInput, TimeBlockUncheckedUpdateManyInput>
    /**
     * Filter which TimeBlocks to update
     */
    where?: TimeBlockWhereInput
    /**
     * Limit how many TimeBlocks to update.
     */
    limit?: number
  }

  /**
   * TimeBlock updateManyAndReturn
   */
  export type TimeBlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * The data used to update TimeBlocks.
     */
    data: XOR<TimeBlockUpdateManyMutationInput, TimeBlockUncheckedUpdateManyInput>
    /**
     * Filter which TimeBlocks to update
     */
    where?: TimeBlockWhereInput
    /**
     * Limit how many TimeBlocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeBlock upsert
   */
  export type TimeBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * The filter to search for the TimeBlock to update in case it exists.
     */
    where: TimeBlockWhereUniqueInput
    /**
     * In case the TimeBlock found by the `where` argument doesn't exist, create a new TimeBlock with this data.
     */
    create: XOR<TimeBlockCreateInput, TimeBlockUncheckedCreateInput>
    /**
     * In case the TimeBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeBlockUpdateInput, TimeBlockUncheckedUpdateInput>
  }

  /**
   * TimeBlock delete
   */
  export type TimeBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * Filter which TimeBlock to delete.
     */
    where: TimeBlockWhereUniqueInput
  }

  /**
   * TimeBlock deleteMany
   */
  export type TimeBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeBlocks to delete
     */
    where?: TimeBlockWhereInput
    /**
     * Limit how many TimeBlocks to delete.
     */
    limit?: number
  }

  /**
   * TimeBlock.task
   */
  export type TimeBlock$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
  }

  /**
   * TimeBlock without action
   */
  export type TimeBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
  }


  /**
   * Model TaskSession
   */

  export type AggregateTaskSession = {
    _count: TaskSessionCountAggregateOutputType | null
    _avg: TaskSessionAvgAggregateOutputType | null
    _sum: TaskSessionSumAggregateOutputType | null
    _min: TaskSessionMinAggregateOutputType | null
    _max: TaskSessionMaxAggregateOutputType | null
  }

  export type TaskSessionAvgAggregateOutputType = {
    duration: number | null
  }

  export type TaskSessionSumAggregateOutputType = {
    duration: number | null
  }

  export type TaskSessionMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    startedAt: Date | null
    endedAt: Date | null
    duration: number | null
    wasPaused: boolean | null
    createdAt: Date | null
  }

  export type TaskSessionMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    startedAt: Date | null
    endedAt: Date | null
    duration: number | null
    wasPaused: boolean | null
    createdAt: Date | null
  }

  export type TaskSessionCountAggregateOutputType = {
    id: number
    taskId: number
    startedAt: number
    endedAt: number
    duration: number
    wasPaused: number
    createdAt: number
    _all: number
  }


  export type TaskSessionAvgAggregateInputType = {
    duration?: true
  }

  export type TaskSessionSumAggregateInputType = {
    duration?: true
  }

  export type TaskSessionMinAggregateInputType = {
    id?: true
    taskId?: true
    startedAt?: true
    endedAt?: true
    duration?: true
    wasPaused?: true
    createdAt?: true
  }

  export type TaskSessionMaxAggregateInputType = {
    id?: true
    taskId?: true
    startedAt?: true
    endedAt?: true
    duration?: true
    wasPaused?: true
    createdAt?: true
  }

  export type TaskSessionCountAggregateInputType = {
    id?: true
    taskId?: true
    startedAt?: true
    endedAt?: true
    duration?: true
    wasPaused?: true
    createdAt?: true
    _all?: true
  }

  export type TaskSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskSession to aggregate.
     */
    where?: TaskSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskSessions to fetch.
     */
    orderBy?: TaskSessionOrderByWithRelationInput | TaskSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskSessions
    **/
    _count?: true | TaskSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskSessionMaxAggregateInputType
  }

  export type GetTaskSessionAggregateType<T extends TaskSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskSession[P]>
      : GetScalarType<T[P], AggregateTaskSession[P]>
  }




  export type TaskSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskSessionWhereInput
    orderBy?: TaskSessionOrderByWithAggregationInput | TaskSessionOrderByWithAggregationInput[]
    by: TaskSessionScalarFieldEnum[] | TaskSessionScalarFieldEnum
    having?: TaskSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskSessionCountAggregateInputType | true
    _avg?: TaskSessionAvgAggregateInputType
    _sum?: TaskSessionSumAggregateInputType
    _min?: TaskSessionMinAggregateInputType
    _max?: TaskSessionMaxAggregateInputType
  }

  export type TaskSessionGroupByOutputType = {
    id: string
    taskId: string
    startedAt: Date
    endedAt: Date | null
    duration: number | null
    wasPaused: boolean
    createdAt: Date
    _count: TaskSessionCountAggregateOutputType | null
    _avg: TaskSessionAvgAggregateOutputType | null
    _sum: TaskSessionSumAggregateOutputType | null
    _min: TaskSessionMinAggregateOutputType | null
    _max: TaskSessionMaxAggregateOutputType | null
  }

  type GetTaskSessionGroupByPayload<T extends TaskSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskSessionGroupByOutputType[P]>
            : GetScalarType<T[P], TaskSessionGroupByOutputType[P]>
        }
      >
    >


  export type TaskSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    duration?: boolean
    wasPaused?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskSession"]>

  export type TaskSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    duration?: boolean
    wasPaused?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskSession"]>

  export type TaskSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    duration?: boolean
    wasPaused?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskSession"]>

  export type TaskSessionSelectScalar = {
    id?: boolean
    taskId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    duration?: boolean
    wasPaused?: boolean
    createdAt?: boolean
  }

  export type TaskSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "startedAt" | "endedAt" | "duration" | "wasPaused" | "createdAt", ExtArgs["result"]["taskSession"]>
  export type TaskSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type TaskSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type TaskSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $TaskSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskSession"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      startedAt: Date
      endedAt: Date | null
      duration: number | null
      wasPaused: boolean
      createdAt: Date
    }, ExtArgs["result"]["taskSession"]>
    composites: {}
  }

  type TaskSessionGetPayload<S extends boolean | null | undefined | TaskSessionDefaultArgs> = $Result.GetResult<Prisma.$TaskSessionPayload, S>

  type TaskSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskSessionCountAggregateInputType | true
    }

  export interface TaskSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskSession'], meta: { name: 'TaskSession' } }
    /**
     * Find zero or one TaskSession that matches the filter.
     * @param {TaskSessionFindUniqueArgs} args - Arguments to find a TaskSession
     * @example
     * // Get one TaskSession
     * const taskSession = await prisma.taskSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskSessionFindUniqueArgs>(args: SelectSubset<T, TaskSessionFindUniqueArgs<ExtArgs>>): Prisma__TaskSessionClient<$Result.GetResult<Prisma.$TaskSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskSessionFindUniqueOrThrowArgs} args - Arguments to find a TaskSession
     * @example
     * // Get one TaskSession
     * const taskSession = await prisma.taskSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskSessionClient<$Result.GetResult<Prisma.$TaskSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSessionFindFirstArgs} args - Arguments to find a TaskSession
     * @example
     * // Get one TaskSession
     * const taskSession = await prisma.taskSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskSessionFindFirstArgs>(args?: SelectSubset<T, TaskSessionFindFirstArgs<ExtArgs>>): Prisma__TaskSessionClient<$Result.GetResult<Prisma.$TaskSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSessionFindFirstOrThrowArgs} args - Arguments to find a TaskSession
     * @example
     * // Get one TaskSession
     * const taskSession = await prisma.taskSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskSessionClient<$Result.GetResult<Prisma.$TaskSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskSessions
     * const taskSessions = await prisma.taskSession.findMany()
     * 
     * // Get first 10 TaskSessions
     * const taskSessions = await prisma.taskSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskSessionWithIdOnly = await prisma.taskSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskSessionFindManyArgs>(args?: SelectSubset<T, TaskSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskSession.
     * @param {TaskSessionCreateArgs} args - Arguments to create a TaskSession.
     * @example
     * // Create one TaskSession
     * const TaskSession = await prisma.taskSession.create({
     *   data: {
     *     // ... data to create a TaskSession
     *   }
     * })
     * 
     */
    create<T extends TaskSessionCreateArgs>(args: SelectSubset<T, TaskSessionCreateArgs<ExtArgs>>): Prisma__TaskSessionClient<$Result.GetResult<Prisma.$TaskSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskSessions.
     * @param {TaskSessionCreateManyArgs} args - Arguments to create many TaskSessions.
     * @example
     * // Create many TaskSessions
     * const taskSession = await prisma.taskSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskSessionCreateManyArgs>(args?: SelectSubset<T, TaskSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskSessions and returns the data saved in the database.
     * @param {TaskSessionCreateManyAndReturnArgs} args - Arguments to create many TaskSessions.
     * @example
     * // Create many TaskSessions
     * const taskSession = await prisma.taskSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskSessions and only return the `id`
     * const taskSessionWithIdOnly = await prisma.taskSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskSession.
     * @param {TaskSessionDeleteArgs} args - Arguments to delete one TaskSession.
     * @example
     * // Delete one TaskSession
     * const TaskSession = await prisma.taskSession.delete({
     *   where: {
     *     // ... filter to delete one TaskSession
     *   }
     * })
     * 
     */
    delete<T extends TaskSessionDeleteArgs>(args: SelectSubset<T, TaskSessionDeleteArgs<ExtArgs>>): Prisma__TaskSessionClient<$Result.GetResult<Prisma.$TaskSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskSession.
     * @param {TaskSessionUpdateArgs} args - Arguments to update one TaskSession.
     * @example
     * // Update one TaskSession
     * const taskSession = await prisma.taskSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskSessionUpdateArgs>(args: SelectSubset<T, TaskSessionUpdateArgs<ExtArgs>>): Prisma__TaskSessionClient<$Result.GetResult<Prisma.$TaskSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskSessions.
     * @param {TaskSessionDeleteManyArgs} args - Arguments to filter TaskSessions to delete.
     * @example
     * // Delete a few TaskSessions
     * const { count } = await prisma.taskSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskSessionDeleteManyArgs>(args?: SelectSubset<T, TaskSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskSessions
     * const taskSession = await prisma.taskSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskSessionUpdateManyArgs>(args: SelectSubset<T, TaskSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskSessions and returns the data updated in the database.
     * @param {TaskSessionUpdateManyAndReturnArgs} args - Arguments to update many TaskSessions.
     * @example
     * // Update many TaskSessions
     * const taskSession = await prisma.taskSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskSessions and only return the `id`
     * const taskSessionWithIdOnly = await prisma.taskSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaskSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskSession.
     * @param {TaskSessionUpsertArgs} args - Arguments to update or create a TaskSession.
     * @example
     * // Update or create a TaskSession
     * const taskSession = await prisma.taskSession.upsert({
     *   create: {
     *     // ... data to create a TaskSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskSession we want to update
     *   }
     * })
     */
    upsert<T extends TaskSessionUpsertArgs>(args: SelectSubset<T, TaskSessionUpsertArgs<ExtArgs>>): Prisma__TaskSessionClient<$Result.GetResult<Prisma.$TaskSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSessionCountArgs} args - Arguments to filter TaskSessions to count.
     * @example
     * // Count the number of TaskSessions
     * const count = await prisma.taskSession.count({
     *   where: {
     *     // ... the filter for the TaskSessions we want to count
     *   }
     * })
    **/
    count<T extends TaskSessionCountArgs>(
      args?: Subset<T, TaskSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskSessionAggregateArgs>(args: Subset<T, TaskSessionAggregateArgs>): Prisma.PrismaPromise<GetTaskSessionAggregateType<T>>

    /**
     * Group by TaskSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSessionGroupByArgs} args - Group by arguments.
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
      T extends TaskSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskSessionGroupByArgs['orderBy'] }
        : { orderBy?: TaskSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskSession model
   */
  readonly fields: TaskSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TaskSession model
   */
  interface TaskSessionFieldRefs {
    readonly id: FieldRef<"TaskSession", 'String'>
    readonly taskId: FieldRef<"TaskSession", 'String'>
    readonly startedAt: FieldRef<"TaskSession", 'DateTime'>
    readonly endedAt: FieldRef<"TaskSession", 'DateTime'>
    readonly duration: FieldRef<"TaskSession", 'Int'>
    readonly wasPaused: FieldRef<"TaskSession", 'Boolean'>
    readonly createdAt: FieldRef<"TaskSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskSession findUnique
   */
  export type TaskSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSession
     */
    select?: TaskSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSession
     */
    omit?: TaskSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSessionInclude<ExtArgs> | null
    /**
     * Filter, which TaskSession to fetch.
     */
    where: TaskSessionWhereUniqueInput
  }

  /**
   * TaskSession findUniqueOrThrow
   */
  export type TaskSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSession
     */
    select?: TaskSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSession
     */
    omit?: TaskSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSessionInclude<ExtArgs> | null
    /**
     * Filter, which TaskSession to fetch.
     */
    where: TaskSessionWhereUniqueInput
  }

  /**
   * TaskSession findFirst
   */
  export type TaskSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSession
     */
    select?: TaskSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSession
     */
    omit?: TaskSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSessionInclude<ExtArgs> | null
    /**
     * Filter, which TaskSession to fetch.
     */
    where?: TaskSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskSessions to fetch.
     */
    orderBy?: TaskSessionOrderByWithRelationInput | TaskSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskSessions.
     */
    cursor?: TaskSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskSessions.
     */
    distinct?: TaskSessionScalarFieldEnum | TaskSessionScalarFieldEnum[]
  }

  /**
   * TaskSession findFirstOrThrow
   */
  export type TaskSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSession
     */
    select?: TaskSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSession
     */
    omit?: TaskSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSessionInclude<ExtArgs> | null
    /**
     * Filter, which TaskSession to fetch.
     */
    where?: TaskSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskSessions to fetch.
     */
    orderBy?: TaskSessionOrderByWithRelationInput | TaskSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskSessions.
     */
    cursor?: TaskSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskSessions.
     */
    distinct?: TaskSessionScalarFieldEnum | TaskSessionScalarFieldEnum[]
  }

  /**
   * TaskSession findMany
   */
  export type TaskSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSession
     */
    select?: TaskSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSession
     */
    omit?: TaskSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSessionInclude<ExtArgs> | null
    /**
     * Filter, which TaskSessions to fetch.
     */
    where?: TaskSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskSessions to fetch.
     */
    orderBy?: TaskSessionOrderByWithRelationInput | TaskSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskSessions.
     */
    cursor?: TaskSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskSessions.
     */
    distinct?: TaskSessionScalarFieldEnum | TaskSessionScalarFieldEnum[]
  }

  /**
   * TaskSession create
   */
  export type TaskSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSession
     */
    select?: TaskSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSession
     */
    omit?: TaskSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskSession.
     */
    data: XOR<TaskSessionCreateInput, TaskSessionUncheckedCreateInput>
  }

  /**
   * TaskSession createMany
   */
  export type TaskSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskSessions.
     */
    data: TaskSessionCreateManyInput | TaskSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskSession createManyAndReturn
   */
  export type TaskSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSession
     */
    select?: TaskSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSession
     */
    omit?: TaskSessionOmit<ExtArgs> | null
    /**
     * The data used to create many TaskSessions.
     */
    data: TaskSessionCreateManyInput | TaskSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskSession update
   */
  export type TaskSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSession
     */
    select?: TaskSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSession
     */
    omit?: TaskSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskSession.
     */
    data: XOR<TaskSessionUpdateInput, TaskSessionUncheckedUpdateInput>
    /**
     * Choose, which TaskSession to update.
     */
    where: TaskSessionWhereUniqueInput
  }

  /**
   * TaskSession updateMany
   */
  export type TaskSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskSessions.
     */
    data: XOR<TaskSessionUpdateManyMutationInput, TaskSessionUncheckedUpdateManyInput>
    /**
     * Filter which TaskSessions to update
     */
    where?: TaskSessionWhereInput
    /**
     * Limit how many TaskSessions to update.
     */
    limit?: number
  }

  /**
   * TaskSession updateManyAndReturn
   */
  export type TaskSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSession
     */
    select?: TaskSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSession
     */
    omit?: TaskSessionOmit<ExtArgs> | null
    /**
     * The data used to update TaskSessions.
     */
    data: XOR<TaskSessionUpdateManyMutationInput, TaskSessionUncheckedUpdateManyInput>
    /**
     * Filter which TaskSessions to update
     */
    where?: TaskSessionWhereInput
    /**
     * Limit how many TaskSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskSession upsert
   */
  export type TaskSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSession
     */
    select?: TaskSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSession
     */
    omit?: TaskSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskSession to update in case it exists.
     */
    where: TaskSessionWhereUniqueInput
    /**
     * In case the TaskSession found by the `where` argument doesn't exist, create a new TaskSession with this data.
     */
    create: XOR<TaskSessionCreateInput, TaskSessionUncheckedCreateInput>
    /**
     * In case the TaskSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskSessionUpdateInput, TaskSessionUncheckedUpdateInput>
  }

  /**
   * TaskSession delete
   */
  export type TaskSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSession
     */
    select?: TaskSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSession
     */
    omit?: TaskSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSessionInclude<ExtArgs> | null
    /**
     * Filter which TaskSession to delete.
     */
    where: TaskSessionWhereUniqueInput
  }

  /**
   * TaskSession deleteMany
   */
  export type TaskSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskSessions to delete
     */
    where?: TaskSessionWhereInput
    /**
     * Limit how many TaskSessions to delete.
     */
    limit?: number
  }

  /**
   * TaskSession without action
   */
  export type TaskSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSession
     */
    select?: TaskSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSession
     */
    omit?: TaskSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSessionInclude<ExtArgs> | null
  }


  /**
   * Model Availability
   */

  export type AggregateAvailability = {
    _count: AvailabilityCountAggregateOutputType | null
    _avg: AvailabilityAvgAggregateOutputType | null
    _sum: AvailabilitySumAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  export type AvailabilityAvgAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type AvailabilitySumAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type AvailabilityMinAggregateOutputType = {
    id: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    isAvailable: boolean | null
    userId: string | null
  }

  export type AvailabilityMaxAggregateOutputType = {
    id: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    isAvailable: boolean | null
    userId: string | null
  }

  export type AvailabilityCountAggregateOutputType = {
    id: number
    dayOfWeek: number
    startTime: number
    endTime: number
    isAvailable: number
    userId: number
    _all: number
  }


  export type AvailabilityAvgAggregateInputType = {
    dayOfWeek?: true
  }

  export type AvailabilitySumAggregateInputType = {
    dayOfWeek?: true
  }

  export type AvailabilityMinAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isAvailable?: true
    userId?: true
  }

  export type AvailabilityMaxAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isAvailable?: true
    userId?: true
  }

  export type AvailabilityCountAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isAvailable?: true
    userId?: true
    _all?: true
  }

  export type AvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availability to aggregate.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Availabilities
    **/
    _count?: true | AvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityMaxAggregateInputType
  }

  export type GetAvailabilityAggregateType<T extends AvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailability[P]>
      : GetScalarType<T[P], AggregateAvailability[P]>
  }




  export type AvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithAggregationInput | AvailabilityOrderByWithAggregationInput[]
    by: AvailabilityScalarFieldEnum[] | AvailabilityScalarFieldEnum
    having?: AvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityCountAggregateInputType | true
    _avg?: AvailabilityAvgAggregateInputType
    _sum?: AvailabilitySumAggregateInputType
    _min?: AvailabilityMinAggregateInputType
    _max?: AvailabilityMaxAggregateInputType
  }

  export type AvailabilityGroupByOutputType = {
    id: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isAvailable: boolean
    userId: string
    _count: AvailabilityCountAggregateOutputType | null
    _avg: AvailabilityAvgAggregateOutputType | null
    _sum: AvailabilitySumAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  type GetAvailabilityGroupByPayload<T extends AvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isAvailable?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isAvailable?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isAvailable?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectScalar = {
    id?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isAvailable?: boolean
    userId?: boolean
  }

  export type AvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dayOfWeek" | "startTime" | "endTime" | "isAvailable" | "userId", ExtArgs["result"]["availability"]>
  export type AvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Availability"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dayOfWeek: number
      startTime: string
      endTime: string
      isAvailable: boolean
      userId: string
    }, ExtArgs["result"]["availability"]>
    composites: {}
  }

  type AvailabilityGetPayload<S extends boolean | null | undefined | AvailabilityDefaultArgs> = $Result.GetResult<Prisma.$AvailabilityPayload, S>

  type AvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailabilityCountAggregateInputType | true
    }

  export interface AvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Availability'], meta: { name: 'Availability' } }
    /**
     * Find zero or one Availability that matches the filter.
     * @param {AvailabilityFindUniqueArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilityFindUniqueArgs>(args: SelectSubset<T, AvailabilityFindUniqueArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Availability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailabilityFindUniqueOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilityFindFirstArgs>(args?: SelectSubset<T, AvailabilityFindFirstArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Availabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Availabilities
     * const availabilities = await prisma.availability.findMany()
     * 
     * // Get first 10 Availabilities
     * const availabilities = await prisma.availability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityWithIdOnly = await prisma.availability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilityFindManyArgs>(args?: SelectSubset<T, AvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Availability.
     * @param {AvailabilityCreateArgs} args - Arguments to create a Availability.
     * @example
     * // Create one Availability
     * const Availability = await prisma.availability.create({
     *   data: {
     *     // ... data to create a Availability
     *   }
     * })
     * 
     */
    create<T extends AvailabilityCreateArgs>(args: SelectSubset<T, AvailabilityCreateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Availabilities.
     * @param {AvailabilityCreateManyArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilityCreateManyArgs>(args?: SelectSubset<T, AvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Availabilities and returns the data saved in the database.
     * @param {AvailabilityCreateManyAndReturnArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Availabilities and only return the `id`
     * const availabilityWithIdOnly = await prisma.availability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Availability.
     * @param {AvailabilityDeleteArgs} args - Arguments to delete one Availability.
     * @example
     * // Delete one Availability
     * const Availability = await prisma.availability.delete({
     *   where: {
     *     // ... filter to delete one Availability
     *   }
     * })
     * 
     */
    delete<T extends AvailabilityDeleteArgs>(args: SelectSubset<T, AvailabilityDeleteArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Availability.
     * @param {AvailabilityUpdateArgs} args - Arguments to update one Availability.
     * @example
     * // Update one Availability
     * const availability = await prisma.availability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilityUpdateArgs>(args: SelectSubset<T, AvailabilityUpdateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Availabilities.
     * @param {AvailabilityDeleteManyArgs} args - Arguments to filter Availabilities to delete.
     * @example
     * // Delete a few Availabilities
     * const { count } = await prisma.availability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilityDeleteManyArgs>(args?: SelectSubset<T, AvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilityUpdateManyArgs>(args: SelectSubset<T, AvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities and returns the data updated in the database.
     * @param {AvailabilityUpdateManyAndReturnArgs} args - Arguments to update many Availabilities.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Availabilities and only return the `id`
     * const availabilityWithIdOnly = await prisma.availability.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Availability.
     * @param {AvailabilityUpsertArgs} args - Arguments to update or create a Availability.
     * @example
     * // Update or create a Availability
     * const availability = await prisma.availability.upsert({
     *   create: {
     *     // ... data to create a Availability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Availability we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilityUpsertArgs>(args: SelectSubset<T, AvailabilityUpsertArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityCountArgs} args - Arguments to filter Availabilities to count.
     * @example
     * // Count the number of Availabilities
     * const count = await prisma.availability.count({
     *   where: {
     *     // ... the filter for the Availabilities we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityCountArgs>(
      args?: Subset<T, AvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailabilityAggregateArgs>(args: Subset<T, AvailabilityAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityAggregateType<T>>

    /**
     * Group by Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityGroupByArgs} args - Group by arguments.
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
      T extends AvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Availability model
   */
  readonly fields: AvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Availability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Availability model
   */
  interface AvailabilityFieldRefs {
    readonly id: FieldRef<"Availability", 'String'>
    readonly dayOfWeek: FieldRef<"Availability", 'Int'>
    readonly startTime: FieldRef<"Availability", 'String'>
    readonly endTime: FieldRef<"Availability", 'String'>
    readonly isAvailable: FieldRef<"Availability", 'Boolean'>
    readonly userId: FieldRef<"Availability", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Availability findUnique
   */
  export type AvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findUniqueOrThrow
   */
  export type AvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findFirst
   */
  export type AvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findFirstOrThrow
   */
  export type AvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findMany
   */
  export type AvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availabilities to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability create
   */
  export type AvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Availability.
     */
    data: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
  }

  /**
   * Availability createMany
   */
  export type AvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Availability createManyAndReturn
   */
  export type AvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Availability update
   */
  export type AvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Availability.
     */
    data: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
    /**
     * Choose, which Availability to update.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability updateMany
   */
  export type AvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to update.
     */
    limit?: number
  }

  /**
   * Availability updateManyAndReturn
   */
  export type AvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Availability upsert
   */
  export type AvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Availability to update in case it exists.
     */
    where: AvailabilityWhereUniqueInput
    /**
     * In case the Availability found by the `where` argument doesn't exist, create a new Availability with this data.
     */
    create: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
    /**
     * In case the Availability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
  }

  /**
   * Availability delete
   */
  export type AvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter which Availability to delete.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability deleteMany
   */
  export type AvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availabilities to delete
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to delete.
     */
    limit?: number
  }

  /**
   * Availability without action
   */
  export type AvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model Settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsAvgAggregateOutputType = {
    workHoursPerDay: number | null
    breakMinutes: number | null
    focusSessionMinutes: number | null
  }

  export type SettingsSumAggregateOutputType = {
    workHoursPerDay: number | null
    breakMinutes: number | null
    focusSessionMinutes: number | null
  }

  export type SettingsMinAggregateOutputType = {
    id: string | null
    aiPrompt: string | null
    workHoursPerDay: number | null
    breakMinutes: number | null
    focusSessionMinutes: number | null
    theme: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: string | null
    aiPrompt: string | null
    workHoursPerDay: number | null
    breakMinutes: number | null
    focusSessionMinutes: number | null
    theme: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    aiPrompt: number
    workHoursPerDay: number
    breakMinutes: number
    focusSessionMinutes: number
    theme: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SettingsAvgAggregateInputType = {
    workHoursPerDay?: true
    breakMinutes?: true
    focusSessionMinutes?: true
  }

  export type SettingsSumAggregateInputType = {
    workHoursPerDay?: true
    breakMinutes?: true
    focusSessionMinutes?: true
  }

  export type SettingsMinAggregateInputType = {
    id?: true
    aiPrompt?: true
    workHoursPerDay?: true
    breakMinutes?: true
    focusSessionMinutes?: true
    theme?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    aiPrompt?: true
    workHoursPerDay?: true
    breakMinutes?: true
    focusSessionMinutes?: true
    theme?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    aiPrompt?: true
    workHoursPerDay?: true
    breakMinutes?: true
    focusSessionMinutes?: true
    theme?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to aggregate.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type SettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingsWhereInput
    orderBy?: SettingsOrderByWithAggregationInput | SettingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: SettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _avg?: SettingsAvgAggregateInputType
    _sum?: SettingsSumAggregateInputType
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: string
    aiPrompt: string | null
    workHoursPerDay: number
    breakMinutes: number
    focusSessionMinutes: number
    theme: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends SettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type SettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aiPrompt?: boolean
    workHoursPerDay?: boolean
    breakMinutes?: boolean
    focusSessionMinutes?: boolean
    theme?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aiPrompt?: boolean
    workHoursPerDay?: boolean
    breakMinutes?: boolean
    focusSessionMinutes?: boolean
    theme?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aiPrompt?: boolean
    workHoursPerDay?: boolean
    breakMinutes?: boolean
    focusSessionMinutes?: boolean
    theme?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectScalar = {
    id?: boolean
    aiPrompt?: boolean
    workHoursPerDay?: boolean
    breakMinutes?: boolean
    focusSessionMinutes?: boolean
    theme?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "aiPrompt" | "workHoursPerDay" | "breakMinutes" | "focusSessionMinutes" | "theme" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["settings"]>
  export type SettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      aiPrompt: string | null
      workHoursPerDay: number
      breakMinutes: number
      focusSessionMinutes: number
      theme: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type SettingsGetPayload<S extends boolean | null | undefined | SettingsDefaultArgs> = $Result.GetResult<Prisma.$SettingsPayload, S>

  type SettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface SettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settings'], meta: { name: 'Settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {SettingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingsFindUniqueArgs>(args: SelectSubset<T, SettingsFindUniqueArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingsFindFirstArgs>(args?: SelectSubset<T, SettingsFindFirstArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingsFindManyArgs>(args?: SelectSubset<T, SettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settings.
     * @param {SettingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends SettingsCreateArgs>(args: SelectSubset<T, SettingsCreateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingsCreateManyArgs>(args?: SelectSubset<T, SettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingsCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Settings.
     * @param {SettingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends SettingsDeleteArgs>(args: SelectSubset<T, SettingsDeleteArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settings.
     * @param {SettingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingsUpdateArgs>(args: SelectSubset<T, SettingsUpdateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingsDeleteManyArgs>(args?: SelectSubset<T, SettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingsUpdateManyArgs>(args: SelectSubset<T, SettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingsUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.updateManyAndReturn({
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
    updateManyAndReturn<T extends SettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Settings.
     * @param {SettingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends SettingsUpsertArgs>(args: SelectSubset<T, SettingsUpsertArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingsCountArgs>(
      args?: Subset<T, SettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsGroupByArgs} args - Group by arguments.
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
      T extends SettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingsGroupByArgs['orderBy'] }
        : { orderBy?: SettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settings model
   */
  readonly fields: SettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Settings model
   */
  interface SettingsFieldRefs {
    readonly id: FieldRef<"Settings", 'String'>
    readonly aiPrompt: FieldRef<"Settings", 'String'>
    readonly workHoursPerDay: FieldRef<"Settings", 'Int'>
    readonly breakMinutes: FieldRef<"Settings", 'Int'>
    readonly focusSessionMinutes: FieldRef<"Settings", 'Int'>
    readonly theme: FieldRef<"Settings", 'String'>
    readonly userId: FieldRef<"Settings", 'String'>
    readonly createdAt: FieldRef<"Settings", 'DateTime'>
    readonly updatedAt: FieldRef<"Settings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Settings findUnique
   */
  export type SettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findUniqueOrThrow
   */
  export type SettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findFirst
   */
  export type SettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findFirstOrThrow
   */
  export type SettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findMany
   */
  export type SettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings create
   */
  export type SettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Settings.
     */
    data: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
  }

  /**
   * Settings createMany
   */
  export type SettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings createManyAndReturn
   */
  export type SettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Settings update
   */
  export type SettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Settings.
     */
    data: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
    /**
     * Choose, which Settings to update.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings updateMany
   */
  export type SettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Settings updateManyAndReturn
   */
  export type SettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Settings upsert
   */
  export type SettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Settings to update in case it exists.
     */
    where: SettingsWhereUniqueInput
    /**
     * In case the Settings found by the `where` argument doesn't exist, create a new Settings with this data.
     */
    create: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
    /**
     * In case the Settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
  }

  /**
   * Settings delete
   */
  export type SettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter which Settings to delete.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings deleteMany
   */
  export type SettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Settings without action
   */
  export type SettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
  }


  /**
   * Model AIContext
   */

  export type AggregateAIContext = {
    _count: AIContextCountAggregateOutputType | null
    _min: AIContextMinAggregateOutputType | null
    _max: AIContextMaxAggregateOutputType | null
  }

  export type AIContextMinAggregateOutputType = {
    id: string | null
    key: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AIContextMaxAggregateOutputType = {
    id: string | null
    key: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AIContextCountAggregateOutputType = {
    id: number
    key: number
    value: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AIContextMinAggregateInputType = {
    id?: true
    key?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AIContextMaxAggregateInputType = {
    id?: true
    key?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AIContextCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AIContextAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIContext to aggregate.
     */
    where?: AIContextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIContexts to fetch.
     */
    orderBy?: AIContextOrderByWithRelationInput | AIContextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIContextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIContexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIContexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIContexts
    **/
    _count?: true | AIContextCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIContextMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIContextMaxAggregateInputType
  }

  export type GetAIContextAggregateType<T extends AIContextAggregateArgs> = {
        [P in keyof T & keyof AggregateAIContext]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIContext[P]>
      : GetScalarType<T[P], AggregateAIContext[P]>
  }




  export type AIContextGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIContextWhereInput
    orderBy?: AIContextOrderByWithAggregationInput | AIContextOrderByWithAggregationInput[]
    by: AIContextScalarFieldEnum[] | AIContextScalarFieldEnum
    having?: AIContextScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIContextCountAggregateInputType | true
    _min?: AIContextMinAggregateInputType
    _max?: AIContextMaxAggregateInputType
  }

  export type AIContextGroupByOutputType = {
    id: string
    key: string
    value: JsonValue
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: AIContextCountAggregateOutputType | null
    _min: AIContextMinAggregateOutputType | null
    _max: AIContextMaxAggregateOutputType | null
  }

  type GetAIContextGroupByPayload<T extends AIContextGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIContextGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIContextGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIContextGroupByOutputType[P]>
            : GetScalarType<T[P], AIContextGroupByOutputType[P]>
        }
      >
    >


  export type AIContextSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIContext"]>

  export type AIContextSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIContext"]>

  export type AIContextSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIContext"]>

  export type AIContextSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AIContextOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["aIContext"]>
  export type AIContextInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AIContextIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AIContextIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AIContextPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIContext"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: Prisma.JsonValue
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aIContext"]>
    composites: {}
  }

  type AIContextGetPayload<S extends boolean | null | undefined | AIContextDefaultArgs> = $Result.GetResult<Prisma.$AIContextPayload, S>

  type AIContextCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIContextFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIContextCountAggregateInputType | true
    }

  export interface AIContextDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIContext'], meta: { name: 'AIContext' } }
    /**
     * Find zero or one AIContext that matches the filter.
     * @param {AIContextFindUniqueArgs} args - Arguments to find a AIContext
     * @example
     * // Get one AIContext
     * const aIContext = await prisma.aIContext.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIContextFindUniqueArgs>(args: SelectSubset<T, AIContextFindUniqueArgs<ExtArgs>>): Prisma__AIContextClient<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIContext that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIContextFindUniqueOrThrowArgs} args - Arguments to find a AIContext
     * @example
     * // Get one AIContext
     * const aIContext = await prisma.aIContext.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIContextFindUniqueOrThrowArgs>(args: SelectSubset<T, AIContextFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIContextClient<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIContext that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIContextFindFirstArgs} args - Arguments to find a AIContext
     * @example
     * // Get one AIContext
     * const aIContext = await prisma.aIContext.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIContextFindFirstArgs>(args?: SelectSubset<T, AIContextFindFirstArgs<ExtArgs>>): Prisma__AIContextClient<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIContext that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIContextFindFirstOrThrowArgs} args - Arguments to find a AIContext
     * @example
     * // Get one AIContext
     * const aIContext = await prisma.aIContext.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIContextFindFirstOrThrowArgs>(args?: SelectSubset<T, AIContextFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIContextClient<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIContexts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIContextFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIContexts
     * const aIContexts = await prisma.aIContext.findMany()
     * 
     * // Get first 10 AIContexts
     * const aIContexts = await prisma.aIContext.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIContextWithIdOnly = await prisma.aIContext.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIContextFindManyArgs>(args?: SelectSubset<T, AIContextFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIContext.
     * @param {AIContextCreateArgs} args - Arguments to create a AIContext.
     * @example
     * // Create one AIContext
     * const AIContext = await prisma.aIContext.create({
     *   data: {
     *     // ... data to create a AIContext
     *   }
     * })
     * 
     */
    create<T extends AIContextCreateArgs>(args: SelectSubset<T, AIContextCreateArgs<ExtArgs>>): Prisma__AIContextClient<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIContexts.
     * @param {AIContextCreateManyArgs} args - Arguments to create many AIContexts.
     * @example
     * // Create many AIContexts
     * const aIContext = await prisma.aIContext.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIContextCreateManyArgs>(args?: SelectSubset<T, AIContextCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIContexts and returns the data saved in the database.
     * @param {AIContextCreateManyAndReturnArgs} args - Arguments to create many AIContexts.
     * @example
     * // Create many AIContexts
     * const aIContext = await prisma.aIContext.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIContexts and only return the `id`
     * const aIContextWithIdOnly = await prisma.aIContext.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIContextCreateManyAndReturnArgs>(args?: SelectSubset<T, AIContextCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIContext.
     * @param {AIContextDeleteArgs} args - Arguments to delete one AIContext.
     * @example
     * // Delete one AIContext
     * const AIContext = await prisma.aIContext.delete({
     *   where: {
     *     // ... filter to delete one AIContext
     *   }
     * })
     * 
     */
    delete<T extends AIContextDeleteArgs>(args: SelectSubset<T, AIContextDeleteArgs<ExtArgs>>): Prisma__AIContextClient<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIContext.
     * @param {AIContextUpdateArgs} args - Arguments to update one AIContext.
     * @example
     * // Update one AIContext
     * const aIContext = await prisma.aIContext.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIContextUpdateArgs>(args: SelectSubset<T, AIContextUpdateArgs<ExtArgs>>): Prisma__AIContextClient<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIContexts.
     * @param {AIContextDeleteManyArgs} args - Arguments to filter AIContexts to delete.
     * @example
     * // Delete a few AIContexts
     * const { count } = await prisma.aIContext.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIContextDeleteManyArgs>(args?: SelectSubset<T, AIContextDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIContexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIContextUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIContexts
     * const aIContext = await prisma.aIContext.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIContextUpdateManyArgs>(args: SelectSubset<T, AIContextUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIContexts and returns the data updated in the database.
     * @param {AIContextUpdateManyAndReturnArgs} args - Arguments to update many AIContexts.
     * @example
     * // Update many AIContexts
     * const aIContext = await prisma.aIContext.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIContexts and only return the `id`
     * const aIContextWithIdOnly = await prisma.aIContext.updateManyAndReturn({
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
    updateManyAndReturn<T extends AIContextUpdateManyAndReturnArgs>(args: SelectSubset<T, AIContextUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIContext.
     * @param {AIContextUpsertArgs} args - Arguments to update or create a AIContext.
     * @example
     * // Update or create a AIContext
     * const aIContext = await prisma.aIContext.upsert({
     *   create: {
     *     // ... data to create a AIContext
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIContext we want to update
     *   }
     * })
     */
    upsert<T extends AIContextUpsertArgs>(args: SelectSubset<T, AIContextUpsertArgs<ExtArgs>>): Prisma__AIContextClient<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIContexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIContextCountArgs} args - Arguments to filter AIContexts to count.
     * @example
     * // Count the number of AIContexts
     * const count = await prisma.aIContext.count({
     *   where: {
     *     // ... the filter for the AIContexts we want to count
     *   }
     * })
    **/
    count<T extends AIContextCountArgs>(
      args?: Subset<T, AIContextCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIContextCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIContext.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIContextAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AIContextAggregateArgs>(args: Subset<T, AIContextAggregateArgs>): Prisma.PrismaPromise<GetAIContextAggregateType<T>>

    /**
     * Group by AIContext.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIContextGroupByArgs} args - Group by arguments.
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
      T extends AIContextGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIContextGroupByArgs['orderBy'] }
        : { orderBy?: AIContextGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AIContextGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIContextGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIContext model
   */
  readonly fields: AIContextFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIContext.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIContextClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AIContext model
   */
  interface AIContextFieldRefs {
    readonly id: FieldRef<"AIContext", 'String'>
    readonly key: FieldRef<"AIContext", 'String'>
    readonly value: FieldRef<"AIContext", 'Json'>
    readonly userId: FieldRef<"AIContext", 'String'>
    readonly createdAt: FieldRef<"AIContext", 'DateTime'>
    readonly updatedAt: FieldRef<"AIContext", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AIContext findUnique
   */
  export type AIContextFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextInclude<ExtArgs> | null
    /**
     * Filter, which AIContext to fetch.
     */
    where: AIContextWhereUniqueInput
  }

  /**
   * AIContext findUniqueOrThrow
   */
  export type AIContextFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextInclude<ExtArgs> | null
    /**
     * Filter, which AIContext to fetch.
     */
    where: AIContextWhereUniqueInput
  }

  /**
   * AIContext findFirst
   */
  export type AIContextFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextInclude<ExtArgs> | null
    /**
     * Filter, which AIContext to fetch.
     */
    where?: AIContextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIContexts to fetch.
     */
    orderBy?: AIContextOrderByWithRelationInput | AIContextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIContexts.
     */
    cursor?: AIContextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIContexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIContexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIContexts.
     */
    distinct?: AIContextScalarFieldEnum | AIContextScalarFieldEnum[]
  }

  /**
   * AIContext findFirstOrThrow
   */
  export type AIContextFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextInclude<ExtArgs> | null
    /**
     * Filter, which AIContext to fetch.
     */
    where?: AIContextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIContexts to fetch.
     */
    orderBy?: AIContextOrderByWithRelationInput | AIContextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIContexts.
     */
    cursor?: AIContextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIContexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIContexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIContexts.
     */
    distinct?: AIContextScalarFieldEnum | AIContextScalarFieldEnum[]
  }

  /**
   * AIContext findMany
   */
  export type AIContextFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextInclude<ExtArgs> | null
    /**
     * Filter, which AIContexts to fetch.
     */
    where?: AIContextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIContexts to fetch.
     */
    orderBy?: AIContextOrderByWithRelationInput | AIContextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIContexts.
     */
    cursor?: AIContextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIContexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIContexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIContexts.
     */
    distinct?: AIContextScalarFieldEnum | AIContextScalarFieldEnum[]
  }

  /**
   * AIContext create
   */
  export type AIContextCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextInclude<ExtArgs> | null
    /**
     * The data needed to create a AIContext.
     */
    data: XOR<AIContextCreateInput, AIContextUncheckedCreateInput>
  }

  /**
   * AIContext createMany
   */
  export type AIContextCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIContexts.
     */
    data: AIContextCreateManyInput | AIContextCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIContext createManyAndReturn
   */
  export type AIContextCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * The data used to create many AIContexts.
     */
    data: AIContextCreateManyInput | AIContextCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIContext update
   */
  export type AIContextUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextInclude<ExtArgs> | null
    /**
     * The data needed to update a AIContext.
     */
    data: XOR<AIContextUpdateInput, AIContextUncheckedUpdateInput>
    /**
     * Choose, which AIContext to update.
     */
    where: AIContextWhereUniqueInput
  }

  /**
   * AIContext updateMany
   */
  export type AIContextUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIContexts.
     */
    data: XOR<AIContextUpdateManyMutationInput, AIContextUncheckedUpdateManyInput>
    /**
     * Filter which AIContexts to update
     */
    where?: AIContextWhereInput
    /**
     * Limit how many AIContexts to update.
     */
    limit?: number
  }

  /**
   * AIContext updateManyAndReturn
   */
  export type AIContextUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * The data used to update AIContexts.
     */
    data: XOR<AIContextUpdateManyMutationInput, AIContextUncheckedUpdateManyInput>
    /**
     * Filter which AIContexts to update
     */
    where?: AIContextWhereInput
    /**
     * Limit how many AIContexts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIContext upsert
   */
  export type AIContextUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextInclude<ExtArgs> | null
    /**
     * The filter to search for the AIContext to update in case it exists.
     */
    where: AIContextWhereUniqueInput
    /**
     * In case the AIContext found by the `where` argument doesn't exist, create a new AIContext with this data.
     */
    create: XOR<AIContextCreateInput, AIContextUncheckedCreateInput>
    /**
     * In case the AIContext was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIContextUpdateInput, AIContextUncheckedUpdateInput>
  }

  /**
   * AIContext delete
   */
  export type AIContextDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextInclude<ExtArgs> | null
    /**
     * Filter which AIContext to delete.
     */
    where: AIContextWhereUniqueInput
  }

  /**
   * AIContext deleteMany
   */
  export type AIContextDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIContexts to delete
     */
    where?: AIContextWhereInput
    /**
     * Limit how many AIContexts to delete.
     */
    limit?: number
  }

  /**
   * AIContext without action
   */
  export type AIContextDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GoalScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    targetDate: 'targetDate',
    isActive: 'isActive',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    priority: 'priority',
    status: 'status',
    estimatedMinutes: 'estimatedMinutes',
    completedMinutes: 'completedMinutes',
    order: 'order',
    userId: 'userId',
    goalId: 'goalId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const RoutineScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    frequency: 'frequency',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    isActive: 'isActive',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoutineScalarFieldEnum = (typeof RoutineScalarFieldEnum)[keyof typeof RoutineScalarFieldEnum]


  export const TimeBlockScalarFieldEnum: {
    id: 'id',
    date: 'date',
    startTime: 'startTime',
    endTime: 'endTime',
    type: 'type',
    title: 'title',
    completed: 'completed',
    userId: 'userId',
    taskId: 'taskId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TimeBlockScalarFieldEnum = (typeof TimeBlockScalarFieldEnum)[keyof typeof TimeBlockScalarFieldEnum]


  export const TaskSessionScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    duration: 'duration',
    wasPaused: 'wasPaused',
    createdAt: 'createdAt'
  };

  export type TaskSessionScalarFieldEnum = (typeof TaskSessionScalarFieldEnum)[keyof typeof TaskSessionScalarFieldEnum]


  export const AvailabilityScalarFieldEnum: {
    id: 'id',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    isAvailable: 'isAvailable',
    userId: 'userId'
  };

  export type AvailabilityScalarFieldEnum = (typeof AvailabilityScalarFieldEnum)[keyof typeof AvailabilityScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    id: 'id',
    aiPrompt: 'aiPrompt',
    workHoursPerDay: 'workHoursPerDay',
    breakMinutes: 'breakMinutes',
    focusSessionMinutes: 'focusSessionMinutes',
    theme: 'theme',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const AIContextScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AIContextScalarFieldEnum = (typeof AIContextScalarFieldEnum)[keyof typeof AIContextScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TaskPriority'
   */
  export type EnumTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskPriority'>
    


  /**
   * Reference to a field of type 'TaskPriority[]'
   */
  export type ListEnumTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskPriority[]'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'RoutineFrequency'
   */
  export type EnumRoutineFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoutineFrequency'>
    


  /**
   * Reference to a field of type 'RoutineFrequency[]'
   */
  export type ListEnumRoutineFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoutineFrequency[]'>
    


  /**
   * Reference to a field of type 'TimeBlockType'
   */
  export type EnumTimeBlockTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TimeBlockType'>
    


  /**
   * Reference to a field of type 'TimeBlockType[]'
   */
  export type ListEnumTimeBlockTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TimeBlockType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    goals?: GoalListRelationFilter
    tasks?: TaskListRelationFilter
    routines?: RoutineListRelationFilter
    timeBlocks?: TimeBlockListRelationFilter
    availability?: AvailabilityListRelationFilter
    aiContexts?: AIContextListRelationFilter
    settings?: XOR<SettingsNullableScalarRelationFilter, SettingsWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    goals?: GoalOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    routines?: RoutineOrderByRelationAggregateInput
    timeBlocks?: TimeBlockOrderByRelationAggregateInput
    availability?: AvailabilityOrderByRelationAggregateInput
    aiContexts?: AIContextOrderByRelationAggregateInput
    settings?: SettingsOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    goals?: GoalListRelationFilter
    tasks?: TaskListRelationFilter
    routines?: RoutineListRelationFilter
    timeBlocks?: TimeBlockListRelationFilter
    availability?: AvailabilityListRelationFilter
    aiContexts?: AIContextListRelationFilter
    settings?: XOR<SettingsNullableScalarRelationFilter, SettingsWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GoalWhereInput = {
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    id?: StringFilter<"Goal"> | string
    title?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    targetDate?: DateTimeNullableFilter<"Goal"> | Date | string | null
    isActive?: BoolFilter<"Goal"> | boolean
    userId?: StringFilter<"Goal"> | string
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
  }

  export type GoalOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    targetDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type GoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    title?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    targetDate?: DateTimeNullableFilter<"Goal"> | Date | string | null
    isActive?: BoolFilter<"Goal"> | boolean
    userId?: StringFilter<"Goal"> | string
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
  }, "id">

  export type GoalOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    targetDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GoalCountOrderByAggregateInput
    _max?: GoalMaxOrderByAggregateInput
    _min?: GoalMinOrderByAggregateInput
  }

  export type GoalScalarWhereWithAggregatesInput = {
    AND?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    OR?: GoalScalarWhereWithAggregatesInput[]
    NOT?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Goal"> | string
    title?: StringWithAggregatesFilter<"Goal"> | string
    description?: StringNullableWithAggregatesFilter<"Goal"> | string | null
    targetDate?: DateTimeNullableWithAggregatesFilter<"Goal"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"Goal"> | boolean
    userId?: StringWithAggregatesFilter<"Goal"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    estimatedMinutes?: IntFilter<"Task"> | number
    completedMinutes?: IntFilter<"Task"> | number
    order?: IntNullableFilter<"Task"> | number | null
    userId?: StringFilter<"Task"> | string
    goalId?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    goal?: XOR<GoalNullableScalarRelationFilter, GoalWhereInput> | null
    timeBlocks?: TimeBlockListRelationFilter
    sessions?: TaskSessionListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    estimatedMinutes?: SortOrder
    completedMinutes?: SortOrder
    order?: SortOrderInput | SortOrder
    userId?: SortOrder
    goalId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    goal?: GoalOrderByWithRelationInput
    timeBlocks?: TimeBlockOrderByRelationAggregateInput
    sessions?: TaskSessionOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    estimatedMinutes?: IntFilter<"Task"> | number
    completedMinutes?: IntFilter<"Task"> | number
    order?: IntNullableFilter<"Task"> | number | null
    userId?: StringFilter<"Task"> | string
    goalId?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    goal?: XOR<GoalNullableScalarRelationFilter, GoalWhereInput> | null
    timeBlocks?: TimeBlockListRelationFilter
    sessions?: TaskSessionListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    estimatedMinutes?: SortOrder
    completedMinutes?: SortOrder
    order?: SortOrderInput | SortOrder
    userId?: SortOrder
    goalId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    priority?: EnumTaskPriorityWithAggregatesFilter<"Task"> | $Enums.TaskPriority
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    estimatedMinutes?: IntWithAggregatesFilter<"Task"> | number
    completedMinutes?: IntWithAggregatesFilter<"Task"> | number
    order?: IntNullableWithAggregatesFilter<"Task"> | number | null
    userId?: StringWithAggregatesFilter<"Task"> | string
    goalId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type RoutineWhereInput = {
    AND?: RoutineWhereInput | RoutineWhereInput[]
    OR?: RoutineWhereInput[]
    NOT?: RoutineWhereInput | RoutineWhereInput[]
    id?: StringFilter<"Routine"> | string
    title?: StringFilter<"Routine"> | string
    description?: StringNullableFilter<"Routine"> | string | null
    frequency?: EnumRoutineFrequencyFilter<"Routine"> | $Enums.RoutineFrequency
    dayOfWeek?: IntNullableFilter<"Routine"> | number | null
    startTime?: StringFilter<"Routine"> | string
    endTime?: StringFilter<"Routine"> | string
    isActive?: BoolFilter<"Routine"> | boolean
    userId?: StringFilter<"Routine"> | string
    createdAt?: DateTimeFilter<"Routine"> | Date | string
    updatedAt?: DateTimeFilter<"Routine"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RoutineOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    frequency?: SortOrder
    dayOfWeek?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RoutineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoutineWhereInput | RoutineWhereInput[]
    OR?: RoutineWhereInput[]
    NOT?: RoutineWhereInput | RoutineWhereInput[]
    title?: StringFilter<"Routine"> | string
    description?: StringNullableFilter<"Routine"> | string | null
    frequency?: EnumRoutineFrequencyFilter<"Routine"> | $Enums.RoutineFrequency
    dayOfWeek?: IntNullableFilter<"Routine"> | number | null
    startTime?: StringFilter<"Routine"> | string
    endTime?: StringFilter<"Routine"> | string
    isActive?: BoolFilter<"Routine"> | boolean
    userId?: StringFilter<"Routine"> | string
    createdAt?: DateTimeFilter<"Routine"> | Date | string
    updatedAt?: DateTimeFilter<"Routine"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RoutineOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    frequency?: SortOrder
    dayOfWeek?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoutineCountOrderByAggregateInput
    _avg?: RoutineAvgOrderByAggregateInput
    _max?: RoutineMaxOrderByAggregateInput
    _min?: RoutineMinOrderByAggregateInput
    _sum?: RoutineSumOrderByAggregateInput
  }

  export type RoutineScalarWhereWithAggregatesInput = {
    AND?: RoutineScalarWhereWithAggregatesInput | RoutineScalarWhereWithAggregatesInput[]
    OR?: RoutineScalarWhereWithAggregatesInput[]
    NOT?: RoutineScalarWhereWithAggregatesInput | RoutineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Routine"> | string
    title?: StringWithAggregatesFilter<"Routine"> | string
    description?: StringNullableWithAggregatesFilter<"Routine"> | string | null
    frequency?: EnumRoutineFrequencyWithAggregatesFilter<"Routine"> | $Enums.RoutineFrequency
    dayOfWeek?: IntNullableWithAggregatesFilter<"Routine"> | number | null
    startTime?: StringWithAggregatesFilter<"Routine"> | string
    endTime?: StringWithAggregatesFilter<"Routine"> | string
    isActive?: BoolWithAggregatesFilter<"Routine"> | boolean
    userId?: StringWithAggregatesFilter<"Routine"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Routine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Routine"> | Date | string
  }

  export type TimeBlockWhereInput = {
    AND?: TimeBlockWhereInput | TimeBlockWhereInput[]
    OR?: TimeBlockWhereInput[]
    NOT?: TimeBlockWhereInput | TimeBlockWhereInput[]
    id?: StringFilter<"TimeBlock"> | string
    date?: DateTimeFilter<"TimeBlock"> | Date | string
    startTime?: DateTimeFilter<"TimeBlock"> | Date | string
    endTime?: DateTimeFilter<"TimeBlock"> | Date | string
    type?: EnumTimeBlockTypeFilter<"TimeBlock"> | $Enums.TimeBlockType
    title?: StringFilter<"TimeBlock"> | string
    completed?: BoolFilter<"TimeBlock"> | boolean
    userId?: StringFilter<"TimeBlock"> | string
    taskId?: StringNullableFilter<"TimeBlock"> | string | null
    createdAt?: DateTimeFilter<"TimeBlock"> | Date | string
    updatedAt?: DateTimeFilter<"TimeBlock"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    task?: XOR<TaskNullableScalarRelationFilter, TaskWhereInput> | null
  }

  export type TimeBlockOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    type?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    taskId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    task?: TaskOrderByWithRelationInput
  }

  export type TimeBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimeBlockWhereInput | TimeBlockWhereInput[]
    OR?: TimeBlockWhereInput[]
    NOT?: TimeBlockWhereInput | TimeBlockWhereInput[]
    date?: DateTimeFilter<"TimeBlock"> | Date | string
    startTime?: DateTimeFilter<"TimeBlock"> | Date | string
    endTime?: DateTimeFilter<"TimeBlock"> | Date | string
    type?: EnumTimeBlockTypeFilter<"TimeBlock"> | $Enums.TimeBlockType
    title?: StringFilter<"TimeBlock"> | string
    completed?: BoolFilter<"TimeBlock"> | boolean
    userId?: StringFilter<"TimeBlock"> | string
    taskId?: StringNullableFilter<"TimeBlock"> | string | null
    createdAt?: DateTimeFilter<"TimeBlock"> | Date | string
    updatedAt?: DateTimeFilter<"TimeBlock"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    task?: XOR<TaskNullableScalarRelationFilter, TaskWhereInput> | null
  }, "id">

  export type TimeBlockOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    type?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    taskId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TimeBlockCountOrderByAggregateInput
    _max?: TimeBlockMaxOrderByAggregateInput
    _min?: TimeBlockMinOrderByAggregateInput
  }

  export type TimeBlockScalarWhereWithAggregatesInput = {
    AND?: TimeBlockScalarWhereWithAggregatesInput | TimeBlockScalarWhereWithAggregatesInput[]
    OR?: TimeBlockScalarWhereWithAggregatesInput[]
    NOT?: TimeBlockScalarWhereWithAggregatesInput | TimeBlockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TimeBlock"> | string
    date?: DateTimeWithAggregatesFilter<"TimeBlock"> | Date | string
    startTime?: DateTimeWithAggregatesFilter<"TimeBlock"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"TimeBlock"> | Date | string
    type?: EnumTimeBlockTypeWithAggregatesFilter<"TimeBlock"> | $Enums.TimeBlockType
    title?: StringWithAggregatesFilter<"TimeBlock"> | string
    completed?: BoolWithAggregatesFilter<"TimeBlock"> | boolean
    userId?: StringWithAggregatesFilter<"TimeBlock"> | string
    taskId?: StringNullableWithAggregatesFilter<"TimeBlock"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TimeBlock"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TimeBlock"> | Date | string
  }

  export type TaskSessionWhereInput = {
    AND?: TaskSessionWhereInput | TaskSessionWhereInput[]
    OR?: TaskSessionWhereInput[]
    NOT?: TaskSessionWhereInput | TaskSessionWhereInput[]
    id?: StringFilter<"TaskSession"> | string
    taskId?: StringFilter<"TaskSession"> | string
    startedAt?: DateTimeFilter<"TaskSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"TaskSession"> | Date | string | null
    duration?: IntNullableFilter<"TaskSession"> | number | null
    wasPaused?: BoolFilter<"TaskSession"> | boolean
    createdAt?: DateTimeFilter<"TaskSession"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type TaskSessionOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    wasPaused?: SortOrder
    createdAt?: SortOrder
    task?: TaskOrderByWithRelationInput
  }

  export type TaskSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskSessionWhereInput | TaskSessionWhereInput[]
    OR?: TaskSessionWhereInput[]
    NOT?: TaskSessionWhereInput | TaskSessionWhereInput[]
    taskId?: StringFilter<"TaskSession"> | string
    startedAt?: DateTimeFilter<"TaskSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"TaskSession"> | Date | string | null
    duration?: IntNullableFilter<"TaskSession"> | number | null
    wasPaused?: BoolFilter<"TaskSession"> | boolean
    createdAt?: DateTimeFilter<"TaskSession"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id">

  export type TaskSessionOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    wasPaused?: SortOrder
    createdAt?: SortOrder
    _count?: TaskSessionCountOrderByAggregateInput
    _avg?: TaskSessionAvgOrderByAggregateInput
    _max?: TaskSessionMaxOrderByAggregateInput
    _min?: TaskSessionMinOrderByAggregateInput
    _sum?: TaskSessionSumOrderByAggregateInput
  }

  export type TaskSessionScalarWhereWithAggregatesInput = {
    AND?: TaskSessionScalarWhereWithAggregatesInput | TaskSessionScalarWhereWithAggregatesInput[]
    OR?: TaskSessionScalarWhereWithAggregatesInput[]
    NOT?: TaskSessionScalarWhereWithAggregatesInput | TaskSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskSession"> | string
    taskId?: StringWithAggregatesFilter<"TaskSession"> | string
    startedAt?: DateTimeWithAggregatesFilter<"TaskSession"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"TaskSession"> | Date | string | null
    duration?: IntNullableWithAggregatesFilter<"TaskSession"> | number | null
    wasPaused?: BoolWithAggregatesFilter<"TaskSession"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TaskSession"> | Date | string
  }

  export type AvailabilityWhereInput = {
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    id?: StringFilter<"Availability"> | string
    dayOfWeek?: IntFilter<"Availability"> | number
    startTime?: StringFilter<"Availability"> | string
    endTime?: StringFilter<"Availability"> | string
    isAvailable?: BoolFilter<"Availability"> | boolean
    userId?: StringFilter<"Availability"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    dayOfWeek?: IntFilter<"Availability"> | number
    startTime?: StringFilter<"Availability"> | string
    endTime?: StringFilter<"Availability"> | string
    isAvailable?: BoolFilter<"Availability"> | boolean
    userId?: StringFilter<"Availability"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    userId?: SortOrder
    _count?: AvailabilityCountOrderByAggregateInput
    _avg?: AvailabilityAvgOrderByAggregateInput
    _max?: AvailabilityMaxOrderByAggregateInput
    _min?: AvailabilityMinOrderByAggregateInput
    _sum?: AvailabilitySumOrderByAggregateInput
  }

  export type AvailabilityScalarWhereWithAggregatesInput = {
    AND?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    OR?: AvailabilityScalarWhereWithAggregatesInput[]
    NOT?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Availability"> | string
    dayOfWeek?: IntWithAggregatesFilter<"Availability"> | number
    startTime?: StringWithAggregatesFilter<"Availability"> | string
    endTime?: StringWithAggregatesFilter<"Availability"> | string
    isAvailable?: BoolWithAggregatesFilter<"Availability"> | boolean
    userId?: StringWithAggregatesFilter<"Availability"> | string
  }

  export type SettingsWhereInput = {
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    id?: StringFilter<"Settings"> | string
    aiPrompt?: StringNullableFilter<"Settings"> | string | null
    workHoursPerDay?: IntFilter<"Settings"> | number
    breakMinutes?: IntFilter<"Settings"> | number
    focusSessionMinutes?: IntFilter<"Settings"> | number
    theme?: StringNullableFilter<"Settings"> | string | null
    userId?: StringFilter<"Settings"> | string
    createdAt?: DateTimeFilter<"Settings"> | Date | string
    updatedAt?: DateTimeFilter<"Settings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SettingsOrderByWithRelationInput = {
    id?: SortOrder
    aiPrompt?: SortOrderInput | SortOrder
    workHoursPerDay?: SortOrder
    breakMinutes?: SortOrder
    focusSessionMinutes?: SortOrder
    theme?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    aiPrompt?: StringNullableFilter<"Settings"> | string | null
    workHoursPerDay?: IntFilter<"Settings"> | number
    breakMinutes?: IntFilter<"Settings"> | number
    focusSessionMinutes?: IntFilter<"Settings"> | number
    theme?: StringNullableFilter<"Settings"> | string | null
    createdAt?: DateTimeFilter<"Settings"> | Date | string
    updatedAt?: DateTimeFilter<"Settings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type SettingsOrderByWithAggregationInput = {
    id?: SortOrder
    aiPrompt?: SortOrderInput | SortOrder
    workHoursPerDay?: SortOrder
    breakMinutes?: SortOrder
    focusSessionMinutes?: SortOrder
    theme?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SettingsCountOrderByAggregateInput
    _avg?: SettingsAvgOrderByAggregateInput
    _max?: SettingsMaxOrderByAggregateInput
    _min?: SettingsMinOrderByAggregateInput
    _sum?: SettingsSumOrderByAggregateInput
  }

  export type SettingsScalarWhereWithAggregatesInput = {
    AND?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    OR?: SettingsScalarWhereWithAggregatesInput[]
    NOT?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Settings"> | string
    aiPrompt?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    workHoursPerDay?: IntWithAggregatesFilter<"Settings"> | number
    breakMinutes?: IntWithAggregatesFilter<"Settings"> | number
    focusSessionMinutes?: IntWithAggregatesFilter<"Settings"> | number
    theme?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    userId?: StringWithAggregatesFilter<"Settings"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Settings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Settings"> | Date | string
  }

  export type AIContextWhereInput = {
    AND?: AIContextWhereInput | AIContextWhereInput[]
    OR?: AIContextWhereInput[]
    NOT?: AIContextWhereInput | AIContextWhereInput[]
    id?: StringFilter<"AIContext"> | string
    key?: StringFilter<"AIContext"> | string
    value?: JsonFilter<"AIContext">
    userId?: StringFilter<"AIContext"> | string
    createdAt?: DateTimeFilter<"AIContext"> | Date | string
    updatedAt?: DateTimeFilter<"AIContext"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AIContextOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AIContextWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_key?: AIContextUserIdKeyCompoundUniqueInput
    AND?: AIContextWhereInput | AIContextWhereInput[]
    OR?: AIContextWhereInput[]
    NOT?: AIContextWhereInput | AIContextWhereInput[]
    key?: StringFilter<"AIContext"> | string
    value?: JsonFilter<"AIContext">
    userId?: StringFilter<"AIContext"> | string
    createdAt?: DateTimeFilter<"AIContext"> | Date | string
    updatedAt?: DateTimeFilter<"AIContext"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_key">

  export type AIContextOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AIContextCountOrderByAggregateInput
    _max?: AIContextMaxOrderByAggregateInput
    _min?: AIContextMinOrderByAggregateInput
  }

  export type AIContextScalarWhereWithAggregatesInput = {
    AND?: AIContextScalarWhereWithAggregatesInput | AIContextScalarWhereWithAggregatesInput[]
    OR?: AIContextScalarWhereWithAggregatesInput[]
    NOT?: AIContextScalarWhereWithAggregatesInput | AIContextScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AIContext"> | string
    key?: StringWithAggregatesFilter<"AIContext"> | string
    value?: JsonWithAggregatesFilter<"AIContext">
    userId?: StringWithAggregatesFilter<"AIContext"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AIContext"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AIContext"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    timeBlocks?: TimeBlockCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    aiContexts?: AIContextCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    timeBlocks?: TimeBlockUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    aiContexts?: AIContextUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    timeBlocks?: TimeBlockUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    aiContexts?: AIContextUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    timeBlocks?: TimeBlockUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    aiContexts?: AIContextUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateInput = {
    id?: string
    title: string
    description?: string | null
    targetDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGoalsInput
    tasks?: TaskCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    targetDate?: Date | string | null
    isActive?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
    tasks?: TaskUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    targetDate?: Date | string | null
    isActive?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    estimatedMinutes: number
    completedMinutes?: number
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTasksInput
    goal?: GoalCreateNestedOneWithoutTasksInput
    timeBlocks?: TimeBlockCreateNestedManyWithoutTaskInput
    sessions?: TaskSessionCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    estimatedMinutes: number
    completedMinutes?: number
    order?: number | null
    userId: string
    goalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    timeBlocks?: TimeBlockUncheckedCreateNestedManyWithoutTaskInput
    sessions?: TaskSessionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    estimatedMinutes?: IntFieldUpdateOperationsInput | number
    completedMinutes?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    goal?: GoalUpdateOneWithoutTasksNestedInput
    timeBlocks?: TimeBlockUpdateManyWithoutTaskNestedInput
    sessions?: TaskSessionUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    estimatedMinutes?: IntFieldUpdateOperationsInput | number
    completedMinutes?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeBlocks?: TimeBlockUncheckedUpdateManyWithoutTaskNestedInput
    sessions?: TaskSessionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    estimatedMinutes: number
    completedMinutes?: number
    order?: number | null
    userId: string
    goalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    estimatedMinutes?: IntFieldUpdateOperationsInput | number
    completedMinutes?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    estimatedMinutes?: IntFieldUpdateOperationsInput | number
    completedMinutes?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineCreateInput = {
    id?: string
    title: string
    description?: string | null
    frequency: $Enums.RoutineFrequency
    dayOfWeek?: number | null
    startTime: string
    endTime: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRoutinesInput
  }

  export type RoutineUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    frequency: $Enums.RoutineFrequency
    dayOfWeek?: number | null
    startTime: string
    endTime: string
    isActive?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoutineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: EnumRoutineFrequencyFieldUpdateOperationsInput | $Enums.RoutineFrequency
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoutinesNestedInput
  }

  export type RoutineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: EnumRoutineFrequencyFieldUpdateOperationsInput | $Enums.RoutineFrequency
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    frequency: $Enums.RoutineFrequency
    dayOfWeek?: number | null
    startTime: string
    endTime: string
    isActive?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoutineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: EnumRoutineFrequencyFieldUpdateOperationsInput | $Enums.RoutineFrequency
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: EnumRoutineFrequencyFieldUpdateOperationsInput | $Enums.RoutineFrequency
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeBlockCreateInput = {
    id?: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    type: $Enums.TimeBlockType
    title: string
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTimeBlocksInput
    task?: TaskCreateNestedOneWithoutTimeBlocksInput
  }

  export type TimeBlockUncheckedCreateInput = {
    id?: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    type: $Enums.TimeBlockType
    title: string
    completed?: boolean
    userId: string
    taskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeBlockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTimeBlockTypeFieldUpdateOperationsInput | $Enums.TimeBlockType
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimeBlocksNestedInput
    task?: TaskUpdateOneWithoutTimeBlocksNestedInput
  }

  export type TimeBlockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTimeBlockTypeFieldUpdateOperationsInput | $Enums.TimeBlockType
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeBlockCreateManyInput = {
    id?: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    type: $Enums.TimeBlockType
    title: string
    completed?: boolean
    userId: string
    taskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeBlockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTimeBlockTypeFieldUpdateOperationsInput | $Enums.TimeBlockType
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeBlockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTimeBlockTypeFieldUpdateOperationsInput | $Enums.TimeBlockType
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskSessionCreateInput = {
    id?: string
    startedAt: Date | string
    endedAt?: Date | string | null
    duration?: number | null
    wasPaused?: boolean
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutSessionsInput
  }

  export type TaskSessionUncheckedCreateInput = {
    id?: string
    taskId: string
    startedAt: Date | string
    endedAt?: Date | string | null
    duration?: number | null
    wasPaused?: boolean
    createdAt?: Date | string
  }

  export type TaskSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    wasPaused?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type TaskSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    wasPaused?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskSessionCreateManyInput = {
    id?: string
    taskId: string
    startedAt: Date | string
    endedAt?: Date | string | null
    duration?: number | null
    wasPaused?: boolean
    createdAt?: Date | string
  }

  export type TaskSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    wasPaused?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    wasPaused?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityCreateInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isAvailable?: boolean
    user: UserCreateNestedOneWithoutAvailabilityInput
  }

  export type AvailabilityUncheckedCreateInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isAvailable?: boolean
    userId: string
  }

  export type AvailabilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutAvailabilityNestedInput
  }

  export type AvailabilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AvailabilityCreateManyInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isAvailable?: boolean
    userId: string
  }

  export type AvailabilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvailabilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SettingsCreateInput = {
    id?: string
    aiPrompt?: string | null
    workHoursPerDay?: number
    breakMinutes?: number
    focusSessionMinutes?: number
    theme?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSettingsInput
  }

  export type SettingsUncheckedCreateInput = {
    id?: string
    aiPrompt?: string | null
    workHoursPerDay?: number
    breakMinutes?: number
    focusSessionMinutes?: number
    theme?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    workHoursPerDay?: IntFieldUpdateOperationsInput | number
    breakMinutes?: IntFieldUpdateOperationsInput | number
    focusSessionMinutes?: IntFieldUpdateOperationsInput | number
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type SettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    workHoursPerDay?: IntFieldUpdateOperationsInput | number
    breakMinutes?: IntFieldUpdateOperationsInput | number
    focusSessionMinutes?: IntFieldUpdateOperationsInput | number
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsCreateManyInput = {
    id?: string
    aiPrompt?: string | null
    workHoursPerDay?: number
    breakMinutes?: number
    focusSessionMinutes?: number
    theme?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    workHoursPerDay?: IntFieldUpdateOperationsInput | number
    breakMinutes?: IntFieldUpdateOperationsInput | number
    focusSessionMinutes?: IntFieldUpdateOperationsInput | number
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    workHoursPerDay?: IntFieldUpdateOperationsInput | number
    breakMinutes?: IntFieldUpdateOperationsInput | number
    focusSessionMinutes?: IntFieldUpdateOperationsInput | number
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIContextCreateInput = {
    id?: string
    key: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAiContextsInput
  }

  export type AIContextUncheckedCreateInput = {
    id?: string
    key: string
    value: JsonNullValueInput | InputJsonValue
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIContextUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAiContextsNestedInput
  }

  export type AIContextUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIContextCreateManyInput = {
    id?: string
    key: string
    value: JsonNullValueInput | InputJsonValue
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIContextUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIContextUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type GoalListRelationFilter = {
    every?: GoalWhereInput
    some?: GoalWhereInput
    none?: GoalWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type RoutineListRelationFilter = {
    every?: RoutineWhereInput
    some?: RoutineWhereInput
    none?: RoutineWhereInput
  }

  export type TimeBlockListRelationFilter = {
    every?: TimeBlockWhereInput
    some?: TimeBlockWhereInput
    none?: TimeBlockWhereInput
  }

  export type AvailabilityListRelationFilter = {
    every?: AvailabilityWhereInput
    some?: AvailabilityWhereInput
    none?: AvailabilityWhereInput
  }

  export type AIContextListRelationFilter = {
    every?: AIContextWhereInput
    some?: AIContextWhereInput
    none?: AIContextWhereInput
  }

  export type SettingsNullableScalarRelationFilter = {
    is?: SettingsWhereInput | null
    isNot?: SettingsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoutineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimeBlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AIContextOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GoalCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    targetDate?: SortOrder
    isActive?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    targetDate?: SortOrder
    isActive?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    targetDate?: SortOrder
    isActive?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type GoalNullableScalarRelationFilter = {
    is?: GoalWhereInput | null
    isNot?: GoalWhereInput | null
  }

  export type TaskSessionListRelationFilter = {
    every?: TaskSessionWhereInput
    some?: TaskSessionWhereInput
    none?: TaskSessionWhereInput
  }

  export type TaskSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    estimatedMinutes?: SortOrder
    completedMinutes?: SortOrder
    order?: SortOrder
    userId?: SortOrder
    goalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    estimatedMinutes?: SortOrder
    completedMinutes?: SortOrder
    order?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    estimatedMinutes?: SortOrder
    completedMinutes?: SortOrder
    order?: SortOrder
    userId?: SortOrder
    goalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    estimatedMinutes?: SortOrder
    completedMinutes?: SortOrder
    order?: SortOrder
    userId?: SortOrder
    goalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    estimatedMinutes?: SortOrder
    completedMinutes?: SortOrder
    order?: SortOrder
  }

  export type EnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TaskPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskPriorityFilter<$PrismaModel>
    _max?: NestedEnumTaskPriorityFilter<$PrismaModel>
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumRoutineFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.RoutineFrequency | EnumRoutineFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.RoutineFrequency[] | ListEnumRoutineFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoutineFrequency[] | ListEnumRoutineFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumRoutineFrequencyFilter<$PrismaModel> | $Enums.RoutineFrequency
  }

  export type RoutineCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    frequency?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoutineAvgOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type RoutineMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    frequency?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoutineMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    frequency?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoutineSumOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type EnumRoutineFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoutineFrequency | EnumRoutineFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.RoutineFrequency[] | ListEnumRoutineFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoutineFrequency[] | ListEnumRoutineFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumRoutineFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.RoutineFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoutineFrequencyFilter<$PrismaModel>
    _max?: NestedEnumRoutineFrequencyFilter<$PrismaModel>
  }

  export type EnumTimeBlockTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeBlockType | EnumTimeBlockTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TimeBlockType[] | ListEnumTimeBlockTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeBlockType[] | ListEnumTimeBlockTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeBlockTypeFilter<$PrismaModel> | $Enums.TimeBlockType
  }

  export type TaskNullableScalarRelationFilter = {
    is?: TaskWhereInput | null
    isNot?: TaskWhereInput | null
  }

  export type TimeBlockCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    type?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimeBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    type?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimeBlockMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    type?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTimeBlockTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeBlockType | EnumTimeBlockTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TimeBlockType[] | ListEnumTimeBlockTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeBlockType[] | ListEnumTimeBlockTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeBlockTypeWithAggregatesFilter<$PrismaModel> | $Enums.TimeBlockType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimeBlockTypeFilter<$PrismaModel>
    _max?: NestedEnumTimeBlockTypeFilter<$PrismaModel>
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type TaskSessionCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    duration?: SortOrder
    wasPaused?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskSessionAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type TaskSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    duration?: SortOrder
    wasPaused?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskSessionMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    duration?: SortOrder
    wasPaused?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskSessionSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type AvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    userId?: SortOrder
  }

  export type AvailabilityAvgOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type AvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    userId?: SortOrder
  }

  export type AvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    userId?: SortOrder
  }

  export type AvailabilitySumOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type SettingsCountOrderByAggregateInput = {
    id?: SortOrder
    aiPrompt?: SortOrder
    workHoursPerDay?: SortOrder
    breakMinutes?: SortOrder
    focusSessionMinutes?: SortOrder
    theme?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsAvgOrderByAggregateInput = {
    workHoursPerDay?: SortOrder
    breakMinutes?: SortOrder
    focusSessionMinutes?: SortOrder
  }

  export type SettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    aiPrompt?: SortOrder
    workHoursPerDay?: SortOrder
    breakMinutes?: SortOrder
    focusSessionMinutes?: SortOrder
    theme?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsMinOrderByAggregateInput = {
    id?: SortOrder
    aiPrompt?: SortOrder
    workHoursPerDay?: SortOrder
    breakMinutes?: SortOrder
    focusSessionMinutes?: SortOrder
    theme?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsSumOrderByAggregateInput = {
    workHoursPerDay?: SortOrder
    breakMinutes?: SortOrder
    focusSessionMinutes?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AIContextUserIdKeyCompoundUniqueInput = {
    userId: string
    key: string
  }

  export type AIContextCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIContextMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIContextMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type GoalCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type RoutineCreateNestedManyWithoutUserInput = {
    create?: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput> | RoutineCreateWithoutUserInput[] | RoutineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutUserInput | RoutineCreateOrConnectWithoutUserInput[]
    createMany?: RoutineCreateManyUserInputEnvelope
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
  }

  export type TimeBlockCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeBlockCreateWithoutUserInput, TimeBlockUncheckedCreateWithoutUserInput> | TimeBlockCreateWithoutUserInput[] | TimeBlockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeBlockCreateOrConnectWithoutUserInput | TimeBlockCreateOrConnectWithoutUserInput[]
    createMany?: TimeBlockCreateManyUserInputEnvelope
    connect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
  }

  export type AvailabilityCreateNestedManyWithoutUserInput = {
    create?: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput> | AvailabilityCreateWithoutUserInput[] | AvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutUserInput | AvailabilityCreateOrConnectWithoutUserInput[]
    createMany?: AvailabilityCreateManyUserInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type AIContextCreateNestedManyWithoutUserInput = {
    create?: XOR<AIContextCreateWithoutUserInput, AIContextUncheckedCreateWithoutUserInput> | AIContextCreateWithoutUserInput[] | AIContextUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIContextCreateOrConnectWithoutUserInput | AIContextCreateOrConnectWithoutUserInput[]
    createMany?: AIContextCreateManyUserInputEnvelope
    connect?: AIContextWhereUniqueInput | AIContextWhereUniqueInput[]
  }

  export type SettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutUserInput
    connect?: SettingsWhereUniqueInput
  }

  export type GoalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type RoutineUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput> | RoutineCreateWithoutUserInput[] | RoutineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutUserInput | RoutineCreateOrConnectWithoutUserInput[]
    createMany?: RoutineCreateManyUserInputEnvelope
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
  }

  export type TimeBlockUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeBlockCreateWithoutUserInput, TimeBlockUncheckedCreateWithoutUserInput> | TimeBlockCreateWithoutUserInput[] | TimeBlockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeBlockCreateOrConnectWithoutUserInput | TimeBlockCreateOrConnectWithoutUserInput[]
    createMany?: TimeBlockCreateManyUserInputEnvelope
    connect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
  }

  export type AvailabilityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput> | AvailabilityCreateWithoutUserInput[] | AvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutUserInput | AvailabilityCreateOrConnectWithoutUserInput[]
    createMany?: AvailabilityCreateManyUserInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type AIContextUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AIContextCreateWithoutUserInput, AIContextUncheckedCreateWithoutUserInput> | AIContextCreateWithoutUserInput[] | AIContextUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIContextCreateOrConnectWithoutUserInput | AIContextCreateOrConnectWithoutUserInput[]
    createMany?: AIContextCreateManyUserInputEnvelope
    connect?: AIContextWhereUniqueInput | AIContextWhereUniqueInput[]
  }

  export type SettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutUserInput
    connect?: SettingsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GoalUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type RoutineUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput> | RoutineCreateWithoutUserInput[] | RoutineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutUserInput | RoutineCreateOrConnectWithoutUserInput[]
    upsert?: RoutineUpsertWithWhereUniqueWithoutUserInput | RoutineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoutineCreateManyUserInputEnvelope
    set?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    disconnect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    delete?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    update?: RoutineUpdateWithWhereUniqueWithoutUserInput | RoutineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoutineUpdateManyWithWhereWithoutUserInput | RoutineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
  }

  export type TimeBlockUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeBlockCreateWithoutUserInput, TimeBlockUncheckedCreateWithoutUserInput> | TimeBlockCreateWithoutUserInput[] | TimeBlockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeBlockCreateOrConnectWithoutUserInput | TimeBlockCreateOrConnectWithoutUserInput[]
    upsert?: TimeBlockUpsertWithWhereUniqueWithoutUserInput | TimeBlockUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeBlockCreateManyUserInputEnvelope
    set?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    disconnect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    delete?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    connect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    update?: TimeBlockUpdateWithWhereUniqueWithoutUserInput | TimeBlockUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeBlockUpdateManyWithWhereWithoutUserInput | TimeBlockUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeBlockScalarWhereInput | TimeBlockScalarWhereInput[]
  }

  export type AvailabilityUpdateManyWithoutUserNestedInput = {
    create?: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput> | AvailabilityCreateWithoutUserInput[] | AvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutUserInput | AvailabilityCreateOrConnectWithoutUserInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutUserInput | AvailabilityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AvailabilityCreateManyUserInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutUserInput | AvailabilityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutUserInput | AvailabilityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type AIContextUpdateManyWithoutUserNestedInput = {
    create?: XOR<AIContextCreateWithoutUserInput, AIContextUncheckedCreateWithoutUserInput> | AIContextCreateWithoutUserInput[] | AIContextUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIContextCreateOrConnectWithoutUserInput | AIContextCreateOrConnectWithoutUserInput[]
    upsert?: AIContextUpsertWithWhereUniqueWithoutUserInput | AIContextUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AIContextCreateManyUserInputEnvelope
    set?: AIContextWhereUniqueInput | AIContextWhereUniqueInput[]
    disconnect?: AIContextWhereUniqueInput | AIContextWhereUniqueInput[]
    delete?: AIContextWhereUniqueInput | AIContextWhereUniqueInput[]
    connect?: AIContextWhereUniqueInput | AIContextWhereUniqueInput[]
    update?: AIContextUpdateWithWhereUniqueWithoutUserInput | AIContextUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AIContextUpdateManyWithWhereWithoutUserInput | AIContextUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AIContextScalarWhereInput | AIContextScalarWhereInput[]
  }

  export type SettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutUserInput
    upsert?: SettingsUpsertWithoutUserInput
    disconnect?: SettingsWhereInput | boolean
    delete?: SettingsWhereInput | boolean
    connect?: SettingsWhereUniqueInput
    update?: XOR<XOR<SettingsUpdateToOneWithWhereWithoutUserInput, SettingsUpdateWithoutUserInput>, SettingsUncheckedUpdateWithoutUserInput>
  }

  export type GoalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type RoutineUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput> | RoutineCreateWithoutUserInput[] | RoutineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutUserInput | RoutineCreateOrConnectWithoutUserInput[]
    upsert?: RoutineUpsertWithWhereUniqueWithoutUserInput | RoutineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoutineCreateManyUserInputEnvelope
    set?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    disconnect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    delete?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    update?: RoutineUpdateWithWhereUniqueWithoutUserInput | RoutineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoutineUpdateManyWithWhereWithoutUserInput | RoutineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
  }

  export type TimeBlockUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeBlockCreateWithoutUserInput, TimeBlockUncheckedCreateWithoutUserInput> | TimeBlockCreateWithoutUserInput[] | TimeBlockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeBlockCreateOrConnectWithoutUserInput | TimeBlockCreateOrConnectWithoutUserInput[]
    upsert?: TimeBlockUpsertWithWhereUniqueWithoutUserInput | TimeBlockUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeBlockCreateManyUserInputEnvelope
    set?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    disconnect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    delete?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    connect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    update?: TimeBlockUpdateWithWhereUniqueWithoutUserInput | TimeBlockUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeBlockUpdateManyWithWhereWithoutUserInput | TimeBlockUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeBlockScalarWhereInput | TimeBlockScalarWhereInput[]
  }

  export type AvailabilityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput> | AvailabilityCreateWithoutUserInput[] | AvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutUserInput | AvailabilityCreateOrConnectWithoutUserInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutUserInput | AvailabilityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AvailabilityCreateManyUserInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutUserInput | AvailabilityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutUserInput | AvailabilityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type AIContextUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AIContextCreateWithoutUserInput, AIContextUncheckedCreateWithoutUserInput> | AIContextCreateWithoutUserInput[] | AIContextUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIContextCreateOrConnectWithoutUserInput | AIContextCreateOrConnectWithoutUserInput[]
    upsert?: AIContextUpsertWithWhereUniqueWithoutUserInput | AIContextUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AIContextCreateManyUserInputEnvelope
    set?: AIContextWhereUniqueInput | AIContextWhereUniqueInput[]
    disconnect?: AIContextWhereUniqueInput | AIContextWhereUniqueInput[]
    delete?: AIContextWhereUniqueInput | AIContextWhereUniqueInput[]
    connect?: AIContextWhereUniqueInput | AIContextWhereUniqueInput[]
    update?: AIContextUpdateWithWhereUniqueWithoutUserInput | AIContextUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AIContextUpdateManyWithWhereWithoutUserInput | AIContextUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AIContextScalarWhereInput | AIContextScalarWhereInput[]
  }

  export type SettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutUserInput
    upsert?: SettingsUpsertWithoutUserInput
    disconnect?: SettingsWhereInput | boolean
    delete?: SettingsWhereInput | boolean
    connect?: SettingsWhereUniqueInput
    update?: XOR<XOR<SettingsUpdateToOneWithWhereWithoutUserInput, SettingsUpdateWithoutUserInput>, SettingsUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutGoalsInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutGoalInput = {
    create?: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput> | TaskCreateWithoutGoalInput[] | TaskUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGoalInput | TaskCreateOrConnectWithoutGoalInput[]
    createMany?: TaskCreateManyGoalInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutGoalInput = {
    create?: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput> | TaskCreateWithoutGoalInput[] | TaskUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGoalInput | TaskCreateOrConnectWithoutGoalInput[]
    createMany?: TaskCreateManyGoalInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    upsert?: UserUpsertWithoutGoalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGoalsInput, UserUpdateWithoutGoalsInput>, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type TaskUpdateManyWithoutGoalNestedInput = {
    create?: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput> | TaskCreateWithoutGoalInput[] | TaskUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGoalInput | TaskCreateOrConnectWithoutGoalInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutGoalInput | TaskUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: TaskCreateManyGoalInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutGoalInput | TaskUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutGoalInput | TaskUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutGoalNestedInput = {
    create?: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput> | TaskCreateWithoutGoalInput[] | TaskUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGoalInput | TaskCreateOrConnectWithoutGoalInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutGoalInput | TaskUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: TaskCreateManyGoalInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutGoalInput | TaskUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutGoalInput | TaskUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type GoalCreateNestedOneWithoutTasksInput = {
    create?: XOR<GoalCreateWithoutTasksInput, GoalUncheckedCreateWithoutTasksInput>
    connectOrCreate?: GoalCreateOrConnectWithoutTasksInput
    connect?: GoalWhereUniqueInput
  }

  export type TimeBlockCreateNestedManyWithoutTaskInput = {
    create?: XOR<TimeBlockCreateWithoutTaskInput, TimeBlockUncheckedCreateWithoutTaskInput> | TimeBlockCreateWithoutTaskInput[] | TimeBlockUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TimeBlockCreateOrConnectWithoutTaskInput | TimeBlockCreateOrConnectWithoutTaskInput[]
    createMany?: TimeBlockCreateManyTaskInputEnvelope
    connect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
  }

  export type TaskSessionCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskSessionCreateWithoutTaskInput, TaskSessionUncheckedCreateWithoutTaskInput> | TaskSessionCreateWithoutTaskInput[] | TaskSessionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskSessionCreateOrConnectWithoutTaskInput | TaskSessionCreateOrConnectWithoutTaskInput[]
    createMany?: TaskSessionCreateManyTaskInputEnvelope
    connect?: TaskSessionWhereUniqueInput | TaskSessionWhereUniqueInput[]
  }

  export type TimeBlockUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TimeBlockCreateWithoutTaskInput, TimeBlockUncheckedCreateWithoutTaskInput> | TimeBlockCreateWithoutTaskInput[] | TimeBlockUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TimeBlockCreateOrConnectWithoutTaskInput | TimeBlockCreateOrConnectWithoutTaskInput[]
    createMany?: TimeBlockCreateManyTaskInputEnvelope
    connect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
  }

  export type TaskSessionUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskSessionCreateWithoutTaskInput, TaskSessionUncheckedCreateWithoutTaskInput> | TaskSessionCreateWithoutTaskInput[] | TaskSessionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskSessionCreateOrConnectWithoutTaskInput | TaskSessionCreateOrConnectWithoutTaskInput[]
    createMany?: TaskSessionCreateManyTaskInputEnvelope
    connect?: TaskSessionWhereUniqueInput | TaskSessionWhereUniqueInput[]
  }

  export type EnumTaskPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TaskPriority
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type GoalUpdateOneWithoutTasksNestedInput = {
    create?: XOR<GoalCreateWithoutTasksInput, GoalUncheckedCreateWithoutTasksInput>
    connectOrCreate?: GoalCreateOrConnectWithoutTasksInput
    upsert?: GoalUpsertWithoutTasksInput
    disconnect?: GoalWhereInput | boolean
    delete?: GoalWhereInput | boolean
    connect?: GoalWhereUniqueInput
    update?: XOR<XOR<GoalUpdateToOneWithWhereWithoutTasksInput, GoalUpdateWithoutTasksInput>, GoalUncheckedUpdateWithoutTasksInput>
  }

  export type TimeBlockUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TimeBlockCreateWithoutTaskInput, TimeBlockUncheckedCreateWithoutTaskInput> | TimeBlockCreateWithoutTaskInput[] | TimeBlockUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TimeBlockCreateOrConnectWithoutTaskInput | TimeBlockCreateOrConnectWithoutTaskInput[]
    upsert?: TimeBlockUpsertWithWhereUniqueWithoutTaskInput | TimeBlockUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TimeBlockCreateManyTaskInputEnvelope
    set?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    disconnect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    delete?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    connect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    update?: TimeBlockUpdateWithWhereUniqueWithoutTaskInput | TimeBlockUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TimeBlockUpdateManyWithWhereWithoutTaskInput | TimeBlockUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TimeBlockScalarWhereInput | TimeBlockScalarWhereInput[]
  }

  export type TaskSessionUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskSessionCreateWithoutTaskInput, TaskSessionUncheckedCreateWithoutTaskInput> | TaskSessionCreateWithoutTaskInput[] | TaskSessionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskSessionCreateOrConnectWithoutTaskInput | TaskSessionCreateOrConnectWithoutTaskInput[]
    upsert?: TaskSessionUpsertWithWhereUniqueWithoutTaskInput | TaskSessionUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskSessionCreateManyTaskInputEnvelope
    set?: TaskSessionWhereUniqueInput | TaskSessionWhereUniqueInput[]
    disconnect?: TaskSessionWhereUniqueInput | TaskSessionWhereUniqueInput[]
    delete?: TaskSessionWhereUniqueInput | TaskSessionWhereUniqueInput[]
    connect?: TaskSessionWhereUniqueInput | TaskSessionWhereUniqueInput[]
    update?: TaskSessionUpdateWithWhereUniqueWithoutTaskInput | TaskSessionUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskSessionUpdateManyWithWhereWithoutTaskInput | TaskSessionUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskSessionScalarWhereInput | TaskSessionScalarWhereInput[]
  }

  export type TimeBlockUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TimeBlockCreateWithoutTaskInput, TimeBlockUncheckedCreateWithoutTaskInput> | TimeBlockCreateWithoutTaskInput[] | TimeBlockUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TimeBlockCreateOrConnectWithoutTaskInput | TimeBlockCreateOrConnectWithoutTaskInput[]
    upsert?: TimeBlockUpsertWithWhereUniqueWithoutTaskInput | TimeBlockUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TimeBlockCreateManyTaskInputEnvelope
    set?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    disconnect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    delete?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    connect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    update?: TimeBlockUpdateWithWhereUniqueWithoutTaskInput | TimeBlockUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TimeBlockUpdateManyWithWhereWithoutTaskInput | TimeBlockUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TimeBlockScalarWhereInput | TimeBlockScalarWhereInput[]
  }

  export type TaskSessionUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskSessionCreateWithoutTaskInput, TaskSessionUncheckedCreateWithoutTaskInput> | TaskSessionCreateWithoutTaskInput[] | TaskSessionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskSessionCreateOrConnectWithoutTaskInput | TaskSessionCreateOrConnectWithoutTaskInput[]
    upsert?: TaskSessionUpsertWithWhereUniqueWithoutTaskInput | TaskSessionUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskSessionCreateManyTaskInputEnvelope
    set?: TaskSessionWhereUniqueInput | TaskSessionWhereUniqueInput[]
    disconnect?: TaskSessionWhereUniqueInput | TaskSessionWhereUniqueInput[]
    delete?: TaskSessionWhereUniqueInput | TaskSessionWhereUniqueInput[]
    connect?: TaskSessionWhereUniqueInput | TaskSessionWhereUniqueInput[]
    update?: TaskSessionUpdateWithWhereUniqueWithoutTaskInput | TaskSessionUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskSessionUpdateManyWithWhereWithoutTaskInput | TaskSessionUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskSessionScalarWhereInput | TaskSessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRoutinesInput = {
    create?: XOR<UserCreateWithoutRoutinesInput, UserUncheckedCreateWithoutRoutinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoutinesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRoutineFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.RoutineFrequency
  }

  export type UserUpdateOneRequiredWithoutRoutinesNestedInput = {
    create?: XOR<UserCreateWithoutRoutinesInput, UserUncheckedCreateWithoutRoutinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoutinesInput
    upsert?: UserUpsertWithoutRoutinesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoutinesInput, UserUpdateWithoutRoutinesInput>, UserUncheckedUpdateWithoutRoutinesInput>
  }

  export type UserCreateNestedOneWithoutTimeBlocksInput = {
    create?: XOR<UserCreateWithoutTimeBlocksInput, UserUncheckedCreateWithoutTimeBlocksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeBlocksInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutTimeBlocksInput = {
    create?: XOR<TaskCreateWithoutTimeBlocksInput, TaskUncheckedCreateWithoutTimeBlocksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutTimeBlocksInput
    connect?: TaskWhereUniqueInput
  }

  export type EnumTimeBlockTypeFieldUpdateOperationsInput = {
    set?: $Enums.TimeBlockType
  }

  export type UserUpdateOneRequiredWithoutTimeBlocksNestedInput = {
    create?: XOR<UserCreateWithoutTimeBlocksInput, UserUncheckedCreateWithoutTimeBlocksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeBlocksInput
    upsert?: UserUpsertWithoutTimeBlocksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTimeBlocksInput, UserUpdateWithoutTimeBlocksInput>, UserUncheckedUpdateWithoutTimeBlocksInput>
  }

  export type TaskUpdateOneWithoutTimeBlocksNestedInput = {
    create?: XOR<TaskCreateWithoutTimeBlocksInput, TaskUncheckedCreateWithoutTimeBlocksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutTimeBlocksInput
    upsert?: TaskUpsertWithoutTimeBlocksInput
    disconnect?: TaskWhereInput | boolean
    delete?: TaskWhereInput | boolean
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutTimeBlocksInput, TaskUpdateWithoutTimeBlocksInput>, TaskUncheckedUpdateWithoutTimeBlocksInput>
  }

  export type TaskCreateNestedOneWithoutSessionsInput = {
    create?: XOR<TaskCreateWithoutSessionsInput, TaskUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSessionsInput
    connect?: TaskWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<TaskCreateWithoutSessionsInput, TaskUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSessionsInput
    upsert?: TaskUpsertWithoutSessionsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutSessionsInput, TaskUpdateWithoutSessionsInput>, TaskUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAvailabilityInput = {
    create?: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvailabilityInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAvailabilityNestedInput = {
    create?: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvailabilityInput
    upsert?: UserUpsertWithoutAvailabilityInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAvailabilityInput, UserUpdateWithoutAvailabilityInput>, UserUncheckedUpdateWithoutAvailabilityInput>
  }

  export type UserCreateNestedOneWithoutSettingsInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    upsert?: UserUpsertWithoutSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettingsInput, UserUpdateWithoutSettingsInput>, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserCreateNestedOneWithoutAiContextsInput = {
    create?: XOR<UserCreateWithoutAiContextsInput, UserUncheckedCreateWithoutAiContextsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiContextsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAiContextsNestedInput = {
    create?: XOR<UserCreateWithoutAiContextsInput, UserUncheckedCreateWithoutAiContextsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiContextsInput
    upsert?: UserUpsertWithoutAiContextsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAiContextsInput, UserUpdateWithoutAiContextsInput>, UserUncheckedUpdateWithoutAiContextsInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TaskPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskPriorityFilter<$PrismaModel>
    _max?: NestedEnumTaskPriorityFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoutineFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.RoutineFrequency | EnumRoutineFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.RoutineFrequency[] | ListEnumRoutineFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoutineFrequency[] | ListEnumRoutineFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumRoutineFrequencyFilter<$PrismaModel> | $Enums.RoutineFrequency
  }

  export type NestedEnumRoutineFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoutineFrequency | EnumRoutineFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.RoutineFrequency[] | ListEnumRoutineFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoutineFrequency[] | ListEnumRoutineFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumRoutineFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.RoutineFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoutineFrequencyFilter<$PrismaModel>
    _max?: NestedEnumRoutineFrequencyFilter<$PrismaModel>
  }

  export type NestedEnumTimeBlockTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeBlockType | EnumTimeBlockTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TimeBlockType[] | ListEnumTimeBlockTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeBlockType[] | ListEnumTimeBlockTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeBlockTypeFilter<$PrismaModel> | $Enums.TimeBlockType
  }

  export type NestedEnumTimeBlockTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeBlockType | EnumTimeBlockTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TimeBlockType[] | ListEnumTimeBlockTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeBlockType[] | ListEnumTimeBlockTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeBlockTypeWithAggregatesFilter<$PrismaModel> | $Enums.TimeBlockType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimeBlockTypeFilter<$PrismaModel>
    _max?: NestedEnumTimeBlockTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type GoalCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    targetDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    targetDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalCreateOrConnectWithoutUserInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalCreateManyUserInputEnvelope = {
    data: GoalCreateManyUserInput | GoalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    estimatedMinutes: number
    completedMinutes?: number
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goal?: GoalCreateNestedOneWithoutTasksInput
    timeBlocks?: TimeBlockCreateNestedManyWithoutTaskInput
    sessions?: TaskSessionCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    estimatedMinutes: number
    completedMinutes?: number
    order?: number | null
    goalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    timeBlocks?: TimeBlockUncheckedCreateNestedManyWithoutTaskInput
    sessions?: TaskSessionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutUserInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskCreateManyUserInputEnvelope = {
    data: TaskCreateManyUserInput | TaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoutineCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    frequency: $Enums.RoutineFrequency
    dayOfWeek?: number | null
    startTime: string
    endTime: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoutineUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    frequency: $Enums.RoutineFrequency
    dayOfWeek?: number | null
    startTime: string
    endTime: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoutineCreateOrConnectWithoutUserInput = {
    where: RoutineWhereUniqueInput
    create: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput>
  }

  export type RoutineCreateManyUserInputEnvelope = {
    data: RoutineCreateManyUserInput | RoutineCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TimeBlockCreateWithoutUserInput = {
    id?: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    type: $Enums.TimeBlockType
    title: string
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    task?: TaskCreateNestedOneWithoutTimeBlocksInput
  }

  export type TimeBlockUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    type: $Enums.TimeBlockType
    title: string
    completed?: boolean
    taskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeBlockCreateOrConnectWithoutUserInput = {
    where: TimeBlockWhereUniqueInput
    create: XOR<TimeBlockCreateWithoutUserInput, TimeBlockUncheckedCreateWithoutUserInput>
  }

  export type TimeBlockCreateManyUserInputEnvelope = {
    data: TimeBlockCreateManyUserInput | TimeBlockCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AvailabilityCreateWithoutUserInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isAvailable?: boolean
  }

  export type AvailabilityUncheckedCreateWithoutUserInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isAvailable?: boolean
  }

  export type AvailabilityCreateOrConnectWithoutUserInput = {
    where: AvailabilityWhereUniqueInput
    create: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput>
  }

  export type AvailabilityCreateManyUserInputEnvelope = {
    data: AvailabilityCreateManyUserInput | AvailabilityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AIContextCreateWithoutUserInput = {
    id?: string
    key: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIContextUncheckedCreateWithoutUserInput = {
    id?: string
    key: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIContextCreateOrConnectWithoutUserInput = {
    where: AIContextWhereUniqueInput
    create: XOR<AIContextCreateWithoutUserInput, AIContextUncheckedCreateWithoutUserInput>
  }

  export type AIContextCreateManyUserInputEnvelope = {
    data: AIContextCreateManyUserInput | AIContextCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SettingsCreateWithoutUserInput = {
    id?: string
    aiPrompt?: string | null
    workHoursPerDay?: number
    breakMinutes?: number
    focusSessionMinutes?: number
    theme?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettingsUncheckedCreateWithoutUserInput = {
    id?: string
    aiPrompt?: string | null
    workHoursPerDay?: number
    breakMinutes?: number
    focusSessionMinutes?: number
    theme?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettingsCreateOrConnectWithoutUserInput = {
    where: SettingsWhereUniqueInput
    create: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
  }

  export type GoalUpsertWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    update: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalUpdateWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    data: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
  }

  export type GoalUpdateManyWithWhereWithoutUserInput = {
    where: GoalScalarWhereInput
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyWithoutUserInput>
  }

  export type GoalScalarWhereInput = {
    AND?: GoalScalarWhereInput | GoalScalarWhereInput[]
    OR?: GoalScalarWhereInput[]
    NOT?: GoalScalarWhereInput | GoalScalarWhereInput[]
    id?: StringFilter<"Goal"> | string
    title?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    targetDate?: DateTimeNullableFilter<"Goal"> | Date | string | null
    isActive?: BoolFilter<"Goal"> | boolean
    userId?: StringFilter<"Goal"> | string
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
  }

  export type TaskUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
  }

  export type TaskUpdateManyWithWhereWithoutUserInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    estimatedMinutes?: IntFilter<"Task"> | number
    completedMinutes?: IntFilter<"Task"> | number
    order?: IntNullableFilter<"Task"> | number | null
    userId?: StringFilter<"Task"> | string
    goalId?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type RoutineUpsertWithWhereUniqueWithoutUserInput = {
    where: RoutineWhereUniqueInput
    update: XOR<RoutineUpdateWithoutUserInput, RoutineUncheckedUpdateWithoutUserInput>
    create: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput>
  }

  export type RoutineUpdateWithWhereUniqueWithoutUserInput = {
    where: RoutineWhereUniqueInput
    data: XOR<RoutineUpdateWithoutUserInput, RoutineUncheckedUpdateWithoutUserInput>
  }

  export type RoutineUpdateManyWithWhereWithoutUserInput = {
    where: RoutineScalarWhereInput
    data: XOR<RoutineUpdateManyMutationInput, RoutineUncheckedUpdateManyWithoutUserInput>
  }

  export type RoutineScalarWhereInput = {
    AND?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
    OR?: RoutineScalarWhereInput[]
    NOT?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
    id?: StringFilter<"Routine"> | string
    title?: StringFilter<"Routine"> | string
    description?: StringNullableFilter<"Routine"> | string | null
    frequency?: EnumRoutineFrequencyFilter<"Routine"> | $Enums.RoutineFrequency
    dayOfWeek?: IntNullableFilter<"Routine"> | number | null
    startTime?: StringFilter<"Routine"> | string
    endTime?: StringFilter<"Routine"> | string
    isActive?: BoolFilter<"Routine"> | boolean
    userId?: StringFilter<"Routine"> | string
    createdAt?: DateTimeFilter<"Routine"> | Date | string
    updatedAt?: DateTimeFilter<"Routine"> | Date | string
  }

  export type TimeBlockUpsertWithWhereUniqueWithoutUserInput = {
    where: TimeBlockWhereUniqueInput
    update: XOR<TimeBlockUpdateWithoutUserInput, TimeBlockUncheckedUpdateWithoutUserInput>
    create: XOR<TimeBlockCreateWithoutUserInput, TimeBlockUncheckedCreateWithoutUserInput>
  }

  export type TimeBlockUpdateWithWhereUniqueWithoutUserInput = {
    where: TimeBlockWhereUniqueInput
    data: XOR<TimeBlockUpdateWithoutUserInput, TimeBlockUncheckedUpdateWithoutUserInput>
  }

  export type TimeBlockUpdateManyWithWhereWithoutUserInput = {
    where: TimeBlockScalarWhereInput
    data: XOR<TimeBlockUpdateManyMutationInput, TimeBlockUncheckedUpdateManyWithoutUserInput>
  }

  export type TimeBlockScalarWhereInput = {
    AND?: TimeBlockScalarWhereInput | TimeBlockScalarWhereInput[]
    OR?: TimeBlockScalarWhereInput[]
    NOT?: TimeBlockScalarWhereInput | TimeBlockScalarWhereInput[]
    id?: StringFilter<"TimeBlock"> | string
    date?: DateTimeFilter<"TimeBlock"> | Date | string
    startTime?: DateTimeFilter<"TimeBlock"> | Date | string
    endTime?: DateTimeFilter<"TimeBlock"> | Date | string
    type?: EnumTimeBlockTypeFilter<"TimeBlock"> | $Enums.TimeBlockType
    title?: StringFilter<"TimeBlock"> | string
    completed?: BoolFilter<"TimeBlock"> | boolean
    userId?: StringFilter<"TimeBlock"> | string
    taskId?: StringNullableFilter<"TimeBlock"> | string | null
    createdAt?: DateTimeFilter<"TimeBlock"> | Date | string
    updatedAt?: DateTimeFilter<"TimeBlock"> | Date | string
  }

  export type AvailabilityUpsertWithWhereUniqueWithoutUserInput = {
    where: AvailabilityWhereUniqueInput
    update: XOR<AvailabilityUpdateWithoutUserInput, AvailabilityUncheckedUpdateWithoutUserInput>
    create: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput>
  }

  export type AvailabilityUpdateWithWhereUniqueWithoutUserInput = {
    where: AvailabilityWhereUniqueInput
    data: XOR<AvailabilityUpdateWithoutUserInput, AvailabilityUncheckedUpdateWithoutUserInput>
  }

  export type AvailabilityUpdateManyWithWhereWithoutUserInput = {
    where: AvailabilityScalarWhereInput
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyWithoutUserInput>
  }

  export type AvailabilityScalarWhereInput = {
    AND?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    OR?: AvailabilityScalarWhereInput[]
    NOT?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    id?: StringFilter<"Availability"> | string
    dayOfWeek?: IntFilter<"Availability"> | number
    startTime?: StringFilter<"Availability"> | string
    endTime?: StringFilter<"Availability"> | string
    isAvailable?: BoolFilter<"Availability"> | boolean
    userId?: StringFilter<"Availability"> | string
  }

  export type AIContextUpsertWithWhereUniqueWithoutUserInput = {
    where: AIContextWhereUniqueInput
    update: XOR<AIContextUpdateWithoutUserInput, AIContextUncheckedUpdateWithoutUserInput>
    create: XOR<AIContextCreateWithoutUserInput, AIContextUncheckedCreateWithoutUserInput>
  }

  export type AIContextUpdateWithWhereUniqueWithoutUserInput = {
    where: AIContextWhereUniqueInput
    data: XOR<AIContextUpdateWithoutUserInput, AIContextUncheckedUpdateWithoutUserInput>
  }

  export type AIContextUpdateManyWithWhereWithoutUserInput = {
    where: AIContextScalarWhereInput
    data: XOR<AIContextUpdateManyMutationInput, AIContextUncheckedUpdateManyWithoutUserInput>
  }

  export type AIContextScalarWhereInput = {
    AND?: AIContextScalarWhereInput | AIContextScalarWhereInput[]
    OR?: AIContextScalarWhereInput[]
    NOT?: AIContextScalarWhereInput | AIContextScalarWhereInput[]
    id?: StringFilter<"AIContext"> | string
    key?: StringFilter<"AIContext"> | string
    value?: JsonFilter<"AIContext">
    userId?: StringFilter<"AIContext"> | string
    createdAt?: DateTimeFilter<"AIContext"> | Date | string
    updatedAt?: DateTimeFilter<"AIContext"> | Date | string
  }

  export type SettingsUpsertWithoutUserInput = {
    update: XOR<SettingsUpdateWithoutUserInput, SettingsUncheckedUpdateWithoutUserInput>
    create: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
    where?: SettingsWhereInput
  }

  export type SettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: SettingsWhereInput
    data: XOR<SettingsUpdateWithoutUserInput, SettingsUncheckedUpdateWithoutUserInput>
  }

  export type SettingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    workHoursPerDay?: IntFieldUpdateOperationsInput | number
    breakMinutes?: IntFieldUpdateOperationsInput | number
    focusSessionMinutes?: IntFieldUpdateOperationsInput | number
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    workHoursPerDay?: IntFieldUpdateOperationsInput | number
    breakMinutes?: IntFieldUpdateOperationsInput | number
    focusSessionMinutes?: IntFieldUpdateOperationsInput | number
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutGoalsInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    timeBlocks?: TimeBlockCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    aiContexts?: AIContextCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGoalsInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    timeBlocks?: TimeBlockUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    aiContexts?: AIContextUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGoalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
  }

  export type TaskCreateWithoutGoalInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    estimatedMinutes: number
    completedMinutes?: number
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTasksInput
    timeBlocks?: TimeBlockCreateNestedManyWithoutTaskInput
    sessions?: TaskSessionCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutGoalInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    estimatedMinutes: number
    completedMinutes?: number
    order?: number | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timeBlocks?: TimeBlockUncheckedCreateNestedManyWithoutTaskInput
    sessions?: TaskSessionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutGoalInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput>
  }

  export type TaskCreateManyGoalInputEnvelope = {
    data: TaskCreateManyGoalInput | TaskCreateManyGoalInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGoalsInput = {
    update: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGoalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type UserUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    timeBlocks?: TimeBlockUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    aiContexts?: AIContextUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    timeBlocks?: TimeBlockUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    aiContexts?: AIContextUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutGoalInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutGoalInput, TaskUncheckedUpdateWithoutGoalInput>
    create: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutGoalInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutGoalInput, TaskUncheckedUpdateWithoutGoalInput>
  }

  export type TaskUpdateManyWithWhereWithoutGoalInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutGoalInput>
  }

  export type UserCreateWithoutTasksInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    timeBlocks?: TimeBlockCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    aiContexts?: AIContextCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    timeBlocks?: TimeBlockUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    aiContexts?: AIContextUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type GoalCreateWithoutTasksInput = {
    id?: string
    title: string
    description?: string | null
    targetDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGoalsInput
  }

  export type GoalUncheckedCreateWithoutTasksInput = {
    id?: string
    title: string
    description?: string | null
    targetDate?: Date | string | null
    isActive?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalCreateOrConnectWithoutTasksInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutTasksInput, GoalUncheckedCreateWithoutTasksInput>
  }

  export type TimeBlockCreateWithoutTaskInput = {
    id?: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    type: $Enums.TimeBlockType
    title: string
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTimeBlocksInput
  }

  export type TimeBlockUncheckedCreateWithoutTaskInput = {
    id?: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    type: $Enums.TimeBlockType
    title: string
    completed?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeBlockCreateOrConnectWithoutTaskInput = {
    where: TimeBlockWhereUniqueInput
    create: XOR<TimeBlockCreateWithoutTaskInput, TimeBlockUncheckedCreateWithoutTaskInput>
  }

  export type TimeBlockCreateManyTaskInputEnvelope = {
    data: TimeBlockCreateManyTaskInput | TimeBlockCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type TaskSessionCreateWithoutTaskInput = {
    id?: string
    startedAt: Date | string
    endedAt?: Date | string | null
    duration?: number | null
    wasPaused?: boolean
    createdAt?: Date | string
  }

  export type TaskSessionUncheckedCreateWithoutTaskInput = {
    id?: string
    startedAt: Date | string
    endedAt?: Date | string | null
    duration?: number | null
    wasPaused?: boolean
    createdAt?: Date | string
  }

  export type TaskSessionCreateOrConnectWithoutTaskInput = {
    where: TaskSessionWhereUniqueInput
    create: XOR<TaskSessionCreateWithoutTaskInput, TaskSessionUncheckedCreateWithoutTaskInput>
  }

  export type TaskSessionCreateManyTaskInputEnvelope = {
    data: TaskSessionCreateManyTaskInput | TaskSessionCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    timeBlocks?: TimeBlockUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    aiContexts?: AIContextUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    timeBlocks?: TimeBlockUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    aiContexts?: AIContextUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type GoalUpsertWithoutTasksInput = {
    update: XOR<GoalUpdateWithoutTasksInput, GoalUncheckedUpdateWithoutTasksInput>
    create: XOR<GoalCreateWithoutTasksInput, GoalUncheckedCreateWithoutTasksInput>
    where?: GoalWhereInput
  }

  export type GoalUpdateToOneWithWhereWithoutTasksInput = {
    where?: GoalWhereInput
    data: XOR<GoalUpdateWithoutTasksInput, GoalUncheckedUpdateWithoutTasksInput>
  }

  export type GoalUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type GoalUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeBlockUpsertWithWhereUniqueWithoutTaskInput = {
    where: TimeBlockWhereUniqueInput
    update: XOR<TimeBlockUpdateWithoutTaskInput, TimeBlockUncheckedUpdateWithoutTaskInput>
    create: XOR<TimeBlockCreateWithoutTaskInput, TimeBlockUncheckedCreateWithoutTaskInput>
  }

  export type TimeBlockUpdateWithWhereUniqueWithoutTaskInput = {
    where: TimeBlockWhereUniqueInput
    data: XOR<TimeBlockUpdateWithoutTaskInput, TimeBlockUncheckedUpdateWithoutTaskInput>
  }

  export type TimeBlockUpdateManyWithWhereWithoutTaskInput = {
    where: TimeBlockScalarWhereInput
    data: XOR<TimeBlockUpdateManyMutationInput, TimeBlockUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskSessionUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskSessionWhereUniqueInput
    update: XOR<TaskSessionUpdateWithoutTaskInput, TaskSessionUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskSessionCreateWithoutTaskInput, TaskSessionUncheckedCreateWithoutTaskInput>
  }

  export type TaskSessionUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskSessionWhereUniqueInput
    data: XOR<TaskSessionUpdateWithoutTaskInput, TaskSessionUncheckedUpdateWithoutTaskInput>
  }

  export type TaskSessionUpdateManyWithWhereWithoutTaskInput = {
    where: TaskSessionScalarWhereInput
    data: XOR<TaskSessionUpdateManyMutationInput, TaskSessionUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskSessionScalarWhereInput = {
    AND?: TaskSessionScalarWhereInput | TaskSessionScalarWhereInput[]
    OR?: TaskSessionScalarWhereInput[]
    NOT?: TaskSessionScalarWhereInput | TaskSessionScalarWhereInput[]
    id?: StringFilter<"TaskSession"> | string
    taskId?: StringFilter<"TaskSession"> | string
    startedAt?: DateTimeFilter<"TaskSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"TaskSession"> | Date | string | null
    duration?: IntNullableFilter<"TaskSession"> | number | null
    wasPaused?: BoolFilter<"TaskSession"> | boolean
    createdAt?: DateTimeFilter<"TaskSession"> | Date | string
  }

  export type UserCreateWithoutRoutinesInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    timeBlocks?: TimeBlockCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    aiContexts?: AIContextCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoutinesInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    timeBlocks?: TimeBlockUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    aiContexts?: AIContextUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoutinesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoutinesInput, UserUncheckedCreateWithoutRoutinesInput>
  }

  export type UserUpsertWithoutRoutinesInput = {
    update: XOR<UserUpdateWithoutRoutinesInput, UserUncheckedUpdateWithoutRoutinesInput>
    create: XOR<UserCreateWithoutRoutinesInput, UserUncheckedCreateWithoutRoutinesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoutinesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoutinesInput, UserUncheckedUpdateWithoutRoutinesInput>
  }

  export type UserUpdateWithoutRoutinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    timeBlocks?: TimeBlockUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    aiContexts?: AIContextUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoutinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    timeBlocks?: TimeBlockUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    aiContexts?: AIContextUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutTimeBlocksInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    aiContexts?: AIContextCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTimeBlocksInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    aiContexts?: AIContextUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTimeBlocksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTimeBlocksInput, UserUncheckedCreateWithoutTimeBlocksInput>
  }

  export type TaskCreateWithoutTimeBlocksInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    estimatedMinutes: number
    completedMinutes?: number
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTasksInput
    goal?: GoalCreateNestedOneWithoutTasksInput
    sessions?: TaskSessionCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutTimeBlocksInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    estimatedMinutes: number
    completedMinutes?: number
    order?: number | null
    userId: string
    goalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: TaskSessionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutTimeBlocksInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTimeBlocksInput, TaskUncheckedCreateWithoutTimeBlocksInput>
  }

  export type UserUpsertWithoutTimeBlocksInput = {
    update: XOR<UserUpdateWithoutTimeBlocksInput, UserUncheckedUpdateWithoutTimeBlocksInput>
    create: XOR<UserCreateWithoutTimeBlocksInput, UserUncheckedCreateWithoutTimeBlocksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTimeBlocksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTimeBlocksInput, UserUncheckedUpdateWithoutTimeBlocksInput>
  }

  export type UserUpdateWithoutTimeBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    aiContexts?: AIContextUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTimeBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    aiContexts?: AIContextUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TaskUpsertWithoutTimeBlocksInput = {
    update: XOR<TaskUpdateWithoutTimeBlocksInput, TaskUncheckedUpdateWithoutTimeBlocksInput>
    create: XOR<TaskCreateWithoutTimeBlocksInput, TaskUncheckedCreateWithoutTimeBlocksInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutTimeBlocksInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutTimeBlocksInput, TaskUncheckedUpdateWithoutTimeBlocksInput>
  }

  export type TaskUpdateWithoutTimeBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    estimatedMinutes?: IntFieldUpdateOperationsInput | number
    completedMinutes?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    goal?: GoalUpdateOneWithoutTasksNestedInput
    sessions?: TaskSessionUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutTimeBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    estimatedMinutes?: IntFieldUpdateOperationsInput | number
    completedMinutes?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: TaskSessionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateWithoutSessionsInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    estimatedMinutes: number
    completedMinutes?: number
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTasksInput
    goal?: GoalCreateNestedOneWithoutTasksInput
    timeBlocks?: TimeBlockCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutSessionsInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    estimatedMinutes: number
    completedMinutes?: number
    order?: number | null
    userId: string
    goalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    timeBlocks?: TimeBlockUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutSessionsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutSessionsInput, TaskUncheckedCreateWithoutSessionsInput>
  }

  export type TaskUpsertWithoutSessionsInput = {
    update: XOR<TaskUpdateWithoutSessionsInput, TaskUncheckedUpdateWithoutSessionsInput>
    create: XOR<TaskCreateWithoutSessionsInput, TaskUncheckedCreateWithoutSessionsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutSessionsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutSessionsInput, TaskUncheckedUpdateWithoutSessionsInput>
  }

  export type TaskUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    estimatedMinutes?: IntFieldUpdateOperationsInput | number
    completedMinutes?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    goal?: GoalUpdateOneWithoutTasksNestedInput
    timeBlocks?: TimeBlockUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    estimatedMinutes?: IntFieldUpdateOperationsInput | number
    completedMinutes?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeBlocks?: TimeBlockUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserCreateWithoutAvailabilityInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    timeBlocks?: TimeBlockCreateNestedManyWithoutUserInput
    aiContexts?: AIContextCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAvailabilityInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    timeBlocks?: TimeBlockUncheckedCreateNestedManyWithoutUserInput
    aiContexts?: AIContextUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAvailabilityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
  }

  export type UserUpsertWithoutAvailabilityInput = {
    update: XOR<UserUpdateWithoutAvailabilityInput, UserUncheckedUpdateWithoutAvailabilityInput>
    create: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAvailabilityInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAvailabilityInput, UserUncheckedUpdateWithoutAvailabilityInput>
  }

  export type UserUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    timeBlocks?: TimeBlockUpdateManyWithoutUserNestedInput
    aiContexts?: AIContextUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    timeBlocks?: TimeBlockUncheckedUpdateManyWithoutUserNestedInput
    aiContexts?: AIContextUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutSettingsInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    timeBlocks?: TimeBlockCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    aiContexts?: AIContextCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSettingsInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    timeBlocks?: TimeBlockUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    aiContexts?: AIContextUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
  }

  export type UserUpsertWithoutSettingsInput = {
    update: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    timeBlocks?: TimeBlockUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    aiContexts?: AIContextUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    timeBlocks?: TimeBlockUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    aiContexts?: AIContextUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAiContextsInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    timeBlocks?: TimeBlockCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAiContextsInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    timeBlocks?: TimeBlockUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAiContextsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAiContextsInput, UserUncheckedCreateWithoutAiContextsInput>
  }

  export type UserUpsertWithoutAiContextsInput = {
    update: XOR<UserUpdateWithoutAiContextsInput, UserUncheckedUpdateWithoutAiContextsInput>
    create: XOR<UserCreateWithoutAiContextsInput, UserUncheckedCreateWithoutAiContextsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAiContextsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAiContextsInput, UserUncheckedUpdateWithoutAiContextsInput>
  }

  export type UserUpdateWithoutAiContextsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    timeBlocks?: TimeBlockUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAiContextsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    timeBlocks?: TimeBlockUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type GoalCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    targetDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    estimatedMinutes: number
    completedMinutes?: number
    order?: number | null
    goalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoutineCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    frequency: $Enums.RoutineFrequency
    dayOfWeek?: number | null
    startTime: string
    endTime: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeBlockCreateManyUserInput = {
    id?: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    type: $Enums.TimeBlockType
    title: string
    completed?: boolean
    taskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityCreateManyUserInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isAvailable?: boolean
  }

  export type AIContextCreateManyUserInput = {
    id?: string
    key: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    estimatedMinutes?: IntFieldUpdateOperationsInput | number
    completedMinutes?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goal?: GoalUpdateOneWithoutTasksNestedInput
    timeBlocks?: TimeBlockUpdateManyWithoutTaskNestedInput
    sessions?: TaskSessionUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    estimatedMinutes?: IntFieldUpdateOperationsInput | number
    completedMinutes?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeBlocks?: TimeBlockUncheckedUpdateManyWithoutTaskNestedInput
    sessions?: TaskSessionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    estimatedMinutes?: IntFieldUpdateOperationsInput | number
    completedMinutes?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: EnumRoutineFrequencyFieldUpdateOperationsInput | $Enums.RoutineFrequency
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: EnumRoutineFrequencyFieldUpdateOperationsInput | $Enums.RoutineFrequency
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: EnumRoutineFrequencyFieldUpdateOperationsInput | $Enums.RoutineFrequency
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeBlockUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTimeBlockTypeFieldUpdateOperationsInput | $Enums.TimeBlockType
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneWithoutTimeBlocksNestedInput
  }

  export type TimeBlockUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTimeBlockTypeFieldUpdateOperationsInput | $Enums.TimeBlockType
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeBlockUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTimeBlockTypeFieldUpdateOperationsInput | $Enums.TimeBlockType
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvailabilityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvailabilityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AIContextUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIContextUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIContextUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyGoalInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    estimatedMinutes: number
    completedMinutes?: number
    order?: number | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    estimatedMinutes?: IntFieldUpdateOperationsInput | number
    completedMinutes?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    timeBlocks?: TimeBlockUpdateManyWithoutTaskNestedInput
    sessions?: TaskSessionUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    estimatedMinutes?: IntFieldUpdateOperationsInput | number
    completedMinutes?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeBlocks?: TimeBlockUncheckedUpdateManyWithoutTaskNestedInput
    sessions?: TaskSessionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    estimatedMinutes?: IntFieldUpdateOperationsInput | number
    completedMinutes?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeBlockCreateManyTaskInput = {
    id?: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    type: $Enums.TimeBlockType
    title: string
    completed?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskSessionCreateManyTaskInput = {
    id?: string
    startedAt: Date | string
    endedAt?: Date | string | null
    duration?: number | null
    wasPaused?: boolean
    createdAt?: Date | string
  }

  export type TimeBlockUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTimeBlockTypeFieldUpdateOperationsInput | $Enums.TimeBlockType
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimeBlocksNestedInput
  }

  export type TimeBlockUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTimeBlockTypeFieldUpdateOperationsInput | $Enums.TimeBlockType
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeBlockUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTimeBlockTypeFieldUpdateOperationsInput | $Enums.TimeBlockType
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskSessionUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    wasPaused?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskSessionUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    wasPaused?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskSessionUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    wasPaused?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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