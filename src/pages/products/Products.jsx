import "./products.css";
import data from "../../database/data"

const Products = () => {

	return (
		<div className="products">
			<div className="products__header">
				<h2>Shop Items</h2>
			</div>
			<div className="products__item">
				{data.shopItems.map((item) => (
					<div
						className="product"
						key={item.id}
						onClick={() => (window.location.href = `/product-details/${item.id}`)}
					>
						<div className="product__top">
							<img src={item.image} alt={item.name} />
						</div>
						<div className="product__bottom">
							<p>{item.name}</p>
							<div className="product__bottom--prices">
								<p className="price newPrice">${item.price}</p>
								<p className="price oldPrice">${item.oldPrice}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Products;
