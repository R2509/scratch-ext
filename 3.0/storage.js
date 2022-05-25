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
							"menu": "dynamicMenu",
						},
					},
				},
			],
			menus: {
				staticMenu: {
					items: ['static 1', 'static 2', 'static 3']
				},
				dynamicMenu: {
					items: 'getDynamicMenuItems'
				}
			},
		};
	};
	// this member function will be called each time the menu opens
	getDynamicMenuItems () {
		return ['dynamic 1', 'dynamic 2', 'dynamic 3'];
	}
	getFromLS ({thingzy}) {
		return 'hehe';
	};
}
Scratch.extensions.register(new LStorage());
