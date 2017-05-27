function promise(a,b){
	return new Promise(function(resolve,reject){
		if(typeof a==='number' && typeof b==='number'){
			resolve(a+b);
		}else{
			reject('no se pueden sumar');
		}	
	});
}

promise(9,2).then( function (suma){console.log('success. la suma es:', suma)} , function(err){console.log('promise error ',err)})