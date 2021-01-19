import React from 'react'
import cn from 'classnames'
import styles from './searchBtn.module.scss'
import IconSearch from '../../../../UI/icons/iconSearch'
import IconSearchClose from '../../../../UI/icons/iconSearchClose'


const SearchBtn = (props) => {
const {isClickedIconSearch, handleClickIconSearch} = props

    return (
      <>
        <button className={cn(styles.searchBtn, {[styles.hide]: isClickedIconSearch})} onClick={() => handleClickIconSearch()}>
          <IconSearch />
        </button>
        <button className={cn(styles.searchCloseBtn, {[styles.active]: isClickedIconSearch})} onClick={() => handleClickIconSearch()}>
          <IconSearchClose />
        </button>
      </>
    )
  }


export default SearchBtn
