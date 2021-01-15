import React from 'react'
import {connect} from 'react-redux'
import {addReview} from '../../../../../../../redux/actions/actions'
import useForm from '../../../../../../../hooks/use-form'
import styles from './reviewForm.module.scss'
import Rate from '../../../../../../rate'

const INITIAL_VALUES = {name: '', text: '', rating: 5}

const ReviewForm = (props) => {
  console.log('[ReviewForm][props]', props)
  const {onSubmit} = props
  const {values, handlers, reset} = useForm(INITIAL_VALUES)

  const handleSubmit = (ev) => {
    ev.preventDefault()
    onSubmit(values)
    reset()
  }
  return (
    <div className={styles.reviewForm}>
      <h4 className={styles.addReviewTitle}>Leave your review</h4>
      <form onSubmit={handleSubmit}>
        <div className={styles.reviewFormItem}>
          <input
            placeholder="Your name"
            className={styles.message}
            {...handlers.name}
          />
        </div>
        <div className={styles.reviewFormItem}>
					<textarea
            placeholder="Your review"
            className={styles.message}
            {...handlers.text}
          />
        </div>
        <div className={styles.rateWrap}>
          <span>Rating: </span>
          <span>
						<Rate {...handlers.rating} />
					</span>
        </div>
        <div className={styles.publish}>
          <button>
            PUBLISH REVIEW
          </button>
        </div>
      </form>
    </div>
  )
}

export default connect(null, (dispatch, props) => ({
  onSubmit: (review) => dispatch(addReview(review, props.productId)),
}))(ReviewForm)
