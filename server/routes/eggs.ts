import express from 'express'
import * as db from '../db/db'

const router = express.Router()

//localhost:3000/api/v1/eggs
router.get('/', async (req, res) => {
  try {
    const eggs = await db.getBene()
    res.json(eggs)
    res.json({ eggs: eggs })
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

export default router
