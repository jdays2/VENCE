import "./App.css";
import ImageSlider, { Slide } from "react-auto-image-slider";

import { FaSearch } from "react-icons/fa";
import sample from "./assets/img/Card Mango_Big Title.png";
import the from "./assets/img/second.png";
import apartamento from "./assets/img/apartamento.png";
import alessandro from "./assets/img/alessandro.png";
import aron from "./assets/img/aron.png";
import renzo from "./assets/img/renzo.png";
import beautiful from "./assets/img/aBeautiful.png";
import incredible from "./assets/img/incredible.png";
import richard from "./assets/img/richard.png";
import sliderOne from "./assets/img/sliderImg.png";
import sliderTwo from "./assets/img/sliderImg2.png";
import sliderTree from "./assets/img/sliderImg3.png";

function App() {
  setTimeout(() => {
    console.log("hello");
  }, 2000);

  return (
    <div className="App">
      <div className="header-wrapper">
        <header className="header">
          <div className="header__logo">
            <div className="header__logo_title">
              <span>VENCE</span>
              <span className="header__logo_title dot">.</span>
            </div>
          </div>

          <div className="header__nav">
            <div className="header__nav-item">Home</div>
            <div className="header__nav-item">Inspiration</div>
            <div className="header__nav-item">Courses</div>
            <div className="header__nav-item">Blog</div>
            <div>|</div>
            <FaSearch className="header__nav-icon" />
          </div>
        </header>
      </div>
      <section className="slider">
        {/* <div className="slider-root">
          <ImageSlider effectDelay={500} autoPlayDelay={3000}>
            <Slide>
              <img src={sliderOne} />
            </Slide>
            <Slide>
              <img src={sliderTwo} />
            </Slide>
            <Slide>
              <img src={sliderTree} />
            </Slide>
          </ImageSlider>
        </div> */}
        <div className="slider-content">
          <span>29.Jun.2022</span>
          <h1 className="slider-content__title">
            I Like to Keep Things Simple to Appreciate the Details
          </h1>
          <p>
            Many years ago, I worked for my parents who own a video production
            company.
          </p>
        </div>
      </section>
      <section className="acticles">
        <div className="acticles__content-wrapper">
          <div className="acticles__content-filters-wrapper">
            <div className="acticles__content-filters">
              <span>Categories</span>
              <span>+</span>
            </div>
            <div className="acticles__content-filters">
              <span>3 Column</span>
              <span className="acticles__content-filters unactive">
                4 Column
              </span>
            </div>
          </div>
          <div className="articles__content">
            <div className="articles__card">
              <img src={sample} />
              <div className="articles__card-category">CREATIVE</div>
              <div className="articles__card-hover"></div>
              <div className="articles__card-content-wrapper">
                <span className="articles__card-date">29.Jun.2021</span>
                <h2 className="articles__card-title">
                  Instagram artists with great photography skills
                </h2>
                <p className="articles__card-subject">
                  Many years ago, I worked for my parents who own a video
                  production company.
                </p>
                <div className="articles__card-line"></div>
                <div />
                <span className="articles__card-by">By: Peter Rowardson</span>
              </div>
            </div>
            <div className="articles__card">
              <img src={the} />
              <div className="articles__card-category">CREATIVE</div>
              <div className="articles__card-hover"></div>
              <div className="articles__card-content-wrapper">
                <span className="articles__card-date">29.Jun.2021</span>
                <h2 className="articles__card-title">
                  The 20 best creative & strong handmade of 2022
                </h2>
                <p className="articles__card-subject">
                  Many years ago, I worked for my parents who own a video
                  production company.
                </p>
                <div className="articles__card-line"></div>
                <div />
                <span className="articles__card-by">By: Peter Rowardson</span>
              </div>
            </div>
            <div className="articles__card">
              <img src={apartamento} />
              <div className="articles__card-category">CREATIVE</div>
              <div className="articles__card-hover"></div>
              <div className="articles__card-content-wrapper">
                <span className="articles__card-date">29.Jun.2021</span>
                <h2 className="articles__card-title">
                  Apartamento at ten: A decade of celebrating the everyday
                </h2>
                <p className="articles__card-subject">
                  Many years ago, I worked for my parents who own a video
                  production company.
                </p>
                <div className="articles__card-line"></div>
                <div />
                <span className="articles__card-by">By: Peter Rowardson</span>
              </div>
            </div>
            <div className="articles__card">
              <img src={alessandro} />
              <div className="articles__card-category">CREATIVE</div>
              <div className="articles__card-hover"></div>
              <div className="articles__card-content-wrapper">
                <span className="articles__card-date">29.Jun.2021</span>
                <h2 className="articles__card-title">
                  Alessandro Novelli’s animation plays with ANDRE
                </h2>
                <p className="articles__card-subject">
                  Many years ago, I worked for my parents who own a video
                  production company.
                </p>
                <div className="articles__card-line"></div>
                <div />
                <span className="articles__card-by">By: Peter Rowardson</span>
              </div>
            </div>
            <div className="articles__card">
              <img src={aron} />
              <div className="articles__card-category">CREATIVE</div>
              <div className="articles__card-hover"></div>
              <div className="articles__card-content-wrapper">
                <span className="articles__card-date">29.Jun.2021</span>
                <h2 className="articles__card-title">
                  Aron Klein’s captivating images of the UDEA
                </h2>
                <p className="articles__card-subject">
                  Many years ago, I worked for my parents who own a video
                  production company.
                </p>
                <div className="articles__card-line"></div>
                <div />
                <span className="articles__card-by">By: Peter Rowardson</span>
              </div>
            </div>
            <div className="articles__card">
              <img src={renzo} />
              <div className="articles__card-category">CREATIVE</div>
              <div className="articles__card-hover"></div>
              <div className="articles__card-content-wrapper">
                <span className="articles__card-date">29.Jun.2021</span>
                <h2 className="articles__card-title">
                  Renzo Patton combines design and nature
                </h2>
                <p className="articles__card-subject">
                  Many years ago, I worked for my parents who own a video
                  production company.
                </p>
                <div className="articles__card-line"></div>
                <div />
                <span className="articles__card-by">By: Peter Rowardson</span>
              </div>
            </div>
          </div>
          <button className="articles__button">More Articles</button>
        </div>
      </section>
      <section className="featured-topics">
        <div className="featured-topics__content">
          <h3 className="featured-topics__content-title">Featured Topics</h3>
          <div className="featured-topics__cards-wrapper">
            <div className="featured-topics__card">
              <img src={beautiful} className="featured-topics__card-img" />
              <div className="featured-topics__card-img-hover"></div>
              <div className="featured-topics__card-content">
                <span className="featured-topics__card-content_date">
                  29.Jun.2021
                </span>
                <h5 className="featured-topics__card-content_title">
                  A beautiful solo trip to the Lake Baikal
                </h5>
                <p className="featured-topics__card-content_subject">
                  Leather detail shoulder contrastic colour contour stunning
                  silhouette working peplum.
                </p>
              </div>
            </div>
            <div className="featured-topics__card">
              <img src={incredible} className="featured-topics__card-img" />
              <div className="featured-topics__card-img-hover"></div>
              <div className="featured-topics__card-content">
                <span className="featured-topics__card-content_date">
                  29.Jun.2021
                </span>
                <h5 className="featured-topics__card-content_title">
                  Incredible architecture inspired by nature
                </h5>
                <p className="featured-topics__card-content_subject">
                  Leather detail shoulder contrastic colour contour stunning
                  silhouette working peplum.
                </p>
              </div>
            </div>
            <div className="featured-topics__card">
              <img src={richard} className="featured-topics__card-img" />
              <div className="featured-topics__card-img-hover"></div>
              <div className="featured-topics__card-content">
                <span className="featured-topics__card-content_date">
                  29.Jun.2021
                </span>
                <h5 className="featured-topics__card-content_title">
                  Richard Norton photorealistic rendering as real photos
                </h5>
                <p className="featured-topics__card-content_subject">
                  Leather detail shoulder contrastic colour contour stunning
                  silhouette working peplum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="featured-topics__second-content">
          <div className="featured-topics__second-content-wrapper">
            <h4 className="featured-topics__second-content-title">
              20 unexpected destinations for your next trip
            </h4>
            <p className="featured-topics__second-content-subject">
              Black knicker lining concealed back zip fasten swing style high
              waisted double layer full pattern floral.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <h7>VENCE Studio.</h7>
          <div>
            <span>About Studio</span>
            <span>Archive</span>
            <span>Contact Us</span>
          </div>
        </div>
        <div></div>
        <div>
          <span>1088, North Street, Alexandria, AU</span>
          <span>© 2022, All Rights Reserved</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
