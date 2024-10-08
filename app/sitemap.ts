import { MetadataRoute } from 'next'
import { getPlayersWithWinsAndApps } from '@/utils/proccessData'
import { results } from '@/data/results'

const BASE_URL = 'https://www.refaleikarnir.fun'

export default function sitemap(): MetadataRoute.Sitemap {
  const playerSlugs = getPlayersWithWinsAndApps().map((player) => player.slug)
  const resultSlugs = results
    .map(
      (result) => `${result.year}${result.season ? `-${result.season}` : ''}`
    )
    .reverse()

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...resultSlugs.map(
      (resultSlug) =>
        ({
          url: `${BASE_URL}/${resultSlug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.9,
        } satisfies MetadataRoute.Sitemap[number])
    ),
    {
      url: `${BASE_URL}/stats`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...playerSlugs.map(
      (playerSlug) =>
        ({
          url: `${BASE_URL}/player/${playerSlug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.7,
        } satisfies MetadataRoute.Sitemap[number])
    ),
  ]
}
