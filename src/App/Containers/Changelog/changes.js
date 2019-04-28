export default [
	{ version: "1.0.0",
		date: "4/28/2019",
		releaseNotes: [
			{
				title: "Features",
				content: `
				<ul>
					<li>Streamdeck integration is here! <a class="release-link" href="https://lumiacove.com/school/streamdeck">Stream deck docs</a></li>
					<li>Tplink has been added to the list of light and accessory brands</li>
					<li>Yeelight is also joining the party</li>
					<li><a class="release-link" href="https://lumiacove.com/school/studio/animations">Animations!</a>: Have your lights continuously animate forever. Premium only</li>
					<li>Last used colors addition added to Premium Color Picker</li>
					<li>Option to only accept variations: If no variation conditions are met the alert will not run</li>
					<li>Regular Hue group mode is back. You can now add more than 10 Hue lights and also add off brand lights that connect to the hue bridge</li>
					<li>Mixer Sparks has been added to the list of alert options</li>
					<li>Mixer Embers has been added to the list of alert options</li>
					<li>Added native Twitch Bits alerts without Streamlabs or StreamElements</li>
					<li>Added native Twitch Raid alerts without Streamlabs or StreamElements</li>
					<li>Native Tiltify integration is here meaning you don't need to be connected to Streamlabs anymore for Tiltify alerts</li>
					<li>Native TreatStream integration</li>
					<li>Native TipeeeStream integration</li>
				</ul>`,
			},
			{
				title: "Enhancements",
				content: `
				<ul>
					<li>Volume control addition to Studio Reaction Audio</li>
					<li>Force Stop option on Home page to stop all of your lights and anything else</li>
					<li>Logout button in Account page now</li>
					<li>Adding individual brightness option to chat colors instead of the global chat color brightness</li>
					<li>Accessories adder shows searching indicator and if it can't find anything will show empty message</li>
					<li>(Website) Added My Account page where you can manage your subscription</li>
					<li>Added individual Durations to Chat Reactions</li>
					<li>Added ability to choose which Hue lights you want selected when connecting hue</li>
					<li>Lifx will now try to get the friendly name when connecting for the first time for each light</li>
					<li>Hypes now accept multiple emotes at once</li>
					<li>Added native Twitch Raid alerts without Streamlabs or StreamElements</li>
					<li>Native Tiltify integration is here meaning you don't need to be connected to Streamlabs anymore for Tiltify alerts</li>
					<li>Native TreatStream integration</li>
					<li>Native TipeeeStream integration</li>
				</ul>`,
			},
			{
				title: "Bug fixes",
				content: `
				<ul>
					<li>When Reactions are force stopped the audio will be stopped as well</li>
					<li>Fixed Lifx Black color turning to white</li>
					<li>Fixes to Idle mode</li>
					<li>Hotkey Studio-Scene fix</li>
					<li>Twitch Redemption Variations now takes text instead of number</li>
					<li>Fixed Everyone user Tier 5 and 6 for Youtube</li>
					<li>Scenes within reactions will respect the scenes brightness</li>
					<li>Hypes fixes</li>
					<li>Hype filters are now case insensitive</li>
				</ul>`,
			}
		]
	}
];
