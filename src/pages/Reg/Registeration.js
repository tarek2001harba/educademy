import React from 'react'
import Button from '../../components/Button'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Pagination from '../../components/Pagination'
import './reg.css'
const Registeration = () => {
    return (
        <div className="reg">
            <div className="reg__pagination-container">
                <Pagination sections={["Sign In", "Sign Up"]}></Pagination>
            </div>
            <Switch>
                <Route path="/registeration/sign-in" exact>
                    <form className="reg__form" action="">
                        <h4 className="reg__title">Sign In</h4>
                        <p>E-mail:</p>
                        <input type="text" name="email"/>
                        <p>Password:</p>
                        <input type="text" name="pwd" />
                        <Button type="filled" width="100%" text="Sign In"/>
                    </form>
                </Route>
                <Route path="/registeration/sign-up" exact>
                    <form className="reg__form" action="">
                        <h4 className="reg__title">Sign Up</h4>
                        <p>First Name:</p>
                        <input type="text" name="fname"/>
                        <p>Last Name:</p>
                        <input type="text" name="lname"/>
                        <p>Country:</p>
                        <input type="text" name="country"/>
                        <p>Address:</p>
                        <input type="text" name="country"/>
                        <p>E-mail:</p>
                        <input type="text" name="email"/>
                        <p>Password:</p>
                        <input type="text" name="pwd" />
                        <Button type="filled" width="100%" text="Sign Up"/>
                    </form>
                </Route>
            </Switch>
        </div>
    )
}

export default Registeration
