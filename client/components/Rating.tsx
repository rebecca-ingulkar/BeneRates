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
    },
  })

  // const mutation = useMutation({
  //   mutationFn: (payload: AllRating) => {
  //     console.log('📦 payload sent', payload)
  //     return addRating(payload)
  //   },
  //   onSuccess: (data) => {
  //     console.log('✅ success', data)
  //     queryClient.invalidateQueries({ queryKey: ['ratings'] })
  //   },
  //   onError: (err) => {
  //     console.error('❌ mutation error', err)
  //   },
  // })

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
      overallScore,
      comment,
      wouldOrderAgain:
        wouldOrderAgain === '' ? undefined : wouldOrderAgain === 'true',
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
