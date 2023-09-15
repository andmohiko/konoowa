import axios from 'axios'

import type { NextPage } from 'next'

import { NewsContainer } from '~/components/Containers/NewsContainer'
import { DefaultLayout } from '~/components/Layouts/DefaultLayout'
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
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_MICROCMS_ENDPOINT}/news`,
    {
      headers: {
        'X-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
      },
    },
  )

  return {
    props: {
      articles: data.contents,
    },
  }
}
