import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { VideoListPage, VideoListContain, VideoBox, VideoTitle } from './s_video-list';
import './s_video-list.css';

let videoJson = require('./videos.json');

class VideoList extends Component<any> {
	state = {
		count: 0,
		totalCount: videoJson.length,
		videoList: [],
		grabbingMoreVideos: true,
	}

	componentWillMount() {
		this.grabVideos();
		window.addEventListener('scroll', this.handleScroll, { passive: true });
	}

	grabVideos = () => {
		this.setState({ grabbingMoreVideos: true });
		const currentCount = this.state.count;
		if (currentCount < this.state.totalCount) {
			const nextCount = currentCount + 10;
			let newVideos = videoJson.filter((_, index) => index >= currentCount && index < nextCount);
			const currentVideos = [ ...this.state.videoList, ...newVideos ];
			this.setState({ count: nextCount, videoList: currentVideos, grabbingMoreVideos: false });
		}
	}

	handleScroll = (event) => {
		if (!this.state.grabbingMoreVideos && (window.innerHeight + window.pageYOffset) >= (document.body.offsetHeight - (document.body.offsetHeight * .20))) {
				this.grabVideos();
    }
  }

	render() {
		const { videoList } = this.state;

		return (
			<VideoListPage>
				<div className="page-title">Videos</div>
				<div className="page-subtitle">
					Submit your videos on our <a className="link" target="_blank" href="https://discord.gg/D5xywEN">Discord</a>
				</div>
				<hr className="page-title-border" />

        <VideoListContain>
					{videoList.map((video) => {
						const siteLink = video.site === 'twitch'
							? `https://www.twitch.tv/${video.username}`
							: video.site === 'mixer'
								? `https://mixer.com/${video.username}`
								: `https://www.twitch.tv/${video.username}`;

						return <VideoBox key={video.title}>
							<VideoTitle>
								{video.title} by <a className="link" target="_blank" href={siteLink}>{video.username}</a>
							</VideoTitle>
							{video.videoType === 'iframe'
								? <iframe width="80%" height="80%" src={video.path} frameBorder="0" allowFullScreen></iframe>
								: <video width="80%" height="80%" controls>
										<source src={`assets/video/${video.path}`} type="video/mp4" />
									</video>
							}
            </VideoBox>
					})}
        </VideoListContain>
			</VideoListPage>
		);
	}
}

export default withRouter(connect<any, any, any>(null, null)(VideoList));
