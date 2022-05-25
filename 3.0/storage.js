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
					menu: 'dynamicMenu'
				}
			}
		}
	]
}
	};
	getFromLS ({key}) {
		if (localStorage.Scratch.LS.data) {
			if (localStorage.Scratch.LS.data[key]) {
				return localStorage.Scratch.LS.data[key];
			} else {
				return '';
			}
		} else {
			localStorage.Scratch = {};
			localStorage.Scratch.LS = {
				version: '0.1.0',
				data: {},
			};
		}
	};
}
Scratch.extensions.register(new LStorage());
