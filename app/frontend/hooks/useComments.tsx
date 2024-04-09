import { useState, useEffect } from 'react'

function useComments(id: string) {
  const [comments, setComments] = useState<any | []>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getComments = async () => {
      setIsLoading(true)
      const response = await fetch(`/api/features/${id}/comments`)
      const data = await response.json()
      setComments(data)
      setIsLoading(false)
    }
    getComments()
  }, [])

  return { comments, isLoadingComments: isLoading }
}

export default useComments
