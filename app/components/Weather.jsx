var React = require('react');
var CapEventos= require('./CapEventos');
var Mensaje = require('./mensaje');
var openWeatherMap = require ('openWeatherMap');
var ErrorModal = require('ErrorModal');

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
			isLoading: false,
			contador:0,
			cityNotFound:false
			
		}
	},

	RefrescaCiudad:function(ciudad,contador){
		
		var that =this;

		this.setState({ isLoading:true, cityNotFound:false, errorMessage:undefined});

		openWeatherMap.getTemp(ciudad).then(function(temp){
			that.setState( {
			 ciudad: ciudad ,
			 temp: temp,
			 contador: contador,
			 isLoading: false
			});
		},function(e){
			that.setState({
				cityNotFound:true,
				isLoading:false,
				errorMessage:e.message
			});
		});
	},

	render: function(){

		var ciudad=this.state.ciudad;
		var temp=this.state.temp;
		var contador=this.state.contador;
		var isLoading=this.state.isLoading;
		var cityNotFound=this.state.cityNotFound;
		var errorMessage=this.state.errorMessage;

		function loading(){
			//if(cityNotFound){
				//return <h3 className="text-center"> sorry city not found</h3>
			//	return <ErrorModal/>
		//	}
			if(isLoading){
				return <h3>loading...</h3>
			}else{
				if(temp&&ciudad) {
					return <Mensaje entrada={ciudad} temp={temp} contador={contador}/>
				}
			}
		}

		function renderModal(){
			if(typeof errorMessage==='string'){
				return(
					<ErrorModal message={errorMessage}/>
				)
			}
		}

		return(
			<div>
				<h1 className="text-center page-title">Get Weather </h1>
				<CapEventos NuevaCiudad={this.RefrescaCiudad} contador={contador}/>
				{loading()}
				{renderModal()}
			</div>
			); 
	}
});

module.exports= Weather;
