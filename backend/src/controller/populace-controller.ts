import { Request, Response } from 'express';
import axios from 'axios';

// @desc    Get population for given city from provided API
// @route   GET /api/populace
// @access  Public
const getAllPopulace = async (req: Request, res: Response) => {
  try {
    const body = { city: req.body.city.toLowerCase() };

    const response = await axios.post(
      'https://countriesnow.space/api/v0.1/countries/population/cities',
      body
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error });
  }
};

export default getAllPopulace;
