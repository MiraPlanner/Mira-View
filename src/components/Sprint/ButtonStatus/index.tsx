import React from 'react'
import styles from './ButtonStatus.module.scss'
import { SprintStatus } from '../../../shared/constants/issues'

type Props = {
  status: string
  activeSprint: boolean
}

function ButtonStatus({ status, activeSprint }: Props) {
  if (status == SprintStatus.INACTIVE) {
    if (activeSprint) {
      return <div className={styles.Disabled}>Start Sprint</div>
    } else {
      return <div className={styles.Enabled}>Start Sprint</div>
    }
  }
  return <div className={styles.Enabled}>Complete Sprint</div>
}

export default ButtonStatus
