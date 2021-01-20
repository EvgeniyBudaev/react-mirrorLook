import React, {useState} from 'react'
import styles from './catalogFilter.module.scss'
import CatalogFilterButtons from './catalogFilterButtons'

const CatalogFilter = (props) => {
  const {isClickedBtnGrid, handleClickBtnGrid} = props

  return (
    <div className={styles.catalogFilter}>
      <ul  className={styles.selects}>
        <button className={styles.selectsButton}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.125 13.25H6.375M0.125 7H10.125H0.125ZM0.125 3.875H12H0.125ZM0.125 10.125H8.25H0.125ZM0.125 0.75H13.875H0.125Z"
              stroke="#B0976A"
              strokeWidth="1.25"
              strokeMiterlimit="10"
            />
          </svg>
        </button>
        <div className={styles.selectsWrapper}>
          <li className={styles.filterElement}>
            <p>Сортировать по</p>
          </li>
          <form className={styles.filterElement}>
            <li>
              <div>Select</div>
            </li>
          </form>
          <li className={styles.filterElement}>
            <p>На странице</p>
          </li>
          <form className={styles.filterElement}>
            <li>
              <div>Select</div>
            </li>
          </form>
        </div>
      </ul>
      <CatalogFilterButtons isClickedBtnGrid={isClickedBtnGrid} handleClickBtnGrid={handleClickBtnGrid} />
    </div>
  )
}

export default CatalogFilter
