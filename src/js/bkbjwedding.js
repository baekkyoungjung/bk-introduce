const d = document;
const w = window;

w.onload = () => {
	// imgOnload();
	w.addEventListener('scroll', () => {
		if (w.pageYOffset + w.innerHeight >= d.body.scrollHeight) {
			d.getElementById('memories').style.top = `${w.innerHeight - 50}px`;
		} else {
			d.getElementById('memories').style.top = '100%';
		}
	});
	setTimeout(() => {
		d.getElementById('invite-says').classList.add('move-down');
	}, 1500);
};

// const promiseImgSrc = src => {
// 	return new Promise((resolve, reject) => {
// 		const tmpImg = new Image();
// 		tmpImg.onload = src => {
// 			resolve("ok");
// 		};
// 		tmpImg.src = src;
// 	});
// };
// const imgOnload = () => {
// 	const imgSrcArr = [
// 		'11.JPG',
// 		'22.jpg',
// 		'33.JPG',
// 		'44.JPG',
// 		'55.JPG',
// 		'66.JPG',
// 	];
// 	const promises = [];
// 	imgSrcArr.map((imgSrc, i) => {
// 		promises[i] = promiseImgSrc(`./public/imgs/memories/${imgSrc}`);
// 	});

// 	Promise.all(promises).then(function(values) {
// 	    console.log("모두 완료됨", values);
// 	}, function(reason) {
// 	    console.log("실패 이유", reason);
// 	});
// };

d.getElementById('memories-toggle-btn').addEventListener('click', () => {
	d.getElementById('wrapper').classList.toggle('memories-opened');
	if (d.getElementById('wrapper').className.indexOf('memories-opened') === -1) {
		w.scroll(0, d.body.scrollHeight);
	}
});

w.initMap = () => {
	const nuHouse = { lat: 37.515812, lng: 127.033657 };
	const map = new google.maps.Map(d.getElementById('map'), {
		zoom: 16,
		center: nuHouse,
		draggable: false,
		scrollwheel: false,
		disableDoubleClickZoom: true,
		zoomControl: false,
		mapTypeControl: false,
		scaleControl: false,
		rotateControl: false,
		fullscreenControl: false,
	});
	const marker = new google.maps.Marker({
		position: nuHouse,
		map,
		draggable: false,
		animation: google.maps.Animation.DROP,
	});
	const toggleBounce = () => {
		if (marker.getAnimation() !== null) {
			marker.setAnimation(null);
		} else {
			marker.setAnimation(google.maps.Animation.BOUNCE);
		}
	};
    marker.addListener('click', toggleBounce);
};