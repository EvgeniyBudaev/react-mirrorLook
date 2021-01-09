import React, {Component} from 'react'
import styles from './cardsList.module.scss'
import Card from '../../../card'
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {categorySelector, productsLoadedSelector, productsLoadingSelector, routingSelector} from "../../../../redux/selectors";
import {loadProducts} from "../../../../redux/actions/actions";
import Loader from "../../../loader";


class CardsList extends Component {
  state = { error: null };

  loadProductsIfNeeded = () => {
    const { loadProducts, category, loading, loaded } = this.props;
    console.log('category', category)
    const categoryId = category;

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


// const mapStateToProps = state => ({
//   category: state.categoryReducer.currentCategory
// })
//
// export default connect(mapStateToProps)(CardsList)

export default connect(
    createStructuredSelector({
      loading: productsLoadingSelector,
      loaded: productsLoadedSelector,
      category: categorySelector,
      restId: routingSelector,
    }),
    { loadProducts }
)(CardsList);
