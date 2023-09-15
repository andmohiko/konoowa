import type { NextPage } from 'next'

import { ContactContainer } from '~/components/Containers/ContactContainer'
import { DefaultLayout } from '~/components/Layouts/DefaultLayout'

const Contact: NextPage = () => {
  return (
    <DefaultLayout>
      <ContactContainer />
    </DefaultLayout>
  )
}

export default Contact
