import React from 'react'
import styles from './Cards.module.scss'

const Cards = ({title, img, desc}) => {
  return (
    <div className={styles.cards}>
      <img src={img} alt="Random Pic" className={styles.img} />
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>{desc}</div>
      </div>
    </div>
  )
}

export default Cards
