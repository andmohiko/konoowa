import type { NextPage } from 'next'

import { SponsorsContainer } from '~/components/Containers/SponsorsContainer'
import { DefaultLayout } from '~/components/Layouts/DefaultLayout'

const Sponsors: NextPage = () => {
  return (
    <DefaultLayout>
      <SponsorsContainer />
    </DefaultLayout>
  )
}

export default Sponsors
