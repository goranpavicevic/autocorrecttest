import express from "express";
import getAllCountries from "../controller/countries-controller";

const router = express.Router();

router.get("/countries", getAllCountries);

export = router;
