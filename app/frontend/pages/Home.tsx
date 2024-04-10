import {
  ScrollRestoration,
  useLoaderData,
  useSearchParams,
} from 'react-router-dom'
import { formatPage } from '../utils/query.tsx'
import { Features } from '../interfaces/Features.ts'
import Card from '../components/Card.tsx'
import Pagination from '../components/Pagination'

export default function Home() {
  const { data, pagination } = useLoaderData() as Features
  const [searchParams, setSearchParams] = useSearchParams()

  const page = formatPage(searchParams.get('page')!)
  const totalPages = Math.ceil(pagination.total / pagination.per_page)

  function handlePageChange(page: number) {
    setSearchParams({ page: page.toString() })
  }

  return (
    <>
      <section className='p-2 flex justify-center'>
        <Pagination
          total={totalPages}
          page={page}
          onChange={handlePageChange}
        />
      </section>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-2'>
        {data.map((feature) => (
          <Card key={feature.id} feature={feature} />
        ))}
      </div>
      <section className='p-8 flex justify-center'>
        <Pagination
          total={totalPages}
          page={page}
          onChange={handlePageChange}
        />
      </section>
      <ScrollRestoration />
    </>
  )
}

export async function loadFeatures({ request }: { request: Request }) {
  const page = formatPage(new URL(request.url).searchParams.get('page')!)
  const response = await fetch(`/api/features?page=${page}`)
  return await response.json()
}
