export const deepCopy = (obj: any): any => {
	const stringObj = JSON.stringify(obj);
	return JSON.parse(stringObj);
};