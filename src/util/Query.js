export function getParams(url) {
  const { searchParams } = new URL(url);
  let obj = {};
  for (const key of searchParams.keys()) {
    obj[key] = searchParams.get(key);
  }

  return obj;
}
