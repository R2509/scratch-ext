class Things {
	constructor () {}
	getInfo () {
		return {
			id: 'Things',
			name: 'Things',
			blocks: [
				{
					opcode: 'substring',
					blockType: 'reporter',
					text: 'substring of [str] from [i1] to [i2]',
					arguments: {
						str: {
							type: 'string',
							defaultValue: 'Hello world!'
						},
						i1: {
							type: 'number',
							defaultValue: 7
						},
						i2: {
							type: 'number',
							defaultValue: 13
						}
					},
				},
			]
		}
	}
	
	substring ({str, i1, i2}) {
		return str.substring(i1+1, i2+2);
	}
}

Scratch.extensions.register(new Things())
