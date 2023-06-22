function flattenHelper<T>(
  obj: T,
  prefix = '',
  res: Record<string, any> = {},
): Record<string, any> {
  for (let key in obj) {
    let value = obj[key];
    let newKey = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object') {
      flattenHelper(value, newKey, res);
    } else {
      res[newKey] = value;
    }
  }
  return res;
}
