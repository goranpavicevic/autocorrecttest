import { Request, Response } from 'express';
import axios from 'axios';

// @desc    Get all countries from provided API
// @route   GET /api/countries
// @access  Public
const getAllCountries = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      'https://countriesnow.space/api/v0.1/countries'
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export default getAllCountries;
