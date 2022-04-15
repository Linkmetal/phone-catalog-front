import { ReactNode, useEffect, useRef, useState } from 'react'

import { AnimatedSectionRoot } from './AnimatedSection.styles'
import { useInViewport } from 'ahooks'

export type AnimatedSectionProps = {
  children: ReactNode
  threshold?: number
}

export const AnimatedSection = ({ children, threshold = 0.5 }: AnimatedSectionProps) => {
  const containerRef = useRef(null)
  const [opacity, setOpacity] = useState<string>('0')
  const [inViewPort] = useInViewport(containerRef, { threshold })

  useEffect(() => {
    setOpacity(inViewPort ? '1' : '0')
  }, [inViewPort])

  return (
    <AnimatedSectionRoot ref={containerRef} css={{ opacity }}>
      {children}
    </AnimatedSectionRoot>
  )
}

AnimatedSection.displayName = 'AnimatedSection'
