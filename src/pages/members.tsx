import type { NextPage } from 'next'

import { MembersContainer } from '~/components/Containers/MembersContainer'
import { DefaultLayout } from '~/components/Layouts/DefaultLayout'

const Members: NextPage = () => {
  return (
    <DefaultLayout>
      <MembersContainer />
    </DefaultLayout>
  )
}

export default Members
