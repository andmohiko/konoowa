import Image from 'next/image'

import styles from './style.module.scss'

import { TitleText } from '~/components/Typographys/TitleText'

export const AboutContainer = (): React.ReactElement => {
  return (
    <div className={styles.aboutContainer}>
      <TitleText>About</TitleText>
      <div className={styles.aboutContent}>
        <div className={styles.section}>
          <Image
            src="/images/konoowa.png"
            width={820}
            height={312}
            alt="この世の終わりゲーミング"
            className={styles.logo}
          />
          <p className={styles.paragraph}>
            ゲームをしているとき、この世の終わりみたいなプレイをされてあったまったことはないでしょうか。ラグい射撃Mii、パナしてくるガノン、なぜか特攻するハイドラ。一度は対面したことがあるのではないでしょう。
            <br />
            <br />
            私たち「この世の終わりゲーミング」は、そのような絶望的な瞬間に立ち向かうために2023年に結成されました。
          </p>
        </div>
        <div className={styles.section}>
          <TitleText level="h2">ビジョン</TitleText>
          <p className={styles.paragraph}>
            このジャングルのようなオンライン戦場で、そんなあなたたちの愚行を正す存在になること。そして、真のゲームの楽しさを教えることを目指しています。
          </p>
        </div>
        <div className={styles.section}>
          <TitleText level="h2">ミッション</TitleText>
          <p className={styles.paragraph}>
            選手たちには、ゲームの真髄を学ぶと共に、それを理解できない「あのプレイヤーたち」に示す技術を磨かせる。
            <br />
            ファンと共に、オンラインでのマナーの悪いプレイをなくす活動を推進。
            <br />
            一緒にゲームの真の楽しさを再発見し、この世の終わりのようなオンラインの環境を改善する。
          </p>
        </div>
        <div className={styles.section}>
          <TitleText level="h2">選手たち</TitleText>
          <p className={styles.paragraph}>
            私たちの選手たちは、戦略的な思考と優れた技術を持ち、横Bを擦られても屈しない心を持っています。
          </p>
        </div>
        <div className={styles.section}>
          <TitleText level="h2">チームの歴史</TitleText>
          <p className={styles.paragraph}>
            設立から短い間に、私たちはオンラインの荒れた環境で多くの勝利を手にしてきました。しかし、それ以上に私たちが誇りに思っているのは、多くの「問題児」たちを教育し、より健全なプレイヤーに変えてきたことです。
          </p>
        </div>
        <div className={styles.section}>
          <TitleText level="h2">最後に</TitleText>
          <p className={styles.paragraph}>
            「この世の終わりゲーミング」として、私たちはすべてのプレイヤーがゲームを心から楽しむことができる世界を目指しています。共にその未来を築いていきましょう。
          </p>
        </div>
      </div>
    </div>
  )
}
