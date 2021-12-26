import react from "react";
import "./404.css"

function ErrorPage() {
      return(
            <>
            <div className="container errorPage">
                  <div className="row">
                        <div className="col-12">
                        <h1 className="text-center">
                              Page Not <br /> Found
                        </h1>
                        <img src="https://res.cloudinary.com/durpirilj/image/upload/v1640551605/undraw_location_search_re_ttoj_b81ya0.svg" alt="logo" />
                        </div>
                  </div>
            </div>
            </>
      )
}

export default ErrorPage;