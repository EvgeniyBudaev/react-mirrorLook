import React, {useState} from 'react'
import styles from './asideFilter.module.scss'
import AsideFilterItem from './asideFilterItem'
import {connect} from 'react-redux'
import {filterProduct} from '../../../../redux/actions/actions'
import Button from '../../../UI/button'

const AsideFilter = (props) => {
  const [filterState, setFilterState] = useState([])
  const [checked, setChecked] = React.useState([])

  const handleChangeCheckedBox = value => {
    setChecked(value);
  }

  const handleClickBtnFilter = checked => {
    setFilterState(prevState => ({
      ...prevState, filterState: checked
    }))
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    props.filterProduct(filterState)
  }

const options = {
  form: ['Круглая', 'Прямоугольная', 'Фигурная'],
  colorFrame: ['Античное золото', 'Античное серебро', 'Серебро', 'Золото', 'Бронза', 'Латунь', 'Хром', 'Никель', 'Шампань']
}

  return (
    <div className={styles.asideFilter}>
      <button className={styles.asideFilterButton}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.5 15H8.125M9.375 3.75C9.04348 3.75 8.72554 3.8817 8.49112 4.11612C8.2567 4.35054 8.125 4.66848 8.125 5C8.125 5.33152 8.2567 5.64946 8.49112 5.88388C8.72554 6.1183 9.04348 6.25 9.375 6.25C9.70652 6.25 10.0245 6.1183 10.2589 5.88388C10.4933 5.64946 10.625 5.33152 10.625 5C10.625 4.66848 10.4933 4.35054 10.2589 4.11612C10.0245 3.8817 9.70652 3.75 9.375 3.75V3.75ZM13.75 8.75C13.4185 8.75 13.1005 8.8817 12.8661 9.11612C12.6317 9.35054 12.5 9.66848 12.5 10C12.5 10.3315 12.6317 10.6495 12.8661 10.8839C13.1005 11.1183 13.4185 11.25 13.75 11.25C14.0815 11.25 14.3995 11.1183 14.6339 10.8839C14.8683 10.6495 15 10.3315 15 10C15 9.66848 14.8683 9.35054 14.6339 9.11612C14.3995 8.8817 14.0815 8.75 13.75 8.75ZM6.875 13.75C6.54348 13.75 6.22554 13.8817 5.99112 14.1161C5.7567 14.3505 5.625 14.6685 5.625 15C5.625 15.3315 5.7567 15.6495 5.99112 15.8839C6.22554 16.1183 6.54348 16.25 6.875 16.25C7.20652 16.25 7.52446 16.1183 7.75888 15.8839C7.9933 15.6495 8.125 15.3315 8.125 15C8.125 14.6685 7.9933 14.3505 7.75888 14.1161C7.52446 13.8817 7.20652 13.75 6.875 13.75ZM17.5 10H15H17.5ZM12.5 10H2.5H12.5ZM5.625 15H2.5H5.625ZM17.5 5H10.625H17.5ZM8.125 5H2.5H8.125Z"
            stroke="#B0976A" strokeWidth="1.25" strokeMiterlimit="10" />
        </svg>
      </button>
      <div className={styles.asideFilterWrapper}>
        <form onSubmit={handleSubmit}>
          <ul>
            <AsideFilterItem value={checked} handleChangeCheckedBox={handleChangeCheckedBox} title='Форма' options={options.form} />
            <AsideFilterItem value={checked} handleChangeCheckedBox={handleChangeCheckedBox} title='Цвет рамы' options={options.colorFrame} />
          </ul>
          <Button text="Фильтр" fn={() => handleClickBtnFilter(checked)} />
        </form>
      </div>
    </div>
  )
}

export default connect(null, {filterProduct})(AsideFilter)
