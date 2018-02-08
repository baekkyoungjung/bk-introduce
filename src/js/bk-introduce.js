const w = window;
const d = document;
w.onload = () => {
	const options = {
		// strings: ["", "<span class='type-reserved-word'>const</span> <span class='type-variable'>amI</span> = <span class='type-variable'>'정백경'</span>; \n <span class='type-reserved-word'>let</span> <span class='type-variable'>whoIsHe</span> = <span class='type-variable'>'개발자'</span>; \n <span class='type-variable'>whoIsHe</span> = <span class='type-variable'>'이제 조금은 뭘 아는 프론트앤드 개발자';</span>"],
		strings: ["", "이  력  서", "정백경 \n \n이제 조금은 뭘 아는 \n프론트앤드 개발자"],
		typeSpeed: 70,
		startDelay: 1000,
	};
	const typed = new Typed("#bk-typed", options);
	portFolioScrollEvt();
};

const offset = el => {
	// if (typeof el === 'undefined') {
	// }
	const rect = el.getBoundingClientRect();
	const bodyElt = d.body;

	return {
	  top: rect.top + bodyElt .scrollTop,
	  left: rect.left + bodyElt .scrollLeft,
	  height: rect.height,
	  width: rect.width,
	}
};

const portFolioScrollEvt = () => {
	// const bodyHeight = d.body.scrollHeight;
	// const bkPortfolioHeight = bodyHeight - offset(d.getElementById('bk-portfolio')).height;
	const bkPortfolioHeight = d.getElementById('bk-portfolio').offsetTop;
	const dataObj = {};
	const portfolioArr = [
		'bk-tyle',
		'bk-invite-bk-bj',
		'bk-introduce',
		'bk-joongo',
		'bk-ckoverflow',
		'bk-key',
		'bk-interview',
		'bk-interview-b',
		'bk-movie',
	];
	portfolioArr.map((el, i) => {
		dataObj[el] = bkPortfolioHeight + d.getElementById(el).offsetTop;
	});
	let activeTable = portfolioArr[0];

	w.addEventListener('scroll', () => {
		if (d.documentElement.classList.contains('no-touch') && !Modernizr.touch && window.innerWidth > 1200) {
			isSetTableFixed();
			isSetActiveTable();
		} else {
			d.getElementById('table-content').style.position = 'static';
		}
	});
	const isSetActiveTable = () => {
		const goal = w.pageYOffset;
		const closestTable = Object.values(dataObj).reduce((prev, curr) => (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev));
		const newActiveTable = findKey(dataObj, closestTable);
		if (activeTable !== newActiveTable) {
			d.getElementById(`table-${activeTable}`).classList.remove('active');
			d.getElementById(`table-${newActiveTable}`).classList.add('active');
			activeTable = newActiveTable;
		}
	};
	const isSetTableFixed = () => {
		if (w.pageYOffset > (bkPortfolioHeight)) {
			if (d.getElementById('table-content').style.position !== 'fixed') {
				d.getElementById('table-content').style.position = 'fixed';
			}
		} else if (d.getElementById('table-content').style.position !== 'absolute') {
			d.getElementById('table-content').style.position = 'absolute';
		}
	};

	const findKey = (obj, value) => {
		let key = null;
		let prop = '';
		for (prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				if (obj[prop] === value) {
					key = prop;
				}
			}
		}
		return key;
	};






};