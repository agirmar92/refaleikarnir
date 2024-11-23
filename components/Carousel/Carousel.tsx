'use client'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './CarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './CarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

export const Carousel = (props: PropType) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla max-w-[48rem] m-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pinch-zoom touch-pan-y -ml-[--slide-spacing]">
          {slides.map((index) => (
            <div
              className="transform-gpu flex-[0_0_var(--slide-size)] min-w-0 pl-[--slide-spacing]"
              key={index}
            >
              <div className="relative shadow-[inset_0_0_0_0.2rem_black] rounded-[1.8rem] text-6xl flex items-center justify-center h-[--slide-height] select-none">
                {/* {index + 1} */}
                <Image
                  src="https://refaleikarnir.sirv.com/coverPhotos/2022.jpg"
                  alt={'todo'}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr] justify-between gap-[1.2rem] mt-[1.8rem]">
        <div className="grid grid-cols-[repeat(2,_1fr)] gap-[0.6rem] items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="flex flex-wrap justify-end items-center -mr-[calc((2.6rem-1.4rem)/2)]">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={[
                index === selectedIndex
                  ? 'after:shadow-[inset_0_0_0_0.2rem_black]'
                  : 'after:shadow-[inset_0_0_0_0.2rem_gray]',
                'appearance-none',
                'bg-transparent',
                'touch-manipulation',
                'cursor-pointer',
                'border-0',
                'p-0',
                'm-0',
                'w-[2.6rem]',
                'h-[2.6rem]',
                'flex',
                'items-center',
                'justify-center',
                'rounded-full',
                'after:content after:w-[1.4rem] after:h-[1.4rem] after:rounded-full after:flex after:items-center',
              ].join(' ')}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
