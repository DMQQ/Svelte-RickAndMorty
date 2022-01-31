import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://rickandmortyapi.com/api'
});

export default {
	getAll: async <T>(): Promise<T> => {
		try {
			const { data } = await instance.get('/character');

			return data;
		} catch (error) {}
	},
	getWithUrl: async (url: string) => {
		try {
			const { data } = await axios.get(url);
			return data;
		} catch (error) {}
	},
	getByName: async (name: string) => {
		try {
			const { data } = await instance.get('/character/', {
				params: {
					name
				}
			});
			return data;
		} catch (error) {}
	}
};
