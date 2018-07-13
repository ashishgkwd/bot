module.exports = (req, res, next) => {
  if (req.method === "GET") {
    next();
  } else {
    if (req.header("auth-token") === "abc987654321") {
      next();
    } else {
      res.sendStatus(401);
    }
  }
};
