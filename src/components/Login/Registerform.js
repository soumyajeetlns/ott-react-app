import React, { Component }  from 'react';

export default class Registerform extends Component{
  render() {
    return (
        <div className="contain-area">
	        <div className="container">
		        <div className="row">
			        <div className="col-md-4"></div>
			            <div className="col-md-4">
				            <div className="panel panel-default login-area2">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Registration</h3>
                                </div>
					            <div className="panel-body">
						            <form accept-charset="UTF-8" role="form">
							            <fieldset>
								        <div className="form-group">
									        <input className="form-control" placeholder="Name" name="email" type="text" />
									    </div>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Email" name="email" type="email" />
                                        </div>
                                        <div className="form-group">
											<input className="form-control" placeholder="Tel" name="email" type="tel" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Date of Birth" name="email" type="text" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Password" name="password" type="password" value="" />
                                        </div>
                                            <input className="btn btn-lg btn-success btn-block" type="submit" value="Submit" />
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