function getQuery(url) {
  const urlObj = new URL(url);
  const searchParams = Object.fromEntries(urlObj.searchParams);
  return searchParams;
}

export default getQuery;