import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Specifications from './specifications'
import ProductCardDelivery from './productCardDelivery'
import Reviews from './reviews'
import {createStructuredSelector} from 'reselect'
import {
  reviewsSelector,
} from '../../../../../redux/selectors'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    '& .Mui-selected': {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      color: 'rgba(176, 151, 106, 1)',
    },
    '& .MuiAppBar-colorPrimary': {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      color: 'rgba(0, 0, 0, 1)',
    },
    '& .MuiTabs-indicator': {
      backgroundColor: 'rgba(176, 151, 106, 1)',
    },
  },
}));

function SimpleTabs(props) {
  console.log('[SimpleTabs][props]', props)
  const {product, reviewsAll} = props

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let reviewsArrayId
  if (reviewsAll) reviewsArrayId = Object.keys(reviewsAll)
  console.log('RES', reviewsArrayId)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Характеристики" {...a11yProps(0)} />
          <Tab label="Отзывы (0)" {...a11yProps(1)} />
          <Tab label="Доставка и оплата" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Specifications product={product} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        {reviewsArrayId && <Reviews productId={product.id} reviews={product.reviews} reviewsArrayId={reviewsArrayId} />}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProductCardDelivery />
      </TabPanel>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  reviewsAll: reviewsSelector,
})

export default connect(mapStateToProps )(SimpleTabs)



