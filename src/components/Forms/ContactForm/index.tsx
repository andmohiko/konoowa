import styles from './style.module.scss'

import { BasicButton } from '~/components/Buttons/BasicButton'
import { TextArea } from '~/components/Inputs/TextArea'
import { TextInput } from '~/components/Inputs/TextInput'

export const ContactForm = (): React.ReactElement => {
  return (
    <form className={styles.contactForm}>
      <div className={styles.inputs}>
        <TextInput label="お名前" value="" onChange={() => {}} />
        <TextInput label="会社名(任意)" value="" onChange={() => {}} />
        <TextInput label="メールアドレス" value="" onChange={() => {}} />
        <TextArea label="お問い合わせ内容" value="" onChange={() => {}} />
      </div>
      <BasicButton type="submit">送信</BasicButton>
    </form>
  )
}
