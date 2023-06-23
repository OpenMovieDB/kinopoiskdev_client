export function queryParams(params: { [key: string]: any }): string {
  let urlSearchParams = new URLSearchParams();

  for (let key in params) {
    if (Array.isArray(params[key])) {
      for (let value of params[key]) {
        urlSearchParams.append(key, value);
      }
    } else {
      urlSearchParams.append(key, params[key]);
    }
  }

  return urlSearchParams.toString();
}
