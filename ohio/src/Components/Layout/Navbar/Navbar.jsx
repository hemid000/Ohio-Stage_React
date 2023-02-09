import React, { useState } from "react";
import "../Navbar/Navbar.scss";
import { RiMenu2Fill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import DarkMode from "../../DarkMode/DarkMode";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    window.scrollY > 120 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={navbar ? "nav active" : "nav"}>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-3">
            <div className="left_side">
              <div
                onClick={() => {
                  setShow(true);
                }}
                className="menu-all"
              >
                <RiMenu2Fill style={{ fontSize: "25px", cursor: "pointer" }} />
              </div>
              <div className="img">
                <Link to={"/"}>
                  <img
                    id="light-img"
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/YbUt6che-OhioLogo.svg"
                    alt=""
                  />
                  <img
                    id="dark-img"
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/dD4R9CMZ-OhioLogoInverse.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="middle_side">
              <ul>
                <li id="home">
                  <p>01</p>
                  <Link to={"/"}>Home</Link>
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
                          <Link to={"/portfolio"}>
                            {" "}
                            <li> Classic</li>
                          </Link>

                          <li>Classic Acordion</li>
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
                          <Link to={"/blog"}>
                            {" "}
                            <li> Classic</li>
                          </Link>

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
                          <li>Inner</li>
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
                          <li>Standard</li>
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
                          <Link to={"/products"}>
                            <li>Standard Product</li>
                          </Link>

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
                <li id="pages">
                  <p>06</p>
                  <ul>
                    <li id="hover_about">
                      About <AiOutlinePlus />
                      <ul>
                        <li>About Us</li>
                        <li>About Us 2</li>
                        <li>Our Berau</li>
                        <li>Our Studio</li>
                        <Link to={"/*"}>
                          {" "}
                          <li>Error Page</li>
                        </Link>
                      </ul>
                    </li>

                    <li>
                      <Link to={"/contact"}>
                        Contact <AiOutlinePlus />{" "}
                      </Link>
                    </li>

                    <li>
                      Special Page <AiOutlinePlus />
                    </li>
                  </ul>
                  Pages
                </li>
                <li>
                  <p>07</p>
                  Help
                </li>
                <li>
                  <DarkMode />
                </li>
              </ul>
              <ul id="mobiledark">
                <li>
                  <DarkMode />
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

      {show && (
        <div className="hamburger_nav">
          <div className="container">
            <div className="row">
              <div className="header">
                <AiOutlineClose
                  onClick={() => {
                    setShow(false);
                  }}
                  style={{ color: "white" }}
                />
              </div>
              <div className="body_list">
                <ul>
                  <div className="right_hover">
                    <li id="page">
                      <p>01</p>
                      Pages
                      <ul>
                        <li>About</li>
                        <li>Home</li>
                        <li>404 Page</li>
                        <li>Coming soon</li>
                        <li>Sign in/Sign out</li>
                      </ul>
                    </li>
                    <AiOutlinePlus />
                  </div>
                  <div className="right_hover">
                    <li>
                      <p>02</p>
                      Projects
                    </li>
                    <AiOutlinePlus />
                  </div>
                  <div className="right_hover">
                    <li id="blog">
                      <p>03</p>
                      Blog
                      <ul>
                        <li>Grid view</li>

                        <li>Single post</li>
                        <li>Coming soon</li>
                      </ul>
                    </li>
                    <AiOutlinePlus />
                  </div>
                  <div className="right_hover">
                    <li>
                      <p>04</p>
                      Shop
                    </li>
                    <AiOutlinePlus />
                  </div>
                  <div className="right_hover">
                    <li>
                      <p>05</p>
                      Purchase
                    </li>
                    <AiOutlinePlus />
                  </div>
                </ul>
              </div>
              <div className="footer_field">
                <div className="mid1">
                  <p>Get In Touch</p>
                  <span>
                    541 Melville Ave, Palo Alto, CA 94301,
                    ask@ohio.clbthemes.com Ph: +1.831.705.5448
                  </span>
                </div>
                <div className="mid1">
                  <p>Get In Touch</p>
                  <span>
                    541 Melville Ave, Palo Alto, CA 94301,
                    ask@ohio.clbthemes.com Ph: +1.831.705.5448
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
