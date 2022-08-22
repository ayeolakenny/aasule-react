import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../config/sanity";

export const Home = () => {
  const [postData, setPost] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"][0...3] | order(_createdAt desc){
            title,
            slug,
            body,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
      )
      .then((data) => setPost(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Fragment>
      <section id="home" className="w3l-banner py-5">
        <div className="container">
          <div className="align-items-center">
            <div className="bannerw3-content mt-lg-0 mt-4">
              <span className="title-small">AASULE 2023</span>
              <h3 className="mb-2 title">
                <span>
                  Looking for the <br />
                  next opportunity to make a change.
                </span>
                Egnr. AASULE is the man
              </h3>
              <p className="mt-4 pr-lg-5">
                It is said that the fear of God is the basis for walking and
                working in the ways of God Almighty and in Nasarawa State we are
                blessed with a governor in person of Engineer Abdullahi A. Sule.
              </p>
              <div className="mt-sm-5 mt-4">
                <a className="btn btn-primary btn-style" href="contact.html">
                  Let's Work Together
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-index2" id="about">
        <div className="midd-w3 py-5">
          <div className="container py-lg-5 py-md-3">
            <div className="row mx-auto text-center">
              <div className="col-lg-12 mt-lg-0 mt-5 text-left">
                <h5 className="title-subhny mb-2">About Me</h5>
                <h3 className="title-w3l">
                  <span>
                    Egnr. AASULE is a leader &amp; mentor who loves simplicity
                    and leads with the fear of God at heart.
                  </span>
                  AASULE 2023
                </h3>
                <p className="mt-4">
                  Engineer Abdullahi A. Sule was born on December, 26th, 1959 in
                  Gudi Station of Nasarawa State where he attended the Roman
                  Catholic Mission Primary School. His first encounter with
                  Economics was as a student of Zang Secondary Commercial School
                  in Jos Plateau State. Abdullahi Sule later in life proceeded
                  to Indiana State University, Terre Haute, Indiana, USA where
                  he graduated with B.Sc. Mechanical Technology and M.Sc.
                  Industrial Technology in 1984.
                </p>
                <div className="about-pic-grids row no-gutters mt-5">
                  <div className="col-md-3 position-relative person-img">
                    <img
                      src="assets/images/person.png"
                      alt=""
                      className="radius-image img-fluid"
                    />
                  </div>
                  <div className="col-md-9 about-pic-info pl-lg-5 mt-md-0 mt-2">
                    <h4>
                      Abdullahi A. Sule
                      <br />
                      Governor of Nasarawa State
                    </h4>
                    <p className="title mt-2">Follow Me</p>
                    <div className="social-column-3 mt-3">
                      <a
                        href="https://twitter.com/govaasule"
                        target="_blank"
                        rel="noreferrer"
                        className="twitter"
                      >
                        <span className="fa fa-twitter mr-2" />
                        <span className="social-text">Twitter</span>
                      </a>
                      <a
                        href="https://www.instagram.com/aa_sule_update2023/"
                        target="_blank"
                        rel="noreferrer"
                        className="instagram"
                      >
                        <span className="fa fa-instagram mr-2" />
                        <span className="social-text">Instagram</span>
                      </a>
                      <a
                        href="https://web.facebook.com/govaasule?_rdc=1&_rdr"
                        target="_blank"
                        rel="noreferrer"
                        className="facebook"
                      >
                        <span className="fa fa-facebook mr-2" />
                        <span className="social-text">Facebook</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w3lhny-timeline py-5" id="education">
        <div className="container py-lg-5 py-md-3 py-2">
          <div className="title-content text-center">
            <h6 className="title-subhny">Experts in field</h6>
            <h3 className="title-w3l mb-sm-5 mb-4 pb-lg-2">
              <span> </span> Experience
            </h3>
          </div>
          <div className="w3l-educatiob-job-info mt-lg-5 mt-3 pt-lg-2">
            <ul className="m-timeline">
              <li>
                <div className="m-timeline__date">
                  <span>Present</span> - Governor
                </div>
                <p>Nasarawa State</p>
              </li>

              <li>
                <div className="m-timeline__date">
                  <span>2018</span> - Group Managing Director
                </div>
                <p>Dangote Sugar</p>
              </li>
              <li>
                <div className="m-timeline__date">
                  <span>2007</span> MD/CEO
                </div>
                <p>Dangote Sugar Refinery Plc.</p>
              </li>
              <li>
                <div className="m-timeline__date">
                  <span>2001</span> - Managing Director
                </div>
                <p>African Petroleum Plc.</p>
              </li>
              <li>
                <div className="m-timeline__date">
                  <span>2000</span> - Managing Director
                </div>
                <p>Sadiq Petroleum Nigeria Limited</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w3l-bottom-grids-6 py-5" id="services">
        <div className="container py-lg-5 py-md-4 py-2">
          <h5 className="title-subhny mb-2">Explore</h5>
          <h3 className="title-w3l">
            <span>Achievements</span> over time
          </h3>
          {/*  */}
          <div class="grids-area-hny main-cont-wthree-fea row pt-3 mt-5">
            {postData ? (
              postData.map((post) => (
                <div className="col-lg-4 col-md-6 grids-feature">
                  <div class="area-box">
                    <Link to={"/blog/" + post.slug.current}>
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        title="Your logo"
                        style={{ height: "250px" }}
                      />
                    </Link>
                    <h4>
                      <Link to={"/blog/" + post.slug.current}>
                        {post.title}
                      </Link>
                    </h4>
                    <p>
                      {/* <SanityBlockContent
                        blocks={post.body}
                        projectId={sanityClient.projectId}
                        dataset={sanityClient.dataset}
                      /> */}
                      {/* <PortableText value={post.body} /> */}
                      {/* {post.title} */}
                    </p>
                    <br />
                    <Link
                      to={"/blog/" + post.slug.current}
                      type="button"
                      class="btn btn-outline-info mt-3"
                    >
                      Read More...
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="title-w3l">
                <span>No blogs now</span>
              </p>
            )}
          </div>
          {/*  */}
          <div className="mt-3 d-flex justify-content-center">
            <Link to="/blogs" className="btn btn-info" type="button">
              View More Blogs
            </Link>
          </div>
        </div>
      </section>
      <section className="gallery section-agile py-5">
        <div className="container-fluid py-lg-5 py-md-4 px-lg-0 mx-lg-0">
          <div className="title-content text-center">
            <h6 className="title-subhny">My Projects</h6>
            <h3 className="title-w3l mb-sm-5 mb-4 pb-lg-2">
              <span> My </span> Projects
            </h3>
          </div>

          <section className="container">
            <section className>
              <div className="row">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                  <div className="bg-image hover-overlay ripple shadow-1-strong rounded">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        width={1351}
                        height={503}
                        src="https://www.youtube.com/embed/kuOreUIiFBM"
                        title="Episode 3 of Chronicles of Engineer Abdullahi A. Sule"
                        frameBorder={0}
                        className="embed-responsive-item"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                  <div className="bg-image hover-overlay ripple shadow-1-strong rounded">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        width="1351"
                        height="503"
                        src="https://www.youtube.com/embed/S6034LVTCvM"
                        className="embed-responsive-item"
                        title="The chronicles of Governor Abdullahi Sule: The Award"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                  <div className="bg-image hover-overlay ripple shadow-1-strong rounded">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        width="1351"
                        height="503"
                        className="embed-responsive-item"
                        src="https://www.youtube.com/embed/X-RzeiJPVW4"
                        title="The Chronicles of Abdullahi Sule in Hausa"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                  <div className="bg-image hover-overlay ripple shadow-1-strong rounded">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        width="1351"
                        height="503"
                        src="https://www.youtube.com/embed/3UuuK6ErlQA"
                        title="The First 100 days of Governor Abdullahi A. sule"
                        className="embed-responsive-item"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                  <div className="bg-image hover-overlay ripple shadow-1-strong rounded">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        width="1351"
                        height="503"
                        src="https://www.youtube.com/embed/LnrmXdA4v1Y"
                        title="The Chronicles of Governor Abdullahi A. Sule"
                        className="embed-responsive-item"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                  <div className="bg-image hover-overlay ripple shadow-1-strong rounded">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        width="1351"
                        height="503"
                        src="https://www.youtube.com/embed/bSqsKzrU9TY"
                        title="The Chronicles Governor Abdullahi A.  Sule"
                        className="embed-responsive-item"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </section>
      <section class="w3l-clients" id="testimonials">
        <div class="container py-lg-5 py-md-3">
          <div class="row w3-testimonial-grids">
            <div class="col-lg-6 w3-testimonial-content-top pr-lg-5">
              <div class="title-content text-left">
                <h6 class="title-subhny">Testimonials</h6>
                <h3 class="title-w3l mb-sm-5 mb-4 pb-lg-2">
                  <span> What people think about </span>
                  AASULE
                </h3>
              </div>
              <div id="owl-demo1" class="owl-carousel owl-theme mt-4 py-2 mb-4">
                <div class="item">
                  <div class="testimonial-content">
                    <div class="testimonial">
                      <blockquote>
                        <q>
                          So we have made big strides in the area of security,
                          let me count in the area of security, before his
                          coming do you know that security has been one of our
                          challenges, every week we pass without not mentioning
                          any issue of kidnapping, armed robbery, banditry, and
                          all the criminal vices. But now thank God and thank
                          His Excellency with the security measures he has put
                          in place, I think the vices are dying down.
                        </q>
                      </blockquote>
                      <div class="testi-des">
                        <div class="test-img">
                          <img
                            src="assets/images/testimony2.png"
                            class="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div class="peopl align-self">
                          <h3>HON. SAMUEL MESHI</h3>
                          <p class="indentity">AKWANGA, LGA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="testimonial-content">
                    <div class="testimonial">
                      <blockquote>
                        <q>
                          That he took all those promises he made one by one to
                          make sure that he execute each of them. He's a man
                          that always says what he means, and means what he
                          says, he's not a man that he will say something and
                          tomorrow comes to deny it. and before he says
                          something, he knows exactly what he's talking about.
                        </q>
                      </blockquote>
                      <div class="testi-des">
                        <div class="test-img">
                          <img
                            src="assets/images/testimony3.png"
                            class="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div class="peopl align-self">
                          <h3>DR. EMMANUEL AKABE</h3>
                          <p class="indentity">
                            DEPUTY GOVERNOR/ NASSARAWA STATE
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="testimonial-content">
                    <div class="testimonial">
                      <blockquote>
                        <q>
                          Economic revitalization of the state, the Nasarawa
                          Investment and Development Agency is a creation of the
                          law and it is a key part of our enabling business
                          environment effort, one the governor intended to
                          create an investment promotion shop for the state as
                          well also an institution that would do business with
                          the private sector on behalf of the state but having
                          the private sector to lead.
                        </q>
                      </blockquote>
                      <div class="testi-des">
                        <div class="test-img">
                          <img
                            src="assets/images/testimony4.png"
                            class="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div class="peopl align-self">
                          <h3>IBRAHIM</h3>
                          <p class="indentity">PIONEER GM INVESTMENT</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="testimonial-content">
                    <div class="testimonial">
                      <blockquote>
                        <q>
                          He is a different kind of politician, maybe because of
                          his background. Both his biological background which
                          is very humble and his professional background which
                          is from the private sector, a combination of these
                          two, has produced an individual well rounded.
                        </q>
                      </blockquote>
                      <div class="testi-des">
                        <div class="test-img">
                          <img
                            src="assets/images/testimony5.png"
                            class="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div class="peopl align-self">
                          <h3>ASSO. PROF. ABDULKARIM</h3>
                          <p class="indentity">KANA, COMM. FOR JUSTICE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 position-relative pl-lg-5 mt-lg-0 mt-5">
              <img
                src="assets/images/person2.png"
                alt=""
                class="radius-image img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
