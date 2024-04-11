import { SetURLSearchParams } from 'react-router-dom'
import { Select, SelectItem } from '@nextui-org/react'
import { useState } from 'react'

const mag_types = ['md', 'ml', 'ms', 'mw', 'me', 'mi', 'mb', 'mlg']
export default function MagSelect({
  searchParams,
  setSearchParams,
}: {
  searchParams: URLSearchParams
  setSearchParams: SetURLSearchParams
}) {
  const [values, setValues] = useState(searchParams.getAll('mag_type'))
  function handleChange(keys: any) {
    setValues(keys)
    const params = new URLSearchParams()
    keys.forEach((key: any) => {
      params.append('mag_type', key)
    })
    params.set('page', '1')
    setSearchParams(params)
  }

  return (
    <Select
      label='Magnitude Type'
      selectionMode='multiple'
      className='max-w-xs m-auto flex'
      variant='faded'
      selectedKeys={values}
      onSelectionChange={handleChange}
    >
      {mag_types.map((type) => (
        <SelectItem key={type} value={type}>
          {type}
        </SelectItem>
      ))}
    </Select>
  )
}
