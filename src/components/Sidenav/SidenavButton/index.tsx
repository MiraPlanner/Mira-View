import React, { useState } from 'react'
import { useProSidebar } from 'react-pro-sidebar'
import styles from './SidenavButton.module.scss'
import KeyboardArrowRightRounded from '@mui/icons-material/NavigateNextRounded'

const SidenavButton = () => {
  const [isOpen, setIsOpen] = useState(true)

  const { collapseSidebar } = useProSidebar()

  const handleToggle = () => {
    collapseSidebar()
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.ButtonContainer}>
      <div className={styles.ButtonBox} onClick={() => handleToggle()}>
        <div className={styles.Button}>
          <div className={isOpen ? styles.rotate : ''}>
            <KeyboardArrowRightRounded fontSize='small' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidenavButton
