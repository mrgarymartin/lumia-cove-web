const BaseColor = {
	main: '#4b367c',
	dark: '#19171c',
	dark2: '#19171e',
	dark3: '#221f28',
	comp: '#2F3136',
	oldcomp: '#2F2E32',
	light: '#ffffff',
	white: '#ffffff',
	black: '#000000',
	extra: '#0e9dd9',
	logo: 'white',
	error: 'red',
	warning: 'orange',
	yield: 'lightblue',

	inactive: 'gray',
	active: '#0e9dd9',
	twitchMain: '#4b367c',
	twitchPurple: '#6441a5',
	mixerBlue: '#03214F',
	youtubeRed: '#282828',
};

const Colors: any = {
	mainBg: { dark: 'linear-gradient(135deg, #2e253d 0%, #141828 100%)', light: 'linear-gradient(135deg, #2e253d 0%, #141828 100%)' },
	settingsBg: { dark: BaseColor.dark2, light: BaseColor.dark2 },
	sideBarBg: { dark: BaseColor.comp, light: BaseColor.comp },
	containBg: { dark: BaseColor.comp, light: BaseColor.light }, // This is for any furthest Background, like overlay of Modal
	secondContainBg: { dark: BaseColor.dark2, light: BaseColor.light }, // This is for any closest Background
	thirdContainBg: { dark: BaseColor.dark3, light: BaseColor.light }, // This is for any closest Background
	
	text: { dark: BaseColor.light, light: BaseColor.dark }, // This is for any furthest Background, like overlay of Modal
	active: { dark: BaseColor.extra, light: BaseColor.extra },
	inactive: { dark: BaseColor.extra, light: BaseColor.extra },
	callToAction: { dark: '#405FD3', light: '#405FD3' },
	callToActionHover: { dark: '#5771dc', light: '#5771dc' },
	callToActionActive: { dark: '#5771dc', light: '#5771dc' },
	settingBox: { dark: BaseColor.comp, light: BaseColor.comp },
	boxSettingText: { dark: BaseColor.white, light: BaseColor.black },

	questionIcon: { dark: BaseColor.white, light: BaseColor.dark },
	
	main: '#4b367c',
	dark: '#19171c',
	comp: '#2F2E32',
	light: '#ffffff',
	white: '#ffffff',
	black: '#000000',
	extra: '#0e9dd9',
	// logo: '#b9f3fe',
	logo: '#ff00ff',
	
	success: 'green',
	error: 'red',
	warning: 'orange',
	yield: 'lightblue',
	info: 'cornflowerblue',
	connected: 'lightgreen',
	
	reset: 'indianred',
	resetHover: 'lightred',

	twitchMain: '#4b367c',
	twitchPurple: '#6441a5',
	mixerBlue: '#03214F',
	youtubeRed: '#282828',
};

export default Colors;
