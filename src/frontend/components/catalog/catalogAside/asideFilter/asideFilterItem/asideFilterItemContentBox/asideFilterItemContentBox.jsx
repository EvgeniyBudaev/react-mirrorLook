import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import styles from './asideFilterItemContentBox.module.scss'

const GreenCheckbox = withStyles({
  root: {
    padding: '5px',
    color: '#B0976A',
    '&$checked': {
      color: '#B0976A',
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
