export function extend<T extends object, U extends object>(t: T, u: U): T & U {
    const result: Partial<T & U> = {};
    for (const prop in t) {
        if (t.hasOwnProperty(prop)) {
            (result as T)[prop] = t[prop];
        }
    }
    for (const prop in u) {
        if (u.hasOwnProperty(prop)) {
            (result as U)[prop] = u[prop];
        }
    }
    return result as T & U;
}
