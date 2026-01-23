import db from './connection'
import { AllRating } from '../../models/allRating'

export async function addAllRating(payload: AllRating) {
  const ratingId = await db('rating').insert({
    user_id: payload.userId,
    egg_bene_id: payload.eggBeneId,
    overall_score: payload.overallScore,
  })

  const ratingId = Array.isArray(ratingId) ? ratingId[0] : ratingId

  if (oayload.comment || payload.wouldOrderAgain !== undefined) {
    await db('review').insert({
      rating_id: ratingId,
      comment: payload.comment ?? '',
      would_order_again: payload.wouldOrderAgain ?? null,
    })
  }
  if (payload.imageURL) {
    await db('photo').insert({
      egg_bene_id: payload.eggBeneId,
      user_id: payload.userId,
      image_url: payload.imageUrl,
    })
  }
  const hasCategoryScores =
    payload.eggScore !== undefined ||
    payload.hollandaiseScore !== undefined ||
    payload.baseScore !== undefined ||
    payload.sideScore !== undefined ||
    payload.waitTime !== undefined ||
    payload.waitTime !== undefined ||
    payload.portionSize !== undefined ||
    payload.overallCafeScore !== undefined

  if (hasCategoryScores) {
    await db('category_rating').insert({
      rating_id: ratingId,
      egg_score: payload.eggScore ?? null,
      hollandaise_score: payload.hollandaiseScore ?? null,
      base_score: payload.baseScore ?? null,
      side_score: payload.sideScore ?? null,
      wait_time: payload.waitTime ?? null,
      portion_size: payload.portionSize ?? null,
      overall_cafe_score: payload.overallCafeScore ?? null,
    })
  }
  return ratingId
}
