import NotificationIco from '../../../../assets/img/svg/notification.svg';

export const Notification = ({ time, title, message, image = NotificationIco }) => {
	return (
		<div className="mb-2">
			<a className="dropdown-item border-radius-md">
				<div className="d-flex py-1">
					<div className="my-auto">
						<img className="avatar avatar-sm me-3" src={image} />
					</div>
					<div className="d-flex flex-column justify-content-center">
						<h6 className="text-sm font-weight-normal mb-1">
							<span className="font-weight-bold">
								{title}
								<br />
							</span>
							{message}
						</h6>
						<p className="text-xs text-secondary mb-0">
							<i className="fa fa-clock-o" />
							{time}
						</p>
					</div>
				</div>
			</a>
		</div>
	);
};
