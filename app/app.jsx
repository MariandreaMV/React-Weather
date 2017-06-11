var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require ('Weather');
var About = require('About');
var Examples= require('Examples');
var Mariandrea = require ('Mariandrea');

//load foundation
require ('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();
//styles css
require('style!css!estilosApp')

ReactDOM.render(<Router history={hashHistory}>
					<Route path= "/" component={Main}>
						<Route path= "examples" component={Examples}/>
						<Route path = "about" component={About}/>
						<Route path = "Mariandrea" component={Mariandrea}/>
						<IndexRoute component={Weather}/>
					</Route>
				</Router>, document.getElementById('app'));