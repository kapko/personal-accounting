helperCtr.$inject = ['$mdDialog', '$state', 'http', '$rootScope']

function helperCtr($mdDialog, $state, http, $rootScope){
	// METHODS //
	function alert({type, title, state, callB}){
		switch(type){
			case 'confirm':
				confirmFn()
				break
			default: 
				defaultFn()
		}

		function defaultFn(){
			$mdDialog
			.show(
		    	$mdDialog
			      	.alert()
			        .clickOutsideToClose(true)
			        .textContent(title)
			        .ok('ok')
		    )
		    .finally(function() {
		    	if(state) {
		    		$state.go(state);
				} else if(callB){
					callB();
				}
	        });
		}

		function confirmFn(){
			let confirm = $mdDialog.confirm()
	            .textContent(title)
	            .ok('Yes')
	            .cancel('No');
	        $mdDialog.show(confirm).then(() => {
	       		callB();
            }, ()=>{
            	return null;
            });
		}
	}



	var data = {
		alert,
	}

	return data;
}

export default helperCtr;
