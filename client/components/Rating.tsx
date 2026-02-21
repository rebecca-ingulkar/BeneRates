import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addRating } from '../apis/ratings'
import { AllRating } from '../../models/allRating'

export default function RatingForm({
  eggBeneId,
  userId,
}: {
  eggBeneId: number
  userId: number
}) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (payload: AllRating) => addRating(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ratings'] })
      queryClient.invalidateQueries({ queryKey: ['cafes'] })
      setOverallScore(0)
      setComment('')
      setWouldOrderAgain('')
    },
  })

  const [categories, setCategories] = useState({
    eggScore: null as number | null,
    hollandaiseScore: null as number | null,
    baseScore: null as number | null,
    sideScore: null as number | null,
    waitTime: null as number | null,
    portionSize: null as number | null,
    overallCafeScore: null as number | null,
  })

  const calculatedOverallScore = (() => {
    const values = Object.values(categories).filter(
      (v): v is number => v !== null,
    )
    if (values.length === 0) return 0

    const sum = values.reduce((acc, val) => acc + val, 0)
    return Number((sum / values.length).toFixed(1))
  })()

  const [overallScore, setOverallScore] = useState<number>(0)
  const [comment, setComment] = useState('')
  // const [wouldOrderAgain, setWouldOrderAgain] = useState<boolean | undefined>(undefined)
  const [wouldOrderAgain, setWouldOrderAgain] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('🔥 submit fired')

    mutation.mutate({
      userId,
      eggBeneId,
      overallScore: calculatedOverallScore,
      comment,
      wouldOrderAgain:
        wouldOrderAgain === '' ? undefined : wouldOrderAgain === 'true',

      eggScore: categories.eggScore ?? undefined,
      hollandaiseScore: categories.hollandaiseScore ?? undefined,
      baseScore: categories.baseScore ?? undefined,
      sideScore: categories.sideScore ?? undefined,
      waitTime: categories.waitTime ?? undefined,
      portionSize: categories.portionSize ?? undefined,
      overallCafeScore: categories.overallCafeScore ?? undefined,
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Overall Score
        <input
          type="number"
          min={0}
          max={5}
          value={overallScore}
          onChange={(e) => setOverallScore(Number(e.target.value))}
          required
        />
      </label>
      <label>
        Comment
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <label>
        Would order again?
        <select
          value={wouldOrderAgain ?? ''}
          onChange={(e) => setWouldOrderAgain(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </label>
      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Saving...' : 'Submit rating'}
      </button>
      {mutation.isError && <p>Something went wrong. Please try again.</p>}
    </form>
  )
}
