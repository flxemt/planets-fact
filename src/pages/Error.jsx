import { useRouteError } from 'react-router-dom'

export default function Error() {
  const error = useRouteError()

  return (
    <div className="text-center mt-96">
      <h1 className="font-display text-h2">Oops, something went wrong</h1>
      <p className="text-body leading-body mt-4">{error.message}</p>
    </div>
  )
}
