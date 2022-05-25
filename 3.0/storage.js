function newLS() {
	localStorage.Scratch = {};
	localStorage.Scratch.LS = {
		version: '0.1.0',
		data: {},
	}
}


class LStorage {
	constructor(runtime) {
		this.runtime = runtime;
	}
	getInfo() {
		return {
			id: 'storage',
			name: 'Storage',
			blocks: [
				{
					opcode: 'getFromLS',
					blockType: 'reporter',
					text: 'get [key] from localStorage',
					arguments: {
						key: {
							type: 'string',
							defaultValue: 'foo'
						}
					}
				},
				{
					opcode: 'addToLS',
					blockType: 'command',
					text: 'set [key] of localStorage to [value]',
					arguments: {
						key: {
							type: 'string',
							defaultValue: 'foo'
						},
						value: {
							type: 'string',
							defaultValue: 'bar'
						}
					}
				}
			]
		}
	};
	getFromLS({key}) {
		if (localStorage.Scratch.LS.data) {
			if (localStorage.Scratch.LS.data[key]) {
				return localStorage.Scratch.LS.data[key];
			} else {
				return '';
			}
		} else {
			newLS()
		}
	};
	addToLS({key, value}) {
		if (localStorage.Scratch.LS.data) {
			localStroage.Scratch.LS.data[key] = value;
		} else {
			newLS()
		}
	}
};
Scratch.extensions.register(new LStorage());
