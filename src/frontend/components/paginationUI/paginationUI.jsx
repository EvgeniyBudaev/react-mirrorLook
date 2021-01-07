import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import styles from './paginationUI.module.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    '& .MuiPagination-ul': {
      justifyContent: 'center',
    },
    '& .MuiPaginationItem-root': {
      fontFamily: 'Montserrat',
      fontSize: '16px',
    },
    '& .MuiPaginationItem-outlined': {
      border: '1px solid #B0976A',
    },
    '& .MuiPaginationItem-rounded': {
      borderRadius: '0px',
    },
    '& .MuiPaginationItem-page.Mui-selected': {
      backgroundColor: '#B0976A',
      color: '#FFFFFF',
    },
    '& .MuiPaginationItem-page:hover': {
      backgroundColor: '#dfd5c3',
    },
  },
}));

const PaginationUI = () => {
  const classes = useStyles();

  return (
    <div className={styles.pagination}>
      <div className={classes.root}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </div>
    </div>
  );
}

export default PaginationUI
