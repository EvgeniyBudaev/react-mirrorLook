import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import ClassNames from 'classnames'
import styles from '@/frontend/components/catalog/catalogAside/asideFilter/asideFilterItem/asideFilterItemContentBox/asideFilterItemContentBox.module.scss'

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const AsideFilterItemContentBox = () => {
  const [state, setState] = React.useState({
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={styles.asideFilterItemContentBox}>
      <FormGroup>
        <FormControlLabel
          control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
          label="Круглая"
        />
      </FormGroup>
    </div>
  )
}

export default AsideFilterItemContentBox
