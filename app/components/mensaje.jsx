var React= require('react');

var mensaje = ({contador,entrada,temp})=>{
	return(
			<div>
				<h3 className="text-center">City: {entrada} </h3>
				<h3 className="text-center">Temp: {temp} °C</h3>
				
			</div>
		);						
}
module.exports = mensaje;
