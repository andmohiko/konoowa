import styles from './style.module.scss'

import { PageHead } from '~/components/Head'
import { Background } from '~/components/Layouts/Background'
import { BottomFooter } from '~/components/Navigations/BottomFooter'
import { FixedHeader } from '~/components/Navigations/FixedHeader'

type Props = {
  children: React.ReactNode
}

export const DefaultLayout = ({ children }: Props): React.ReactElement => {
  return (
    <>
      <PageHead />
      <Background />
      <div className={styles.wrapper}>
        <FixedHeader />
        <main className={styles.container}>{children}</main>
        <BottomFooter />
      </div>
    </>
  )
}
