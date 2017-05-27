var React= require('react');

var mensaje = ({contador,entrada,temp})=>{return(
												<div>
													<h1>cantidad de veces: {contador}</h1>
													<h1>ciudad: {entrada} </h1>
													<h2>temperatura: {temp}</h2>
												</div>
												);						
						}
module.exports = mensaje;
