import { useState } from 'react'
import { plantList } from '../datas/plantList.ts'
import PlantItem from './ui/PlantItem.tsx'
import Categories from './Categories.tsx'
import '../styles/ShoppingList.css'
import type { CartItem } from '../type/type.tsx'

type ShoppingListProps ={
	cart:CartItem[],
	addToCart:(name:string,price:number)=>void
}
type handleAddToCart = (name:string,price:number)=>void

function ShoppingList({ cart, addToCart }:ShoppingListProps) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce<string[]>(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	const handleAddToCart:handleAddToCart = (name, price) => {
		addToCart( name, price )
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<li key={id}>
							<PlantItem
								id={id}
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
								onAddToCart={() => handleAddToCart(name, price)}
							/>
						</li>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList
