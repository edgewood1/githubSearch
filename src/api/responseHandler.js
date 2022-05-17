const repo = (obj, type) => {
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
    return {};
  }
};

export default repo;

const commit = (obj) => {
  if (Object.keys(obj).includes("commit")) {
    const {
      commit: {
        author: { name, date },
        message,
      },
      url,
    } = obj;
    return {
      a: name,
      b: message,
      c: url,
      d: new Date(date).toLocaleDateString("en-US"),
    };
  } else {
    return {};
  }
};

const issues = (obj) => {
  if (Object.keys(obj).includes("user")) {
    const {
      html_url,
      user: { login },
      title,
      body,
      updated_at,
    } = obj;
    return {
      a: login,
      b: html_url,
      c: title,
      d: body,
      e: new Date(updated_at).toLocaleDateString("en-US"),
    };
  } else {
    return {};
  }
};

const topics = (obj) => {
  const keys = Object.keys(obj);

  if (keys.includes("name")) {
    return {
      a: obj.name,
      b: obj.description,
      c: obj.html_url,
      d: new Date(obj.updated_at).toLocaleDateString("en-US"),
    };
  } else if (keys.includes("login")) {
    return {
      a: obj.login,
      b: obj.html_url,
    };
  } else {
    return {};
  }
};

const users = (obj) => {
  if (Object.keys(obj).includes("login")) {
    return { a: obj.login, b: obj.url };
  } else {
    return {};
  }
};
