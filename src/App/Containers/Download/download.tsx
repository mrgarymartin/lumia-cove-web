import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { signIn } from '../../Services/Actions/AuthActions';
import { DownloadPage, DownloadTitle, RedownloadText, ThanksText } from './s_download';
import LumiaRequest from '../../Shared/Helpers/LumiaRequest';
import { SwitchRow, SwitchButton } from '../Auth/s_auth';
import { toast } from 'react-toastify';

class Download extends React.Component<any, any> {
  state = {
    link: null,
		platform: null,
		error: null,
  };

  componentDidMount() {
		if (!this.props.auth.username || !this.props.auth.token) {
			this.props.history.push('/auth');
		}

		console.log('this.props.history: ', this.props.history);
		if (this.props.history.location.state && this.props.history.location.state.premium) {
			if (!this.props.auth.premium) {
				this.props.history.push('/buy');
			}
		}
  }

	chosePlatform = (platform: 'win' | 'mac') => {
		this.setState({ loading: true });
		this.setState({ platform });
		LumiaRequest.get(`update/download?applicationId=1&platform=${platform}`)
				.then((res: any) => {
					console.log('res: ', res);
					this.setState({ link: res.data.link, loading: false, error: null }, this.download);
				}).catch((err) => {
					console.log('err: ', err);
				});
	}

  download = () => {
		window.open(this.state.link, '_blank');
		toast.success(`Download started`);
  }

  render() {
		const { platform, link } = this.state;

      return (
        <DownloadPage>
					<Fragment>
						<DownloadTitle>Grab your download here</DownloadTitle>
						<div>Choose a platform</div>
						<SwitchRow style={{ marginTop: '25px' }}>
							<SwitchButton style={{ width: '100px' }} on={platform==='win'} name="win" onClick={() => this.chosePlatform('win')}>Windows</SwitchButton>
							<SwitchButton style={{ width: '100px' }} on={platform==='mac'} name="mac" onClick={() => this.chosePlatform('mac')}>Mac</SwitchButton>
						</SwitchRow>
					</Fragment>

					{platform &&
						<Fragment>
							<ThanksText style={{}}>Thank you for downloading</ThanksText>
							<RedownloadText className="redownload" onClick={this.download}>
									if your download doesn't start immediately click here
							</RedownloadText>
						</Fragment>
					}
        </DownloadPage>
      );
    }
}

const mapState = (state) => {
	const copyState = ({
		auth: state.auth,
	});
	return copyState;
};

export default withRouter(connect<any, any, any>(mapState, null)(Download));
