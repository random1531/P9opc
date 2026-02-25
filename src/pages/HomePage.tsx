import Footer from '../components/layout/Footer.tsx'
import ShoppingList from '../components/ShoppingList.tsx'
import '../styles/Layout.css'
import type { CartItem,Plant } from '../type/type.tsx'

type HomePageProps ={
	cart:CartItem[],
	addToCart:(plant:Plant)=>void
}


function HomePage({ cart, addToCart }:HomePageProps) {
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