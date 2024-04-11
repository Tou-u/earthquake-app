import {
  ScrollRestoration,
  useLoaderData,
  useSearchParams,
} from 'react-router-dom'

import { Features } from '../interfaces/Features.ts'
import { formatPage } from '../utils/query.ts'
import Card from '../components/Card.tsx'
import Pagination from '../components/Pagination'
import MagSelect from '../components/MagSelect.tsx'

export default function Home() {
  const { data, pagination } = useLoaderData() as Features
  const [searchParams, setSearchParams] = useSearchParams()

  const page = formatPage(searchParams.get('page')!)
  const totalPages = Math.ceil(pagination.total / pagination.per_page)

  function handlePageChange(page: number) {
    searchParams.set('page', page.toString())
    setSearchParams(searchParams)
  }

  return (
    <>
      <MagSelect
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      {data.length > 0 ? (
        <>
          <section className='p-2 flex flex-col justify-center'>
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
        </>
      ) : (
        <p className='text-center pt-10 font-bold text-lg'>
          No features found.
        </p>
      )}
      <ScrollRestoration />
    </>
  )
}

export async function loadFeatures({ request }: { request: Request }) {
  const page = formatPage(new URL(request.url).searchParams.get('page')!)
  const mag_type = new URL(request.url).searchParams.getAll('mag_type')

  const params = new URLSearchParams()
  mag_type.forEach((type) => params.append('mag_type[]', type))

  const response = await fetch(
    `/api/features?page=${page}&${params.toString()}`
  )
  return await response.json()
}
