export const signIn = (cred: { email: string; username: string; avatar: string; token: string; refreshToken: string; }) => {
	return {
		type: 'SIGN_IN',
		cred
	}
}

export const premium = (isPremium: boolean) => {
	return {
		type: 'PREMIUM',
		premium: isPremium
	}
}

export const signOut = () => {
	return {
		type: 'SIGN_OUT'
	}
}