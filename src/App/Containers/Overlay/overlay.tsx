import React, { Fragment } from 'react';
import { Interval } from 'bettertimers'
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './s_overlay.css';

class Overlay extends React.Component<any, any> {
  state = {
		room: '',
		inputRoom: '',
		errorMsg: '',
		config: {
			type: 1,
			barConfig: {
					positionVertical: 'top',
					positionHorizontal: 'left',
					top: '0%',
					bottom: null,
					left: '0%',
					right: null,
					opacity: 1.0,
					shadow: { on: true, blur: '10px', horizontal: '0px', vertical: '1px' },
					height: '7%',
					width: '100%',
					background: 'purple',
					colors: [],
			},

			poweredConfig: {
				positionVertical: 'bottom',
				positionHorizontal: 'right',
				bottom: '20%',
				top: null,
				right: '0%',
				left: null,
				fontSize: '14px',
				opacity: 1.0,
				shadow: { on: true, blur: '1px', horizontal: '0px', vertical: '2px' },
				color: 'purple',
				colors: [],
			}
		}
	};

  componentDidMount() {
    if(this.props.history.location.search) {
			let room = this.props.history.location.search.match(/room=(\w+)/)[1];
			if (room) {
      	this.setState({ room });
      	this.connect();
			}
    }
	}

	connect = () => {
		if(this.state.room) {
			console.log('Room', this.state.room)
			// const socket = io.connect('http://localhost:6788', {
			const socket = io.connect('https://api.lumiacove.com', {
				'reconnection': true,
				'reconnectionDelay': 500,
				'reconnectionAttempts': 1000
			});
			
			socket.on('connect', () => {
				socket.emit('connected', { name: 'lumia' });
				socket.emit('room', { room: this.state.room, secret: 'LumiaOverRooms' });
				socket.emit('overlay-event', { type: 'retrieve-overlay-config', room: this.state.room, secret: 'LumiaOverEverything', packed: {} });
			});

			socket.on('reconnect_attempt', () => {});

			socket.on('disconnect', () => {});

			socket.on('change-config', (config) => {
				console.log('Config', config)
				this.setState({ config });
			});

			socket.on('change-background', (config) => {
				console.log('Color Config', config)
				if(this.state.config.type == 1){
					this.state.config.barConfig.background = `linear-gradient(90deg, ${config.colors[0]}, ${config.colors[1]}, ${config.colors[2]}, ${config.colors[3]})`
					this.state.config.barConfig.colors = config.colors
				} else if (this.state.config.type == 2){
					this.state.config.poweredConfig.colors = config.colors
				}
			});
		}
	}

	switchRoom = () => {
		console.log('Switch room', this.state.inputRoom)
		if(this.state.inputRoom){
			this.setState({ room: this.state.inputRoom });
			this.connect()
		} else {
			this.setState({ errorMsg: 'You must enter a room to continue' });
		}
	}

  render() {
		const { inputRoom, room, config, errorMsg } = this.state;

      return (
				<div id='LumiaOverlayPage'>
					{room
						? <div id='LumiaOverlay'>
									{config.type == 1 &&
										<div className='overlay-contain' style={{ position: 'absolute', top: config.barConfig.top, bottom: config.barConfig.bottom, opacity: config.barConfig.opacity, width: config.barConfig.width, height: config.barConfig.height, background: config.barConfig.background, boxShadow: config.barConfig.shadow.on ? `${config.barConfig.colors ? config.barConfig.colors[0]: config.barConfig.background} ${config.barConfig.shadow.horizontal} ${config.barConfig.shadow.vertical} ${config.barConfig.shadow.blur}` : '' }} />
									}
									{config.type == 2 &&
										<div className='overlay-contain' style={{ textAlign: 'right', position: 'absolute', bottom: config.poweredConfig.bottom, top: config.poweredConfig.top, right: config.poweredConfig.right, left: config.poweredConfig.left, fontSize: config.poweredConfig.fontSize, opacity: config.poweredConfig.opacity }} >
											<div className='powered-contain'>
												<span style={{ color: config.poweredConfig.colors[0], textShadow: config.poweredConfig.shadow.on ? `${config.poweredConfig.colors[0]} ${config.poweredConfig.shadow.horizontal} ${config.poweredConfig.shadow.vertical} ${config.poweredConfig.shadow.blur}` : '' }}>Powe</span>
												<span style={{ color: config.poweredConfig.colors[1], textShadow: config.poweredConfig.shadow.on ? `${config.poweredConfig.colors[1]} ${config.poweredConfig.shadow.horizontal} ${config.poweredConfig.shadow.vertical} ${config.poweredConfig.shadow.blur}` : '' }}>red by</span> 
											</div>
											<div className='powered-contain'>
												<span style={{ color: config.poweredConfig.colors[2], textShadow: config.poweredConfig.shadow.on ? `${config.poweredConfig.colors[2]} ${config.poweredConfig.shadow.horizontal} ${config.poweredConfig.shadow.vertical} ${config.poweredConfig.shadow.blur}` : '' }}>Lum</span>
												<span style={{ color: config.poweredConfig.colors[3], textShadow: config.poweredConfig.shadow.on ? `${config.poweredConfig.colors[3]} ${config.poweredConfig.shadow.horizontal} ${config.poweredConfig.shadow.vertical} ${config.poweredConfig.shadow.blur}` : '' }}>ia</span>
											</div>
										</div>
									}
							</div>

						: <div id='LumiaOverlaySignup'>
								<h1 className='overlay-title'>Lumia Overlay</h1>
								<div className='error-message'>{ errorMsg }</div>
								<h3>Enter your room number</h3>
								{/* <input type='text' name='room' id='room-input' v-model='inputRoom' placeholder='Room number' maxlength='20' @keyup='errorMsg=''' @keyup.enter='switchRoom'> */}
								<input type='text' name='room' id='room-input' onChange={(e) => this.setState({ inputRoom: e.target.value })} value={inputRoom} placeholder='Room number' maxLength={ 20 } />
								<button className='overlay-enter' onClick={ this.switchRoom }>Enter</button>
							</div>
					}
				</div>
      );
    }
}

const mapState = (state) => {
	const copyState = ({
		auth: state.auth,
	});
	return copyState;
};

export default withRouter(connect<any, any, any>(mapState, null)(Overlay));
