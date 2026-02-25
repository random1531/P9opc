import { useState } from 'react'
import { plantList } from '../datas/plantList.ts'
import PlantItem from './ui/PlantItem.tsx'
import Categories from './Categories.tsx'
import '../styles/ShoppingList.css'
import type { CartItem,Plant } from '../type/type.tsx'

type ShoppingListProps ={
	cart:CartItem[],
	addToCart:(plant:Plant)=>void
}


function ShoppingList({ cart, addToCart }:ShoppingListProps) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce<string[]>(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	const handleAddToCart = (plant:Plant) => {
		addToCart(plant)
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category,description }) =>
					!activeCategory || activeCategory === category ? (
						<li key={id}>
							<PlantItem
								id={id}
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
								onAddToCart={() => handleAddToCart({
                      id,
                      cover,
                      name,
                      water,
                      light,
                      price,
                      category,description
                    })}
							/>
						</li>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList
