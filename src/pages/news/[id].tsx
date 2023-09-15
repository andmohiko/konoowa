import type { NextPage } from 'next'

import { ArticleContainer } from '~/components/Containers/ArticleContainer'
import { DefaultLayout } from '~/components/Layouts/DefaultLayout'
import { cmsClient } from '~/libs/microcms'
import { Article } from '~/types/article'

type Props = {
  article: Article
}

const News: NextPage<Props> = ({ article }: Props) => {
  return (
    <DefaultLayout>
      <ArticleContainer article={article} />
    </DefaultLayout>
  )
}

export default News

export const getStaticPaths = async () => {
  const data = await cmsClient.get({ endpoint: 'news' })
  const paths = data.contents.map((article: Article) => ({
    params: { id: article.id },
  }))

  return { paths, fallback: false }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStaticProps = async (context: any) => {
  const id = context.params.id
  const data = await cmsClient.get({ endpoint: 'news', contentId: id })

  return {
    props: {
      article: data,
    },
  }
}
