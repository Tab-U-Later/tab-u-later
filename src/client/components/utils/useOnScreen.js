import {useEffect, useState} from 'react'

export function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false)



  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  )

  useEffect(() => {
    if(ref.current === undefined || ref.current === null){
      return false;
    }
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [ref, observer])

  return isIntersecting
}
