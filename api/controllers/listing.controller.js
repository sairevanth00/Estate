import { errorHandler } from "../middleware/error.handler.js";
import Listing from "../models/listing.model.js";

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    res.status(201).json(listing);
  } catch (err) {
    next(err);
  }
};

export const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if(!listing) 
    return next(errorHandler(404, 'Listing not found!'))
  if (req.user.id !== listing.userRef) 
    return next(errorHandler(404, 'You can only delete your own listing!'))
  
  try {
    await Listing.findByIdAndDelete(req.params.id)
    res.status(200).json({message: 'Listing has been deleted!'});
  } catch (error) {
    next(error)
  }
};

export const updateListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if(!listing) 
    return next(errorHandler(404, 'Listing not found!'))
  if (req.user.id !== listing.userRef) 
    return next(errorHandler(404, 'You can only update your own listing!'))
  
  try {
    const updatededListing = await Listing.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json({updatededListing, message: 'Listing has been updated!'});
  } catch (error) {
    next(error)
  }
};
