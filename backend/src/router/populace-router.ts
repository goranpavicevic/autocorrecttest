import express from "express";
import getAllPopulace from "../controller/populace-controller";

const router = express.Router();

router.post("/populace", getAllPopulace);

export = router;
