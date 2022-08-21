import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {

  return (
    <>
    <div className={styles.container}>
      <div className={styles.carousel}>
        <div className={`${styles.item} ${styles.a} ${styles.front}`}>A</div>
        <div className={`${styles.item} ${styles.b} ${styles.left}`}>B</div>
        <div className={`${styles.item} ${styles.c} ${styles.behind}`}>C</div>
        <div className={`${styles.item} ${styles.d} ${styles.right}`}>D</div>
      </div>
    </div>
    <div className={styles.next}>Next</div>
    <div className={styles.prev}>Prev</div>
    
    </>
      
  )
}

export default Home
