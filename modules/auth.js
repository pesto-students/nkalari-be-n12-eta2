const admin = require("./firebase");

module.exports = {
  verifyToken: async (req, res, next) => {
    await admin
      .auth()
      .verifyIdToken(req.headers["authorization"] || "")
      .then((decodedToken) => {
        const uid = decodedToken.uid;
        req.body.uid = uid;
        next();
      })
      .catch((error) => {
        console.error(error, "i m error");
        res.json({ message: "invalid token", error });
      });
  },
};
