class Random {
	constructor() {}
	getInfo() {
		return {
			id: 'Random',
			color1: '#FF8C1A',
			color2: 'DB6E00',
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
							default: 'https://r2509.github.io/home/index.html'
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
	async fetchData({type, url}) {
		let data = await fetch(url).then(response => {
		return {
			JSON: response.json(),
			text: response.text(),
		}[type]
		});
		return data;
	}
}
Scratch.extensions.register(new Random());
