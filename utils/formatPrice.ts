export function formatPriceWithNGN(price: any) {
	return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(
		price
	);
}

export function formatPrice(price: number) {
	if (typeof price !== "number") {
		return "Invalid Number";
	}

	return new Intl.NumberFormat("en-US").format(price);
}
