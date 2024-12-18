export function getItered<T>(iter: Iterator<T>): [T, boolean] {
   const nextNum = iter.next();
   return [nextNum.value, nextNum.done];
}
export function expectIter<T>(expectedValue: T, value: T, done: boolean) {
   expect(value).toBe(expectedValue);
   expect(done).toBeFalsy();
}
export function expectIterEnd<T>(value: T, done: boolean) {
   expect(value).toBeNull();
   expect(done).toBeTruthy();
}
