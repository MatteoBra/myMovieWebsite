import React from 'react'

function Footer() {
    return (
        <div>
            <div className="row ">
                <div className="col-md-12">
                    <div className="footer p-3 mt-4 text-center bg-dark text-light fixed-footer">
                        Developed By: 
                        <span  className="text-warning font-weight-normal ml-1">
                        Matteo Brandolino
                        </span>
                        , Using <i className="fab fa-react" /> React JS &amp; Redux JS
                        integrated with external movies data API
                        <a className="ml-1"
                        href="https://developers.themoviedb.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        TMDb
                        </a>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Footer
