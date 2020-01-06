import React from 'react'
import styles from '../stylesheets/table.module.sass'

export default function CheckoutTable({ items }) {
  if(typeof items === 'undefined')  // Add by kkj because an error occurs in case  items is undefined
    return null

  return (
    <div className={styles.outbox}>
      {Object.keys(items).map(i =>
          <div key={i} className={styles.row}>
              <div className={styles.pic}>
                  <img src={items[i].item.imagePath} alt="" />
              </div>
              <div className={styles.title}>
                  {items[i].item.title}
              </div>
              <div className={styles.price}>
                  ${items[i].item.price} X {items[i].qty}
              </div>
          </div>
      )}
    </div>
  )
}
