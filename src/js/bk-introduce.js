const w = window;
const d = document;

// event listener 함수 정리하자

w.onload = () => {
	// initTyped();
	window.postMessage('Post message from web');
	portFolioScrollEvt();
};

// const initTyped = () => {
// 	const options = {
// 		// strings: ["", "<span class='type-reserved-word'>const</span> <span class='type-variable'>amI</span> = <span class='type-variable'>'정백경'</span>; \n <span class='type-reserved-word'>let</span> <span class='type-variable'>whoIsHe</span> = <span class='type-variable'>'개발자'</span>; \n <span class='type-variable'>whoIsHe</span> = <span class='type-variable'>'이제 조금은 뭘 아는 프론트앤드 개발자';</span>"],
// 		strings: ["", "이  력  서", "정백경 \n \n이제 조금은 뭘 아는 \n프론트앤드 개발자"],
// 		typeSpeed: 70,
// 		startDelay: 1000,
// 	};
// 	const typed = new Typed("#bk-typed", options);
// };

const portFolioScrollEvt = () => {
	// const bodyHeight = d.body.scrollHeight;
	// const bkPortfolioHeight = bodyHeight - offset(d.getElementById('bk-portfolio')).height;
	const scrollEventsInstance = new scrollEvents();
	w.addEventListener('scroll', () => {
		if (window.innerWidth > 1200) {
			scrollEventsInstance.isSetTableFixed();
			scrollEventsInstance.isSetActiveTable();
		} else {
			d.getElementById('table-content').style.position = 'static';
		}
	});	
};

class scrollEvents {
	constructor() {
		[
			'isSetActiveTable',
			'isSetTableFixed',
			// 'setDataToState',
		].forEach(method => {
			this[method] = this[method].bind(this);
		});

		this.portfolioArr = [
			'bk-kmong',
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
		this.activeTable = this.portfolioArr[0];
		this.bkPortfolioHeight = d.getElementById('bk-portfolio').offsetTop;
		this.dataObj = {};
		this.portfolioArr.map((el, i) => {
			this.dataObj[el] = this.bkPortfolioHeight + (d.getElementById(el).offsetTop - (d.getElementById(el).offsetHeight / 3));
		});
	}

	// setDataToState(key, value) {
	// 	return this[key] = value;
	// }
	
	isSetActiveTable() {
		const goal = w.pageYOffset;
		const closestTable = Object.values(this.dataObj).reduce((prev, curr) => (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev));
		const newActiveTable = this.findKey(this.dataObj, closestTable);
		if (this.activeTable !== newActiveTable) {
			d.getElementById(`table-${this.activeTable}`).classList.remove('active');
			d.getElementById(`table-${newActiveTable}`).classList.add('active');
			this.activeTable = newActiveTable;
		}
	}
	
	isSetTableFixed() {
		if (w.pageYOffset > (this.bkPortfolioHeight)) {
			if (d.getElementById('table-content').classList.contains('table-fixed') === false) {
				d.getElementById('table-content').classList.remove('table-absolute');
				d.getElementById('table-content').classList.add('table-fixed');
			}
		} else if (d.getElementById('table-content').classList.contains('table-absolute') === false) {
			d.getElementById('table-content').classList.remove('table-fixed');
			d.getElementById('table-content').classList.add('table-absolute');
		}
	}
	
	findKey(obj, value) {
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
	}
}