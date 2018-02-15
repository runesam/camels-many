import './index.scss';
import generalUtils from './utils/generalUtils';
import langUtils from './utils/langUtils';

class App {
	constructor() {
		this.handleAgeOnInput = this.handleAgeOnInput.bind(this);
		this.handleHeightOnInput = this.handleHeightOnInput.bind(this);
		this.handleHairLengthChange = this.handleHairLengthChange.bind(this);
		this.handleBeardChange = this.handleBeardChange.bind(this);
		this.handleBodyChange = this.handleBodyChange.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.handleChangeLang = this.handleChangeLang.bind(this);
		window.addEventListener('load', this.onWindowLoad.bind(this), false);
	}

	onWindowLoad() {
		this.form = document.getElementById('myForm');
		langUtils.setContent();
		if (this.form) {
			this.form.addEventListener('submit', (event) => {
				event.preventDefault();
				const body = generalUtils.getFormData(this.form);
				console.log(body);
				// request goes here
				// generalUtils.postData('result', body).then(res => console.log(res));
				generalUtils.handleShowResult(body);
			});
		}
	}

	handleAgeOnInput(e) {
		const { value } = e.target;
		const ageNumber = document.querySelector('.ageNumber');
		ageNumber.innerHTML = value;
	}

	handleHeightOnInput(e) {
		const { value } = e.target;
		const heightNumber = document.querySelector('.heightNumber');
		heightNumber.innerHTML = value;
	}

	handleHairLengthChange(e) {
		const { value } = e.target;
		document.querySelectorAll('.hairLength label').forEach((dom) => {
			const element = dom;
			element.className = '';
			if (element.innerHTML === value) {
				element.className = 'checked';
			}
		});
	}

	handleBeardChange(e) {
		const { value } = e.target;
		document.querySelectorAll('.beard label').forEach((dom) => {
			const element = dom;
			element.className = '';
			if (element.id.includes(value)) {
				element.className = 'checked';
			}
		});
	}

	handleBodyChange(e) {
		const { value } = e.target;
		document.querySelectorAll('.body label').forEach((dom) => {
			const element = dom;
			element.className = '';
			if (element.id.includes(value)) {
				element.className = 'checked';
			}
		});
	}

	handleReset() {
		this.form.style.display = 'block';
		document.querySelector('.result').style.display = 'none';
	}

	handleChangeLang(code) {
		langUtils.changeLang(code);
	}
}

export default new App();
