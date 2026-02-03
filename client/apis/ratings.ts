import request from 'superagent'
import { AllRating } from '../../models/allRating'

const rootURL = new URL('/api/v1', document.baseURI)

export async function addRating(payload: AllRating) {
  const res = await request.post(`${rootURL}/ratings`).send(payload)

  return res.body as { ratindId: number }
}
