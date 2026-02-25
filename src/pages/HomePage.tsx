import Footer from '../components/layout/Footer.tsx'
import ShoppingList from '../components/ShoppingList.tsx'
import '../styles/Layout.css'
import type { CartItem,Plant } from '../type/type.tsx'

function HomePage({ cart, addToCart }:{cart:CartItem[],addToCart:(name:string,price:number)=>void}) {
	return (
		<div>
			<div className='lmj-layout-inner'>
				<ShoppingList cart={cart} addToCart={addToCart} />
			</div>
			<Footer />
		</div>
	)
}

export default HomePage 