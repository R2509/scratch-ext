class Random {
	constructor() {}
	getInfo() {
		return {
			id: 'Random',
			name: 'Random Blocks',
			blocks: [
				{
					opcode: 'math_power',
					blockType: 'reporter',
					text: '[A] ^ [B]',
					arguments: {
						A: {
							type: 'number',
							default: 5,
						},
						B: {
							type: 'number',
							default: 2,
						},
					}
				},
				{
					opcode: 'fetchData',
					blockType: 'reporter',
					text: 'fetch [TYPE] response data from [URL]',
					arguments: {
						TYPE: {
							type: 'string',
							menu: 'fetchTypeMenu',
						},
						URL: {
							type: 'string',
							defaultValue: 'https://r2509.github.io/home/index.html'
						}
					}
				}
			],
			menus: {
				fetchTypeMenu: {
					items: ['JSON', 'text'],
				}
			}
		}
	}
	math_power ({a, b}) {
		return a ** b;
	}
	fetchData({type, url}) {
		return fetch(url).then(response => response.text());
	}
}
Scratch.extensions.register(new Random());
