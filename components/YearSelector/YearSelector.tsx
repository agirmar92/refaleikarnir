'use client'

import Link from 'next/link'
import classNames from 'classnames'
import { results } from '@/data/results'
import WinningTeamsEmblems from '@/components/WinningTeamsEmblems'
import ArrowIcon from '@/icons/ArrowIcon'
import useScrollY from '@/hooks/useScrollY'
import useMainContentWidth from '@/hooks/useMainContentWidth'
import { Result } from '@/utils/types'
import { useRouter } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const YearSelector = ({ gamesIndex }: { gamesIndex: number }) => {
  const { season } = results[gamesIndex]
  const scrollY = useScrollY()
  const mainContentWidth = useMainContentWidth()
  const router = useRouter()

  const gamesBefore = results[gamesIndex - 1]
  const gamesAfter = results[gamesIndex + 1]

  const handleYearChange = (value: string) => {
    const selectedGames = results[Number.parseInt(value)]
    if (!selectedGames) return
    router.push(
      `/${selectedGames.year.toString()}${
        selectedGames.season ? `-${selectedGames.season}` : ''
      }`
    )
  }

  return (
    <div
      className={classNames(
        'left-0 right-0 z-50 p-3 box-border transition-[background] w-full max-w-(--breakpoint-sm) sm:left-1/2 sm:-translate-x-1/2',
        mainContentWidth && scrollY > mainContentWidth - 64 * 2
          ? 'fixed top-16 bg-winter-light'
          : 'absolute -top-16'
      )}
    >
      <div
        className={classNames(
          'absolute left-0 bottom-[54px] w-full transition-opacity',
          mainContentWidth && scrollY > mainContentWidth - (64 * 2 + 26)
            ? 'opacity-0'
            : 'opacity-100'
        )}
      >
        <WinningTeamsEmblems gamesIndex={gamesIndex} />
      </div>
      <div className="uppercase text-center text-4xl font-extrabold flex items-center">
        <YearArrowNavigator
          isDisabled={gamesIndex === 0}
          orientation="left"
          nextResults={gamesBefore}
        />
        <div className="flex-1 relative">
          <Select value={String(gamesIndex)} onValueChange={handleYearChange}>
            <SelectTrigger
              className="w-full border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-white text-4xl font-extrabold uppercase justify-center gap-1.5 px-0 h-auto py-0 cursor-pointer hover:opacity-80 transition-opacity [&>svg]:size-5 [&>svg]:opacity-80"
            >
              <SelectValue>{results[gamesIndex].year}</SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-winter border-winter-light text-white max-h-72 overflow-y-auto">
              {results.map((result, iResult) => (
                <SelectItem
                  key={iResult}
                  value={String(iResult)}
                  className="text-white text-base font-bold uppercase focus:bg-winter-light focus:text-white cursor-pointer"
                >
                  {result.year}
                  {result.season
                    ? ` (${result.season === 'summer' ? 'Sumar' : 'Vetur'})`
                    : ''}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {season && (
            <span className="absolute text-sm left-0 bottom-[-20px] right-0 leading-3">
              {season === 'summer' ? 'Sumar' : 'Vetur'}
            </span>
          )}
        </div>
        <YearArrowNavigator
          isDisabled={gamesIndex === results.length - 1}
          orientation="right"
          nextResults={gamesAfter}
        />
      </div>
    </div>
  )
}

const YearArrowNavigator = ({
  isDisabled,
  orientation,
  nextResults,
}: {
  isDisabled: boolean
  orientation: 'left' | 'right'
  nextResults: Result
}) => {
  return (
    <Link
      className={classNames({
        invisible: isDisabled,
        'pointer-events-none': isDisabled,
      })}
      aria-disabled={isDisabled}
      tabIndex={isDisabled ? -1 : undefined}
      aria-label="Step to later year"
      href={
        isDisabled
          ? '/'
          : `/${nextResults.year.toString()}${
              nextResults.season ? `-${nextResults.season}` : ''
            }`
      }
    >
      <ArrowIcon orientation={orientation} />
    </Link>
  )
}

export default YearSelector
