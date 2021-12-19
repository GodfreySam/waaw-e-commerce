const data = {
	newArrivals: [
		{
			id: "001",
			name: "Orange Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417058/grp1-ecom/arrival-images/org_kskrql.jpg",
			price: "10.99",
			category: "new",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
		{
			id: "002",
			name: "Green Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417057/grp1-ecom/arrival-images/green-juice_f9ednc.png",
			price: "11.99",
			category: "new",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
		{
			id: "003",
			name: "Lemon Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417057/grp1-ecom/arrival-images/orange-juice2_zgydhv.png",
			price: "14.00",
			category: "new",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
		{
			id: "004",
			name: "Smoothie Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417058/grp1-ecom/arrival-images/smoothie-juice_gkvliz.png",
			price: "16.00",
			category: "new",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
	],
	topCategories: [
		{
			id: "005",
			name: "Smoothie Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417172/grp1-ecom/categories-images/fresh-1_r0z0lr.png",
			price: "16.00",
			oldPrice: "19.00",
			category: "top",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
		{
			id: "006",
			name: "Grape Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417171/grp1-ecom/categories-images/fresh-2_ziqwe9.png",
			price: "11.00",
			oldPrice: "15.00",
			category: "top",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
		{
			id: "007",
			name: "Orange Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417171/grp1-ecom/categories-images/fresh-3_z8pba4.png",
			price: "18.00",
			oldPrice: "21.00",
			category: "top",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
		{
			id: "008",
			name: "Green Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417171/grp1-ecom/categories-images/fresh-4_kqsq0k.png",
			price: "9.00",
			oldPrice: "12.00",
			category: "top",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
	],

	trendingProducts: [
		{
			id: "009",
			name: " Guava Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417253/grp1-ecom/product-images/guava_bkrbvy.png",
			price: "15.00",
			discount: "5.00",
			oldPrice: "20.99",
			category: "trending",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
		{
			id: "010",
			name: " Kiwi Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417254/grp1-ecom/product-images/kiwi_zf1npf.png",
			price: "30.00",
			discount: "20.00",
			oldPrice: "50.99",
			category: "trending",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
		{
			id: "011",
			name: "Healthy Drink Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417255/grp1-ecom/product-images/orange_zqw1f2.png",
			price: "10.00",
			discount: "5.00",
			oldPrice: "15.99",
			category: "trending",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
		{
			id: "012",
			name: "Watermelon Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417255/grp1-ecom/product-images/watermelon_sbpxh9.png",
			price: "15.00",
			discount: "5.00",
			oldPrice: "10.00",
			category: "trending",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
		{
			id: "013",
			name: "Orange Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417255/grp1-ecom/product-images/new_d9n34q.png",
			price: "20.00",
			discount: "5.00",
			oldPrice: "25.00",
			category: "trending",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
		{
			id: "014",
			name: "Carrots Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417254/grp1-ecom/product-images/carrot_ncftl8.png",
			price: "9.00",
			discount: "3.00",
			oldPrice: "12.00",
			category: "trending",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
		{
			id: "015",
			name: "Strawberries Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417255/grp1-ecom/product-images/banana_wmapmv.png",
			price: "30.00",
			discount: "5.00",
			oldPrice: "35.00",
			category: "trending",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
		{
			id: "016",
			name: "Turnip Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417257/grp1-ecom/product-images/lentils_bvbp5u.png",
			price: "45.00",
			discount: "15.00",
			oldPrice: "30.99",
			category: "trending",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
	],

	shopItems: [
		{
			id: "005",
			name: "Smoothie Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417172/grp1-ecom/categories-images/fresh-1_r0z0lr.png",
			price: "16.00",
			oldPrice: "19.00",
			category: "top",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
		{
			id: "006",
			name: "Grape Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417171/grp1-ecom/categories-images/fresh-2_ziqwe9.png",
			price: "11.00",
			oldPrice: "15.00",
			category: "top",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
		{
			id: "007",
			name: "Orange Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417171/grp1-ecom/categories-images/fresh-3_z8pba4.png",
			price: "18.00",
			oldPrice: "21.00",
			category: "top",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
		{
			id: "008",
			name: "Green Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417171/grp1-ecom/categories-images/fresh-4_kqsq0k.png",
			price: "9.00",
			oldPrice: "12.00",
			category: "top",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
		{
			id: "009",
			name: " Guava Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417253/grp1-ecom/product-images/guava_bkrbvy.png",
			price: "15.00",
			discount: "5.00",
			oldPrice: "20.99",
			category: "trending",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
		{
			id: "010",
			name: " Kiwi Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417254/grp1-ecom/product-images/kiwi_zf1npf.png",
			price: "30.00",
			discount: "20.00",
			oldPrice: "50.99",
			category: "trending",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
		{
			id: "011",
			name: "Healthy Drink Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417255/grp1-ecom/product-images/orange_zqw1f2.png",
			price: "10.00",
			discount: "5.00",
			oldPrice: "15.99",
			category: "trending",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
		{
			id: "012",
			name: "Watermelon Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417255/grp1-ecom/product-images/watermelon_sbpxh9.png",
			price: "15.00",
			discount: "5.00",
			oldPrice: "10.00",
			category: "trending",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
		{
			id: "013",
			name: "Orange Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417255/grp1-ecom/product-images/new_d9n34q.png",
			price: "20.00",
			discount: "5.00",
			oldPrice: "25.00",
			category: "trending",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
		{
			id: "014",
			name: "Carrots Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417254/grp1-ecom/product-images/carrot_ncftl8.png",
			price: "9.00",
			discount: "3.00",
			oldPrice: "12.00",
			category: "trending",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
		{
			id: "015",
			name: "Strawberries Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417255/grp1-ecom/product-images/banana_wmapmv.png",
			price: "30.00",
			discount: "5.00",
			oldPrice: "35.00",
			category: "trending",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
		{
			id: "016",
			name: "Turnip Juice",
			image:
				"https://res.cloudinary.com/freyman/image/upload/v1635417257/grp1-ecom/product-images/lentils_bvbp5u.png",
			price: "45.00",
			discount: "15.00",
			oldPrice: "30.99",
			category: "trending",
			inStock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		},
	],
};

export default data;
