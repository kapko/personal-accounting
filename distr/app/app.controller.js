appCtr.$inject = ['http', 'helper']

function appCtr(http, helper){
	let self = this;
		getLists();


	function getLists(){
		http.getAll(['/lists'], res=>{
			self.lists = res;
			self.total = res.reduce((a, b)=>{
				return a + b.price;
			}, 0);

		});
	}

	self.remove = e=>{
		helper.alert({
			title: 'Confirm delete this list',
			type: 'confirm',
			callB: function(){
				http.deleteId(['/lists/' + e._id], e, res => {
					if(res){
						getLists();
					}else{
						console.log('err 500!');
					}
				});
			}
		})
		
	}
}

export default appCtr;