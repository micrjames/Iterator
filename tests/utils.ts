export function getItered<T>(iter: Iterator<T>): [T, boolean] {
   // IteratorResult<number>; 
   const nextNum = iter.next();
   return [nextNum.value, nextNum.done];
}
