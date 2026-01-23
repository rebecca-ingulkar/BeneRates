export interface AllRating {
  eggBeneId: number
  userId: number
  overallScore: number

  comment?: string
  wouldOrderAgain?: boolean

  imageUrl?: string

  eggScore?: number
  hollandaiseScore?: number
  baseScore?: number
  sideScore?: number
  waitTime?: number
  portionSize?: number
  overallCafeScore?: number
}
