import './HTMLElement/HTMLElement.js'

function Util() {
};

Util.newElement = function (type, attributes) {
	let e = document.createElement(type);
	if (attributes !== null && typeof attributes === 'object') {
		for (let key in attributes) {
			if (attributes.hasOwnProperty(key)) {
				e.setAttribute(key, attributes[key]);
			}
		}
	}
	return e;
};

Util.toStyleString = function (obj) {
	var output = null;
	try {
		output = '';
		for (let key in (obj || {})) {
			output += (output ? ' ' : '') + key + ':' + obj[key] + ';';
		}
	} catch (error) {
		throw new Error("error caught @ toStyleString(" + obj + "): " + error);
	}
	return output;
};

Util.downloadAsCsv = function (jsonData = null, fileName = 'data.csv', delimiter = ',') {
	try {
		if (jsonData) {

			var jsonToCsv = function (jsonData) {
				let csv = '';
				let headers = Object.keys(jsonData[0]).sort((a, b) => { return a.localeCompare(b); });
				// Add the data
				jsonData.forEach(function (row) {
					let data = headers.map(header => JSON.stringify(row[header])).join(delimiter);
					csv += (csv == '' ? '' : '\n') + data;
				});
				// Get the headers
				csv = headers.join(delimiter) + '\n' + csv;
				return csv;
			}

			// Convert JSON data to CSV
			let csvData = jsonToCsv(jsonData);
			// Create a CSV file and allow the user to download it
			let blob = new Blob([csvData], { type: 'text/csv' });
			let url = window.URL.createObjectURL(blob);
			let a = document.createElement('a');
			a.href = url;
			a.download = fileName;
			document.body.appendChild(a);
			a.click();
			// Clean up
			document.body.removeChild(a);
			window.URL.revokeObjectURL(url);

		}
	} catch (error) {
		throw new Error("error caught @ downloadAsCsv: " + error);
	}
}

Util.clone = function (input) {
	if (Array.isArray(input)) {
		return input.map(Util.clone);
	} else if (typeof input === 'object' && input !== null) {
		if (input instanceof Node) {
			return input;
		}
		let output = {};
		for (let key in input) {
			if (input.hasOwnProperty(key)) {
				output[key] = Util.clone(input[key]);
			}
		}
		return output;
	} else {
		return input;
	}
}

Util.openBlob = function (blob) {
	let url = null;
	try {
		url = URL.createObjectURL(blob);
		window.open(url, '_blank');
	} catch (error) {
		console.error('Error opening blob:', error);
	} finally {
		if (url) {
			URL.revokeObjectURL(url);
		}
	}
}

Util.downloadBlob = function (blob, filename = 'filename') {
	let url = null;
	try {
		url = URL.createObjectURL(blob);
		let a = document.createElement('a');
		a.href = url;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		a.remove();
	} catch (error) {
		console.error('Error downloading blob:', error);
	} finally {
		if (url) {
			URL.revokeObjectURL(url);
		}
	}
}

export { Util };