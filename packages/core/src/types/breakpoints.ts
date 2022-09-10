export type MaybeBreakpointObject<T> = BreakpointObject<T> | T;

export type BreakpointObject<T> = Record<string, T>;
