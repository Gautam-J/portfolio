import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const passwd = process.env.AUTH_PASSWD;

const auth = (handler: NextApiHandler) => {
  return (req: NextApiRequest, res: NextApiResponse) => {
    const authPasswd = req.headers["x-auth-token"];

    if (!authPasswd)
      return res.status(401).json({ msg: "Authorization denied." });

    if (authPasswd !== passwd)
      return res.status(401).json({ msg: "Authorization denied." });

    return handler(req, res);
  };
};

export default auth;
