import './index.scss';
import utils from './utils';

class App {
	constructor() {
		this.handleAgeOnInput = this.handleAgeOnInput.bind(this);
		this.handleHeightOnInput = this.handleHeightOnInput.bind(this);
		this.handleHairLengthChange = this.handleHairLengthChange.bind(this);
		this.handleBeardChange = this.handleBeardChange.bind(this);
		this.handleBodyChange = this.handleBodyChange.bind(this);
		window.addEventListener('load', this.onWindowLoad, false);
	}
	onWindowLoad() {
		this.form = document.getElementById("myForm");
		this.form.addEventListener('submit', (event) => {
			event.preventDefault();
			// request goes here
			// utils.postData('result', utils.getFormData(this.form)).then(res => console.log(res));

		});
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
		document.querySelectorAll('.hairLength label').forEach(dom => {
			dom.className = '';
			if (dom.innerHTML === value) {
				dom.className = 'checked';
			}
		});
	}
	handleBeardChange(e) {
		const { value } = e.target;
		document.querySelectorAll('.beard label').forEach(dom => {
			dom.className = '';
			if (dom.id.includes(value)) {
				dom.className = 'checked';
			}
		});
	}
	handleBodyChange(e) {
		const { value } = e.target;
		document.querySelectorAll('.body label').forEach(dom => {
			dom.className = '';
			if (dom.id.includes(value)) {
				dom.className = 'checked';
			}
		});
	}
}

export default new App();
