import React, { Component }  from 'react';
import { Link } from 'react-router-dom';

export default class LoginForm extends Component{
  render() {
    return (
        <div className="contain-area">
	        <div className="container">
		        <div className="row">
			        <div className="col-md-4"></div>
			            <div className="col-md-4">
				            <div className="panel panel-default login-area1">
					            <div className="panel-heading">
						            <h3 className="panel-title">Login</h3>
					            </div>
					            <div className="panel-body">
						        <form accept-charset="UTF-8" role="form">
							        <fieldset>
								    <div className="form-group">
									    <input className="form-control" placeholder="Mobile / Email Address" name="email" type="text" />
									</div>
									<div className="form-group">
										<input className="form-control" placeholder="Password" name="password" type="password" />
                                    </div>
                                    <div className="checkbox1">
                                        <label> Don't have an account? <Link to="/register">Create one</Link> </label>
                                    </div>
                                    <input className="btn btn-lg btn-success btn-block" type="submit" value="Submit" />
                                    <div className="checkbox1"> 
                                        <label> <a href="#">Forget Password ?</a> </label>
                                    </div>
                                    </fieldset>
                                </form>
                                <div className="line-form"></div>
                                <center>
                                    <h4>Or</h4>
                                </center>
                                <div className="login-with">Login With</div>
                                <div className="social-logo">
                                    <a href="#">
                                        <img src={require('../../assets/images/g-logo.png')} />
                                    </a>
                                    <a href="#">
                                        <img src={require('../../assets/images/f-logo.png')} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    </div>
    );
  }
}