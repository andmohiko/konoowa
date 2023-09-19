import dayjs from 'dayjs'

import type { NextPage } from 'next'

import { TopContainer } from '~/components/Containers/TopContainer'
import { DefaultLayout } from '~/components/Layouts/DefaultLayout'
import { cmsClient } from '~/libs/microcms'
import { Article } from '~/types/article'

type Props = {
  articles: Array<Article>
}

const Home: NextPage<Props> = ({ articles }: Props) => {
  const topArticles = articles
    .sort((a, b) =>
      dayjs(a.publishedAt).isBefore(dayjs(b.publishedAt)) ? 1 : -1,
    )
    .slice(0, 3)
  return (
    <DefaultLayout>
      <TopContainer articles={topArticles} />
    </DefaultLayout>
  )
}

export default Home

export async function getStaticProps() {
  const data = await cmsClient.get({ endpoint: 'news' })

  return {
    props: {
      articles: data.contents,
    },
  }
}
