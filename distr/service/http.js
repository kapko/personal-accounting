httpService.$inject = ['$http']
function httpService($http){
	let api = 'http://localhost:3030/api',
		data = {
			getAll,
			deleteId,
			postAll,
		};

	return data;


	function getAll(ex, cb){
		var url = ex.reduce((a, b)=>{
			return a + b;
		}, api);

		$http.get(url).then(res=>{
			return cb(res.data);
		}, res=>{
			return cb(res);
		})
	}

	function deleteId(ex, val, cb){
		var url = ex.reduce((a, b)=>{
			return a + b;
		}, api);


		$http.delete(url, val).then(res=>{
			return cb(res);
		}, res=>{
			return cb(res);
		});
	}

	function postAll(ex, val, cb){
		var url = ex.reduce((a, b)=>{
			return a + b;
		}, api);


		$http.post(url, val).then(res=>{
			return cb(res);
		});
	}

}

export default httpService;

