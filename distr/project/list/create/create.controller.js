createCtr.$inject = ['http', 'helper']

function createCtr(http, helper){
	let self = this,
		d = new Date(),
		month = d.getMonth() + 1,
		date = d.getDate(),
		year = d.getFullYear(),
		day = d.getDay();
		self.data = {};

	self.save  = e=>{
		http.postAll(['/lists'], self.data, res=>{
			if(res.status == 201)
				helper.alert({
					title: 'You create new list!',
					state: 'main.app'
				});
			else 
				helper.alert({
					title: 'something wrong! 500 err'
				});
		});

	}
	
}

export default createCtr;
