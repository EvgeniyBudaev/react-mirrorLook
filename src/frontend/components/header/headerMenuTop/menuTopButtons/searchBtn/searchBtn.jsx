import React, {Component} from 'react'
import styles from './searchBtn.module.scss'
import IconSearch from '../../../../UI/icons/iconSearch'
import IconSearchClose from '../../../../UI/icons/iconSearchClose'

class SearchBtn extends Component {

  handleClickToggle = () => {
    console.log('click')
  }

  render() {
    return (
      <>
        {/*<Search />*/}
        <button className={styles.searchBtn} data-search="btn" onClick={this.handleClickToggle}>
          <IconSearch />
        </button>
        <button className={styles.searchCloseBtn} data-search="close-btn">
          <IconSearchClose />
        </button>
      </>
    )
  }
}

export default SearchBtn
