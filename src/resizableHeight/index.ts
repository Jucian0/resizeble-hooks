/* eslint-disable immutable/no-mutation */
import { useRef, useCallback, useEffect } from 'react'

export function useResizableHeight(
   containerWidth?: number,
   onResize?: ({ element, mirror }: any) => void,
) {
   const element = useRef<HTMLDivElement>(null)
   const resizer = useRef<HTMLDivElement>(null)
   const mirror = useRef<HTMLDivElement>(null)

   const resize = useCallback(
      (e: MouseEvent) => {
         (element as any).current.style.height =
            e.pageY -
            (element as any).current.getBoundingClientRect().top +
            'px'
            ; (mirror as any).current.style.height =
               (containerWidth || 0) -
               (element as any).current.getBoundingClientRect().height +
               'px'

         onResize?.({
            element: (element as any).current.getBoundingClientRect().height,
            mirror: (mirror as any).current.getBoundingClientRect().height,
         })
      },
      [containerWidth, onResize],
   )

   const stopResize = useCallback(() => {
      window.removeEventListener('mousemove', resize)
   }, [resize])

   useEffect(() => {
      if (element.current && resizer.current) {
         const currentResizer = resizer.current

         currentResizer.addEventListener('mousedown', function (e) {
            e.preventDefault()
            window.addEventListener('mousemove', resize)
            window.addEventListener('mouseup', stopResize)
         })
      }
   }, [element, resize, resizer, stopResize])

   return { element, resizer, mirror }
}
