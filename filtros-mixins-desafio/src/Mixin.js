export default {
	filters: {
		space(str) {
			const arr = str.split(' ')
			return arr.join(',')
		}
	}
}