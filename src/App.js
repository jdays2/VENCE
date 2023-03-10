import "./App.css";

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
import adventures from "./assets/img/adventures.png";
import ultimate from "./assets/img/ultimate.png";
import artist from "./assets/img/artist.png";
import peter from "./assets/img/peter.png";

function App() {
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
                  Alessandro Novelli???s animation plays with ANDRE
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
                  Aron Klein???s captivating images of the UDEA
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

      <section className="another-articles">
        <div className="another-articles__content-wrapper">
          <p className="another-articles__title">It???s a Big World</p>
          <div className="another-articles__cards-wrapper">
            <div className="another-articles__card">
              <img src={artist} className="card_img" />
              <div className="another-rticles__card-hover"></div>
              <div className="articles__card-category">CREATIVE</div>
              <div className="card_content">
                <span className="card_date">29.Jun.2021</span>
                <h7 className="card_title">
                  Artist Melissa Kitty Jarram is updating Greek myths for 2022
                </h7>
                <p className="card_subject">
                  Many years ago, I worked for my parents who own a video
                  production company.
                </p>
              </div>
            </div>
            <div className="another-articles__card">
              <img src={adventures} className="card_img" />
              <div className="another-rticles__card-hover"></div>
              <div className="articles__card-category">CREATIVE</div>
              <div className="card_content">
                <span className="card_date">29.Jun.2021</span>
                <h7 className="card_title">
                  10 adventures to have in North America
                </h7>
                <p className="card_subject">
                  Many years ago, I worked for my parents who own a video
                  production company.
                </p>
              </div>
            </div>
            <div className="another-articles__card">
              <img src={ultimate} className="card_img" />
              <div className="another-rticles__card-hover"></div>
              <div className="articles__card-category">CREATIVE</div>
              <div className="card_content">
                <span className="card_date">29.Jun.2021</span>
                <h7 className="card_title">
                  The ultimate guide to driving Iceland Golden Circle
                </h7>
                <p className="card_subject">
                  Many years ago, I worked for my parents who own a video
                  production company.
                </p>
              </div>
            </div>
            <div className="another-articles__card">
              <img src={peter} className="card_img" />
              <div className="another-rticles__card-hover"></div>
              <div className="articles__card-category">CREATIVE</div>
              <div className="card_content">
                <span className="card_date">29.Jun.2021</span>
                <h7 className="card_title">
                  Peter Funch shares the photo books that inspire his own
                  practice
                </h7>
                <p className="card_subject">
                  Many years ago, I worked for my parents who own a video
                  production company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-nav">
          <h7 className="footer-nav__logo">
            VENCE Studio<span>.</span>
          </h7>
          <div>
            <span className="footer-nav_item">About Studio</span>
            <span className="footer-nav_item">Archive</span>
            <span className="footer-nav_item">Contact Us</span>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-nav">
          <span>1088, North Street, Alexandria, AU</span>
          <span>?? 2022, All Rights Reserved</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
