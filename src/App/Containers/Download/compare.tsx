import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { ComparePage, CompareBox, CompareBoxHeader, CompareBoxColumn, CompareBoxRow, CompareBoxColumnDescription, GetButton, Separator, ComparePageTitle, IconLeft, CompareTitleContain } from './s_compare';
import { FaCheckCircle, FaBell, FaCamera, FaLightbulb, FaStream, FaVectorSquare, FaPalette, FaAtom, FaCloudscale, FaCrosshairs, FaRobot, FaChalkboard, FaRegKeyboard, FaSpinner } from 'react-icons/fa';
import { IoIosChatbubbles, IoMdCheckmarkCircle, IoMdClose, IoMdCheckmark } from 'react-icons/io';

const items = [
	{ id: 1, title: <CompareTitleContain><IconLeft><FaBell /></IconLeft><div>Alerts</div></CompareTitleContain>, description: 'Use alerts to change lights' , free: true, premium: true },
	{ id: 2, title: <CompareTitleContain><IconLeft><IoIosChatbubbles /></IconLeft><div>Chat Commands</div></CompareTitleContain>, description: 'Allow chat to type in commmands to change lights' , free: true, premium: true },
	{ id: 3, title: <CompareTitleContain><IconLeft><FaRegKeyboard /></IconLeft><div>Hot Keys</div></CompareTitleContain>, description: 'Allow chat to type in commmands to change lights' , free: true, premium: true },
	{ id: 4, title: <CompareTitleContain><IconLeft><FaCamera /></IconLeft><div>Twitch, Mixer, and Youtube</div></CompareTitleContain>, description: 'Twitch, Mixer, and Youtube integration' , free: true, premium: true },
	{ id: 5, title: <CompareTitleContain><IconLeft><FaLightbulb /></IconLeft><div>Hue, LifX, and Nanoleaf</div></CompareTitleContain>, description: 'Hue, LifX, and Nanoleaf integration' , free: true, premium: true },
	{ id: 6, title: <CompareTitleContain><IconLeft><FaStream /></IconLeft><div>Streamlabs and Streamelements</div></CompareTitleContain>, description: 'Streamlabs and Streamelements integration' , free: true, premium: true },
	{ id: 7, title: <CompareTitleContain><IconLeft><FaVectorSquare /></IconLeft><div>Extra Life, TipeeeStream, TreatStream, Tiltify, Patreon</div></CompareTitleContain>, description: 'Extra Life, TipeeeStream, TreatStream, Tiltify, Patreon, and more integrations' , free: true, premium: true },
	{ id: 8, title: <CompareTitleContain><IconLeft><FaVectorSquare /></IconLeft><div>Custom Reactions</div></CompareTitleContain>, description: 'Build reactions in whatever way you want using timers etc.' , free: true, premium: true },
	// {id: 9,  title: <di><IconLeft><FaPaintRoller /></IconLeft><div>Scenes</div></CompareTitleContain>, description: 'Create scenes using all of your lights' , free: true, premium: true },
	// { id: 10, title: <CompareTitleContain><div>Tiers</div></CompareTitleContain>, description: 'Tier customizations' , free: true, premium: true },

	// Premium
	{ id: 20, title: <CompareTitleContain><IconLeft><FaAtom /></IconLeft><div>Fuze!</div></CompareTitleContain>, description: 'Fuze! Have your lights react to what\'s going on on the screen' , free: false, premium: true },
	{ id: 21, title: <CompareTitleContain><IconLeft><FaPalette /></IconLeft><div>Color Picker</div></CompareTitleContain>, description: 'Color picker: Choose between all of the RGB colors to use in Lumia' , free: false, premium: true },
	{ id: 22, title: <CompareTitleContain><IconLeft><FaCloudscale /></IconLeft><div>Hype Alerts</div></CompareTitleContain>, description: 'Hype alerts: When an alert goes off start hype mode where chat can control the brightness of your lights until the timer is over' , free: false, premium: true },
	{ id: 23, title: <CompareTitleContain><IconLeft><FaCrosshairs /></IconLeft><div>Interactives</div></CompareTitleContain>, description: 'Interactives: Give your chat the option to choose whatever hex command they want, or allow them to type !random and have your lights change... randomly' , free: false, premium: true },
	{ id: 24, title: <CompareTitleContain><IconLeft><FaRobot /></IconLeft><div>Thingamabot</div></CompareTitleContain>, description: 'Thingamabot: Need a helping hand? Thingamabot is here to save the day. Have Thingamabot communicate to the audience what\'s going on with Lumia, what lights can each tier choose, etc' , free: false, premium: true },
	{ id: 25, title: <CompareTitleContain><IconLeft><FaChalkboard /></IconLeft><div>Dynamic RGB Overlays</div></CompareTitleContain>, description: 'Overlays: Surround your stream in an overlay that changes the color as your lights change' , free: false, premium: true },
	// { id: 26, title: <CompareTitleContain><IconLeft><FaPlus /></IconLeft><div>Points (Coming Soon)</div></CompareTitleContain>, description: 'Points (Coming Soon)' , free: false, premium: true },
	{ id: 27, title: <CompareTitleContain><IconLeft><FaSpinner /></IconLeft><div>Animations</div></CompareTitleContain>, description: 'Animations (Coming Soon)' , free: false, premium: true },
];

class Compare extends React.Component<any> {

	download = (premium: boolean) => {
		if (premium) {
			this.props.history.push('/download?premium=true', { premium: true });
		} else {
			this.props.history.push('/download?premium=false');
		}
	}

  render() {
      return (
				<ComparePage>
					<ComparePageTitle>Get Lumia Stream now!</ComparePageTitle>
					<CompareBox>
						<CompareBoxHeader>
							<CompareBoxColumnDescription>Features</CompareBoxColumnDescription>
							<Separator />
							<CompareBoxColumn>Free</CompareBoxColumn>
							<Separator />
							<CompareBoxColumn>Premium</CompareBoxColumn>
						</CompareBoxHeader>
						
						{items.map((item) =>
							<CompareBoxRow key={item.id}>
								<CompareBoxColumnDescription>{item.title}</CompareBoxColumnDescription>
								<Separator />
								<CompareBoxColumn style={{ fontSize: '20px' }}>{item.free ? <IoMdCheckmarkCircle style={{ color: '#2ECC40' }} /> : <IoMdClose />}</CompareBoxColumn>
								<Separator />
								<CompareBoxColumn style={{ fontSize: '20px' }}>{item.premium ? <IoMdCheckmarkCircle style={{ color: '#2ECC40' }} /> : <IoMdClose />}</CompareBoxColumn>
							</CompareBoxRow>
						)}

						<CompareBoxRow>
							<CompareBoxColumnDescription />
							<Separator />
							<CompareBoxColumn><GetButton onClick={() => this.download(false)}>Free</GetButton></CompareBoxColumn>
							<Separator />
							<CompareBoxColumn><GetButton color='#2ECC40' onClick={() => this.download(true)}>Premium</GetButton></CompareBoxColumn>
						</CompareBoxRow>
					</CompareBox>
				</ComparePage>
      );
    }
}

export default withRouter(Compare);
