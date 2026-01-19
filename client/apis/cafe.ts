import request from 'superagent'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getCafeSummaries(): Promise<CafeSummary[]> {
  const response = await request.get(`${rootURL}/cafeSummmary`)
  return response.body.cafeSummary as string[]
}
