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
						"type": {
							"type": "string",
							"menu": "fetchTypeMenu",
						},
						"url": {
							"type": "string",
							"defaultValue": "https://r2509.github.io/home/index.html",
						}
					}
				},
				{
					"opcode": "search",
					"blockType": "reporter",
					"text": "search for [text]",
					
				}
			],
			"menus": {
				"fetchTypeMenu": {
					"acceptReporters": "true",
					"items": ["(1) text", "(2) JSON"],
				},
			}
		}
	}
	math_power ({num1, num2}) {
		return num1 ** num2;
	}
	fetchDat({type, url}) {
		type = type.toString();
		return fetch(url).then(response => {
			switch (type) {
				case "(1) text":
				case "1":
					return response.text();
					break;
				case "(2) JSON":
				case "2":
					return response.json();
					break;
			}
		})
	}
}
Scratch.extensions.register(new Random());
