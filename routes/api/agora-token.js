const {
  RtcRole,
  RtcTokenBuilder,
  RtmRole,
  RtmTokenBuilder,
} = require("agora-access-token");
const express = require("express");
const auth = require("../../modules/auth");
const router = express.Router();

router.get("/rtc", auth.verifyToken, (req, res) => {
  const channelName = req.query.channelName;
  if (!channelName) {
    return res
      .status(500)
      .json({ error: "channel is required", success: false });
  }
  let role = RtcRole.SUBSCRIBER;
  if (req.query.role === "publisher") {
    role = RtcRole.PUBLISHER;
  }
  let uid = 0;
  let expireTime = 3600;
  const currentTime = Math.floor(Date.now() / 1000);
  const privligExpireTime = currentTime + expireTime;
  const token = RtcTokenBuilder.buildTokenWithUid(
    process.env.AGORA_APP_ID,
    process.env.AGORA_APP_CERTIFICATE,
    channelName,
    uid,
    role,
    privligExpireTime
  );
  return res.json({
    token: token,
    success: true,
    message: "Token generated successfully",
  });
});

router.get("/rtm", auth.verifyToken, (req, res) => {
  const channelName = req.query.channelName;
  if (!channelName) {
    return res
      .status(500)
      .json({ error: "channel is required", success: false });
  }
  let role = RtmRole.Rtm_User;
  console.log(req.body.uid, "userid", req.query.channelName);
  let userId = req.body.uid;
  let expireTime = 3600;
  const currentTime = Math.floor(Date.now() / 1000);
  const privligExpireTime = currentTime + expireTime;
  const token = RtmTokenBuilder.buildToken(
    process.env.AGORA_APP_ID,
    process.env.AGORA_APP_CERTIFICATE,
    userId,
    role,
    privligExpireTime
  );
  return res.json({
    token: token,
    success: true,
    message: "Token generated successfully",
  });
});

module.exports = router;
