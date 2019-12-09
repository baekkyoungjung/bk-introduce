export default class scrollEvents {
	constructor() {
		[
			'isSetActiveTable',
			'isSetTableFixed',
			// 'setDataToState',
		].forEach(method => {
			this[method] = this[method].bind(this);
		});

		this.portfolioArr = [
			'bk-dlo',
			'bk-soon',
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