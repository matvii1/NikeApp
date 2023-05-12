export type ICartItem = {
	product: {
		image: string
		name: string
		price: number
		sizes: number[]
	}
	size?: number
	quantity: number
}