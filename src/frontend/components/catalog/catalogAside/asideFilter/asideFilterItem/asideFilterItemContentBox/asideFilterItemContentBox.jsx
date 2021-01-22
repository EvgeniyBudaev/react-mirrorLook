import React, {useEffect} from 'react'
import {withStyles} from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import styles from './asideFilterItemContentBox.module.scss'

// const GreenCheckbox = withStyles({
//   root: {
//     padding: '5px',
//     color: '#B0976A',
//     '&$checked': {
//       color: '#B0976A',
//     },
//   },
//   checked: {},
// })((props) => <Checkbox color="default" {...props} />)

const AsideFilterItemContentBox = (props) => {
  const {handleChangeCheckedBox} = props

  const [state, setState] = React.useState({
    circular: false,
    rectangular: false,
    figured: false,
    checkbox: ''
  })

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.checked, [event.target.type]: event.target.value})
    //console.log('state', state)
    //props.handleChange(state)
  }

  const {circular, rectangular, figured} = state

  useEffect(() => {
    console.log('state', state)
    handleChangeCheckedBox(state)
  }, [state])

  return (
    <div className={styles.asideFilterItemContentBox}>
      <FormGroup>
        <FormControl>
          <FormControlLabel
            control={<Checkbox checked={circular} onChange={handleChange} name="circular" value="Круглая" />}
            label="Круглая"
          />

          <FormControlLabel
            control={<Checkbox checked={rectangular} onChange={handleChange} name="rectangular" value="Прямоугольная" />}
            label="Прямоугольная"
          />

          <FormControlLabel
            control={<Checkbox checked={figured} onChange={handleChange} name="figured" value="Фигурная" />}
            label="Фигурная"
          />
        </FormControl>
      </FormGroup>
    </div>
  )
}

export default AsideFilterItemContentBox
