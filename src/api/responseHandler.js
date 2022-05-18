const repo = (obj, type, setError) => {
  console.log(obj, type);
  try {
    return {
      repositories: () => ({
        a: obj.full_name,
        b: obj.description,
        c: obj.watchers,
        d: obj.language,
        e: obj.updated_at,
      }),
      commits: () => commit(obj),
      issues: () => issues(obj),
      topics: () => topics(obj),
      users: () => users(obj),
    }[type]();
  } catch (err) {
    console.log("repo function error", err);
    setError(true);
    return {};
  }
};

export default repo;

const commit = (obj) => {
  try {
    const {
      commit: {
        author: { name, date },
        message,
      },
      url,
    } = obj;
    return reducer([
      name,
      message,
      url,
      new Date(date).toLocaleDateString("en-US"),
    ]);
  } catch (err) {
    throw Error(err);
  }
};

const issues = (obj) => {
  try {
    const {
      html_url,
      user: { login },
      title,
      body,
      updated_at,
    } = obj;
    return reducer([
      login,
      html_url,
      title,
      body,
      new Date(updated_at).toLocaleDateString("en-US"),
    ]);
  } catch (err) {
    throw Error(err);
  }
};

const topics = (obj) => {
  const { name, description, html_url, updated_at } = obj;
  try {
    return reducer([
      name,
      description,
      html_url,
      new Date(updated_at).toLocaleDateString("en-US"),
    ]);
  } catch (err) {
    throw Error(err);
  }
};

const users = (obj) => {
  try {
    return { a: obj.login, b: obj.url };
  } catch (err) {
    throw Error(err);
  }
};

const reducer = (arr) => {
  const keys = ["a", "b", "c", "d", "e"];
  const newObj = arr.reduce((acc, item, index) => {
    let obj = {};
    obj[keys[index]] = item;
    acc = { ...acc, ...obj };
    return acc;
  }, {});
  return newObj;
};
