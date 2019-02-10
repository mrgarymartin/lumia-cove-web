import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { InputField, SwitchButton, SwitchRow } from '../Auth/s_auth';
import './s_download.css';
import { Button } from '../../Shared/Styles/s_buttons';

class LegacyDownload extends React.Component<any> {
	state = {
		loading: false,
		lumiaKey: '',
		confirmedKey: null,
		platform: 'win'
	}

	getDownload = () => {
		if(this.state.lumiaKey){
			axios.get(`https://legacy.api.lumiacove.com/api/update/redownload?lumiaKey=${this.state.lumiaKey}&platform=${this.state.platform}`)
				.then(res => {
						console.log("Found download", res);
						this.state.confirmedKey = res.data;
						this.download();
				}).catch(err => {
					console.log("Error redownloading", err);
					toast.error(`There was a problem with your request. Entered an incorrect key!`);
				})
		} else {
			toast.error(`There was a problem with your request. Entered an incorrect key!`);
		}
	};

	download = () => {
		let config = {
				headers: {'Access-Control-Allow-Origin': '*'}
		};
		console.log("Downloading Windows");
		window.open((this.state.confirmedKey), '_blank');
		
		toast.success(`Download started`);
	};
	
	render() {
		const { lumiaKey, confirmedKey, platform } = this.state;

		return (
			<div id="redownload-page" className="animated fadeIn">
				<h1 style={{ fontSize: '2rem', marginBottom: '40px' }}>Download Legacy Lumia</h1>
				{!confirmedKey
					? <div v-if="confirmedKey == null" className="redownload-input">
								<h4>Enter your Legacy Lumia Key</h4>
								<InputField className="input email" name='username' type='text' maxLength='40' value={lumiaKey} onChange={(e) => this.setState({ lumiaKey: e.target.value })} onKeyPress={(e) => e.key === 'Enter' && this.getDownload()} placeholder={'Lumia Key'} />
								{lumiaKey.length > 6
									&& 
											<SwitchRow style={{ marginTop: 0, marginBottom: '20px' }}>
												<SwitchButton style={{ width: '100px', marginRight: '10px' }} on={platform==='win'} name="win" onClick={() => this.setState({ platform: 'win' })}>Windows</SwitchButton>
												<SwitchButton style={{ width: '100px' }} on={platform==='mac'} name="mac" onClick={() => this.setState({ platform: 'mac' })}>Mac</SwitchButton>
											</SwitchRow>
								}
								
								<Button onClick={this.getDownload}>Submit</Button>
							</div>

					: <div>
							<div className="thanks">Thank you! <br/>Your download should start soon...</div>
							<div className="redownload" onClick={this.download}>
										if your download doesn't start: click here
							</div>
						</div>
				}
			</div>
		);
	}
}

export default withRouter(connect<any, any, any>(null, null)(LegacyDownload));
