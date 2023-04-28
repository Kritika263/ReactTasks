const baseURL =
  "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCM3fy7rYZ2ipTld0Y2y35pmqUoDQ0twBc&type=video&part=snippet&maxResults=9&q=js";
export const GetData = async () => {
  try {
    const res = await fetch(`${baseURL}`);
    console.log(res);
    if (!res.ok) {
      console.error("failed", res.status);
      return;
    }
    const jsonData = await res.json();
    console.log(jsonData);
    return jsonData;
  } catch (error) {
    console.log("error in making request", error);
  }
};

export const getSearchData = async (query) => {
    const baseURL2 =
 ` https://www.googleapis.com/youtube/v3/search?key=AIzaSyCM3fy7rYZ2ipTld0Y2y35pmqUoDQ0twBc&type=video&part=snippet&maxResults=9&q=${query}`;
  console.log(query);
 try {
    const res = await fetch(`${baseURL2}`);
    if (!res.ok) {
      console.error("failed", res.status);
      return;
    }
    const jsonData = await res.json();
    // console.log(jsonData);
    return jsonData;
  } catch (error) {
    console.log("error in making request", error);
  }
};

