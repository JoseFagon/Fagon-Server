
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Agency
 * 
 */
export type Agency = $Result.DefaultSelection<Prisma.$AgencyPayload>
/**
 * Model Engineer
 * 
 */
export type Engineer = $Result.DefaultSelection<Prisma.$EngineerPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model AccessKey
 * 
 */
export type AccessKey = $Result.DefaultSelection<Prisma.$AccessKeyPayload>
/**
 * Model Pavement
 * 
 */
export type Pavement = $Result.DefaultSelection<Prisma.$PavementPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model MaterialFinishing
 * 
 */
export type MaterialFinishing = $Result.DefaultSelection<Prisma.$MaterialFinishingPayload>
/**
 * Model Photo
 * 
 */
export type Photo = $Result.DefaultSelection<Prisma.$PhotoPayload>
/**
 * Model Pathology
 * 
 */
export type Pathology = $Result.DefaultSelection<Prisma.$PathologyPayload>
/**
 * Model PathologyPhoto
 * 
 */
export type PathologyPhoto = $Result.DefaultSelection<Prisma.$PathologyPhotoPayload>
/**
 * Model Pdf
 * 
 */
export type Pdf = $Result.DefaultSelection<Prisma.$PdfPayload>
/**
 * Model StateLaw
 * 
 */
export type StateLaw = $Result.DefaultSelection<Prisma.$StateLawPayload>
/**
 * Model Log
 * 
 */
export type Log = $Result.DefaultSelection<Prisma.$LogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  admin: 'admin',
  funcionario: 'funcionario',
  vistoriador: 'vistoriador'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ProjectType: {
  laudo_cmar: 'laudo_cmar'
};

export type ProjectType = (typeof ProjectType)[keyof typeof ProjectType]


export const ProjectStatus: {
  aguardando_vistoria: 'aguardando_vistoria',
  aguardando_geração_de_pdfs: 'aguardando_geração_de_pdfs',
  aguardando_assinatura_de_pdfs: 'aguardando_assinatura_de_pdfs',
  finalizado: 'finalizado',
  cancelado: 'cancelado'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const CameraType: {
  normal: 'normal',
  camera_360: 'camera_360'
};

export type CameraType = (typeof CameraType)[keyof typeof CameraType]


export const LocationType: {
  externo: 'externo',
  interno: 'interno'
};

export type LocationType = (typeof LocationType)[keyof typeof LocationType]


export const SurfaceType: {
  piso: 'piso',
  parede: 'parede',
  forro: 'forro'
};

export type SurfaceType = (typeof SurfaceType)[keyof typeof SurfaceType]


export const PdfType: {
  atestado: 'atestado',
  anexo_m3: 'anexo_m3',
  anexo_m4: 'anexo_m4',
  laudo_avaliacao: 'laudo_avaliacao',
  relatorio_fotografico: 'relatorio_fotografico'
};

export type PdfType = (typeof PdfType)[keyof typeof PdfType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ProjectType = $Enums.ProjectType

export const ProjectType: typeof $Enums.ProjectType

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type CameraType = $Enums.CameraType

export const CameraType: typeof $Enums.CameraType

export type LocationType = $Enums.LocationType

export const LocationType: typeof $Enums.LocationType

export type SurfaceType = $Enums.SurfaceType

export const SurfaceType: typeof $Enums.SurfaceType

export type PdfType = $Enums.PdfType

export const PdfType: typeof $Enums.PdfType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.agency`: Exposes CRUD operations for the **Agency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agencies
    * const agencies = await prisma.agency.findMany()
    * ```
    */
  get agency(): Prisma.AgencyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.engineer`: Exposes CRUD operations for the **Engineer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Engineers
    * const engineers = await prisma.engineer.findMany()
    * ```
    */
  get engineer(): Prisma.EngineerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accessKey`: Exposes CRUD operations for the **AccessKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccessKeys
    * const accessKeys = await prisma.accessKey.findMany()
    * ```
    */
  get accessKey(): Prisma.AccessKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pavement`: Exposes CRUD operations for the **Pavement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pavements
    * const pavements = await prisma.pavement.findMany()
    * ```
    */
  get pavement(): Prisma.PavementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materialFinishing`: Exposes CRUD operations for the **MaterialFinishing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaterialFinishings
    * const materialFinishings = await prisma.materialFinishing.findMany()
    * ```
    */
  get materialFinishing(): Prisma.MaterialFinishingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photo`: Exposes CRUD operations for the **Photo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photo.findMany()
    * ```
    */
  get photo(): Prisma.PhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pathology`: Exposes CRUD operations for the **Pathology** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pathologies
    * const pathologies = await prisma.pathology.findMany()
    * ```
    */
  get pathology(): Prisma.PathologyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pathologyPhoto`: Exposes CRUD operations for the **PathologyPhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PathologyPhotos
    * const pathologyPhotos = await prisma.pathologyPhoto.findMany()
    * ```
    */
  get pathologyPhoto(): Prisma.PathologyPhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pdf`: Exposes CRUD operations for the **Pdf** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pdfs
    * const pdfs = await prisma.pdf.findMany()
    * ```
    */
  get pdf(): Prisma.PdfDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stateLaw`: Exposes CRUD operations for the **StateLaw** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StateLaws
    * const stateLaws = await prisma.stateLaw.findMany()
    * ```
    */
  get stateLaw(): Prisma.StateLawDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log`: Exposes CRUD operations for the **Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.LogDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Agency: 'Agency',
    Engineer: 'Engineer',
    Project: 'Project',
    AccessKey: 'AccessKey',
    Pavement: 'Pavement',
    Location: 'Location',
    MaterialFinishing: 'MaterialFinishing',
    Photo: 'Photo',
    Pathology: 'Pathology',
    PathologyPhoto: 'PathologyPhoto',
    Pdf: 'Pdf',
    StateLaw: 'StateLaw',
    Log: 'Log'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "agency" | "engineer" | "project" | "accessKey" | "pavement" | "location" | "materialFinishing" | "photo" | "pathology" | "pathologyPhoto" | "pdf" | "stateLaw" | "log"
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
      Agency: {
        payload: Prisma.$AgencyPayload<ExtArgs>
        fields: Prisma.AgencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          findFirst: {
            args: Prisma.AgencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          findMany: {
            args: Prisma.AgencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>[]
          }
          create: {
            args: Prisma.AgencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          createMany: {
            args: Prisma.AgencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgencyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>[]
          }
          delete: {
            args: Prisma.AgencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          update: {
            args: Prisma.AgencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          deleteMany: {
            args: Prisma.AgencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgencyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>[]
          }
          upsert: {
            args: Prisma.AgencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          aggregate: {
            args: Prisma.AgencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgency>
          }
          groupBy: {
            args: Prisma.AgencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgencyCountArgs<ExtArgs>
            result: $Utils.Optional<AgencyCountAggregateOutputType> | number
          }
        }
      }
      Engineer: {
        payload: Prisma.$EngineerPayload<ExtArgs>
        fields: Prisma.EngineerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EngineerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EngineerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>
          }
          findFirst: {
            args: Prisma.EngineerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EngineerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>
          }
          findMany: {
            args: Prisma.EngineerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>[]
          }
          create: {
            args: Prisma.EngineerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>
          }
          createMany: {
            args: Prisma.EngineerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EngineerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>[]
          }
          delete: {
            args: Prisma.EngineerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>
          }
          update: {
            args: Prisma.EngineerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>
          }
          deleteMany: {
            args: Prisma.EngineerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EngineerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EngineerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>[]
          }
          upsert: {
            args: Prisma.EngineerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>
          }
          aggregate: {
            args: Prisma.EngineerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEngineer>
          }
          groupBy: {
            args: Prisma.EngineerGroupByArgs<ExtArgs>
            result: $Utils.Optional<EngineerGroupByOutputType>[]
          }
          count: {
            args: Prisma.EngineerCountArgs<ExtArgs>
            result: $Utils.Optional<EngineerCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      AccessKey: {
        payload: Prisma.$AccessKeyPayload<ExtArgs>
        fields: Prisma.AccessKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccessKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccessKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessKeyPayload>
          }
          findFirst: {
            args: Prisma.AccessKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccessKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessKeyPayload>
          }
          findMany: {
            args: Prisma.AccessKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessKeyPayload>[]
          }
          create: {
            args: Prisma.AccessKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessKeyPayload>
          }
          createMany: {
            args: Prisma.AccessKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccessKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessKeyPayload>[]
          }
          delete: {
            args: Prisma.AccessKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessKeyPayload>
          }
          update: {
            args: Prisma.AccessKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessKeyPayload>
          }
          deleteMany: {
            args: Prisma.AccessKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccessKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccessKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessKeyPayload>[]
          }
          upsert: {
            args: Prisma.AccessKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessKeyPayload>
          }
          aggregate: {
            args: Prisma.AccessKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccessKey>
          }
          groupBy: {
            args: Prisma.AccessKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccessKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccessKeyCountArgs<ExtArgs>
            result: $Utils.Optional<AccessKeyCountAggregateOutputType> | number
          }
        }
      }
      Pavement: {
        payload: Prisma.$PavementPayload<ExtArgs>
        fields: Prisma.PavementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PavementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PavementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PavementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PavementPayload>
          }
          findFirst: {
            args: Prisma.PavementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PavementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PavementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PavementPayload>
          }
          findMany: {
            args: Prisma.PavementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PavementPayload>[]
          }
          create: {
            args: Prisma.PavementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PavementPayload>
          }
          createMany: {
            args: Prisma.PavementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PavementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PavementPayload>[]
          }
          delete: {
            args: Prisma.PavementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PavementPayload>
          }
          update: {
            args: Prisma.PavementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PavementPayload>
          }
          deleteMany: {
            args: Prisma.PavementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PavementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PavementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PavementPayload>[]
          }
          upsert: {
            args: Prisma.PavementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PavementPayload>
          }
          aggregate: {
            args: Prisma.PavementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePavement>
          }
          groupBy: {
            args: Prisma.PavementGroupByArgs<ExtArgs>
            result: $Utils.Optional<PavementGroupByOutputType>[]
          }
          count: {
            args: Prisma.PavementCountArgs<ExtArgs>
            result: $Utils.Optional<PavementCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      MaterialFinishing: {
        payload: Prisma.$MaterialFinishingPayload<ExtArgs>
        fields: Prisma.MaterialFinishingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialFinishingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialFinishingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialFinishingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialFinishingPayload>
          }
          findFirst: {
            args: Prisma.MaterialFinishingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialFinishingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialFinishingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialFinishingPayload>
          }
          findMany: {
            args: Prisma.MaterialFinishingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialFinishingPayload>[]
          }
          create: {
            args: Prisma.MaterialFinishingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialFinishingPayload>
          }
          createMany: {
            args: Prisma.MaterialFinishingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialFinishingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialFinishingPayload>[]
          }
          delete: {
            args: Prisma.MaterialFinishingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialFinishingPayload>
          }
          update: {
            args: Prisma.MaterialFinishingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialFinishingPayload>
          }
          deleteMany: {
            args: Prisma.MaterialFinishingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialFinishingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaterialFinishingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialFinishingPayload>[]
          }
          upsert: {
            args: Prisma.MaterialFinishingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialFinishingPayload>
          }
          aggregate: {
            args: Prisma.MaterialFinishingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterialFinishing>
          }
          groupBy: {
            args: Prisma.MaterialFinishingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialFinishingGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialFinishingCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialFinishingCountAggregateOutputType> | number
          }
        }
      }
      Photo: {
        payload: Prisma.$PhotoPayload<ExtArgs>
        fields: Prisma.PhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findFirst: {
            args: Prisma.PhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findMany: {
            args: Prisma.PhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          create: {
            args: Prisma.PhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          createMany: {
            args: Prisma.PhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          delete: {
            args: Prisma.PhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          update: {
            args: Prisma.PhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          deleteMany: {
            args: Prisma.PhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          upsert: {
            args: Prisma.PhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          aggregate: {
            args: Prisma.PhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoto>
          }
          groupBy: {
            args: Prisma.PhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoCountAggregateOutputType> | number
          }
        }
      }
      Pathology: {
        payload: Prisma.$PathologyPayload<ExtArgs>
        fields: Prisma.PathologyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PathologyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathologyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PathologyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathologyPayload>
          }
          findFirst: {
            args: Prisma.PathologyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathologyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PathologyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathologyPayload>
          }
          findMany: {
            args: Prisma.PathologyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathologyPayload>[]
          }
          create: {
            args: Prisma.PathologyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathologyPayload>
          }
          createMany: {
            args: Prisma.PathologyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PathologyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathologyPayload>[]
          }
          delete: {
            args: Prisma.PathologyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathologyPayload>
          }
          update: {
            args: Prisma.PathologyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathologyPayload>
          }
          deleteMany: {
            args: Prisma.PathologyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PathologyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PathologyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathologyPayload>[]
          }
          upsert: {
            args: Prisma.PathologyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathologyPayload>
          }
          aggregate: {
            args: Prisma.PathologyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePathology>
          }
          groupBy: {
            args: Prisma.PathologyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PathologyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PathologyCountArgs<ExtArgs>
            result: $Utils.Optional<PathologyCountAggregateOutputType> | number
          }
        }
      }
      PathologyPhoto: {
        payload: Prisma.$PathologyPhotoPayload<ExtArgs>
        fields: Prisma.PathologyPhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PathologyPhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathologyPhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PathologyPhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathologyPhotoPayload>
          }
          findFirst: {
            args: Prisma.PathologyPhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathologyPhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PathologyPhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathologyPhotoPayload>
          }
          findMany: {
            args: Prisma.PathologyPhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathologyPhotoPayload>[]
          }
          create: {
            args: Prisma.PathologyPhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathologyPhotoPayload>
          }
          createMany: {
            args: Prisma.PathologyPhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PathologyPhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathologyPhotoPayload>[]
          }
          delete: {
            args: Prisma.PathologyPhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathologyPhotoPayload>
          }
          update: {
            args: Prisma.PathologyPhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathologyPhotoPayload>
          }
          deleteMany: {
            args: Prisma.PathologyPhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PathologyPhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PathologyPhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathologyPhotoPayload>[]
          }
          upsert: {
            args: Prisma.PathologyPhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathologyPhotoPayload>
          }
          aggregate: {
            args: Prisma.PathologyPhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePathologyPhoto>
          }
          groupBy: {
            args: Prisma.PathologyPhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PathologyPhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PathologyPhotoCountArgs<ExtArgs>
            result: $Utils.Optional<PathologyPhotoCountAggregateOutputType> | number
          }
        }
      }
      Pdf: {
        payload: Prisma.$PdfPayload<ExtArgs>
        fields: Prisma.PdfFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PdfFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PdfPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PdfFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PdfPayload>
          }
          findFirst: {
            args: Prisma.PdfFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PdfPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PdfFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PdfPayload>
          }
          findMany: {
            args: Prisma.PdfFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PdfPayload>[]
          }
          create: {
            args: Prisma.PdfCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PdfPayload>
          }
          createMany: {
            args: Prisma.PdfCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PdfCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PdfPayload>[]
          }
          delete: {
            args: Prisma.PdfDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PdfPayload>
          }
          update: {
            args: Prisma.PdfUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PdfPayload>
          }
          deleteMany: {
            args: Prisma.PdfDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PdfUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PdfUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PdfPayload>[]
          }
          upsert: {
            args: Prisma.PdfUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PdfPayload>
          }
          aggregate: {
            args: Prisma.PdfAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePdf>
          }
          groupBy: {
            args: Prisma.PdfGroupByArgs<ExtArgs>
            result: $Utils.Optional<PdfGroupByOutputType>[]
          }
          count: {
            args: Prisma.PdfCountArgs<ExtArgs>
            result: $Utils.Optional<PdfCountAggregateOutputType> | number
          }
        }
      }
      StateLaw: {
        payload: Prisma.$StateLawPayload<ExtArgs>
        fields: Prisma.StateLawFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StateLawFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateLawPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StateLawFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateLawPayload>
          }
          findFirst: {
            args: Prisma.StateLawFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateLawPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StateLawFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateLawPayload>
          }
          findMany: {
            args: Prisma.StateLawFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateLawPayload>[]
          }
          create: {
            args: Prisma.StateLawCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateLawPayload>
          }
          createMany: {
            args: Prisma.StateLawCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StateLawCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateLawPayload>[]
          }
          delete: {
            args: Prisma.StateLawDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateLawPayload>
          }
          update: {
            args: Prisma.StateLawUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateLawPayload>
          }
          deleteMany: {
            args: Prisma.StateLawDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StateLawUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StateLawUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateLawPayload>[]
          }
          upsert: {
            args: Prisma.StateLawUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StateLawPayload>
          }
          aggregate: {
            args: Prisma.StateLawAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStateLaw>
          }
          groupBy: {
            args: Prisma.StateLawGroupByArgs<ExtArgs>
            result: $Utils.Optional<StateLawGroupByOutputType>[]
          }
          count: {
            args: Prisma.StateLawCountArgs<ExtArgs>
            result: $Utils.Optional<StateLawCountAggregateOutputType> | number
          }
        }
      }
      Log: {
        payload: Prisma.$LogPayload<ExtArgs>
        fields: Prisma.LogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findFirst: {
            args: Prisma.LogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findMany: {
            args: Prisma.LogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          create: {
            args: Prisma.LogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          createMany: {
            args: Prisma.LogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          delete: {
            args: Prisma.LogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          update: {
            args: Prisma.LogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          deleteMany: {
            args: Prisma.LogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          upsert: {
            args: Prisma.LogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.LogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogCountArgs<ExtArgs>
            result: $Utils.Optional<LogCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    agency?: AgencyOmit
    engineer?: EngineerOmit
    project?: ProjectOmit
    accessKey?: AccessKeyOmit
    pavement?: PavementOmit
    location?: LocationOmit
    materialFinishing?: MaterialFinishingOmit
    photo?: PhotoOmit
    pathology?: PathologyOmit
    pathologyPhoto?: PathologyPhotoOmit
    pdf?: PdfOmit
    stateLaw?: StateLawOmit
    log?: LogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    Log: number
    AccessKey: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Log?: boolean | UserCountOutputTypeCountLogArgs
    AccessKey?: boolean | UserCountOutputTypeCountAccessKeyArgs
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
  export type UserCountOutputTypeCountLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccessKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessKeyWhereInput
  }


  /**
   * Count Type AgencyCountOutputType
   */

  export type AgencyCountOutputType = {
    Project: number
  }

  export type AgencyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Project?: boolean | AgencyCountOutputTypeCountProjectArgs
  }

  // Custom InputTypes
  /**
   * AgencyCountOutputType without action
   */
  export type AgencyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyCountOutputType
     */
    select?: AgencyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgencyCountOutputType without action
   */
  export type AgencyCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type EngineerCountOutputType
   */

  export type EngineerCountOutputType = {
    Project: number
  }

  export type EngineerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Project?: boolean | EngineerCountOutputTypeCountProjectArgs
  }

  // Custom InputTypes
  /**
   * EngineerCountOutputType without action
   */
  export type EngineerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EngineerCountOutputType
     */
    select?: EngineerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EngineerCountOutputType without action
   */
  export type EngineerCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    AccessKey: number
    Pavement: number
    Location: number
    Pathology: number
    Pdf: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AccessKey?: boolean | ProjectCountOutputTypeCountAccessKeyArgs
    Pavement?: boolean | ProjectCountOutputTypeCountPavementArgs
    Location?: boolean | ProjectCountOutputTypeCountLocationArgs
    Pathology?: boolean | ProjectCountOutputTypeCountPathologyArgs
    Pdf?: boolean | ProjectCountOutputTypeCountPdfArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountAccessKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessKeyWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountPavementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PavementWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountLocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountPathologyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PathologyWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountPdfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PdfWhereInput
  }


  /**
   * Count Type PavementCountOutputType
   */

  export type PavementCountOutputType = {
    Location: number
  }

  export type PavementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Location?: boolean | PavementCountOutputTypeCountLocationArgs
  }

  // Custom InputTypes
  /**
   * PavementCountOutputType without action
   */
  export type PavementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PavementCountOutputType
     */
    select?: PavementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PavementCountOutputType without action
   */
  export type PavementCountOutputTypeCountLocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    MaterialFinishing: number
    Photo: number
    Pathology: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MaterialFinishing?: boolean | LocationCountOutputTypeCountMaterialFinishingArgs
    Photo?: boolean | LocationCountOutputTypeCountPhotoArgs
    Pathology?: boolean | LocationCountOutputTypeCountPathologyArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountMaterialFinishingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialFinishingWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountPhotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountPathologyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PathologyWhereInput
  }


  /**
   * Count Type PathologyCountOutputType
   */

  export type PathologyCountOutputType = {
    PathologyPhoto: number
  }

  export type PathologyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PathologyPhoto?: boolean | PathologyCountOutputTypeCountPathologyPhotoArgs
  }

  // Custom InputTypes
  /**
   * PathologyCountOutputType without action
   */
  export type PathologyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathologyCountOutputType
     */
    select?: PathologyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PathologyCountOutputType without action
   */
  export type PathologyCountOutputTypeCountPathologyPhotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PathologyPhotoWhereInput
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
    password: string | null
    role: $Enums.UserRole | null
    status: boolean | null
    cameraType: $Enums.CameraType | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    status: boolean | null
    cameraType: $Enums.CameraType | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    status: number
    cameraType: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    cameraType?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    cameraType?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    cameraType?: true
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
    email: string
    password: string | null
    role: $Enums.UserRole
    status: boolean
    cameraType: $Enums.CameraType | null
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
    password?: boolean
    role?: boolean
    status?: boolean
    cameraType?: boolean
    Log?: boolean | User$LogArgs<ExtArgs>
    AccessKey?: boolean | User$AccessKeyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    cameraType?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    cameraType?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    cameraType?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "status" | "cameraType", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Log?: boolean | User$LogArgs<ExtArgs>
    AccessKey?: boolean | User$AccessKeyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Log: Prisma.$LogPayload<ExtArgs>[]
      AccessKey: Prisma.$AccessKeyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string | null
      role: $Enums.UserRole
      status: boolean
      cameraType: $Enums.CameraType | null
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
    Log<T extends User$LogArgs<ExtArgs> = {}>(args?: Subset<T, User$LogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    AccessKey<T extends User$AccessKeyArgs<ExtArgs> = {}>(args?: Subset<T, User$AccessKeyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly status: FieldRef<"User", 'Boolean'>
    readonly cameraType: FieldRef<"User", 'CameraType'>
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
   * User.Log
   */
  export type User$LogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    where?: LogWhereInput
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    cursor?: LogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * User.AccessKey
   */
  export type User$AccessKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessKey
     */
    select?: AccessKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessKey
     */
    omit?: AccessKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessKeyInclude<ExtArgs> | null
    where?: AccessKeyWhereInput
    orderBy?: AccessKeyOrderByWithRelationInput | AccessKeyOrderByWithRelationInput[]
    cursor?: AccessKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccessKeyScalarFieldEnum | AccessKeyScalarFieldEnum[]
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
   * Model Agency
   */

  export type AggregateAgency = {
    _count: AgencyCountAggregateOutputType | null
    _avg: AgencyAvgAggregateOutputType | null
    _sum: AgencySumAggregateOutputType | null
    _min: AgencyMinAggregateOutputType | null
    _max: AgencyMaxAggregateOutputType | null
  }

  export type AgencyAvgAggregateOutputType = {
    agencyNumber: number | null
    number: number | null
  }

  export type AgencySumAggregateOutputType = {
    agencyNumber: number | null
    number: number | null
  }

  export type AgencyMinAggregateOutputType = {
    id: string | null
    name: string | null
    agencyNumber: number | null
    cnpj: string | null
    cep: string | null
    state: string | null
    city: string | null
    district: string | null
    street: string | null
    number: number | null
  }

  export type AgencyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    agencyNumber: number | null
    cnpj: string | null
    cep: string | null
    state: string | null
    city: string | null
    district: string | null
    street: string | null
    number: number | null
  }

  export type AgencyCountAggregateOutputType = {
    id: number
    name: number
    agencyNumber: number
    cnpj: number
    cep: number
    state: number
    city: number
    district: number
    street: number
    number: number
    _all: number
  }


  export type AgencyAvgAggregateInputType = {
    agencyNumber?: true
    number?: true
  }

  export type AgencySumAggregateInputType = {
    agencyNumber?: true
    number?: true
  }

  export type AgencyMinAggregateInputType = {
    id?: true
    name?: true
    agencyNumber?: true
    cnpj?: true
    cep?: true
    state?: true
    city?: true
    district?: true
    street?: true
    number?: true
  }

  export type AgencyMaxAggregateInputType = {
    id?: true
    name?: true
    agencyNumber?: true
    cnpj?: true
    cep?: true
    state?: true
    city?: true
    district?: true
    street?: true
    number?: true
  }

  export type AgencyCountAggregateInputType = {
    id?: true
    name?: true
    agencyNumber?: true
    cnpj?: true
    cep?: true
    state?: true
    city?: true
    district?: true
    street?: true
    number?: true
    _all?: true
  }

  export type AgencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agency to aggregate.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agencies
    **/
    _count?: true | AgencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgencyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgencySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgencyMaxAggregateInputType
  }

  export type GetAgencyAggregateType<T extends AgencyAggregateArgs> = {
        [P in keyof T & keyof AggregateAgency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgency[P]>
      : GetScalarType<T[P], AggregateAgency[P]>
  }




  export type AgencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgencyWhereInput
    orderBy?: AgencyOrderByWithAggregationInput | AgencyOrderByWithAggregationInput[]
    by: AgencyScalarFieldEnum[] | AgencyScalarFieldEnum
    having?: AgencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgencyCountAggregateInputType | true
    _avg?: AgencyAvgAggregateInputType
    _sum?: AgencySumAggregateInputType
    _min?: AgencyMinAggregateInputType
    _max?: AgencyMaxAggregateInputType
  }

  export type AgencyGroupByOutputType = {
    id: string
    name: string
    agencyNumber: number
    cnpj: string | null
    cep: string
    state: string
    city: string
    district: string
    street: string
    number: number
    _count: AgencyCountAggregateOutputType | null
    _avg: AgencyAvgAggregateOutputType | null
    _sum: AgencySumAggregateOutputType | null
    _min: AgencyMinAggregateOutputType | null
    _max: AgencyMaxAggregateOutputType | null
  }

  type GetAgencyGroupByPayload<T extends AgencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgencyGroupByOutputType[P]>
            : GetScalarType<T[P], AgencyGroupByOutputType[P]>
        }
      >
    >


  export type AgencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    agencyNumber?: boolean
    cnpj?: boolean
    cep?: boolean
    state?: boolean
    city?: boolean
    district?: boolean
    street?: boolean
    number?: boolean
    Project?: boolean | Agency$ProjectArgs<ExtArgs>
    _count?: boolean | AgencyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agency"]>

  export type AgencySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    agencyNumber?: boolean
    cnpj?: boolean
    cep?: boolean
    state?: boolean
    city?: boolean
    district?: boolean
    street?: boolean
    number?: boolean
  }, ExtArgs["result"]["agency"]>

  export type AgencySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    agencyNumber?: boolean
    cnpj?: boolean
    cep?: boolean
    state?: boolean
    city?: boolean
    district?: boolean
    street?: boolean
    number?: boolean
  }, ExtArgs["result"]["agency"]>

  export type AgencySelectScalar = {
    id?: boolean
    name?: boolean
    agencyNumber?: boolean
    cnpj?: boolean
    cep?: boolean
    state?: boolean
    city?: boolean
    district?: boolean
    street?: boolean
    number?: boolean
  }

  export type AgencyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "agencyNumber" | "cnpj" | "cep" | "state" | "city" | "district" | "street" | "number", ExtArgs["result"]["agency"]>
  export type AgencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Project?: boolean | Agency$ProjectArgs<ExtArgs>
    _count?: boolean | AgencyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgencyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AgencyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AgencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agency"
    objects: {
      Project: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      agencyNumber: number
      cnpj: string | null
      cep: string
      state: string
      city: string
      district: string
      street: string
      number: number
    }, ExtArgs["result"]["agency"]>
    composites: {}
  }

  type AgencyGetPayload<S extends boolean | null | undefined | AgencyDefaultArgs> = $Result.GetResult<Prisma.$AgencyPayload, S>

  type AgencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgencyCountAggregateInputType | true
    }

  export interface AgencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agency'], meta: { name: 'Agency' } }
    /**
     * Find zero or one Agency that matches the filter.
     * @param {AgencyFindUniqueArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgencyFindUniqueArgs>(args: SelectSubset<T, AgencyFindUniqueArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agency that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgencyFindUniqueOrThrowArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgencyFindUniqueOrThrowArgs>(args: SelectSubset<T, AgencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyFindFirstArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgencyFindFirstArgs>(args?: SelectSubset<T, AgencyFindFirstArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyFindFirstOrThrowArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgencyFindFirstOrThrowArgs>(args?: SelectSubset<T, AgencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agencies
     * const agencies = await prisma.agency.findMany()
     * 
     * // Get first 10 Agencies
     * const agencies = await prisma.agency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agencyWithIdOnly = await prisma.agency.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgencyFindManyArgs>(args?: SelectSubset<T, AgencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agency.
     * @param {AgencyCreateArgs} args - Arguments to create a Agency.
     * @example
     * // Create one Agency
     * const Agency = await prisma.agency.create({
     *   data: {
     *     // ... data to create a Agency
     *   }
     * })
     * 
     */
    create<T extends AgencyCreateArgs>(args: SelectSubset<T, AgencyCreateArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agencies.
     * @param {AgencyCreateManyArgs} args - Arguments to create many Agencies.
     * @example
     * // Create many Agencies
     * const agency = await prisma.agency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgencyCreateManyArgs>(args?: SelectSubset<T, AgencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agencies and returns the data saved in the database.
     * @param {AgencyCreateManyAndReturnArgs} args - Arguments to create many Agencies.
     * @example
     * // Create many Agencies
     * const agency = await prisma.agency.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agencies and only return the `id`
     * const agencyWithIdOnly = await prisma.agency.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgencyCreateManyAndReturnArgs>(args?: SelectSubset<T, AgencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agency.
     * @param {AgencyDeleteArgs} args - Arguments to delete one Agency.
     * @example
     * // Delete one Agency
     * const Agency = await prisma.agency.delete({
     *   where: {
     *     // ... filter to delete one Agency
     *   }
     * })
     * 
     */
    delete<T extends AgencyDeleteArgs>(args: SelectSubset<T, AgencyDeleteArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agency.
     * @param {AgencyUpdateArgs} args - Arguments to update one Agency.
     * @example
     * // Update one Agency
     * const agency = await prisma.agency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgencyUpdateArgs>(args: SelectSubset<T, AgencyUpdateArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agencies.
     * @param {AgencyDeleteManyArgs} args - Arguments to filter Agencies to delete.
     * @example
     * // Delete a few Agencies
     * const { count } = await prisma.agency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgencyDeleteManyArgs>(args?: SelectSubset<T, AgencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agencies
     * const agency = await prisma.agency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgencyUpdateManyArgs>(args: SelectSubset<T, AgencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agencies and returns the data updated in the database.
     * @param {AgencyUpdateManyAndReturnArgs} args - Arguments to update many Agencies.
     * @example
     * // Update many Agencies
     * const agency = await prisma.agency.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agencies and only return the `id`
     * const agencyWithIdOnly = await prisma.agency.updateManyAndReturn({
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
    updateManyAndReturn<T extends AgencyUpdateManyAndReturnArgs>(args: SelectSubset<T, AgencyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agency.
     * @param {AgencyUpsertArgs} args - Arguments to update or create a Agency.
     * @example
     * // Update or create a Agency
     * const agency = await prisma.agency.upsert({
     *   create: {
     *     // ... data to create a Agency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agency we want to update
     *   }
     * })
     */
    upsert<T extends AgencyUpsertArgs>(args: SelectSubset<T, AgencyUpsertArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyCountArgs} args - Arguments to filter Agencies to count.
     * @example
     * // Count the number of Agencies
     * const count = await prisma.agency.count({
     *   where: {
     *     // ... the filter for the Agencies we want to count
     *   }
     * })
    **/
    count<T extends AgencyCountArgs>(
      args?: Subset<T, AgencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgencyAggregateArgs>(args: Subset<T, AgencyAggregateArgs>): Prisma.PrismaPromise<GetAgencyAggregateType<T>>

    /**
     * Group by Agency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyGroupByArgs} args - Group by arguments.
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
      T extends AgencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgencyGroupByArgs['orderBy'] }
        : { orderBy?: AgencyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agency model
   */
  readonly fields: AgencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Project<T extends Agency$ProjectArgs<ExtArgs> = {}>(args?: Subset<T, Agency$ProjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Agency model
   */
  interface AgencyFieldRefs {
    readonly id: FieldRef<"Agency", 'String'>
    readonly name: FieldRef<"Agency", 'String'>
    readonly agencyNumber: FieldRef<"Agency", 'Int'>
    readonly cnpj: FieldRef<"Agency", 'String'>
    readonly cep: FieldRef<"Agency", 'String'>
    readonly state: FieldRef<"Agency", 'String'>
    readonly city: FieldRef<"Agency", 'String'>
    readonly district: FieldRef<"Agency", 'String'>
    readonly street: FieldRef<"Agency", 'String'>
    readonly number: FieldRef<"Agency", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Agency findUnique
   */
  export type AgencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency findUniqueOrThrow
   */
  export type AgencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency findFirst
   */
  export type AgencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agencies.
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agencies.
     */
    distinct?: AgencyScalarFieldEnum | AgencyScalarFieldEnum[]
  }

  /**
   * Agency findFirstOrThrow
   */
  export type AgencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agencies.
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agencies.
     */
    distinct?: AgencyScalarFieldEnum | AgencyScalarFieldEnum[]
  }

  /**
   * Agency findMany
   */
  export type AgencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agencies to fetch.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agencies.
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    distinct?: AgencyScalarFieldEnum | AgencyScalarFieldEnum[]
  }

  /**
   * Agency create
   */
  export type AgencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * The data needed to create a Agency.
     */
    data: XOR<AgencyCreateInput, AgencyUncheckedCreateInput>
  }

  /**
   * Agency createMany
   */
  export type AgencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agencies.
     */
    data: AgencyCreateManyInput | AgencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agency createManyAndReturn
   */
  export type AgencyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * The data used to create many Agencies.
     */
    data: AgencyCreateManyInput | AgencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agency update
   */
  export type AgencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * The data needed to update a Agency.
     */
    data: XOR<AgencyUpdateInput, AgencyUncheckedUpdateInput>
    /**
     * Choose, which Agency to update.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency updateMany
   */
  export type AgencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agencies.
     */
    data: XOR<AgencyUpdateManyMutationInput, AgencyUncheckedUpdateManyInput>
    /**
     * Filter which Agencies to update
     */
    where?: AgencyWhereInput
    /**
     * Limit how many Agencies to update.
     */
    limit?: number
  }

  /**
   * Agency updateManyAndReturn
   */
  export type AgencyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * The data used to update Agencies.
     */
    data: XOR<AgencyUpdateManyMutationInput, AgencyUncheckedUpdateManyInput>
    /**
     * Filter which Agencies to update
     */
    where?: AgencyWhereInput
    /**
     * Limit how many Agencies to update.
     */
    limit?: number
  }

  /**
   * Agency upsert
   */
  export type AgencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * The filter to search for the Agency to update in case it exists.
     */
    where: AgencyWhereUniqueInput
    /**
     * In case the Agency found by the `where` argument doesn't exist, create a new Agency with this data.
     */
    create: XOR<AgencyCreateInput, AgencyUncheckedCreateInput>
    /**
     * In case the Agency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgencyUpdateInput, AgencyUncheckedUpdateInput>
  }

  /**
   * Agency delete
   */
  export type AgencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter which Agency to delete.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency deleteMany
   */
  export type AgencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agencies to delete
     */
    where?: AgencyWhereInput
    /**
     * Limit how many Agencies to delete.
     */
    limit?: number
  }

  /**
   * Agency.Project
   */
  export type Agency$ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Agency without action
   */
  export type AgencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
  }


  /**
   * Model Engineer
   */

  export type AggregateEngineer = {
    _count: EngineerCountAggregateOutputType | null
    _min: EngineerMinAggregateOutputType | null
    _max: EngineerMaxAggregateOutputType | null
  }

  export type EngineerMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    cpf: string | null
    education: string | null
    registrationNumber: string | null
  }

  export type EngineerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    cpf: string | null
    education: string | null
    registrationNumber: string | null
  }

  export type EngineerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    cpf: number
    education: number
    registrationNumber: number
    _all: number
  }


  export type EngineerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    cpf?: true
    education?: true
    registrationNumber?: true
  }

  export type EngineerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    cpf?: true
    education?: true
    registrationNumber?: true
  }

  export type EngineerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    cpf?: true
    education?: true
    registrationNumber?: true
    _all?: true
  }

  export type EngineerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Engineer to aggregate.
     */
    where?: EngineerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engineers to fetch.
     */
    orderBy?: EngineerOrderByWithRelationInput | EngineerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EngineerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engineers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engineers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Engineers
    **/
    _count?: true | EngineerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EngineerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EngineerMaxAggregateInputType
  }

  export type GetEngineerAggregateType<T extends EngineerAggregateArgs> = {
        [P in keyof T & keyof AggregateEngineer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEngineer[P]>
      : GetScalarType<T[P], AggregateEngineer[P]>
  }




  export type EngineerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EngineerWhereInput
    orderBy?: EngineerOrderByWithAggregationInput | EngineerOrderByWithAggregationInput[]
    by: EngineerScalarFieldEnum[] | EngineerScalarFieldEnum
    having?: EngineerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EngineerCountAggregateInputType | true
    _min?: EngineerMinAggregateInputType
    _max?: EngineerMaxAggregateInputType
  }

  export type EngineerGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    cpf: string
    education: string
    registrationNumber: string
    _count: EngineerCountAggregateOutputType | null
    _min: EngineerMinAggregateOutputType | null
    _max: EngineerMaxAggregateOutputType | null
  }

  type GetEngineerGroupByPayload<T extends EngineerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EngineerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EngineerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EngineerGroupByOutputType[P]>
            : GetScalarType<T[P], EngineerGroupByOutputType[P]>
        }
      >
    >


  export type EngineerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    cpf?: boolean
    education?: boolean
    registrationNumber?: boolean
    Project?: boolean | Engineer$ProjectArgs<ExtArgs>
    _count?: boolean | EngineerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["engineer"]>

  export type EngineerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    cpf?: boolean
    education?: boolean
    registrationNumber?: boolean
  }, ExtArgs["result"]["engineer"]>

  export type EngineerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    cpf?: boolean
    education?: boolean
    registrationNumber?: boolean
  }, ExtArgs["result"]["engineer"]>

  export type EngineerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    cpf?: boolean
    education?: boolean
    registrationNumber?: boolean
  }

  export type EngineerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "cpf" | "education" | "registrationNumber", ExtArgs["result"]["engineer"]>
  export type EngineerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Project?: boolean | Engineer$ProjectArgs<ExtArgs>
    _count?: boolean | EngineerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EngineerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EngineerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EngineerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Engineer"
    objects: {
      Project: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      cpf: string
      education: string
      registrationNumber: string
    }, ExtArgs["result"]["engineer"]>
    composites: {}
  }

  type EngineerGetPayload<S extends boolean | null | undefined | EngineerDefaultArgs> = $Result.GetResult<Prisma.$EngineerPayload, S>

  type EngineerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EngineerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EngineerCountAggregateInputType | true
    }

  export interface EngineerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Engineer'], meta: { name: 'Engineer' } }
    /**
     * Find zero or one Engineer that matches the filter.
     * @param {EngineerFindUniqueArgs} args - Arguments to find a Engineer
     * @example
     * // Get one Engineer
     * const engineer = await prisma.engineer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EngineerFindUniqueArgs>(args: SelectSubset<T, EngineerFindUniqueArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Engineer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EngineerFindUniqueOrThrowArgs} args - Arguments to find a Engineer
     * @example
     * // Get one Engineer
     * const engineer = await prisma.engineer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EngineerFindUniqueOrThrowArgs>(args: SelectSubset<T, EngineerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Engineer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineerFindFirstArgs} args - Arguments to find a Engineer
     * @example
     * // Get one Engineer
     * const engineer = await prisma.engineer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EngineerFindFirstArgs>(args?: SelectSubset<T, EngineerFindFirstArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Engineer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineerFindFirstOrThrowArgs} args - Arguments to find a Engineer
     * @example
     * // Get one Engineer
     * const engineer = await prisma.engineer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EngineerFindFirstOrThrowArgs>(args?: SelectSubset<T, EngineerFindFirstOrThrowArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Engineers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Engineers
     * const engineers = await prisma.engineer.findMany()
     * 
     * // Get first 10 Engineers
     * const engineers = await prisma.engineer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const engineerWithIdOnly = await prisma.engineer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EngineerFindManyArgs>(args?: SelectSubset<T, EngineerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Engineer.
     * @param {EngineerCreateArgs} args - Arguments to create a Engineer.
     * @example
     * // Create one Engineer
     * const Engineer = await prisma.engineer.create({
     *   data: {
     *     // ... data to create a Engineer
     *   }
     * })
     * 
     */
    create<T extends EngineerCreateArgs>(args: SelectSubset<T, EngineerCreateArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Engineers.
     * @param {EngineerCreateManyArgs} args - Arguments to create many Engineers.
     * @example
     * // Create many Engineers
     * const engineer = await prisma.engineer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EngineerCreateManyArgs>(args?: SelectSubset<T, EngineerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Engineers and returns the data saved in the database.
     * @param {EngineerCreateManyAndReturnArgs} args - Arguments to create many Engineers.
     * @example
     * // Create many Engineers
     * const engineer = await prisma.engineer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Engineers and only return the `id`
     * const engineerWithIdOnly = await prisma.engineer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EngineerCreateManyAndReturnArgs>(args?: SelectSubset<T, EngineerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Engineer.
     * @param {EngineerDeleteArgs} args - Arguments to delete one Engineer.
     * @example
     * // Delete one Engineer
     * const Engineer = await prisma.engineer.delete({
     *   where: {
     *     // ... filter to delete one Engineer
     *   }
     * })
     * 
     */
    delete<T extends EngineerDeleteArgs>(args: SelectSubset<T, EngineerDeleteArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Engineer.
     * @param {EngineerUpdateArgs} args - Arguments to update one Engineer.
     * @example
     * // Update one Engineer
     * const engineer = await prisma.engineer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EngineerUpdateArgs>(args: SelectSubset<T, EngineerUpdateArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Engineers.
     * @param {EngineerDeleteManyArgs} args - Arguments to filter Engineers to delete.
     * @example
     * // Delete a few Engineers
     * const { count } = await prisma.engineer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EngineerDeleteManyArgs>(args?: SelectSubset<T, EngineerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Engineers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Engineers
     * const engineer = await prisma.engineer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EngineerUpdateManyArgs>(args: SelectSubset<T, EngineerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Engineers and returns the data updated in the database.
     * @param {EngineerUpdateManyAndReturnArgs} args - Arguments to update many Engineers.
     * @example
     * // Update many Engineers
     * const engineer = await prisma.engineer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Engineers and only return the `id`
     * const engineerWithIdOnly = await prisma.engineer.updateManyAndReturn({
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
    updateManyAndReturn<T extends EngineerUpdateManyAndReturnArgs>(args: SelectSubset<T, EngineerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Engineer.
     * @param {EngineerUpsertArgs} args - Arguments to update or create a Engineer.
     * @example
     * // Update or create a Engineer
     * const engineer = await prisma.engineer.upsert({
     *   create: {
     *     // ... data to create a Engineer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Engineer we want to update
     *   }
     * })
     */
    upsert<T extends EngineerUpsertArgs>(args: SelectSubset<T, EngineerUpsertArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Engineers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineerCountArgs} args - Arguments to filter Engineers to count.
     * @example
     * // Count the number of Engineers
     * const count = await prisma.engineer.count({
     *   where: {
     *     // ... the filter for the Engineers we want to count
     *   }
     * })
    **/
    count<T extends EngineerCountArgs>(
      args?: Subset<T, EngineerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EngineerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Engineer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EngineerAggregateArgs>(args: Subset<T, EngineerAggregateArgs>): Prisma.PrismaPromise<GetEngineerAggregateType<T>>

    /**
     * Group by Engineer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineerGroupByArgs} args - Group by arguments.
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
      T extends EngineerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EngineerGroupByArgs['orderBy'] }
        : { orderBy?: EngineerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EngineerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEngineerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Engineer model
   */
  readonly fields: EngineerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Engineer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EngineerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Project<T extends Engineer$ProjectArgs<ExtArgs> = {}>(args?: Subset<T, Engineer$ProjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Engineer model
   */
  interface EngineerFieldRefs {
    readonly id: FieldRef<"Engineer", 'String'>
    readonly name: FieldRef<"Engineer", 'String'>
    readonly email: FieldRef<"Engineer", 'String'>
    readonly phone: FieldRef<"Engineer", 'String'>
    readonly cpf: FieldRef<"Engineer", 'String'>
    readonly education: FieldRef<"Engineer", 'String'>
    readonly registrationNumber: FieldRef<"Engineer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Engineer findUnique
   */
  export type EngineerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * Filter, which Engineer to fetch.
     */
    where: EngineerWhereUniqueInput
  }

  /**
   * Engineer findUniqueOrThrow
   */
  export type EngineerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * Filter, which Engineer to fetch.
     */
    where: EngineerWhereUniqueInput
  }

  /**
   * Engineer findFirst
   */
  export type EngineerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * Filter, which Engineer to fetch.
     */
    where?: EngineerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engineers to fetch.
     */
    orderBy?: EngineerOrderByWithRelationInput | EngineerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Engineers.
     */
    cursor?: EngineerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engineers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engineers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Engineers.
     */
    distinct?: EngineerScalarFieldEnum | EngineerScalarFieldEnum[]
  }

  /**
   * Engineer findFirstOrThrow
   */
  export type EngineerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * Filter, which Engineer to fetch.
     */
    where?: EngineerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engineers to fetch.
     */
    orderBy?: EngineerOrderByWithRelationInput | EngineerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Engineers.
     */
    cursor?: EngineerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engineers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engineers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Engineers.
     */
    distinct?: EngineerScalarFieldEnum | EngineerScalarFieldEnum[]
  }

  /**
   * Engineer findMany
   */
  export type EngineerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * Filter, which Engineers to fetch.
     */
    where?: EngineerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engineers to fetch.
     */
    orderBy?: EngineerOrderByWithRelationInput | EngineerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Engineers.
     */
    cursor?: EngineerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engineers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engineers.
     */
    skip?: number
    distinct?: EngineerScalarFieldEnum | EngineerScalarFieldEnum[]
  }

  /**
   * Engineer create
   */
  export type EngineerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * The data needed to create a Engineer.
     */
    data: XOR<EngineerCreateInput, EngineerUncheckedCreateInput>
  }

  /**
   * Engineer createMany
   */
  export type EngineerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Engineers.
     */
    data: EngineerCreateManyInput | EngineerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Engineer createManyAndReturn
   */
  export type EngineerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * The data used to create many Engineers.
     */
    data: EngineerCreateManyInput | EngineerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Engineer update
   */
  export type EngineerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * The data needed to update a Engineer.
     */
    data: XOR<EngineerUpdateInput, EngineerUncheckedUpdateInput>
    /**
     * Choose, which Engineer to update.
     */
    where: EngineerWhereUniqueInput
  }

  /**
   * Engineer updateMany
   */
  export type EngineerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Engineers.
     */
    data: XOR<EngineerUpdateManyMutationInput, EngineerUncheckedUpdateManyInput>
    /**
     * Filter which Engineers to update
     */
    where?: EngineerWhereInput
    /**
     * Limit how many Engineers to update.
     */
    limit?: number
  }

  /**
   * Engineer updateManyAndReturn
   */
  export type EngineerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * The data used to update Engineers.
     */
    data: XOR<EngineerUpdateManyMutationInput, EngineerUncheckedUpdateManyInput>
    /**
     * Filter which Engineers to update
     */
    where?: EngineerWhereInput
    /**
     * Limit how many Engineers to update.
     */
    limit?: number
  }

  /**
   * Engineer upsert
   */
  export type EngineerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * The filter to search for the Engineer to update in case it exists.
     */
    where: EngineerWhereUniqueInput
    /**
     * In case the Engineer found by the `where` argument doesn't exist, create a new Engineer with this data.
     */
    create: XOR<EngineerCreateInput, EngineerUncheckedCreateInput>
    /**
     * In case the Engineer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EngineerUpdateInput, EngineerUncheckedUpdateInput>
  }

  /**
   * Engineer delete
   */
  export type EngineerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * Filter which Engineer to delete.
     */
    where: EngineerWhereUniqueInput
  }

  /**
   * Engineer deleteMany
   */
  export type EngineerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Engineers to delete
     */
    where?: EngineerWhereInput
    /**
     * Limit how many Engineers to delete.
     */
    limit?: number
  }

  /**
   * Engineer.Project
   */
  export type Engineer$ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Engineer without action
   */
  export type EngineerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    upeCode: number | null
  }

  export type ProjectSumAggregateOutputType = {
    upeCode: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    projectType: $Enums.ProjectType | null
    upeCode: number | null
    agencyId: string | null
    engineerId: string | null
    status: $Enums.ProjectStatus | null
    structureType: string | null
    inspectorName: string | null
    inspectionDate: Date | null
    createdAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    projectType: $Enums.ProjectType | null
    upeCode: number | null
    agencyId: string | null
    engineerId: string | null
    status: $Enums.ProjectStatus | null
    structureType: string | null
    inspectorName: string | null
    inspectionDate: Date | null
    createdAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    projectType: number
    upeCode: number
    agencyId: number
    engineerId: number
    status: number
    structureType: number
    inspectorName: number
    inspectionDate: number
    createdAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    upeCode?: true
  }

  export type ProjectSumAggregateInputType = {
    upeCode?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    projectType?: true
    upeCode?: true
    agencyId?: true
    engineerId?: true
    status?: true
    structureType?: true
    inspectorName?: true
    inspectionDate?: true
    createdAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    projectType?: true
    upeCode?: true
    agencyId?: true
    engineerId?: true
    status?: true
    structureType?: true
    inspectorName?: true
    inspectionDate?: true
    createdAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    projectType?: true
    upeCode?: true
    agencyId?: true
    engineerId?: true
    status?: true
    structureType?: true
    inspectorName?: true
    inspectionDate?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    projectType: $Enums.ProjectType
    upeCode: number
    agencyId: string
    engineerId: string
    status: $Enums.ProjectStatus
    structureType: string | null
    inspectorName: string | null
    inspectionDate: Date | null
    createdAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectType?: boolean
    upeCode?: boolean
    agencyId?: boolean
    engineerId?: boolean
    status?: boolean
    structureType?: boolean
    inspectorName?: boolean
    inspectionDate?: boolean
    createdAt?: boolean
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
    AccessKey?: boolean | Project$AccessKeyArgs<ExtArgs>
    Pavement?: boolean | Project$PavementArgs<ExtArgs>
    Location?: boolean | Project$LocationArgs<ExtArgs>
    Pathology?: boolean | Project$PathologyArgs<ExtArgs>
    Pdf?: boolean | Project$PdfArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectType?: boolean
    upeCode?: boolean
    agencyId?: boolean
    engineerId?: boolean
    status?: boolean
    structureType?: boolean
    inspectorName?: boolean
    inspectionDate?: boolean
    createdAt?: boolean
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectType?: boolean
    upeCode?: boolean
    agencyId?: boolean
    engineerId?: boolean
    status?: boolean
    structureType?: boolean
    inspectorName?: boolean
    inspectionDate?: boolean
    createdAt?: boolean
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    projectType?: boolean
    upeCode?: boolean
    agencyId?: boolean
    engineerId?: boolean
    status?: boolean
    structureType?: boolean
    inspectorName?: boolean
    inspectionDate?: boolean
    createdAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectType" | "upeCode" | "agencyId" | "engineerId" | "status" | "structureType" | "inspectorName" | "inspectionDate" | "createdAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
    AccessKey?: boolean | Project$AccessKeyArgs<ExtArgs>
    Pavement?: boolean | Project$PavementArgs<ExtArgs>
    Location?: boolean | Project$LocationArgs<ExtArgs>
    Pathology?: boolean | Project$PathologyArgs<ExtArgs>
    Pdf?: boolean | Project$PdfArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      agency: Prisma.$AgencyPayload<ExtArgs>
      engineer: Prisma.$EngineerPayload<ExtArgs>
      AccessKey: Prisma.$AccessKeyPayload<ExtArgs>[]
      Pavement: Prisma.$PavementPayload<ExtArgs>[]
      Location: Prisma.$LocationPayload<ExtArgs>[]
      Pathology: Prisma.$PathologyPayload<ExtArgs>[]
      Pdf: Prisma.$PdfPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectType: $Enums.ProjectType
      upeCode: number
      agencyId: string
      engineerId: string
      status: $Enums.ProjectStatus
      structureType: string | null
      inspectorName: string | null
      inspectionDate: Date | null
      createdAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agency<T extends AgencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgencyDefaultArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    engineer<T extends EngineerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EngineerDefaultArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    AccessKey<T extends Project$AccessKeyArgs<ExtArgs> = {}>(args?: Subset<T, Project$AccessKeyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Pavement<T extends Project$PavementArgs<ExtArgs> = {}>(args?: Subset<T, Project$PavementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PavementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Location<T extends Project$LocationArgs<ExtArgs> = {}>(args?: Subset<T, Project$LocationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Pathology<T extends Project$PathologyArgs<ExtArgs> = {}>(args?: Subset<T, Project$PathologyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PathologyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Pdf<T extends Project$PdfArgs<ExtArgs> = {}>(args?: Subset<T, Project$PdfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PdfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly projectType: FieldRef<"Project", 'ProjectType'>
    readonly upeCode: FieldRef<"Project", 'Int'>
    readonly agencyId: FieldRef<"Project", 'String'>
    readonly engineerId: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
    readonly structureType: FieldRef<"Project", 'String'>
    readonly inspectorName: FieldRef<"Project", 'String'>
    readonly inspectionDate: FieldRef<"Project", 'DateTime'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.AccessKey
   */
  export type Project$AccessKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessKey
     */
    select?: AccessKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessKey
     */
    omit?: AccessKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessKeyInclude<ExtArgs> | null
    where?: AccessKeyWhereInput
    orderBy?: AccessKeyOrderByWithRelationInput | AccessKeyOrderByWithRelationInput[]
    cursor?: AccessKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccessKeyScalarFieldEnum | AccessKeyScalarFieldEnum[]
  }

  /**
   * Project.Pavement
   */
  export type Project$PavementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pavement
     */
    select?: PavementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pavement
     */
    omit?: PavementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PavementInclude<ExtArgs> | null
    where?: PavementWhereInput
    orderBy?: PavementOrderByWithRelationInput | PavementOrderByWithRelationInput[]
    cursor?: PavementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PavementScalarFieldEnum | PavementScalarFieldEnum[]
  }

  /**
   * Project.Location
   */
  export type Project$LocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Project.Pathology
   */
  export type Project$PathologyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pathology
     */
    select?: PathologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pathology
     */
    omit?: PathologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyInclude<ExtArgs> | null
    where?: PathologyWhereInput
    orderBy?: PathologyOrderByWithRelationInput | PathologyOrderByWithRelationInput[]
    cursor?: PathologyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PathologyScalarFieldEnum | PathologyScalarFieldEnum[]
  }

  /**
   * Project.Pdf
   */
  export type Project$PdfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfInclude<ExtArgs> | null
    where?: PdfWhereInput
    orderBy?: PdfOrderByWithRelationInput | PdfOrderByWithRelationInput[]
    cursor?: PdfWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PdfScalarFieldEnum | PdfScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model AccessKey
   */

  export type AggregateAccessKey = {
    _count: AccessKeyCountAggregateOutputType | null
    _min: AccessKeyMinAggregateOutputType | null
    _max: AccessKeyMaxAggregateOutputType | null
  }

  export type AccessKeyMinAggregateOutputType = {
    id: string | null
    token: string | null
    projectId: string | null
    userId: string | null
    expiresAt: Date | null
  }

  export type AccessKeyMaxAggregateOutputType = {
    id: string | null
    token: string | null
    projectId: string | null
    userId: string | null
    expiresAt: Date | null
  }

  export type AccessKeyCountAggregateOutputType = {
    id: number
    token: number
    projectId: number
    userId: number
    expiresAt: number
    _all: number
  }


  export type AccessKeyMinAggregateInputType = {
    id?: true
    token?: true
    projectId?: true
    userId?: true
    expiresAt?: true
  }

  export type AccessKeyMaxAggregateInputType = {
    id?: true
    token?: true
    projectId?: true
    userId?: true
    expiresAt?: true
  }

  export type AccessKeyCountAggregateInputType = {
    id?: true
    token?: true
    projectId?: true
    userId?: true
    expiresAt?: true
    _all?: true
  }

  export type AccessKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessKey to aggregate.
     */
    where?: AccessKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessKeys to fetch.
     */
    orderBy?: AccessKeyOrderByWithRelationInput | AccessKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccessKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccessKeys
    **/
    _count?: true | AccessKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessKeyMaxAggregateInputType
  }

  export type GetAccessKeyAggregateType<T extends AccessKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateAccessKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccessKey[P]>
      : GetScalarType<T[P], AggregateAccessKey[P]>
  }




  export type AccessKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessKeyWhereInput
    orderBy?: AccessKeyOrderByWithAggregationInput | AccessKeyOrderByWithAggregationInput[]
    by: AccessKeyScalarFieldEnum[] | AccessKeyScalarFieldEnum
    having?: AccessKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessKeyCountAggregateInputType | true
    _min?: AccessKeyMinAggregateInputType
    _max?: AccessKeyMaxAggregateInputType
  }

  export type AccessKeyGroupByOutputType = {
    id: string
    token: string
    projectId: string
    userId: string
    expiresAt: Date
    _count: AccessKeyCountAggregateOutputType | null
    _min: AccessKeyMinAggregateOutputType | null
    _max: AccessKeyMaxAggregateOutputType | null
  }

  type GetAccessKeyGroupByPayload<T extends AccessKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccessKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessKeyGroupByOutputType[P]>
            : GetScalarType<T[P], AccessKeyGroupByOutputType[P]>
        }
      >
    >


  export type AccessKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    projectId?: boolean
    userId?: boolean
    expiresAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessKey"]>

  export type AccessKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    projectId?: boolean
    userId?: boolean
    expiresAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessKey"]>

  export type AccessKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    projectId?: boolean
    userId?: boolean
    expiresAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessKey"]>

  export type AccessKeySelectScalar = {
    id?: boolean
    token?: boolean
    projectId?: boolean
    userId?: boolean
    expiresAt?: boolean
  }

  export type AccessKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "projectId" | "userId" | "expiresAt", ExtArgs["result"]["accessKey"]>
  export type AccessKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccessKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccessKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccessKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccessKey"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      projectId: string
      userId: string
      expiresAt: Date
    }, ExtArgs["result"]["accessKey"]>
    composites: {}
  }

  type AccessKeyGetPayload<S extends boolean | null | undefined | AccessKeyDefaultArgs> = $Result.GetResult<Prisma.$AccessKeyPayload, S>

  type AccessKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccessKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccessKeyCountAggregateInputType | true
    }

  export interface AccessKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccessKey'], meta: { name: 'AccessKey' } }
    /**
     * Find zero or one AccessKey that matches the filter.
     * @param {AccessKeyFindUniqueArgs} args - Arguments to find a AccessKey
     * @example
     * // Get one AccessKey
     * const accessKey = await prisma.accessKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccessKeyFindUniqueArgs>(args: SelectSubset<T, AccessKeyFindUniqueArgs<ExtArgs>>): Prisma__AccessKeyClient<$Result.GetResult<Prisma.$AccessKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccessKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccessKeyFindUniqueOrThrowArgs} args - Arguments to find a AccessKey
     * @example
     * // Get one AccessKey
     * const accessKey = await prisma.accessKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccessKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, AccessKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccessKeyClient<$Result.GetResult<Prisma.$AccessKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessKeyFindFirstArgs} args - Arguments to find a AccessKey
     * @example
     * // Get one AccessKey
     * const accessKey = await prisma.accessKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccessKeyFindFirstArgs>(args?: SelectSubset<T, AccessKeyFindFirstArgs<ExtArgs>>): Prisma__AccessKeyClient<$Result.GetResult<Prisma.$AccessKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessKeyFindFirstOrThrowArgs} args - Arguments to find a AccessKey
     * @example
     * // Get one AccessKey
     * const accessKey = await prisma.accessKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccessKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, AccessKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccessKeyClient<$Result.GetResult<Prisma.$AccessKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccessKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccessKeys
     * const accessKeys = await prisma.accessKey.findMany()
     * 
     * // Get first 10 AccessKeys
     * const accessKeys = await prisma.accessKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accessKeyWithIdOnly = await prisma.accessKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccessKeyFindManyArgs>(args?: SelectSubset<T, AccessKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccessKey.
     * @param {AccessKeyCreateArgs} args - Arguments to create a AccessKey.
     * @example
     * // Create one AccessKey
     * const AccessKey = await prisma.accessKey.create({
     *   data: {
     *     // ... data to create a AccessKey
     *   }
     * })
     * 
     */
    create<T extends AccessKeyCreateArgs>(args: SelectSubset<T, AccessKeyCreateArgs<ExtArgs>>): Prisma__AccessKeyClient<$Result.GetResult<Prisma.$AccessKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccessKeys.
     * @param {AccessKeyCreateManyArgs} args - Arguments to create many AccessKeys.
     * @example
     * // Create many AccessKeys
     * const accessKey = await prisma.accessKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccessKeyCreateManyArgs>(args?: SelectSubset<T, AccessKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccessKeys and returns the data saved in the database.
     * @param {AccessKeyCreateManyAndReturnArgs} args - Arguments to create many AccessKeys.
     * @example
     * // Create many AccessKeys
     * const accessKey = await prisma.accessKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccessKeys and only return the `id`
     * const accessKeyWithIdOnly = await prisma.accessKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccessKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, AccessKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccessKey.
     * @param {AccessKeyDeleteArgs} args - Arguments to delete one AccessKey.
     * @example
     * // Delete one AccessKey
     * const AccessKey = await prisma.accessKey.delete({
     *   where: {
     *     // ... filter to delete one AccessKey
     *   }
     * })
     * 
     */
    delete<T extends AccessKeyDeleteArgs>(args: SelectSubset<T, AccessKeyDeleteArgs<ExtArgs>>): Prisma__AccessKeyClient<$Result.GetResult<Prisma.$AccessKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccessKey.
     * @param {AccessKeyUpdateArgs} args - Arguments to update one AccessKey.
     * @example
     * // Update one AccessKey
     * const accessKey = await prisma.accessKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccessKeyUpdateArgs>(args: SelectSubset<T, AccessKeyUpdateArgs<ExtArgs>>): Prisma__AccessKeyClient<$Result.GetResult<Prisma.$AccessKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccessKeys.
     * @param {AccessKeyDeleteManyArgs} args - Arguments to filter AccessKeys to delete.
     * @example
     * // Delete a few AccessKeys
     * const { count } = await prisma.accessKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccessKeyDeleteManyArgs>(args?: SelectSubset<T, AccessKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccessKeys
     * const accessKey = await prisma.accessKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccessKeyUpdateManyArgs>(args: SelectSubset<T, AccessKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessKeys and returns the data updated in the database.
     * @param {AccessKeyUpdateManyAndReturnArgs} args - Arguments to update many AccessKeys.
     * @example
     * // Update many AccessKeys
     * const accessKey = await prisma.accessKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccessKeys and only return the `id`
     * const accessKeyWithIdOnly = await prisma.accessKey.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccessKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, AccessKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccessKey.
     * @param {AccessKeyUpsertArgs} args - Arguments to update or create a AccessKey.
     * @example
     * // Update or create a AccessKey
     * const accessKey = await prisma.accessKey.upsert({
     *   create: {
     *     // ... data to create a AccessKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccessKey we want to update
     *   }
     * })
     */
    upsert<T extends AccessKeyUpsertArgs>(args: SelectSubset<T, AccessKeyUpsertArgs<ExtArgs>>): Prisma__AccessKeyClient<$Result.GetResult<Prisma.$AccessKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccessKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessKeyCountArgs} args - Arguments to filter AccessKeys to count.
     * @example
     * // Count the number of AccessKeys
     * const count = await prisma.accessKey.count({
     *   where: {
     *     // ... the filter for the AccessKeys we want to count
     *   }
     * })
    **/
    count<T extends AccessKeyCountArgs>(
      args?: Subset<T, AccessKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccessKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccessKeyAggregateArgs>(args: Subset<T, AccessKeyAggregateArgs>): Prisma.PrismaPromise<GetAccessKeyAggregateType<T>>

    /**
     * Group by AccessKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessKeyGroupByArgs} args - Group by arguments.
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
      T extends AccessKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccessKeyGroupByArgs['orderBy'] }
        : { orderBy?: AccessKeyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccessKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccessKey model
   */
  readonly fields: AccessKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccessKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccessKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AccessKey model
   */
  interface AccessKeyFieldRefs {
    readonly id: FieldRef<"AccessKey", 'String'>
    readonly token: FieldRef<"AccessKey", 'String'>
    readonly projectId: FieldRef<"AccessKey", 'String'>
    readonly userId: FieldRef<"AccessKey", 'String'>
    readonly expiresAt: FieldRef<"AccessKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccessKey findUnique
   */
  export type AccessKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessKey
     */
    select?: AccessKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessKey
     */
    omit?: AccessKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessKeyInclude<ExtArgs> | null
    /**
     * Filter, which AccessKey to fetch.
     */
    where: AccessKeyWhereUniqueInput
  }

  /**
   * AccessKey findUniqueOrThrow
   */
  export type AccessKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessKey
     */
    select?: AccessKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessKey
     */
    omit?: AccessKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessKeyInclude<ExtArgs> | null
    /**
     * Filter, which AccessKey to fetch.
     */
    where: AccessKeyWhereUniqueInput
  }

  /**
   * AccessKey findFirst
   */
  export type AccessKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessKey
     */
    select?: AccessKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessKey
     */
    omit?: AccessKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessKeyInclude<ExtArgs> | null
    /**
     * Filter, which AccessKey to fetch.
     */
    where?: AccessKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessKeys to fetch.
     */
    orderBy?: AccessKeyOrderByWithRelationInput | AccessKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessKeys.
     */
    cursor?: AccessKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessKeys.
     */
    distinct?: AccessKeyScalarFieldEnum | AccessKeyScalarFieldEnum[]
  }

  /**
   * AccessKey findFirstOrThrow
   */
  export type AccessKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessKey
     */
    select?: AccessKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessKey
     */
    omit?: AccessKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessKeyInclude<ExtArgs> | null
    /**
     * Filter, which AccessKey to fetch.
     */
    where?: AccessKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessKeys to fetch.
     */
    orderBy?: AccessKeyOrderByWithRelationInput | AccessKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessKeys.
     */
    cursor?: AccessKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessKeys.
     */
    distinct?: AccessKeyScalarFieldEnum | AccessKeyScalarFieldEnum[]
  }

  /**
   * AccessKey findMany
   */
  export type AccessKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessKey
     */
    select?: AccessKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessKey
     */
    omit?: AccessKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessKeyInclude<ExtArgs> | null
    /**
     * Filter, which AccessKeys to fetch.
     */
    where?: AccessKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessKeys to fetch.
     */
    orderBy?: AccessKeyOrderByWithRelationInput | AccessKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccessKeys.
     */
    cursor?: AccessKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessKeys.
     */
    skip?: number
    distinct?: AccessKeyScalarFieldEnum | AccessKeyScalarFieldEnum[]
  }

  /**
   * AccessKey create
   */
  export type AccessKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessKey
     */
    select?: AccessKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessKey
     */
    omit?: AccessKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a AccessKey.
     */
    data: XOR<AccessKeyCreateInput, AccessKeyUncheckedCreateInput>
  }

  /**
   * AccessKey createMany
   */
  export type AccessKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccessKeys.
     */
    data: AccessKeyCreateManyInput | AccessKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccessKey createManyAndReturn
   */
  export type AccessKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessKey
     */
    select?: AccessKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessKey
     */
    omit?: AccessKeyOmit<ExtArgs> | null
    /**
     * The data used to create many AccessKeys.
     */
    data: AccessKeyCreateManyInput | AccessKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccessKey update
   */
  export type AccessKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessKey
     */
    select?: AccessKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessKey
     */
    omit?: AccessKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a AccessKey.
     */
    data: XOR<AccessKeyUpdateInput, AccessKeyUncheckedUpdateInput>
    /**
     * Choose, which AccessKey to update.
     */
    where: AccessKeyWhereUniqueInput
  }

  /**
   * AccessKey updateMany
   */
  export type AccessKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccessKeys.
     */
    data: XOR<AccessKeyUpdateManyMutationInput, AccessKeyUncheckedUpdateManyInput>
    /**
     * Filter which AccessKeys to update
     */
    where?: AccessKeyWhereInput
    /**
     * Limit how many AccessKeys to update.
     */
    limit?: number
  }

  /**
   * AccessKey updateManyAndReturn
   */
  export type AccessKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessKey
     */
    select?: AccessKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessKey
     */
    omit?: AccessKeyOmit<ExtArgs> | null
    /**
     * The data used to update AccessKeys.
     */
    data: XOR<AccessKeyUpdateManyMutationInput, AccessKeyUncheckedUpdateManyInput>
    /**
     * Filter which AccessKeys to update
     */
    where?: AccessKeyWhereInput
    /**
     * Limit how many AccessKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccessKey upsert
   */
  export type AccessKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessKey
     */
    select?: AccessKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessKey
     */
    omit?: AccessKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the AccessKey to update in case it exists.
     */
    where: AccessKeyWhereUniqueInput
    /**
     * In case the AccessKey found by the `where` argument doesn't exist, create a new AccessKey with this data.
     */
    create: XOR<AccessKeyCreateInput, AccessKeyUncheckedCreateInput>
    /**
     * In case the AccessKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccessKeyUpdateInput, AccessKeyUncheckedUpdateInput>
  }

  /**
   * AccessKey delete
   */
  export type AccessKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessKey
     */
    select?: AccessKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessKey
     */
    omit?: AccessKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessKeyInclude<ExtArgs> | null
    /**
     * Filter which AccessKey to delete.
     */
    where: AccessKeyWhereUniqueInput
  }

  /**
   * AccessKey deleteMany
   */
  export type AccessKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessKeys to delete
     */
    where?: AccessKeyWhereInput
    /**
     * Limit how many AccessKeys to delete.
     */
    limit?: number
  }

  /**
   * AccessKey without action
   */
  export type AccessKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessKey
     */
    select?: AccessKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessKey
     */
    omit?: AccessKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessKeyInclude<ExtArgs> | null
  }


  /**
   * Model Pavement
   */

  export type AggregatePavement = {
    _count: PavementCountAggregateOutputType | null
    _avg: PavementAvgAggregateOutputType | null
    _sum: PavementSumAggregateOutputType | null
    _min: PavementMinAggregateOutputType | null
    _max: PavementMaxAggregateOutputType | null
  }

  export type PavementAvgAggregateOutputType = {
    height: number | null
    area: number | null
  }

  export type PavementSumAggregateOutputType = {
    height: number | null
    area: number | null
  }

  export type PavementMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    pavement: string | null
    height: number | null
    area: number | null
  }

  export type PavementMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    pavement: string | null
    height: number | null
    area: number | null
  }

  export type PavementCountAggregateOutputType = {
    id: number
    projectId: number
    pavement: number
    height: number
    area: number
    _all: number
  }


  export type PavementAvgAggregateInputType = {
    height?: true
    area?: true
  }

  export type PavementSumAggregateInputType = {
    height?: true
    area?: true
  }

  export type PavementMinAggregateInputType = {
    id?: true
    projectId?: true
    pavement?: true
    height?: true
    area?: true
  }

  export type PavementMaxAggregateInputType = {
    id?: true
    projectId?: true
    pavement?: true
    height?: true
    area?: true
  }

  export type PavementCountAggregateInputType = {
    id?: true
    projectId?: true
    pavement?: true
    height?: true
    area?: true
    _all?: true
  }

  export type PavementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pavement to aggregate.
     */
    where?: PavementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pavements to fetch.
     */
    orderBy?: PavementOrderByWithRelationInput | PavementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PavementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pavements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pavements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pavements
    **/
    _count?: true | PavementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PavementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PavementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PavementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PavementMaxAggregateInputType
  }

  export type GetPavementAggregateType<T extends PavementAggregateArgs> = {
        [P in keyof T & keyof AggregatePavement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePavement[P]>
      : GetScalarType<T[P], AggregatePavement[P]>
  }




  export type PavementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PavementWhereInput
    orderBy?: PavementOrderByWithAggregationInput | PavementOrderByWithAggregationInput[]
    by: PavementScalarFieldEnum[] | PavementScalarFieldEnum
    having?: PavementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PavementCountAggregateInputType | true
    _avg?: PavementAvgAggregateInputType
    _sum?: PavementSumAggregateInputType
    _min?: PavementMinAggregateInputType
    _max?: PavementMaxAggregateInputType
  }

  export type PavementGroupByOutputType = {
    id: string
    projectId: string
    pavement: string
    height: number
    area: number | null
    _count: PavementCountAggregateOutputType | null
    _avg: PavementAvgAggregateOutputType | null
    _sum: PavementSumAggregateOutputType | null
    _min: PavementMinAggregateOutputType | null
    _max: PavementMaxAggregateOutputType | null
  }

  type GetPavementGroupByPayload<T extends PavementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PavementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PavementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PavementGroupByOutputType[P]>
            : GetScalarType<T[P], PavementGroupByOutputType[P]>
        }
      >
    >


  export type PavementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    pavement?: boolean
    height?: boolean
    area?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    Location?: boolean | Pavement$LocationArgs<ExtArgs>
    _count?: boolean | PavementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pavement"]>

  export type PavementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    pavement?: boolean
    height?: boolean
    area?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pavement"]>

  export type PavementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    pavement?: boolean
    height?: boolean
    area?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pavement"]>

  export type PavementSelectScalar = {
    id?: boolean
    projectId?: boolean
    pavement?: boolean
    height?: boolean
    area?: boolean
  }

  export type PavementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "pavement" | "height" | "area", ExtArgs["result"]["pavement"]>
  export type PavementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    Location?: boolean | Pavement$LocationArgs<ExtArgs>
    _count?: boolean | PavementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PavementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type PavementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $PavementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pavement"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      Location: Prisma.$LocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      pavement: string
      height: number
      area: number | null
    }, ExtArgs["result"]["pavement"]>
    composites: {}
  }

  type PavementGetPayload<S extends boolean | null | undefined | PavementDefaultArgs> = $Result.GetResult<Prisma.$PavementPayload, S>

  type PavementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PavementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PavementCountAggregateInputType | true
    }

  export interface PavementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pavement'], meta: { name: 'Pavement' } }
    /**
     * Find zero or one Pavement that matches the filter.
     * @param {PavementFindUniqueArgs} args - Arguments to find a Pavement
     * @example
     * // Get one Pavement
     * const pavement = await prisma.pavement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PavementFindUniqueArgs>(args: SelectSubset<T, PavementFindUniqueArgs<ExtArgs>>): Prisma__PavementClient<$Result.GetResult<Prisma.$PavementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pavement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PavementFindUniqueOrThrowArgs} args - Arguments to find a Pavement
     * @example
     * // Get one Pavement
     * const pavement = await prisma.pavement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PavementFindUniqueOrThrowArgs>(args: SelectSubset<T, PavementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PavementClient<$Result.GetResult<Prisma.$PavementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pavement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PavementFindFirstArgs} args - Arguments to find a Pavement
     * @example
     * // Get one Pavement
     * const pavement = await prisma.pavement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PavementFindFirstArgs>(args?: SelectSubset<T, PavementFindFirstArgs<ExtArgs>>): Prisma__PavementClient<$Result.GetResult<Prisma.$PavementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pavement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PavementFindFirstOrThrowArgs} args - Arguments to find a Pavement
     * @example
     * // Get one Pavement
     * const pavement = await prisma.pavement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PavementFindFirstOrThrowArgs>(args?: SelectSubset<T, PavementFindFirstOrThrowArgs<ExtArgs>>): Prisma__PavementClient<$Result.GetResult<Prisma.$PavementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pavements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PavementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pavements
     * const pavements = await prisma.pavement.findMany()
     * 
     * // Get first 10 Pavements
     * const pavements = await prisma.pavement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pavementWithIdOnly = await prisma.pavement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PavementFindManyArgs>(args?: SelectSubset<T, PavementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PavementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pavement.
     * @param {PavementCreateArgs} args - Arguments to create a Pavement.
     * @example
     * // Create one Pavement
     * const Pavement = await prisma.pavement.create({
     *   data: {
     *     // ... data to create a Pavement
     *   }
     * })
     * 
     */
    create<T extends PavementCreateArgs>(args: SelectSubset<T, PavementCreateArgs<ExtArgs>>): Prisma__PavementClient<$Result.GetResult<Prisma.$PavementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pavements.
     * @param {PavementCreateManyArgs} args - Arguments to create many Pavements.
     * @example
     * // Create many Pavements
     * const pavement = await prisma.pavement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PavementCreateManyArgs>(args?: SelectSubset<T, PavementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pavements and returns the data saved in the database.
     * @param {PavementCreateManyAndReturnArgs} args - Arguments to create many Pavements.
     * @example
     * // Create many Pavements
     * const pavement = await prisma.pavement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pavements and only return the `id`
     * const pavementWithIdOnly = await prisma.pavement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PavementCreateManyAndReturnArgs>(args?: SelectSubset<T, PavementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PavementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pavement.
     * @param {PavementDeleteArgs} args - Arguments to delete one Pavement.
     * @example
     * // Delete one Pavement
     * const Pavement = await prisma.pavement.delete({
     *   where: {
     *     // ... filter to delete one Pavement
     *   }
     * })
     * 
     */
    delete<T extends PavementDeleteArgs>(args: SelectSubset<T, PavementDeleteArgs<ExtArgs>>): Prisma__PavementClient<$Result.GetResult<Prisma.$PavementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pavement.
     * @param {PavementUpdateArgs} args - Arguments to update one Pavement.
     * @example
     * // Update one Pavement
     * const pavement = await prisma.pavement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PavementUpdateArgs>(args: SelectSubset<T, PavementUpdateArgs<ExtArgs>>): Prisma__PavementClient<$Result.GetResult<Prisma.$PavementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pavements.
     * @param {PavementDeleteManyArgs} args - Arguments to filter Pavements to delete.
     * @example
     * // Delete a few Pavements
     * const { count } = await prisma.pavement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PavementDeleteManyArgs>(args?: SelectSubset<T, PavementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pavements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PavementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pavements
     * const pavement = await prisma.pavement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PavementUpdateManyArgs>(args: SelectSubset<T, PavementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pavements and returns the data updated in the database.
     * @param {PavementUpdateManyAndReturnArgs} args - Arguments to update many Pavements.
     * @example
     * // Update many Pavements
     * const pavement = await prisma.pavement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pavements and only return the `id`
     * const pavementWithIdOnly = await prisma.pavement.updateManyAndReturn({
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
    updateManyAndReturn<T extends PavementUpdateManyAndReturnArgs>(args: SelectSubset<T, PavementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PavementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pavement.
     * @param {PavementUpsertArgs} args - Arguments to update or create a Pavement.
     * @example
     * // Update or create a Pavement
     * const pavement = await prisma.pavement.upsert({
     *   create: {
     *     // ... data to create a Pavement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pavement we want to update
     *   }
     * })
     */
    upsert<T extends PavementUpsertArgs>(args: SelectSubset<T, PavementUpsertArgs<ExtArgs>>): Prisma__PavementClient<$Result.GetResult<Prisma.$PavementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pavements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PavementCountArgs} args - Arguments to filter Pavements to count.
     * @example
     * // Count the number of Pavements
     * const count = await prisma.pavement.count({
     *   where: {
     *     // ... the filter for the Pavements we want to count
     *   }
     * })
    **/
    count<T extends PavementCountArgs>(
      args?: Subset<T, PavementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PavementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pavement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PavementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PavementAggregateArgs>(args: Subset<T, PavementAggregateArgs>): Prisma.PrismaPromise<GetPavementAggregateType<T>>

    /**
     * Group by Pavement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PavementGroupByArgs} args - Group by arguments.
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
      T extends PavementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PavementGroupByArgs['orderBy'] }
        : { orderBy?: PavementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PavementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPavementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pavement model
   */
  readonly fields: PavementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pavement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PavementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Location<T extends Pavement$LocationArgs<ExtArgs> = {}>(args?: Subset<T, Pavement$LocationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pavement model
   */
  interface PavementFieldRefs {
    readonly id: FieldRef<"Pavement", 'String'>
    readonly projectId: FieldRef<"Pavement", 'String'>
    readonly pavement: FieldRef<"Pavement", 'String'>
    readonly height: FieldRef<"Pavement", 'Float'>
    readonly area: FieldRef<"Pavement", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Pavement findUnique
   */
  export type PavementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pavement
     */
    select?: PavementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pavement
     */
    omit?: PavementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PavementInclude<ExtArgs> | null
    /**
     * Filter, which Pavement to fetch.
     */
    where: PavementWhereUniqueInput
  }

  /**
   * Pavement findUniqueOrThrow
   */
  export type PavementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pavement
     */
    select?: PavementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pavement
     */
    omit?: PavementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PavementInclude<ExtArgs> | null
    /**
     * Filter, which Pavement to fetch.
     */
    where: PavementWhereUniqueInput
  }

  /**
   * Pavement findFirst
   */
  export type PavementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pavement
     */
    select?: PavementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pavement
     */
    omit?: PavementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PavementInclude<ExtArgs> | null
    /**
     * Filter, which Pavement to fetch.
     */
    where?: PavementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pavements to fetch.
     */
    orderBy?: PavementOrderByWithRelationInput | PavementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pavements.
     */
    cursor?: PavementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pavements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pavements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pavements.
     */
    distinct?: PavementScalarFieldEnum | PavementScalarFieldEnum[]
  }

  /**
   * Pavement findFirstOrThrow
   */
  export type PavementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pavement
     */
    select?: PavementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pavement
     */
    omit?: PavementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PavementInclude<ExtArgs> | null
    /**
     * Filter, which Pavement to fetch.
     */
    where?: PavementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pavements to fetch.
     */
    orderBy?: PavementOrderByWithRelationInput | PavementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pavements.
     */
    cursor?: PavementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pavements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pavements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pavements.
     */
    distinct?: PavementScalarFieldEnum | PavementScalarFieldEnum[]
  }

  /**
   * Pavement findMany
   */
  export type PavementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pavement
     */
    select?: PavementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pavement
     */
    omit?: PavementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PavementInclude<ExtArgs> | null
    /**
     * Filter, which Pavements to fetch.
     */
    where?: PavementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pavements to fetch.
     */
    orderBy?: PavementOrderByWithRelationInput | PavementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pavements.
     */
    cursor?: PavementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pavements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pavements.
     */
    skip?: number
    distinct?: PavementScalarFieldEnum | PavementScalarFieldEnum[]
  }

  /**
   * Pavement create
   */
  export type PavementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pavement
     */
    select?: PavementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pavement
     */
    omit?: PavementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PavementInclude<ExtArgs> | null
    /**
     * The data needed to create a Pavement.
     */
    data: XOR<PavementCreateInput, PavementUncheckedCreateInput>
  }

  /**
   * Pavement createMany
   */
  export type PavementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pavements.
     */
    data: PavementCreateManyInput | PavementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pavement createManyAndReturn
   */
  export type PavementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pavement
     */
    select?: PavementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pavement
     */
    omit?: PavementOmit<ExtArgs> | null
    /**
     * The data used to create many Pavements.
     */
    data: PavementCreateManyInput | PavementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PavementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pavement update
   */
  export type PavementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pavement
     */
    select?: PavementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pavement
     */
    omit?: PavementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PavementInclude<ExtArgs> | null
    /**
     * The data needed to update a Pavement.
     */
    data: XOR<PavementUpdateInput, PavementUncheckedUpdateInput>
    /**
     * Choose, which Pavement to update.
     */
    where: PavementWhereUniqueInput
  }

  /**
   * Pavement updateMany
   */
  export type PavementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pavements.
     */
    data: XOR<PavementUpdateManyMutationInput, PavementUncheckedUpdateManyInput>
    /**
     * Filter which Pavements to update
     */
    where?: PavementWhereInput
    /**
     * Limit how many Pavements to update.
     */
    limit?: number
  }

  /**
   * Pavement updateManyAndReturn
   */
  export type PavementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pavement
     */
    select?: PavementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pavement
     */
    omit?: PavementOmit<ExtArgs> | null
    /**
     * The data used to update Pavements.
     */
    data: XOR<PavementUpdateManyMutationInput, PavementUncheckedUpdateManyInput>
    /**
     * Filter which Pavements to update
     */
    where?: PavementWhereInput
    /**
     * Limit how many Pavements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PavementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pavement upsert
   */
  export type PavementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pavement
     */
    select?: PavementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pavement
     */
    omit?: PavementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PavementInclude<ExtArgs> | null
    /**
     * The filter to search for the Pavement to update in case it exists.
     */
    where: PavementWhereUniqueInput
    /**
     * In case the Pavement found by the `where` argument doesn't exist, create a new Pavement with this data.
     */
    create: XOR<PavementCreateInput, PavementUncheckedCreateInput>
    /**
     * In case the Pavement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PavementUpdateInput, PavementUncheckedUpdateInput>
  }

  /**
   * Pavement delete
   */
  export type PavementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pavement
     */
    select?: PavementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pavement
     */
    omit?: PavementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PavementInclude<ExtArgs> | null
    /**
     * Filter which Pavement to delete.
     */
    where: PavementWhereUniqueInput
  }

  /**
   * Pavement deleteMany
   */
  export type PavementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pavements to delete
     */
    where?: PavementWhereInput
    /**
     * Limit how many Pavements to delete.
     */
    limit?: number
  }

  /**
   * Pavement.Location
   */
  export type Pavement$LocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Pavement without action
   */
  export type PavementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pavement
     */
    select?: PavementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pavement
     */
    omit?: PavementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PavementInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    height: number | null
  }

  export type LocationSumAggregateOutputType = {
    height: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    pavementId: string | null
    name: string | null
    locationType: $Enums.LocationType | null
    height: number | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    pavementId: string | null
    name: string | null
    locationType: $Enums.LocationType | null
    height: number | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    projectId: number
    pavementId: number
    name: number
    locationType: number
    height: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    height?: true
  }

  export type LocationSumAggregateInputType = {
    height?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    projectId?: true
    pavementId?: true
    name?: true
    locationType?: true
    height?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    projectId?: true
    pavementId?: true
    name?: true
    locationType?: true
    height?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    projectId?: true
    pavementId?: true
    name?: true
    locationType?: true
    height?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: string
    projectId: string
    pavementId: string | null
    name: string
    locationType: $Enums.LocationType
    height: number | null
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    pavementId?: boolean
    name?: boolean
    locationType?: boolean
    height?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    pavement?: boolean | Location$pavementArgs<ExtArgs>
    MaterialFinishing?: boolean | Location$MaterialFinishingArgs<ExtArgs>
    Photo?: boolean | Location$PhotoArgs<ExtArgs>
    Pathology?: boolean | Location$PathologyArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    pavementId?: boolean
    name?: boolean
    locationType?: boolean
    height?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    pavement?: boolean | Location$pavementArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    pavementId?: boolean
    name?: boolean
    locationType?: boolean
    height?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    pavement?: boolean | Location$pavementArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    projectId?: boolean
    pavementId?: boolean
    name?: boolean
    locationType?: boolean
    height?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "pavementId" | "name" | "locationType" | "height", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    pavement?: boolean | Location$pavementArgs<ExtArgs>
    MaterialFinishing?: boolean | Location$MaterialFinishingArgs<ExtArgs>
    Photo?: boolean | Location$PhotoArgs<ExtArgs>
    Pathology?: boolean | Location$PathologyArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    pavement?: boolean | Location$pavementArgs<ExtArgs>
  }
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    pavement?: boolean | Location$pavementArgs<ExtArgs>
  }

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      pavement: Prisma.$PavementPayload<ExtArgs> | null
      MaterialFinishing: Prisma.$MaterialFinishingPayload<ExtArgs>[]
      Photo: Prisma.$PhotoPayload<ExtArgs>[]
      Pathology: Prisma.$PathologyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      pavementId: string | null
      name: string
      locationType: $Enums.LocationType
      height: number | null
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pavement<T extends Location$pavementArgs<ExtArgs> = {}>(args?: Subset<T, Location$pavementArgs<ExtArgs>>): Prisma__PavementClient<$Result.GetResult<Prisma.$PavementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    MaterialFinishing<T extends Location$MaterialFinishingArgs<ExtArgs> = {}>(args?: Subset<T, Location$MaterialFinishingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialFinishingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Photo<T extends Location$PhotoArgs<ExtArgs> = {}>(args?: Subset<T, Location$PhotoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Pathology<T extends Location$PathologyArgs<ExtArgs> = {}>(args?: Subset<T, Location$PathologyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PathologyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'String'>
    readonly projectId: FieldRef<"Location", 'String'>
    readonly pavementId: FieldRef<"Location", 'String'>
    readonly name: FieldRef<"Location", 'String'>
    readonly locationType: FieldRef<"Location", 'LocationType'>
    readonly height: FieldRef<"Location", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.pavement
   */
  export type Location$pavementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pavement
     */
    select?: PavementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pavement
     */
    omit?: PavementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PavementInclude<ExtArgs> | null
    where?: PavementWhereInput
  }

  /**
   * Location.MaterialFinishing
   */
  export type Location$MaterialFinishingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFinishing
     */
    select?: MaterialFinishingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialFinishing
     */
    omit?: MaterialFinishingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFinishingInclude<ExtArgs> | null
    where?: MaterialFinishingWhereInput
    orderBy?: MaterialFinishingOrderByWithRelationInput | MaterialFinishingOrderByWithRelationInput[]
    cursor?: MaterialFinishingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialFinishingScalarFieldEnum | MaterialFinishingScalarFieldEnum[]
  }

  /**
   * Location.Photo
   */
  export type Location$PhotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    cursor?: PhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Location.Pathology
   */
  export type Location$PathologyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pathology
     */
    select?: PathologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pathology
     */
    omit?: PathologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyInclude<ExtArgs> | null
    where?: PathologyWhereInput
    orderBy?: PathologyOrderByWithRelationInput | PathologyOrderByWithRelationInput[]
    cursor?: PathologyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PathologyScalarFieldEnum | PathologyScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model MaterialFinishing
   */

  export type AggregateMaterialFinishing = {
    _count: MaterialFinishingCountAggregateOutputType | null
    _min: MaterialFinishingMinAggregateOutputType | null
    _max: MaterialFinishingMaxAggregateOutputType | null
  }

  export type MaterialFinishingMinAggregateOutputType = {
    id: string | null
    locationId: string | null
    surface: $Enums.SurfaceType | null
    materialFinishing: string | null
  }

  export type MaterialFinishingMaxAggregateOutputType = {
    id: string | null
    locationId: string | null
    surface: $Enums.SurfaceType | null
    materialFinishing: string | null
  }

  export type MaterialFinishingCountAggregateOutputType = {
    id: number
    locationId: number
    surface: number
    materialFinishing: number
    _all: number
  }


  export type MaterialFinishingMinAggregateInputType = {
    id?: true
    locationId?: true
    surface?: true
    materialFinishing?: true
  }

  export type MaterialFinishingMaxAggregateInputType = {
    id?: true
    locationId?: true
    surface?: true
    materialFinishing?: true
  }

  export type MaterialFinishingCountAggregateInputType = {
    id?: true
    locationId?: true
    surface?: true
    materialFinishing?: true
    _all?: true
  }

  export type MaterialFinishingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaterialFinishing to aggregate.
     */
    where?: MaterialFinishingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialFinishings to fetch.
     */
    orderBy?: MaterialFinishingOrderByWithRelationInput | MaterialFinishingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialFinishingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialFinishings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialFinishings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaterialFinishings
    **/
    _count?: true | MaterialFinishingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialFinishingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialFinishingMaxAggregateInputType
  }

  export type GetMaterialFinishingAggregateType<T extends MaterialFinishingAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterialFinishing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterialFinishing[P]>
      : GetScalarType<T[P], AggregateMaterialFinishing[P]>
  }




  export type MaterialFinishingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialFinishingWhereInput
    orderBy?: MaterialFinishingOrderByWithAggregationInput | MaterialFinishingOrderByWithAggregationInput[]
    by: MaterialFinishingScalarFieldEnum[] | MaterialFinishingScalarFieldEnum
    having?: MaterialFinishingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialFinishingCountAggregateInputType | true
    _min?: MaterialFinishingMinAggregateInputType
    _max?: MaterialFinishingMaxAggregateInputType
  }

  export type MaterialFinishingGroupByOutputType = {
    id: string
    locationId: string
    surface: $Enums.SurfaceType
    materialFinishing: string
    _count: MaterialFinishingCountAggregateOutputType | null
    _min: MaterialFinishingMinAggregateOutputType | null
    _max: MaterialFinishingMaxAggregateOutputType | null
  }

  type GetMaterialFinishingGroupByPayload<T extends MaterialFinishingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialFinishingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialFinishingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialFinishingGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialFinishingGroupByOutputType[P]>
        }
      >
    >


  export type MaterialFinishingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    surface?: boolean
    materialFinishing?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materialFinishing"]>

  export type MaterialFinishingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    surface?: boolean
    materialFinishing?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materialFinishing"]>

  export type MaterialFinishingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    surface?: boolean
    materialFinishing?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materialFinishing"]>

  export type MaterialFinishingSelectScalar = {
    id?: boolean
    locationId?: boolean
    surface?: boolean
    materialFinishing?: boolean
  }

  export type MaterialFinishingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locationId" | "surface" | "materialFinishing", ExtArgs["result"]["materialFinishing"]>
  export type MaterialFinishingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }
  export type MaterialFinishingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }
  export type MaterialFinishingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }

  export type $MaterialFinishingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaterialFinishing"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      locationId: string
      surface: $Enums.SurfaceType
      materialFinishing: string
    }, ExtArgs["result"]["materialFinishing"]>
    composites: {}
  }

  type MaterialFinishingGetPayload<S extends boolean | null | undefined | MaterialFinishingDefaultArgs> = $Result.GetResult<Prisma.$MaterialFinishingPayload, S>

  type MaterialFinishingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialFinishingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialFinishingCountAggregateInputType | true
    }

  export interface MaterialFinishingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaterialFinishing'], meta: { name: 'MaterialFinishing' } }
    /**
     * Find zero or one MaterialFinishing that matches the filter.
     * @param {MaterialFinishingFindUniqueArgs} args - Arguments to find a MaterialFinishing
     * @example
     * // Get one MaterialFinishing
     * const materialFinishing = await prisma.materialFinishing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialFinishingFindUniqueArgs>(args: SelectSubset<T, MaterialFinishingFindUniqueArgs<ExtArgs>>): Prisma__MaterialFinishingClient<$Result.GetResult<Prisma.$MaterialFinishingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaterialFinishing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialFinishingFindUniqueOrThrowArgs} args - Arguments to find a MaterialFinishing
     * @example
     * // Get one MaterialFinishing
     * const materialFinishing = await prisma.materialFinishing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialFinishingFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialFinishingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialFinishingClient<$Result.GetResult<Prisma.$MaterialFinishingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaterialFinishing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFinishingFindFirstArgs} args - Arguments to find a MaterialFinishing
     * @example
     * // Get one MaterialFinishing
     * const materialFinishing = await prisma.materialFinishing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialFinishingFindFirstArgs>(args?: SelectSubset<T, MaterialFinishingFindFirstArgs<ExtArgs>>): Prisma__MaterialFinishingClient<$Result.GetResult<Prisma.$MaterialFinishingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaterialFinishing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFinishingFindFirstOrThrowArgs} args - Arguments to find a MaterialFinishing
     * @example
     * // Get one MaterialFinishing
     * const materialFinishing = await prisma.materialFinishing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialFinishingFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialFinishingFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialFinishingClient<$Result.GetResult<Prisma.$MaterialFinishingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaterialFinishings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFinishingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaterialFinishings
     * const materialFinishings = await prisma.materialFinishing.findMany()
     * 
     * // Get first 10 MaterialFinishings
     * const materialFinishings = await prisma.materialFinishing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialFinishingWithIdOnly = await prisma.materialFinishing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialFinishingFindManyArgs>(args?: SelectSubset<T, MaterialFinishingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialFinishingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaterialFinishing.
     * @param {MaterialFinishingCreateArgs} args - Arguments to create a MaterialFinishing.
     * @example
     * // Create one MaterialFinishing
     * const MaterialFinishing = await prisma.materialFinishing.create({
     *   data: {
     *     // ... data to create a MaterialFinishing
     *   }
     * })
     * 
     */
    create<T extends MaterialFinishingCreateArgs>(args: SelectSubset<T, MaterialFinishingCreateArgs<ExtArgs>>): Prisma__MaterialFinishingClient<$Result.GetResult<Prisma.$MaterialFinishingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaterialFinishings.
     * @param {MaterialFinishingCreateManyArgs} args - Arguments to create many MaterialFinishings.
     * @example
     * // Create many MaterialFinishings
     * const materialFinishing = await prisma.materialFinishing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialFinishingCreateManyArgs>(args?: SelectSubset<T, MaterialFinishingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaterialFinishings and returns the data saved in the database.
     * @param {MaterialFinishingCreateManyAndReturnArgs} args - Arguments to create many MaterialFinishings.
     * @example
     * // Create many MaterialFinishings
     * const materialFinishing = await prisma.materialFinishing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaterialFinishings and only return the `id`
     * const materialFinishingWithIdOnly = await prisma.materialFinishing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialFinishingCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialFinishingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialFinishingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MaterialFinishing.
     * @param {MaterialFinishingDeleteArgs} args - Arguments to delete one MaterialFinishing.
     * @example
     * // Delete one MaterialFinishing
     * const MaterialFinishing = await prisma.materialFinishing.delete({
     *   where: {
     *     // ... filter to delete one MaterialFinishing
     *   }
     * })
     * 
     */
    delete<T extends MaterialFinishingDeleteArgs>(args: SelectSubset<T, MaterialFinishingDeleteArgs<ExtArgs>>): Prisma__MaterialFinishingClient<$Result.GetResult<Prisma.$MaterialFinishingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaterialFinishing.
     * @param {MaterialFinishingUpdateArgs} args - Arguments to update one MaterialFinishing.
     * @example
     * // Update one MaterialFinishing
     * const materialFinishing = await prisma.materialFinishing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialFinishingUpdateArgs>(args: SelectSubset<T, MaterialFinishingUpdateArgs<ExtArgs>>): Prisma__MaterialFinishingClient<$Result.GetResult<Prisma.$MaterialFinishingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaterialFinishings.
     * @param {MaterialFinishingDeleteManyArgs} args - Arguments to filter MaterialFinishings to delete.
     * @example
     * // Delete a few MaterialFinishings
     * const { count } = await prisma.materialFinishing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialFinishingDeleteManyArgs>(args?: SelectSubset<T, MaterialFinishingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaterialFinishings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFinishingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaterialFinishings
     * const materialFinishing = await prisma.materialFinishing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialFinishingUpdateManyArgs>(args: SelectSubset<T, MaterialFinishingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaterialFinishings and returns the data updated in the database.
     * @param {MaterialFinishingUpdateManyAndReturnArgs} args - Arguments to update many MaterialFinishings.
     * @example
     * // Update many MaterialFinishings
     * const materialFinishing = await prisma.materialFinishing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MaterialFinishings and only return the `id`
     * const materialFinishingWithIdOnly = await prisma.materialFinishing.updateManyAndReturn({
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
    updateManyAndReturn<T extends MaterialFinishingUpdateManyAndReturnArgs>(args: SelectSubset<T, MaterialFinishingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialFinishingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MaterialFinishing.
     * @param {MaterialFinishingUpsertArgs} args - Arguments to update or create a MaterialFinishing.
     * @example
     * // Update or create a MaterialFinishing
     * const materialFinishing = await prisma.materialFinishing.upsert({
     *   create: {
     *     // ... data to create a MaterialFinishing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaterialFinishing we want to update
     *   }
     * })
     */
    upsert<T extends MaterialFinishingUpsertArgs>(args: SelectSubset<T, MaterialFinishingUpsertArgs<ExtArgs>>): Prisma__MaterialFinishingClient<$Result.GetResult<Prisma.$MaterialFinishingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaterialFinishings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFinishingCountArgs} args - Arguments to filter MaterialFinishings to count.
     * @example
     * // Count the number of MaterialFinishings
     * const count = await prisma.materialFinishing.count({
     *   where: {
     *     // ... the filter for the MaterialFinishings we want to count
     *   }
     * })
    **/
    count<T extends MaterialFinishingCountArgs>(
      args?: Subset<T, MaterialFinishingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialFinishingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaterialFinishing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFinishingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialFinishingAggregateArgs>(args: Subset<T, MaterialFinishingAggregateArgs>): Prisma.PrismaPromise<GetMaterialFinishingAggregateType<T>>

    /**
     * Group by MaterialFinishing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFinishingGroupByArgs} args - Group by arguments.
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
      T extends MaterialFinishingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialFinishingGroupByArgs['orderBy'] }
        : { orderBy?: MaterialFinishingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaterialFinishingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialFinishingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaterialFinishing model
   */
  readonly fields: MaterialFinishingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaterialFinishing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialFinishingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MaterialFinishing model
   */
  interface MaterialFinishingFieldRefs {
    readonly id: FieldRef<"MaterialFinishing", 'String'>
    readonly locationId: FieldRef<"MaterialFinishing", 'String'>
    readonly surface: FieldRef<"MaterialFinishing", 'SurfaceType'>
    readonly materialFinishing: FieldRef<"MaterialFinishing", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MaterialFinishing findUnique
   */
  export type MaterialFinishingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFinishing
     */
    select?: MaterialFinishingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialFinishing
     */
    omit?: MaterialFinishingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFinishingInclude<ExtArgs> | null
    /**
     * Filter, which MaterialFinishing to fetch.
     */
    where: MaterialFinishingWhereUniqueInput
  }

  /**
   * MaterialFinishing findUniqueOrThrow
   */
  export type MaterialFinishingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFinishing
     */
    select?: MaterialFinishingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialFinishing
     */
    omit?: MaterialFinishingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFinishingInclude<ExtArgs> | null
    /**
     * Filter, which MaterialFinishing to fetch.
     */
    where: MaterialFinishingWhereUniqueInput
  }

  /**
   * MaterialFinishing findFirst
   */
  export type MaterialFinishingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFinishing
     */
    select?: MaterialFinishingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialFinishing
     */
    omit?: MaterialFinishingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFinishingInclude<ExtArgs> | null
    /**
     * Filter, which MaterialFinishing to fetch.
     */
    where?: MaterialFinishingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialFinishings to fetch.
     */
    orderBy?: MaterialFinishingOrderByWithRelationInput | MaterialFinishingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaterialFinishings.
     */
    cursor?: MaterialFinishingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialFinishings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialFinishings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaterialFinishings.
     */
    distinct?: MaterialFinishingScalarFieldEnum | MaterialFinishingScalarFieldEnum[]
  }

  /**
   * MaterialFinishing findFirstOrThrow
   */
  export type MaterialFinishingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFinishing
     */
    select?: MaterialFinishingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialFinishing
     */
    omit?: MaterialFinishingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFinishingInclude<ExtArgs> | null
    /**
     * Filter, which MaterialFinishing to fetch.
     */
    where?: MaterialFinishingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialFinishings to fetch.
     */
    orderBy?: MaterialFinishingOrderByWithRelationInput | MaterialFinishingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaterialFinishings.
     */
    cursor?: MaterialFinishingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialFinishings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialFinishings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaterialFinishings.
     */
    distinct?: MaterialFinishingScalarFieldEnum | MaterialFinishingScalarFieldEnum[]
  }

  /**
   * MaterialFinishing findMany
   */
  export type MaterialFinishingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFinishing
     */
    select?: MaterialFinishingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialFinishing
     */
    omit?: MaterialFinishingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFinishingInclude<ExtArgs> | null
    /**
     * Filter, which MaterialFinishings to fetch.
     */
    where?: MaterialFinishingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialFinishings to fetch.
     */
    orderBy?: MaterialFinishingOrderByWithRelationInput | MaterialFinishingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaterialFinishings.
     */
    cursor?: MaterialFinishingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialFinishings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialFinishings.
     */
    skip?: number
    distinct?: MaterialFinishingScalarFieldEnum | MaterialFinishingScalarFieldEnum[]
  }

  /**
   * MaterialFinishing create
   */
  export type MaterialFinishingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFinishing
     */
    select?: MaterialFinishingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialFinishing
     */
    omit?: MaterialFinishingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFinishingInclude<ExtArgs> | null
    /**
     * The data needed to create a MaterialFinishing.
     */
    data: XOR<MaterialFinishingCreateInput, MaterialFinishingUncheckedCreateInput>
  }

  /**
   * MaterialFinishing createMany
   */
  export type MaterialFinishingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaterialFinishings.
     */
    data: MaterialFinishingCreateManyInput | MaterialFinishingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaterialFinishing createManyAndReturn
   */
  export type MaterialFinishingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFinishing
     */
    select?: MaterialFinishingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialFinishing
     */
    omit?: MaterialFinishingOmit<ExtArgs> | null
    /**
     * The data used to create many MaterialFinishings.
     */
    data: MaterialFinishingCreateManyInput | MaterialFinishingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFinishingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaterialFinishing update
   */
  export type MaterialFinishingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFinishing
     */
    select?: MaterialFinishingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialFinishing
     */
    omit?: MaterialFinishingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFinishingInclude<ExtArgs> | null
    /**
     * The data needed to update a MaterialFinishing.
     */
    data: XOR<MaterialFinishingUpdateInput, MaterialFinishingUncheckedUpdateInput>
    /**
     * Choose, which MaterialFinishing to update.
     */
    where: MaterialFinishingWhereUniqueInput
  }

  /**
   * MaterialFinishing updateMany
   */
  export type MaterialFinishingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaterialFinishings.
     */
    data: XOR<MaterialFinishingUpdateManyMutationInput, MaterialFinishingUncheckedUpdateManyInput>
    /**
     * Filter which MaterialFinishings to update
     */
    where?: MaterialFinishingWhereInput
    /**
     * Limit how many MaterialFinishings to update.
     */
    limit?: number
  }

  /**
   * MaterialFinishing updateManyAndReturn
   */
  export type MaterialFinishingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFinishing
     */
    select?: MaterialFinishingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialFinishing
     */
    omit?: MaterialFinishingOmit<ExtArgs> | null
    /**
     * The data used to update MaterialFinishings.
     */
    data: XOR<MaterialFinishingUpdateManyMutationInput, MaterialFinishingUncheckedUpdateManyInput>
    /**
     * Filter which MaterialFinishings to update
     */
    where?: MaterialFinishingWhereInput
    /**
     * Limit how many MaterialFinishings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFinishingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaterialFinishing upsert
   */
  export type MaterialFinishingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFinishing
     */
    select?: MaterialFinishingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialFinishing
     */
    omit?: MaterialFinishingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFinishingInclude<ExtArgs> | null
    /**
     * The filter to search for the MaterialFinishing to update in case it exists.
     */
    where: MaterialFinishingWhereUniqueInput
    /**
     * In case the MaterialFinishing found by the `where` argument doesn't exist, create a new MaterialFinishing with this data.
     */
    create: XOR<MaterialFinishingCreateInput, MaterialFinishingUncheckedCreateInput>
    /**
     * In case the MaterialFinishing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialFinishingUpdateInput, MaterialFinishingUncheckedUpdateInput>
  }

  /**
   * MaterialFinishing delete
   */
  export type MaterialFinishingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFinishing
     */
    select?: MaterialFinishingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialFinishing
     */
    omit?: MaterialFinishingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFinishingInclude<ExtArgs> | null
    /**
     * Filter which MaterialFinishing to delete.
     */
    where: MaterialFinishingWhereUniqueInput
  }

  /**
   * MaterialFinishing deleteMany
   */
  export type MaterialFinishingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaterialFinishings to delete
     */
    where?: MaterialFinishingWhereInput
    /**
     * Limit how many MaterialFinishings to delete.
     */
    limit?: number
  }

  /**
   * MaterialFinishing without action
   */
  export type MaterialFinishingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialFinishing
     */
    select?: MaterialFinishingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialFinishing
     */
    omit?: MaterialFinishingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialFinishingInclude<ExtArgs> | null
  }


  /**
   * Model Photo
   */

  export type AggregatePhoto = {
    _count: PhotoCountAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  export type PhotoMinAggregateOutputType = {
    id: string | null
    locationId: string | null
    filePath: string | null
    selectedForPdf: boolean | null
  }

  export type PhotoMaxAggregateOutputType = {
    id: string | null
    locationId: string | null
    filePath: string | null
    selectedForPdf: boolean | null
  }

  export type PhotoCountAggregateOutputType = {
    id: number
    locationId: number
    filePath: number
    selectedForPdf: number
    _all: number
  }


  export type PhotoMinAggregateInputType = {
    id?: true
    locationId?: true
    filePath?: true
    selectedForPdf?: true
  }

  export type PhotoMaxAggregateInputType = {
    id?: true
    locationId?: true
    filePath?: true
    selectedForPdf?: true
  }

  export type PhotoCountAggregateInputType = {
    id?: true
    locationId?: true
    filePath?: true
    selectedForPdf?: true
    _all?: true
  }

  export type PhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photo to aggregate.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photos
    **/
    _count?: true | PhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoMaxAggregateInputType
  }

  export type GetPhotoAggregateType<T extends PhotoAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoto[P]>
      : GetScalarType<T[P], AggregatePhoto[P]>
  }




  export type PhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithAggregationInput | PhotoOrderByWithAggregationInput[]
    by: PhotoScalarFieldEnum[] | PhotoScalarFieldEnum
    having?: PhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCountAggregateInputType | true
    _min?: PhotoMinAggregateInputType
    _max?: PhotoMaxAggregateInputType
  }

  export type PhotoGroupByOutputType = {
    id: string
    locationId: string
    filePath: string
    selectedForPdf: boolean
    _count: PhotoCountAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  type GetPhotoGroupByPayload<T extends PhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoGroupByOutputType[P]>
        }
      >
    >


  export type PhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    filePath?: boolean
    selectedForPdf?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    filePath?: boolean
    selectedForPdf?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    filePath?: boolean
    selectedForPdf?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectScalar = {
    id?: boolean
    locationId?: boolean
    filePath?: boolean
    selectedForPdf?: boolean
  }

  export type PhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locationId" | "filePath" | "selectedForPdf", ExtArgs["result"]["photo"]>
  export type PhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }
  export type PhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }
  export type PhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }

  export type $PhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Photo"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      locationId: string
      filePath: string
      selectedForPdf: boolean
    }, ExtArgs["result"]["photo"]>
    composites: {}
  }

  type PhotoGetPayload<S extends boolean | null | undefined | PhotoDefaultArgs> = $Result.GetResult<Prisma.$PhotoPayload, S>

  type PhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotoCountAggregateInputType | true
    }

  export interface PhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Photo'], meta: { name: 'Photo' } }
    /**
     * Find zero or one Photo that matches the filter.
     * @param {PhotoFindUniqueArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoFindUniqueArgs>(args: SelectSubset<T, PhotoFindUniqueArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Photo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoFindUniqueOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoFindFirstArgs>(args?: SelectSubset<T, PhotoFindFirstArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photo.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoWithIdOnly = await prisma.photo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoFindManyArgs>(args?: SelectSubset<T, PhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Photo.
     * @param {PhotoCreateArgs} args - Arguments to create a Photo.
     * @example
     * // Create one Photo
     * const Photo = await prisma.photo.create({
     *   data: {
     *     // ... data to create a Photo
     *   }
     * })
     * 
     */
    create<T extends PhotoCreateArgs>(args: SelectSubset<T, PhotoCreateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Photos.
     * @param {PhotoCreateManyArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoCreateManyArgs>(args?: SelectSubset<T, PhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Photos and returns the data saved in the database.
     * @param {PhotoCreateManyAndReturnArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, PhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Photo.
     * @param {PhotoDeleteArgs} args - Arguments to delete one Photo.
     * @example
     * // Delete one Photo
     * const Photo = await prisma.photo.delete({
     *   where: {
     *     // ... filter to delete one Photo
     *   }
     * })
     * 
     */
    delete<T extends PhotoDeleteArgs>(args: SelectSubset<T, PhotoDeleteArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Photo.
     * @param {PhotoUpdateArgs} args - Arguments to update one Photo.
     * @example
     * // Update one Photo
     * const photo = await prisma.photo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoUpdateArgs>(args: SelectSubset<T, PhotoUpdateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Photos.
     * @param {PhotoDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoDeleteManyArgs>(args?: SelectSubset<T, PhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoUpdateManyArgs>(args: SelectSubset<T, PhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos and returns the data updated in the database.
     * @param {PhotoUpdateManyAndReturnArgs} args - Arguments to update many Photos.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.updateManyAndReturn({
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
    updateManyAndReturn<T extends PhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, PhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Photo.
     * @param {PhotoUpsertArgs} args - Arguments to update or create a Photo.
     * @example
     * // Update or create a Photo
     * const photo = await prisma.photo.upsert({
     *   create: {
     *     // ... data to create a Photo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photo we want to update
     *   }
     * })
     */
    upsert<T extends PhotoUpsertArgs>(args: SelectSubset<T, PhotoUpsertArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photo.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends PhotoCountArgs>(
      args?: Subset<T, PhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhotoAggregateArgs>(args: Subset<T, PhotoAggregateArgs>): Prisma.PrismaPromise<GetPhotoAggregateType<T>>

    /**
     * Group by Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGroupByArgs} args - Group by arguments.
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
      T extends PhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoGroupByArgs['orderBy'] }
        : { orderBy?: PhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Photo model
   */
  readonly fields: PhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Photo model
   */
  interface PhotoFieldRefs {
    readonly id: FieldRef<"Photo", 'String'>
    readonly locationId: FieldRef<"Photo", 'String'>
    readonly filePath: FieldRef<"Photo", 'String'>
    readonly selectedForPdf: FieldRef<"Photo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Photo findUnique
   */
  export type PhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findUniqueOrThrow
   */
  export type PhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findFirst
   */
  export type PhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findFirstOrThrow
   */
  export type PhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findMany
   */
  export type PhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo create
   */
  export type PhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Photo.
     */
    data: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
  }

  /**
   * Photo createMany
   */
  export type PhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Photo createManyAndReturn
   */
  export type PhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Photo update
   */
  export type PhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Photo.
     */
    data: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
    /**
     * Choose, which Photo to update.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo updateMany
   */
  export type PhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
  }

  /**
   * Photo updateManyAndReturn
   */
  export type PhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Photo upsert
   */
  export type PhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Photo to update in case it exists.
     */
    where: PhotoWhereUniqueInput
    /**
     * In case the Photo found by the `where` argument doesn't exist, create a new Photo with this data.
     */
    create: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
    /**
     * In case the Photo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
  }

  /**
   * Photo delete
   */
  export type PhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter which Photo to delete.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo deleteMany
   */
  export type PhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photos to delete
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to delete.
     */
    limit?: number
  }

  /**
   * Photo without action
   */
  export type PhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
  }


  /**
   * Model Pathology
   */

  export type AggregatePathology = {
    _count: PathologyCountAggregateOutputType | null
    _min: PathologyMinAggregateOutputType | null
    _max: PathologyMaxAggregateOutputType | null
  }

  export type PathologyMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    locationId: string | null
    referenceLocation: string | null
    title: string | null
    description: string | null
    recordDate: Date | null
  }

  export type PathologyMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    locationId: string | null
    referenceLocation: string | null
    title: string | null
    description: string | null
    recordDate: Date | null
  }

  export type PathologyCountAggregateOutputType = {
    id: number
    projectId: number
    locationId: number
    referenceLocation: number
    title: number
    description: number
    recordDate: number
    _all: number
  }


  export type PathologyMinAggregateInputType = {
    id?: true
    projectId?: true
    locationId?: true
    referenceLocation?: true
    title?: true
    description?: true
    recordDate?: true
  }

  export type PathologyMaxAggregateInputType = {
    id?: true
    projectId?: true
    locationId?: true
    referenceLocation?: true
    title?: true
    description?: true
    recordDate?: true
  }

  export type PathologyCountAggregateInputType = {
    id?: true
    projectId?: true
    locationId?: true
    referenceLocation?: true
    title?: true
    description?: true
    recordDate?: true
    _all?: true
  }

  export type PathologyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pathology to aggregate.
     */
    where?: PathologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pathologies to fetch.
     */
    orderBy?: PathologyOrderByWithRelationInput | PathologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PathologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pathologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pathologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pathologies
    **/
    _count?: true | PathologyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PathologyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PathologyMaxAggregateInputType
  }

  export type GetPathologyAggregateType<T extends PathologyAggregateArgs> = {
        [P in keyof T & keyof AggregatePathology]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePathology[P]>
      : GetScalarType<T[P], AggregatePathology[P]>
  }




  export type PathologyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PathologyWhereInput
    orderBy?: PathologyOrderByWithAggregationInput | PathologyOrderByWithAggregationInput[]
    by: PathologyScalarFieldEnum[] | PathologyScalarFieldEnum
    having?: PathologyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PathologyCountAggregateInputType | true
    _min?: PathologyMinAggregateInputType
    _max?: PathologyMaxAggregateInputType
  }

  export type PathologyGroupByOutputType = {
    id: string
    projectId: string
    locationId: string
    referenceLocation: string
    title: string
    description: string
    recordDate: Date
    _count: PathologyCountAggregateOutputType | null
    _min: PathologyMinAggregateOutputType | null
    _max: PathologyMaxAggregateOutputType | null
  }

  type GetPathologyGroupByPayload<T extends PathologyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PathologyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PathologyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PathologyGroupByOutputType[P]>
            : GetScalarType<T[P], PathologyGroupByOutputType[P]>
        }
      >
    >


  export type PathologySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    locationId?: boolean
    referenceLocation?: boolean
    title?: boolean
    description?: boolean
    recordDate?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    PathologyPhoto?: boolean | Pathology$PathologyPhotoArgs<ExtArgs>
    _count?: boolean | PathologyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pathology"]>

  export type PathologySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    locationId?: boolean
    referenceLocation?: boolean
    title?: boolean
    description?: boolean
    recordDate?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pathology"]>

  export type PathologySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    locationId?: boolean
    referenceLocation?: boolean
    title?: boolean
    description?: boolean
    recordDate?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pathology"]>

  export type PathologySelectScalar = {
    id?: boolean
    projectId?: boolean
    locationId?: boolean
    referenceLocation?: boolean
    title?: boolean
    description?: boolean
    recordDate?: boolean
  }

  export type PathologyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "locationId" | "referenceLocation" | "title" | "description" | "recordDate", ExtArgs["result"]["pathology"]>
  export type PathologyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    PathologyPhoto?: boolean | Pathology$PathologyPhotoArgs<ExtArgs>
    _count?: boolean | PathologyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PathologyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }
  export type PathologyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }

  export type $PathologyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pathology"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      location: Prisma.$LocationPayload<ExtArgs>
      PathologyPhoto: Prisma.$PathologyPhotoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      locationId: string
      referenceLocation: string
      title: string
      description: string
      recordDate: Date
    }, ExtArgs["result"]["pathology"]>
    composites: {}
  }

  type PathologyGetPayload<S extends boolean | null | undefined | PathologyDefaultArgs> = $Result.GetResult<Prisma.$PathologyPayload, S>

  type PathologyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PathologyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PathologyCountAggregateInputType | true
    }

  export interface PathologyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pathology'], meta: { name: 'Pathology' } }
    /**
     * Find zero or one Pathology that matches the filter.
     * @param {PathologyFindUniqueArgs} args - Arguments to find a Pathology
     * @example
     * // Get one Pathology
     * const pathology = await prisma.pathology.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PathologyFindUniqueArgs>(args: SelectSubset<T, PathologyFindUniqueArgs<ExtArgs>>): Prisma__PathologyClient<$Result.GetResult<Prisma.$PathologyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pathology that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PathologyFindUniqueOrThrowArgs} args - Arguments to find a Pathology
     * @example
     * // Get one Pathology
     * const pathology = await prisma.pathology.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PathologyFindUniqueOrThrowArgs>(args: SelectSubset<T, PathologyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PathologyClient<$Result.GetResult<Prisma.$PathologyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pathology that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathologyFindFirstArgs} args - Arguments to find a Pathology
     * @example
     * // Get one Pathology
     * const pathology = await prisma.pathology.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PathologyFindFirstArgs>(args?: SelectSubset<T, PathologyFindFirstArgs<ExtArgs>>): Prisma__PathologyClient<$Result.GetResult<Prisma.$PathologyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pathology that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathologyFindFirstOrThrowArgs} args - Arguments to find a Pathology
     * @example
     * // Get one Pathology
     * const pathology = await prisma.pathology.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PathologyFindFirstOrThrowArgs>(args?: SelectSubset<T, PathologyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PathologyClient<$Result.GetResult<Prisma.$PathologyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pathologies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathologyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pathologies
     * const pathologies = await prisma.pathology.findMany()
     * 
     * // Get first 10 Pathologies
     * const pathologies = await prisma.pathology.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pathologyWithIdOnly = await prisma.pathology.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PathologyFindManyArgs>(args?: SelectSubset<T, PathologyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PathologyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pathology.
     * @param {PathologyCreateArgs} args - Arguments to create a Pathology.
     * @example
     * // Create one Pathology
     * const Pathology = await prisma.pathology.create({
     *   data: {
     *     // ... data to create a Pathology
     *   }
     * })
     * 
     */
    create<T extends PathologyCreateArgs>(args: SelectSubset<T, PathologyCreateArgs<ExtArgs>>): Prisma__PathologyClient<$Result.GetResult<Prisma.$PathologyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pathologies.
     * @param {PathologyCreateManyArgs} args - Arguments to create many Pathologies.
     * @example
     * // Create many Pathologies
     * const pathology = await prisma.pathology.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PathologyCreateManyArgs>(args?: SelectSubset<T, PathologyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pathologies and returns the data saved in the database.
     * @param {PathologyCreateManyAndReturnArgs} args - Arguments to create many Pathologies.
     * @example
     * // Create many Pathologies
     * const pathology = await prisma.pathology.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pathologies and only return the `id`
     * const pathologyWithIdOnly = await prisma.pathology.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PathologyCreateManyAndReturnArgs>(args?: SelectSubset<T, PathologyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PathologyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pathology.
     * @param {PathologyDeleteArgs} args - Arguments to delete one Pathology.
     * @example
     * // Delete one Pathology
     * const Pathology = await prisma.pathology.delete({
     *   where: {
     *     // ... filter to delete one Pathology
     *   }
     * })
     * 
     */
    delete<T extends PathologyDeleteArgs>(args: SelectSubset<T, PathologyDeleteArgs<ExtArgs>>): Prisma__PathologyClient<$Result.GetResult<Prisma.$PathologyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pathology.
     * @param {PathologyUpdateArgs} args - Arguments to update one Pathology.
     * @example
     * // Update one Pathology
     * const pathology = await prisma.pathology.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PathologyUpdateArgs>(args: SelectSubset<T, PathologyUpdateArgs<ExtArgs>>): Prisma__PathologyClient<$Result.GetResult<Prisma.$PathologyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pathologies.
     * @param {PathologyDeleteManyArgs} args - Arguments to filter Pathologies to delete.
     * @example
     * // Delete a few Pathologies
     * const { count } = await prisma.pathology.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PathologyDeleteManyArgs>(args?: SelectSubset<T, PathologyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pathologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathologyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pathologies
     * const pathology = await prisma.pathology.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PathologyUpdateManyArgs>(args: SelectSubset<T, PathologyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pathologies and returns the data updated in the database.
     * @param {PathologyUpdateManyAndReturnArgs} args - Arguments to update many Pathologies.
     * @example
     * // Update many Pathologies
     * const pathology = await prisma.pathology.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pathologies and only return the `id`
     * const pathologyWithIdOnly = await prisma.pathology.updateManyAndReturn({
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
    updateManyAndReturn<T extends PathologyUpdateManyAndReturnArgs>(args: SelectSubset<T, PathologyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PathologyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pathology.
     * @param {PathologyUpsertArgs} args - Arguments to update or create a Pathology.
     * @example
     * // Update or create a Pathology
     * const pathology = await prisma.pathology.upsert({
     *   create: {
     *     // ... data to create a Pathology
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pathology we want to update
     *   }
     * })
     */
    upsert<T extends PathologyUpsertArgs>(args: SelectSubset<T, PathologyUpsertArgs<ExtArgs>>): Prisma__PathologyClient<$Result.GetResult<Prisma.$PathologyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pathologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathologyCountArgs} args - Arguments to filter Pathologies to count.
     * @example
     * // Count the number of Pathologies
     * const count = await prisma.pathology.count({
     *   where: {
     *     // ... the filter for the Pathologies we want to count
     *   }
     * })
    **/
    count<T extends PathologyCountArgs>(
      args?: Subset<T, PathologyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PathologyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pathology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathologyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PathologyAggregateArgs>(args: Subset<T, PathologyAggregateArgs>): Prisma.PrismaPromise<GetPathologyAggregateType<T>>

    /**
     * Group by Pathology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathologyGroupByArgs} args - Group by arguments.
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
      T extends PathologyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PathologyGroupByArgs['orderBy'] }
        : { orderBy?: PathologyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PathologyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPathologyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pathology model
   */
  readonly fields: PathologyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pathology.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PathologyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    PathologyPhoto<T extends Pathology$PathologyPhotoArgs<ExtArgs> = {}>(args?: Subset<T, Pathology$PathologyPhotoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PathologyPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pathology model
   */
  interface PathologyFieldRefs {
    readonly id: FieldRef<"Pathology", 'String'>
    readonly projectId: FieldRef<"Pathology", 'String'>
    readonly locationId: FieldRef<"Pathology", 'String'>
    readonly referenceLocation: FieldRef<"Pathology", 'String'>
    readonly title: FieldRef<"Pathology", 'String'>
    readonly description: FieldRef<"Pathology", 'String'>
    readonly recordDate: FieldRef<"Pathology", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pathology findUnique
   */
  export type PathologyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pathology
     */
    select?: PathologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pathology
     */
    omit?: PathologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyInclude<ExtArgs> | null
    /**
     * Filter, which Pathology to fetch.
     */
    where: PathologyWhereUniqueInput
  }

  /**
   * Pathology findUniqueOrThrow
   */
  export type PathologyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pathology
     */
    select?: PathologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pathology
     */
    omit?: PathologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyInclude<ExtArgs> | null
    /**
     * Filter, which Pathology to fetch.
     */
    where: PathologyWhereUniqueInput
  }

  /**
   * Pathology findFirst
   */
  export type PathologyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pathology
     */
    select?: PathologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pathology
     */
    omit?: PathologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyInclude<ExtArgs> | null
    /**
     * Filter, which Pathology to fetch.
     */
    where?: PathologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pathologies to fetch.
     */
    orderBy?: PathologyOrderByWithRelationInput | PathologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pathologies.
     */
    cursor?: PathologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pathologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pathologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pathologies.
     */
    distinct?: PathologyScalarFieldEnum | PathologyScalarFieldEnum[]
  }

  /**
   * Pathology findFirstOrThrow
   */
  export type PathologyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pathology
     */
    select?: PathologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pathology
     */
    omit?: PathologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyInclude<ExtArgs> | null
    /**
     * Filter, which Pathology to fetch.
     */
    where?: PathologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pathologies to fetch.
     */
    orderBy?: PathologyOrderByWithRelationInput | PathologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pathologies.
     */
    cursor?: PathologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pathologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pathologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pathologies.
     */
    distinct?: PathologyScalarFieldEnum | PathologyScalarFieldEnum[]
  }

  /**
   * Pathology findMany
   */
  export type PathologyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pathology
     */
    select?: PathologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pathology
     */
    omit?: PathologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyInclude<ExtArgs> | null
    /**
     * Filter, which Pathologies to fetch.
     */
    where?: PathologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pathologies to fetch.
     */
    orderBy?: PathologyOrderByWithRelationInput | PathologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pathologies.
     */
    cursor?: PathologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pathologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pathologies.
     */
    skip?: number
    distinct?: PathologyScalarFieldEnum | PathologyScalarFieldEnum[]
  }

  /**
   * Pathology create
   */
  export type PathologyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pathology
     */
    select?: PathologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pathology
     */
    omit?: PathologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyInclude<ExtArgs> | null
    /**
     * The data needed to create a Pathology.
     */
    data: XOR<PathologyCreateInput, PathologyUncheckedCreateInput>
  }

  /**
   * Pathology createMany
   */
  export type PathologyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pathologies.
     */
    data: PathologyCreateManyInput | PathologyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pathology createManyAndReturn
   */
  export type PathologyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pathology
     */
    select?: PathologySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pathology
     */
    omit?: PathologyOmit<ExtArgs> | null
    /**
     * The data used to create many Pathologies.
     */
    data: PathologyCreateManyInput | PathologyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pathology update
   */
  export type PathologyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pathology
     */
    select?: PathologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pathology
     */
    omit?: PathologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyInclude<ExtArgs> | null
    /**
     * The data needed to update a Pathology.
     */
    data: XOR<PathologyUpdateInput, PathologyUncheckedUpdateInput>
    /**
     * Choose, which Pathology to update.
     */
    where: PathologyWhereUniqueInput
  }

  /**
   * Pathology updateMany
   */
  export type PathologyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pathologies.
     */
    data: XOR<PathologyUpdateManyMutationInput, PathologyUncheckedUpdateManyInput>
    /**
     * Filter which Pathologies to update
     */
    where?: PathologyWhereInput
    /**
     * Limit how many Pathologies to update.
     */
    limit?: number
  }

  /**
   * Pathology updateManyAndReturn
   */
  export type PathologyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pathology
     */
    select?: PathologySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pathology
     */
    omit?: PathologyOmit<ExtArgs> | null
    /**
     * The data used to update Pathologies.
     */
    data: XOR<PathologyUpdateManyMutationInput, PathologyUncheckedUpdateManyInput>
    /**
     * Filter which Pathologies to update
     */
    where?: PathologyWhereInput
    /**
     * Limit how many Pathologies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pathology upsert
   */
  export type PathologyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pathology
     */
    select?: PathologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pathology
     */
    omit?: PathologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyInclude<ExtArgs> | null
    /**
     * The filter to search for the Pathology to update in case it exists.
     */
    where: PathologyWhereUniqueInput
    /**
     * In case the Pathology found by the `where` argument doesn't exist, create a new Pathology with this data.
     */
    create: XOR<PathologyCreateInput, PathologyUncheckedCreateInput>
    /**
     * In case the Pathology was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PathologyUpdateInput, PathologyUncheckedUpdateInput>
  }

  /**
   * Pathology delete
   */
  export type PathologyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pathology
     */
    select?: PathologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pathology
     */
    omit?: PathologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyInclude<ExtArgs> | null
    /**
     * Filter which Pathology to delete.
     */
    where: PathologyWhereUniqueInput
  }

  /**
   * Pathology deleteMany
   */
  export type PathologyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pathologies to delete
     */
    where?: PathologyWhereInput
    /**
     * Limit how many Pathologies to delete.
     */
    limit?: number
  }

  /**
   * Pathology.PathologyPhoto
   */
  export type Pathology$PathologyPhotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathologyPhoto
     */
    select?: PathologyPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PathologyPhoto
     */
    omit?: PathologyPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyPhotoInclude<ExtArgs> | null
    where?: PathologyPhotoWhereInput
    orderBy?: PathologyPhotoOrderByWithRelationInput | PathologyPhotoOrderByWithRelationInput[]
    cursor?: PathologyPhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PathologyPhotoScalarFieldEnum | PathologyPhotoScalarFieldEnum[]
  }

  /**
   * Pathology without action
   */
  export type PathologyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pathology
     */
    select?: PathologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pathology
     */
    omit?: PathologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyInclude<ExtArgs> | null
  }


  /**
   * Model PathologyPhoto
   */

  export type AggregatePathologyPhoto = {
    _count: PathologyPhotoCountAggregateOutputType | null
    _min: PathologyPhotoMinAggregateOutputType | null
    _max: PathologyPhotoMaxAggregateOutputType | null
  }

  export type PathologyPhotoMinAggregateOutputType = {
    id: string | null
    pathologyId: string | null
    filePath: string | null
  }

  export type PathologyPhotoMaxAggregateOutputType = {
    id: string | null
    pathologyId: string | null
    filePath: string | null
  }

  export type PathologyPhotoCountAggregateOutputType = {
    id: number
    pathologyId: number
    filePath: number
    _all: number
  }


  export type PathologyPhotoMinAggregateInputType = {
    id?: true
    pathologyId?: true
    filePath?: true
  }

  export type PathologyPhotoMaxAggregateInputType = {
    id?: true
    pathologyId?: true
    filePath?: true
  }

  export type PathologyPhotoCountAggregateInputType = {
    id?: true
    pathologyId?: true
    filePath?: true
    _all?: true
  }

  export type PathologyPhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PathologyPhoto to aggregate.
     */
    where?: PathologyPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PathologyPhotos to fetch.
     */
    orderBy?: PathologyPhotoOrderByWithRelationInput | PathologyPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PathologyPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PathologyPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PathologyPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PathologyPhotos
    **/
    _count?: true | PathologyPhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PathologyPhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PathologyPhotoMaxAggregateInputType
  }

  export type GetPathologyPhotoAggregateType<T extends PathologyPhotoAggregateArgs> = {
        [P in keyof T & keyof AggregatePathologyPhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePathologyPhoto[P]>
      : GetScalarType<T[P], AggregatePathologyPhoto[P]>
  }




  export type PathologyPhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PathologyPhotoWhereInput
    orderBy?: PathologyPhotoOrderByWithAggregationInput | PathologyPhotoOrderByWithAggregationInput[]
    by: PathologyPhotoScalarFieldEnum[] | PathologyPhotoScalarFieldEnum
    having?: PathologyPhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PathologyPhotoCountAggregateInputType | true
    _min?: PathologyPhotoMinAggregateInputType
    _max?: PathologyPhotoMaxAggregateInputType
  }

  export type PathologyPhotoGroupByOutputType = {
    id: string
    pathologyId: string
    filePath: string
    _count: PathologyPhotoCountAggregateOutputType | null
    _min: PathologyPhotoMinAggregateOutputType | null
    _max: PathologyPhotoMaxAggregateOutputType | null
  }

  type GetPathologyPhotoGroupByPayload<T extends PathologyPhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PathologyPhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PathologyPhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PathologyPhotoGroupByOutputType[P]>
            : GetScalarType<T[P], PathologyPhotoGroupByOutputType[P]>
        }
      >
    >


  export type PathologyPhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pathologyId?: boolean
    filePath?: boolean
    pathology?: boolean | PathologyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pathologyPhoto"]>

  export type PathologyPhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pathologyId?: boolean
    filePath?: boolean
    pathology?: boolean | PathologyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pathologyPhoto"]>

  export type PathologyPhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pathologyId?: boolean
    filePath?: boolean
    pathology?: boolean | PathologyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pathologyPhoto"]>

  export type PathologyPhotoSelectScalar = {
    id?: boolean
    pathologyId?: boolean
    filePath?: boolean
  }

  export type PathologyPhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pathologyId" | "filePath", ExtArgs["result"]["pathologyPhoto"]>
  export type PathologyPhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pathology?: boolean | PathologyDefaultArgs<ExtArgs>
  }
  export type PathologyPhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pathology?: boolean | PathologyDefaultArgs<ExtArgs>
  }
  export type PathologyPhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pathology?: boolean | PathologyDefaultArgs<ExtArgs>
  }

  export type $PathologyPhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PathologyPhoto"
    objects: {
      pathology: Prisma.$PathologyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pathologyId: string
      filePath: string
    }, ExtArgs["result"]["pathologyPhoto"]>
    composites: {}
  }

  type PathologyPhotoGetPayload<S extends boolean | null | undefined | PathologyPhotoDefaultArgs> = $Result.GetResult<Prisma.$PathologyPhotoPayload, S>

  type PathologyPhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PathologyPhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PathologyPhotoCountAggregateInputType | true
    }

  export interface PathologyPhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PathologyPhoto'], meta: { name: 'PathologyPhoto' } }
    /**
     * Find zero or one PathologyPhoto that matches the filter.
     * @param {PathologyPhotoFindUniqueArgs} args - Arguments to find a PathologyPhoto
     * @example
     * // Get one PathologyPhoto
     * const pathologyPhoto = await prisma.pathologyPhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PathologyPhotoFindUniqueArgs>(args: SelectSubset<T, PathologyPhotoFindUniqueArgs<ExtArgs>>): Prisma__PathologyPhotoClient<$Result.GetResult<Prisma.$PathologyPhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PathologyPhoto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PathologyPhotoFindUniqueOrThrowArgs} args - Arguments to find a PathologyPhoto
     * @example
     * // Get one PathologyPhoto
     * const pathologyPhoto = await prisma.pathologyPhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PathologyPhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, PathologyPhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PathologyPhotoClient<$Result.GetResult<Prisma.$PathologyPhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PathologyPhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathologyPhotoFindFirstArgs} args - Arguments to find a PathologyPhoto
     * @example
     * // Get one PathologyPhoto
     * const pathologyPhoto = await prisma.pathologyPhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PathologyPhotoFindFirstArgs>(args?: SelectSubset<T, PathologyPhotoFindFirstArgs<ExtArgs>>): Prisma__PathologyPhotoClient<$Result.GetResult<Prisma.$PathologyPhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PathologyPhoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathologyPhotoFindFirstOrThrowArgs} args - Arguments to find a PathologyPhoto
     * @example
     * // Get one PathologyPhoto
     * const pathologyPhoto = await prisma.pathologyPhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PathologyPhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, PathologyPhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PathologyPhotoClient<$Result.GetResult<Prisma.$PathologyPhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PathologyPhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathologyPhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PathologyPhotos
     * const pathologyPhotos = await prisma.pathologyPhoto.findMany()
     * 
     * // Get first 10 PathologyPhotos
     * const pathologyPhotos = await prisma.pathologyPhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pathologyPhotoWithIdOnly = await prisma.pathologyPhoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PathologyPhotoFindManyArgs>(args?: SelectSubset<T, PathologyPhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PathologyPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PathologyPhoto.
     * @param {PathologyPhotoCreateArgs} args - Arguments to create a PathologyPhoto.
     * @example
     * // Create one PathologyPhoto
     * const PathologyPhoto = await prisma.pathologyPhoto.create({
     *   data: {
     *     // ... data to create a PathologyPhoto
     *   }
     * })
     * 
     */
    create<T extends PathologyPhotoCreateArgs>(args: SelectSubset<T, PathologyPhotoCreateArgs<ExtArgs>>): Prisma__PathologyPhotoClient<$Result.GetResult<Prisma.$PathologyPhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PathologyPhotos.
     * @param {PathologyPhotoCreateManyArgs} args - Arguments to create many PathologyPhotos.
     * @example
     * // Create many PathologyPhotos
     * const pathologyPhoto = await prisma.pathologyPhoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PathologyPhotoCreateManyArgs>(args?: SelectSubset<T, PathologyPhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PathologyPhotos and returns the data saved in the database.
     * @param {PathologyPhotoCreateManyAndReturnArgs} args - Arguments to create many PathologyPhotos.
     * @example
     * // Create many PathologyPhotos
     * const pathologyPhoto = await prisma.pathologyPhoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PathologyPhotos and only return the `id`
     * const pathologyPhotoWithIdOnly = await prisma.pathologyPhoto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PathologyPhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, PathologyPhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PathologyPhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PathologyPhoto.
     * @param {PathologyPhotoDeleteArgs} args - Arguments to delete one PathologyPhoto.
     * @example
     * // Delete one PathologyPhoto
     * const PathologyPhoto = await prisma.pathologyPhoto.delete({
     *   where: {
     *     // ... filter to delete one PathologyPhoto
     *   }
     * })
     * 
     */
    delete<T extends PathologyPhotoDeleteArgs>(args: SelectSubset<T, PathologyPhotoDeleteArgs<ExtArgs>>): Prisma__PathologyPhotoClient<$Result.GetResult<Prisma.$PathologyPhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PathologyPhoto.
     * @param {PathologyPhotoUpdateArgs} args - Arguments to update one PathologyPhoto.
     * @example
     * // Update one PathologyPhoto
     * const pathologyPhoto = await prisma.pathologyPhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PathologyPhotoUpdateArgs>(args: SelectSubset<T, PathologyPhotoUpdateArgs<ExtArgs>>): Prisma__PathologyPhotoClient<$Result.GetResult<Prisma.$PathologyPhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PathologyPhotos.
     * @param {PathologyPhotoDeleteManyArgs} args - Arguments to filter PathologyPhotos to delete.
     * @example
     * // Delete a few PathologyPhotos
     * const { count } = await prisma.pathologyPhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PathologyPhotoDeleteManyArgs>(args?: SelectSubset<T, PathologyPhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PathologyPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathologyPhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PathologyPhotos
     * const pathologyPhoto = await prisma.pathologyPhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PathologyPhotoUpdateManyArgs>(args: SelectSubset<T, PathologyPhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PathologyPhotos and returns the data updated in the database.
     * @param {PathologyPhotoUpdateManyAndReturnArgs} args - Arguments to update many PathologyPhotos.
     * @example
     * // Update many PathologyPhotos
     * const pathologyPhoto = await prisma.pathologyPhoto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PathologyPhotos and only return the `id`
     * const pathologyPhotoWithIdOnly = await prisma.pathologyPhoto.updateManyAndReturn({
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
    updateManyAndReturn<T extends PathologyPhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, PathologyPhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PathologyPhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PathologyPhoto.
     * @param {PathologyPhotoUpsertArgs} args - Arguments to update or create a PathologyPhoto.
     * @example
     * // Update or create a PathologyPhoto
     * const pathologyPhoto = await prisma.pathologyPhoto.upsert({
     *   create: {
     *     // ... data to create a PathologyPhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PathologyPhoto we want to update
     *   }
     * })
     */
    upsert<T extends PathologyPhotoUpsertArgs>(args: SelectSubset<T, PathologyPhotoUpsertArgs<ExtArgs>>): Prisma__PathologyPhotoClient<$Result.GetResult<Prisma.$PathologyPhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PathologyPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathologyPhotoCountArgs} args - Arguments to filter PathologyPhotos to count.
     * @example
     * // Count the number of PathologyPhotos
     * const count = await prisma.pathologyPhoto.count({
     *   where: {
     *     // ... the filter for the PathologyPhotos we want to count
     *   }
     * })
    **/
    count<T extends PathologyPhotoCountArgs>(
      args?: Subset<T, PathologyPhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PathologyPhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PathologyPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathologyPhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PathologyPhotoAggregateArgs>(args: Subset<T, PathologyPhotoAggregateArgs>): Prisma.PrismaPromise<GetPathologyPhotoAggregateType<T>>

    /**
     * Group by PathologyPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathologyPhotoGroupByArgs} args - Group by arguments.
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
      T extends PathologyPhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PathologyPhotoGroupByArgs['orderBy'] }
        : { orderBy?: PathologyPhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PathologyPhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPathologyPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PathologyPhoto model
   */
  readonly fields: PathologyPhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PathologyPhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PathologyPhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pathology<T extends PathologyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PathologyDefaultArgs<ExtArgs>>): Prisma__PathologyClient<$Result.GetResult<Prisma.$PathologyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PathologyPhoto model
   */
  interface PathologyPhotoFieldRefs {
    readonly id: FieldRef<"PathologyPhoto", 'String'>
    readonly pathologyId: FieldRef<"PathologyPhoto", 'String'>
    readonly filePath: FieldRef<"PathologyPhoto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PathologyPhoto findUnique
   */
  export type PathologyPhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathologyPhoto
     */
    select?: PathologyPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PathologyPhoto
     */
    omit?: PathologyPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyPhotoInclude<ExtArgs> | null
    /**
     * Filter, which PathologyPhoto to fetch.
     */
    where: PathologyPhotoWhereUniqueInput
  }

  /**
   * PathologyPhoto findUniqueOrThrow
   */
  export type PathologyPhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathologyPhoto
     */
    select?: PathologyPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PathologyPhoto
     */
    omit?: PathologyPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyPhotoInclude<ExtArgs> | null
    /**
     * Filter, which PathologyPhoto to fetch.
     */
    where: PathologyPhotoWhereUniqueInput
  }

  /**
   * PathologyPhoto findFirst
   */
  export type PathologyPhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathologyPhoto
     */
    select?: PathologyPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PathologyPhoto
     */
    omit?: PathologyPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyPhotoInclude<ExtArgs> | null
    /**
     * Filter, which PathologyPhoto to fetch.
     */
    where?: PathologyPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PathologyPhotos to fetch.
     */
    orderBy?: PathologyPhotoOrderByWithRelationInput | PathologyPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PathologyPhotos.
     */
    cursor?: PathologyPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PathologyPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PathologyPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PathologyPhotos.
     */
    distinct?: PathologyPhotoScalarFieldEnum | PathologyPhotoScalarFieldEnum[]
  }

  /**
   * PathologyPhoto findFirstOrThrow
   */
  export type PathologyPhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathologyPhoto
     */
    select?: PathologyPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PathologyPhoto
     */
    omit?: PathologyPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyPhotoInclude<ExtArgs> | null
    /**
     * Filter, which PathologyPhoto to fetch.
     */
    where?: PathologyPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PathologyPhotos to fetch.
     */
    orderBy?: PathologyPhotoOrderByWithRelationInput | PathologyPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PathologyPhotos.
     */
    cursor?: PathologyPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PathologyPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PathologyPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PathologyPhotos.
     */
    distinct?: PathologyPhotoScalarFieldEnum | PathologyPhotoScalarFieldEnum[]
  }

  /**
   * PathologyPhoto findMany
   */
  export type PathologyPhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathologyPhoto
     */
    select?: PathologyPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PathologyPhoto
     */
    omit?: PathologyPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyPhotoInclude<ExtArgs> | null
    /**
     * Filter, which PathologyPhotos to fetch.
     */
    where?: PathologyPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PathologyPhotos to fetch.
     */
    orderBy?: PathologyPhotoOrderByWithRelationInput | PathologyPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PathologyPhotos.
     */
    cursor?: PathologyPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PathologyPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PathologyPhotos.
     */
    skip?: number
    distinct?: PathologyPhotoScalarFieldEnum | PathologyPhotoScalarFieldEnum[]
  }

  /**
   * PathologyPhoto create
   */
  export type PathologyPhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathologyPhoto
     */
    select?: PathologyPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PathologyPhoto
     */
    omit?: PathologyPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyPhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a PathologyPhoto.
     */
    data: XOR<PathologyPhotoCreateInput, PathologyPhotoUncheckedCreateInput>
  }

  /**
   * PathologyPhoto createMany
   */
  export type PathologyPhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PathologyPhotos.
     */
    data: PathologyPhotoCreateManyInput | PathologyPhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PathologyPhoto createManyAndReturn
   */
  export type PathologyPhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathologyPhoto
     */
    select?: PathologyPhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PathologyPhoto
     */
    omit?: PathologyPhotoOmit<ExtArgs> | null
    /**
     * The data used to create many PathologyPhotos.
     */
    data: PathologyPhotoCreateManyInput | PathologyPhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyPhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PathologyPhoto update
   */
  export type PathologyPhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathologyPhoto
     */
    select?: PathologyPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PathologyPhoto
     */
    omit?: PathologyPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyPhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a PathologyPhoto.
     */
    data: XOR<PathologyPhotoUpdateInput, PathologyPhotoUncheckedUpdateInput>
    /**
     * Choose, which PathologyPhoto to update.
     */
    where: PathologyPhotoWhereUniqueInput
  }

  /**
   * PathologyPhoto updateMany
   */
  export type PathologyPhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PathologyPhotos.
     */
    data: XOR<PathologyPhotoUpdateManyMutationInput, PathologyPhotoUncheckedUpdateManyInput>
    /**
     * Filter which PathologyPhotos to update
     */
    where?: PathologyPhotoWhereInput
    /**
     * Limit how many PathologyPhotos to update.
     */
    limit?: number
  }

  /**
   * PathologyPhoto updateManyAndReturn
   */
  export type PathologyPhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathologyPhoto
     */
    select?: PathologyPhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PathologyPhoto
     */
    omit?: PathologyPhotoOmit<ExtArgs> | null
    /**
     * The data used to update PathologyPhotos.
     */
    data: XOR<PathologyPhotoUpdateManyMutationInput, PathologyPhotoUncheckedUpdateManyInput>
    /**
     * Filter which PathologyPhotos to update
     */
    where?: PathologyPhotoWhereInput
    /**
     * Limit how many PathologyPhotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyPhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PathologyPhoto upsert
   */
  export type PathologyPhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathologyPhoto
     */
    select?: PathologyPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PathologyPhoto
     */
    omit?: PathologyPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyPhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the PathologyPhoto to update in case it exists.
     */
    where: PathologyPhotoWhereUniqueInput
    /**
     * In case the PathologyPhoto found by the `where` argument doesn't exist, create a new PathologyPhoto with this data.
     */
    create: XOR<PathologyPhotoCreateInput, PathologyPhotoUncheckedCreateInput>
    /**
     * In case the PathologyPhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PathologyPhotoUpdateInput, PathologyPhotoUncheckedUpdateInput>
  }

  /**
   * PathologyPhoto delete
   */
  export type PathologyPhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathologyPhoto
     */
    select?: PathologyPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PathologyPhoto
     */
    omit?: PathologyPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyPhotoInclude<ExtArgs> | null
    /**
     * Filter which PathologyPhoto to delete.
     */
    where: PathologyPhotoWhereUniqueInput
  }

  /**
   * PathologyPhoto deleteMany
   */
  export type PathologyPhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PathologyPhotos to delete
     */
    where?: PathologyPhotoWhereInput
    /**
     * Limit how many PathologyPhotos to delete.
     */
    limit?: number
  }

  /**
   * PathologyPhoto without action
   */
  export type PathologyPhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathologyPhoto
     */
    select?: PathologyPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PathologyPhoto
     */
    omit?: PathologyPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathologyPhotoInclude<ExtArgs> | null
  }


  /**
   * Model Pdf
   */

  export type AggregatePdf = {
    _count: PdfCountAggregateOutputType | null
    _min: PdfMinAggregateOutputType | null
    _max: PdfMaxAggregateOutputType | null
  }

  export type PdfMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    pdfType: $Enums.PdfType | null
    filePath: string | null
    signedFilePath: string | null
    generatedAt: Date | null
  }

  export type PdfMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    pdfType: $Enums.PdfType | null
    filePath: string | null
    signedFilePath: string | null
    generatedAt: Date | null
  }

  export type PdfCountAggregateOutputType = {
    id: number
    projectId: number
    pdfType: number
    filePath: number
    signedFilePath: number
    generatedAt: number
    _all: number
  }


  export type PdfMinAggregateInputType = {
    id?: true
    projectId?: true
    pdfType?: true
    filePath?: true
    signedFilePath?: true
    generatedAt?: true
  }

  export type PdfMaxAggregateInputType = {
    id?: true
    projectId?: true
    pdfType?: true
    filePath?: true
    signedFilePath?: true
    generatedAt?: true
  }

  export type PdfCountAggregateInputType = {
    id?: true
    projectId?: true
    pdfType?: true
    filePath?: true
    signedFilePath?: true
    generatedAt?: true
    _all?: true
  }

  export type PdfAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pdf to aggregate.
     */
    where?: PdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pdfs to fetch.
     */
    orderBy?: PdfOrderByWithRelationInput | PdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pdfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pdfs
    **/
    _count?: true | PdfCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PdfMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PdfMaxAggregateInputType
  }

  export type GetPdfAggregateType<T extends PdfAggregateArgs> = {
        [P in keyof T & keyof AggregatePdf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePdf[P]>
      : GetScalarType<T[P], AggregatePdf[P]>
  }




  export type PdfGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PdfWhereInput
    orderBy?: PdfOrderByWithAggregationInput | PdfOrderByWithAggregationInput[]
    by: PdfScalarFieldEnum[] | PdfScalarFieldEnum
    having?: PdfScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PdfCountAggregateInputType | true
    _min?: PdfMinAggregateInputType
    _max?: PdfMaxAggregateInputType
  }

  export type PdfGroupByOutputType = {
    id: string
    projectId: string
    pdfType: $Enums.PdfType
    filePath: string
    signedFilePath: string | null
    generatedAt: Date
    _count: PdfCountAggregateOutputType | null
    _min: PdfMinAggregateOutputType | null
    _max: PdfMaxAggregateOutputType | null
  }

  type GetPdfGroupByPayload<T extends PdfGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PdfGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PdfGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PdfGroupByOutputType[P]>
            : GetScalarType<T[P], PdfGroupByOutputType[P]>
        }
      >
    >


  export type PdfSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    pdfType?: boolean
    filePath?: boolean
    signedFilePath?: boolean
    generatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pdf"]>

  export type PdfSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    pdfType?: boolean
    filePath?: boolean
    signedFilePath?: boolean
    generatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pdf"]>

  export type PdfSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    pdfType?: boolean
    filePath?: boolean
    signedFilePath?: boolean
    generatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pdf"]>

  export type PdfSelectScalar = {
    id?: boolean
    projectId?: boolean
    pdfType?: boolean
    filePath?: boolean
    signedFilePath?: boolean
    generatedAt?: boolean
  }

  export type PdfOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "pdfType" | "filePath" | "signedFilePath" | "generatedAt", ExtArgs["result"]["pdf"]>
  export type PdfInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type PdfIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type PdfIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $PdfPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pdf"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      pdfType: $Enums.PdfType
      filePath: string
      signedFilePath: string | null
      generatedAt: Date
    }, ExtArgs["result"]["pdf"]>
    composites: {}
  }

  type PdfGetPayload<S extends boolean | null | undefined | PdfDefaultArgs> = $Result.GetResult<Prisma.$PdfPayload, S>

  type PdfCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PdfFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PdfCountAggregateInputType | true
    }

  export interface PdfDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pdf'], meta: { name: 'Pdf' } }
    /**
     * Find zero or one Pdf that matches the filter.
     * @param {PdfFindUniqueArgs} args - Arguments to find a Pdf
     * @example
     * // Get one Pdf
     * const pdf = await prisma.pdf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PdfFindUniqueArgs>(args: SelectSubset<T, PdfFindUniqueArgs<ExtArgs>>): Prisma__PdfClient<$Result.GetResult<Prisma.$PdfPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pdf that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PdfFindUniqueOrThrowArgs} args - Arguments to find a Pdf
     * @example
     * // Get one Pdf
     * const pdf = await prisma.pdf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PdfFindUniqueOrThrowArgs>(args: SelectSubset<T, PdfFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PdfClient<$Result.GetResult<Prisma.$PdfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pdf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PdfFindFirstArgs} args - Arguments to find a Pdf
     * @example
     * // Get one Pdf
     * const pdf = await prisma.pdf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PdfFindFirstArgs>(args?: SelectSubset<T, PdfFindFirstArgs<ExtArgs>>): Prisma__PdfClient<$Result.GetResult<Prisma.$PdfPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pdf that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PdfFindFirstOrThrowArgs} args - Arguments to find a Pdf
     * @example
     * // Get one Pdf
     * const pdf = await prisma.pdf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PdfFindFirstOrThrowArgs>(args?: SelectSubset<T, PdfFindFirstOrThrowArgs<ExtArgs>>): Prisma__PdfClient<$Result.GetResult<Prisma.$PdfPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pdfs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PdfFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pdfs
     * const pdfs = await prisma.pdf.findMany()
     * 
     * // Get first 10 Pdfs
     * const pdfs = await prisma.pdf.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pdfWithIdOnly = await prisma.pdf.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PdfFindManyArgs>(args?: SelectSubset<T, PdfFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PdfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pdf.
     * @param {PdfCreateArgs} args - Arguments to create a Pdf.
     * @example
     * // Create one Pdf
     * const Pdf = await prisma.pdf.create({
     *   data: {
     *     // ... data to create a Pdf
     *   }
     * })
     * 
     */
    create<T extends PdfCreateArgs>(args: SelectSubset<T, PdfCreateArgs<ExtArgs>>): Prisma__PdfClient<$Result.GetResult<Prisma.$PdfPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pdfs.
     * @param {PdfCreateManyArgs} args - Arguments to create many Pdfs.
     * @example
     * // Create many Pdfs
     * const pdf = await prisma.pdf.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PdfCreateManyArgs>(args?: SelectSubset<T, PdfCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pdfs and returns the data saved in the database.
     * @param {PdfCreateManyAndReturnArgs} args - Arguments to create many Pdfs.
     * @example
     * // Create many Pdfs
     * const pdf = await prisma.pdf.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pdfs and only return the `id`
     * const pdfWithIdOnly = await prisma.pdf.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PdfCreateManyAndReturnArgs>(args?: SelectSubset<T, PdfCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PdfPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pdf.
     * @param {PdfDeleteArgs} args - Arguments to delete one Pdf.
     * @example
     * // Delete one Pdf
     * const Pdf = await prisma.pdf.delete({
     *   where: {
     *     // ... filter to delete one Pdf
     *   }
     * })
     * 
     */
    delete<T extends PdfDeleteArgs>(args: SelectSubset<T, PdfDeleteArgs<ExtArgs>>): Prisma__PdfClient<$Result.GetResult<Prisma.$PdfPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pdf.
     * @param {PdfUpdateArgs} args - Arguments to update one Pdf.
     * @example
     * // Update one Pdf
     * const pdf = await prisma.pdf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PdfUpdateArgs>(args: SelectSubset<T, PdfUpdateArgs<ExtArgs>>): Prisma__PdfClient<$Result.GetResult<Prisma.$PdfPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pdfs.
     * @param {PdfDeleteManyArgs} args - Arguments to filter Pdfs to delete.
     * @example
     * // Delete a few Pdfs
     * const { count } = await prisma.pdf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PdfDeleteManyArgs>(args?: SelectSubset<T, PdfDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pdfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PdfUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pdfs
     * const pdf = await prisma.pdf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PdfUpdateManyArgs>(args: SelectSubset<T, PdfUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pdfs and returns the data updated in the database.
     * @param {PdfUpdateManyAndReturnArgs} args - Arguments to update many Pdfs.
     * @example
     * // Update many Pdfs
     * const pdf = await prisma.pdf.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pdfs and only return the `id`
     * const pdfWithIdOnly = await prisma.pdf.updateManyAndReturn({
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
    updateManyAndReturn<T extends PdfUpdateManyAndReturnArgs>(args: SelectSubset<T, PdfUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PdfPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pdf.
     * @param {PdfUpsertArgs} args - Arguments to update or create a Pdf.
     * @example
     * // Update or create a Pdf
     * const pdf = await prisma.pdf.upsert({
     *   create: {
     *     // ... data to create a Pdf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pdf we want to update
     *   }
     * })
     */
    upsert<T extends PdfUpsertArgs>(args: SelectSubset<T, PdfUpsertArgs<ExtArgs>>): Prisma__PdfClient<$Result.GetResult<Prisma.$PdfPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pdfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PdfCountArgs} args - Arguments to filter Pdfs to count.
     * @example
     * // Count the number of Pdfs
     * const count = await prisma.pdf.count({
     *   where: {
     *     // ... the filter for the Pdfs we want to count
     *   }
     * })
    **/
    count<T extends PdfCountArgs>(
      args?: Subset<T, PdfCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PdfCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pdf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PdfAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PdfAggregateArgs>(args: Subset<T, PdfAggregateArgs>): Prisma.PrismaPromise<GetPdfAggregateType<T>>

    /**
     * Group by Pdf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PdfGroupByArgs} args - Group by arguments.
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
      T extends PdfGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PdfGroupByArgs['orderBy'] }
        : { orderBy?: PdfGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PdfGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPdfGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pdf model
   */
  readonly fields: PdfFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pdf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PdfClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pdf model
   */
  interface PdfFieldRefs {
    readonly id: FieldRef<"Pdf", 'String'>
    readonly projectId: FieldRef<"Pdf", 'String'>
    readonly pdfType: FieldRef<"Pdf", 'PdfType'>
    readonly filePath: FieldRef<"Pdf", 'String'>
    readonly signedFilePath: FieldRef<"Pdf", 'String'>
    readonly generatedAt: FieldRef<"Pdf", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pdf findUnique
   */
  export type PdfFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfInclude<ExtArgs> | null
    /**
     * Filter, which Pdf to fetch.
     */
    where: PdfWhereUniqueInput
  }

  /**
   * Pdf findUniqueOrThrow
   */
  export type PdfFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfInclude<ExtArgs> | null
    /**
     * Filter, which Pdf to fetch.
     */
    where: PdfWhereUniqueInput
  }

  /**
   * Pdf findFirst
   */
  export type PdfFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfInclude<ExtArgs> | null
    /**
     * Filter, which Pdf to fetch.
     */
    where?: PdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pdfs to fetch.
     */
    orderBy?: PdfOrderByWithRelationInput | PdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pdfs.
     */
    cursor?: PdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pdfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pdfs.
     */
    distinct?: PdfScalarFieldEnum | PdfScalarFieldEnum[]
  }

  /**
   * Pdf findFirstOrThrow
   */
  export type PdfFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfInclude<ExtArgs> | null
    /**
     * Filter, which Pdf to fetch.
     */
    where?: PdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pdfs to fetch.
     */
    orderBy?: PdfOrderByWithRelationInput | PdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pdfs.
     */
    cursor?: PdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pdfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pdfs.
     */
    distinct?: PdfScalarFieldEnum | PdfScalarFieldEnum[]
  }

  /**
   * Pdf findMany
   */
  export type PdfFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfInclude<ExtArgs> | null
    /**
     * Filter, which Pdfs to fetch.
     */
    where?: PdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pdfs to fetch.
     */
    orderBy?: PdfOrderByWithRelationInput | PdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pdfs.
     */
    cursor?: PdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pdfs.
     */
    skip?: number
    distinct?: PdfScalarFieldEnum | PdfScalarFieldEnum[]
  }

  /**
   * Pdf create
   */
  export type PdfCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfInclude<ExtArgs> | null
    /**
     * The data needed to create a Pdf.
     */
    data: XOR<PdfCreateInput, PdfUncheckedCreateInput>
  }

  /**
   * Pdf createMany
   */
  export type PdfCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pdfs.
     */
    data: PdfCreateManyInput | PdfCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pdf createManyAndReturn
   */
  export type PdfCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * The data used to create many Pdfs.
     */
    data: PdfCreateManyInput | PdfCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pdf update
   */
  export type PdfUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfInclude<ExtArgs> | null
    /**
     * The data needed to update a Pdf.
     */
    data: XOR<PdfUpdateInput, PdfUncheckedUpdateInput>
    /**
     * Choose, which Pdf to update.
     */
    where: PdfWhereUniqueInput
  }

  /**
   * Pdf updateMany
   */
  export type PdfUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pdfs.
     */
    data: XOR<PdfUpdateManyMutationInput, PdfUncheckedUpdateManyInput>
    /**
     * Filter which Pdfs to update
     */
    where?: PdfWhereInput
    /**
     * Limit how many Pdfs to update.
     */
    limit?: number
  }

  /**
   * Pdf updateManyAndReturn
   */
  export type PdfUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * The data used to update Pdfs.
     */
    data: XOR<PdfUpdateManyMutationInput, PdfUncheckedUpdateManyInput>
    /**
     * Filter which Pdfs to update
     */
    where?: PdfWhereInput
    /**
     * Limit how many Pdfs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pdf upsert
   */
  export type PdfUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfInclude<ExtArgs> | null
    /**
     * The filter to search for the Pdf to update in case it exists.
     */
    where: PdfWhereUniqueInput
    /**
     * In case the Pdf found by the `where` argument doesn't exist, create a new Pdf with this data.
     */
    create: XOR<PdfCreateInput, PdfUncheckedCreateInput>
    /**
     * In case the Pdf was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PdfUpdateInput, PdfUncheckedUpdateInput>
  }

  /**
   * Pdf delete
   */
  export type PdfDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfInclude<ExtArgs> | null
    /**
     * Filter which Pdf to delete.
     */
    where: PdfWhereUniqueInput
  }

  /**
   * Pdf deleteMany
   */
  export type PdfDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pdfs to delete
     */
    where?: PdfWhereInput
    /**
     * Limit how many Pdfs to delete.
     */
    limit?: number
  }

  /**
   * Pdf without action
   */
  export type PdfDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf
     */
    select?: PdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pdf
     */
    omit?: PdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PdfInclude<ExtArgs> | null
  }


  /**
   * Model StateLaw
   */

  export type AggregateStateLaw = {
    _count: StateLawCountAggregateOutputType | null
    _min: StateLawMinAggregateOutputType | null
    _max: StateLawMaxAggregateOutputType | null
  }

  export type StateLawMinAggregateOutputType = {
    id: string | null
    state: string | null
    textState: string | null
    lawReference: string | null
    lawReference2: string | null
    policeAbbreviation: string | null
    fullText: string | null
    fullText2: string | null
    publishedAt: Date | null
    active: boolean | null
  }

  export type StateLawMaxAggregateOutputType = {
    id: string | null
    state: string | null
    textState: string | null
    lawReference: string | null
    lawReference2: string | null
    policeAbbreviation: string | null
    fullText: string | null
    fullText2: string | null
    publishedAt: Date | null
    active: boolean | null
  }

  export type StateLawCountAggregateOutputType = {
    id: number
    state: number
    textState: number
    lawReference: number
    lawReference2: number
    policeAbbreviation: number
    fullText: number
    fullText2: number
    publishedAt: number
    active: number
    _all: number
  }


  export type StateLawMinAggregateInputType = {
    id?: true
    state?: true
    textState?: true
    lawReference?: true
    lawReference2?: true
    policeAbbreviation?: true
    fullText?: true
    fullText2?: true
    publishedAt?: true
    active?: true
  }

  export type StateLawMaxAggregateInputType = {
    id?: true
    state?: true
    textState?: true
    lawReference?: true
    lawReference2?: true
    policeAbbreviation?: true
    fullText?: true
    fullText2?: true
    publishedAt?: true
    active?: true
  }

  export type StateLawCountAggregateInputType = {
    id?: true
    state?: true
    textState?: true
    lawReference?: true
    lawReference2?: true
    policeAbbreviation?: true
    fullText?: true
    fullText2?: true
    publishedAt?: true
    active?: true
    _all?: true
  }

  export type StateLawAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StateLaw to aggregate.
     */
    where?: StateLawWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StateLaws to fetch.
     */
    orderBy?: StateLawOrderByWithRelationInput | StateLawOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StateLawWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StateLaws from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StateLaws.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StateLaws
    **/
    _count?: true | StateLawCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StateLawMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StateLawMaxAggregateInputType
  }

  export type GetStateLawAggregateType<T extends StateLawAggregateArgs> = {
        [P in keyof T & keyof AggregateStateLaw]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStateLaw[P]>
      : GetScalarType<T[P], AggregateStateLaw[P]>
  }




  export type StateLawGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StateLawWhereInput
    orderBy?: StateLawOrderByWithAggregationInput | StateLawOrderByWithAggregationInput[]
    by: StateLawScalarFieldEnum[] | StateLawScalarFieldEnum
    having?: StateLawScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StateLawCountAggregateInputType | true
    _min?: StateLawMinAggregateInputType
    _max?: StateLawMaxAggregateInputType
  }

  export type StateLawGroupByOutputType = {
    id: string
    state: string
    textState: string
    lawReference: string
    lawReference2: string
    policeAbbreviation: string
    fullText: string | null
    fullText2: string | null
    publishedAt: Date
    active: boolean
    _count: StateLawCountAggregateOutputType | null
    _min: StateLawMinAggregateOutputType | null
    _max: StateLawMaxAggregateOutputType | null
  }

  type GetStateLawGroupByPayload<T extends StateLawGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StateLawGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StateLawGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StateLawGroupByOutputType[P]>
            : GetScalarType<T[P], StateLawGroupByOutputType[P]>
        }
      >
    >


  export type StateLawSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    state?: boolean
    textState?: boolean
    lawReference?: boolean
    lawReference2?: boolean
    policeAbbreviation?: boolean
    fullText?: boolean
    fullText2?: boolean
    publishedAt?: boolean
    active?: boolean
  }, ExtArgs["result"]["stateLaw"]>

  export type StateLawSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    state?: boolean
    textState?: boolean
    lawReference?: boolean
    lawReference2?: boolean
    policeAbbreviation?: boolean
    fullText?: boolean
    fullText2?: boolean
    publishedAt?: boolean
    active?: boolean
  }, ExtArgs["result"]["stateLaw"]>

  export type StateLawSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    state?: boolean
    textState?: boolean
    lawReference?: boolean
    lawReference2?: boolean
    policeAbbreviation?: boolean
    fullText?: boolean
    fullText2?: boolean
    publishedAt?: boolean
    active?: boolean
  }, ExtArgs["result"]["stateLaw"]>

  export type StateLawSelectScalar = {
    id?: boolean
    state?: boolean
    textState?: boolean
    lawReference?: boolean
    lawReference2?: boolean
    policeAbbreviation?: boolean
    fullText?: boolean
    fullText2?: boolean
    publishedAt?: boolean
    active?: boolean
  }

  export type StateLawOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "state" | "textState" | "lawReference" | "lawReference2" | "policeAbbreviation" | "fullText" | "fullText2" | "publishedAt" | "active", ExtArgs["result"]["stateLaw"]>

  export type $StateLawPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StateLaw"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      state: string
      textState: string
      lawReference: string
      lawReference2: string
      policeAbbreviation: string
      fullText: string | null
      fullText2: string | null
      publishedAt: Date
      active: boolean
    }, ExtArgs["result"]["stateLaw"]>
    composites: {}
  }

  type StateLawGetPayload<S extends boolean | null | undefined | StateLawDefaultArgs> = $Result.GetResult<Prisma.$StateLawPayload, S>

  type StateLawCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StateLawFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StateLawCountAggregateInputType | true
    }

  export interface StateLawDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StateLaw'], meta: { name: 'StateLaw' } }
    /**
     * Find zero or one StateLaw that matches the filter.
     * @param {StateLawFindUniqueArgs} args - Arguments to find a StateLaw
     * @example
     * // Get one StateLaw
     * const stateLaw = await prisma.stateLaw.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StateLawFindUniqueArgs>(args: SelectSubset<T, StateLawFindUniqueArgs<ExtArgs>>): Prisma__StateLawClient<$Result.GetResult<Prisma.$StateLawPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StateLaw that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StateLawFindUniqueOrThrowArgs} args - Arguments to find a StateLaw
     * @example
     * // Get one StateLaw
     * const stateLaw = await prisma.stateLaw.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StateLawFindUniqueOrThrowArgs>(args: SelectSubset<T, StateLawFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StateLawClient<$Result.GetResult<Prisma.$StateLawPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StateLaw that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateLawFindFirstArgs} args - Arguments to find a StateLaw
     * @example
     * // Get one StateLaw
     * const stateLaw = await prisma.stateLaw.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StateLawFindFirstArgs>(args?: SelectSubset<T, StateLawFindFirstArgs<ExtArgs>>): Prisma__StateLawClient<$Result.GetResult<Prisma.$StateLawPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StateLaw that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateLawFindFirstOrThrowArgs} args - Arguments to find a StateLaw
     * @example
     * // Get one StateLaw
     * const stateLaw = await prisma.stateLaw.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StateLawFindFirstOrThrowArgs>(args?: SelectSubset<T, StateLawFindFirstOrThrowArgs<ExtArgs>>): Prisma__StateLawClient<$Result.GetResult<Prisma.$StateLawPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StateLaws that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateLawFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StateLaws
     * const stateLaws = await prisma.stateLaw.findMany()
     * 
     * // Get first 10 StateLaws
     * const stateLaws = await prisma.stateLaw.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stateLawWithIdOnly = await prisma.stateLaw.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StateLawFindManyArgs>(args?: SelectSubset<T, StateLawFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StateLawPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StateLaw.
     * @param {StateLawCreateArgs} args - Arguments to create a StateLaw.
     * @example
     * // Create one StateLaw
     * const StateLaw = await prisma.stateLaw.create({
     *   data: {
     *     // ... data to create a StateLaw
     *   }
     * })
     * 
     */
    create<T extends StateLawCreateArgs>(args: SelectSubset<T, StateLawCreateArgs<ExtArgs>>): Prisma__StateLawClient<$Result.GetResult<Prisma.$StateLawPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StateLaws.
     * @param {StateLawCreateManyArgs} args - Arguments to create many StateLaws.
     * @example
     * // Create many StateLaws
     * const stateLaw = await prisma.stateLaw.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StateLawCreateManyArgs>(args?: SelectSubset<T, StateLawCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StateLaws and returns the data saved in the database.
     * @param {StateLawCreateManyAndReturnArgs} args - Arguments to create many StateLaws.
     * @example
     * // Create many StateLaws
     * const stateLaw = await prisma.stateLaw.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StateLaws and only return the `id`
     * const stateLawWithIdOnly = await prisma.stateLaw.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StateLawCreateManyAndReturnArgs>(args?: SelectSubset<T, StateLawCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StateLawPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StateLaw.
     * @param {StateLawDeleteArgs} args - Arguments to delete one StateLaw.
     * @example
     * // Delete one StateLaw
     * const StateLaw = await prisma.stateLaw.delete({
     *   where: {
     *     // ... filter to delete one StateLaw
     *   }
     * })
     * 
     */
    delete<T extends StateLawDeleteArgs>(args: SelectSubset<T, StateLawDeleteArgs<ExtArgs>>): Prisma__StateLawClient<$Result.GetResult<Prisma.$StateLawPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StateLaw.
     * @param {StateLawUpdateArgs} args - Arguments to update one StateLaw.
     * @example
     * // Update one StateLaw
     * const stateLaw = await prisma.stateLaw.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StateLawUpdateArgs>(args: SelectSubset<T, StateLawUpdateArgs<ExtArgs>>): Prisma__StateLawClient<$Result.GetResult<Prisma.$StateLawPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StateLaws.
     * @param {StateLawDeleteManyArgs} args - Arguments to filter StateLaws to delete.
     * @example
     * // Delete a few StateLaws
     * const { count } = await prisma.stateLaw.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StateLawDeleteManyArgs>(args?: SelectSubset<T, StateLawDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StateLaws.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateLawUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StateLaws
     * const stateLaw = await prisma.stateLaw.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StateLawUpdateManyArgs>(args: SelectSubset<T, StateLawUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StateLaws and returns the data updated in the database.
     * @param {StateLawUpdateManyAndReturnArgs} args - Arguments to update many StateLaws.
     * @example
     * // Update many StateLaws
     * const stateLaw = await prisma.stateLaw.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StateLaws and only return the `id`
     * const stateLawWithIdOnly = await prisma.stateLaw.updateManyAndReturn({
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
    updateManyAndReturn<T extends StateLawUpdateManyAndReturnArgs>(args: SelectSubset<T, StateLawUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StateLawPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StateLaw.
     * @param {StateLawUpsertArgs} args - Arguments to update or create a StateLaw.
     * @example
     * // Update or create a StateLaw
     * const stateLaw = await prisma.stateLaw.upsert({
     *   create: {
     *     // ... data to create a StateLaw
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StateLaw we want to update
     *   }
     * })
     */
    upsert<T extends StateLawUpsertArgs>(args: SelectSubset<T, StateLawUpsertArgs<ExtArgs>>): Prisma__StateLawClient<$Result.GetResult<Prisma.$StateLawPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StateLaws.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateLawCountArgs} args - Arguments to filter StateLaws to count.
     * @example
     * // Count the number of StateLaws
     * const count = await prisma.stateLaw.count({
     *   where: {
     *     // ... the filter for the StateLaws we want to count
     *   }
     * })
    **/
    count<T extends StateLawCountArgs>(
      args?: Subset<T, StateLawCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StateLawCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StateLaw.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateLawAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StateLawAggregateArgs>(args: Subset<T, StateLawAggregateArgs>): Prisma.PrismaPromise<GetStateLawAggregateType<T>>

    /**
     * Group by StateLaw.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateLawGroupByArgs} args - Group by arguments.
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
      T extends StateLawGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StateLawGroupByArgs['orderBy'] }
        : { orderBy?: StateLawGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StateLawGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateLawGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StateLaw model
   */
  readonly fields: StateLawFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StateLaw.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StateLawClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the StateLaw model
   */
  interface StateLawFieldRefs {
    readonly id: FieldRef<"StateLaw", 'String'>
    readonly state: FieldRef<"StateLaw", 'String'>
    readonly textState: FieldRef<"StateLaw", 'String'>
    readonly lawReference: FieldRef<"StateLaw", 'String'>
    readonly lawReference2: FieldRef<"StateLaw", 'String'>
    readonly policeAbbreviation: FieldRef<"StateLaw", 'String'>
    readonly fullText: FieldRef<"StateLaw", 'String'>
    readonly fullText2: FieldRef<"StateLaw", 'String'>
    readonly publishedAt: FieldRef<"StateLaw", 'DateTime'>
    readonly active: FieldRef<"StateLaw", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * StateLaw findUnique
   */
  export type StateLawFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateLaw
     */
    select?: StateLawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateLaw
     */
    omit?: StateLawOmit<ExtArgs> | null
    /**
     * Filter, which StateLaw to fetch.
     */
    where: StateLawWhereUniqueInput
  }

  /**
   * StateLaw findUniqueOrThrow
   */
  export type StateLawFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateLaw
     */
    select?: StateLawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateLaw
     */
    omit?: StateLawOmit<ExtArgs> | null
    /**
     * Filter, which StateLaw to fetch.
     */
    where: StateLawWhereUniqueInput
  }

  /**
   * StateLaw findFirst
   */
  export type StateLawFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateLaw
     */
    select?: StateLawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateLaw
     */
    omit?: StateLawOmit<ExtArgs> | null
    /**
     * Filter, which StateLaw to fetch.
     */
    where?: StateLawWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StateLaws to fetch.
     */
    orderBy?: StateLawOrderByWithRelationInput | StateLawOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StateLaws.
     */
    cursor?: StateLawWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StateLaws from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StateLaws.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StateLaws.
     */
    distinct?: StateLawScalarFieldEnum | StateLawScalarFieldEnum[]
  }

  /**
   * StateLaw findFirstOrThrow
   */
  export type StateLawFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateLaw
     */
    select?: StateLawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateLaw
     */
    omit?: StateLawOmit<ExtArgs> | null
    /**
     * Filter, which StateLaw to fetch.
     */
    where?: StateLawWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StateLaws to fetch.
     */
    orderBy?: StateLawOrderByWithRelationInput | StateLawOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StateLaws.
     */
    cursor?: StateLawWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StateLaws from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StateLaws.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StateLaws.
     */
    distinct?: StateLawScalarFieldEnum | StateLawScalarFieldEnum[]
  }

  /**
   * StateLaw findMany
   */
  export type StateLawFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateLaw
     */
    select?: StateLawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateLaw
     */
    omit?: StateLawOmit<ExtArgs> | null
    /**
     * Filter, which StateLaws to fetch.
     */
    where?: StateLawWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StateLaws to fetch.
     */
    orderBy?: StateLawOrderByWithRelationInput | StateLawOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StateLaws.
     */
    cursor?: StateLawWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StateLaws from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StateLaws.
     */
    skip?: number
    distinct?: StateLawScalarFieldEnum | StateLawScalarFieldEnum[]
  }

  /**
   * StateLaw create
   */
  export type StateLawCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateLaw
     */
    select?: StateLawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateLaw
     */
    omit?: StateLawOmit<ExtArgs> | null
    /**
     * The data needed to create a StateLaw.
     */
    data: XOR<StateLawCreateInput, StateLawUncheckedCreateInput>
  }

  /**
   * StateLaw createMany
   */
  export type StateLawCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StateLaws.
     */
    data: StateLawCreateManyInput | StateLawCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StateLaw createManyAndReturn
   */
  export type StateLawCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateLaw
     */
    select?: StateLawSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StateLaw
     */
    omit?: StateLawOmit<ExtArgs> | null
    /**
     * The data used to create many StateLaws.
     */
    data: StateLawCreateManyInput | StateLawCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StateLaw update
   */
  export type StateLawUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateLaw
     */
    select?: StateLawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateLaw
     */
    omit?: StateLawOmit<ExtArgs> | null
    /**
     * The data needed to update a StateLaw.
     */
    data: XOR<StateLawUpdateInput, StateLawUncheckedUpdateInput>
    /**
     * Choose, which StateLaw to update.
     */
    where: StateLawWhereUniqueInput
  }

  /**
   * StateLaw updateMany
   */
  export type StateLawUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StateLaws.
     */
    data: XOR<StateLawUpdateManyMutationInput, StateLawUncheckedUpdateManyInput>
    /**
     * Filter which StateLaws to update
     */
    where?: StateLawWhereInput
    /**
     * Limit how many StateLaws to update.
     */
    limit?: number
  }

  /**
   * StateLaw updateManyAndReturn
   */
  export type StateLawUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateLaw
     */
    select?: StateLawSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StateLaw
     */
    omit?: StateLawOmit<ExtArgs> | null
    /**
     * The data used to update StateLaws.
     */
    data: XOR<StateLawUpdateManyMutationInput, StateLawUncheckedUpdateManyInput>
    /**
     * Filter which StateLaws to update
     */
    where?: StateLawWhereInput
    /**
     * Limit how many StateLaws to update.
     */
    limit?: number
  }

  /**
   * StateLaw upsert
   */
  export type StateLawUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateLaw
     */
    select?: StateLawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateLaw
     */
    omit?: StateLawOmit<ExtArgs> | null
    /**
     * The filter to search for the StateLaw to update in case it exists.
     */
    where: StateLawWhereUniqueInput
    /**
     * In case the StateLaw found by the `where` argument doesn't exist, create a new StateLaw with this data.
     */
    create: XOR<StateLawCreateInput, StateLawUncheckedCreateInput>
    /**
     * In case the StateLaw was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StateLawUpdateInput, StateLawUncheckedUpdateInput>
  }

  /**
   * StateLaw delete
   */
  export type StateLawDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateLaw
     */
    select?: StateLawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateLaw
     */
    omit?: StateLawOmit<ExtArgs> | null
    /**
     * Filter which StateLaw to delete.
     */
    where: StateLawWhereUniqueInput
  }

  /**
   * StateLaw deleteMany
   */
  export type StateLawDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StateLaws to delete
     */
    where?: StateLawWhereInput
    /**
     * Limit how many StateLaws to delete.
     */
    limit?: number
  }

  /**
   * StateLaw without action
   */
  export type StateLawDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateLaw
     */
    select?: StateLawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StateLaw
     */
    omit?: StateLawOmit<ExtArgs> | null
  }


  /**
   * Model Log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    tableName: string | null
    targetId: string | null
    generatedAt: Date | null
  }

  export type LogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    tableName: string | null
    targetId: string | null
    generatedAt: Date | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    tableName: number
    targetId: number
    generatedAt: number
    _all: number
  }


  export type LogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    tableName?: true
    targetId?: true
    generatedAt?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    tableName?: true
    targetId?: true
    generatedAt?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    tableName?: true
    targetId?: true
    generatedAt?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Log to aggregate.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type LogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
    orderBy?: LogOrderByWithAggregationInput | LogOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    id: string
    userId: string
    action: string
    tableName: string
    targetId: string
    generatedAt: Date
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type LogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    tableName?: boolean
    targetId?: boolean
    generatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    tableName?: boolean
    targetId?: boolean
    generatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    tableName?: boolean
    targetId?: boolean
    generatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    tableName?: boolean
    targetId?: boolean
    generatedAt?: boolean
  }

  export type LogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "tableName" | "targetId" | "generatedAt", ExtArgs["result"]["log"]>
  export type LogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Log"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      action: string
      tableName: string
      targetId: string
      generatedAt: Date
    }, ExtArgs["result"]["log"]>
    composites: {}
  }

  type LogGetPayload<S extends boolean | null | undefined | LogDefaultArgs> = $Result.GetResult<Prisma.$LogPayload, S>

  type LogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface LogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Log'], meta: { name: 'Log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {LogFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogFindUniqueArgs>(args: SelectSubset<T, LogFindUniqueArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs>(args: SelectSubset<T, LogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogFindFirstArgs>(args?: SelectSubset<T, LogFindFirstArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs>(args?: SelectSubset<T, LogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogFindManyArgs>(args?: SelectSubset<T, LogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log.
     * @param {LogCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
     */
    create<T extends LogCreateArgs>(args: SelectSubset<T, LogCreateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {LogCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogCreateManyArgs>(args?: SelectSubset<T, LogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logs and returns the data saved in the database.
     * @param {LogCreateManyAndReturnArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogCreateManyAndReturnArgs>(args?: SelectSubset<T, LogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Log.
     * @param {LogDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
     */
    delete<T extends LogDeleteArgs>(args: SelectSubset<T, LogDeleteArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log.
     * @param {LogUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogUpdateArgs>(args: SelectSubset<T, LogUpdateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {LogDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogDeleteManyArgs>(args?: SelectSubset<T, LogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogUpdateManyArgs>(args: SelectSubset<T, LogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs and returns the data updated in the database.
     * @param {LogUpdateManyAndReturnArgs} args - Arguments to update many Logs.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.updateManyAndReturn({
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
    updateManyAndReturn<T extends LogUpdateManyAndReturnArgs>(args: SelectSubset<T, LogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Log.
     * @param {LogUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
     */
    upsert<T extends LogUpsertArgs>(args: SelectSubset<T, LogUpsertArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogCountArgs>(
      args?: Subset<T, LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
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
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Log model
   */
  readonly fields: LogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Log model
   */
  interface LogFieldRefs {
    readonly id: FieldRef<"Log", 'String'>
    readonly userId: FieldRef<"Log", 'String'>
    readonly action: FieldRef<"Log", 'String'>
    readonly tableName: FieldRef<"Log", 'String'>
    readonly targetId: FieldRef<"Log", 'String'>
    readonly generatedAt: FieldRef<"Log", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Log findUnique
   */
  export type LogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findUniqueOrThrow
   */
  export type LogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findFirst
   */
  export type LogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findFirstOrThrow
   */
  export type LogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findMany
   */
  export type LogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log create
   */
  export type LogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to create a Log.
     */
    data: XOR<LogCreateInput, LogUncheckedCreateInput>
  }

  /**
   * Log createMany
   */
  export type LogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Log createManyAndReturn
   */
  export type LogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Log update
   */
  export type LogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to update a Log.
     */
    data: XOR<LogUpdateInput, LogUncheckedUpdateInput>
    /**
     * Choose, which Log to update.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log updateMany
   */
  export type LogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
  }

  /**
   * Log updateManyAndReturn
   */
  export type LogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Log upsert
   */
  export type LogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The filter to search for the Log to update in case it exists.
     */
    where: LogWhereUniqueInput
    /**
     * In case the Log found by the `where` argument doesn't exist, create a new Log with this data.
     */
    create: XOR<LogCreateInput, LogUncheckedCreateInput>
    /**
     * In case the Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogUpdateInput, LogUncheckedUpdateInput>
  }

  /**
   * Log delete
   */
  export type LogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter which Log to delete.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log deleteMany
   */
  export type LogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to delete
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to delete.
     */
    limit?: number
  }

  /**
   * Log without action
   */
  export type LogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
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
    password: 'password',
    role: 'role',
    status: 'status',
    cameraType: 'cameraType'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AgencyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    agencyNumber: 'agencyNumber',
    cnpj: 'cnpj',
    cep: 'cep',
    state: 'state',
    city: 'city',
    district: 'district',
    street: 'street',
    number: 'number'
  };

  export type AgencyScalarFieldEnum = (typeof AgencyScalarFieldEnum)[keyof typeof AgencyScalarFieldEnum]


  export const EngineerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    cpf: 'cpf',
    education: 'education',
    registrationNumber: 'registrationNumber'
  };

  export type EngineerScalarFieldEnum = (typeof EngineerScalarFieldEnum)[keyof typeof EngineerScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    projectType: 'projectType',
    upeCode: 'upeCode',
    agencyId: 'agencyId',
    engineerId: 'engineerId',
    status: 'status',
    structureType: 'structureType',
    inspectorName: 'inspectorName',
    inspectionDate: 'inspectionDate',
    createdAt: 'createdAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const AccessKeyScalarFieldEnum: {
    id: 'id',
    token: 'token',
    projectId: 'projectId',
    userId: 'userId',
    expiresAt: 'expiresAt'
  };

  export type AccessKeyScalarFieldEnum = (typeof AccessKeyScalarFieldEnum)[keyof typeof AccessKeyScalarFieldEnum]


  export const PavementScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    pavement: 'pavement',
    height: 'height',
    area: 'area'
  };

  export type PavementScalarFieldEnum = (typeof PavementScalarFieldEnum)[keyof typeof PavementScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    pavementId: 'pavementId',
    name: 'name',
    locationType: 'locationType',
    height: 'height'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const MaterialFinishingScalarFieldEnum: {
    id: 'id',
    locationId: 'locationId',
    surface: 'surface',
    materialFinishing: 'materialFinishing'
  };

  export type MaterialFinishingScalarFieldEnum = (typeof MaterialFinishingScalarFieldEnum)[keyof typeof MaterialFinishingScalarFieldEnum]


  export const PhotoScalarFieldEnum: {
    id: 'id',
    locationId: 'locationId',
    filePath: 'filePath',
    selectedForPdf: 'selectedForPdf'
  };

  export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum]


  export const PathologyScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    locationId: 'locationId',
    referenceLocation: 'referenceLocation',
    title: 'title',
    description: 'description',
    recordDate: 'recordDate'
  };

  export type PathologyScalarFieldEnum = (typeof PathologyScalarFieldEnum)[keyof typeof PathologyScalarFieldEnum]


  export const PathologyPhotoScalarFieldEnum: {
    id: 'id',
    pathologyId: 'pathologyId',
    filePath: 'filePath'
  };

  export type PathologyPhotoScalarFieldEnum = (typeof PathologyPhotoScalarFieldEnum)[keyof typeof PathologyPhotoScalarFieldEnum]


  export const PdfScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    pdfType: 'pdfType',
    filePath: 'filePath',
    signedFilePath: 'signedFilePath',
    generatedAt: 'generatedAt'
  };

  export type PdfScalarFieldEnum = (typeof PdfScalarFieldEnum)[keyof typeof PdfScalarFieldEnum]


  export const StateLawScalarFieldEnum: {
    id: 'id',
    state: 'state',
    textState: 'textState',
    lawReference: 'lawReference',
    lawReference2: 'lawReference2',
    policeAbbreviation: 'policeAbbreviation',
    fullText: 'fullText',
    fullText2: 'fullText2',
    publishedAt: 'publishedAt',
    active: 'active'
  };

  export type StateLawScalarFieldEnum = (typeof StateLawScalarFieldEnum)[keyof typeof StateLawScalarFieldEnum]


  export const LogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    tableName: 'tableName',
    targetId: 'targetId',
    generatedAt: 'generatedAt'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'CameraType'
   */
  export type EnumCameraTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CameraType'>
    


  /**
   * Reference to a field of type 'CameraType[]'
   */
  export type ListEnumCameraTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CameraType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ProjectType'
   */
  export type EnumProjectTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectType'>
    


  /**
   * Reference to a field of type 'ProjectType[]'
   */
  export type ListEnumProjectTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectType[]'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'ProjectStatus[]'
   */
  export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'LocationType'
   */
  export type EnumLocationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LocationType'>
    


  /**
   * Reference to a field of type 'LocationType[]'
   */
  export type ListEnumLocationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LocationType[]'>
    


  /**
   * Reference to a field of type 'SurfaceType'
   */
  export type EnumSurfaceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SurfaceType'>
    


  /**
   * Reference to a field of type 'SurfaceType[]'
   */
  export type ListEnumSurfaceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SurfaceType[]'>
    


  /**
   * Reference to a field of type 'PdfType'
   */
  export type EnumPdfTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PdfType'>
    


  /**
   * Reference to a field of type 'PdfType[]'
   */
  export type ListEnumPdfTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PdfType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: BoolFilter<"User"> | boolean
    cameraType?: EnumCameraTypeNullableFilter<"User"> | $Enums.CameraType | null
    Log?: LogListRelationFilter
    AccessKey?: AccessKeyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    cameraType?: SortOrderInput | SortOrder
    Log?: LogOrderByRelationAggregateInput
    AccessKey?: AccessKeyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: BoolFilter<"User"> | boolean
    cameraType?: EnumCameraTypeNullableFilter<"User"> | $Enums.CameraType | null
    Log?: LogListRelationFilter
    AccessKey?: AccessKeyListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    cameraType?: SortOrderInput | SortOrder
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
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    status?: BoolWithAggregatesFilter<"User"> | boolean
    cameraType?: EnumCameraTypeNullableWithAggregatesFilter<"User"> | $Enums.CameraType | null
  }

  export type AgencyWhereInput = {
    AND?: AgencyWhereInput | AgencyWhereInput[]
    OR?: AgencyWhereInput[]
    NOT?: AgencyWhereInput | AgencyWhereInput[]
    id?: StringFilter<"Agency"> | string
    name?: StringFilter<"Agency"> | string
    agencyNumber?: IntFilter<"Agency"> | number
    cnpj?: StringNullableFilter<"Agency"> | string | null
    cep?: StringFilter<"Agency"> | string
    state?: StringFilter<"Agency"> | string
    city?: StringFilter<"Agency"> | string
    district?: StringFilter<"Agency"> | string
    street?: StringFilter<"Agency"> | string
    number?: IntFilter<"Agency"> | number
    Project?: ProjectListRelationFilter
  }

  export type AgencyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    agencyNumber?: SortOrder
    cnpj?: SortOrderInput | SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    district?: SortOrder
    street?: SortOrder
    number?: SortOrder
    Project?: ProjectOrderByRelationAggregateInput
  }

  export type AgencyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cnpj?: string
    AND?: AgencyWhereInput | AgencyWhereInput[]
    OR?: AgencyWhereInput[]
    NOT?: AgencyWhereInput | AgencyWhereInput[]
    name?: StringFilter<"Agency"> | string
    agencyNumber?: IntFilter<"Agency"> | number
    cep?: StringFilter<"Agency"> | string
    state?: StringFilter<"Agency"> | string
    city?: StringFilter<"Agency"> | string
    district?: StringFilter<"Agency"> | string
    street?: StringFilter<"Agency"> | string
    number?: IntFilter<"Agency"> | number
    Project?: ProjectListRelationFilter
  }, "id" | "cnpj">

  export type AgencyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    agencyNumber?: SortOrder
    cnpj?: SortOrderInput | SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    district?: SortOrder
    street?: SortOrder
    number?: SortOrder
    _count?: AgencyCountOrderByAggregateInput
    _avg?: AgencyAvgOrderByAggregateInput
    _max?: AgencyMaxOrderByAggregateInput
    _min?: AgencyMinOrderByAggregateInput
    _sum?: AgencySumOrderByAggregateInput
  }

  export type AgencyScalarWhereWithAggregatesInput = {
    AND?: AgencyScalarWhereWithAggregatesInput | AgencyScalarWhereWithAggregatesInput[]
    OR?: AgencyScalarWhereWithAggregatesInput[]
    NOT?: AgencyScalarWhereWithAggregatesInput | AgencyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agency"> | string
    name?: StringWithAggregatesFilter<"Agency"> | string
    agencyNumber?: IntWithAggregatesFilter<"Agency"> | number
    cnpj?: StringNullableWithAggregatesFilter<"Agency"> | string | null
    cep?: StringWithAggregatesFilter<"Agency"> | string
    state?: StringWithAggregatesFilter<"Agency"> | string
    city?: StringWithAggregatesFilter<"Agency"> | string
    district?: StringWithAggregatesFilter<"Agency"> | string
    street?: StringWithAggregatesFilter<"Agency"> | string
    number?: IntWithAggregatesFilter<"Agency"> | number
  }

  export type EngineerWhereInput = {
    AND?: EngineerWhereInput | EngineerWhereInput[]
    OR?: EngineerWhereInput[]
    NOT?: EngineerWhereInput | EngineerWhereInput[]
    id?: StringFilter<"Engineer"> | string
    name?: StringFilter<"Engineer"> | string
    email?: StringFilter<"Engineer"> | string
    phone?: StringFilter<"Engineer"> | string
    cpf?: StringFilter<"Engineer"> | string
    education?: StringFilter<"Engineer"> | string
    registrationNumber?: StringFilter<"Engineer"> | string
    Project?: ProjectListRelationFilter
  }

  export type EngineerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    cpf?: SortOrder
    education?: SortOrder
    registrationNumber?: SortOrder
    Project?: ProjectOrderByRelationAggregateInput
  }

  export type EngineerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    cpf?: string
    AND?: EngineerWhereInput | EngineerWhereInput[]
    OR?: EngineerWhereInput[]
    NOT?: EngineerWhereInput | EngineerWhereInput[]
    name?: StringFilter<"Engineer"> | string
    phone?: StringFilter<"Engineer"> | string
    education?: StringFilter<"Engineer"> | string
    registrationNumber?: StringFilter<"Engineer"> | string
    Project?: ProjectListRelationFilter
  }, "id" | "email" | "cpf">

  export type EngineerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    cpf?: SortOrder
    education?: SortOrder
    registrationNumber?: SortOrder
    _count?: EngineerCountOrderByAggregateInput
    _max?: EngineerMaxOrderByAggregateInput
    _min?: EngineerMinOrderByAggregateInput
  }

  export type EngineerScalarWhereWithAggregatesInput = {
    AND?: EngineerScalarWhereWithAggregatesInput | EngineerScalarWhereWithAggregatesInput[]
    OR?: EngineerScalarWhereWithAggregatesInput[]
    NOT?: EngineerScalarWhereWithAggregatesInput | EngineerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Engineer"> | string
    name?: StringWithAggregatesFilter<"Engineer"> | string
    email?: StringWithAggregatesFilter<"Engineer"> | string
    phone?: StringWithAggregatesFilter<"Engineer"> | string
    cpf?: StringWithAggregatesFilter<"Engineer"> | string
    education?: StringWithAggregatesFilter<"Engineer"> | string
    registrationNumber?: StringWithAggregatesFilter<"Engineer"> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    projectType?: EnumProjectTypeFilter<"Project"> | $Enums.ProjectType
    upeCode?: IntFilter<"Project"> | number
    agencyId?: StringFilter<"Project"> | string
    engineerId?: StringFilter<"Project"> | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    structureType?: StringNullableFilter<"Project"> | string | null
    inspectorName?: StringNullableFilter<"Project"> | string | null
    inspectionDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    agency?: XOR<AgencyScalarRelationFilter, AgencyWhereInput>
    engineer?: XOR<EngineerScalarRelationFilter, EngineerWhereInput>
    AccessKey?: AccessKeyListRelationFilter
    Pavement?: PavementListRelationFilter
    Location?: LocationListRelationFilter
    Pathology?: PathologyListRelationFilter
    Pdf?: PdfListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    projectType?: SortOrder
    upeCode?: SortOrder
    agencyId?: SortOrder
    engineerId?: SortOrder
    status?: SortOrder
    structureType?: SortOrderInput | SortOrder
    inspectorName?: SortOrderInput | SortOrder
    inspectionDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    agency?: AgencyOrderByWithRelationInput
    engineer?: EngineerOrderByWithRelationInput
    AccessKey?: AccessKeyOrderByRelationAggregateInput
    Pavement?: PavementOrderByRelationAggregateInput
    Location?: LocationOrderByRelationAggregateInput
    Pathology?: PathologyOrderByRelationAggregateInput
    Pdf?: PdfOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    projectType?: EnumProjectTypeFilter<"Project"> | $Enums.ProjectType
    upeCode?: IntFilter<"Project"> | number
    agencyId?: StringFilter<"Project"> | string
    engineerId?: StringFilter<"Project"> | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    structureType?: StringNullableFilter<"Project"> | string | null
    inspectorName?: StringNullableFilter<"Project"> | string | null
    inspectionDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    agency?: XOR<AgencyScalarRelationFilter, AgencyWhereInput>
    engineer?: XOR<EngineerScalarRelationFilter, EngineerWhereInput>
    AccessKey?: AccessKeyListRelationFilter
    Pavement?: PavementListRelationFilter
    Location?: LocationListRelationFilter
    Pathology?: PathologyListRelationFilter
    Pdf?: PdfListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    projectType?: SortOrder
    upeCode?: SortOrder
    agencyId?: SortOrder
    engineerId?: SortOrder
    status?: SortOrder
    structureType?: SortOrderInput | SortOrder
    inspectorName?: SortOrderInput | SortOrder
    inspectionDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    projectType?: EnumProjectTypeWithAggregatesFilter<"Project"> | $Enums.ProjectType
    upeCode?: IntWithAggregatesFilter<"Project"> | number
    agencyId?: StringWithAggregatesFilter<"Project"> | string
    engineerId?: StringWithAggregatesFilter<"Project"> | string
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    structureType?: StringNullableWithAggregatesFilter<"Project"> | string | null
    inspectorName?: StringNullableWithAggregatesFilter<"Project"> | string | null
    inspectionDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type AccessKeyWhereInput = {
    AND?: AccessKeyWhereInput | AccessKeyWhereInput[]
    OR?: AccessKeyWhereInput[]
    NOT?: AccessKeyWhereInput | AccessKeyWhereInput[]
    id?: StringFilter<"AccessKey"> | string
    token?: StringFilter<"AccessKey"> | string
    projectId?: StringFilter<"AccessKey"> | string
    userId?: StringFilter<"AccessKey"> | string
    expiresAt?: DateTimeFilter<"AccessKey"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccessKeyOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AccessKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: AccessKeyWhereInput | AccessKeyWhereInput[]
    OR?: AccessKeyWhereInput[]
    NOT?: AccessKeyWhereInput | AccessKeyWhereInput[]
    projectId?: StringFilter<"AccessKey"> | string
    userId?: StringFilter<"AccessKey"> | string
    expiresAt?: DateTimeFilter<"AccessKey"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type AccessKeyOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    _count?: AccessKeyCountOrderByAggregateInput
    _max?: AccessKeyMaxOrderByAggregateInput
    _min?: AccessKeyMinOrderByAggregateInput
  }

  export type AccessKeyScalarWhereWithAggregatesInput = {
    AND?: AccessKeyScalarWhereWithAggregatesInput | AccessKeyScalarWhereWithAggregatesInput[]
    OR?: AccessKeyScalarWhereWithAggregatesInput[]
    NOT?: AccessKeyScalarWhereWithAggregatesInput | AccessKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccessKey"> | string
    token?: StringWithAggregatesFilter<"AccessKey"> | string
    projectId?: StringWithAggregatesFilter<"AccessKey"> | string
    userId?: StringWithAggregatesFilter<"AccessKey"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"AccessKey"> | Date | string
  }

  export type PavementWhereInput = {
    AND?: PavementWhereInput | PavementWhereInput[]
    OR?: PavementWhereInput[]
    NOT?: PavementWhereInput | PavementWhereInput[]
    id?: StringFilter<"Pavement"> | string
    projectId?: StringFilter<"Pavement"> | string
    pavement?: StringFilter<"Pavement"> | string
    height?: FloatFilter<"Pavement"> | number
    area?: FloatNullableFilter<"Pavement"> | number | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    Location?: LocationListRelationFilter
  }

  export type PavementOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    pavement?: SortOrder
    height?: SortOrder
    area?: SortOrderInput | SortOrder
    project?: ProjectOrderByWithRelationInput
    Location?: LocationOrderByRelationAggregateInput
  }

  export type PavementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_pavement?: PavementProjectIdPavementCompoundUniqueInput
    AND?: PavementWhereInput | PavementWhereInput[]
    OR?: PavementWhereInput[]
    NOT?: PavementWhereInput | PavementWhereInput[]
    projectId?: StringFilter<"Pavement"> | string
    pavement?: StringFilter<"Pavement"> | string
    height?: FloatFilter<"Pavement"> | number
    area?: FloatNullableFilter<"Pavement"> | number | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    Location?: LocationListRelationFilter
  }, "id" | "projectId_pavement">

  export type PavementOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    pavement?: SortOrder
    height?: SortOrder
    area?: SortOrderInput | SortOrder
    _count?: PavementCountOrderByAggregateInput
    _avg?: PavementAvgOrderByAggregateInput
    _max?: PavementMaxOrderByAggregateInput
    _min?: PavementMinOrderByAggregateInput
    _sum?: PavementSumOrderByAggregateInput
  }

  export type PavementScalarWhereWithAggregatesInput = {
    AND?: PavementScalarWhereWithAggregatesInput | PavementScalarWhereWithAggregatesInput[]
    OR?: PavementScalarWhereWithAggregatesInput[]
    NOT?: PavementScalarWhereWithAggregatesInput | PavementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pavement"> | string
    projectId?: StringWithAggregatesFilter<"Pavement"> | string
    pavement?: StringWithAggregatesFilter<"Pavement"> | string
    height?: FloatWithAggregatesFilter<"Pavement"> | number
    area?: FloatNullableWithAggregatesFilter<"Pavement"> | number | null
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: StringFilter<"Location"> | string
    projectId?: StringFilter<"Location"> | string
    pavementId?: StringNullableFilter<"Location"> | string | null
    name?: StringFilter<"Location"> | string
    locationType?: EnumLocationTypeFilter<"Location"> | $Enums.LocationType
    height?: FloatNullableFilter<"Location"> | number | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    pavement?: XOR<PavementNullableScalarRelationFilter, PavementWhereInput> | null
    MaterialFinishing?: MaterialFinishingListRelationFilter
    Photo?: PhotoListRelationFilter
    Pathology?: PathologyListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    pavementId?: SortOrderInput | SortOrder
    name?: SortOrder
    locationType?: SortOrder
    height?: SortOrderInput | SortOrder
    project?: ProjectOrderByWithRelationInput
    pavement?: PavementOrderByWithRelationInput
    MaterialFinishing?: MaterialFinishingOrderByRelationAggregateInput
    Photo?: PhotoOrderByRelationAggregateInput
    Pathology?: PathologyOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    projectId?: StringFilter<"Location"> | string
    pavementId?: StringNullableFilter<"Location"> | string | null
    name?: StringFilter<"Location"> | string
    locationType?: EnumLocationTypeFilter<"Location"> | $Enums.LocationType
    height?: FloatNullableFilter<"Location"> | number | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    pavement?: XOR<PavementNullableScalarRelationFilter, PavementWhereInput> | null
    MaterialFinishing?: MaterialFinishingListRelationFilter
    Photo?: PhotoListRelationFilter
    Pathology?: PathologyListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    pavementId?: SortOrderInput | SortOrder
    name?: SortOrder
    locationType?: SortOrder
    height?: SortOrderInput | SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Location"> | string
    projectId?: StringWithAggregatesFilter<"Location"> | string
    pavementId?: StringNullableWithAggregatesFilter<"Location"> | string | null
    name?: StringWithAggregatesFilter<"Location"> | string
    locationType?: EnumLocationTypeWithAggregatesFilter<"Location"> | $Enums.LocationType
    height?: FloatNullableWithAggregatesFilter<"Location"> | number | null
  }

  export type MaterialFinishingWhereInput = {
    AND?: MaterialFinishingWhereInput | MaterialFinishingWhereInput[]
    OR?: MaterialFinishingWhereInput[]
    NOT?: MaterialFinishingWhereInput | MaterialFinishingWhereInput[]
    id?: StringFilter<"MaterialFinishing"> | string
    locationId?: StringFilter<"MaterialFinishing"> | string
    surface?: EnumSurfaceTypeFilter<"MaterialFinishing"> | $Enums.SurfaceType
    materialFinishing?: StringFilter<"MaterialFinishing"> | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
  }

  export type MaterialFinishingOrderByWithRelationInput = {
    id?: SortOrder
    locationId?: SortOrder
    surface?: SortOrder
    materialFinishing?: SortOrder
    location?: LocationOrderByWithRelationInput
  }

  export type MaterialFinishingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaterialFinishingWhereInput | MaterialFinishingWhereInput[]
    OR?: MaterialFinishingWhereInput[]
    NOT?: MaterialFinishingWhereInput | MaterialFinishingWhereInput[]
    locationId?: StringFilter<"MaterialFinishing"> | string
    surface?: EnumSurfaceTypeFilter<"MaterialFinishing"> | $Enums.SurfaceType
    materialFinishing?: StringFilter<"MaterialFinishing"> | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
  }, "id">

  export type MaterialFinishingOrderByWithAggregationInput = {
    id?: SortOrder
    locationId?: SortOrder
    surface?: SortOrder
    materialFinishing?: SortOrder
    _count?: MaterialFinishingCountOrderByAggregateInput
    _max?: MaterialFinishingMaxOrderByAggregateInput
    _min?: MaterialFinishingMinOrderByAggregateInput
  }

  export type MaterialFinishingScalarWhereWithAggregatesInput = {
    AND?: MaterialFinishingScalarWhereWithAggregatesInput | MaterialFinishingScalarWhereWithAggregatesInput[]
    OR?: MaterialFinishingScalarWhereWithAggregatesInput[]
    NOT?: MaterialFinishingScalarWhereWithAggregatesInput | MaterialFinishingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MaterialFinishing"> | string
    locationId?: StringWithAggregatesFilter<"MaterialFinishing"> | string
    surface?: EnumSurfaceTypeWithAggregatesFilter<"MaterialFinishing"> | $Enums.SurfaceType
    materialFinishing?: StringWithAggregatesFilter<"MaterialFinishing"> | string
  }

  export type PhotoWhereInput = {
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    id?: StringFilter<"Photo"> | string
    locationId?: StringFilter<"Photo"> | string
    filePath?: StringFilter<"Photo"> | string
    selectedForPdf?: BoolFilter<"Photo"> | boolean
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
  }

  export type PhotoOrderByWithRelationInput = {
    id?: SortOrder
    locationId?: SortOrder
    filePath?: SortOrder
    selectedForPdf?: SortOrder
    location?: LocationOrderByWithRelationInput
  }

  export type PhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    locationId?: StringFilter<"Photo"> | string
    filePath?: StringFilter<"Photo"> | string
    selectedForPdf?: BoolFilter<"Photo"> | boolean
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
  }, "id">

  export type PhotoOrderByWithAggregationInput = {
    id?: SortOrder
    locationId?: SortOrder
    filePath?: SortOrder
    selectedForPdf?: SortOrder
    _count?: PhotoCountOrderByAggregateInput
    _max?: PhotoMaxOrderByAggregateInput
    _min?: PhotoMinOrderByAggregateInput
  }

  export type PhotoScalarWhereWithAggregatesInput = {
    AND?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    OR?: PhotoScalarWhereWithAggregatesInput[]
    NOT?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Photo"> | string
    locationId?: StringWithAggregatesFilter<"Photo"> | string
    filePath?: StringWithAggregatesFilter<"Photo"> | string
    selectedForPdf?: BoolWithAggregatesFilter<"Photo"> | boolean
  }

  export type PathologyWhereInput = {
    AND?: PathologyWhereInput | PathologyWhereInput[]
    OR?: PathologyWhereInput[]
    NOT?: PathologyWhereInput | PathologyWhereInput[]
    id?: StringFilter<"Pathology"> | string
    projectId?: StringFilter<"Pathology"> | string
    locationId?: StringFilter<"Pathology"> | string
    referenceLocation?: StringFilter<"Pathology"> | string
    title?: StringFilter<"Pathology"> | string
    description?: StringFilter<"Pathology"> | string
    recordDate?: DateTimeFilter<"Pathology"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    PathologyPhoto?: PathologyPhotoListRelationFilter
  }

  export type PathologyOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    locationId?: SortOrder
    referenceLocation?: SortOrder
    title?: SortOrder
    description?: SortOrder
    recordDate?: SortOrder
    project?: ProjectOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
    PathologyPhoto?: PathologyPhotoOrderByRelationAggregateInput
  }

  export type PathologyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PathologyWhereInput | PathologyWhereInput[]
    OR?: PathologyWhereInput[]
    NOT?: PathologyWhereInput | PathologyWhereInput[]
    projectId?: StringFilter<"Pathology"> | string
    locationId?: StringFilter<"Pathology"> | string
    referenceLocation?: StringFilter<"Pathology"> | string
    title?: StringFilter<"Pathology"> | string
    description?: StringFilter<"Pathology"> | string
    recordDate?: DateTimeFilter<"Pathology"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    PathologyPhoto?: PathologyPhotoListRelationFilter
  }, "id">

  export type PathologyOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    locationId?: SortOrder
    referenceLocation?: SortOrder
    title?: SortOrder
    description?: SortOrder
    recordDate?: SortOrder
    _count?: PathologyCountOrderByAggregateInput
    _max?: PathologyMaxOrderByAggregateInput
    _min?: PathologyMinOrderByAggregateInput
  }

  export type PathologyScalarWhereWithAggregatesInput = {
    AND?: PathologyScalarWhereWithAggregatesInput | PathologyScalarWhereWithAggregatesInput[]
    OR?: PathologyScalarWhereWithAggregatesInput[]
    NOT?: PathologyScalarWhereWithAggregatesInput | PathologyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pathology"> | string
    projectId?: StringWithAggregatesFilter<"Pathology"> | string
    locationId?: StringWithAggregatesFilter<"Pathology"> | string
    referenceLocation?: StringWithAggregatesFilter<"Pathology"> | string
    title?: StringWithAggregatesFilter<"Pathology"> | string
    description?: StringWithAggregatesFilter<"Pathology"> | string
    recordDate?: DateTimeWithAggregatesFilter<"Pathology"> | Date | string
  }

  export type PathologyPhotoWhereInput = {
    AND?: PathologyPhotoWhereInput | PathologyPhotoWhereInput[]
    OR?: PathologyPhotoWhereInput[]
    NOT?: PathologyPhotoWhereInput | PathologyPhotoWhereInput[]
    id?: StringFilter<"PathologyPhoto"> | string
    pathologyId?: StringFilter<"PathologyPhoto"> | string
    filePath?: StringFilter<"PathologyPhoto"> | string
    pathology?: XOR<PathologyScalarRelationFilter, PathologyWhereInput>
  }

  export type PathologyPhotoOrderByWithRelationInput = {
    id?: SortOrder
    pathologyId?: SortOrder
    filePath?: SortOrder
    pathology?: PathologyOrderByWithRelationInput
  }

  export type PathologyPhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PathologyPhotoWhereInput | PathologyPhotoWhereInput[]
    OR?: PathologyPhotoWhereInput[]
    NOT?: PathologyPhotoWhereInput | PathologyPhotoWhereInput[]
    pathologyId?: StringFilter<"PathologyPhoto"> | string
    filePath?: StringFilter<"PathologyPhoto"> | string
    pathology?: XOR<PathologyScalarRelationFilter, PathologyWhereInput>
  }, "id">

  export type PathologyPhotoOrderByWithAggregationInput = {
    id?: SortOrder
    pathologyId?: SortOrder
    filePath?: SortOrder
    _count?: PathologyPhotoCountOrderByAggregateInput
    _max?: PathologyPhotoMaxOrderByAggregateInput
    _min?: PathologyPhotoMinOrderByAggregateInput
  }

  export type PathologyPhotoScalarWhereWithAggregatesInput = {
    AND?: PathologyPhotoScalarWhereWithAggregatesInput | PathologyPhotoScalarWhereWithAggregatesInput[]
    OR?: PathologyPhotoScalarWhereWithAggregatesInput[]
    NOT?: PathologyPhotoScalarWhereWithAggregatesInput | PathologyPhotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PathologyPhoto"> | string
    pathologyId?: StringWithAggregatesFilter<"PathologyPhoto"> | string
    filePath?: StringWithAggregatesFilter<"PathologyPhoto"> | string
  }

  export type PdfWhereInput = {
    AND?: PdfWhereInput | PdfWhereInput[]
    OR?: PdfWhereInput[]
    NOT?: PdfWhereInput | PdfWhereInput[]
    id?: StringFilter<"Pdf"> | string
    projectId?: StringFilter<"Pdf"> | string
    pdfType?: EnumPdfTypeFilter<"Pdf"> | $Enums.PdfType
    filePath?: StringFilter<"Pdf"> | string
    signedFilePath?: StringNullableFilter<"Pdf"> | string | null
    generatedAt?: DateTimeFilter<"Pdf"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type PdfOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    pdfType?: SortOrder
    filePath?: SortOrder
    signedFilePath?: SortOrderInput | SortOrder
    generatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type PdfWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PdfWhereInput | PdfWhereInput[]
    OR?: PdfWhereInput[]
    NOT?: PdfWhereInput | PdfWhereInput[]
    projectId?: StringFilter<"Pdf"> | string
    pdfType?: EnumPdfTypeFilter<"Pdf"> | $Enums.PdfType
    filePath?: StringFilter<"Pdf"> | string
    signedFilePath?: StringNullableFilter<"Pdf"> | string | null
    generatedAt?: DateTimeFilter<"Pdf"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type PdfOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    pdfType?: SortOrder
    filePath?: SortOrder
    signedFilePath?: SortOrderInput | SortOrder
    generatedAt?: SortOrder
    _count?: PdfCountOrderByAggregateInput
    _max?: PdfMaxOrderByAggregateInput
    _min?: PdfMinOrderByAggregateInput
  }

  export type PdfScalarWhereWithAggregatesInput = {
    AND?: PdfScalarWhereWithAggregatesInput | PdfScalarWhereWithAggregatesInput[]
    OR?: PdfScalarWhereWithAggregatesInput[]
    NOT?: PdfScalarWhereWithAggregatesInput | PdfScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pdf"> | string
    projectId?: StringWithAggregatesFilter<"Pdf"> | string
    pdfType?: EnumPdfTypeWithAggregatesFilter<"Pdf"> | $Enums.PdfType
    filePath?: StringWithAggregatesFilter<"Pdf"> | string
    signedFilePath?: StringNullableWithAggregatesFilter<"Pdf"> | string | null
    generatedAt?: DateTimeWithAggregatesFilter<"Pdf"> | Date | string
  }

  export type StateLawWhereInput = {
    AND?: StateLawWhereInput | StateLawWhereInput[]
    OR?: StateLawWhereInput[]
    NOT?: StateLawWhereInput | StateLawWhereInput[]
    id?: StringFilter<"StateLaw"> | string
    state?: StringFilter<"StateLaw"> | string
    textState?: StringFilter<"StateLaw"> | string
    lawReference?: StringFilter<"StateLaw"> | string
    lawReference2?: StringFilter<"StateLaw"> | string
    policeAbbreviation?: StringFilter<"StateLaw"> | string
    fullText?: StringNullableFilter<"StateLaw"> | string | null
    fullText2?: StringNullableFilter<"StateLaw"> | string | null
    publishedAt?: DateTimeFilter<"StateLaw"> | Date | string
    active?: BoolFilter<"StateLaw"> | boolean
  }

  export type StateLawOrderByWithRelationInput = {
    id?: SortOrder
    state?: SortOrder
    textState?: SortOrder
    lawReference?: SortOrder
    lawReference2?: SortOrder
    policeAbbreviation?: SortOrder
    fullText?: SortOrderInput | SortOrder
    fullText2?: SortOrderInput | SortOrder
    publishedAt?: SortOrder
    active?: SortOrder
  }

  export type StateLawWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StateLawWhereInput | StateLawWhereInput[]
    OR?: StateLawWhereInput[]
    NOT?: StateLawWhereInput | StateLawWhereInput[]
    state?: StringFilter<"StateLaw"> | string
    textState?: StringFilter<"StateLaw"> | string
    lawReference?: StringFilter<"StateLaw"> | string
    lawReference2?: StringFilter<"StateLaw"> | string
    policeAbbreviation?: StringFilter<"StateLaw"> | string
    fullText?: StringNullableFilter<"StateLaw"> | string | null
    fullText2?: StringNullableFilter<"StateLaw"> | string | null
    publishedAt?: DateTimeFilter<"StateLaw"> | Date | string
    active?: BoolFilter<"StateLaw"> | boolean
  }, "id">

  export type StateLawOrderByWithAggregationInput = {
    id?: SortOrder
    state?: SortOrder
    textState?: SortOrder
    lawReference?: SortOrder
    lawReference2?: SortOrder
    policeAbbreviation?: SortOrder
    fullText?: SortOrderInput | SortOrder
    fullText2?: SortOrderInput | SortOrder
    publishedAt?: SortOrder
    active?: SortOrder
    _count?: StateLawCountOrderByAggregateInput
    _max?: StateLawMaxOrderByAggregateInput
    _min?: StateLawMinOrderByAggregateInput
  }

  export type StateLawScalarWhereWithAggregatesInput = {
    AND?: StateLawScalarWhereWithAggregatesInput | StateLawScalarWhereWithAggregatesInput[]
    OR?: StateLawScalarWhereWithAggregatesInput[]
    NOT?: StateLawScalarWhereWithAggregatesInput | StateLawScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StateLaw"> | string
    state?: StringWithAggregatesFilter<"StateLaw"> | string
    textState?: StringWithAggregatesFilter<"StateLaw"> | string
    lawReference?: StringWithAggregatesFilter<"StateLaw"> | string
    lawReference2?: StringWithAggregatesFilter<"StateLaw"> | string
    policeAbbreviation?: StringWithAggregatesFilter<"StateLaw"> | string
    fullText?: StringNullableWithAggregatesFilter<"StateLaw"> | string | null
    fullText2?: StringNullableWithAggregatesFilter<"StateLaw"> | string | null
    publishedAt?: DateTimeWithAggregatesFilter<"StateLaw"> | Date | string
    active?: BoolWithAggregatesFilter<"StateLaw"> | boolean
  }

  export type LogWhereInput = {
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    id?: StringFilter<"Log"> | string
    userId?: StringFilter<"Log"> | string
    action?: StringFilter<"Log"> | string
    tableName?: StringFilter<"Log"> | string
    targetId?: StringFilter<"Log"> | string
    generatedAt?: DateTimeFilter<"Log"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    tableName?: SortOrder
    targetId?: SortOrder
    generatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    userId?: StringFilter<"Log"> | string
    action?: StringFilter<"Log"> | string
    tableName?: StringFilter<"Log"> | string
    targetId?: StringFilter<"Log"> | string
    generatedAt?: DateTimeFilter<"Log"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    tableName?: SortOrder
    targetId?: SortOrder
    generatedAt?: SortOrder
    _count?: LogCountOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    OR?: LogScalarWhereWithAggregatesInput[]
    NOT?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Log"> | string
    userId?: StringWithAggregatesFilter<"Log"> | string
    action?: StringWithAggregatesFilter<"Log"> | string
    tableName?: StringWithAggregatesFilter<"Log"> | string
    targetId?: StringWithAggregatesFilter<"Log"> | string
    generatedAt?: DateTimeWithAggregatesFilter<"Log"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: $Enums.UserRole
    status: boolean
    cameraType?: $Enums.CameraType | null
    Log?: LogCreateNestedManyWithoutUserInput
    AccessKey?: AccessKeyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: $Enums.UserRole
    status: boolean
    cameraType?: $Enums.CameraType | null
    Log?: LogUncheckedCreateNestedManyWithoutUserInput
    AccessKey?: AccessKeyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: BoolFieldUpdateOperationsInput | boolean
    cameraType?: NullableEnumCameraTypeFieldUpdateOperationsInput | $Enums.CameraType | null
    Log?: LogUpdateManyWithoutUserNestedInput
    AccessKey?: AccessKeyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: BoolFieldUpdateOperationsInput | boolean
    cameraType?: NullableEnumCameraTypeFieldUpdateOperationsInput | $Enums.CameraType | null
    Log?: LogUncheckedUpdateManyWithoutUserNestedInput
    AccessKey?: AccessKeyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: $Enums.UserRole
    status: boolean
    cameraType?: $Enums.CameraType | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: BoolFieldUpdateOperationsInput | boolean
    cameraType?: NullableEnumCameraTypeFieldUpdateOperationsInput | $Enums.CameraType | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: BoolFieldUpdateOperationsInput | boolean
    cameraType?: NullableEnumCameraTypeFieldUpdateOperationsInput | $Enums.CameraType | null
  }

  export type AgencyCreateInput = {
    id?: string
    name: string
    agencyNumber: number
    cnpj?: string | null
    cep: string
    state: string
    city: string
    district: string
    street: string
    number: number
    Project?: ProjectCreateNestedManyWithoutAgencyInput
  }

  export type AgencyUncheckedCreateInput = {
    id?: string
    name: string
    agencyNumber: number
    cnpj?: string | null
    cep: string
    state: string
    city: string
    district: string
    street: string
    number: number
    Project?: ProjectUncheckedCreateNestedManyWithoutAgencyInput
  }

  export type AgencyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    agencyNumber?: IntFieldUpdateOperationsInput | number
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    Project?: ProjectUpdateManyWithoutAgencyNestedInput
  }

  export type AgencyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    agencyNumber?: IntFieldUpdateOperationsInput | number
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    Project?: ProjectUncheckedUpdateManyWithoutAgencyNestedInput
  }

  export type AgencyCreateManyInput = {
    id?: string
    name: string
    agencyNumber: number
    cnpj?: string | null
    cep: string
    state: string
    city: string
    district: string
    street: string
    number: number
  }

  export type AgencyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    agencyNumber?: IntFieldUpdateOperationsInput | number
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
  }

  export type AgencyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    agencyNumber?: IntFieldUpdateOperationsInput | number
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
  }

  export type EngineerCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    cpf: string
    education: string
    registrationNumber: string
    Project?: ProjectCreateNestedManyWithoutEngineerInput
  }

  export type EngineerUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    cpf: string
    education: string
    registrationNumber: string
    Project?: ProjectUncheckedCreateNestedManyWithoutEngineerInput
  }

  export type EngineerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    Project?: ProjectUpdateManyWithoutEngineerNestedInput
  }

  export type EngineerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    Project?: ProjectUncheckedUpdateManyWithoutEngineerNestedInput
  }

  export type EngineerCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    cpf: string
    education: string
    registrationNumber: string
  }

  export type EngineerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
  }

  export type EngineerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    id?: string
    projectType: $Enums.ProjectType
    upeCode: number
    status: $Enums.ProjectStatus
    structureType?: string | null
    inspectorName?: string | null
    inspectionDate?: Date | string | null
    createdAt?: Date | string
    agency: AgencyCreateNestedOneWithoutProjectInput
    engineer: EngineerCreateNestedOneWithoutProjectInput
    AccessKey?: AccessKeyCreateNestedManyWithoutProjectInput
    Pavement?: PavementCreateNestedManyWithoutProjectInput
    Location?: LocationCreateNestedManyWithoutProjectInput
    Pathology?: PathologyCreateNestedManyWithoutProjectInput
    Pdf?: PdfCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    projectType: $Enums.ProjectType
    upeCode: number
    agencyId: string
    engineerId: string
    status: $Enums.ProjectStatus
    structureType?: string | null
    inspectorName?: string | null
    inspectionDate?: Date | string | null
    createdAt?: Date | string
    AccessKey?: AccessKeyUncheckedCreateNestedManyWithoutProjectInput
    Pavement?: PavementUncheckedCreateNestedManyWithoutProjectInput
    Location?: LocationUncheckedCreateNestedManyWithoutProjectInput
    Pathology?: PathologyUncheckedCreateNestedManyWithoutProjectInput
    Pdf?: PdfUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    upeCode?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    structureType?: NullableStringFieldUpdateOperationsInput | string | null
    inspectorName?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencyUpdateOneRequiredWithoutProjectNestedInput
    engineer?: EngineerUpdateOneRequiredWithoutProjectNestedInput
    AccessKey?: AccessKeyUpdateManyWithoutProjectNestedInput
    Pavement?: PavementUpdateManyWithoutProjectNestedInput
    Location?: LocationUpdateManyWithoutProjectNestedInput
    Pathology?: PathologyUpdateManyWithoutProjectNestedInput
    Pdf?: PdfUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    upeCode?: IntFieldUpdateOperationsInput | number
    agencyId?: StringFieldUpdateOperationsInput | string
    engineerId?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    structureType?: NullableStringFieldUpdateOperationsInput | string | null
    inspectorName?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AccessKey?: AccessKeyUncheckedUpdateManyWithoutProjectNestedInput
    Pavement?: PavementUncheckedUpdateManyWithoutProjectNestedInput
    Location?: LocationUncheckedUpdateManyWithoutProjectNestedInput
    Pathology?: PathologyUncheckedUpdateManyWithoutProjectNestedInput
    Pdf?: PdfUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    projectType: $Enums.ProjectType
    upeCode: number
    agencyId: string
    engineerId: string
    status: $Enums.ProjectStatus
    structureType?: string | null
    inspectorName?: string | null
    inspectionDate?: Date | string | null
    createdAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    upeCode?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    structureType?: NullableStringFieldUpdateOperationsInput | string | null
    inspectorName?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    upeCode?: IntFieldUpdateOperationsInput | number
    agencyId?: StringFieldUpdateOperationsInput | string
    engineerId?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    structureType?: NullableStringFieldUpdateOperationsInput | string | null
    inspectorName?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessKeyCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    project: ProjectCreateNestedOneWithoutAccessKeyInput
    user: UserCreateNestedOneWithoutAccessKeyInput
  }

  export type AccessKeyUncheckedCreateInput = {
    id?: string
    token: string
    projectId: string
    userId: string
    expiresAt: Date | string
  }

  export type AccessKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutAccessKeyNestedInput
    user?: UserUpdateOneRequiredWithoutAccessKeyNestedInput
  }

  export type AccessKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessKeyCreateManyInput = {
    id?: string
    token: string
    projectId: string
    userId: string
    expiresAt: Date | string
  }

  export type AccessKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PavementCreateInput = {
    id?: string
    pavement: string
    height: number
    area?: number | null
    project: ProjectCreateNestedOneWithoutPavementInput
    Location?: LocationCreateNestedManyWithoutPavementInput
  }

  export type PavementUncheckedCreateInput = {
    id?: string
    projectId: string
    pavement: string
    height: number
    area?: number | null
    Location?: LocationUncheckedCreateNestedManyWithoutPavementInput
  }

  export type PavementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pavement?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    project?: ProjectUpdateOneRequiredWithoutPavementNestedInput
    Location?: LocationUpdateManyWithoutPavementNestedInput
  }

  export type PavementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    pavement?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    Location?: LocationUncheckedUpdateManyWithoutPavementNestedInput
  }

  export type PavementCreateManyInput = {
    id?: string
    projectId: string
    pavement: string
    height: number
    area?: number | null
  }

  export type PavementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pavement?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PavementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    pavement?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type LocationCreateInput = {
    id?: string
    name: string
    locationType: $Enums.LocationType
    height?: number | null
    project: ProjectCreateNestedOneWithoutLocationInput
    pavement?: PavementCreateNestedOneWithoutLocationInput
    MaterialFinishing?: MaterialFinishingCreateNestedManyWithoutLocationInput
    Photo?: PhotoCreateNestedManyWithoutLocationInput
    Pathology?: PathologyCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: string
    projectId: string
    pavementId?: string | null
    name: string
    locationType: $Enums.LocationType
    height?: number | null
    MaterialFinishing?: MaterialFinishingUncheckedCreateNestedManyWithoutLocationInput
    Photo?: PhotoUncheckedCreateNestedManyWithoutLocationInput
    Pathology?: PathologyUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    locationType?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    project?: ProjectUpdateOneRequiredWithoutLocationNestedInput
    pavement?: PavementUpdateOneWithoutLocationNestedInput
    MaterialFinishing?: MaterialFinishingUpdateManyWithoutLocationNestedInput
    Photo?: PhotoUpdateManyWithoutLocationNestedInput
    Pathology?: PathologyUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    pavementId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    locationType?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    MaterialFinishing?: MaterialFinishingUncheckedUpdateManyWithoutLocationNestedInput
    Photo?: PhotoUncheckedUpdateManyWithoutLocationNestedInput
    Pathology?: PathologyUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: string
    projectId: string
    pavementId?: string | null
    name: string
    locationType: $Enums.LocationType
    height?: number | null
  }

  export type LocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    locationType?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    height?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    pavementId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    locationType?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    height?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MaterialFinishingCreateInput = {
    id?: string
    surface: $Enums.SurfaceType
    materialFinishing: string
    location: LocationCreateNestedOneWithoutMaterialFinishingInput
  }

  export type MaterialFinishingUncheckedCreateInput = {
    id?: string
    locationId: string
    surface: $Enums.SurfaceType
    materialFinishing: string
  }

  export type MaterialFinishingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    surface?: EnumSurfaceTypeFieldUpdateOperationsInput | $Enums.SurfaceType
    materialFinishing?: StringFieldUpdateOperationsInput | string
    location?: LocationUpdateOneRequiredWithoutMaterialFinishingNestedInput
  }

  export type MaterialFinishingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    surface?: EnumSurfaceTypeFieldUpdateOperationsInput | $Enums.SurfaceType
    materialFinishing?: StringFieldUpdateOperationsInput | string
  }

  export type MaterialFinishingCreateManyInput = {
    id?: string
    locationId: string
    surface: $Enums.SurfaceType
    materialFinishing: string
  }

  export type MaterialFinishingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    surface?: EnumSurfaceTypeFieldUpdateOperationsInput | $Enums.SurfaceType
    materialFinishing?: StringFieldUpdateOperationsInput | string
  }

  export type MaterialFinishingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    surface?: EnumSurfaceTypeFieldUpdateOperationsInput | $Enums.SurfaceType
    materialFinishing?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoCreateInput = {
    id?: string
    filePath: string
    selectedForPdf: boolean
    location: LocationCreateNestedOneWithoutPhotoInput
  }

  export type PhotoUncheckedCreateInput = {
    id?: string
    locationId: string
    filePath: string
    selectedForPdf: boolean
  }

  export type PhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    selectedForPdf?: BoolFieldUpdateOperationsInput | boolean
    location?: LocationUpdateOneRequiredWithoutPhotoNestedInput
  }

  export type PhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    selectedForPdf?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PhotoCreateManyInput = {
    id?: string
    locationId: string
    filePath: string
    selectedForPdf: boolean
  }

  export type PhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    selectedForPdf?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    selectedForPdf?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PathologyCreateInput = {
    id?: string
    referenceLocation: string
    title: string
    description: string
    recordDate: Date | string
    project: ProjectCreateNestedOneWithoutPathologyInput
    location: LocationCreateNestedOneWithoutPathologyInput
    PathologyPhoto?: PathologyPhotoCreateNestedManyWithoutPathologyInput
  }

  export type PathologyUncheckedCreateInput = {
    id?: string
    projectId: string
    locationId: string
    referenceLocation: string
    title: string
    description: string
    recordDate: Date | string
    PathologyPhoto?: PathologyPhotoUncheckedCreateNestedManyWithoutPathologyInput
  }

  export type PathologyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceLocation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutPathologyNestedInput
    location?: LocationUpdateOneRequiredWithoutPathologyNestedInput
    PathologyPhoto?: PathologyPhotoUpdateManyWithoutPathologyNestedInput
  }

  export type PathologyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    referenceLocation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    PathologyPhoto?: PathologyPhotoUncheckedUpdateManyWithoutPathologyNestedInput
  }

  export type PathologyCreateManyInput = {
    id?: string
    projectId: string
    locationId: string
    referenceLocation: string
    title: string
    description: string
    recordDate: Date | string
  }

  export type PathologyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceLocation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PathologyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    referenceLocation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PathologyPhotoCreateInput = {
    id?: string
    filePath: string
    pathology: PathologyCreateNestedOneWithoutPathologyPhotoInput
  }

  export type PathologyPhotoUncheckedCreateInput = {
    id?: string
    pathologyId: string
    filePath: string
  }

  export type PathologyPhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    pathology?: PathologyUpdateOneRequiredWithoutPathologyPhotoNestedInput
  }

  export type PathologyPhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pathologyId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
  }

  export type PathologyPhotoCreateManyInput = {
    id?: string
    pathologyId: string
    filePath: string
  }

  export type PathologyPhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
  }

  export type PathologyPhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pathologyId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
  }

  export type PdfCreateInput = {
    id?: string
    pdfType: $Enums.PdfType
    filePath: string
    signedFilePath?: string | null
    generatedAt: Date | string
    project: ProjectCreateNestedOneWithoutPdfInput
  }

  export type PdfUncheckedCreateInput = {
    id?: string
    projectId: string
    pdfType: $Enums.PdfType
    filePath: string
    signedFilePath?: string | null
    generatedAt: Date | string
  }

  export type PdfUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pdfType?: EnumPdfTypeFieldUpdateOperationsInput | $Enums.PdfType
    filePath?: StringFieldUpdateOperationsInput | string
    signedFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutPdfNestedInput
  }

  export type PdfUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    pdfType?: EnumPdfTypeFieldUpdateOperationsInput | $Enums.PdfType
    filePath?: StringFieldUpdateOperationsInput | string
    signedFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PdfCreateManyInput = {
    id?: string
    projectId: string
    pdfType: $Enums.PdfType
    filePath: string
    signedFilePath?: string | null
    generatedAt: Date | string
  }

  export type PdfUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pdfType?: EnumPdfTypeFieldUpdateOperationsInput | $Enums.PdfType
    filePath?: StringFieldUpdateOperationsInput | string
    signedFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PdfUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    pdfType?: EnumPdfTypeFieldUpdateOperationsInput | $Enums.PdfType
    filePath?: StringFieldUpdateOperationsInput | string
    signedFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StateLawCreateInput = {
    id?: string
    state: string
    textState: string
    lawReference: string
    lawReference2: string
    policeAbbreviation: string
    fullText?: string | null
    fullText2?: string | null
    publishedAt: Date | string
    active: boolean
  }

  export type StateLawUncheckedCreateInput = {
    id?: string
    state: string
    textState: string
    lawReference: string
    lawReference2: string
    policeAbbreviation: string
    fullText?: string | null
    fullText2?: string | null
    publishedAt: Date | string
    active: boolean
  }

  export type StateLawUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    textState?: StringFieldUpdateOperationsInput | string
    lawReference?: StringFieldUpdateOperationsInput | string
    lawReference2?: StringFieldUpdateOperationsInput | string
    policeAbbreviation?: StringFieldUpdateOperationsInput | string
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    fullText2?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StateLawUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    textState?: StringFieldUpdateOperationsInput | string
    lawReference?: StringFieldUpdateOperationsInput | string
    lawReference2?: StringFieldUpdateOperationsInput | string
    policeAbbreviation?: StringFieldUpdateOperationsInput | string
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    fullText2?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StateLawCreateManyInput = {
    id?: string
    state: string
    textState: string
    lawReference: string
    lawReference2: string
    policeAbbreviation: string
    fullText?: string | null
    fullText2?: string | null
    publishedAt: Date | string
    active: boolean
  }

  export type StateLawUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    textState?: StringFieldUpdateOperationsInput | string
    lawReference?: StringFieldUpdateOperationsInput | string
    lawReference2?: StringFieldUpdateOperationsInput | string
    policeAbbreviation?: StringFieldUpdateOperationsInput | string
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    fullText2?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StateLawUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    textState?: StringFieldUpdateOperationsInput | string
    lawReference?: StringFieldUpdateOperationsInput | string
    lawReference2?: StringFieldUpdateOperationsInput | string
    policeAbbreviation?: StringFieldUpdateOperationsInput | string
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    fullText2?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LogCreateInput = {
    id?: string
    action: string
    tableName: string
    targetId: string
    generatedAt: Date | string
    user: UserCreateNestedOneWithoutLogInput
  }

  export type LogUncheckedCreateInput = {
    id?: string
    userId: string
    action: string
    tableName: string
    targetId: string
    generatedAt: Date | string
  }

  export type LogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLogNestedInput
  }

  export type LogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogCreateManyInput = {
    id?: string
    userId: string
    action: string
    tableName: string
    targetId: string
    generatedAt: Date | string
  }

  export type LogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumCameraTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CameraType | EnumCameraTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CameraType[] | ListEnumCameraTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CameraType[] | ListEnumCameraTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCameraTypeNullableFilter<$PrismaModel> | $Enums.CameraType | null
  }

  export type LogListRelationFilter = {
    every?: LogWhereInput
    some?: LogWhereInput
    none?: LogWhereInput
  }

  export type AccessKeyListRelationFilter = {
    every?: AccessKeyWhereInput
    some?: AccessKeyWhereInput
    none?: AccessKeyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccessKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    cameraType?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    cameraType?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    cameraType?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumCameraTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CameraType | EnumCameraTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CameraType[] | ListEnumCameraTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CameraType[] | ListEnumCameraTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCameraTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.CameraType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCameraTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumCameraTypeNullableFilter<$PrismaModel>
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

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgencyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    agencyNumber?: SortOrder
    cnpj?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    district?: SortOrder
    street?: SortOrder
    number?: SortOrder
  }

  export type AgencyAvgOrderByAggregateInput = {
    agencyNumber?: SortOrder
    number?: SortOrder
  }

  export type AgencyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    agencyNumber?: SortOrder
    cnpj?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    district?: SortOrder
    street?: SortOrder
    number?: SortOrder
  }

  export type AgencyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    agencyNumber?: SortOrder
    cnpj?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    district?: SortOrder
    street?: SortOrder
    number?: SortOrder
  }

  export type AgencySumOrderByAggregateInput = {
    agencyNumber?: SortOrder
    number?: SortOrder
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

  export type EngineerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    cpf?: SortOrder
    education?: SortOrder
    registrationNumber?: SortOrder
  }

  export type EngineerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    cpf?: SortOrder
    education?: SortOrder
    registrationNumber?: SortOrder
  }

  export type EngineerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    cpf?: SortOrder
    education?: SortOrder
    registrationNumber?: SortOrder
  }

  export type EnumProjectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectTypeFilter<$PrismaModel> | $Enums.ProjectType
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
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

  export type AgencyScalarRelationFilter = {
    is?: AgencyWhereInput
    isNot?: AgencyWhereInput
  }

  export type EngineerScalarRelationFilter = {
    is?: EngineerWhereInput
    isNot?: EngineerWhereInput
  }

  export type PavementListRelationFilter = {
    every?: PavementWhereInput
    some?: PavementWhereInput
    none?: PavementWhereInput
  }

  export type LocationListRelationFilter = {
    every?: LocationWhereInput
    some?: LocationWhereInput
    none?: LocationWhereInput
  }

  export type PathologyListRelationFilter = {
    every?: PathologyWhereInput
    some?: PathologyWhereInput
    none?: PathologyWhereInput
  }

  export type PdfListRelationFilter = {
    every?: PdfWhereInput
    some?: PdfWhereInput
    none?: PdfWhereInput
  }

  export type PavementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PathologyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PdfOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    projectType?: SortOrder
    upeCode?: SortOrder
    agencyId?: SortOrder
    engineerId?: SortOrder
    status?: SortOrder
    structureType?: SortOrder
    inspectorName?: SortOrder
    inspectionDate?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    upeCode?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    projectType?: SortOrder
    upeCode?: SortOrder
    agencyId?: SortOrder
    engineerId?: SortOrder
    status?: SortOrder
    structureType?: SortOrder
    inspectorName?: SortOrder
    inspectionDate?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    projectType?: SortOrder
    upeCode?: SortOrder
    agencyId?: SortOrder
    engineerId?: SortOrder
    status?: SortOrder
    structureType?: SortOrder
    inspectorName?: SortOrder
    inspectionDate?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    upeCode?: SortOrder
  }

  export type EnumProjectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectTypeFilter<$PrismaModel>
    _max?: NestedEnumProjectTypeFilter<$PrismaModel>
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
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

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccessKeyCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type AccessKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type AccessKeyMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PavementProjectIdPavementCompoundUniqueInput = {
    projectId: string
    pavement: string
  }

  export type PavementCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    pavement?: SortOrder
    height?: SortOrder
    area?: SortOrder
  }

  export type PavementAvgOrderByAggregateInput = {
    height?: SortOrder
    area?: SortOrder
  }

  export type PavementMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    pavement?: SortOrder
    height?: SortOrder
    area?: SortOrder
  }

  export type PavementMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    pavement?: SortOrder
    height?: SortOrder
    area?: SortOrder
  }

  export type PavementSumOrderByAggregateInput = {
    height?: SortOrder
    area?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumLocationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationType | EnumLocationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LocationType[] | ListEnumLocationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocationType[] | ListEnumLocationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationTypeFilter<$PrismaModel> | $Enums.LocationType
  }

  export type PavementNullableScalarRelationFilter = {
    is?: PavementWhereInput | null
    isNot?: PavementWhereInput | null
  }

  export type MaterialFinishingListRelationFilter = {
    every?: MaterialFinishingWhereInput
    some?: MaterialFinishingWhereInput
    none?: MaterialFinishingWhereInput
  }

  export type PhotoListRelationFilter = {
    every?: PhotoWhereInput
    some?: PhotoWhereInput
    none?: PhotoWhereInput
  }

  export type MaterialFinishingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    pavementId?: SortOrder
    name?: SortOrder
    locationType?: SortOrder
    height?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    height?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    pavementId?: SortOrder
    name?: SortOrder
    locationType?: SortOrder
    height?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    pavementId?: SortOrder
    name?: SortOrder
    locationType?: SortOrder
    height?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    height?: SortOrder
  }

  export type EnumLocationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationType | EnumLocationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LocationType[] | ListEnumLocationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocationType[] | ListEnumLocationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationTypeWithAggregatesFilter<$PrismaModel> | $Enums.LocationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationTypeFilter<$PrismaModel>
    _max?: NestedEnumLocationTypeFilter<$PrismaModel>
  }

  export type EnumSurfaceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SurfaceType | EnumSurfaceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SurfaceType[] | ListEnumSurfaceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SurfaceType[] | ListEnumSurfaceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSurfaceTypeFilter<$PrismaModel> | $Enums.SurfaceType
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type MaterialFinishingCountOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    surface?: SortOrder
    materialFinishing?: SortOrder
  }

  export type MaterialFinishingMaxOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    surface?: SortOrder
    materialFinishing?: SortOrder
  }

  export type MaterialFinishingMinOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    surface?: SortOrder
    materialFinishing?: SortOrder
  }

  export type EnumSurfaceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SurfaceType | EnumSurfaceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SurfaceType[] | ListEnumSurfaceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SurfaceType[] | ListEnumSurfaceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSurfaceTypeWithAggregatesFilter<$PrismaModel> | $Enums.SurfaceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSurfaceTypeFilter<$PrismaModel>
    _max?: NestedEnumSurfaceTypeFilter<$PrismaModel>
  }

  export type PhotoCountOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    filePath?: SortOrder
    selectedForPdf?: SortOrder
  }

  export type PhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    filePath?: SortOrder
    selectedForPdf?: SortOrder
  }

  export type PhotoMinOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    filePath?: SortOrder
    selectedForPdf?: SortOrder
  }

  export type PathologyPhotoListRelationFilter = {
    every?: PathologyPhotoWhereInput
    some?: PathologyPhotoWhereInput
    none?: PathologyPhotoWhereInput
  }

  export type PathologyPhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PathologyCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    locationId?: SortOrder
    referenceLocation?: SortOrder
    title?: SortOrder
    description?: SortOrder
    recordDate?: SortOrder
  }

  export type PathologyMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    locationId?: SortOrder
    referenceLocation?: SortOrder
    title?: SortOrder
    description?: SortOrder
    recordDate?: SortOrder
  }

  export type PathologyMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    locationId?: SortOrder
    referenceLocation?: SortOrder
    title?: SortOrder
    description?: SortOrder
    recordDate?: SortOrder
  }

  export type PathologyScalarRelationFilter = {
    is?: PathologyWhereInput
    isNot?: PathologyWhereInput
  }

  export type PathologyPhotoCountOrderByAggregateInput = {
    id?: SortOrder
    pathologyId?: SortOrder
    filePath?: SortOrder
  }

  export type PathologyPhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    pathologyId?: SortOrder
    filePath?: SortOrder
  }

  export type PathologyPhotoMinOrderByAggregateInput = {
    id?: SortOrder
    pathologyId?: SortOrder
    filePath?: SortOrder
  }

  export type EnumPdfTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PdfType | EnumPdfTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PdfType[] | ListEnumPdfTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PdfType[] | ListEnumPdfTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPdfTypeFilter<$PrismaModel> | $Enums.PdfType
  }

  export type PdfCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    pdfType?: SortOrder
    filePath?: SortOrder
    signedFilePath?: SortOrder
    generatedAt?: SortOrder
  }

  export type PdfMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    pdfType?: SortOrder
    filePath?: SortOrder
    signedFilePath?: SortOrder
    generatedAt?: SortOrder
  }

  export type PdfMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    pdfType?: SortOrder
    filePath?: SortOrder
    signedFilePath?: SortOrder
    generatedAt?: SortOrder
  }

  export type EnumPdfTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PdfType | EnumPdfTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PdfType[] | ListEnumPdfTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PdfType[] | ListEnumPdfTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPdfTypeWithAggregatesFilter<$PrismaModel> | $Enums.PdfType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPdfTypeFilter<$PrismaModel>
    _max?: NestedEnumPdfTypeFilter<$PrismaModel>
  }

  export type StateLawCountOrderByAggregateInput = {
    id?: SortOrder
    state?: SortOrder
    textState?: SortOrder
    lawReference?: SortOrder
    lawReference2?: SortOrder
    policeAbbreviation?: SortOrder
    fullText?: SortOrder
    fullText2?: SortOrder
    publishedAt?: SortOrder
    active?: SortOrder
  }

  export type StateLawMaxOrderByAggregateInput = {
    id?: SortOrder
    state?: SortOrder
    textState?: SortOrder
    lawReference?: SortOrder
    lawReference2?: SortOrder
    policeAbbreviation?: SortOrder
    fullText?: SortOrder
    fullText2?: SortOrder
    publishedAt?: SortOrder
    active?: SortOrder
  }

  export type StateLawMinOrderByAggregateInput = {
    id?: SortOrder
    state?: SortOrder
    textState?: SortOrder
    lawReference?: SortOrder
    lawReference2?: SortOrder
    policeAbbreviation?: SortOrder
    fullText?: SortOrder
    fullText2?: SortOrder
    publishedAt?: SortOrder
    active?: SortOrder
  }

  export type LogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    tableName?: SortOrder
    targetId?: SortOrder
    generatedAt?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    tableName?: SortOrder
    targetId?: SortOrder
    generatedAt?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    tableName?: SortOrder
    targetId?: SortOrder
    generatedAt?: SortOrder
  }

  export type LogCreateNestedManyWithoutUserInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type AccessKeyCreateNestedManyWithoutUserInput = {
    create?: XOR<AccessKeyCreateWithoutUserInput, AccessKeyUncheckedCreateWithoutUserInput> | AccessKeyCreateWithoutUserInput[] | AccessKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessKeyCreateOrConnectWithoutUserInput | AccessKeyCreateOrConnectWithoutUserInput[]
    createMany?: AccessKeyCreateManyUserInputEnvelope
    connect?: AccessKeyWhereUniqueInput | AccessKeyWhereUniqueInput[]
  }

  export type LogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type AccessKeyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccessKeyCreateWithoutUserInput, AccessKeyUncheckedCreateWithoutUserInput> | AccessKeyCreateWithoutUserInput[] | AccessKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessKeyCreateOrConnectWithoutUserInput | AccessKeyCreateOrConnectWithoutUserInput[]
    createMany?: AccessKeyCreateManyUserInputEnvelope
    connect?: AccessKeyWhereUniqueInput | AccessKeyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableEnumCameraTypeFieldUpdateOperationsInput = {
    set?: $Enums.CameraType | null
  }

  export type LogUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutUserInput | LogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutUserInput | LogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogUpdateManyWithWhereWithoutUserInput | LogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type AccessKeyUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccessKeyCreateWithoutUserInput, AccessKeyUncheckedCreateWithoutUserInput> | AccessKeyCreateWithoutUserInput[] | AccessKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessKeyCreateOrConnectWithoutUserInput | AccessKeyCreateOrConnectWithoutUserInput[]
    upsert?: AccessKeyUpsertWithWhereUniqueWithoutUserInput | AccessKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccessKeyCreateManyUserInputEnvelope
    set?: AccessKeyWhereUniqueInput | AccessKeyWhereUniqueInput[]
    disconnect?: AccessKeyWhereUniqueInput | AccessKeyWhereUniqueInput[]
    delete?: AccessKeyWhereUniqueInput | AccessKeyWhereUniqueInput[]
    connect?: AccessKeyWhereUniqueInput | AccessKeyWhereUniqueInput[]
    update?: AccessKeyUpdateWithWhereUniqueWithoutUserInput | AccessKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccessKeyUpdateManyWithWhereWithoutUserInput | AccessKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccessKeyScalarWhereInput | AccessKeyScalarWhereInput[]
  }

  export type LogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutUserInput | LogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutUserInput | LogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogUpdateManyWithWhereWithoutUserInput | LogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type AccessKeyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccessKeyCreateWithoutUserInput, AccessKeyUncheckedCreateWithoutUserInput> | AccessKeyCreateWithoutUserInput[] | AccessKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessKeyCreateOrConnectWithoutUserInput | AccessKeyCreateOrConnectWithoutUserInput[]
    upsert?: AccessKeyUpsertWithWhereUniqueWithoutUserInput | AccessKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccessKeyCreateManyUserInputEnvelope
    set?: AccessKeyWhereUniqueInput | AccessKeyWhereUniqueInput[]
    disconnect?: AccessKeyWhereUniqueInput | AccessKeyWhereUniqueInput[]
    delete?: AccessKeyWhereUniqueInput | AccessKeyWhereUniqueInput[]
    connect?: AccessKeyWhereUniqueInput | AccessKeyWhereUniqueInput[]
    update?: AccessKeyUpdateWithWhereUniqueWithoutUserInput | AccessKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccessKeyUpdateManyWithWhereWithoutUserInput | AccessKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccessKeyScalarWhereInput | AccessKeyScalarWhereInput[]
  }

  export type ProjectCreateNestedManyWithoutAgencyInput = {
    create?: XOR<ProjectCreateWithoutAgencyInput, ProjectUncheckedCreateWithoutAgencyInput> | ProjectCreateWithoutAgencyInput[] | ProjectUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutAgencyInput | ProjectCreateOrConnectWithoutAgencyInput[]
    createMany?: ProjectCreateManyAgencyInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutAgencyInput = {
    create?: XOR<ProjectCreateWithoutAgencyInput, ProjectUncheckedCreateWithoutAgencyInput> | ProjectCreateWithoutAgencyInput[] | ProjectUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutAgencyInput | ProjectCreateOrConnectWithoutAgencyInput[]
    createMany?: ProjectCreateManyAgencyInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateManyWithoutAgencyNestedInput = {
    create?: XOR<ProjectCreateWithoutAgencyInput, ProjectUncheckedCreateWithoutAgencyInput> | ProjectCreateWithoutAgencyInput[] | ProjectUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutAgencyInput | ProjectCreateOrConnectWithoutAgencyInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutAgencyInput | ProjectUpsertWithWhereUniqueWithoutAgencyInput[]
    createMany?: ProjectCreateManyAgencyInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutAgencyInput | ProjectUpdateWithWhereUniqueWithoutAgencyInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutAgencyInput | ProjectUpdateManyWithWhereWithoutAgencyInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutAgencyNestedInput = {
    create?: XOR<ProjectCreateWithoutAgencyInput, ProjectUncheckedCreateWithoutAgencyInput> | ProjectCreateWithoutAgencyInput[] | ProjectUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutAgencyInput | ProjectCreateOrConnectWithoutAgencyInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutAgencyInput | ProjectUpsertWithWhereUniqueWithoutAgencyInput[]
    createMany?: ProjectCreateManyAgencyInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutAgencyInput | ProjectUpdateWithWhereUniqueWithoutAgencyInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutAgencyInput | ProjectUpdateManyWithWhereWithoutAgencyInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectCreateNestedManyWithoutEngineerInput = {
    create?: XOR<ProjectCreateWithoutEngineerInput, ProjectUncheckedCreateWithoutEngineerInput> | ProjectCreateWithoutEngineerInput[] | ProjectUncheckedCreateWithoutEngineerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutEngineerInput | ProjectCreateOrConnectWithoutEngineerInput[]
    createMany?: ProjectCreateManyEngineerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutEngineerInput = {
    create?: XOR<ProjectCreateWithoutEngineerInput, ProjectUncheckedCreateWithoutEngineerInput> | ProjectCreateWithoutEngineerInput[] | ProjectUncheckedCreateWithoutEngineerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutEngineerInput | ProjectCreateOrConnectWithoutEngineerInput[]
    createMany?: ProjectCreateManyEngineerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUpdateManyWithoutEngineerNestedInput = {
    create?: XOR<ProjectCreateWithoutEngineerInput, ProjectUncheckedCreateWithoutEngineerInput> | ProjectCreateWithoutEngineerInput[] | ProjectUncheckedCreateWithoutEngineerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutEngineerInput | ProjectCreateOrConnectWithoutEngineerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutEngineerInput | ProjectUpsertWithWhereUniqueWithoutEngineerInput[]
    createMany?: ProjectCreateManyEngineerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutEngineerInput | ProjectUpdateWithWhereUniqueWithoutEngineerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutEngineerInput | ProjectUpdateManyWithWhereWithoutEngineerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutEngineerNestedInput = {
    create?: XOR<ProjectCreateWithoutEngineerInput, ProjectUncheckedCreateWithoutEngineerInput> | ProjectCreateWithoutEngineerInput[] | ProjectUncheckedCreateWithoutEngineerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutEngineerInput | ProjectCreateOrConnectWithoutEngineerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutEngineerInput | ProjectUpsertWithWhereUniqueWithoutEngineerInput[]
    createMany?: ProjectCreateManyEngineerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutEngineerInput | ProjectUpdateWithWhereUniqueWithoutEngineerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutEngineerInput | ProjectUpdateManyWithWhereWithoutEngineerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type AgencyCreateNestedOneWithoutProjectInput = {
    create?: XOR<AgencyCreateWithoutProjectInput, AgencyUncheckedCreateWithoutProjectInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutProjectInput
    connect?: AgencyWhereUniqueInput
  }

  export type EngineerCreateNestedOneWithoutProjectInput = {
    create?: XOR<EngineerCreateWithoutProjectInput, EngineerUncheckedCreateWithoutProjectInput>
    connectOrCreate?: EngineerCreateOrConnectWithoutProjectInput
    connect?: EngineerWhereUniqueInput
  }

  export type AccessKeyCreateNestedManyWithoutProjectInput = {
    create?: XOR<AccessKeyCreateWithoutProjectInput, AccessKeyUncheckedCreateWithoutProjectInput> | AccessKeyCreateWithoutProjectInput[] | AccessKeyUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AccessKeyCreateOrConnectWithoutProjectInput | AccessKeyCreateOrConnectWithoutProjectInput[]
    createMany?: AccessKeyCreateManyProjectInputEnvelope
    connect?: AccessKeyWhereUniqueInput | AccessKeyWhereUniqueInput[]
  }

  export type PavementCreateNestedManyWithoutProjectInput = {
    create?: XOR<PavementCreateWithoutProjectInput, PavementUncheckedCreateWithoutProjectInput> | PavementCreateWithoutProjectInput[] | PavementUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PavementCreateOrConnectWithoutProjectInput | PavementCreateOrConnectWithoutProjectInput[]
    createMany?: PavementCreateManyProjectInputEnvelope
    connect?: PavementWhereUniqueInput | PavementWhereUniqueInput[]
  }

  export type LocationCreateNestedManyWithoutProjectInput = {
    create?: XOR<LocationCreateWithoutProjectInput, LocationUncheckedCreateWithoutProjectInput> | LocationCreateWithoutProjectInput[] | LocationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutProjectInput | LocationCreateOrConnectWithoutProjectInput[]
    createMany?: LocationCreateManyProjectInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type PathologyCreateNestedManyWithoutProjectInput = {
    create?: XOR<PathologyCreateWithoutProjectInput, PathologyUncheckedCreateWithoutProjectInput> | PathologyCreateWithoutProjectInput[] | PathologyUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PathologyCreateOrConnectWithoutProjectInput | PathologyCreateOrConnectWithoutProjectInput[]
    createMany?: PathologyCreateManyProjectInputEnvelope
    connect?: PathologyWhereUniqueInput | PathologyWhereUniqueInput[]
  }

  export type PdfCreateNestedManyWithoutProjectInput = {
    create?: XOR<PdfCreateWithoutProjectInput, PdfUncheckedCreateWithoutProjectInput> | PdfCreateWithoutProjectInput[] | PdfUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PdfCreateOrConnectWithoutProjectInput | PdfCreateOrConnectWithoutProjectInput[]
    createMany?: PdfCreateManyProjectInputEnvelope
    connect?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
  }

  export type AccessKeyUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<AccessKeyCreateWithoutProjectInput, AccessKeyUncheckedCreateWithoutProjectInput> | AccessKeyCreateWithoutProjectInput[] | AccessKeyUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AccessKeyCreateOrConnectWithoutProjectInput | AccessKeyCreateOrConnectWithoutProjectInput[]
    createMany?: AccessKeyCreateManyProjectInputEnvelope
    connect?: AccessKeyWhereUniqueInput | AccessKeyWhereUniqueInput[]
  }

  export type PavementUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<PavementCreateWithoutProjectInput, PavementUncheckedCreateWithoutProjectInput> | PavementCreateWithoutProjectInput[] | PavementUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PavementCreateOrConnectWithoutProjectInput | PavementCreateOrConnectWithoutProjectInput[]
    createMany?: PavementCreateManyProjectInputEnvelope
    connect?: PavementWhereUniqueInput | PavementWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<LocationCreateWithoutProjectInput, LocationUncheckedCreateWithoutProjectInput> | LocationCreateWithoutProjectInput[] | LocationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutProjectInput | LocationCreateOrConnectWithoutProjectInput[]
    createMany?: LocationCreateManyProjectInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type PathologyUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<PathologyCreateWithoutProjectInput, PathologyUncheckedCreateWithoutProjectInput> | PathologyCreateWithoutProjectInput[] | PathologyUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PathologyCreateOrConnectWithoutProjectInput | PathologyCreateOrConnectWithoutProjectInput[]
    createMany?: PathologyCreateManyProjectInputEnvelope
    connect?: PathologyWhereUniqueInput | PathologyWhereUniqueInput[]
  }

  export type PdfUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<PdfCreateWithoutProjectInput, PdfUncheckedCreateWithoutProjectInput> | PdfCreateWithoutProjectInput[] | PdfUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PdfCreateOrConnectWithoutProjectInput | PdfCreateOrConnectWithoutProjectInput[]
    createMany?: PdfCreateManyProjectInputEnvelope
    connect?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
  }

  export type EnumProjectTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProjectType
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AgencyUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<AgencyCreateWithoutProjectInput, AgencyUncheckedCreateWithoutProjectInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutProjectInput
    upsert?: AgencyUpsertWithoutProjectInput
    connect?: AgencyWhereUniqueInput
    update?: XOR<XOR<AgencyUpdateToOneWithWhereWithoutProjectInput, AgencyUpdateWithoutProjectInput>, AgencyUncheckedUpdateWithoutProjectInput>
  }

  export type EngineerUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<EngineerCreateWithoutProjectInput, EngineerUncheckedCreateWithoutProjectInput>
    connectOrCreate?: EngineerCreateOrConnectWithoutProjectInput
    upsert?: EngineerUpsertWithoutProjectInput
    connect?: EngineerWhereUniqueInput
    update?: XOR<XOR<EngineerUpdateToOneWithWhereWithoutProjectInput, EngineerUpdateWithoutProjectInput>, EngineerUncheckedUpdateWithoutProjectInput>
  }

  export type AccessKeyUpdateManyWithoutProjectNestedInput = {
    create?: XOR<AccessKeyCreateWithoutProjectInput, AccessKeyUncheckedCreateWithoutProjectInput> | AccessKeyCreateWithoutProjectInput[] | AccessKeyUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AccessKeyCreateOrConnectWithoutProjectInput | AccessKeyCreateOrConnectWithoutProjectInput[]
    upsert?: AccessKeyUpsertWithWhereUniqueWithoutProjectInput | AccessKeyUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: AccessKeyCreateManyProjectInputEnvelope
    set?: AccessKeyWhereUniqueInput | AccessKeyWhereUniqueInput[]
    disconnect?: AccessKeyWhereUniqueInput | AccessKeyWhereUniqueInput[]
    delete?: AccessKeyWhereUniqueInput | AccessKeyWhereUniqueInput[]
    connect?: AccessKeyWhereUniqueInput | AccessKeyWhereUniqueInput[]
    update?: AccessKeyUpdateWithWhereUniqueWithoutProjectInput | AccessKeyUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: AccessKeyUpdateManyWithWhereWithoutProjectInput | AccessKeyUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: AccessKeyScalarWhereInput | AccessKeyScalarWhereInput[]
  }

  export type PavementUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PavementCreateWithoutProjectInput, PavementUncheckedCreateWithoutProjectInput> | PavementCreateWithoutProjectInput[] | PavementUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PavementCreateOrConnectWithoutProjectInput | PavementCreateOrConnectWithoutProjectInput[]
    upsert?: PavementUpsertWithWhereUniqueWithoutProjectInput | PavementUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PavementCreateManyProjectInputEnvelope
    set?: PavementWhereUniqueInput | PavementWhereUniqueInput[]
    disconnect?: PavementWhereUniqueInput | PavementWhereUniqueInput[]
    delete?: PavementWhereUniqueInput | PavementWhereUniqueInput[]
    connect?: PavementWhereUniqueInput | PavementWhereUniqueInput[]
    update?: PavementUpdateWithWhereUniqueWithoutProjectInput | PavementUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PavementUpdateManyWithWhereWithoutProjectInput | PavementUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PavementScalarWhereInput | PavementScalarWhereInput[]
  }

  export type LocationUpdateManyWithoutProjectNestedInput = {
    create?: XOR<LocationCreateWithoutProjectInput, LocationUncheckedCreateWithoutProjectInput> | LocationCreateWithoutProjectInput[] | LocationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutProjectInput | LocationCreateOrConnectWithoutProjectInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutProjectInput | LocationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: LocationCreateManyProjectInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutProjectInput | LocationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutProjectInput | LocationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type PathologyUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PathologyCreateWithoutProjectInput, PathologyUncheckedCreateWithoutProjectInput> | PathologyCreateWithoutProjectInput[] | PathologyUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PathologyCreateOrConnectWithoutProjectInput | PathologyCreateOrConnectWithoutProjectInput[]
    upsert?: PathologyUpsertWithWhereUniqueWithoutProjectInput | PathologyUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PathologyCreateManyProjectInputEnvelope
    set?: PathologyWhereUniqueInput | PathologyWhereUniqueInput[]
    disconnect?: PathologyWhereUniqueInput | PathologyWhereUniqueInput[]
    delete?: PathologyWhereUniqueInput | PathologyWhereUniqueInput[]
    connect?: PathologyWhereUniqueInput | PathologyWhereUniqueInput[]
    update?: PathologyUpdateWithWhereUniqueWithoutProjectInput | PathologyUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PathologyUpdateManyWithWhereWithoutProjectInput | PathologyUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PathologyScalarWhereInput | PathologyScalarWhereInput[]
  }

  export type PdfUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PdfCreateWithoutProjectInput, PdfUncheckedCreateWithoutProjectInput> | PdfCreateWithoutProjectInput[] | PdfUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PdfCreateOrConnectWithoutProjectInput | PdfCreateOrConnectWithoutProjectInput[]
    upsert?: PdfUpsertWithWhereUniqueWithoutProjectInput | PdfUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PdfCreateManyProjectInputEnvelope
    set?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
    disconnect?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
    delete?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
    connect?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
    update?: PdfUpdateWithWhereUniqueWithoutProjectInput | PdfUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PdfUpdateManyWithWhereWithoutProjectInput | PdfUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PdfScalarWhereInput | PdfScalarWhereInput[]
  }

  export type AccessKeyUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<AccessKeyCreateWithoutProjectInput, AccessKeyUncheckedCreateWithoutProjectInput> | AccessKeyCreateWithoutProjectInput[] | AccessKeyUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AccessKeyCreateOrConnectWithoutProjectInput | AccessKeyCreateOrConnectWithoutProjectInput[]
    upsert?: AccessKeyUpsertWithWhereUniqueWithoutProjectInput | AccessKeyUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: AccessKeyCreateManyProjectInputEnvelope
    set?: AccessKeyWhereUniqueInput | AccessKeyWhereUniqueInput[]
    disconnect?: AccessKeyWhereUniqueInput | AccessKeyWhereUniqueInput[]
    delete?: AccessKeyWhereUniqueInput | AccessKeyWhereUniqueInput[]
    connect?: AccessKeyWhereUniqueInput | AccessKeyWhereUniqueInput[]
    update?: AccessKeyUpdateWithWhereUniqueWithoutProjectInput | AccessKeyUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: AccessKeyUpdateManyWithWhereWithoutProjectInput | AccessKeyUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: AccessKeyScalarWhereInput | AccessKeyScalarWhereInput[]
  }

  export type PavementUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PavementCreateWithoutProjectInput, PavementUncheckedCreateWithoutProjectInput> | PavementCreateWithoutProjectInput[] | PavementUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PavementCreateOrConnectWithoutProjectInput | PavementCreateOrConnectWithoutProjectInput[]
    upsert?: PavementUpsertWithWhereUniqueWithoutProjectInput | PavementUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PavementCreateManyProjectInputEnvelope
    set?: PavementWhereUniqueInput | PavementWhereUniqueInput[]
    disconnect?: PavementWhereUniqueInput | PavementWhereUniqueInput[]
    delete?: PavementWhereUniqueInput | PavementWhereUniqueInput[]
    connect?: PavementWhereUniqueInput | PavementWhereUniqueInput[]
    update?: PavementUpdateWithWhereUniqueWithoutProjectInput | PavementUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PavementUpdateManyWithWhereWithoutProjectInput | PavementUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PavementScalarWhereInput | PavementScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<LocationCreateWithoutProjectInput, LocationUncheckedCreateWithoutProjectInput> | LocationCreateWithoutProjectInput[] | LocationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutProjectInput | LocationCreateOrConnectWithoutProjectInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutProjectInput | LocationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: LocationCreateManyProjectInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutProjectInput | LocationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutProjectInput | LocationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type PathologyUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PathologyCreateWithoutProjectInput, PathologyUncheckedCreateWithoutProjectInput> | PathologyCreateWithoutProjectInput[] | PathologyUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PathologyCreateOrConnectWithoutProjectInput | PathologyCreateOrConnectWithoutProjectInput[]
    upsert?: PathologyUpsertWithWhereUniqueWithoutProjectInput | PathologyUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PathologyCreateManyProjectInputEnvelope
    set?: PathologyWhereUniqueInput | PathologyWhereUniqueInput[]
    disconnect?: PathologyWhereUniqueInput | PathologyWhereUniqueInput[]
    delete?: PathologyWhereUniqueInput | PathologyWhereUniqueInput[]
    connect?: PathologyWhereUniqueInput | PathologyWhereUniqueInput[]
    update?: PathologyUpdateWithWhereUniqueWithoutProjectInput | PathologyUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PathologyUpdateManyWithWhereWithoutProjectInput | PathologyUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PathologyScalarWhereInput | PathologyScalarWhereInput[]
  }

  export type PdfUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PdfCreateWithoutProjectInput, PdfUncheckedCreateWithoutProjectInput> | PdfCreateWithoutProjectInput[] | PdfUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PdfCreateOrConnectWithoutProjectInput | PdfCreateOrConnectWithoutProjectInput[]
    upsert?: PdfUpsertWithWhereUniqueWithoutProjectInput | PdfUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PdfCreateManyProjectInputEnvelope
    set?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
    disconnect?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
    delete?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
    connect?: PdfWhereUniqueInput | PdfWhereUniqueInput[]
    update?: PdfUpdateWithWhereUniqueWithoutProjectInput | PdfUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PdfUpdateManyWithWhereWithoutProjectInput | PdfUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PdfScalarWhereInput | PdfScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutAccessKeyInput = {
    create?: XOR<ProjectCreateWithoutAccessKeyInput, ProjectUncheckedCreateWithoutAccessKeyInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAccessKeyInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAccessKeyInput = {
    create?: XOR<UserCreateWithoutAccessKeyInput, UserUncheckedCreateWithoutAccessKeyInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessKeyInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutAccessKeyNestedInput = {
    create?: XOR<ProjectCreateWithoutAccessKeyInput, ProjectUncheckedCreateWithoutAccessKeyInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAccessKeyInput
    upsert?: ProjectUpsertWithoutAccessKeyInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutAccessKeyInput, ProjectUpdateWithoutAccessKeyInput>, ProjectUncheckedUpdateWithoutAccessKeyInput>
  }

  export type UserUpdateOneRequiredWithoutAccessKeyNestedInput = {
    create?: XOR<UserCreateWithoutAccessKeyInput, UserUncheckedCreateWithoutAccessKeyInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessKeyInput
    upsert?: UserUpsertWithoutAccessKeyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccessKeyInput, UserUpdateWithoutAccessKeyInput>, UserUncheckedUpdateWithoutAccessKeyInput>
  }

  export type ProjectCreateNestedOneWithoutPavementInput = {
    create?: XOR<ProjectCreateWithoutPavementInput, ProjectUncheckedCreateWithoutPavementInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPavementInput
    connect?: ProjectWhereUniqueInput
  }

  export type LocationCreateNestedManyWithoutPavementInput = {
    create?: XOR<LocationCreateWithoutPavementInput, LocationUncheckedCreateWithoutPavementInput> | LocationCreateWithoutPavementInput[] | LocationUncheckedCreateWithoutPavementInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutPavementInput | LocationCreateOrConnectWithoutPavementInput[]
    createMany?: LocationCreateManyPavementInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutPavementInput = {
    create?: XOR<LocationCreateWithoutPavementInput, LocationUncheckedCreateWithoutPavementInput> | LocationCreateWithoutPavementInput[] | LocationUncheckedCreateWithoutPavementInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutPavementInput | LocationCreateOrConnectWithoutPavementInput[]
    createMany?: LocationCreateManyPavementInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneRequiredWithoutPavementNestedInput = {
    create?: XOR<ProjectCreateWithoutPavementInput, ProjectUncheckedCreateWithoutPavementInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPavementInput
    upsert?: ProjectUpsertWithoutPavementInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutPavementInput, ProjectUpdateWithoutPavementInput>, ProjectUncheckedUpdateWithoutPavementInput>
  }

  export type LocationUpdateManyWithoutPavementNestedInput = {
    create?: XOR<LocationCreateWithoutPavementInput, LocationUncheckedCreateWithoutPavementInput> | LocationCreateWithoutPavementInput[] | LocationUncheckedCreateWithoutPavementInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutPavementInput | LocationCreateOrConnectWithoutPavementInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutPavementInput | LocationUpsertWithWhereUniqueWithoutPavementInput[]
    createMany?: LocationCreateManyPavementInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutPavementInput | LocationUpdateWithWhereUniqueWithoutPavementInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutPavementInput | LocationUpdateManyWithWhereWithoutPavementInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutPavementNestedInput = {
    create?: XOR<LocationCreateWithoutPavementInput, LocationUncheckedCreateWithoutPavementInput> | LocationCreateWithoutPavementInput[] | LocationUncheckedCreateWithoutPavementInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutPavementInput | LocationCreateOrConnectWithoutPavementInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutPavementInput | LocationUpsertWithWhereUniqueWithoutPavementInput[]
    createMany?: LocationCreateManyPavementInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutPavementInput | LocationUpdateWithWhereUniqueWithoutPavementInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutPavementInput | LocationUpdateManyWithWhereWithoutPavementInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutLocationInput = {
    create?: XOR<ProjectCreateWithoutLocationInput, ProjectUncheckedCreateWithoutLocationInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLocationInput
    connect?: ProjectWhereUniqueInput
  }

  export type PavementCreateNestedOneWithoutLocationInput = {
    create?: XOR<PavementCreateWithoutLocationInput, PavementUncheckedCreateWithoutLocationInput>
    connectOrCreate?: PavementCreateOrConnectWithoutLocationInput
    connect?: PavementWhereUniqueInput
  }

  export type MaterialFinishingCreateNestedManyWithoutLocationInput = {
    create?: XOR<MaterialFinishingCreateWithoutLocationInput, MaterialFinishingUncheckedCreateWithoutLocationInput> | MaterialFinishingCreateWithoutLocationInput[] | MaterialFinishingUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: MaterialFinishingCreateOrConnectWithoutLocationInput | MaterialFinishingCreateOrConnectWithoutLocationInput[]
    createMany?: MaterialFinishingCreateManyLocationInputEnvelope
    connect?: MaterialFinishingWhereUniqueInput | MaterialFinishingWhereUniqueInput[]
  }

  export type PhotoCreateNestedManyWithoutLocationInput = {
    create?: XOR<PhotoCreateWithoutLocationInput, PhotoUncheckedCreateWithoutLocationInput> | PhotoCreateWithoutLocationInput[] | PhotoUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutLocationInput | PhotoCreateOrConnectWithoutLocationInput[]
    createMany?: PhotoCreateManyLocationInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type PathologyCreateNestedManyWithoutLocationInput = {
    create?: XOR<PathologyCreateWithoutLocationInput, PathologyUncheckedCreateWithoutLocationInput> | PathologyCreateWithoutLocationInput[] | PathologyUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PathologyCreateOrConnectWithoutLocationInput | PathologyCreateOrConnectWithoutLocationInput[]
    createMany?: PathologyCreateManyLocationInputEnvelope
    connect?: PathologyWhereUniqueInput | PathologyWhereUniqueInput[]
  }

  export type MaterialFinishingUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<MaterialFinishingCreateWithoutLocationInput, MaterialFinishingUncheckedCreateWithoutLocationInput> | MaterialFinishingCreateWithoutLocationInput[] | MaterialFinishingUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: MaterialFinishingCreateOrConnectWithoutLocationInput | MaterialFinishingCreateOrConnectWithoutLocationInput[]
    createMany?: MaterialFinishingCreateManyLocationInputEnvelope
    connect?: MaterialFinishingWhereUniqueInput | MaterialFinishingWhereUniqueInput[]
  }

  export type PhotoUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<PhotoCreateWithoutLocationInput, PhotoUncheckedCreateWithoutLocationInput> | PhotoCreateWithoutLocationInput[] | PhotoUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutLocationInput | PhotoCreateOrConnectWithoutLocationInput[]
    createMany?: PhotoCreateManyLocationInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type PathologyUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<PathologyCreateWithoutLocationInput, PathologyUncheckedCreateWithoutLocationInput> | PathologyCreateWithoutLocationInput[] | PathologyUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PathologyCreateOrConnectWithoutLocationInput | PathologyCreateOrConnectWithoutLocationInput[]
    createMany?: PathologyCreateManyLocationInputEnvelope
    connect?: PathologyWhereUniqueInput | PathologyWhereUniqueInput[]
  }

  export type EnumLocationTypeFieldUpdateOperationsInput = {
    set?: $Enums.LocationType
  }

  export type ProjectUpdateOneRequiredWithoutLocationNestedInput = {
    create?: XOR<ProjectCreateWithoutLocationInput, ProjectUncheckedCreateWithoutLocationInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLocationInput
    upsert?: ProjectUpsertWithoutLocationInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutLocationInput, ProjectUpdateWithoutLocationInput>, ProjectUncheckedUpdateWithoutLocationInput>
  }

  export type PavementUpdateOneWithoutLocationNestedInput = {
    create?: XOR<PavementCreateWithoutLocationInput, PavementUncheckedCreateWithoutLocationInput>
    connectOrCreate?: PavementCreateOrConnectWithoutLocationInput
    upsert?: PavementUpsertWithoutLocationInput
    disconnect?: PavementWhereInput | boolean
    delete?: PavementWhereInput | boolean
    connect?: PavementWhereUniqueInput
    update?: XOR<XOR<PavementUpdateToOneWithWhereWithoutLocationInput, PavementUpdateWithoutLocationInput>, PavementUncheckedUpdateWithoutLocationInput>
  }

  export type MaterialFinishingUpdateManyWithoutLocationNestedInput = {
    create?: XOR<MaterialFinishingCreateWithoutLocationInput, MaterialFinishingUncheckedCreateWithoutLocationInput> | MaterialFinishingCreateWithoutLocationInput[] | MaterialFinishingUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: MaterialFinishingCreateOrConnectWithoutLocationInput | MaterialFinishingCreateOrConnectWithoutLocationInput[]
    upsert?: MaterialFinishingUpsertWithWhereUniqueWithoutLocationInput | MaterialFinishingUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: MaterialFinishingCreateManyLocationInputEnvelope
    set?: MaterialFinishingWhereUniqueInput | MaterialFinishingWhereUniqueInput[]
    disconnect?: MaterialFinishingWhereUniqueInput | MaterialFinishingWhereUniqueInput[]
    delete?: MaterialFinishingWhereUniqueInput | MaterialFinishingWhereUniqueInput[]
    connect?: MaterialFinishingWhereUniqueInput | MaterialFinishingWhereUniqueInput[]
    update?: MaterialFinishingUpdateWithWhereUniqueWithoutLocationInput | MaterialFinishingUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: MaterialFinishingUpdateManyWithWhereWithoutLocationInput | MaterialFinishingUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: MaterialFinishingScalarWhereInput | MaterialFinishingScalarWhereInput[]
  }

  export type PhotoUpdateManyWithoutLocationNestedInput = {
    create?: XOR<PhotoCreateWithoutLocationInput, PhotoUncheckedCreateWithoutLocationInput> | PhotoCreateWithoutLocationInput[] | PhotoUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutLocationInput | PhotoCreateOrConnectWithoutLocationInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutLocationInput | PhotoUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: PhotoCreateManyLocationInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutLocationInput | PhotoUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutLocationInput | PhotoUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type PathologyUpdateManyWithoutLocationNestedInput = {
    create?: XOR<PathologyCreateWithoutLocationInput, PathologyUncheckedCreateWithoutLocationInput> | PathologyCreateWithoutLocationInput[] | PathologyUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PathologyCreateOrConnectWithoutLocationInput | PathologyCreateOrConnectWithoutLocationInput[]
    upsert?: PathologyUpsertWithWhereUniqueWithoutLocationInput | PathologyUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: PathologyCreateManyLocationInputEnvelope
    set?: PathologyWhereUniqueInput | PathologyWhereUniqueInput[]
    disconnect?: PathologyWhereUniqueInput | PathologyWhereUniqueInput[]
    delete?: PathologyWhereUniqueInput | PathologyWhereUniqueInput[]
    connect?: PathologyWhereUniqueInput | PathologyWhereUniqueInput[]
    update?: PathologyUpdateWithWhereUniqueWithoutLocationInput | PathologyUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: PathologyUpdateManyWithWhereWithoutLocationInput | PathologyUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: PathologyScalarWhereInput | PathologyScalarWhereInput[]
  }

  export type MaterialFinishingUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<MaterialFinishingCreateWithoutLocationInput, MaterialFinishingUncheckedCreateWithoutLocationInput> | MaterialFinishingCreateWithoutLocationInput[] | MaterialFinishingUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: MaterialFinishingCreateOrConnectWithoutLocationInput | MaterialFinishingCreateOrConnectWithoutLocationInput[]
    upsert?: MaterialFinishingUpsertWithWhereUniqueWithoutLocationInput | MaterialFinishingUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: MaterialFinishingCreateManyLocationInputEnvelope
    set?: MaterialFinishingWhereUniqueInput | MaterialFinishingWhereUniqueInput[]
    disconnect?: MaterialFinishingWhereUniqueInput | MaterialFinishingWhereUniqueInput[]
    delete?: MaterialFinishingWhereUniqueInput | MaterialFinishingWhereUniqueInput[]
    connect?: MaterialFinishingWhereUniqueInput | MaterialFinishingWhereUniqueInput[]
    update?: MaterialFinishingUpdateWithWhereUniqueWithoutLocationInput | MaterialFinishingUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: MaterialFinishingUpdateManyWithWhereWithoutLocationInput | MaterialFinishingUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: MaterialFinishingScalarWhereInput | MaterialFinishingScalarWhereInput[]
  }

  export type PhotoUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<PhotoCreateWithoutLocationInput, PhotoUncheckedCreateWithoutLocationInput> | PhotoCreateWithoutLocationInput[] | PhotoUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutLocationInput | PhotoCreateOrConnectWithoutLocationInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutLocationInput | PhotoUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: PhotoCreateManyLocationInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutLocationInput | PhotoUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutLocationInput | PhotoUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type PathologyUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<PathologyCreateWithoutLocationInput, PathologyUncheckedCreateWithoutLocationInput> | PathologyCreateWithoutLocationInput[] | PathologyUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PathologyCreateOrConnectWithoutLocationInput | PathologyCreateOrConnectWithoutLocationInput[]
    upsert?: PathologyUpsertWithWhereUniqueWithoutLocationInput | PathologyUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: PathologyCreateManyLocationInputEnvelope
    set?: PathologyWhereUniqueInput | PathologyWhereUniqueInput[]
    disconnect?: PathologyWhereUniqueInput | PathologyWhereUniqueInput[]
    delete?: PathologyWhereUniqueInput | PathologyWhereUniqueInput[]
    connect?: PathologyWhereUniqueInput | PathologyWhereUniqueInput[]
    update?: PathologyUpdateWithWhereUniqueWithoutLocationInput | PathologyUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: PathologyUpdateManyWithWhereWithoutLocationInput | PathologyUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: PathologyScalarWhereInput | PathologyScalarWhereInput[]
  }

  export type LocationCreateNestedOneWithoutMaterialFinishingInput = {
    create?: XOR<LocationCreateWithoutMaterialFinishingInput, LocationUncheckedCreateWithoutMaterialFinishingInput>
    connectOrCreate?: LocationCreateOrConnectWithoutMaterialFinishingInput
    connect?: LocationWhereUniqueInput
  }

  export type EnumSurfaceTypeFieldUpdateOperationsInput = {
    set?: $Enums.SurfaceType
  }

  export type LocationUpdateOneRequiredWithoutMaterialFinishingNestedInput = {
    create?: XOR<LocationCreateWithoutMaterialFinishingInput, LocationUncheckedCreateWithoutMaterialFinishingInput>
    connectOrCreate?: LocationCreateOrConnectWithoutMaterialFinishingInput
    upsert?: LocationUpsertWithoutMaterialFinishingInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutMaterialFinishingInput, LocationUpdateWithoutMaterialFinishingInput>, LocationUncheckedUpdateWithoutMaterialFinishingInput>
  }

  export type LocationCreateNestedOneWithoutPhotoInput = {
    create?: XOR<LocationCreateWithoutPhotoInput, LocationUncheckedCreateWithoutPhotoInput>
    connectOrCreate?: LocationCreateOrConnectWithoutPhotoInput
    connect?: LocationWhereUniqueInput
  }

  export type LocationUpdateOneRequiredWithoutPhotoNestedInput = {
    create?: XOR<LocationCreateWithoutPhotoInput, LocationUncheckedCreateWithoutPhotoInput>
    connectOrCreate?: LocationCreateOrConnectWithoutPhotoInput
    upsert?: LocationUpsertWithoutPhotoInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutPhotoInput, LocationUpdateWithoutPhotoInput>, LocationUncheckedUpdateWithoutPhotoInput>
  }

  export type ProjectCreateNestedOneWithoutPathologyInput = {
    create?: XOR<ProjectCreateWithoutPathologyInput, ProjectUncheckedCreateWithoutPathologyInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPathologyInput
    connect?: ProjectWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutPathologyInput = {
    create?: XOR<LocationCreateWithoutPathologyInput, LocationUncheckedCreateWithoutPathologyInput>
    connectOrCreate?: LocationCreateOrConnectWithoutPathologyInput
    connect?: LocationWhereUniqueInput
  }

  export type PathologyPhotoCreateNestedManyWithoutPathologyInput = {
    create?: XOR<PathologyPhotoCreateWithoutPathologyInput, PathologyPhotoUncheckedCreateWithoutPathologyInput> | PathologyPhotoCreateWithoutPathologyInput[] | PathologyPhotoUncheckedCreateWithoutPathologyInput[]
    connectOrCreate?: PathologyPhotoCreateOrConnectWithoutPathologyInput | PathologyPhotoCreateOrConnectWithoutPathologyInput[]
    createMany?: PathologyPhotoCreateManyPathologyInputEnvelope
    connect?: PathologyPhotoWhereUniqueInput | PathologyPhotoWhereUniqueInput[]
  }

  export type PathologyPhotoUncheckedCreateNestedManyWithoutPathologyInput = {
    create?: XOR<PathologyPhotoCreateWithoutPathologyInput, PathologyPhotoUncheckedCreateWithoutPathologyInput> | PathologyPhotoCreateWithoutPathologyInput[] | PathologyPhotoUncheckedCreateWithoutPathologyInput[]
    connectOrCreate?: PathologyPhotoCreateOrConnectWithoutPathologyInput | PathologyPhotoCreateOrConnectWithoutPathologyInput[]
    createMany?: PathologyPhotoCreateManyPathologyInputEnvelope
    connect?: PathologyPhotoWhereUniqueInput | PathologyPhotoWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutPathologyNestedInput = {
    create?: XOR<ProjectCreateWithoutPathologyInput, ProjectUncheckedCreateWithoutPathologyInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPathologyInput
    upsert?: ProjectUpsertWithoutPathologyInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutPathologyInput, ProjectUpdateWithoutPathologyInput>, ProjectUncheckedUpdateWithoutPathologyInput>
  }

  export type LocationUpdateOneRequiredWithoutPathologyNestedInput = {
    create?: XOR<LocationCreateWithoutPathologyInput, LocationUncheckedCreateWithoutPathologyInput>
    connectOrCreate?: LocationCreateOrConnectWithoutPathologyInput
    upsert?: LocationUpsertWithoutPathologyInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutPathologyInput, LocationUpdateWithoutPathologyInput>, LocationUncheckedUpdateWithoutPathologyInput>
  }

  export type PathologyPhotoUpdateManyWithoutPathologyNestedInput = {
    create?: XOR<PathologyPhotoCreateWithoutPathologyInput, PathologyPhotoUncheckedCreateWithoutPathologyInput> | PathologyPhotoCreateWithoutPathologyInput[] | PathologyPhotoUncheckedCreateWithoutPathologyInput[]
    connectOrCreate?: PathologyPhotoCreateOrConnectWithoutPathologyInput | PathologyPhotoCreateOrConnectWithoutPathologyInput[]
    upsert?: PathologyPhotoUpsertWithWhereUniqueWithoutPathologyInput | PathologyPhotoUpsertWithWhereUniqueWithoutPathologyInput[]
    createMany?: PathologyPhotoCreateManyPathologyInputEnvelope
    set?: PathologyPhotoWhereUniqueInput | PathologyPhotoWhereUniqueInput[]
    disconnect?: PathologyPhotoWhereUniqueInput | PathologyPhotoWhereUniqueInput[]
    delete?: PathologyPhotoWhereUniqueInput | PathologyPhotoWhereUniqueInput[]
    connect?: PathologyPhotoWhereUniqueInput | PathologyPhotoWhereUniqueInput[]
    update?: PathologyPhotoUpdateWithWhereUniqueWithoutPathologyInput | PathologyPhotoUpdateWithWhereUniqueWithoutPathologyInput[]
    updateMany?: PathologyPhotoUpdateManyWithWhereWithoutPathologyInput | PathologyPhotoUpdateManyWithWhereWithoutPathologyInput[]
    deleteMany?: PathologyPhotoScalarWhereInput | PathologyPhotoScalarWhereInput[]
  }

  export type PathologyPhotoUncheckedUpdateManyWithoutPathologyNestedInput = {
    create?: XOR<PathologyPhotoCreateWithoutPathologyInput, PathologyPhotoUncheckedCreateWithoutPathologyInput> | PathologyPhotoCreateWithoutPathologyInput[] | PathologyPhotoUncheckedCreateWithoutPathologyInput[]
    connectOrCreate?: PathologyPhotoCreateOrConnectWithoutPathologyInput | PathologyPhotoCreateOrConnectWithoutPathologyInput[]
    upsert?: PathologyPhotoUpsertWithWhereUniqueWithoutPathologyInput | PathologyPhotoUpsertWithWhereUniqueWithoutPathologyInput[]
    createMany?: PathologyPhotoCreateManyPathologyInputEnvelope
    set?: PathologyPhotoWhereUniqueInput | PathologyPhotoWhereUniqueInput[]
    disconnect?: PathologyPhotoWhereUniqueInput | PathologyPhotoWhereUniqueInput[]
    delete?: PathologyPhotoWhereUniqueInput | PathologyPhotoWhereUniqueInput[]
    connect?: PathologyPhotoWhereUniqueInput | PathologyPhotoWhereUniqueInput[]
    update?: PathologyPhotoUpdateWithWhereUniqueWithoutPathologyInput | PathologyPhotoUpdateWithWhereUniqueWithoutPathologyInput[]
    updateMany?: PathologyPhotoUpdateManyWithWhereWithoutPathologyInput | PathologyPhotoUpdateManyWithWhereWithoutPathologyInput[]
    deleteMany?: PathologyPhotoScalarWhereInput | PathologyPhotoScalarWhereInput[]
  }

  export type PathologyCreateNestedOneWithoutPathologyPhotoInput = {
    create?: XOR<PathologyCreateWithoutPathologyPhotoInput, PathologyUncheckedCreateWithoutPathologyPhotoInput>
    connectOrCreate?: PathologyCreateOrConnectWithoutPathologyPhotoInput
    connect?: PathologyWhereUniqueInput
  }

  export type PathologyUpdateOneRequiredWithoutPathologyPhotoNestedInput = {
    create?: XOR<PathologyCreateWithoutPathologyPhotoInput, PathologyUncheckedCreateWithoutPathologyPhotoInput>
    connectOrCreate?: PathologyCreateOrConnectWithoutPathologyPhotoInput
    upsert?: PathologyUpsertWithoutPathologyPhotoInput
    connect?: PathologyWhereUniqueInput
    update?: XOR<XOR<PathologyUpdateToOneWithWhereWithoutPathologyPhotoInput, PathologyUpdateWithoutPathologyPhotoInput>, PathologyUncheckedUpdateWithoutPathologyPhotoInput>
  }

  export type ProjectCreateNestedOneWithoutPdfInput = {
    create?: XOR<ProjectCreateWithoutPdfInput, ProjectUncheckedCreateWithoutPdfInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPdfInput
    connect?: ProjectWhereUniqueInput
  }

  export type EnumPdfTypeFieldUpdateOperationsInput = {
    set?: $Enums.PdfType
  }

  export type ProjectUpdateOneRequiredWithoutPdfNestedInput = {
    create?: XOR<ProjectCreateWithoutPdfInput, ProjectUncheckedCreateWithoutPdfInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPdfInput
    upsert?: ProjectUpsertWithoutPdfInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutPdfInput, ProjectUpdateWithoutPdfInput>, ProjectUncheckedUpdateWithoutPdfInput>
  }

  export type UserCreateNestedOneWithoutLogInput = {
    create?: XOR<UserCreateWithoutLogInput, UserUncheckedCreateWithoutLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLogNestedInput = {
    create?: XOR<UserCreateWithoutLogInput, UserUncheckedCreateWithoutLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogInput
    upsert?: UserUpsertWithoutLogInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLogInput, UserUpdateWithoutLogInput>, UserUncheckedUpdateWithoutLogInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumCameraTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CameraType | EnumCameraTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CameraType[] | ListEnumCameraTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CameraType[] | ListEnumCameraTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCameraTypeNullableFilter<$PrismaModel> | $Enums.CameraType | null
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumCameraTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CameraType | EnumCameraTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CameraType[] | ListEnumCameraTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CameraType[] | ListEnumCameraTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCameraTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.CameraType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCameraTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumCameraTypeNullableFilter<$PrismaModel>
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

  export type NestedEnumProjectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectTypeFilter<$PrismaModel> | $Enums.ProjectType
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
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

  export type NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectTypeFilter<$PrismaModel>
    _max?: NestedEnumProjectTypeFilter<$PrismaModel>
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumLocationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationType | EnumLocationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LocationType[] | ListEnumLocationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocationType[] | ListEnumLocationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationTypeFilter<$PrismaModel> | $Enums.LocationType
  }

  export type NestedEnumLocationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationType | EnumLocationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LocationType[] | ListEnumLocationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocationType[] | ListEnumLocationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationTypeWithAggregatesFilter<$PrismaModel> | $Enums.LocationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationTypeFilter<$PrismaModel>
    _max?: NestedEnumLocationTypeFilter<$PrismaModel>
  }

  export type NestedEnumSurfaceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SurfaceType | EnumSurfaceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SurfaceType[] | ListEnumSurfaceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SurfaceType[] | ListEnumSurfaceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSurfaceTypeFilter<$PrismaModel> | $Enums.SurfaceType
  }

  export type NestedEnumSurfaceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SurfaceType | EnumSurfaceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SurfaceType[] | ListEnumSurfaceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SurfaceType[] | ListEnumSurfaceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSurfaceTypeWithAggregatesFilter<$PrismaModel> | $Enums.SurfaceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSurfaceTypeFilter<$PrismaModel>
    _max?: NestedEnumSurfaceTypeFilter<$PrismaModel>
  }

  export type NestedEnumPdfTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PdfType | EnumPdfTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PdfType[] | ListEnumPdfTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PdfType[] | ListEnumPdfTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPdfTypeFilter<$PrismaModel> | $Enums.PdfType
  }

  export type NestedEnumPdfTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PdfType | EnumPdfTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PdfType[] | ListEnumPdfTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PdfType[] | ListEnumPdfTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPdfTypeWithAggregatesFilter<$PrismaModel> | $Enums.PdfType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPdfTypeFilter<$PrismaModel>
    _max?: NestedEnumPdfTypeFilter<$PrismaModel>
  }

  export type LogCreateWithoutUserInput = {
    id?: string
    action: string
    tableName: string
    targetId: string
    generatedAt: Date | string
  }

  export type LogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    tableName: string
    targetId: string
    generatedAt: Date | string
  }

  export type LogCreateOrConnectWithoutUserInput = {
    where: LogWhereUniqueInput
    create: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput>
  }

  export type LogCreateManyUserInputEnvelope = {
    data: LogCreateManyUserInput | LogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccessKeyCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    project: ProjectCreateNestedOneWithoutAccessKeyInput
  }

  export type AccessKeyUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    projectId: string
    expiresAt: Date | string
  }

  export type AccessKeyCreateOrConnectWithoutUserInput = {
    where: AccessKeyWhereUniqueInput
    create: XOR<AccessKeyCreateWithoutUserInput, AccessKeyUncheckedCreateWithoutUserInput>
  }

  export type AccessKeyCreateManyUserInputEnvelope = {
    data: AccessKeyCreateManyUserInput | AccessKeyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LogUpsertWithWhereUniqueWithoutUserInput = {
    where: LogWhereUniqueInput
    update: XOR<LogUpdateWithoutUserInput, LogUncheckedUpdateWithoutUserInput>
    create: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput>
  }

  export type LogUpdateWithWhereUniqueWithoutUserInput = {
    where: LogWhereUniqueInput
    data: XOR<LogUpdateWithoutUserInput, LogUncheckedUpdateWithoutUserInput>
  }

  export type LogUpdateManyWithWhereWithoutUserInput = {
    where: LogScalarWhereInput
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyWithoutUserInput>
  }

  export type LogScalarWhereInput = {
    AND?: LogScalarWhereInput | LogScalarWhereInput[]
    OR?: LogScalarWhereInput[]
    NOT?: LogScalarWhereInput | LogScalarWhereInput[]
    id?: StringFilter<"Log"> | string
    userId?: StringFilter<"Log"> | string
    action?: StringFilter<"Log"> | string
    tableName?: StringFilter<"Log"> | string
    targetId?: StringFilter<"Log"> | string
    generatedAt?: DateTimeFilter<"Log"> | Date | string
  }

  export type AccessKeyUpsertWithWhereUniqueWithoutUserInput = {
    where: AccessKeyWhereUniqueInput
    update: XOR<AccessKeyUpdateWithoutUserInput, AccessKeyUncheckedUpdateWithoutUserInput>
    create: XOR<AccessKeyCreateWithoutUserInput, AccessKeyUncheckedCreateWithoutUserInput>
  }

  export type AccessKeyUpdateWithWhereUniqueWithoutUserInput = {
    where: AccessKeyWhereUniqueInput
    data: XOR<AccessKeyUpdateWithoutUserInput, AccessKeyUncheckedUpdateWithoutUserInput>
  }

  export type AccessKeyUpdateManyWithWhereWithoutUserInput = {
    where: AccessKeyScalarWhereInput
    data: XOR<AccessKeyUpdateManyMutationInput, AccessKeyUncheckedUpdateManyWithoutUserInput>
  }

  export type AccessKeyScalarWhereInput = {
    AND?: AccessKeyScalarWhereInput | AccessKeyScalarWhereInput[]
    OR?: AccessKeyScalarWhereInput[]
    NOT?: AccessKeyScalarWhereInput | AccessKeyScalarWhereInput[]
    id?: StringFilter<"AccessKey"> | string
    token?: StringFilter<"AccessKey"> | string
    projectId?: StringFilter<"AccessKey"> | string
    userId?: StringFilter<"AccessKey"> | string
    expiresAt?: DateTimeFilter<"AccessKey"> | Date | string
  }

  export type ProjectCreateWithoutAgencyInput = {
    id?: string
    projectType: $Enums.ProjectType
    upeCode: number
    status: $Enums.ProjectStatus
    structureType?: string | null
    inspectorName?: string | null
    inspectionDate?: Date | string | null
    createdAt?: Date | string
    engineer: EngineerCreateNestedOneWithoutProjectInput
    AccessKey?: AccessKeyCreateNestedManyWithoutProjectInput
    Pavement?: PavementCreateNestedManyWithoutProjectInput
    Location?: LocationCreateNestedManyWithoutProjectInput
    Pathology?: PathologyCreateNestedManyWithoutProjectInput
    Pdf?: PdfCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutAgencyInput = {
    id?: string
    projectType: $Enums.ProjectType
    upeCode: number
    engineerId: string
    status: $Enums.ProjectStatus
    structureType?: string | null
    inspectorName?: string | null
    inspectionDate?: Date | string | null
    createdAt?: Date | string
    AccessKey?: AccessKeyUncheckedCreateNestedManyWithoutProjectInput
    Pavement?: PavementUncheckedCreateNestedManyWithoutProjectInput
    Location?: LocationUncheckedCreateNestedManyWithoutProjectInput
    Pathology?: PathologyUncheckedCreateNestedManyWithoutProjectInput
    Pdf?: PdfUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutAgencyInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutAgencyInput, ProjectUncheckedCreateWithoutAgencyInput>
  }

  export type ProjectCreateManyAgencyInputEnvelope = {
    data: ProjectCreateManyAgencyInput | ProjectCreateManyAgencyInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutAgencyInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutAgencyInput, ProjectUncheckedUpdateWithoutAgencyInput>
    create: XOR<ProjectCreateWithoutAgencyInput, ProjectUncheckedCreateWithoutAgencyInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutAgencyInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutAgencyInput, ProjectUncheckedUpdateWithoutAgencyInput>
  }

  export type ProjectUpdateManyWithWhereWithoutAgencyInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutAgencyInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    projectType?: EnumProjectTypeFilter<"Project"> | $Enums.ProjectType
    upeCode?: IntFilter<"Project"> | number
    agencyId?: StringFilter<"Project"> | string
    engineerId?: StringFilter<"Project"> | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    structureType?: StringNullableFilter<"Project"> | string | null
    inspectorName?: StringNullableFilter<"Project"> | string | null
    inspectionDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type ProjectCreateWithoutEngineerInput = {
    id?: string
    projectType: $Enums.ProjectType
    upeCode: number
    status: $Enums.ProjectStatus
    structureType?: string | null
    inspectorName?: string | null
    inspectionDate?: Date | string | null
    createdAt?: Date | string
    agency: AgencyCreateNestedOneWithoutProjectInput
    AccessKey?: AccessKeyCreateNestedManyWithoutProjectInput
    Pavement?: PavementCreateNestedManyWithoutProjectInput
    Location?: LocationCreateNestedManyWithoutProjectInput
    Pathology?: PathologyCreateNestedManyWithoutProjectInput
    Pdf?: PdfCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutEngineerInput = {
    id?: string
    projectType: $Enums.ProjectType
    upeCode: number
    agencyId: string
    status: $Enums.ProjectStatus
    structureType?: string | null
    inspectorName?: string | null
    inspectionDate?: Date | string | null
    createdAt?: Date | string
    AccessKey?: AccessKeyUncheckedCreateNestedManyWithoutProjectInput
    Pavement?: PavementUncheckedCreateNestedManyWithoutProjectInput
    Location?: LocationUncheckedCreateNestedManyWithoutProjectInput
    Pathology?: PathologyUncheckedCreateNestedManyWithoutProjectInput
    Pdf?: PdfUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutEngineerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutEngineerInput, ProjectUncheckedCreateWithoutEngineerInput>
  }

  export type ProjectCreateManyEngineerInputEnvelope = {
    data: ProjectCreateManyEngineerInput | ProjectCreateManyEngineerInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutEngineerInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutEngineerInput, ProjectUncheckedUpdateWithoutEngineerInput>
    create: XOR<ProjectCreateWithoutEngineerInput, ProjectUncheckedCreateWithoutEngineerInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutEngineerInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutEngineerInput, ProjectUncheckedUpdateWithoutEngineerInput>
  }

  export type ProjectUpdateManyWithWhereWithoutEngineerInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutEngineerInput>
  }

  export type AgencyCreateWithoutProjectInput = {
    id?: string
    name: string
    agencyNumber: number
    cnpj?: string | null
    cep: string
    state: string
    city: string
    district: string
    street: string
    number: number
  }

  export type AgencyUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    agencyNumber: number
    cnpj?: string | null
    cep: string
    state: string
    city: string
    district: string
    street: string
    number: number
  }

  export type AgencyCreateOrConnectWithoutProjectInput = {
    where: AgencyWhereUniqueInput
    create: XOR<AgencyCreateWithoutProjectInput, AgencyUncheckedCreateWithoutProjectInput>
  }

  export type EngineerCreateWithoutProjectInput = {
    id?: string
    name: string
    email: string
    phone: string
    cpf: string
    education: string
    registrationNumber: string
  }

  export type EngineerUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    email: string
    phone: string
    cpf: string
    education: string
    registrationNumber: string
  }

  export type EngineerCreateOrConnectWithoutProjectInput = {
    where: EngineerWhereUniqueInput
    create: XOR<EngineerCreateWithoutProjectInput, EngineerUncheckedCreateWithoutProjectInput>
  }

  export type AccessKeyCreateWithoutProjectInput = {
    id?: string
    token: string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutAccessKeyInput
  }

  export type AccessKeyUncheckedCreateWithoutProjectInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
  }

  export type AccessKeyCreateOrConnectWithoutProjectInput = {
    where: AccessKeyWhereUniqueInput
    create: XOR<AccessKeyCreateWithoutProjectInput, AccessKeyUncheckedCreateWithoutProjectInput>
  }

  export type AccessKeyCreateManyProjectInputEnvelope = {
    data: AccessKeyCreateManyProjectInput | AccessKeyCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type PavementCreateWithoutProjectInput = {
    id?: string
    pavement: string
    height: number
    area?: number | null
    Location?: LocationCreateNestedManyWithoutPavementInput
  }

  export type PavementUncheckedCreateWithoutProjectInput = {
    id?: string
    pavement: string
    height: number
    area?: number | null
    Location?: LocationUncheckedCreateNestedManyWithoutPavementInput
  }

  export type PavementCreateOrConnectWithoutProjectInput = {
    where: PavementWhereUniqueInput
    create: XOR<PavementCreateWithoutProjectInput, PavementUncheckedCreateWithoutProjectInput>
  }

  export type PavementCreateManyProjectInputEnvelope = {
    data: PavementCreateManyProjectInput | PavementCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type LocationCreateWithoutProjectInput = {
    id?: string
    name: string
    locationType: $Enums.LocationType
    height?: number | null
    pavement?: PavementCreateNestedOneWithoutLocationInput
    MaterialFinishing?: MaterialFinishingCreateNestedManyWithoutLocationInput
    Photo?: PhotoCreateNestedManyWithoutLocationInput
    Pathology?: PathologyCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutProjectInput = {
    id?: string
    pavementId?: string | null
    name: string
    locationType: $Enums.LocationType
    height?: number | null
    MaterialFinishing?: MaterialFinishingUncheckedCreateNestedManyWithoutLocationInput
    Photo?: PhotoUncheckedCreateNestedManyWithoutLocationInput
    Pathology?: PathologyUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutProjectInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutProjectInput, LocationUncheckedCreateWithoutProjectInput>
  }

  export type LocationCreateManyProjectInputEnvelope = {
    data: LocationCreateManyProjectInput | LocationCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type PathologyCreateWithoutProjectInput = {
    id?: string
    referenceLocation: string
    title: string
    description: string
    recordDate: Date | string
    location: LocationCreateNestedOneWithoutPathologyInput
    PathologyPhoto?: PathologyPhotoCreateNestedManyWithoutPathologyInput
  }

  export type PathologyUncheckedCreateWithoutProjectInput = {
    id?: string
    locationId: string
    referenceLocation: string
    title: string
    description: string
    recordDate: Date | string
    PathologyPhoto?: PathologyPhotoUncheckedCreateNestedManyWithoutPathologyInput
  }

  export type PathologyCreateOrConnectWithoutProjectInput = {
    where: PathologyWhereUniqueInput
    create: XOR<PathologyCreateWithoutProjectInput, PathologyUncheckedCreateWithoutProjectInput>
  }

  export type PathologyCreateManyProjectInputEnvelope = {
    data: PathologyCreateManyProjectInput | PathologyCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type PdfCreateWithoutProjectInput = {
    id?: string
    pdfType: $Enums.PdfType
    filePath: string
    signedFilePath?: string | null
    generatedAt: Date | string
  }

  export type PdfUncheckedCreateWithoutProjectInput = {
    id?: string
    pdfType: $Enums.PdfType
    filePath: string
    signedFilePath?: string | null
    generatedAt: Date | string
  }

  export type PdfCreateOrConnectWithoutProjectInput = {
    where: PdfWhereUniqueInput
    create: XOR<PdfCreateWithoutProjectInput, PdfUncheckedCreateWithoutProjectInput>
  }

  export type PdfCreateManyProjectInputEnvelope = {
    data: PdfCreateManyProjectInput | PdfCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type AgencyUpsertWithoutProjectInput = {
    update: XOR<AgencyUpdateWithoutProjectInput, AgencyUncheckedUpdateWithoutProjectInput>
    create: XOR<AgencyCreateWithoutProjectInput, AgencyUncheckedCreateWithoutProjectInput>
    where?: AgencyWhereInput
  }

  export type AgencyUpdateToOneWithWhereWithoutProjectInput = {
    where?: AgencyWhereInput
    data: XOR<AgencyUpdateWithoutProjectInput, AgencyUncheckedUpdateWithoutProjectInput>
  }

  export type AgencyUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    agencyNumber?: IntFieldUpdateOperationsInput | number
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
  }

  export type AgencyUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    agencyNumber?: IntFieldUpdateOperationsInput | number
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
  }

  export type EngineerUpsertWithoutProjectInput = {
    update: XOR<EngineerUpdateWithoutProjectInput, EngineerUncheckedUpdateWithoutProjectInput>
    create: XOR<EngineerCreateWithoutProjectInput, EngineerUncheckedCreateWithoutProjectInput>
    where?: EngineerWhereInput
  }

  export type EngineerUpdateToOneWithWhereWithoutProjectInput = {
    where?: EngineerWhereInput
    data: XOR<EngineerUpdateWithoutProjectInput, EngineerUncheckedUpdateWithoutProjectInput>
  }

  export type EngineerUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
  }

  export type EngineerUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
  }

  export type AccessKeyUpsertWithWhereUniqueWithoutProjectInput = {
    where: AccessKeyWhereUniqueInput
    update: XOR<AccessKeyUpdateWithoutProjectInput, AccessKeyUncheckedUpdateWithoutProjectInput>
    create: XOR<AccessKeyCreateWithoutProjectInput, AccessKeyUncheckedCreateWithoutProjectInput>
  }

  export type AccessKeyUpdateWithWhereUniqueWithoutProjectInput = {
    where: AccessKeyWhereUniqueInput
    data: XOR<AccessKeyUpdateWithoutProjectInput, AccessKeyUncheckedUpdateWithoutProjectInput>
  }

  export type AccessKeyUpdateManyWithWhereWithoutProjectInput = {
    where: AccessKeyScalarWhereInput
    data: XOR<AccessKeyUpdateManyMutationInput, AccessKeyUncheckedUpdateManyWithoutProjectInput>
  }

  export type PavementUpsertWithWhereUniqueWithoutProjectInput = {
    where: PavementWhereUniqueInput
    update: XOR<PavementUpdateWithoutProjectInput, PavementUncheckedUpdateWithoutProjectInput>
    create: XOR<PavementCreateWithoutProjectInput, PavementUncheckedCreateWithoutProjectInput>
  }

  export type PavementUpdateWithWhereUniqueWithoutProjectInput = {
    where: PavementWhereUniqueInput
    data: XOR<PavementUpdateWithoutProjectInput, PavementUncheckedUpdateWithoutProjectInput>
  }

  export type PavementUpdateManyWithWhereWithoutProjectInput = {
    where: PavementScalarWhereInput
    data: XOR<PavementUpdateManyMutationInput, PavementUncheckedUpdateManyWithoutProjectInput>
  }

  export type PavementScalarWhereInput = {
    AND?: PavementScalarWhereInput | PavementScalarWhereInput[]
    OR?: PavementScalarWhereInput[]
    NOT?: PavementScalarWhereInput | PavementScalarWhereInput[]
    id?: StringFilter<"Pavement"> | string
    projectId?: StringFilter<"Pavement"> | string
    pavement?: StringFilter<"Pavement"> | string
    height?: FloatFilter<"Pavement"> | number
    area?: FloatNullableFilter<"Pavement"> | number | null
  }

  export type LocationUpsertWithWhereUniqueWithoutProjectInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutProjectInput, LocationUncheckedUpdateWithoutProjectInput>
    create: XOR<LocationCreateWithoutProjectInput, LocationUncheckedCreateWithoutProjectInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutProjectInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutProjectInput, LocationUncheckedUpdateWithoutProjectInput>
  }

  export type LocationUpdateManyWithWhereWithoutProjectInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutProjectInput>
  }

  export type LocationScalarWhereInput = {
    AND?: LocationScalarWhereInput | LocationScalarWhereInput[]
    OR?: LocationScalarWhereInput[]
    NOT?: LocationScalarWhereInput | LocationScalarWhereInput[]
    id?: StringFilter<"Location"> | string
    projectId?: StringFilter<"Location"> | string
    pavementId?: StringNullableFilter<"Location"> | string | null
    name?: StringFilter<"Location"> | string
    locationType?: EnumLocationTypeFilter<"Location"> | $Enums.LocationType
    height?: FloatNullableFilter<"Location"> | number | null
  }

  export type PathologyUpsertWithWhereUniqueWithoutProjectInput = {
    where: PathologyWhereUniqueInput
    update: XOR<PathologyUpdateWithoutProjectInput, PathologyUncheckedUpdateWithoutProjectInput>
    create: XOR<PathologyCreateWithoutProjectInput, PathologyUncheckedCreateWithoutProjectInput>
  }

  export type PathologyUpdateWithWhereUniqueWithoutProjectInput = {
    where: PathologyWhereUniqueInput
    data: XOR<PathologyUpdateWithoutProjectInput, PathologyUncheckedUpdateWithoutProjectInput>
  }

  export type PathologyUpdateManyWithWhereWithoutProjectInput = {
    where: PathologyScalarWhereInput
    data: XOR<PathologyUpdateManyMutationInput, PathologyUncheckedUpdateManyWithoutProjectInput>
  }

  export type PathologyScalarWhereInput = {
    AND?: PathologyScalarWhereInput | PathologyScalarWhereInput[]
    OR?: PathologyScalarWhereInput[]
    NOT?: PathologyScalarWhereInput | PathologyScalarWhereInput[]
    id?: StringFilter<"Pathology"> | string
    projectId?: StringFilter<"Pathology"> | string
    locationId?: StringFilter<"Pathology"> | string
    referenceLocation?: StringFilter<"Pathology"> | string
    title?: StringFilter<"Pathology"> | string
    description?: StringFilter<"Pathology"> | string
    recordDate?: DateTimeFilter<"Pathology"> | Date | string
  }

  export type PdfUpsertWithWhereUniqueWithoutProjectInput = {
    where: PdfWhereUniqueInput
    update: XOR<PdfUpdateWithoutProjectInput, PdfUncheckedUpdateWithoutProjectInput>
    create: XOR<PdfCreateWithoutProjectInput, PdfUncheckedCreateWithoutProjectInput>
  }

  export type PdfUpdateWithWhereUniqueWithoutProjectInput = {
    where: PdfWhereUniqueInput
    data: XOR<PdfUpdateWithoutProjectInput, PdfUncheckedUpdateWithoutProjectInput>
  }

  export type PdfUpdateManyWithWhereWithoutProjectInput = {
    where: PdfScalarWhereInput
    data: XOR<PdfUpdateManyMutationInput, PdfUncheckedUpdateManyWithoutProjectInput>
  }

  export type PdfScalarWhereInput = {
    AND?: PdfScalarWhereInput | PdfScalarWhereInput[]
    OR?: PdfScalarWhereInput[]
    NOT?: PdfScalarWhereInput | PdfScalarWhereInput[]
    id?: StringFilter<"Pdf"> | string
    projectId?: StringFilter<"Pdf"> | string
    pdfType?: EnumPdfTypeFilter<"Pdf"> | $Enums.PdfType
    filePath?: StringFilter<"Pdf"> | string
    signedFilePath?: StringNullableFilter<"Pdf"> | string | null
    generatedAt?: DateTimeFilter<"Pdf"> | Date | string
  }

  export type ProjectCreateWithoutAccessKeyInput = {
    id?: string
    projectType: $Enums.ProjectType
    upeCode: number
    status: $Enums.ProjectStatus
    structureType?: string | null
    inspectorName?: string | null
    inspectionDate?: Date | string | null
    createdAt?: Date | string
    agency: AgencyCreateNestedOneWithoutProjectInput
    engineer: EngineerCreateNestedOneWithoutProjectInput
    Pavement?: PavementCreateNestedManyWithoutProjectInput
    Location?: LocationCreateNestedManyWithoutProjectInput
    Pathology?: PathologyCreateNestedManyWithoutProjectInput
    Pdf?: PdfCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutAccessKeyInput = {
    id?: string
    projectType: $Enums.ProjectType
    upeCode: number
    agencyId: string
    engineerId: string
    status: $Enums.ProjectStatus
    structureType?: string | null
    inspectorName?: string | null
    inspectionDate?: Date | string | null
    createdAt?: Date | string
    Pavement?: PavementUncheckedCreateNestedManyWithoutProjectInput
    Location?: LocationUncheckedCreateNestedManyWithoutProjectInput
    Pathology?: PathologyUncheckedCreateNestedManyWithoutProjectInput
    Pdf?: PdfUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutAccessKeyInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutAccessKeyInput, ProjectUncheckedCreateWithoutAccessKeyInput>
  }

  export type UserCreateWithoutAccessKeyInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: $Enums.UserRole
    status: boolean
    cameraType?: $Enums.CameraType | null
    Log?: LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccessKeyInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: $Enums.UserRole
    status: boolean
    cameraType?: $Enums.CameraType | null
    Log?: LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccessKeyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccessKeyInput, UserUncheckedCreateWithoutAccessKeyInput>
  }

  export type ProjectUpsertWithoutAccessKeyInput = {
    update: XOR<ProjectUpdateWithoutAccessKeyInput, ProjectUncheckedUpdateWithoutAccessKeyInput>
    create: XOR<ProjectCreateWithoutAccessKeyInput, ProjectUncheckedCreateWithoutAccessKeyInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutAccessKeyInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutAccessKeyInput, ProjectUncheckedUpdateWithoutAccessKeyInput>
  }

  export type ProjectUpdateWithoutAccessKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    upeCode?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    structureType?: NullableStringFieldUpdateOperationsInput | string | null
    inspectorName?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencyUpdateOneRequiredWithoutProjectNestedInput
    engineer?: EngineerUpdateOneRequiredWithoutProjectNestedInput
    Pavement?: PavementUpdateManyWithoutProjectNestedInput
    Location?: LocationUpdateManyWithoutProjectNestedInput
    Pathology?: PathologyUpdateManyWithoutProjectNestedInput
    Pdf?: PdfUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutAccessKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    upeCode?: IntFieldUpdateOperationsInput | number
    agencyId?: StringFieldUpdateOperationsInput | string
    engineerId?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    structureType?: NullableStringFieldUpdateOperationsInput | string | null
    inspectorName?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Pavement?: PavementUncheckedUpdateManyWithoutProjectNestedInput
    Location?: LocationUncheckedUpdateManyWithoutProjectNestedInput
    Pathology?: PathologyUncheckedUpdateManyWithoutProjectNestedInput
    Pdf?: PdfUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutAccessKeyInput = {
    update: XOR<UserUpdateWithoutAccessKeyInput, UserUncheckedUpdateWithoutAccessKeyInput>
    create: XOR<UserCreateWithoutAccessKeyInput, UserUncheckedCreateWithoutAccessKeyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccessKeyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccessKeyInput, UserUncheckedUpdateWithoutAccessKeyInput>
  }

  export type UserUpdateWithoutAccessKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: BoolFieldUpdateOperationsInput | boolean
    cameraType?: NullableEnumCameraTypeFieldUpdateOperationsInput | $Enums.CameraType | null
    Log?: LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccessKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: BoolFieldUpdateOperationsInput | boolean
    cameraType?: NullableEnumCameraTypeFieldUpdateOperationsInput | $Enums.CameraType | null
    Log?: LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCreateWithoutPavementInput = {
    id?: string
    projectType: $Enums.ProjectType
    upeCode: number
    status: $Enums.ProjectStatus
    structureType?: string | null
    inspectorName?: string | null
    inspectionDate?: Date | string | null
    createdAt?: Date | string
    agency: AgencyCreateNestedOneWithoutProjectInput
    engineer: EngineerCreateNestedOneWithoutProjectInput
    AccessKey?: AccessKeyCreateNestedManyWithoutProjectInput
    Location?: LocationCreateNestedManyWithoutProjectInput
    Pathology?: PathologyCreateNestedManyWithoutProjectInput
    Pdf?: PdfCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutPavementInput = {
    id?: string
    projectType: $Enums.ProjectType
    upeCode: number
    agencyId: string
    engineerId: string
    status: $Enums.ProjectStatus
    structureType?: string | null
    inspectorName?: string | null
    inspectionDate?: Date | string | null
    createdAt?: Date | string
    AccessKey?: AccessKeyUncheckedCreateNestedManyWithoutProjectInput
    Location?: LocationUncheckedCreateNestedManyWithoutProjectInput
    Pathology?: PathologyUncheckedCreateNestedManyWithoutProjectInput
    Pdf?: PdfUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutPavementInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutPavementInput, ProjectUncheckedCreateWithoutPavementInput>
  }

  export type LocationCreateWithoutPavementInput = {
    id?: string
    name: string
    locationType: $Enums.LocationType
    height?: number | null
    project: ProjectCreateNestedOneWithoutLocationInput
    MaterialFinishing?: MaterialFinishingCreateNestedManyWithoutLocationInput
    Photo?: PhotoCreateNestedManyWithoutLocationInput
    Pathology?: PathologyCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutPavementInput = {
    id?: string
    projectId: string
    name: string
    locationType: $Enums.LocationType
    height?: number | null
    MaterialFinishing?: MaterialFinishingUncheckedCreateNestedManyWithoutLocationInput
    Photo?: PhotoUncheckedCreateNestedManyWithoutLocationInput
    Pathology?: PathologyUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutPavementInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutPavementInput, LocationUncheckedCreateWithoutPavementInput>
  }

  export type LocationCreateManyPavementInputEnvelope = {
    data: LocationCreateManyPavementInput | LocationCreateManyPavementInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutPavementInput = {
    update: XOR<ProjectUpdateWithoutPavementInput, ProjectUncheckedUpdateWithoutPavementInput>
    create: XOR<ProjectCreateWithoutPavementInput, ProjectUncheckedCreateWithoutPavementInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutPavementInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutPavementInput, ProjectUncheckedUpdateWithoutPavementInput>
  }

  export type ProjectUpdateWithoutPavementInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    upeCode?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    structureType?: NullableStringFieldUpdateOperationsInput | string | null
    inspectorName?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencyUpdateOneRequiredWithoutProjectNestedInput
    engineer?: EngineerUpdateOneRequiredWithoutProjectNestedInput
    AccessKey?: AccessKeyUpdateManyWithoutProjectNestedInput
    Location?: LocationUpdateManyWithoutProjectNestedInput
    Pathology?: PathologyUpdateManyWithoutProjectNestedInput
    Pdf?: PdfUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutPavementInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    upeCode?: IntFieldUpdateOperationsInput | number
    agencyId?: StringFieldUpdateOperationsInput | string
    engineerId?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    structureType?: NullableStringFieldUpdateOperationsInput | string | null
    inspectorName?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AccessKey?: AccessKeyUncheckedUpdateManyWithoutProjectNestedInput
    Location?: LocationUncheckedUpdateManyWithoutProjectNestedInput
    Pathology?: PathologyUncheckedUpdateManyWithoutProjectNestedInput
    Pdf?: PdfUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type LocationUpsertWithWhereUniqueWithoutPavementInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutPavementInput, LocationUncheckedUpdateWithoutPavementInput>
    create: XOR<LocationCreateWithoutPavementInput, LocationUncheckedCreateWithoutPavementInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutPavementInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutPavementInput, LocationUncheckedUpdateWithoutPavementInput>
  }

  export type LocationUpdateManyWithWhereWithoutPavementInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutPavementInput>
  }

  export type ProjectCreateWithoutLocationInput = {
    id?: string
    projectType: $Enums.ProjectType
    upeCode: number
    status: $Enums.ProjectStatus
    structureType?: string | null
    inspectorName?: string | null
    inspectionDate?: Date | string | null
    createdAt?: Date | string
    agency: AgencyCreateNestedOneWithoutProjectInput
    engineer: EngineerCreateNestedOneWithoutProjectInput
    AccessKey?: AccessKeyCreateNestedManyWithoutProjectInput
    Pavement?: PavementCreateNestedManyWithoutProjectInput
    Pathology?: PathologyCreateNestedManyWithoutProjectInput
    Pdf?: PdfCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutLocationInput = {
    id?: string
    projectType: $Enums.ProjectType
    upeCode: number
    agencyId: string
    engineerId: string
    status: $Enums.ProjectStatus
    structureType?: string | null
    inspectorName?: string | null
    inspectionDate?: Date | string | null
    createdAt?: Date | string
    AccessKey?: AccessKeyUncheckedCreateNestedManyWithoutProjectInput
    Pavement?: PavementUncheckedCreateNestedManyWithoutProjectInput
    Pathology?: PathologyUncheckedCreateNestedManyWithoutProjectInput
    Pdf?: PdfUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutLocationInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutLocationInput, ProjectUncheckedCreateWithoutLocationInput>
  }

  export type PavementCreateWithoutLocationInput = {
    id?: string
    pavement: string
    height: number
    area?: number | null
    project: ProjectCreateNestedOneWithoutPavementInput
  }

  export type PavementUncheckedCreateWithoutLocationInput = {
    id?: string
    projectId: string
    pavement: string
    height: number
    area?: number | null
  }

  export type PavementCreateOrConnectWithoutLocationInput = {
    where: PavementWhereUniqueInput
    create: XOR<PavementCreateWithoutLocationInput, PavementUncheckedCreateWithoutLocationInput>
  }

  export type MaterialFinishingCreateWithoutLocationInput = {
    id?: string
    surface: $Enums.SurfaceType
    materialFinishing: string
  }

  export type MaterialFinishingUncheckedCreateWithoutLocationInput = {
    id?: string
    surface: $Enums.SurfaceType
    materialFinishing: string
  }

  export type MaterialFinishingCreateOrConnectWithoutLocationInput = {
    where: MaterialFinishingWhereUniqueInput
    create: XOR<MaterialFinishingCreateWithoutLocationInput, MaterialFinishingUncheckedCreateWithoutLocationInput>
  }

  export type MaterialFinishingCreateManyLocationInputEnvelope = {
    data: MaterialFinishingCreateManyLocationInput | MaterialFinishingCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type PhotoCreateWithoutLocationInput = {
    id?: string
    filePath: string
    selectedForPdf: boolean
  }

  export type PhotoUncheckedCreateWithoutLocationInput = {
    id?: string
    filePath: string
    selectedForPdf: boolean
  }

  export type PhotoCreateOrConnectWithoutLocationInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutLocationInput, PhotoUncheckedCreateWithoutLocationInput>
  }

  export type PhotoCreateManyLocationInputEnvelope = {
    data: PhotoCreateManyLocationInput | PhotoCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type PathologyCreateWithoutLocationInput = {
    id?: string
    referenceLocation: string
    title: string
    description: string
    recordDate: Date | string
    project: ProjectCreateNestedOneWithoutPathologyInput
    PathologyPhoto?: PathologyPhotoCreateNestedManyWithoutPathologyInput
  }

  export type PathologyUncheckedCreateWithoutLocationInput = {
    id?: string
    projectId: string
    referenceLocation: string
    title: string
    description: string
    recordDate: Date | string
    PathologyPhoto?: PathologyPhotoUncheckedCreateNestedManyWithoutPathologyInput
  }

  export type PathologyCreateOrConnectWithoutLocationInput = {
    where: PathologyWhereUniqueInput
    create: XOR<PathologyCreateWithoutLocationInput, PathologyUncheckedCreateWithoutLocationInput>
  }

  export type PathologyCreateManyLocationInputEnvelope = {
    data: PathologyCreateManyLocationInput | PathologyCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutLocationInput = {
    update: XOR<ProjectUpdateWithoutLocationInput, ProjectUncheckedUpdateWithoutLocationInput>
    create: XOR<ProjectCreateWithoutLocationInput, ProjectUncheckedCreateWithoutLocationInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutLocationInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutLocationInput, ProjectUncheckedUpdateWithoutLocationInput>
  }

  export type ProjectUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    upeCode?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    structureType?: NullableStringFieldUpdateOperationsInput | string | null
    inspectorName?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencyUpdateOneRequiredWithoutProjectNestedInput
    engineer?: EngineerUpdateOneRequiredWithoutProjectNestedInput
    AccessKey?: AccessKeyUpdateManyWithoutProjectNestedInput
    Pavement?: PavementUpdateManyWithoutProjectNestedInput
    Pathology?: PathologyUpdateManyWithoutProjectNestedInput
    Pdf?: PdfUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    upeCode?: IntFieldUpdateOperationsInput | number
    agencyId?: StringFieldUpdateOperationsInput | string
    engineerId?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    structureType?: NullableStringFieldUpdateOperationsInput | string | null
    inspectorName?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AccessKey?: AccessKeyUncheckedUpdateManyWithoutProjectNestedInput
    Pavement?: PavementUncheckedUpdateManyWithoutProjectNestedInput
    Pathology?: PathologyUncheckedUpdateManyWithoutProjectNestedInput
    Pdf?: PdfUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type PavementUpsertWithoutLocationInput = {
    update: XOR<PavementUpdateWithoutLocationInput, PavementUncheckedUpdateWithoutLocationInput>
    create: XOR<PavementCreateWithoutLocationInput, PavementUncheckedCreateWithoutLocationInput>
    where?: PavementWhereInput
  }

  export type PavementUpdateToOneWithWhereWithoutLocationInput = {
    where?: PavementWhereInput
    data: XOR<PavementUpdateWithoutLocationInput, PavementUncheckedUpdateWithoutLocationInput>
  }

  export type PavementUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pavement?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    project?: ProjectUpdateOneRequiredWithoutPavementNestedInput
  }

  export type PavementUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    pavement?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MaterialFinishingUpsertWithWhereUniqueWithoutLocationInput = {
    where: MaterialFinishingWhereUniqueInput
    update: XOR<MaterialFinishingUpdateWithoutLocationInput, MaterialFinishingUncheckedUpdateWithoutLocationInput>
    create: XOR<MaterialFinishingCreateWithoutLocationInput, MaterialFinishingUncheckedCreateWithoutLocationInput>
  }

  export type MaterialFinishingUpdateWithWhereUniqueWithoutLocationInput = {
    where: MaterialFinishingWhereUniqueInput
    data: XOR<MaterialFinishingUpdateWithoutLocationInput, MaterialFinishingUncheckedUpdateWithoutLocationInput>
  }

  export type MaterialFinishingUpdateManyWithWhereWithoutLocationInput = {
    where: MaterialFinishingScalarWhereInput
    data: XOR<MaterialFinishingUpdateManyMutationInput, MaterialFinishingUncheckedUpdateManyWithoutLocationInput>
  }

  export type MaterialFinishingScalarWhereInput = {
    AND?: MaterialFinishingScalarWhereInput | MaterialFinishingScalarWhereInput[]
    OR?: MaterialFinishingScalarWhereInput[]
    NOT?: MaterialFinishingScalarWhereInput | MaterialFinishingScalarWhereInput[]
    id?: StringFilter<"MaterialFinishing"> | string
    locationId?: StringFilter<"MaterialFinishing"> | string
    surface?: EnumSurfaceTypeFilter<"MaterialFinishing"> | $Enums.SurfaceType
    materialFinishing?: StringFilter<"MaterialFinishing"> | string
  }

  export type PhotoUpsertWithWhereUniqueWithoutLocationInput = {
    where: PhotoWhereUniqueInput
    update: XOR<PhotoUpdateWithoutLocationInput, PhotoUncheckedUpdateWithoutLocationInput>
    create: XOR<PhotoCreateWithoutLocationInput, PhotoUncheckedCreateWithoutLocationInput>
  }

  export type PhotoUpdateWithWhereUniqueWithoutLocationInput = {
    where: PhotoWhereUniqueInput
    data: XOR<PhotoUpdateWithoutLocationInput, PhotoUncheckedUpdateWithoutLocationInput>
  }

  export type PhotoUpdateManyWithWhereWithoutLocationInput = {
    where: PhotoScalarWhereInput
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyWithoutLocationInput>
  }

  export type PhotoScalarWhereInput = {
    AND?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    OR?: PhotoScalarWhereInput[]
    NOT?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    id?: StringFilter<"Photo"> | string
    locationId?: StringFilter<"Photo"> | string
    filePath?: StringFilter<"Photo"> | string
    selectedForPdf?: BoolFilter<"Photo"> | boolean
  }

  export type PathologyUpsertWithWhereUniqueWithoutLocationInput = {
    where: PathologyWhereUniqueInput
    update: XOR<PathologyUpdateWithoutLocationInput, PathologyUncheckedUpdateWithoutLocationInput>
    create: XOR<PathologyCreateWithoutLocationInput, PathologyUncheckedCreateWithoutLocationInput>
  }

  export type PathologyUpdateWithWhereUniqueWithoutLocationInput = {
    where: PathologyWhereUniqueInput
    data: XOR<PathologyUpdateWithoutLocationInput, PathologyUncheckedUpdateWithoutLocationInput>
  }

  export type PathologyUpdateManyWithWhereWithoutLocationInput = {
    where: PathologyScalarWhereInput
    data: XOR<PathologyUpdateManyMutationInput, PathologyUncheckedUpdateManyWithoutLocationInput>
  }

  export type LocationCreateWithoutMaterialFinishingInput = {
    id?: string
    name: string
    locationType: $Enums.LocationType
    height?: number | null
    project: ProjectCreateNestedOneWithoutLocationInput
    pavement?: PavementCreateNestedOneWithoutLocationInput
    Photo?: PhotoCreateNestedManyWithoutLocationInput
    Pathology?: PathologyCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutMaterialFinishingInput = {
    id?: string
    projectId: string
    pavementId?: string | null
    name: string
    locationType: $Enums.LocationType
    height?: number | null
    Photo?: PhotoUncheckedCreateNestedManyWithoutLocationInput
    Pathology?: PathologyUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutMaterialFinishingInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutMaterialFinishingInput, LocationUncheckedCreateWithoutMaterialFinishingInput>
  }

  export type LocationUpsertWithoutMaterialFinishingInput = {
    update: XOR<LocationUpdateWithoutMaterialFinishingInput, LocationUncheckedUpdateWithoutMaterialFinishingInput>
    create: XOR<LocationCreateWithoutMaterialFinishingInput, LocationUncheckedCreateWithoutMaterialFinishingInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutMaterialFinishingInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutMaterialFinishingInput, LocationUncheckedUpdateWithoutMaterialFinishingInput>
  }

  export type LocationUpdateWithoutMaterialFinishingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    locationType?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    project?: ProjectUpdateOneRequiredWithoutLocationNestedInput
    pavement?: PavementUpdateOneWithoutLocationNestedInput
    Photo?: PhotoUpdateManyWithoutLocationNestedInput
    Pathology?: PathologyUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutMaterialFinishingInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    pavementId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    locationType?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    Photo?: PhotoUncheckedUpdateManyWithoutLocationNestedInput
    Pathology?: PathologyUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateWithoutPhotoInput = {
    id?: string
    name: string
    locationType: $Enums.LocationType
    height?: number | null
    project: ProjectCreateNestedOneWithoutLocationInput
    pavement?: PavementCreateNestedOneWithoutLocationInput
    MaterialFinishing?: MaterialFinishingCreateNestedManyWithoutLocationInput
    Pathology?: PathologyCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutPhotoInput = {
    id?: string
    projectId: string
    pavementId?: string | null
    name: string
    locationType: $Enums.LocationType
    height?: number | null
    MaterialFinishing?: MaterialFinishingUncheckedCreateNestedManyWithoutLocationInput
    Pathology?: PathologyUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutPhotoInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutPhotoInput, LocationUncheckedCreateWithoutPhotoInput>
  }

  export type LocationUpsertWithoutPhotoInput = {
    update: XOR<LocationUpdateWithoutPhotoInput, LocationUncheckedUpdateWithoutPhotoInput>
    create: XOR<LocationCreateWithoutPhotoInput, LocationUncheckedCreateWithoutPhotoInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutPhotoInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutPhotoInput, LocationUncheckedUpdateWithoutPhotoInput>
  }

  export type LocationUpdateWithoutPhotoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    locationType?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    project?: ProjectUpdateOneRequiredWithoutLocationNestedInput
    pavement?: PavementUpdateOneWithoutLocationNestedInput
    MaterialFinishing?: MaterialFinishingUpdateManyWithoutLocationNestedInput
    Pathology?: PathologyUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutPhotoInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    pavementId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    locationType?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    MaterialFinishing?: MaterialFinishingUncheckedUpdateManyWithoutLocationNestedInput
    Pathology?: PathologyUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type ProjectCreateWithoutPathologyInput = {
    id?: string
    projectType: $Enums.ProjectType
    upeCode: number
    status: $Enums.ProjectStatus
    structureType?: string | null
    inspectorName?: string | null
    inspectionDate?: Date | string | null
    createdAt?: Date | string
    agency: AgencyCreateNestedOneWithoutProjectInput
    engineer: EngineerCreateNestedOneWithoutProjectInput
    AccessKey?: AccessKeyCreateNestedManyWithoutProjectInput
    Pavement?: PavementCreateNestedManyWithoutProjectInput
    Location?: LocationCreateNestedManyWithoutProjectInput
    Pdf?: PdfCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutPathologyInput = {
    id?: string
    projectType: $Enums.ProjectType
    upeCode: number
    agencyId: string
    engineerId: string
    status: $Enums.ProjectStatus
    structureType?: string | null
    inspectorName?: string | null
    inspectionDate?: Date | string | null
    createdAt?: Date | string
    AccessKey?: AccessKeyUncheckedCreateNestedManyWithoutProjectInput
    Pavement?: PavementUncheckedCreateNestedManyWithoutProjectInput
    Location?: LocationUncheckedCreateNestedManyWithoutProjectInput
    Pdf?: PdfUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutPathologyInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutPathologyInput, ProjectUncheckedCreateWithoutPathologyInput>
  }

  export type LocationCreateWithoutPathologyInput = {
    id?: string
    name: string
    locationType: $Enums.LocationType
    height?: number | null
    project: ProjectCreateNestedOneWithoutLocationInput
    pavement?: PavementCreateNestedOneWithoutLocationInput
    MaterialFinishing?: MaterialFinishingCreateNestedManyWithoutLocationInput
    Photo?: PhotoCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutPathologyInput = {
    id?: string
    projectId: string
    pavementId?: string | null
    name: string
    locationType: $Enums.LocationType
    height?: number | null
    MaterialFinishing?: MaterialFinishingUncheckedCreateNestedManyWithoutLocationInput
    Photo?: PhotoUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutPathologyInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutPathologyInput, LocationUncheckedCreateWithoutPathologyInput>
  }

  export type PathologyPhotoCreateWithoutPathologyInput = {
    id?: string
    filePath: string
  }

  export type PathologyPhotoUncheckedCreateWithoutPathologyInput = {
    id?: string
    filePath: string
  }

  export type PathologyPhotoCreateOrConnectWithoutPathologyInput = {
    where: PathologyPhotoWhereUniqueInput
    create: XOR<PathologyPhotoCreateWithoutPathologyInput, PathologyPhotoUncheckedCreateWithoutPathologyInput>
  }

  export type PathologyPhotoCreateManyPathologyInputEnvelope = {
    data: PathologyPhotoCreateManyPathologyInput | PathologyPhotoCreateManyPathologyInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutPathologyInput = {
    update: XOR<ProjectUpdateWithoutPathologyInput, ProjectUncheckedUpdateWithoutPathologyInput>
    create: XOR<ProjectCreateWithoutPathologyInput, ProjectUncheckedCreateWithoutPathologyInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutPathologyInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutPathologyInput, ProjectUncheckedUpdateWithoutPathologyInput>
  }

  export type ProjectUpdateWithoutPathologyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    upeCode?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    structureType?: NullableStringFieldUpdateOperationsInput | string | null
    inspectorName?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencyUpdateOneRequiredWithoutProjectNestedInput
    engineer?: EngineerUpdateOneRequiredWithoutProjectNestedInput
    AccessKey?: AccessKeyUpdateManyWithoutProjectNestedInput
    Pavement?: PavementUpdateManyWithoutProjectNestedInput
    Location?: LocationUpdateManyWithoutProjectNestedInput
    Pdf?: PdfUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutPathologyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    upeCode?: IntFieldUpdateOperationsInput | number
    agencyId?: StringFieldUpdateOperationsInput | string
    engineerId?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    structureType?: NullableStringFieldUpdateOperationsInput | string | null
    inspectorName?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AccessKey?: AccessKeyUncheckedUpdateManyWithoutProjectNestedInput
    Pavement?: PavementUncheckedUpdateManyWithoutProjectNestedInput
    Location?: LocationUncheckedUpdateManyWithoutProjectNestedInput
    Pdf?: PdfUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type LocationUpsertWithoutPathologyInput = {
    update: XOR<LocationUpdateWithoutPathologyInput, LocationUncheckedUpdateWithoutPathologyInput>
    create: XOR<LocationCreateWithoutPathologyInput, LocationUncheckedCreateWithoutPathologyInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutPathologyInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutPathologyInput, LocationUncheckedUpdateWithoutPathologyInput>
  }

  export type LocationUpdateWithoutPathologyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    locationType?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    project?: ProjectUpdateOneRequiredWithoutLocationNestedInput
    pavement?: PavementUpdateOneWithoutLocationNestedInput
    MaterialFinishing?: MaterialFinishingUpdateManyWithoutLocationNestedInput
    Photo?: PhotoUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutPathologyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    pavementId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    locationType?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    MaterialFinishing?: MaterialFinishingUncheckedUpdateManyWithoutLocationNestedInput
    Photo?: PhotoUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type PathologyPhotoUpsertWithWhereUniqueWithoutPathologyInput = {
    where: PathologyPhotoWhereUniqueInput
    update: XOR<PathologyPhotoUpdateWithoutPathologyInput, PathologyPhotoUncheckedUpdateWithoutPathologyInput>
    create: XOR<PathologyPhotoCreateWithoutPathologyInput, PathologyPhotoUncheckedCreateWithoutPathologyInput>
  }

  export type PathologyPhotoUpdateWithWhereUniqueWithoutPathologyInput = {
    where: PathologyPhotoWhereUniqueInput
    data: XOR<PathologyPhotoUpdateWithoutPathologyInput, PathologyPhotoUncheckedUpdateWithoutPathologyInput>
  }

  export type PathologyPhotoUpdateManyWithWhereWithoutPathologyInput = {
    where: PathologyPhotoScalarWhereInput
    data: XOR<PathologyPhotoUpdateManyMutationInput, PathologyPhotoUncheckedUpdateManyWithoutPathologyInput>
  }

  export type PathologyPhotoScalarWhereInput = {
    AND?: PathologyPhotoScalarWhereInput | PathologyPhotoScalarWhereInput[]
    OR?: PathologyPhotoScalarWhereInput[]
    NOT?: PathologyPhotoScalarWhereInput | PathologyPhotoScalarWhereInput[]
    id?: StringFilter<"PathologyPhoto"> | string
    pathologyId?: StringFilter<"PathologyPhoto"> | string
    filePath?: StringFilter<"PathologyPhoto"> | string
  }

  export type PathologyCreateWithoutPathologyPhotoInput = {
    id?: string
    referenceLocation: string
    title: string
    description: string
    recordDate: Date | string
    project: ProjectCreateNestedOneWithoutPathologyInput
    location: LocationCreateNestedOneWithoutPathologyInput
  }

  export type PathologyUncheckedCreateWithoutPathologyPhotoInput = {
    id?: string
    projectId: string
    locationId: string
    referenceLocation: string
    title: string
    description: string
    recordDate: Date | string
  }

  export type PathologyCreateOrConnectWithoutPathologyPhotoInput = {
    where: PathologyWhereUniqueInput
    create: XOR<PathologyCreateWithoutPathologyPhotoInput, PathologyUncheckedCreateWithoutPathologyPhotoInput>
  }

  export type PathologyUpsertWithoutPathologyPhotoInput = {
    update: XOR<PathologyUpdateWithoutPathologyPhotoInput, PathologyUncheckedUpdateWithoutPathologyPhotoInput>
    create: XOR<PathologyCreateWithoutPathologyPhotoInput, PathologyUncheckedCreateWithoutPathologyPhotoInput>
    where?: PathologyWhereInput
  }

  export type PathologyUpdateToOneWithWhereWithoutPathologyPhotoInput = {
    where?: PathologyWhereInput
    data: XOR<PathologyUpdateWithoutPathologyPhotoInput, PathologyUncheckedUpdateWithoutPathologyPhotoInput>
  }

  export type PathologyUpdateWithoutPathologyPhotoInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceLocation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutPathologyNestedInput
    location?: LocationUpdateOneRequiredWithoutPathologyNestedInput
  }

  export type PathologyUncheckedUpdateWithoutPathologyPhotoInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    referenceLocation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateWithoutPdfInput = {
    id?: string
    projectType: $Enums.ProjectType
    upeCode: number
    status: $Enums.ProjectStatus
    structureType?: string | null
    inspectorName?: string | null
    inspectionDate?: Date | string | null
    createdAt?: Date | string
    agency: AgencyCreateNestedOneWithoutProjectInput
    engineer: EngineerCreateNestedOneWithoutProjectInput
    AccessKey?: AccessKeyCreateNestedManyWithoutProjectInput
    Pavement?: PavementCreateNestedManyWithoutProjectInput
    Location?: LocationCreateNestedManyWithoutProjectInput
    Pathology?: PathologyCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutPdfInput = {
    id?: string
    projectType: $Enums.ProjectType
    upeCode: number
    agencyId: string
    engineerId: string
    status: $Enums.ProjectStatus
    structureType?: string | null
    inspectorName?: string | null
    inspectionDate?: Date | string | null
    createdAt?: Date | string
    AccessKey?: AccessKeyUncheckedCreateNestedManyWithoutProjectInput
    Pavement?: PavementUncheckedCreateNestedManyWithoutProjectInput
    Location?: LocationUncheckedCreateNestedManyWithoutProjectInput
    Pathology?: PathologyUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutPdfInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutPdfInput, ProjectUncheckedCreateWithoutPdfInput>
  }

  export type ProjectUpsertWithoutPdfInput = {
    update: XOR<ProjectUpdateWithoutPdfInput, ProjectUncheckedUpdateWithoutPdfInput>
    create: XOR<ProjectCreateWithoutPdfInput, ProjectUncheckedCreateWithoutPdfInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutPdfInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutPdfInput, ProjectUncheckedUpdateWithoutPdfInput>
  }

  export type ProjectUpdateWithoutPdfInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    upeCode?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    structureType?: NullableStringFieldUpdateOperationsInput | string | null
    inspectorName?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencyUpdateOneRequiredWithoutProjectNestedInput
    engineer?: EngineerUpdateOneRequiredWithoutProjectNestedInput
    AccessKey?: AccessKeyUpdateManyWithoutProjectNestedInput
    Pavement?: PavementUpdateManyWithoutProjectNestedInput
    Location?: LocationUpdateManyWithoutProjectNestedInput
    Pathology?: PathologyUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutPdfInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    upeCode?: IntFieldUpdateOperationsInput | number
    agencyId?: StringFieldUpdateOperationsInput | string
    engineerId?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    structureType?: NullableStringFieldUpdateOperationsInput | string | null
    inspectorName?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AccessKey?: AccessKeyUncheckedUpdateManyWithoutProjectNestedInput
    Pavement?: PavementUncheckedUpdateManyWithoutProjectNestedInput
    Location?: LocationUncheckedUpdateManyWithoutProjectNestedInput
    Pathology?: PathologyUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserCreateWithoutLogInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: $Enums.UserRole
    status: boolean
    cameraType?: $Enums.CameraType | null
    AccessKey?: AccessKeyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLogInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: $Enums.UserRole
    status: boolean
    cameraType?: $Enums.CameraType | null
    AccessKey?: AccessKeyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLogInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLogInput, UserUncheckedCreateWithoutLogInput>
  }

  export type UserUpsertWithoutLogInput = {
    update: XOR<UserUpdateWithoutLogInput, UserUncheckedUpdateWithoutLogInput>
    create: XOR<UserCreateWithoutLogInput, UserUncheckedCreateWithoutLogInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLogInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLogInput, UserUncheckedUpdateWithoutLogInput>
  }

  export type UserUpdateWithoutLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: BoolFieldUpdateOperationsInput | boolean
    cameraType?: NullableEnumCameraTypeFieldUpdateOperationsInput | $Enums.CameraType | null
    AccessKey?: AccessKeyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: BoolFieldUpdateOperationsInput | boolean
    cameraType?: NullableEnumCameraTypeFieldUpdateOperationsInput | $Enums.CameraType | null
    AccessKey?: AccessKeyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LogCreateManyUserInput = {
    id?: string
    action: string
    tableName: string
    targetId: string
    generatedAt: Date | string
  }

  export type AccessKeyCreateManyUserInput = {
    id?: string
    token: string
    projectId: string
    expiresAt: Date | string
  }

  export type LogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessKeyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutAccessKeyNestedInput
  }

  export type AccessKeyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessKeyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyAgencyInput = {
    id?: string
    projectType: $Enums.ProjectType
    upeCode: number
    engineerId: string
    status: $Enums.ProjectStatus
    structureType?: string | null
    inspectorName?: string | null
    inspectionDate?: Date | string | null
    createdAt?: Date | string
  }

  export type ProjectUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    upeCode?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    structureType?: NullableStringFieldUpdateOperationsInput | string | null
    inspectorName?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engineer?: EngineerUpdateOneRequiredWithoutProjectNestedInput
    AccessKey?: AccessKeyUpdateManyWithoutProjectNestedInput
    Pavement?: PavementUpdateManyWithoutProjectNestedInput
    Location?: LocationUpdateManyWithoutProjectNestedInput
    Pathology?: PathologyUpdateManyWithoutProjectNestedInput
    Pdf?: PdfUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    upeCode?: IntFieldUpdateOperationsInput | number
    engineerId?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    structureType?: NullableStringFieldUpdateOperationsInput | string | null
    inspectorName?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AccessKey?: AccessKeyUncheckedUpdateManyWithoutProjectNestedInput
    Pavement?: PavementUncheckedUpdateManyWithoutProjectNestedInput
    Location?: LocationUncheckedUpdateManyWithoutProjectNestedInput
    Pathology?: PathologyUncheckedUpdateManyWithoutProjectNestedInput
    Pdf?: PdfUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    upeCode?: IntFieldUpdateOperationsInput | number
    engineerId?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    structureType?: NullableStringFieldUpdateOperationsInput | string | null
    inspectorName?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyEngineerInput = {
    id?: string
    projectType: $Enums.ProjectType
    upeCode: number
    agencyId: string
    status: $Enums.ProjectStatus
    structureType?: string | null
    inspectorName?: string | null
    inspectionDate?: Date | string | null
    createdAt?: Date | string
  }

  export type ProjectUpdateWithoutEngineerInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    upeCode?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    structureType?: NullableStringFieldUpdateOperationsInput | string | null
    inspectorName?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencyUpdateOneRequiredWithoutProjectNestedInput
    AccessKey?: AccessKeyUpdateManyWithoutProjectNestedInput
    Pavement?: PavementUpdateManyWithoutProjectNestedInput
    Location?: LocationUpdateManyWithoutProjectNestedInput
    Pathology?: PathologyUpdateManyWithoutProjectNestedInput
    Pdf?: PdfUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutEngineerInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    upeCode?: IntFieldUpdateOperationsInput | number
    agencyId?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    structureType?: NullableStringFieldUpdateOperationsInput | string | null
    inspectorName?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AccessKey?: AccessKeyUncheckedUpdateManyWithoutProjectNestedInput
    Pavement?: PavementUncheckedUpdateManyWithoutProjectNestedInput
    Location?: LocationUncheckedUpdateManyWithoutProjectNestedInput
    Pathology?: PathologyUncheckedUpdateManyWithoutProjectNestedInput
    Pdf?: PdfUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutEngineerInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    upeCode?: IntFieldUpdateOperationsInput | number
    agencyId?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    structureType?: NullableStringFieldUpdateOperationsInput | string | null
    inspectorName?: NullableStringFieldUpdateOperationsInput | string | null
    inspectionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessKeyCreateManyProjectInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
  }

  export type PavementCreateManyProjectInput = {
    id?: string
    pavement: string
    height: number
    area?: number | null
  }

  export type LocationCreateManyProjectInput = {
    id?: string
    pavementId?: string | null
    name: string
    locationType: $Enums.LocationType
    height?: number | null
  }

  export type PathologyCreateManyProjectInput = {
    id?: string
    locationId: string
    referenceLocation: string
    title: string
    description: string
    recordDate: Date | string
  }

  export type PdfCreateManyProjectInput = {
    id?: string
    pdfType: $Enums.PdfType
    filePath: string
    signedFilePath?: string | null
    generatedAt: Date | string
  }

  export type AccessKeyUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccessKeyNestedInput
  }

  export type AccessKeyUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessKeyUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PavementUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    pavement?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    Location?: LocationUpdateManyWithoutPavementNestedInput
  }

  export type PavementUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    pavement?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    Location?: LocationUncheckedUpdateManyWithoutPavementNestedInput
  }

  export type PavementUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    pavement?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type LocationUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    locationType?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    pavement?: PavementUpdateOneWithoutLocationNestedInput
    MaterialFinishing?: MaterialFinishingUpdateManyWithoutLocationNestedInput
    Photo?: PhotoUpdateManyWithoutLocationNestedInput
    Pathology?: PathologyUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    pavementId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    locationType?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    MaterialFinishing?: MaterialFinishingUncheckedUpdateManyWithoutLocationNestedInput
    Photo?: PhotoUncheckedUpdateManyWithoutLocationNestedInput
    Pathology?: PathologyUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    pavementId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    locationType?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    height?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PathologyUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceLocation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutPathologyNestedInput
    PathologyPhoto?: PathologyPhotoUpdateManyWithoutPathologyNestedInput
  }

  export type PathologyUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    referenceLocation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    PathologyPhoto?: PathologyPhotoUncheckedUpdateManyWithoutPathologyNestedInput
  }

  export type PathologyUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    referenceLocation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PdfUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    pdfType?: EnumPdfTypeFieldUpdateOperationsInput | $Enums.PdfType
    filePath?: StringFieldUpdateOperationsInput | string
    signedFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PdfUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    pdfType?: EnumPdfTypeFieldUpdateOperationsInput | $Enums.PdfType
    filePath?: StringFieldUpdateOperationsInput | string
    signedFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PdfUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    pdfType?: EnumPdfTypeFieldUpdateOperationsInput | $Enums.PdfType
    filePath?: StringFieldUpdateOperationsInput | string
    signedFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateManyPavementInput = {
    id?: string
    projectId: string
    name: string
    locationType: $Enums.LocationType
    height?: number | null
  }

  export type LocationUpdateWithoutPavementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    locationType?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    project?: ProjectUpdateOneRequiredWithoutLocationNestedInput
    MaterialFinishing?: MaterialFinishingUpdateManyWithoutLocationNestedInput
    Photo?: PhotoUpdateManyWithoutLocationNestedInput
    Pathology?: PathologyUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutPavementInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    locationType?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    MaterialFinishing?: MaterialFinishingUncheckedUpdateManyWithoutLocationNestedInput
    Photo?: PhotoUncheckedUpdateManyWithoutLocationNestedInput
    Pathology?: PathologyUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateManyWithoutPavementInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    locationType?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    height?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MaterialFinishingCreateManyLocationInput = {
    id?: string
    surface: $Enums.SurfaceType
    materialFinishing: string
  }

  export type PhotoCreateManyLocationInput = {
    id?: string
    filePath: string
    selectedForPdf: boolean
  }

  export type PathologyCreateManyLocationInput = {
    id?: string
    projectId: string
    referenceLocation: string
    title: string
    description: string
    recordDate: Date | string
  }

  export type MaterialFinishingUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    surface?: EnumSurfaceTypeFieldUpdateOperationsInput | $Enums.SurfaceType
    materialFinishing?: StringFieldUpdateOperationsInput | string
  }

  export type MaterialFinishingUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    surface?: EnumSurfaceTypeFieldUpdateOperationsInput | $Enums.SurfaceType
    materialFinishing?: StringFieldUpdateOperationsInput | string
  }

  export type MaterialFinishingUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    surface?: EnumSurfaceTypeFieldUpdateOperationsInput | $Enums.SurfaceType
    materialFinishing?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    selectedForPdf?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PhotoUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    selectedForPdf?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PhotoUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    selectedForPdf?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PathologyUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceLocation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutPathologyNestedInput
    PathologyPhoto?: PathologyPhotoUpdateManyWithoutPathologyNestedInput
  }

  export type PathologyUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    referenceLocation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    PathologyPhoto?: PathologyPhotoUncheckedUpdateManyWithoutPathologyNestedInput
  }

  export type PathologyUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    referenceLocation?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PathologyPhotoCreateManyPathologyInput = {
    id?: string
    filePath: string
  }

  export type PathologyPhotoUpdateWithoutPathologyInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
  }

  export type PathologyPhotoUncheckedUpdateWithoutPathologyInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
  }

  export type PathologyPhotoUncheckedUpdateManyWithoutPathologyInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
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