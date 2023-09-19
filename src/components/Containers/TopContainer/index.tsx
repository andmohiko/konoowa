import Image from 'next/image'

import styles from './style.module.scss'

import { MoreButton } from '~/components/Buttons/MoreButton'
import { ArticleCard } from '~/components/Cards/ArticleCard'
import { TitleText } from '~/components/Typographys/TitleText'
import { Article } from '~/types/article'

type Props = {
  articles: Array<Article>
}

export const TopContainer = ({ articles }: Props): React.ReactElement => {
  const sortedArticles = articles.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )
  return (
    <div className={styles.topContainer}>
      <section className={styles.hero}>
        <Image
          src="/images/logo.png"
          width={593}
          height={594}
          alt="この世の終わりゲーミング"
          className={styles.heroImage}
        />
        <p className={styles.catchcopy}>
          このジャングルのようなオンライン戦場で、
          <br />
          この世の終わりのようなプレイングをしてくるやつらを正す存在。
        </p>
        <div className={styles.more}>
          <MoreButton href="/about" />
        </div>
      </section>

      <section className={styles.section}>
        <TitleText level="h2">News</TitleText>
        <div className={styles.newsList}>
          {sortedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        <div className={styles.more}>
          <MoreButton href="/news" />
        </div>
      </section>

      <section className={styles.section}>
        <TitleText level="h2">SPONSORS</TitleText>
        <div className={styles.sponsersList}>
          <Image
            src="/images/kawaiigia.png"
            width={200}
            height={200}
            alt="sponsors"
          />
          <Image
            src="/images/ouchidaisuki.png"
            width={200}
            height={200}
            alt="sponsors"
          />
          <Image
            src="/images/sokushikon.png"
            width={200}
            height={200}
            alt="sponsors"
          />
          <Image
            src="/images/tsuyoso.png"
            width={200}
            height={200}
            alt="sponsors"
          />
        </div>
        <div className={styles.more}>
          <MoreButton href="/sponsors" />
        </div>
      </section>
    </div>
  )
}
