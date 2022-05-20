import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" aria-current="page" to="/posts">Posts</Link>
                            <Link className="nav-link" aria-current="page" to="/users">Users</Link>
                            <Link className="nav-link" aria-current="page" to="/comments">Comments</Link>
                            <Link className="nav-link" aria-current="page" to="/profiles">Profile</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
