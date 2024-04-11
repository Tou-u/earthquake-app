import type { Dispatch, SetStateAction } from 'react'
import { Form } from 'react-router-dom'
import { Input, Button } from '@nextui-org/react'

import IconSend from '../icons/IconSend.tsx'

type Action = {
  error?: string
  ok?: true
}
export default function NewComment({
  action,
  message,
  setMessage,
}: {
  action: Action | undefined
  message: string
  setMessage: Dispatch<SetStateAction<string>>
}) {
  return (
    <section className='fixed bottom-0 left-0 right-0 p-2 rounded-xl max-w-3xl m-auto bg-background'>
      <p className='text-center font-bold text-lg'>Send a comment</p>
      <Form method='post' className='flex gap-1'>
        <Input
          placeholder='Your message'
          autoComplete='off'
          name='message'
          isInvalid={!!action?.error}
          errorMessage={action?.error ? 'Enter your message' : null}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button isIconOnly color='secondary' variant='light' type='submit'>
          <IconSend />
        </Button>
      </Form>
    </section>
  )
}
