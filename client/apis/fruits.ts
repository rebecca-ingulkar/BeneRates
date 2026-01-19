import request from 'superagent'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getCafeSummaries(): Promise<Cafe> {
  const response = await request.get(`${rootURL}/fruits`)
  return response.body.fruits as string[]
}
