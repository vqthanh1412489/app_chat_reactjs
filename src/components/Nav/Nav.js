import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, NavLink } from 'react-router-dom';
import { Button } from 'antd';
import * as Actions from '../../actions/index';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active' : '';
            return (
                <li className={active}>
                    <Link to={to}>
                        {label}
                    </Link>
                </li>
            );
        }} />
    );
}

const menus = [
    {
        label: 'Login',
        to: './signin',
        exact: true
    },
    {
        label: 'Sign Up',
        to: './signup',
        exact: false
    },
]


class Nav extends Component {

    onLogout = e => {
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
        this.props.getLogout(false);
    }

    render() {
        var { isLoged } = this.props;
        var showAuth = !isLoged ?
            <ul className="nav navbar-nav" >
                {this.showMenus(menus)}

            </ul> :

            <NavLink to="/">
                <Button
                    type="danger"
                    className="float-right margin-top-8px"
                    onClick={this.onLogout}
                >Danger</Button>
            </NavLink>


        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            {/* <a className="navbar-brand" href="#">Brand</a> */}
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            {showAuth}
                            {/* <ul className="nav navbar-nav" >
                                {this.showMenus(menus)}

                            </ul>
                            <Button type="danger" className="float-right margin-top-8px">Danger</Button> */}
                        </div>
                    </div>

                </nav>
            </div>
        );
    }

    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.label}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        isLoged: state.isLoged,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getLogout: (value) => {
            dispatch(Actions.actToogleLoged(value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
