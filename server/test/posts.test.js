const axios = require('axios');

test('Should get posts', async () => {
	const response = await axios({
		url: 'http://localhost:3000/posts',
		method: 'GET'
	});
	const posts = response.data;
	console.log(posts)
	expect(posts).toHaveLength(2);

})