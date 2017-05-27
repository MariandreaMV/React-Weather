var React = require('react');
var CapEventos= require('./CapEventos');
var Mensaje = require('./mensaje');
var openWeatherMap = require ('openWeatherMap');

var Weather = React.createClass({
/*
	getDefaultProps: function(){
		return{
			ciudad: '',
			temp:2,
			contador:0
		}
		
	},*/

	/*getInitialState: function(){
		return{
			ciudad: this.props.ciudad,
			temp:this.props.temp,
			contador:this.props.contador
		}
	},*/

	getInitialState: function(){
		return{
			isLoading: true,
			contador:0,
			cityNotFound:false
			
		}
	},

	RefrescaCiudad:function(ciudad,contador){
		
		var that =this;

		this.setState({ isLoading:true, cityNotFound:false})

		openWeatherMap.getTemp(ciudad).then(function(temp){
			
			that.setState( {
			 ciudad: ciudad ,
			 temp: temp,
			 contador: contador,
			 isLoading: false
			});

		},function(errorMessage){

			that.setState({
				cityNotFound:true	
			});
			alert(errorMessage);

		});
	},

	render: function(){

		var ciudad=this.state.ciudad;
		var temp=this.state.temp;
		var contador=this.state.contador;
		var isLoading=this.state.isLoading;
		var cityNotFound=this.state.cityNotFound;
		debugger;
		function loading(){
			if(cityNotFound){
				return <h3>cityNotFound</h3>
			}
			if(!isLoading){
				return <Mensaje entrada={ciudad} temp={temp} contador={contador}/>
			}else{
				if(contador==0) {
					return <h3>ingresa ciudad</h3>
				}else{
					if(temp)
					return <h3>loading...</h3>
				}
			}
		}

		return(
			<div>
				<h3>Weather component </h3>
				<CapEventos NuevaCiudad={this.RefrescaCiudad} contador={contador}/>
				{loading()}
			</div>
			); 
	}
});

module.exports= Weather;
