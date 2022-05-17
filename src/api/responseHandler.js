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
    return err;
  }
};

export default repo;

const errorCheck = (obj) => {
  console.log("error", obj);
  // return obj;
  throw new Error("Request Issue: select another type");
  // return obj;
  // if (Object.keys(obj).includes("message")) {
  //   return { a: obj.message };
  // } else {
  //   return {};
  // }
};

const commit = (obj) => {
  console.log("commits", obj);
  if (Object.keys(obj).includes("commit")) {
    const {
      commit: {
        author: { name, date },
      },
      message,
      url,
    } = obj;
    return {
      a: name,
      b: message,
      c: url,
      d: new Date(date).toLocaleDateString("en-US"),
    };
  } else {
    return errorCheck(obj);
  }
};

const issues = (obj) => {
  console.log("issues", obj);
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
    return errorCheck(obj);
  }
};

const topics = (obj) => {
  console.log("topics", obj);
  if (Object.keys(obj).includes("created_by")) {
    return {
      a: obj.created_by,
      b: obj.short_description,
      c: obj.display_name,
      d: new Date(obj.updated_at).toLocaleDateString("en-US"),
    };
  } else {
    console.log(Object.keys(obj));
    return errorCheck(obj);
  }
};

const users = (obj) => {
  console.log("users", obj);
  if (Object.keys(obj).includes("login")) {
    return { a: obj.login, b: obj.url };
  } else {
    return errorCheck(obj);
  }
};
