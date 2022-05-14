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
				}
			],
		}
	}
	math_power ({a, b}) {
		return a ** b;
	}
}
Scratch.extensions.register(new Random());
