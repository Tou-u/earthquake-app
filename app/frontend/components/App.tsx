import useFeatures from '../hooks/useFeatures.tsx'
import Card from './Card.tsx'
import LoadingSpinner from './LoadingSpinner.tsx'

export default function App() {
  const { features, isLoading } = useFeatures()

  return (
    <section className='min-h-screen'>
      {isLoading && (
        <div className='flex items-center justify-center h-screen'>
          <LoadingSpinner title='Getting features...' />
        </div>
      )}
      <div className='grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] place-items-center gap-2 p-2'>
        {features &&
          features.data.map((feature) => (
            <Card key={feature.id} {...feature} />
          ))}
      </div>
    </section>
  )
}
