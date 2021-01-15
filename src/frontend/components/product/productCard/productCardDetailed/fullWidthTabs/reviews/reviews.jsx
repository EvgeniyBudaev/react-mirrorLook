import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {loadReviews, loadUsers} from '../../../../../../redux/actions/actions'
import {reviewsLoadedSelector, usersLoadedSelector} from '../../../../../../redux/selectors'
import Loader from '../../../../../loader'
import Review from './review'
import styles from './reviews.module.scss'
import animationStyles from './reviews-animation.module.scss'


const Reviews = (props) => {
  console.log('[Reviews][props]', props)
  const {
    reviews,
    productId,
    loadReviews,
    loadUsers,
    reviewsLoaded,
    usersLoaded,
  } = props

  useEffect(() => {
    loadUsers()
    loadReviews(productId)
  }, [loadUsers, loadReviews, productId])

  if (!usersLoaded || !reviewsLoaded) return <Loader />

  return (
    <div className={styles.reviews}>
      <TransitionGroup>
        {reviews.map((id) => (
          <CSSTransition key={id} timeout={500} classNames={animationStyles}>
            <Review id={id} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  reviewsLoaded: reviewsLoadedSelector,
  usersLoaded: usersLoadedSelector,
})


export default connect(mapStateToProps, {loadReviews, loadUsers})(Reviews)