import { Pagination as PaginationNU } from '@nextui-org/react'

interface Props {
  total: number
  page: number
  onChange: (page: number) => void
}

export default function Pagination({ total, page, onChange }: Props) {
  return (
    <PaginationNU
      total={total}
      initialPage={1}
      page={total < page ? total : page}
      color='secondary'
      showControls
      showShadow
      onChange={onChange}
      className='m-auto'
    />
  )
}
