import {ProductDecrement, ProductIncrement, ProductRemove} from '../../../redux/actions/actions'
import {IProduct} from '../../../redux/types'

export interface IBasketCardProps {
  product: IProduct,
  amount: number,
  subtotal: number,
  productDecrement: ProductDecrement,
  productIncrement: ProductIncrement,
  productRemove: ProductRemove,
}

