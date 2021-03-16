export const assertEq = (left: any, right: any): boolean => {
  try {
    if (Array.isArray(left)) return left.every((_, index) => assertEq(left[index], right[index]));
    if (typeof left === 'object')
      return Object.keys(left).every(key => assertEq(left[key], right[key]));
    else return left === right;
  } catch (error) {
    return false;
  }
};

export const assert = (value: any) => {
  return value === true;
};
