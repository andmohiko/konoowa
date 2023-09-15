import styles from './style.module.scss'

import { ArticleCard } from '~/components/Cards/ArticleCard'
import { TitleText } from '~/components/Typographys/TitleText'
import { Article } from '~/types/article'

type Props = {
  articles: Array<Article>
}

export const NewsContainer = ({ articles }: Props): React.ReactElement => {
  return (
    <div className={styles.newsContainer}>
      <TitleText>News</TitleText>
      <div className={styles.newsList}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}
