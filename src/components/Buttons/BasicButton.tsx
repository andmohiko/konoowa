import styles from './style.module.scss'

type ButtonImportance = 'primary' | 'secondary' | 'tertiary'
type ButtonSize = 'sm' | 'md' | 'lg'

type Props = {
  children: React.ReactNode
  onClick?: () => void
  importance?: ButtonImportance
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit'
  width?: string
  height?: string
}

export const BasicButton = ({
  children,
  onClick,
  importance = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  type = 'button',
  width,
  height,
}: Props): React.ReactElement => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={styles.basicButton}
    >
      {children}
    </button>
  )
}
