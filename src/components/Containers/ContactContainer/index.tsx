import styles from './style.module.scss'

import { ContactForm } from '~/components/Forms/ContactForm'
import { TitleText } from '~/components/Typographys/TitleText'

export const ContactContainer = (): React.ReactElement => {
  return (
    <div className={styles.contactContainer}>
      <TitleText>Contact</TitleText>
      <ContactForm />
    </div>
  )
}
