import express from "express";
import { createListing } from "../controllers/listing.controller.js";
import { verifyToken } from "../middleware/validate.token.handler.js";

const router = express.Router();

router.post('/create', verifyToken, createListing)

export default router;