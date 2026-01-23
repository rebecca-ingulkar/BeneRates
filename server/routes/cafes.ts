import express from 'express'
import { getCafeSummaries } from '../db/cafes'

const router = express.Router()

//localhost:3000/api/v1/cafes
router.get('/', async (req, res) => {
  try {
    const cafes = await getCafeSummaries()
    res.json(cafes)
    console.log('CAFES FROM DB', cafes)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

export default router
