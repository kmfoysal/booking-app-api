import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/usersController.js";
import { verifyAuth } from "../middlewares/verifyAuth.js";

const router = express.Router();

router.get("/checkauthentication", verifyAuth, (req, res, next) => {
    res.send("hello user, you are logged in");
});

router.get("/checkuser/:id", verifyAuth, (req,res,next)=>{
  
        res.send("hello user, you are logged in and you can delete your account");
   
})

router.get("/checkadmin/:id", verifyAuth, (req, res, next) => {
    res.send("hello admin, you are logged in and you can delete all accounts");
});

//GET ALL
router.get("/", verifyAuth, getUsers);

//UPDATE
router.put("/:id", verifyAuth, updateUser);

//DELETE
router.delete("/:id", verifyAuth, deleteUser);

//GET
router.get("/:id", verifyAuth, getUser);

//GET ALL
// router.get("/", verifyAdmin, getUsers);

export default router;
