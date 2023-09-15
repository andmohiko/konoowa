import styles from './style.module.scss'

import { MemberCard, type Member } from '~/components/Cards/MemberCard'
import { TitleText } from '~/components/Typographys/TitleText'

const members: Array<Member> = [
  {
    name: 'もひこ',
    profileImageUrl: '/images/members/mohiko.jpeg',
    twitter: '@mohiko_jair',
    games: ['スマブラ', 'スプラトゥーン'],
    bio: 'スマブラ(ファルコ)とスプラトゥーン(ロングブラスター)をやっています。コンボオタクです。',
  },
  {
    name: 'りょう',
    profileImageUrl: '/images/members/ryo.jpeg',
    twitter: '@ryodayo_3596',
    games: ['スマブラ', 'スプラトゥーン'],
    bio: 'スマブラとスプラトゥーンをやっています。スマブラは全キャラVIP行ってます。スプラトゥーンは全ルールXP3000です。ゾンビクアッド最強！',
  },
  {
    name: 'えーなん',
    profileImageUrl: '/images/members/enan.jpeg',
    twitter: '@HiRa54599919',
    games: ['スプラトゥーン', '原神'],
    bio: 'ロングブラスターは無印派。クイボは甘え。原神毎日やってます。直撃集見てね',
  },
  {
    name: '鸕宮 凪',
    profileImageUrl: '/images/members/nagi.jpeg',
    twitter: '@nagi_221B_love',
    games: ['スプラトゥーン', '第五人格'],
    bio: 'パイロットゴーグルのローラー使い',
  },
  {
    name: 'ミジンコ',
    profileImageUrl: '/images/members/mijinko.jpeg',
    twitter: '@Mzzzxxx0',
    games: ['スプラトゥーン', '第五人格', '原神'],
    bio: 'ルール関与しろカス',
  },
]

export const MembersContainer = (): React.ReactElement => {
  return (
    <div className={styles.membersContainer}>
      <TitleText>Members</TitleText>
      <div className={styles.membersList}>
        {members.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  )
}
