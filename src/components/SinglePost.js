import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import sanityClient from "../config/sanity";

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
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

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
            <h5 className="title-subhny mb-2">August 6, 2022</h5>
            {/* <h5 className="title-subhny mb-2">{singlePost.publishedAt}</h5> */}
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
                {/* <SanityBlockContent
                  blocks={singlePost.body}
                  projectId={sanityClient.projectId}
                  dataset={sanityClient.dataset}
                /> */}
                <PortableText value={singlePost.body} />
              </p>
              {/* <p className="mt-md-4 mt-3">
                His first encounter with Economics was as a student of Zang
                Secondary Commercial School in Jos Plateau State. Abdullahi Sule
                later in life proceeded to Indiana State University, Terre
                Haute, Indiana, USA where he graduated with B.Sc. Mechanical
                Technology and M.Sc. Industrial Technology in 1984 Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Illo, saepe.
                Asperiores dolore quod sit fugit eum assumenda tenetur ex omnis,
                aliquam similique sint, excepturi recusandae libero ducimus
                consequuntur aspernatur alias. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Molestias nisi harum dignissimos
                sapiente, perspiciatis error, accusantium eligendi mollitia
                omnis reprehenderit libero repellat provident facere totam cum!
                Quia, ad. Molestias, expedita.
              </p>
              <p className="mt-md-4 mt-3">
                His first encounter with Economics was as a student of Zang
                Secondary Commercial School in Jos Plateau State. Abdullahi Sule
                later in life proceeded to Indiana State University, Terre
                Haute, Indiana, USA where he graduated with B.Sc. Mechanical
                Technology and M.Sc. Industrial Technology in 1984 Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Illo, saepe.
                Asperiores dolore quod sit fugit eum assumenda tenetur ex omnis,
                aliquam similique sint, excepturi recusandae libero ducimus
                consequuntur aspernatur alias. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Molestias nisi harum dignissimos
                sapiente, perspiciatis error, accusantium eligendi mollitia
                omnis reprehenderit libero repellat provident facere totam cum!
                Quia, ad. Molestias, expedita.
              </p> */}
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};
