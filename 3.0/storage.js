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
					"items": "getDynamicMenuItems",
				},
			},
		};
	};
	getDynamicMenuItems () {
		return ['d1', 'd2', 5];
	};
	getFromLS ({thingzy}) {
		return 'hehe';
	};
}
Scratch.extensions.register(new LStorage());
