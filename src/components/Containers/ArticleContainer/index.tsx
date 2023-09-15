import dayjs from 'dayjs'

import styles from './style.module.scss'

import { ArticleCard } from '~/components/Cards/ArticleCard'
import { TitleText } from '~/components/Typographys/TitleText'
import { Article } from '~/types/article'

type Props = {
  article: Article
}

export const ArticleContainer = ({ article }: Props): React.ReactElement => {
  return (
    <div className={styles.articleContainer}>
      <img
        src={article.headerImage.url}
        alt={article.title}
        className={styles.headerImage}
      />
      <TitleText>{article.title}</TitleText>
      <p className={styles.publishedAt}>
        {dayjs(article.publishedAt).format('YYYY.MM.DD')}
      </p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${article.body}`,
        }}
      ></div>
    </div>
  )
}
