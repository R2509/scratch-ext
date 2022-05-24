class Storage {
	constructor() {}
	getInfo() {
		return {
			"id": "storage",
			"name": "Storage",
			"blocks": [
				{
					"opcode": "get",
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
		return Object.keys(localStorage)
	}
}
Scratch.extensions.register(new Random());
