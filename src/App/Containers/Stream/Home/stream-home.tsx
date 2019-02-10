import React from 'react';
import { withRouter } from 'react-router-dom';

import './s_stream-home.css';

const StreamHome = ({ history }) => (
	<div className={'lumia-page'}>
		<div>
			<div className="top-contain animated bounceIn">
				<div className="logo-text"><span className="logo-letter">L</span><span className="logo-letter">u</span><span className="logo-letter">m</span><span className="logo-letter">i</span><span className="logo-letter">a</span> <span className="logo-stream">STREAM</span></div>
				<div className="quote-contain">
						<div className="description">Between your RGB lights and your viewers!</div>
				</div>
			</div>
		</div>

		<div className="video-contain">
			{/* <div className="video-holder demo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'solid 1px white' }}> */}
			<div className="video-holder demo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				{/* Promo Video Coming Soon */}
				<video width="100%" height="100%" controls>
					<source src="/assets/promos/Lumia-Overlay.mp4"  type="video/mp4" />
				</video>
			</div>
		</div>

		<div className="platform-contain">
			Available on Windows and Mac
		</div>
		
		{/* <HiddenMessage text="Hello there" /> */}

		<div className="">
			<button className="main-button buy-button animated fadeInUp" onClick={() => history.push('/compare') }>Get it now</button>
		</div>

		{/* About */}
		<div id="about-page" className="info-bar">
      <div className="sub-description-contain">
            <div className="sub-description">Lumia Stream is the ultimate bridge between your Phillips Hue, LifX, Nanoleaf, Twitch, Mixer, Youtube and your viewers. 
                It's time to allow your viewers to finally interact with you all using Lumia Stream</div>
        </div>
    </div>

		{/* How */}
		<div id="how-page" className="info-bar">
        <div className="sub-description-contain">
            <div className="sub-description">Tell your viewers to type <span style={{ color: 'green' }}>!green</span>, interactives like <span style={{ color: '#ff00ff' }}>!hex #ff00ff</span>, or any of the countless custom option you can build and choose from and watch as your lights change.</div>
        </div>
    </div>

		{/* Features */}
		<div id="features-page" className="info-bar">
        <div className="head-title">Features</div>
        <div className="head-border" />
         <div className="sub-description-contain">
             <ul className="feature-list">
                 <div className="feature-set">
                    <li className="feature">Hot keys to trigger your lights on queue</li>
                    <li className="feature">Multiple chat command types to choose from</li>
                </div>
                 <div className="feature-set">
                    <li className="feature">Fuze! Have your lights react to what's going on on the screen</li>
                    <li className="feature">Hype alerts: When an alert goes off start hype mode where chat can control the brightness of your lights until the timer is over</li>
                </div>
                 <div className="feature-set">
                    <li className="feature">Overlays: Surround your stream in an overlay that changes the color as your lights change</li>
                    <li className="feature">Use all of your light brands together at lightning fast speeds</li>
                </div>
                 <div className="feature-set">
                    <li className="feature">Change the key to listen to</li>
                    <li className="feature">Simple and sleek UI for any user to use</li>
                </div>
                 <div className="feature-set">
                    <li className="feature">Change color of hue by chat command</li>
                    <li className="feature">Various reactions to choose from for new subscribers using Twitch</li>
                </div>
                <div className="feature-set">
                    <li className="feature">White List to only listen to certain users</li>
                    <li className="feature">Black List to ignore certain users</li>
                </div>
                 <div className="feature-set">
                    <li className="feature">Ability to create your own custom colors using the premium color picker</li>
                    <li className="feature">Cooldown options</li>
                </div>
                 <div className="feature-set">
                     <li className="feature">Reaction builders to make any reaction to your alerts you can think of</li>
                     <li className="feature">Assign certain abilities that different tiered viewers can use</li>
                </div>
                 <div className="feature-set">
                    <li className="feature">Reactions for new bits</li>
                    <li className="feature">Integration with followers</li>
                </div>
                 <div className="feature-set">
                    <li className="feature">Reactions for new subscribers</li>
                    <li className="feature">Reactions for new hosts</li>
                </div>
                 <div className="feature-set">
                    <li className="feature">Reactions for new SuperChats</li>
                    <li className="feature">Reactions for new raids</li>
                </div>
                 <div className="feature-set">
                     <li className="feature">Ability to toggle off and on any of the features</li> 
                     <li className="feature">Plus more...</li>
                </div>
            </ul>
        </div>
    </div>

		{/* Integrations */}
		{/* <div>
			<div>Integrations</div>
			<div>Twitch</div>
			<div>Mixer</div>
			<div>Youtube</div>
			<div>Hue</div>
			<div>LifX</div>
			<div>Nanoleaf</div>
			<div>Streamlabs</div>
			<div>Streamelements</div>
			<div>Extra Life</div>
			<div>Tiltify</div>
			<div>Treat Stream</div>
			<div>TipeeeStream</div>
			<div>Patreon</div>
		</div> */}

		{/* Help */}
		<div id="help-page" className="info-bar">
        <div className="sub-description-contain">
            <div className="sub-description">For any questions, comments, or concerns visit our <a className="link" href="https://discord.gg/D5xywEN" target="_blank">Discord</a></div>
        </div>
    </div>

		{/* Social
		<div id="social-page" className="info-bar">
       <div className="sub-description-contain">
            <div className="sub-description">Come join us at <a className="twitch-link" href="https://twitter.com/lumiacove" target="_blank">Twitter</a>, <a className="twitch-link" href="https://discord.gg/D5xywEN" target="_blank">Discord</a>, and <a className="twitch-link" href="https://www.reddit.com/r/lumiatwitch/" target="_blank">Reddit</a></div>
        </div>
    </div> */}

		{/* Bottom */}
		 <div id="bottom-page" className="info-bar">
         <div className="sub-description-contain">
            <button className="main-button buy-button" onClick={() => history.push('/compare') }>Get it now</button>
        </div>
    </div>
	</div>
);

export default withRouter(StreamHome);
