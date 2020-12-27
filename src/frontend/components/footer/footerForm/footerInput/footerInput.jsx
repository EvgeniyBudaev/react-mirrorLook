import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import styles from './footerInput.module.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const FooterInput = (props) => {
  const classes = useStyles();
  const {label} = props

  return (
    <div className={styles.formInputAndLabel}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label={label} variant="outlined" />
      </form>
    </div>
  )
}

export default FooterInput