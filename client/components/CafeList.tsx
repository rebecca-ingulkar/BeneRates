import { useQuery } from '@tanstack/react-query'
import { getCafeSummaries } from '../apis/cafes'

export default function CafeList() {
  const {
    data: cafes,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ['cafes'], queryFn: getCafeSummaries })
  if (isLoading) return <p>Loading cafes...</p>
  if (isError) {
    return <p>Something went wrong: {(error as Error).message}</p>
  }
  return (
    <div>
      <h2>Cafes</h2>
      <ul>
        {cafes?.map((cafe) => (
          <li key={cafe.id}>
            <h3>{cafe.name}</h3>
            <p>
              {cafe.suburb} • ⭐ {cafe.avgRating.toFixed(1)} ({cafe.ratingCount}{' '}
              ratings)
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
