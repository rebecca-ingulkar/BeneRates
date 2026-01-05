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
    .join('egg_benes', 'egg_benes.cafe_id', 'cafes.id')
    .join('ratings', 'ratings.egg_bene_id', 'egg_benes.id')
    .select('cafes.id', 'cafes.name', 'cafes.suburb')
    .avg({ avgRating: 'ratings.overall_score' })
    .count({ ratingCount: 'ratings.id' })
    .groupBy('cafes.id', 'cafes.name', 'cafes.suburb')) as CafeSummaryRow[]

  return results.map((row) => ({
    id: row.id,
    name: row.name,
    suburb: row.suburb,
    avgRating: Number(row.avgRating),
    ratingCount: Number(row.ratingCount),
  }))
}
