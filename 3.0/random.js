class Random {
	constructor() {}
	getInfo() {
		return {
			"id": "Random",
			"name": "Random Blocks",
			"blocks": [
				{
					"opcode": "math_power",
					"blockType": "reporter",
					"text": "[num1] ^ [num2]",
					"arguments": {
						"num1": {
							"type": "number",
							"defaultValue": 5,
						},
						"num2": {
							"type": "number",
							"defaultValue": 2,
						},
					}
				},
				{
					"opcode": "fetchDat",
					"blockType": "reporter",
					"text": "fetch [type] response data from [url]",
					"arguments": {
						"url": {
							"type": "string",
							"defaultValue": "https://r2509.github.io/home/index.html",
						}
					}
				}
			],
			"menus": {
			}
		}
	}
	math_power ({a, b}) {
		return a ** b;
	}
	fetchDat({type, url}) {
		return fetch(url).then(response => {
			switch (type) {
				case "text":
					return response.text();
					break;
				case "JSON":
					return response.json();
					break;
			}
		})
	}
}
Scratch.extensions.register(new Random());
