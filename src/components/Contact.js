export const Contact = () => {
  return (
    <div>
      <div className="breadcrumb-bg py-5  w3l-inner-page-breadcrumb">
        <div className="container pt-lg-5 pt-md-3 p-lg-4 pb-md-3 my-lg-3">
          <ul className="breadcrumbs-custom-path mt-4 text-center pt-5">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="active">
              <span className="fa fa-arrow-right mx-2" aria-hidden="true" />{" "}
              Contact{" "}
            </li>
          </ul>
        </div>
      </div>
      <section className="w3l-contact-2 py-5" id="contact">
        <div className="container py-lg-4 py-md-3 py-2">
          <div className="title-content text-left">
            <h5 className="title-subhny mb-2">Get in touch</h5>
            <h3 className="title-w3l">
              <span>
                Stay in touch with AASULE
                <br />
              </span>
            </h3>
          </div>
          <div className="contact-grids d-grid mt-5 pt-lg-3">
            <div className="contact-left">
              <div className="cont-details">
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fa fa-map-marker icon-red" />
                  </div>
                  <div className="cont-right">
                    <h6>Our head office address:</h6>
                    <p>Nasarawa state Secretariat, Nassarawa</p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fa fa-phone icon-green" />
                  </div>
                  <div className="cont-right">
                    <h6>Call for help :</h6>
                    <p>
                      <a href="tel:+234 803 625 8195">+234 803 625 8195</a>
                    </p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fa fa-envelope-o icon-blue" />
                  </div>
                  <div className="cont-right">
                    <h6>Mail us:</h6>
                    <p>
                      <a href="mailto:muhad1985@yahoo.com" className="mail">
                        muhad1985@yahoo.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-right">
              <form
                method="POST"
                className="signin-form"
                action="https://sendpoint.io/id/j97G6u1Zb-"
              >
                <div className="input-grids">
                  <input
                    type="text"
                    name="Name"
                    id="w3lName"
                    placeholder="Your Name*"
                    className="contact-input"
                    required
                  />
                  <input
                    type="email"
                    name="Sender"
                    id="w3lSender"
                    placeholder="Your Email*"
                    className="contact-input"
                    required
                  />
                  <input
                    type="text"
                    name="Subect"
                    id="w3lSubect"
                    placeholder="Subject*"
                    className="contact-input"
                    required
                  />
                </div>
                <div className="form-input">
                  <textarea
                    name="Message"
                    id="w3lMessage"
                    placeholder="Type your message here*"
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="submit-w3l-button text-lg-right">
                  <button type="submit" className="btn btn-style btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="map-iframe">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.6396832328073!2d7.699338464379007!3d8.534317243864999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e292b83ffcb0d%3A0xa9837c1cb655f48e!2sNasarawa%20LGA%20Secretariat!5e0!3m2!1sen!2sng!4v1661424268551!5m2!1sen!2sng"
          width="100%"
          height={400}
          title="map"
          style={{ border: "0px" }}
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
