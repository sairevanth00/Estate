import express from "express";
import { createListing, updateListing, deleteListing } from "../controllers/listing.controller.js";
import { verifyToken } from "../middleware/validate.token.handler.js";

const router = express.Router();

router.post('/create', verifyToken, createListing);
router.put('/update/:id', verifyToken, updateListing);
router.delete('/delete/:id', verifyToken, deleteListing);

export default router;