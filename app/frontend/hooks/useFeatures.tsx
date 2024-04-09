import { useState, useEffect } from 'react'
import { Features } from '../interfaces/Features.ts'

function useFeatures() {
  const [data, setData] = useState<Features | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getFeatures = async () => {
      setIsLoading(true)
      const response = await fetch('/api/features')
      const data = await response.json()
      setData(data)
      setIsLoading(false)
    }
    getFeatures()
  }, [])

  return { features: data, isLoading }
}

export default useFeatures
