import Image from 'next/image'

import styles from './style.module.scss'

import { BaseText } from '~/components/Typographys/BaseText'
import { TitleText } from '~/components/Typographys/TitleText'

export const SponsorsContainer = (): React.ReactElement => {
  return (
    <div className={styles.sponsorsContainer}>
      <TitleText>Sponsors</TitleText>
      <div className={styles.contents}>
        <BaseText>
          この世の終わりゲーミングは以下の企業様よりスポンサーいただいています。
        </BaseText>
        <div className={styles.sponsorsList}>
          <Image
            src="/images/iikanji.png"
            width={200}
            height={200}
            alt="sponsors"
          />
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
            src="/images/soreppoi.png"
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
          <Image
            src="/images/sponsors/sankaku.png"
            width={200}
            height={200}
            alt="sponsors"
          />
        </div>
      </div>
    </div>
  )
}
