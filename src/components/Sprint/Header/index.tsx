import React from 'react'
import styles from './Header.module.scss'
import StatusButton from '../ButtonStatus'
import { SprintStatus } from '../../../shared/constants/issues'

type Props = {
  title: string
}

const Header = ({ title }: Props) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Description}>
        <div className={styles.Title}>{title}</div>
        <div className={styles.Dates}>24 Nov - 24 Dec</div>
        <div className={styles.Issues}>(0 issues)</div>
      </div>

      <div className={styles.TitleEnd}>
        <StatusButton status={SprintStatus.INACTIVE} activeSprint={false} />
      </div>
    </div>
  )
}

export default Header
