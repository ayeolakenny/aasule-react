import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../config/sanity";

export const Blogs = () => {
  const [postData, setPost] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"][0...12] | order(_createdAt desc){
            title,
            slug,
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
    <div>
      <div className="breadcrumb-bg w3l-inner-page-breadcrumb py-5">
        <div className="container pt-lg-5 pt-md-3 p-lg-4 pb-md-3 my-lg-3">
          <ul className="breadcrumbs-custom-path mt-4 text-center pt-5">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="active">
              <span className="fa fa-arrow-right mx-2" aria-hidden="true" />
              Blogs &amp; News
            </li>
          </ul>
        </div>
      </div>
      <section className="w3l-index2" id="about1">
        <div className="midd-w3 py-5">
          <div className="container py-lg-5 py-md-3">
            <div className="row mx-auto text-center no-gutters">
              <div className="col-lg-12 mt-lg-0 mt-5 text-left">
                <h5 className="title-subhny mb-2">Blogs &amp; News</h5>
                <h3 className="title-w3l">
                  <span>
                    Some of the promises kept by AASULE &amp; highlights of his
                    achievements
                  </span>
                </h3>
              </div>
            </div>
            <div class="grids-of-5 row mt-5 text-center">
              {postData &&
                postData.map((post) => (
                  <div className="col-lg-4 col-md-6">
                    <div className="grids5-info">
                      <Link
                        to={"/blog/" + post.slug.current}
                        type="button"
                        class="d-block zoom"
                      >
                        <img
                          src={post.mainImage.asset.url}
                          alt={post.mainImage.alt}
                          title="Your logo"
                          style={{ height: "250px" }}
                          className="img-fluid radius-image"
                        />
                      </Link>
                      <div className="blog-info">
                        <h4>
                          <Link to={"/blog/" + post.slug.current}>
                            {post.title}
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
