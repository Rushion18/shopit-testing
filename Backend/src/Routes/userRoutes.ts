import Router from "express";
import {
  checkUserDetails,
  deleteUser,
  forgotPassword,
  getAllUsers,
  getOneUser,
  loginUser,
  registerUser,
  resetPassword,
  updateUserDetails,
} from "../controllers/usercontroller";
import { verifyToken } from "../middlewares/verifytoken";

const user_router = Router();


user_router.get("/getallusers", verifyToken, getAllUsers);
user_router.post("/register", registerUser);
user_router.post("/login", loginUser);
user_router.get("/checkuserdetails", verifyToken, checkUserDetails);
user_router.post("/getoneuser", getOneUser);
user_router.put("/updateuser", updateUserDetails);
user_router.delete("/deleteuser/:id", deleteUser);
user_router.post("/resetpassword", resetPassword);
user_router.post("/forgot", forgotPassword);

export default user_router;
