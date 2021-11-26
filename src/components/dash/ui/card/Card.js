export const Card = ({ title, descripcion, icon, path }) => {
	return (
		<div
			className="card"
			style={{
				width: '340px',
				borderTopLeftRadius: '20px',
				borderTopRightRadius: '20px',
				borderBottomRightRadius: '20px',
				borderBottomLeftRadius: '20px',
				boxShadow: '5px 5px 4px 1px white',
				border: '13px solid #e6e6e6',
			}}>
			<div className="card-body d-flex flex-column" style={{ height: '262px' }}>
				<div>
					<h4>
						{title} <i className={icon}></i>
					</h4>
					<h6 className="text-muted mb-2" style={{ fontFamily: '"Source Sans Pro", sans-serif', color: '#757575', fontWeight: 600 }}>
						{path}
					</h6>
					<p style={{ fontFamily: '"Source Sans Pro", sans-serif', color: '#212121', marginTop: '16px' }}>{descripcion}</p>
				</div>
				<a
					className="card-link align-self-end"
					data-bss-hover-animate="pulse"
					href="#"
					style={{
						padding: '4px',
						background: 'rgb(0 0 0)',
						color: 'rgb(255,255,255)',
						borderRadius: '17px',
						paddingRight: '14px',
						paddingLeft: '14px',
						paddingBottom: '6px',
						marginTop: 'auto',
						boxShadow: '2px 2px 16px 1px rgba(117,117,117,0.8)',
					}}>
					Ver mas
				</a>
			</div>
		</div>
	);
};
