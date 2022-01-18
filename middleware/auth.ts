const passwd = process.env.AUTH_PASSWD;

// TODO: add types
const auth = (handler) => {
  return (req, res) => {
    const authPasswd = req.headers["x-auth-token"];

    if (!authPasswd) {
      return res.status(401).json({ msg: "Authorization denied." });
    }

    if (authPasswd !== passwd) {
      return res.status(401).json({ msg: "Authorization denied." });
    }

    return handler(req, res);
  };
};

export default auth;
