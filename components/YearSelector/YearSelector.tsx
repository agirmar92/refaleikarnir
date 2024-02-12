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

const YearSelector = ({ gamesIndex }: { gamesIndex: number }) => {
  const { season } = results[gamesIndex]
  const scrollY = useScrollY()
  const mainContentWidth = useMainContentWidth()
  const router = useRouter()

  const gamesBefore = results[gamesIndex - 1]
  const gamesAfter = results[gamesIndex + 1]

  return (
    <div
      className={classNames(
        'left-0 right-0 z-50 p-3 box-border transition-[background] w-full max-w-screen-sm sm:left-1/2 sm:-translate-x-1/2',
        mainContentWidth && scrollY > mainContentWidth - 64 * 2
          ? 'fixed top-16 bg-winter-light'
          : 'absolute -top-16'
      )}
    >
      <div
        className={classNames(
          'absolute left-0 bottom-[54px] w-full opacity-100 transition-opacity',
          {
            'opacity-0':
              mainContentWidth && scrollY > mainContentWidth - (64 * 2 + 26),
          }
        )}
      >
        <WinningTeamsEmblems gamesIndex={gamesIndex} />
      </div>
      <div className="uppercase text-center text-4xl font-extrabold flex">
        <YearArrowNavigator
          isDisabled={gamesIndex === 0}
          orientation="left"
          nextResults={gamesBefore}
        />
        <div className="flex-1 relative">
          <h2 className="inline-flex items-center relative">
            {results[gamesIndex].year}
            <div className="absolute -right-4 h-0 w-0 border-x-[6px] border-x-transparent border-t-[8px] border-t-white"></div>
          </h2>
          <label htmlFor="year-selector" className="sr-only">
            Select year/season
          </label>
          <select
            id="year-selector"
            name="Year/season selector"
            className="bg-transparent text-transparent appearance-none text-center absolute top-0 left-0 right-0 bottom-0 cursor-pointer"
            onChange={(e) => {
              const selectedGames =
                results[Number.parseInt(e.currentTarget.value)]
              if (!selectedGames) {
                return
              }
              router.push(
                `/${selectedGames.year.toString()}${
                  selectedGames.season ? `?season=${selectedGames.season}` : ''
                }`
              )
            }}
            value={gamesIndex}
          >
            {results.map((result, iResult) => (
              <option key={iResult} value={iResult}>
                {result.year}
                {result.season
                  ? ` (${result.season === 'summer' ? 'sumar' : 'vetur'})`
                  : ''}
              </option>
            ))}
          </select>
        </div>
        {season && (
          <span className="absolute text-sm left-0 bottom-1 right-0 leading-3">
            {season === 'summer' ? 'Sumar' : 'Vetur'}
          </span>
        )}
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
              nextResults.season ? `?season=${nextResults.season}` : ''
            }`
      }
    >
      <ArrowIcon orientation={orientation} />
    </Link>
  )
}

export default YearSelector
