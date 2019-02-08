export const isTruly = (value: any) => {
	return value !== undefined && value !== null;
};

export const isNully = (value: any) => {
	return value === undefined || value === null;
};


export const getRandomNumber = (min = 0, max = 255) => {
	return Math.floor(Math.random()*(max-min+1)+min);
};

export const getEnumKeys = (passedEnum: any) => {
	return Object.keys(passedEnum)
		.filter((key) => isNaN(Number(key)));
};
