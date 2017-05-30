var React= require('react');

var CapEventos=React.createClass(
{
	capturaNombre: function(e){

		e.preventDefault();
		var nombre= this.refs.nombre.value;
		var contador=this.props.contador;

		if (nombre.length>0){
			this.refs.nombre.value='';
			contador=contador+1;
			this.props.NuevaCiudad(nombre,contador);
		}else{
			alert("no ingreso nada");
		}
	},

	render: function(){
		return(
			<form onSubmit={this.capturaNombre} >
				<div >
					<input type="text" ref="nombre" placeholder="ingrese aqui..."/>
				</div>
				<div>	
					<button className="hollow button expanded" href="#">cargar </button>
				</div>
			</form>
			);
	}
});

module.exports= CapEventos;

/*
<form>
  <div class="row">
    <div class="medium-6 columns">
      <label>Input Label
        <input type="text" placeholder=".medium-6.columns">
      </label>
    </div>
    <div class="medium-6 columns">
      <label>Input Label
        <input type="text" placeholder=".medium-6.columns">
      </label>
    </div>
  </div>
</form>

*/