import { useParams } from 'react-router-dom'
import LoadingSpinner from './LoadingSpinner.tsx'
import NotFound from './NotFound.tsx'
import useFeature from '../hooks/useFeature.tsx'
import useComments from '../hooks/useComments.tsx'
import FeatureInfo from './FeatureInfo.tsx'

import { Input } from '@nextui-org/react'
import IconSend from '../icons/IconSend.tsx'
import { FormEvent, useState } from 'react'
import { csrfToken } from '../utils/csrf.ts'

export default function Comments() {
  let { id } = useParams()

  const { feature, isLoadingFeature, error } = useFeature(id!)
  const { comments, isLoadingComments } = useComments(id!)

  const [message, setMessage] = useState<string>('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const comment = { body: message }

    const response = await fetch(`/api/features/${id}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken(),
      },
      body: JSON.stringify(comment),
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <section className='min-h-screen'>
      {isLoadingFeature && <LoadingSpinner title='Getting feature...' />}
      {error && <NotFound />}
      {feature && (
        <>
          <FeatureInfo feature={feature} />
          {isLoadingComments ? (
            'Loading comments..'
          ) : (
            <>
              <code>{JSON.stringify(comments, null, 2)}</code>
              <section className='fixed bottom-0 left-0 right-0 p-6'>
                <p className='text-center font-bold text-lg'>Send a comment</p>
                <form onSubmit={handleSubmit}>
                  <Input
                    placeholder='Your message'
                    endContent={<IconSend />}
                    autoComplete='off'
                    value={message}
                    onChange={(e) => setMessage(e.currentTarget.value)}
                  />
                </form>
              </section>
            </>
          )}
        </>
      )}
    </section>
  )
}
