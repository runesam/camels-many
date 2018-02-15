function getFormData(form) {
	const formData = new FormData(form);
	const body = {};
	for (const pair of formData.entries()) {
		body[pair[0]] = pair[1];
	}
	return body;
}

async function postData(uri, data, fetch) {
	const Fetch = fetch || window.fetch;
	const URL = `http://kamelrechner.de/en/${uri}`;
	try {
		const promise = await Fetch(URL, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		return await promise.json();
	} catch (reason) {
		return reason;
	}
}

function figureValueOut(arr, val) {
	return arr.findIndex(item => item === val) + 1;
}

function someCalc(data) {
	const values = {
		age: parseInt(data.age, 10),
		height: parseInt(data.height, 10),
		hairColor: figureValueOut(['blond', 'brown', 'black', 'red', 'gray'], data.hairColor),
		hair: figureValueOut(['long', 'middle', 'short', 'bold'], data.hair),
		eyeColor: figureValueOut(['blue', 'green', 'brown', 'gray'], data.eyeColor),
		beard: figureValueOut(['none', 'small', 'middle', 'large'], data.beard),
		body: figureValueOut(['muscle', 'normal', 'chubby'], data.beard),
	};
	return Object.keys(values).reduce((a, i) => {
		let newA = a;
		newA += values[i];
		return newA;
	}, 0);
}

function handleShowResult(data) {
	const value = someCalc(data);
	document.querySelector('form').style.display = 'none';
	document.querySelector('.result').style.display = 'block';
	const countElement = document.querySelector('#count');
	for (let i = 0; i <= value; i += 1) {
		setTimeout(() => {
			countElement.innerHTML = i;
		}, i * 20);
	}
}

function getCookie(name) {
	const re = new RegExp(`${name}=([^;]+)`);
	const value = process.browser ? re.exec(document.cookie) : '';
	return (value != null) ? unescape(value[1]) : null;
}

function createCookie(name, value, days) {
	let expires = '';
	if (days) {
		const date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = `; expires=${date.toUTCString()}`;
	}
	if (process.browser) {
		document.cookie = `${name}=${value}${expires}; path=/`;
	}
}

const service = {
	getFormData,
	postData,
	handleShowResult,
	getCookie,
	createCookie,
};

module.exports = service;
