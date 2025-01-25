'use client'

import { ReactNode } from 'react'
import classNames from 'classnames'
import useMainContentWidth from '@/hooks/useMainContentWidth'
import useScrollY from '@/hooks/useScrollY'

export const DynamicallyPositionedContent = ({
  children,
}: {
  children: ReactNode
}) => {
  const scrollY = useScrollY()
  const mainContentWidth = useMainContentWidth()

  return (
    <div
      className={classNames(
        'left-0 right-0 z-50 p-3 box-border transition-[background] w-full max-w-(--breakpoint-sm) sm:left-1/2 sm:-translate-x-1/2',
        mainContentWidth && scrollY > mainContentWidth - 64 * 2
          ? 'fixed top-[64px] bg-winter-light'
          : 'absolute -top-16'
      )}
    >
      {children}
    </div>
  )
}
