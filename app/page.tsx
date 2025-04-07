import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Turning Textile Waste into Educational Innovation</h1>
              <p className="lead mb-4">
                At KAGAZ, we transform textile waste into high-quality, eco-friendly chart papers and PADs for students,
                teachers, and professionals.
              </p>
              <div className="d-flex gap-3">
                <Link href="/products" className="btn btn-primary btn-lg">
                  Our Products
                </Link>
                <Link href="/about" className="btn btn-outline-primary btn-lg">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <Image
                src="/Home_image.png?height=500&width=600"
                alt="KAGAZ Products Collage"
                width={600}
                height={500}
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h2 className="display-5 fw-bold">Our Mission</h2>
              <div className="mx-auto" style={{ maxWidth: "700px" }}>
                <p className="lead">
                  We're on a mission to reduce textile waste while creating sustainable educational materials that don't
                  compromise on quality.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <Image
                src="/About.png?height=400&width=500"
                alt="Our Team"
                width={500}
                height={400}
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <h3 className="mb-4">Who We Are</h3>
              <p>
                KAGAZ is a sustainable venture that transforms textile waste into innovative, eco-friendly chart papers
                and PADs. Our team is passionate about creating products that support both environmental sustainability
                and educational needs.
              </p>
              <Link href="/about" className="btn btn-outline-primary mt-3">
                About Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section Preview */}
      <section className="section-padding bg-light-green">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h2 className="display-5 fw-bold">Our Process</h2>
              <div className="mx-auto" style={{ maxWidth: "700px" }}>
                <p className="lead">
                  From waste collection to finished product, our process is designed to be sustainable at every step.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <Image
                      src="/separation.jpg?height=100&width=100"
                      alt="Waste Collection"
                      width={100}
                      height={100}
                      className="img-fluid"
                    />
                  </div>
                  <h4>Waste Collection</h4>
                  <p>We collect and sort textile waste from various sources.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <Image
                      src="/soaking white,,.png?height=100&width=100"
                      alt="Soaking & Pulping"
                      width={100}
                      height={100}
                      className="img-fluid"
                    />
                  </div>
                  <h4>Soaking & Pulping</h4>
                  <p>The textile waste is processed into a pulp.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <Image
                      src="/drying.jpg?height=100&width=100"
                      alt="Deckling & Drying"
                      width={100}
                      height={100}
                      className="img-fluid"
                    />
                  </div>
                  <h4>Deckling & Drying</h4>
                  <p>The pulp is formed into sheets and dried.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <Image
                      src="/final product.png?height=100&width=100"
                      alt="Final Product"
                      width={100}
                      height={100}
                      className="img-fluid"
                    />
                  </div>
                  <h4>Final Product</h4>
                  <p>The finished charts and PADs are ready for use.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link href="/process" className="btn btn-primary">
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section Preview */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h2 className="display-5 fw-bold">Our Products</h2>
              <div className="mx-auto" style={{ maxWidth: "700px" }}>
                <p className="lead">
                  Discover our range of eco-friendly chart papers and PADs made from recycled textile waste.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Chart Paper"
                  width={400}
                  height={300}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4>Recycled Chart Papers</h4>
                  <p>High-quality chart papers made from 100% recycled textile waste.</p>
                  <p className="text-success fw-bold">₹50 per sheet</p>
                </div>
                <div className="card-footer bg-white border-0">
                  <Link href="/products" className="btn btn-outline-primary w-100">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Writing PAD"
                  width={400}
                  height={300}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4>Eco-Friendly Writing PADs</h4>
                  <p>Sustainable writing PADs available in various sizes.</p>
                  <p className="text-success fw-bold">₹30 - ₹80</p>
                </div>
                <div className="card-footer bg-white border-0">
                  <Link href="/products" className="btn btn-outline-primary w-100">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Custom Products"
                  width={400}
                  height={300}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4>Custom Solutions</h4>
                  <p>Tailored products for schools, offices, and businesses.</p>
                  <p className="text-success fw-bold">Contact for pricing</p>
                </div>
                <div className="card-footer bg-white border-0">
                  <Link href="/contact" className="btn btn-outline-primary w-100">
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link href="/products" className="btn btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Section Preview */}
      <section className="section-padding bg-light-green">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h2 className="display-5 fw-bold">Our Impact</h2>
              <div className="mx-auto" style={{ maxWidth: "700px" }}>
                <p className="lead">
                  Every KAGAZ product contributes to reducing textile waste and supporting sustainable education.
                </p>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="impact-counter">500+</div>
              <h4>Kg of Textile Waste Recycled</h4>
            </div>
            <div className="col-md-4 mb-4">
              <div className="impact-counter">1000+</div>
              <h4>Products Created</h4>
            </div>
            <div className="col-md-4 mb-4">
              <div className="impact-counter">20+</div>
              <h4>Schools Supported</h4>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link href="/impact" className="btn btn-primary">
              Learn More About Our Impact
            </Link>
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
              <Link href="/contact" className="btn btn-primary btn-lg">
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

