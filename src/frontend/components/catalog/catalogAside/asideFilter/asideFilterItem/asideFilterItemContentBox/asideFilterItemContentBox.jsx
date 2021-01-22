import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import styles from './asideFilterItemContentBox.module.scss'


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5px',
  },
  formControl: {
    margin: theme.spacing(1),
  },
  formControlLabel: {},
  checkbox: {},
}));

const BeigeCheckbox = withStyles({
  root: {
    '&$checked': {
      color: '#B0976A',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const AsideFilterItemContentBox = (props) => {
  const {value = [], handleChangeCheckedBox} = props
  const classes = useStyles();


  const handleChange = (event) => {
    const items = event.target.checked
      ? [...value, event.target.value]
      : value.filter(x => x !== event.target.value)
    handleChangeCheckedBox(items)
  }

  return (
    <div className={styles.asideFilterItemContentBox}>
      <FormGroup>
        <FormControl className={classes.formControl}>
          <FormControlLabel
            control={
              <BeigeCheckbox
                checked={value.includes('Круглая')}
                onChange={handleChange}
                name="circular"
                value="Круглая"
                className={classes.checkbox}
              />}
            label="Круглая"
            className={classes.formControlLabel}
          />

          <FormControlLabel
            control={
              <BeigeCheckbox
                checked={value.includes('Прямоугольная')}
                onChange={handleChange}
                name="rectangular"
                value="Прямоугольная"
              />}
            label="Прямоугольная"
          />

          <FormControlLabel
            control={
              <BeigeCheckbox
                checked={value.includes('Фигурная')}
                onChange={handleChange}
                name="figured"
                value="Фигурная"
              />}
            label="Фигурная"
          />
        </FormControl>
      </FormGroup>
    </div>
  )
}

export default AsideFilterItemContentBox
