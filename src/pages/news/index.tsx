import type { NextPage } from 'next'

import { NewsContainer } from '~/components/Containers/NewsContainer'
import { DefaultLayout } from '~/components/Layouts/DefaultLayout'
import { cmsClient } from '~/libs/microcms'
import { Article } from '~/types/article'

type Props = {
  articles: Array<Article>
}

const News: NextPage<Props> = ({ articles }: Props) => {
  return (
    <DefaultLayout>
      <NewsContainer articles={articles} />
    </DefaultLayout>
  )
}

export default News

export async function getStaticProps() {
  const data = await cmsClient.get({ endpoint: 'news' })

  return {
    props: {
      articles: data.contents,
    },
  }
}
