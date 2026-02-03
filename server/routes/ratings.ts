import express from 'express'
import { addAllRating } from '../db/ratings'

const router = express.Router()

//localhost:3000/api/v1/ratings
router.post('/', async (req, res) => {
  try {
    const ratingId = await addAllRating(req.body)
    res.status(200).json({ ratingId })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
