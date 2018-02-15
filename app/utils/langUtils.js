import generalUtils from './generalUtils';

import langEn from './json/en.json';
import langDe from './json/de.json';
import langEs from './json/es.json';

const languages = {
	langEn,
	langDe,
	langEs,
};

const langUtils = {
	lang: generalUtils.getCookie('lang') ? languages[generalUtils.getCookie('lang')] : languages.langEn,
	changeLang(code) {
		langUtils.lang = languages[code];
		generalUtils.createCookie('lang', code, 30);
		langUtils.setContent();
	},
	setContent() {
		const elementsToUpdate = document.querySelectorAll('[lang]:not(html)');
		elementsToUpdate.forEach((element) => {
			const dom = element;
			dom.innerHTML = langUtils.lang[element.lang];
		});
	},
};

module.exports = langUtils;
