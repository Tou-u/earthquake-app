import { Avatar } from '@nextui-org/react'

import { Comment } from '../interfaces/Comments.ts'
import { formatDate } from '../utils/date.ts'

export default function Comments({ comments }: { comments: Comment[] }) {
  return (
    <section className='p-2 pb-24'>
      {comments.length > 0 ? (
        <article className='flex flex-col gap-2'>
          {comments.map((comment) => (
            <div key={comment.id} className='flex gap-2 items-end'>
              <Avatar />
              <p className='max-w-[calc(100%-80px)] p-2 rounded-xl rounded-bl-none bg-default/50'>
                <span className='text-xs text-white/50'>
                  {formatDate(Date.parse(comment.created_at))}
                </span>
                <br />
                {comment.body}
              </p>
            </div>
          ))}
        </article>
      ) : (
        <p className='text-center pt-10 text-lg font-bold'>
          There are no comments yet, start by sending one!
        </p>
      )}
    </section>
  )
}
