import React from 'react'
import login from "../assets/login.webp"
import "./input.css"
function Wishlist() {
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="row w-100 shadow py-5">
                    <div className="col-md-6">
                        <img src={login} alt="Login Illustration" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <div className="login-form w-75">
                            <h2 className='text-center h3 text-secondary'>Login</h2>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control rounded" id="username" placeholder="Username" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control rounded" id="password" placeholder="Password" />
                                </div>
                                <div className="form-group py-3">
                                    <a href="#" className="forgot-password text-secondary">Forgot Password</a>
                                </div>
                                <button type="submit" className="btn-hov btn border border-1 border-dark w-100 rounded">Login</button>
                                <button type="button" className="btn btn-dark w-100 mt-2 rounded">Continue With Google</button>
                            </form>
                            <div className="register-link text-start">
                                <p>Don't have an account? <a href="#">Register</a></p>
                                <p>Already registered? <span>Email not verified</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist