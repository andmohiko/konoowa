import styles from './style.module.scss'

type Props = {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  error?: string | null
}

export const TextArea = ({
  label,
  value,
  onChange,
  error,
}: Props): React.ReactElement => {
  return (
    <div className={styles.textInput}>
      <label className={styles.label}>{label}</label>
      <textarea className={styles.input} value={value} onChange={onChange} />
      <p className={styles.error}>{error ?? ' '}</p>
    </div>
  )
}
