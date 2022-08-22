import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import sanityClient from "../config/sanity";
import formatDate from "../helpers/formatDate";

export const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            publishedAt,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            "name": author->name,
            body,
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (singlePost) console.log(singlePost);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <div>
      <div className="breadcrumb-bg py-5 w3l-inner-page-breadcrumb">
        <div className="container pt-lg-5 pt-md-3 p-lg-4 pb-md-3 my-lg-3">
          <ul className="breadcrumbs-custom-path mt-4 text-center pt-5">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="active">
              <span className="fa fa-arrow-right mx-2" aria-hidden="true" />
              News
            </li>
          </ul>
        </div>
      </div>
      <section className="w3l-contact-2 py-5" id="contact">
        <div className="container py-lg-4 py-md-3 py-2">
          <div className="title-content text-left">
            <h3 className="title-w3l">{singlePost.title}</h3>
            <h5 className="title-subhny mb-2">
              <h5 className="title-subhny mb-2">
                Written by {singlePost.name ? singlePost.name : "Author"} :{" "}
                {formatDate(singlePost.publishedAt)}
              </h5>
            </h5>
            <section id="vision">
              <div className="ratio ratio-16x9">
                <img
                  src={singlePost.mainImage.asset.url}
                  alt={singlePost.mainImage.alt}
                  className="radius-image img-fluid"
                  style={{ maxHeight: "250px" }}
                />
              </div>
              <p className="mt-md-4 mt-3">
                <PortableText value={singlePost.body} />
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};
