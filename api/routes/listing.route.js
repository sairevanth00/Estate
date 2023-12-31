import express from "express";
import { createListing, updateListing, deleteListing, getListing } from "../controllers/listing.controller.js";
import { verifyToken } from "../middleware/validate.token.handler.js";

const router = express.Router();

router.post('/create', verifyToken, createListing);
router.put('/update/:id', verifyToken, updateListing);
router.get('/:id', getListing);
router.delete('/delete/:id', verifyToken, deleteListing);

export default router;