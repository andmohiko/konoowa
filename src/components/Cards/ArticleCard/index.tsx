import dayjs from 'dayjs'
import Link from 'next/link'

import styles from './style.module.scss'

import { Article } from '~/types/article'

type Props = {
  article: Article
}

export const ArticleCard = ({ article }: Props): React.ReactElement => {
  return (
    <Link href={`/news/${article.id}`}>
      <article className={styles.articleCard}>
        <p className={styles.publishedAt}>
          {dayjs(article.publishedAt).format('YYYY.MM.DD')}
        </p>
        <p className={styles.title}>{article.title}</p>
      </article>
    </Link>
  )
}
