var React = require('react');
var {Link}= require('react-router');

var Examples = () => { 
	return(
		<div>
			<h1 className="text-center">Examples</h1>
			<p>here are a few examples locations to try out:</p>
			<ol>
				<li>
					<Link to='/?location=philadelphia'>Philadelphia,PA</Link>
				</li>
				<li>
					<Link to='/?location=caracas'>Caracas,VE</Link>
				</li>
			</ol>
		</div>
	);	
}
 
module.exports= Examples;
