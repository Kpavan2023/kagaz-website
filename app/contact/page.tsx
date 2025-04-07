"use client"

import type React from "react"
import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send the form data to your server here
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })

    // Reset form submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false)
    }, 5000)
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-light-green py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-4 fw-bold">Contact Us</h1>
              <p className="lead">Get in touch with the KAGAZ team for inquiries, orders, or collaborations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2 className="mb-4">Send Us a Message</h2>
              {formSubmitted ? (
                <div className="alert alert-success" role="alert">
                  Thank you for your message! We'll get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">
                      Subject *
                    </label>
                    <select
                      className="form-select"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Information">Product Information</option>
                      <option value="Bulk Order">Bulk Order</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Your Message *
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              )}
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-5">
                <h2 className="mb-4">Contact Information</h2>
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body">
                    <h5 className="mb-3">Reach Us</h5>
                    <ul className="list-unstyled contact-info">
                      <li className="mb-3">
                        <i className="bi bi-geo-alt me-2 text-green"></i>
                        <span>Krishnan Kovil, Srivilliputtur, 626126, India</span>
                      </li>
                      <li className="mb-3">
                        <i className="bi bi-envelope me-2 text-green"></i>
                        <a href="mailto:team.kagazofficial@gmail.com" className="text-decoration-none">
                           team.kagazofficial@gmail.com
                           </a>

                      </li>
                      <li className="mb-3">
                        <i className="bi bi-phone me-2 text-green"></i>
                        <a href="tel:+911234567890" className="text-decoration-none">
                          +1 411 066 7987
                        </a>
                      </li>
                      <li>
                        <i className="bi bi-clock me-2 text-green"></i>
                        <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h5 className="mb-3">Connect With Us</h5>
                <div className="social-links mt-4 flex gap-4">
              <a
              href="https://www.instagram.com/kagaz_save_soil/?igsh=Y2J2OGtnazFwMTUx#"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              >
               <img
                src="insta logo.png"
                alt="Instagram"
                width={25}
                height={25}
                className="hover:scale-110 transition-transform duration-200"
              />
            </a>

            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
            <img
              src="linkedin-logo.png"
              alt="LinkedIn"
              width={25}
              height={25}
              className="hover:scale-110 transition-transform duration-200"
            />
           </a>
          </div>

          <div className="mt-4">
            <h5 className="mb-3">Our Location</h5>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.7364079119354!2d77.66482771477544!3d9.56356189050988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06dbc7767a12a9%3A0x2480bb9cd066a729!2sKrishnan%20Kovil%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1683514818217!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KAGAZ Location"
              ></iframe>
            </div>
          </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-light-green">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h2 className="display-5 fw-bold">Frequently Asked Questions</h2>
              <div className="mx-auto" style={{ maxWidth: "700px" }}>
                <p className="lead">Find answers to common questions about our products and services.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      How are your products made?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Our products are made from recycled textile waste that goes through a process of sorting,
                      cleaning, pulping, and forming into sheets. We use eco-friendly methods that minimize water and
                      energy consumption.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Do you offer wholesale pricing?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes, we offer special pricing for bulk orders. Please contact us with your requirements, and we'll
                      provide a customized quote for your needs.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Can I customize the products with my school or company logo?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      We offer customization options for bulk orders, including adding your logo, custom sizes, and
                      special packaging. Please reach out to discuss your specific requirements.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      How do I place an order?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      For standard orders, you can contact us through our contact form, email, or phone. For bulk or
                      custom orders, please reach out directly so we can discuss your specific needs and provide a
                      quote.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 shadow-sm">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Do you offer delivery services?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes, we offer delivery services within the city and shipping options for other locations. Delivery
                      charges may apply based on your location and order size.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="display-5 fw-bold mb-4">Ready to Make a Difference?</h2>
              <p className="lead mb-4">
                Join us in our mission to reduce textile waste and create sustainable educational materials.
              </p>
              <a href="#" className="btn btn-primary btn-lg">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

