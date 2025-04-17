function parseNumber(input: string): number {
	const cleanedInput = input.replace(/[^\d.,]/g, '');
	const [integerPart, decimalPart] = cleanedInput.split(/[\.,]/);
	let finalDecimalPart = '';
	if (decimalPart && decimalPart.length === 3) {
		finalDecimalPart = decimalPart;
	} else if (decimalPart && decimalPart.length < 3) {
		finalDecimalPart = decimalPart.padEnd(3, '0');
	}
	const finalNumber = finalDecimalPart ? `${integerPart}.${finalDecimalPart}` : integerPart;
	return Number(finalNumber);
}

export { parseNumber }