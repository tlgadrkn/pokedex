export async function fetchDataFrom(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(`Fetch Error - ${error}`);
  }
}
