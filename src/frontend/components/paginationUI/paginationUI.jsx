import React from 'react'
import { Link } from 'react-router-dom'
import Pagination from '@material-ui/lab/Pagination'
import PaginationItem from '@material-ui/lab/PaginationItem'
import { makeStyles } from '@material-ui/core/styles'
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
}))

const PaginationUI = (props) => {
  const {total, limit, url, currentPage, categoryId} = props
  const pagesCount = Math.ceil(total / limit)
  const classes = useStyles()

  return (
    <div className={styles.pagination}>
      <div className={classes.root}>
        <Pagination
          count={pagesCount}
          renderItem={(item) => (
            <Link to={`/catalog/${categoryId}${item.page === 1 ? '' : `?page=${item.page}`}`} >
              <PaginationItem {...item} />
            </Link>
          )}
        />
      </div>
    </div>
  )
}

export default PaginationUI
