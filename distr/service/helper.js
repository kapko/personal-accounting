helperCtr.$inject = ['$mdDialog', '$state', 'http', '$rootScope']

function helperCtr($mdDialog, $state, http, $rootScope){
	const limit = 30,
		currentPage = 1,
		pageSize = 10,
		// _biz = window.API_STATE.business.id,
		date = new Date(),  
		times = [date.getDate(), date.getMonth() + 1 ],
		values = [];
		
	// get_start_date
	times.map(item=>{
		values.push(item.toString().replace( /^([0-9])$/, '0$1' ));
	})
	var today = date.getFullYear() + '-' + values[ 1 ] + '-' + values[ 0 ];


	var colors = [
	    {name: '7aade6'},
        {name: '72d1ea'},
        {name: '71e5bc'},
        {name: 'abe58c'},
        {name: 'e2d287'},
        {name: 'e3a279'},
        {name: 'e57878'},
        {name: 'eb8ac6'},
        {name: 'd890e9'},
	]
	var periods = [
		{
			value: 'weeks',
			season: 'weeks',
			name: 'visit(s) in a week'
		},
		{
			value: 'months',
			season: 'months',
			name: 'visit(s) in a months'
		},
		{
			value: 'year',
			season: 'year',
			name: 'visit(s) in a year'
		}
	];
	
	var question_type = [ 
		{
			id: 1,
			name: 'text',
		},
		{
			id: 2,
			name: 'paragraph'
		},
		{
			id: 3,
			name: 'address'
		},
		{
			id: 4,
			name: 'date'
		},
		{
			id: 5,
			name: 'checkbox'
		},
		{
			id: 6,
			name: 'terms-and-conditions'
		}
	];

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
			$mdDialog.show(
		      $mdDialog.alert()
		        .clickOutsideToClose(true)
		        .textContent(title)
		        .ok('ok')
		    ).finally(function() {
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


	function findError(data){
		var error = {};
		Object.keys(data)
		.map(key=>{
			error[key] = true;
		});
		return error;
	}

	function paginationFn({dataLength, index, callB, limitItem}){
    	if(index == dataLength / pageSize){
    		callB(limitItem + limit);
    	}
    }

    function getAllListings(callB){
		http.getAll(['biz_', _biz, '/listings'], res=>{
			return callB(res);
		})
	}

    function fileCrop(e, call) {
        var file = e.currentTarget.files[0],
            reader = new FileReader();

        reader.onload = e=> {
            $rootScope.$apply($rootScope=>{
                return call(e.target.result);
            });
        };
        
        reader.readAsDataURL(file);
    }

    function getIds(someData, keep){
        someData.map(item=>{
            keep.push(item.id);
        })
    }

    // get_format_of_date
	function getFormat(date) {
	    var d = new Date(date),
	        month = '' + (d.getMonth() + 1),
	        day = '' + d.getDate(),
	        year = d.getFullYear();

	    if (month.length < 2) month = '0' + month;
	    if (day.length < 2) day = '0' + day;

	    return [year, month, day].join('-');
	}
	
	var data = {
		currentPage,
		pageSize,
		periods,
		alert,
		findError,
		limit,
		paginationFn,
		getAllListings,
		question_type,
		fileCrop,
		colors,
		getIds,
		today,
		getFormat,
	}

	return data;
}

export default helperCtr;
