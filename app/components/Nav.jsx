var React= require('react');
var {Link,IndexLink} = require('react-router');

var Nav = React.createClass({

	onSearch: function(e){
		e.preventDefault();
		
		var search = this.refs.city.value;
		//alert(search);
		if(search.length>0){
		window.location.hash= '#/?location='+search;
		this.refs.city.value='';
		}
	},
	render: function (){
	return (
		<div className="top-bar navegation">
			<div className= "top-bar-left ">
				<ul className="menu">
					<li className="menu-text navegation">
						WeatherMap App
					</li>
					<li className="navegation">
						<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Get Weather </IndexLink>
					</li>
					<li className="navegation">
						<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> examples</Link>
					</li>
					<li className="navegation">
						<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> about</Link>
					</li>
					<li className="navegation" >
					    <Link to="/Mariandrea" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Mariandrea Maldonado</Link>
					</li>
				</ul>
			</div>
			<div className="top-bar-right navegation">
				<form onSubmit={this.onSearch}>
					  <ul className="menu navegation">
					     <li className="navegation">
					     	<input type="search" ref="city" placeholder="Search"/>
					     </li>
					     <li className="navegation">
					     	<button type="submit" className="button">Search</button>
					     </li>
					  </ul>
				</form>
			</div>
		</div>
	);}
});
module.exports=Nav;

//plantilla de navegacion de fundation
/*
<div class="top-bar">
  <div class="top-bar-left">
    <ul class="dropdown menu" data-dropdown-menu>
      <li class="menu-text">Site Title</li>
      <li>
        <a href="#">One</a>
        <ul class="menu vertical">
          <li><a href="#">One</a></li>
          <li><a href="#">Two</a></li>
          <li><a href="#">Three</a></li>
        </ul>
      </li>
      <li><a href="#">Two</a></li>
      <li><a href="#">Three</a></li>
    </ul>
  </div>
  <div class="top-bar-right">
    <ul class="menu">
      <li><input type="search" placeholder="Search"></li>
      <li><button type="button" class="button">Search</button></li>
    </ul>
  </div>
</div>
*/