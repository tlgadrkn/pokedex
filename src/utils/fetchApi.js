export async function fetchDataFrom(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log("fetched");
  return data;
}
