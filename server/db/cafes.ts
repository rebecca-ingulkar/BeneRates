import db from './connection'
import { CafeSummary } from '../../models/cafe'

interface CafeSummaryRow {
  id: number
  name: string
  suburb: string
  avgRating: string | number
  ratingCount: string | number
}

export async function getCafeSummaries(): Promise<CafeSummary[]> {
  const results = (await db('cafes')
    .join('egg_bene', 'egg_bene.cafe_id', 'cafes.id')
    .join('rating', 'rating.egg_bene_id', 'egg_bene.id')
    .select('cafes.id', 'cafes.name', 'cafes.suburb')
    .avg({ avgRating: 'rating.overall_score' })
    .count({ ratingCount: 'rating.id' })
    .groupBy('cafes.id', 'cafes.name', 'cafes.suburb')) as CafeSummaryRow[]

  return results.map((row) => ({
    id: row.id,
    name: row.name,
    suburb: row.suburb,
    avgRating: Number(row.avgRating),
    ratingCount: Number(row.ratingCount),
  }))
}
