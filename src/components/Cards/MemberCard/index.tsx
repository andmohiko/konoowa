import Image from 'next/image'

import styles from './style.module.scss'

import { DisplayItem } from '~/components/Base/DisplayItem'

export type Member = {
  name: string
  profileImageUrl: string
  twitter: string
  games: Array<string>
  bio: string
}

type Props = {
  member: Member
}

export const MemberCard = ({ member }: Props): React.ReactElement => {
  return (
    <div className={styles.memberCard}>
      <Image
        src={member.profileImageUrl}
        width={200}
        height={200}
        alt={member.name}
        className={styles.profileImage}
      />
      <div className={styles.texts}>
        <p className={styles.name}>{member.name}</p>
        <a
          href={`https://twitter.com/${member.twitter}`}
          target="_blank"
          className={styles.twitter}
          rel="noreferrer"
        >
          <Image
            src="/images/x-logo.webp"
            width={24}
            height={24}
            alt="twitter"
          />
          <p className={styles.twitterId}>{member.twitter}</p>
        </a>
        <DisplayItem
          label="ゲームタイトル"
          value={
            <div className={styles.gamesList}>
              {member.games.map((game) => (
                <span key={game} className={styles.game}>
                  {game}
                </span>
              ))}
            </div>
          }
        />
        <p className={styles.bio}>{member.bio}</p>
      </div>
    </div>
  )
}
