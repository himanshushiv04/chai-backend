import { Router } from "express";
import {
  loginUser,
  logOutUser,
  registerUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  updateAvatar,
  getUserChannelProfile,
  getWatchHistory,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

// secured routes
router.route("/logout").post(verifyJWT, logOutUser);
router.route("/refresh-token").post(refreshAccessToken);

// password update
router.route("/chnage-password").post(verifyJWT, changeCurrentPassword);

// get current user
router.route("/current-user").get(verifyJWT, getCurrentUser);
// update account details
router.route("/update-account").patch(verifyJWT, updateAccountDetails);
// avatar update
router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateAvatar);
//cover Img update
// router.route("/cover-image").patch(verifyJWT, upload.single("coverImage"),updateCoverImage)

router.route("/c/:username").get(verifyJWT, getUserChannelProfile); // important🔥
// watch-history
router.route("/history").get(verifyJWT, getWatchHistory);

export default router;
