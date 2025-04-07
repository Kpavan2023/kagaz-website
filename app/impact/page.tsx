import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Impact() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-light-green py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-4 fw-bold">Our Impact</h1>
              <p className="lead">How KAGAZ is making a difference for the environment and education.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h2 className="display-5 fw-bold">Impact by Numbers</h2>
              <div className="mx-auto" style={{ maxWidth: "700px" }}>
                <p className="lead">Every KAGAZ product contributes to our mission of sustainability and education.</p>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="impact-counter">500+</div>
                  <h4>Kg of Textile Waste Recycled</h4>
                  <p>Diverted from landfills and given new life as educational materials.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="impact-counter">1000+</div>
                  <h4>Products Created</h4>
                  <p>Chart papers and PADs made from recycled materials and used by students and professionals.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="impact-counter">20+</div>
                  <h4>Schools Supported</h4>
                  <p>Educational institutions using our sustainable products for teaching and learning.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="impact-counter">5+</div>
                  <h4>Local Jobs Created</h4>
                  <p>Employment opportunities generated in our community through sustainable manufacturing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="section-padding bg-light-green">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="mb-4">Environmental Impact</h2>
              <p>
                At KAGAZ, we're committed to reducing our environmental footprint and promoting sustainability. Our
                process and products help:
              </p>
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item bg-transparent">
                  <i className="bi bi-check-circle text-green me-2"></i> Reduce textile waste in landfills
                </li>
                <li className="list-group-item bg-transparent">
                  <i className="bi bi-check-circle text-green me-2"></i> Conserve water compared to traditional paper
                  manufacturing
                </li>
                <li className="list-group-item bg-transparent">
                  <i className="bi bi-check-circle text-green me-2"></i> Lower carbon emissions through energy-efficient
                  production
                </li>
                <li className="list-group-item bg-transparent">
                  <i className="bi bi-check-circle text-green me-2"></i> Decrease demand for virgin paper materials
                </li>
                <li className="list-group-item bg-transparent">
                  <i className="bi bi-check-circle text-green me-2"></i> Promote circular economy principles
                </li>
              </ul>
              <p>Every KAGAZ product represents a step toward a more sustainable future.</p>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <Image
                src="/environmental_imp.png?height=400&width=600"
                alt="Environmental Impact"
                width={600}
                height={400}
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Educational Impact */}
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2">
              <h2 className="mb-4">Educational Impact</h2>
              <p>Our products do more than just reduce waste—they support education and learning in several ways:</p>
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item bg-transparent">
                  <i className="bi bi-check-circle text-green me-2"></i> Providing affordable educational materials to
                  students
                </li>
                <li className="list-group-item bg-transparent">
                  <i className="bi bi-check-circle text-green me-2"></i> Supporting schools with limited resources
                </li>
                <li className="list-group-item bg-transparent">
                  <i className="bi bi-check-circle text-green me-2"></i> Raising awareness about sustainability through
                  our products
                </li>
                <li className="list-group-item bg-transparent">
                  <i className="bi bi-check-circle text-green me-2"></i> Offering educational workshops on recycling and
                  sustainability
                </li>
              </ul>
              <p>
                We believe that quality education should be accessible to all, and our products help make that possible.
              </p>
            </div>
            <div className="col-md-6 mt-4 mt-md-0 order-md-1">
              <Image
                src="/Edu_imp.png?height=400&width=600"
                alt="Educational Impact"
                width={600}
                height={400}
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-light-green">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h2 className="display-5 fw-bold">What People Say</h2>
              <div className="mx-auto" style={{ maxWidth: "700px" }}>
                <p className="lead">Hear from the schools, teachers, and students who use our products.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="testimonial">
                <p className="mb-3">
                  "KAGAZ chart papers have been a game-changer for our school. Not only are they affordable, but they
                  also help us teach our students about sustainability in a tangible way. The quality is excellent, and
                  we love supporting such an innovative venture."
                </p>
                <div className="d-flex align-items-center">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Principal"
                    width={50}
                    height={50}
                    className="rounded-circle me-3"
                  />
                  <div>
                    <h5 className="mb-0">Priya Sharma</h5>
                    <p className="text-muted mb-0">Principal, Green Valley School</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="testimonial">
                <p className="mb-3">
                  "As an art teacher, I'm always looking for sustainable materials for my students. KAGAZ products have
                  a unique texture that works beautifully with various media. My students love knowing that their art
                  projects are helping the environment."
                </p>
                <div className="d-flex align-items-center">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Art Teacher"
                    width={50}
                    height={50}
                    className="rounded-circle me-3"
                  />
                  <div>
                    <h5 className="mb-0">Rajesh Kumar</h5>
                    <p className="text-muted mb-0">Art Teacher, Creative Minds Academy</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="testimonial">
                <p className="mb-3">
                  "We've been using KAGAZ PADs for our office for the past year, and we're impressed with the quality
                  and durability. It's a small change that has made a big difference in our sustainability efforts, and
                  our team feels good about using recycled products."
                </p>
                <div className="d-flex align-items-center">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Office Manager"
                    width={50}
                    height={50}
                    className="rounded-circle me-3"
                  />
                  <div>
                    <h5 className="mb-0">Anita Desai</h5>
                    <p className="text-muted mb-0">Office Manager, EcoTech Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Collaborations */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h2 className="display-5 fw-bold">Our Partners</h2>
              <div className="mx-auto" style={{ maxWidth: "700px" }}>
                <p className="lead">Organizations that support and collaborate with us in our mission.</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center text-center">
            <div className="col-md-3 col-6 mb-4">
              <Image
                src="/placeholder.svg?height=100&width=150"
                alt="Partner 1"
                width={150}
                height={100}
                className="img-fluid"
              />
            </div>
            <div className="col-md-3 col-6 mb-4">
              <Image
                src="/placeholder.svg?height=100&width=150"
                alt="Partner 2"
                width={150}
                height={100}
                className="img-fluid"
              />
            </div>
            <div className="col-md-3 col-6 mb-4">
              <Image
                src="/placeholder.svg?height=100&width=150"
                alt="Partner 3"
                width={150}
                height={100}
                className="img-fluid"
              />
            </div>
            <div className="col-md-3 col-6 mb-4">
              <Image
                src="/placeholder.svg?height=100&width=150"
                alt="Partner 4"
                width={150}
                height={100}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-light-green">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="display-5 fw-bold mb-4">Join Our Mission</h2>
              <p className="lead mb-4">Help us create a more sustainable future through education and innovation.</p>
              <div className="d-flex justify-content-center gap-3">
                <Link href="/products" className="btn btn-primary btn-lg">
                  Shop Products
                </Link>
                <Link href="/contact" className="btn btn-outline-primary btn-lg">
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

