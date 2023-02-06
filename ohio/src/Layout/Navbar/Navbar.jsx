import React from "react";
import "../Navbar/Navbar.scss";
import { RiMenu2Fill } from "react-icons/ri";
const Navbar = () => {
  return (
    <nav id="nav">
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-3">
            <div className="left_side">
              <div className="menu-all">
                <RiMenu2Fill style={{ fontSize: "25px", cursor: "pointer" }} />
              </div>
              <div className="img">
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/YbUt6che-OhioLogo.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="middle_side">
              <ul>
                <li>
                  <p>01</p>
                  Home
                </li>
                <li id="elements">
                  <p>02</p>
                  Elements
                  <div className="container list-hover">
                    <div className="row">
                      <div className="col-lg-2">
                        <ul>
                          <p>WIDGETS</p>
                          <li> Accordion</li>
                          <li>Banner</li>
                          <li>Blog Posts</li>
                          <li>Button</li>
                          <li>Call to Action</li>
                          <li>Carousel</li>
                          <li>Circle Progress Bar</li>
                          <li>Clients Logo</li>
                          <li>Compare</li>
                        </ul>
                      </div>
                      <div className="col-lg-2">
                        <ul>
                          <p>WIDGETS</p>
                          <li>Contact Form</li>
                          <li>Countdown</li>
                          <li>Counter</li>
                          <li>Dynamic Text</li>
                          <li>Fullscreen Slider</li>
                          <li>Gallery</li>
                          <li>Google Map</li>
                          <li>Heading</li>
                          <li>Horizontal Accordion</li>
                        </ul>
                      </div>
                      <div className="col-lg-2">
                        <ul>
                          <p>WIDGETS</p>
                          <li>Icon Box</li>
                          <li>Instagram Feed</li>
                          <li>Message</li>
                          <li>Parallax</li>
                          <li>Portfolio Projects</li>
                          <li>Pricing List</li>
                          <li>Pricing Table</li>
                          <li>Process</li>
                          <li>Progress Bar</li>
                        </ul>
                      </div>
                      <div className="col-lg-2">
                        <ul>
                          <p>WIDGETS</p>
                          <li>Services Table</li>
                          <li>Shop Category</li>
                          <li>Social Networks</li>
                          <li>Subscribe Form</li>
                          <li>Team Group</li>
                          <li>Team Member</li>
                          <li>Testimonial</li>
                          <li>Video</li>
                        </ul>
                      </div>
                      <div className="col-lg-2">
                        <ul>
                          <p>MENUS</p>

                          <li>Standard</li>
                          <li>Centered</li>
                          <li>With Center Logo</li>
                          <li>With Top Logo</li>
                          <li>Sidebar Wide</li>
                          <li>Sidebar Top Hamburger</li>
                          <li>Sidebar Center Hamburger</li>
                        </ul>
                      </div>
                      <div className="col-lg-2">
                        <ul>
                          <p> HAMBURGER MENUS</p>

                          <li>Standard Hamburger</li>
                          <li>Centered Hamburger</li>
                          <li>Creative Hamburger</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li id="portfolio">
                  <p>03</p>
                  Portfolio
                  <div className="container list-hover">
                    <div className="row">
                      <div className="col-lg-2">
                        <ul>
                          <p>WIDGETS</p>
                          <li> Accordion</li>
                          <li>Banner</li>
                          <li>Blog Posts</li>
                          <li>Button</li>
                          <li>Call to Action</li>
                          <li>Carousel</li>
                          <li>Circle Progress Bar</li>
                          <li>Clients Logo</li>
                          <li>Compare</li>
                        </ul>
                      </div>
                      <div className="col-lg-2">
                        <ul>
                          <p>WIDGETS</p>
                          <li>Contact Form</li>
                          <li>Countdown</li>
                          <li>Counter</li>
                          <li>Dynamic Text</li>
                          <li>Fullscreen Slider</li>
                          <li>Gallery</li>
                          <li>Google Map</li>
                          <li>Heading</li>
                          <li>Horizontal Accordion</li>
                        </ul>
                      </div>
                      <div className="col-lg-2">
                        <ul>
                          <p>WIDGETS</p>
                          <li>Icon Box</li>
                          <li>Instagram Feed</li>
                          <li>Message</li>
                          <li>Parallax</li>
                          <li>Portfolio Projects</li>
                          <li>Pricing List</li>
                          <li>Pricing Table</li>
                          <li>Process</li>
                          <li>Progress Bar</li>
                        </ul>
                      </div>
                      <div className="col-lg-2">
                        <ul>
                          <p>WIDGETS</p>
                          <li>Services Table</li>
                          <li>Shop Category</li>
                          <li>Social Networks</li>
                          <li>Subscribe Form</li>
                          <li>Team Group</li>
                          <li>Team Member</li>
                          <li>Testimonial</li>
                          <li>Video</li>
                        </ul>
                      </div>
                      <div className="col-lg-2">
                        <ul>
                          <p>MENUS</p>

                          <li>Standard</li>
                          <li>Centered</li>
                          <li>With Center Logo</li>
                          <li>With Top Logo</li>
                          <li>Sidebar Wide</li>
                          <li>Sidebar Top Hamburger</li>
                          <li>Sidebar Center Hamburger</li>
                        </ul>
                      </div>
                      <div className="col-lg-2">
                        <ul>
                          <p> HAMBURGER MENUS</p>

                          <li>Standard Hamburger</li>
                          <li>Centered Hamburger</li>
                          <li>Creative Hamburger</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li id="blog">
                  <p>04</p>
                  Blog
                  <div className="container list-hover">
                    <div className="row">
                      <div className="col-lg-2">
                        <ul>
                          <p>WIDGETS</p>
                          <li> Accordion</li>
                          <li>Banner</li>
                          <li>Blog Posts</li>
                          <li>Button</li>
                          <li>Call to Action</li>
                          <li>Carousel</li>
                          <li>Circle Progress Bar</li>
                          <li>Clients Logo</li>
                          <li>Compare</li>
                        </ul>
                      </div>
                      <div className="col-lg-2">
                        <ul>
                          <p>WIDGETS</p>
                          <li>Contact Form</li>
                          <li>Countdown</li>
                          <li>Counter</li>
                          <li>Dynamic Text</li>
                          <li>Fullscreen Slider</li>
                          <li>Gallery</li>
                          <li>Google Map</li>
                          <li>Heading</li>
                          <li>Horizontal Accordion</li>
                        </ul>
                      </div>
                      <div className="col-lg-2">
                        <ul>
                          <p>WIDGETS</p>
                          <li>Icon Box</li>
                          <li>Instagram Feed</li>
                          <li>Message</li>
                          <li>Parallax</li>
                          <li>Portfolio Projects</li>
                          <li>Pricing List</li>
                          <li>Pricing Table</li>
                          <li>Process</li>
                          <li>Progress Bar</li>
                        </ul>
                      </div>
                      <div className="col-lg-2">
                        <ul>
                          <p>WIDGETS</p>
                          <li>Services Table</li>
                          <li>Shop Category</li>
                          <li>Social Networks</li>
                          <li>Subscribe Form</li>
                          <li>Team Group</li>
                          <li>Team Member</li>
                          <li>Testimonial</li>
                          <li>Video</li>
                        </ul>
                      </div>
                      <div className="col-lg-2">
                        <ul>
                          <p>MENUS</p>

                          <li>Standard</li>
                          <li>Centered</li>
                          <li>With Center Logo</li>
                          <li>With Top Logo</li>
                          <li>Sidebar Wide</li>
                          <li>Sidebar Top Hamburger</li>
                          <li>Sidebar Center Hamburger</li>
                        </ul>
                      </div>
                      <div className="col-lg-2">
                        <ul>
                          <p> HAMBURGER MENUS</p>

                          <li>Standard Hamburger</li>
                          <li>Centered Hamburger</li>
                          <li>Creative Hamburger</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li id="shop">
                  <p>05</p>
                  Shop
                  <div className="container list-hover">
                    <div className="row">
                      <div className="col-lg-2">
                        <ul>
                          <p>WIDGETS</p>
                          <li> Accordion</li>
                          <li>Banner</li>
                          <li>Blog Posts</li>
                          <li>Button</li>
                          <li>Call to Action</li>
                          <li>Carousel</li>
                          <li>Circle Progress Bar</li>
                          <li>Clients Logo</li>
                          <li>Compare</li>
                        </ul>
                      </div>
                      <div className="col-lg-2">
                        <ul>
                          <p>WIDGETS</p>
                          <li>Contact Form</li>
                          <li>Countdown</li>
                          <li>Counter</li>
                          <li>Dynamic Text</li>
                          <li>Fullscreen Slider</li>
                          <li>Gallery</li>
                          <li>Google Map</li>
                          <li>Heading</li>
                          <li>Horizontal Accordion</li>
                        </ul>
                      </div>
                      <div className="col-lg-2">
                        <ul>
                          <p>WIDGETS</p>
                          <li>Icon Box</li>
                          <li>Instagram Feed</li>
                          <li>Message</li>
                          <li>Parallax</li>
                          <li>Portfolio Projects</li>
                          <li>Pricing List</li>
                          <li>Pricing Table</li>
                          <li>Process</li>
                          <li>Progress Bar</li>
                        </ul>
                      </div>
                      <div className="col-lg-2">
                        <ul>
                          <p>WIDGETS</p>
                          <li>Services Table</li>
                          <li>Shop Category</li>
                          <li>Social Networks</li>
                          <li>Subscribe Form</li>
                          <li>Team Group</li>
                          <li>Team Member</li>
                          <li>Testimonial</li>
                          <li>Video</li>
                        </ul>
                      </div>
                      <div className="col-lg-2">
                        <ul>
                          <p>MENUS</p>

                          <li>Standard</li>
                          <li>Centered</li>
                          <li>With Center Logo</li>
                          <li>With Top Logo</li>
                          <li>Sidebar Wide</li>
                          <li>Sidebar Top Hamburger</li>
                          <li>Sidebar Center Hamburger</li>
                        </ul>
                      </div>
                      <div className="col-lg-2">
                        <ul>
                          <p> HAMBURGER MENUS</p>

                          <li>Standard Hamburger</li>
                          <li>Centered Hamburger</li>
                          <li>Creative Hamburger</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <p>06</p>
                  Pages
                </li>
                <li>
                  <p>07</p>
                  Help
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className="right_side">
              <button>Let's talk</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
