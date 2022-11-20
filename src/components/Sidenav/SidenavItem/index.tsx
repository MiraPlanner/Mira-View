import React from 'react'

import styles from './SidenavItem.module.scss'

// eslint-disable-next-line react/prop-types,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line react/prop-types
const SidenavItem = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div>World</div>
        <div>Hello</div>
      </div>
    </div>
  )
}

export default SidenavItem

// <Link to={link} className='sidebar-nav-link'>
//     <div className='sidebar-icon-wrapper'>
//     <img src={icon} className='sidebar-icon' alt={alt} />
// </div>
// {text}
// </Link>
