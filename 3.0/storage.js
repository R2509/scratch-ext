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
					"text": "get [thingzy] from localStora0ge",
					"arguments": {
						"thingzy": {
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
	getFromLS ({thingzy}) {
		return '';
	}
}
Scratch.extensions.register(new LStorage());
