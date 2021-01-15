import React from 'react'
import styles from './specifications.module.scss'

const Specifications = (props) => {
  console.log('[Specifications][props]', props)
  const {product} = props
  const {height, width, heightWithoutFrame, weightWithoutFrame} = product

  return (
    <div className={styles.specifications}>
      <div className={styles.items}>
        <div className={styles.title}>Габариты</div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Высота</span></div>
          <div className={styles.date}><span>{height} см</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Ширина</span></div>
          <div className={styles.date}><span>{width} см</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Размер внешний, с рамой</span></div>
          <div className={styles.date}><span>{width}*{height} см</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Размер зеркала без рамы</span></div>
          <div className={styles.date}><span>{weightWithoutFrame}*{heightWithoutFrame} см</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Вес</span></div>
          <div className={styles.date}><span>13 кг</span></div>
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.title}>Форма и установка</div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Тип навески</span></div>
          <div className={styles.date}><span>Вертикальное/горизонтальное</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Тип установки</span></div>
          <div className={styles.date}><span>Настенное</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Наличие фацета</span></div>
          <div className={styles.date}><span>Да</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Форма</span></div>
          <div className={styles.date}><span>Фигурное</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Назначение</span></div>
          <div className={styles.date}><span>Ванная, гостинная, спальня, прихожая, холл, над камином</span></div>
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.title}>Материалы и цвет</div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Материал зеркала</span></div>
          <div className={styles.date}><span>Влагостойкое серебряное зеркало</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Материал рамы</span></div>
          <div className={styles.date}><span>Основа МДФ</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Цвет зеркала</span></div>
          <div className={styles.date}><span>Серебро</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Цвет основы</span></div>
          <div className={styles.date}><span>Черный</span></div>
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.title}>О производителе</div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Страна бренда</span></div>
          <div className={styles.date}><span>Россия</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Страна производства</span></div>
          <div className={styles.date}><span>Россия</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Производитель</span></div>
          <div className={styles.date}><span>MirrorLook</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Гарантия</span></div>
          <div className={styles.date}><a href="#"><span>Гарантийные условия</span></a></div>
        </div>
      </div>
    </div>
  )
}

export default Specifications