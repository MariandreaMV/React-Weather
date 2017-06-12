var axios = require('axios');

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=c367a403ad76141dd6556055e5f0d796&units=metric'

module.exports = {

	getTemp : function(location){

		var encodedLocation= encodeURIComponent(location);
		var construccionUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(construccionUrl).then(function(res){
				
				if(res.data.cod && res.data.message){
					//console.log(res);
					throw new Error (res.data.message);
				}else{
					return res.data.main.temp;
				}
			},function (res){
			//console.log(res);
				throw new Error (res.data.message);
			});
	}

}

//c367a403ad76141dd6556055e5f0d796