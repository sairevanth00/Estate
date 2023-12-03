import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers.cookie.split("=")[1];
  if (!token) return next(401, "Unauthorized");
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(403, "Forbidden");
    req.user = user;
    next();
  });
};
