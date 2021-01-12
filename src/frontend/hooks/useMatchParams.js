import {useCallback, useEffect, useState} from 'react'

const useMatchParams = (initialValue) => {
  const [value, setValue] = useState(null)
  useCallback(() => {
    setValue(initialValue)
  }, [initialValue])
  console.log('value', value)
  return value
}

export default useMatchParams
