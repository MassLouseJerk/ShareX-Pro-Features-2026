function uniqueArray<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}
function flattenArray<T>(arr: T[]): T[] {
  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
}
function mapArray<T, U>(arr: T[], callback: (item: T) => U): U[] {
  return arr.map(callback);
}
function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  return arr.filter(predicate);
}
function reduceArray<T, U>(arr: T[], reducer: (acc: U, item: T) => U, initialValue: U): U {
  return arr.reduce(reducer, initialValue);
}
function sortArray<T>(arr: T[], compareFn?: (a: T, b: T) => number): T[] {
  return arr.slice().sort(compareFn);
}
function findInArray<T>(arr: T[], predicate: (item: T) => boolean): T | undefined {
  return arr.find(predicate);
}
function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
function zipArrays<T, U>(arr1: T[], arr2: U[]): [T, U][] {
  const length = Math.min(arr1.length, arr2.length);
  return Array.from({ length }, (_, i) => [arr1[i], arr2[i]]);
}
function mergeUniqueArrays<T>(...arrays: T[][]): T[] {
  return uniqueArray(arrays.flat());
}
