import type { NextPage } from 'next'

import { NewsContainer } from '~/components/Containers/NewsContainer'
import { DefaultLayout } from '~/components/Layouts/DefaultLayout'

const News: NextPage = () => {
  return (
    <DefaultLayout>
      <NewsContainer />
    </DefaultLayout>
  )
}

export default News
