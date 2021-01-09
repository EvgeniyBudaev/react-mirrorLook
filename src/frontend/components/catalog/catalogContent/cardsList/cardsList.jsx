import React, {Component} from 'react'
import styles from './cardsList.module.scss'
import Card from '../../../card'
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {categorySelector, productsLoadedSelector, productsLoadingSelector} from "../../../../redux/selectors";
import {loadProducts} from "../../../../redux/actions/actions";
import Loader from "../../../loader";


class CardsList extends Component {
  state = { error: null };

  loadProductsIfNeeded = () => {
    console.log('[cardsList][props]', this.props)
    const { loadProducts, categoryId, loading, loaded } = this.props;
    if (!loading && !loaded) {
      loadProducts(categoryId);
    }
  };

  componentDidMount() {
    this.loadProductsIfNeeded();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.categoryId !== this.props.categoryId) {
      this.loadProductsIfNeeded();
    }
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

render() {
  const { category, loading } = this.props;

  if (loading) {
    return <Loader />;
  }

  if (this.state.error) {
    return <p>В этом ресторане меню не доступно</p>;
  }
  return (
      <ul className={styles.cardsList}>
        {category && category.products.map(id => <Card key={id} id={id} />)}
      </ul>
  )
}
}


// const mapStateToProps = state => ({
//   category: state.categoryReducer.currentCategory
// })
//
// export default connect(mapStateToProps)(CardsList)

export default connect(
    createStructuredSelector({
      loading: productsLoadingSelector,
      loaded: productsLoadedSelector,
      categoryId: categorySelector,
    }),
    { loadProducts }
)(CardsList);
