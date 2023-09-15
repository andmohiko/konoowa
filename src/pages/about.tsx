import type { NextPage } from 'next'

import { AboutContainer } from '~/components/Containers/AboutContainer'
import { DefaultLayout } from '~/components/Layouts/DefaultLayout'

const About: NextPage = () => {
  return (
    <DefaultLayout>
      <AboutContainer />
    </DefaultLayout>
  )
}

export default About
