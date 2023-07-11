import debounce from 'lodash.debounce'
import { useCallback, useEffect, useState } from 'react'

export const useDebouncedValue = <V,>(value: V): [V | undefined, boolean] => {
  const [localValue, setValue] = useState<V>()
  const [isLoading, setIsLoading] = useState(false)
  const debouncedSetValue = useCallback(
    debounce((v: V) => {
      setValue(v)
      setIsLoading(false)
    }, 1000),
    [],
  )

  useEffect(() => {
    setIsLoading(true)
    debouncedSetValue(value)
  }, [value])

  return [localValue, isLoading]
}
