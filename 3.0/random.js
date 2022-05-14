class Random {
	constructor () {}
	getInfo() {
		return {
			id: 'Random',
			name: 'Random Blocks',
			blocks: [
				{
					opcode: 'math_power',
					blockType: 'reporter',
					text: '[A] ^ [B]',
				}
			],
		}
	}
	math_power ({a, b}) {
		return a ** b;
	}
}
Scratch.extensions.register(new Random());
