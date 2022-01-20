/* eslint-disable */

export class ExternalObject<T> {
  readonly '': {
    readonly '': unique symbol
    [K: symbol]: T
  }
}
export function getCwd(callback: (arg0: string) => void): void
/** napi = { version = 2, features = ["serde-json"] } */
export function readFile(callback: (arg0: Error | undefined, arg1?: string | undefined | null) => void): void
export function plus100(input: number): number
export function add(a: number, b: number): number
