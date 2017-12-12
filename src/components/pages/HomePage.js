import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const HomePage = ({ isAuthenticated }) => (
  <div>
   <h1>Home Page</h1>
   	{ 	isAuthenticated ? 
   		<Link to="/login" >Logout</Link>
  		:
  		<Link to="/login" >Login</Link>
  	}
  </div>
);


HomePage.propTypes =	{
	isAuthenticated	: PropTypes.bool.isRequired
}


function mapStateToProps(state){
	return {
		isAuthenticated: !!state.user.token
	}
}

export default connect(mapStateToProps)(HomePage);
