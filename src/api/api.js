const search = (keyword, page, type) => {
  try {
    const url = `https://api.github.com/search/${type}?q=${keyword}&page=${page}&per_page=7&order=asc`;
    return fetch(url)
      .then((response) => response.json())
      .then((response) => response);
  } catch (err) {
    console.log("api error", err);
    throw Error(err);
  }
};

export default search;
