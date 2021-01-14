import React from 'react'
import classNames from 'classnames'
import styles from './productCardData.module.scss'
import {connect} from 'react-redux'
import {productDecrement, productIncrement, productRemove} from '../../../../redux/actions/actions'

const ProductCardData = (props) => {
  console.log('[ProductCardData][props]', props)
  const {id, code, baseColor, height, width, weight, typeOfInstallation} = props.product

  const dataListItem1 = (classNames(styles.dataListItem, styles.item1))
  const dataListItem2 = (classNames(styles.dataListItem, styles.item2))
  const quantityBtnDecrement = (classNames(styles.quantityBtn, styles.quantityLeft))
  const quantityBtnIncrement = (classNames(styles.quantityBtn, styles.quantityRight))
  return (
    <div className={styles.data}>
      <div className={styles.dataArticle}>
        Артикул: <span>{code}</span>
      </div>
      <div className={styles.dataList}>
        <ul className={dataListItem1}>
          <li>Цвет основы</li>
          <li>Высота</li>
          <li>Ширина</li>
          <li>Вес</li>
          <li>Тип установки</li>
        </ul>
        <ul className={dataListItem2}>
          <li>{baseColor}</li>
          <li>{height} см</li>
          <li>{width} см</li>
          <li>{weight} кг</li>
          <li>{typeOfInstallation}</li>
        </ul>
      </div>
      <div className={styles.dataAvailability}>
        В наличии
      </div>
      <div>
        <div className={styles.dataOrderPrice}>30 000 ₽</div>
        <div className={styles.dataOrderQuantity}>
          <span>Кол-во:</span>
          <div className={styles.quantityNum}>
            <button className={quantityBtnDecrement} onClick={() => productDecrement(id)}>-</button>
            <input type="text" value="1" />
            <button className={quantityBtnIncrement} onClick={() => productIncrement(id)}>+</button>
          </div>
        </div>
        <div className={styles.dataOrderBtn}>
          <button>В корзину</button>
        </div>
      </div>
    </div>
  )
}

export default connect(null, {productIncrement, productDecrement, productRemove})(ProductCardData)


