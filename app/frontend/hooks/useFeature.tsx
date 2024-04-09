import { useState, useEffect } from 'react'
import { Feature } from '../interfaces/Features.ts'

function useFeature(id: string) {
  const [feature, setFeature] = useState<Feature | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const getFeature = async () => {
      setIsLoading(true)
      const response = await fetch(`/api/features/${id}`)

      if (response.status === 404) {
        setError(true)
        setIsLoading(false)
        return
      }
      const data = await response.json()
      setFeature(data)
      setIsLoading(false)
    }
    getFeature()
  }, [])

  return { feature, isLoadingFeature: isLoading, error }
}

export default useFeature
