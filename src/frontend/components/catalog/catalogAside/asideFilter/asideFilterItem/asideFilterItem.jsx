import React, {useState, useRef} from 'react'
import ClassNames from 'classnames'
import styles from './asideFilterItem.module.scss'
import AsideFilterItemContentBox from './asideFilterItemContentBox'
import IconArrowUp from '../../../../UI/icons/iconArrowUp'


const AsideFilterItem = ({value, handleChangeCheckedBox, title, options}) => {
  const [active, setActive] = useState('')
  const [height, setHeight] = useState('0px')
  const [rotate, setRotate] = useState(false)
  const content = useRef(null)
  const headerItem = ClassNames(styles.header, styles.filterItem, active)


  function toggleAccordion() {
    setActive(active === '' ? 'active' : '')
    setHeight(active === 'active' ? '0px' : `${content.current.scrollHeight}px`)
    setRotate(active !== 'active')
  }


  return (
    <div className={styles.asideFilterItem}>
      <div className={headerItem} onClick={toggleAccordion}>
        <p className={styles.title}>{title}</p>
        <IconArrowUp rotate={rotate} />
      </div>
      <div className={styles.content} ref={content} style={{maxHeight: `${height}`}}>
        <AsideFilterItemContentBox value={value} handleChangeCheckedBox={handleChangeCheckedBox} options={options} />
      </div>
    </div>
  )
}

export default AsideFilterItem

