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
					"text": "get [key] from localStora0ge",
					"arguments": {
						"key": {
							"type": "string",
							"menu": "localStorageKeys",
						},
					},
				},
			],
			"menus": {
				"localStorageKeys": {
					"acceptReporters": "true",
					"items": "getLocalStorageKeys",
				},
			},
		}
	}
	getLocalStorageKeys() {
		return ['d1', 'd2'];
	}
	getFromLS ({key}) {
		return '';
	}
}
Scratch.extensions.register(new LStorage());
