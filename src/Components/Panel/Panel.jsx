import React from 'react'
import styles from './Panel.module.scss'
import Cards from '../Cards/Cards'

const Panel = () => {
  const data =
    [
      {
        title: 'Dragons Riders of  valyria',
        img: 'https://picsum.photos/950/540?grayscale',
        desc: 'foo bar bar baz lorem composition bar baz lorem composition',
      },
      {
        title: 'Dragons Riders of  valyria',
        img: 'https://picsum.photos/950/540?grayscale',
        desc: 'foo bar bar baz lorem composition bar baz lorem composition',
      },
      {
        title: 'Dragons Riders of  valyria',
        img: 'https://picsum.photos/950/540?grayscale',
        desc: 'foo bar bar baz lorem composition bar baz lorem composition',
      },
      {
        title: 'Dragons Riders of  valyria',
        img: 'https://picsum.photos/950/540?grayscale',
        desc: 'foo bar bar baz lorem composition bar baz lorem composition',
      },
      {
        title: 'Dragons Riders of  valyria',
        img: 'https://picsum.photos/950/540?grayscale',
        desc: 'foo bar bar baz lorem composition bar baz lorem composition',
      },
      {
        title: 'Dragons Riders of  valyria',
        img: 'https://picsum.photos/950/540?grayscale',
        desc: 'foo bar bar baz lorem composition bar baz lorem composition',
      }
    ]

  return (
    <div className={styles.panel}>
      {data.map((element)=>{
        return (
          <>
            <Cards title={element.title} img ={element.img} desc={element.desc}/>
          </>
        )
      })}
    </div>
  )
}

export default Panel
