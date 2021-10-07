import Button from '../button'

import { useContext } from 'react'

import { CatalogueContext } from '../../providers/catalogue'
import { CartContext } from '../../providers/cart'

 import { Container} from './style'

const ProductList = ({ type }) => {
    const { catalogue } = useContext(CatalogueContext)
    const { cart } = useContext(CartContext)


    return (
        <Container>
        <ul>
          
            {type === "catalogue" &&
                catalogue.map((item, index) => (
                    <li key={index}>
                        {item.name} <Button type={type} item={item} />
                    </li>
                ))}
           
            {type === "cart" &&
                cart.map((item, index) =>  ( 
                    
                    <li key={index}>
                        {item.name} <Button type={type} item={item} />
                    </li>
                    
                ))
               
            }
        </ul>
        </Container>
    );
}
export default ProductList;