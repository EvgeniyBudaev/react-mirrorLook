import React, {useState} from 'react'
import styles from './searchBtn.module.scss'
import IconSearch from '../../../../UI/icons/iconSearch'
import IconSearchClose from '../../../../UI/icons/iconSearchClose'
// import Search from '../../../../search'

const SearchBtn = () => {
const [searchBtnIsClicked, setSearchBtnIsClicked] = useState(false)

  const handleClickToggle = () => {
    console.log('before searchBtnIsClicked', searchBtnIsClicked)
    setSearchBtnIsClicked({
      searchBtnIsClicked: true
    })
    console.log('after searchBtnIsClicked', searchBtnIsClicked)
  }

    return (
      <>
        {/*<Search />*/}
        <button className={styles.searchBtn} data-search="btn" onClick={handleClickToggle}>
          <IconSearch />
        </button>
        <button className={styles.searchCloseBtn} data-search="close-btn">
          <IconSearchClose />
        </button>
      </>
    )
  }


export default SearchBtn
