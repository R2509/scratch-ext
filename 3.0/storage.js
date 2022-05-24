class LStorage {
	constructor() {}
	getInfo() {
		return {
			"id": "storage",
			"name": "Storage",
			"blocks": [
				{
					"opcode": "getFromLS",
					"blockType": "reporter",
					"text": "get [key] from localStorage",
					"arguments": {
						"key": {
							"type": "string",
							"menu": "localStorageKeys",
						}
					},
				},
			],
			"menus": {
				"localStorageKeys": {
					"acceptReporters": "true",
					"items": "getLocalStorageKeys",
				},
			}
		}
	}
	getLocalStorageKeys() {
		return Object.keys(localStorage);
	}
	getFromLS () {
		return '';
	}
}
Scratch.extensions.register(new LStorage());
