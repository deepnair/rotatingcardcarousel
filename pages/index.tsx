import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {

  const [playerClass, setPlayerClass] = useState(['a', 'b', 'c', 'd'])
  const [arrangement, setArrangement] = useState([styles.front, styles.left, styles.behind, styles.right])

  const onNext = () => {
    const newPlayerClass = playerClass.reduce((prev: string[], curr: string, index) => {
      if(index < playerClass.length-1){
        prev.push(curr)
        return prev.slice()
      }
      prev.unshift(curr)
      return prev.slice()
    }, [])
    
    const newArrangement = arrangement.reduce((prev: string[], curr: string, index) => {
      if(index === 0){
        return prev
      }
      if(index === arrangement.length-1){
        prev.push(curr)
        prev.push(arrangement[0])
        return prev.slice()
      }
      prev.push(curr)
      return prev.slice()
    }, [])
    
    setPlayerClass(newPlayerClass)
    setArrangement(newArrangement)

  }

  const onPrevious = () => {
    const newPlayerClass = playerClass.reduce((prev: string[], curr: string, index) => {
      if(index === 0){
        return prev
      }
      if(index === playerClass.length-1){
        prev.push(curr)
        prev.push(playerClass[0])
        return prev.slice()
      }
      prev.push(curr)
      return prev.slice()
    }, [])

    const newArrangement = arrangement.reduce((prev: string[], curr: string, index) => {
      if(index < arrangement.length-1){
        prev.push(curr)
        return prev.slice()
      }
      prev.unshift(curr)
      return prev.slice()
    }, [])

    setPlayerClass(newPlayerClass)
    setArrangement(newArrangement)
    
  }

  return (
    <div className={styles.parentcontainer}>
      <div className={styles.container}>
        <div className={styles.carousel}>
          <div className={`${styles.item} ${styles.a} ${arrangement[0]}`}>A</div>
          <div className={`${styles.item} ${styles.b} ${arrangement[1]}`}>B</div>
          <div className={`${styles.item} ${styles.c} ${arrangement[2]}`}>C</div>
          <div className={`${styles.item} ${styles.d} ${arrangement[3]}`}>D</div>
        </div>
      </div>
      
      <div className={styles.buttoncontainer}>
        <div className={styles.next} onClick={onPrevious}>Previous</div>
        <div className={styles.button}>Join {playerClass[0]}</div>
        <div className={styles.prev}  onClick={onNext}>Next</div>
      </div>
    </div>
      
  )
}

export default Home
