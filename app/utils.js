function getFormData(form) {
	const formData = new FormData(form);
	const body = {};
	for (let pair of formData.entries()) {
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

const service = {
	getFormData,
	postData
};

module.exports = service;