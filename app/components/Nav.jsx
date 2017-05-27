var React= require('react');
var {Link,IndexLink} = require('react-router');

var Nav = () =>	{return (
						<div>
							<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Get Weather </IndexLink>
							<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> examples</Link>
							<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> about</Link>
						</div>
						);
				}
module.exports=Nav;