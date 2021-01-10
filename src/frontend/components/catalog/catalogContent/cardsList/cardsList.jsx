import React, {Component} from 'react'
import styles from './cardsList.module.scss'
import Card from '../../../card'
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {
  categoryIdSelector,
  categorySelector,
  productsLoadedSelector,
  productsLoadingSelector
} from "../../../../redux/selectors";
import {loadProducts} from "../../../../redux/actions/actions";
import Loader from "../../../loader";


class CardsList extends Component {
  state = { error: null };

  loadProductsIfNeeded = () => {
    const { loadProducts, categoryId, loading, loaded } = this.props;
    console.log('[cardsList][categoryId]', categoryId)
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
  console.log('[cardsList][props]', this.props)
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


export default connect(
    createStructuredSelector({
      loading: productsLoadingSelector,
      loaded: productsLoadedSelector,
      category: categorySelector,
      categoryId: categoryIdSelector,
    }),
    { loadProducts }
)(CardsList);
