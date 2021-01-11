import React, {Component} from 'react'
import styles from './cardsList.module.scss'
import Card from '../../../card'
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {
  productsLoadedSelector,
  productsLoadingSelector
} from "../../../../redux/selectors";
import {loadProducts} from "../../../../redux/actions/actions";
import Loader from "../../../loader";


class CardsList extends Component {
  state = { error: null };

  loadProductsIfNeeded = () => {
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
  //console.log('[cardsList][props]', this.props)
  const { products, loading } = this.props;

  if (loading) {
    return <Loader />;
  }

  if (this.state.error) {
    return <p>В этом ресторане меню не доступно</p>;
  }

  return (
      <ul className={styles.cardsList}>
        {products.map(id => <Card key={id} id={id} />)}
      </ul>
  )
 }
}


export default connect(
    createStructuredSelector({
      loading: productsLoadingSelector,
      loaded: productsLoadedSelector,
    }),
    { loadProducts }
)(CardsList);

// const CardsList = (props) => {
//   console.log('[CardsList][props]', props)
//   const { loadProducts, categoryId, products, loading, loaded } = props;
//
//
//   useEffect(() => {
//     if (!loading && !loaded) {
//       loadProducts(categoryId);
//     }
//   }, [loadProducts, loading, loaded])
//
//
//     if (loading) {
//       return <Loader />;
//     }
//
//     return (
//       <ul className={styles.cardsList}>
//         {products.map(id => <Card key={id} id={id} />)}
//       </ul>
//     )
// }
