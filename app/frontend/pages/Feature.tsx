import { useEffect, useState } from 'react'
import { useLoaderData, useActionData } from 'react-router-dom'

import { Feature as IFeature } from '../interfaces/Features.ts'
import { Comment } from '../interfaces/Comments.ts'
import { csrfToken } from '../utils/csrf.ts'
import FeatureInfo from '../components/FeatureInfo.tsx'
import Comments from '../components/Comments.tsx'
import NewComment from '../components/NewComment.tsx'

type Data = {
  feature: IFeature
  comments: Comment[]
}

type Action = {
  error?: string
  ok?: true
}

export default function Feature() {
  const { feature, comments } = useLoaderData() as Data
  const [message, setMessage] = useState('')
  const action = useActionData() as Action | undefined

  useEffect(() => {
    if (action?.ok) {
      setMessage('')
      window.scrollTo(0, 0)
    }
  }, [action])

  return (
    <>
      <FeatureInfo feature={feature} />
      <Comments comments={comments} />
      <NewComment action={action} message={message} setMessage={setMessage} />
    </>
  )
}

export async function loadComments({ params }: { params?: any }) {
  const id = params.id
  const resFeature = await fetch(`/api/features/${id}`)

  if (resFeature.status === 404) throw new Error(resFeature.statusText)

  const feature = await resFeature.json()
  const resComments = await fetch(`/api/features/${id}/comments`)
  const comments = await resComments.json()

  return { feature, comments }
}

export async function createComment({
  request,
  params,
}: {
  request: Request
  params?: any
}) {
  const formData = await request.formData()
  const comment = { body: formData.get('message') }

  const res = await fetch(`/api/features/${params.id}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken(),
    },
    body: JSON.stringify(comment),
  })

  const data = await res.json()

  if (data.error?.includes('missing')) {
    return { error: data.error }
  }

  return { ok: true }
}
