import React from "react";

const Footer = () => {
  return (
    <footer className="main-footer">
      {/* Footer */}
      <footer className="page-footer font-small blue-grey lighten-5">
        {/* Footer Links */}
        <div className="container text-center text-md-left mt-5">
          {/* Grid row */}
          <div className="row mt-3 dark-grey-text">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
              {/* Content */}
              <h6 className="text-uppercase font-weight-bold">Historian</h6>
              <hr
                className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60 }}
              />
              <p>
                A historian is a person who specializes in the study of history,
                and who writes books and articles about it
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase font-weight-bold">Products</h6>
              <hr
                className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60 }}
              />
              <p>
                <a className="dark-grey-text" href="#!">
                  MDfsdkf
                </a>
              </p>
              <p>
                <a className="dark-grey-text" href="#!">
                  Map
                </a>
              </p>
              <p>
                <a className="dark-grey-text" href="#!">
                  Family Tree
                </a>
              </p>
              <p>
                <a className="dark-grey-text" href="#!">
                  DataFlow
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase font-weight-bold">Useful links</h6>
              <hr
                className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60 }}
              />
              <p>
                <a className="dark-grey-text" href="#!">
                  FeedBacks
                </a>
              </p>
              <p>
                <a className="dark-grey-text" href="#!">
                  Become an Affiliate
                </a>
              </p>
              <p>
                <a className="dark-grey-text" href="#!">
                  Report
                </a>
              </p>
              <p>
                <a className="dark-grey-text" href="#!">
                  Help
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              <hr
                className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60 }}
              />
              <p>
                <i className="fas fa-home mr-3" /> Quaid i Azam University
                ,Islamabad
              </p>
              <p>
                <i className="fas fa-envelope mr-3" /> info@example.com
              </p>
              <p>
                <i className="fas fa-phone mr-3" />
                00923034 567 88
              </p>
              <p>
                <i className="fas fa-print mr-3" />
                00923334 567 89
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </footer>
      {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">
        {/* Control sidebar content goes here */}
      </aside>
      {/* /.control-sidebar */}
    </footer>
  );
};
export default Footer;
