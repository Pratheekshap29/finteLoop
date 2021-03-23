import React from 'react'

function Footer() {
    return (
        <footer id="primary-footer">
        
        <div className="container footer-widget-area">
          <div className="row">
            <div className="col-md-4 p-3">
              <div className="footer-widget-heading">
                <h4>BlahBlah</h4>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className="footer-social-icon">
                                      <div className="social-title">Follow us:</div>
                                      <a href="https://www.facebook.com/foxmayaban/"><i className="fab fa-facebook-f circle-icon"></i></a>
                                      <a href="https://www.instagram.com/foxmayadigital/"><i className="fab fa-instagram circle-icon"></i></a>
                                      <a href="https://twitter.com/foxmayadigital"><i className="fab fa-twitter circle-icon"></i></a>
                                      <a href="https://www.linkedin.com/in/ban-sharma/"><i className="fab fa-linkedin-in circle-icon"></i></a>
                                  </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="footer-widget-heading">
                <h4>Popular Posts</h4>
              </div>
                    <ul className="linkediting">
                              <li><a href="#"><i className="fa fa-angle-right"></i> Free Bootstrap 4 Templates</a></li>
                              <li><a href="#"><i className="fa fa-angle-right"></i> Bootstrap Footer Templates</a></li>
                              <li><a href="#"><i className="fa fa-angle-right"></i> Bootstrap Portfolio Themes</a></li>
                              <li><a href="#"><i className="fa fa-angle-right"></i> Bootstrap Hero</a></li>
                              <li><a href="#"><i className="fa fa-angle-right"></i> Bootstrap 4 Tutorial</a></li>
                          </ul>
              </div>
            <div className="col-md-4 p-3">
              <div className="footer-widget-heading">
                <h4>Quick Links</h4>
              </div>
              <ul className="linkediting">
                              <li><a href="#"><i className="fa fa-angle-right"></i> About Us</a></li>
                              <li><a href="#"><i className="fa fa-angle-right"></i> Contact Us</a></li>
                              <li><a href="#"><i className="fa fa-angle-right"></i> My Portfolio</a></li>
                              <li><a href="#"><i className="fa fa-angle-right"></i> Testimonials</a></li>
                          </ul>
            </div>
          </div>
        </div>
        
          <hr />
          
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="copyright-text text-left">
                                  <p>blah</p>
                              </div>
              </div>
              <div className="col-md-6">
                <div className="footer-menus text-right">
                  <ul>
                              <li><a href="#">Privacy Policy</a></li>
                              <li><a href="#">Terms & Condition</a></li>
                          </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer
