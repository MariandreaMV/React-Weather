var React= require('react');

var mensaje = ({contador,entrada,temp})=>{
	return(
			<div>
				<h3 className="text-center">ciudad: {entrada} </h3>
				<h3 className="text-center">temperatura: {temp}</h3>
				<p className="text-center">intentos: {contador}</p>
			</div>
		);						
}
module.exports = mensaje;
