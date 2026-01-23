import request from 'superagent'
import { Cafe, CafeSummary } from '../../models/cafe'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getCafeSummaries() {
  const result = await request.get(`${rootURL}/cafes`)
  return result.body as CafeSummary[]
}

export async function getCafe() {
  const result = await request.get(`${rootURL}/cafe`)
  return result.body as Cafe[]
}
