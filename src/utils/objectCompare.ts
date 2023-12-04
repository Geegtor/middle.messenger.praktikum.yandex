type DeepObject<T> = {
  [key: string]: T | DeepObject<T>;
};

export default function objectCompare<T>(obj1: DeepObject<T>, obj2: DeepObject<T>): boolean {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    }

    const val1 = obj1[key];
    const val2 = obj2[key];

    if (typeof val1 === "object" && typeof val2 === "object") {
      if (!objectCompare(val1 as DeepObject<T>, val2  as DeepObject<T>,)) {
        return false;
      }
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
}
