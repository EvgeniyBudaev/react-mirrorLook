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
  const {value = [], handleChangeCheckedBox, options} = props
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
          {
            options.map((item, index) => (
              <FormControlLabel
                key={item+':'+index}
                control={
                  <BeigeCheckbox
                    checked={value.includes(item)}
                    onChange={handleChange}
                    value={item}
                    className={classes.checkbox}
                  />}
                label={item}
                className={classes.formControlLabel}
              />
            ))
          }
        </FormControl>
      </FormGroup>
    </div>
  )
}

export default AsideFilterItemContentBox
