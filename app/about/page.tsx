import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-light-green py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-4 fw-bold">About KAGAZ</h1>
              <p className="lead">Learn about our mission, team, and the story behind our sustainable venture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="mb-4">Our Vision & Mission</h2>
              <p className="mb-4">
                At KAGAZ, we envision a world where waste is transformed into valuable resources, creating a circular
                economy that benefits both people and the planet.
              </p>
              <h5 className="mb-3">Our Vision</h5>
              <p>
                To be a leading innovator in sustainable educational materials, proving that eco-friendly products can
                be high-quality, affordable, and accessible to all.
              </p>
              <h5 className="mb-3 mt-4">Our Mission</h5>
              <p>
                To reduce textile waste by transforming it into innovative, eco-friendly chart papers and PADs that meet
                the needs of students, teachers, and professionals while promoting environmental sustainability.
              </p>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <Image
                src="/Vision.png?height=400&width=600"
                alt="KAGAZ Vision"
                width={600}
                height={400}
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-light-green">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h2 className="display-5 fw-bold">Meet Our Team</h2>
              <div className="mx-auto" style={{ maxWidth: "700px" }}>
                <p className="lead">
                  The passionate individuals behind KAGAZ who are committed to making a difference.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="text-center pt-4">
                  <Image
                    src="/pavan.jpg?height=150&width=150"
                    alt="Team Member 1"
                    width={150}
                    height={150}
                    className="rounded-circle"
                  />
                </div>
                <div className="card-body text-center">
                  <h4>KOLLIPARA PAVAN KUMAR</h4>
                  <p className="text-muted">Product Developer</p>
                  <p>
                  Pavan leads the innovation and development of our eco-friendly chart papers and exam PADs. He ensures that every product we create is sustainable, practical, and meets the needs of students and educators.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="text-center pt-4">
                  <Image
                    src="/pranav.jpg?height=150&width=150"
                    alt="Team Member 2"
                    width={150}
                    height={150}
                    className="rounded-circle"
                  />
                </div>
                <div className="card-body text-center">
                  <h4>MANTHENA PRANAV GOUD</h4>
                  <p className="text-muted">Strategy & Growth Manager</p>
                  <p>
                  Pranav shapes the big picture for KAGAZ. From identifying growth opportunities to planning new initiatives, he ensures our venture scales sustainably while staying true to our mission.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="text-center pt-4">
                  <Image
                    src="/harish.jpg?height=150&width=150"
                    alt="Team Member 3"
                    width={150}
                    height={150}
                    className="rounded-circle"
                  />
                </div>
                <div className="card-body text-center">
                  <h4>KALLURI HARISH</h4>
                  <p className="text-muted">Public Relations & Outreach Coordinator</p>
                  <p>
                  Harish is our bridge to the community. He fosters relationships with partners, schools, NGOs, and the public to grow our impact and build long-lasting collaborations.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="text-center pt-4">
                  <Image
                    src="/Jagadeesh.jpg?height=150&width=150"
                    alt="Team Member 3"
                    width={150}
                    height={150}
                    className="rounded-circle"
                  />
                </div>
                <div className="card-body text-center">
                  <h4>KOLLIPARA JAGADEESH</h4>
                  <p className="text-muted">Marketing Lead</p>
                  <p>
                  Jagadeesh is the voice of KAGAZ. He takes care of spreading our mission, building brand awareness, and connecting our products with schools, students, and environmentally conscious customers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h2 className="display-5 fw-bold">Our Story</h2>
              <div className="mx-auto" style={{ maxWidth: "700px" }}>
                <p className="lead">
                  The journey behind KAGAZ and how we're transforming waste into educational innovation.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Image
                src="/Kagaz-beg.png?height=400&width=600"
                alt="KAGAZ Story"
                width={600}
                height={400}
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <h3 className="mb-4">How It All Began</h3>
              <p>
                KAGAZ was born from a simple observation: the massive amount of textile waste generated in our
                communities and the ongoing need for affordable, quality educational materials.
              </p>
              <p>
                Our founder noticed that many students couldn't afford quality chart papers and PADs, while
                simultaneously, tons of textile waste was being discarded. This sparked the idea: what if we could
                transform this waste into educational materials?
              </p>
              <p>
                After months of research, experimentation, and collaboration with local artisans and environmental
                experts, we developed a process to convert textile waste into high-quality paper products. KAGAZ was
                officially launched in [Year], with a mission to reduce waste and support education through sustainable
                innovation.
              </p>
              <p>Today, we continue to grow, innovate, and expand our impact, one chart paper at a time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-light-green">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h2 className="display-5 fw-bold">Our Values</h2>
              <div className="mx-auto" style={{ maxWidth: "700px" }}>
                <p className="lead">The principles that guide everything we do at KAGAZ.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="bi bi-recycle fs-1 text-green"></i>
                  </div>
                  <h4>Sustainability</h4>
                  <p>
                    We are committed to environmental sustainability in every aspect of our operations, from sourcing to
                    production to packaging.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="bi bi-lightbulb fs-1 text-green"></i>
                  </div>
                  <h4>Innovation</h4>
                  <p>
                    We constantly seek new ways to improve our products and processes, pushing the boundaries of what's
                    possible with recycled materials.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="bi bi-people fs-1 text-green"></i>
                  </div>
                  <h4>Community</h4>
                  <p>
                    We believe in the power of community and work closely with local artisans, schools, and
                    organizations to create positive impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

