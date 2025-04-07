import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Process() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-light-green py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-4 fw-bold">Our Process</h1>
              <p className="lead">How we transform textile waste into high-quality educational materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h2 className="display-5 fw-bold">From Waste to Wonder</h2>
              <div className="mx-auto" style={{ maxWidth: "700px" }}>
                <p className="lead">
                  Our innovative process transforms discarded textile waste into valuable educational materials through
                  these key steps.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Process */}
          <div className="timeline">
            {/* Step 1 */}
            <div className="timeline-item">
              <div className="card border-0 shadow-sm">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src="/separation.jpg?height=300&width=400"
                      alt="Waste Collection"
                      width={400}
                      height={300}
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title">Step 1: Waste Separation</h3>
                      <p className="card-text">
                        We collect textile waste from various sources including garment factories, tailoring shops, and
                        donation centers. The collected waste is carefully sorted by type, color, and condition to
                        ensure optimal processing.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          This step reduces landfill waste and gives new life to discarded textiles.
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="timeline-item">
              <div className="card border-0 shadow-sm">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src="/cutting2.png?height=300&width=400"
                      alt="Soaking & Pulping"
                      width={400}
                      height={300}
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title"> Step 2: Cutting the Textile Waste</h3>
                      <p className="card-text">
                      The collected fabric waste is cut into small, manageable pieces.
                      Smaller fragments make it easier to process in the later stages.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                        Small pieces are easier to process, saving energy and improving quality.
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="timeline-item">
              <div className="card border-0 shadow-sm">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src="/soaking white,,.png?height=300&width=400"
                      alt="Deckling & Drying"
                      width={400}
                      height={300}
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title">Step 3: Soaking and Pulping</h3>
                      <p className="card-text">
                       The cut textile pieces are soaked in water mixed with washing powder.
                       Duration: At least 48 hours to ensure the fabric softens and gets thoroughly cleaned.
                       This step removes dirt, dye residues, and odors.
                       The soaked textile is then blended using a mixer or grinder.
                       This process turns the fabric into a smooth, uniform pulp suitable for molding.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                        Thorough soaking ensures cleaner and more hygienic final products.
                        Our pulping process uses minimal water and energy compared to traditional paper manufacturing.
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Step 4 */}
            <div className="timeline-item">
              <div className="card border-0 shadow-sm">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src="/placing pulp on deckle.png?height=300&width=400"
                      alt="Deckling & Drying"
                      width={400}
                      height={300}
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title">Step 4:  Molding into Sheets or PADs</h3>
                      <p className="card-text">
                      The pulp is spread evenly on a deckle or mold to form a chart or PAD shape.
                      Excess water is drained, and the shape is adjusted for consistency.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                        Custom shapes make it versatile for different educational needs.
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Step 5 */}
            <div className="timeline-item">
              <div className="card border-0 shadow-sm">
                <div className="row g-0">
                <div className="col-md-4">
                    <Image
                      src="/drying.jpg?height=300&width=400"
                      alt="Deckling & Drying"
                      width={400}
                      height={300}
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title">Step 5: Drying and Finishing Touches</h3>
                      <p className="card-text">
                      The shaped material is air-dried for at least 2 days.
                      Once dried, the final product is strong, flat, and ready to be used.
                      The dried charts or PADs can be trimmed, colored, or printed with educational content.
                      These finished products are now eco-friendly, cost-effective, and student-friendly tools for education.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                        Natural drying saves energy and strengthens the final product.
                        Adds educational value while maintaining eco-friendliness.
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="timeline-item">
              <div className="card border-0 shadow-sm">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src="/final product.png?height=300&width=400"
                      alt="Final Product"
                      width={400}
                      height={300}
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title">Step 6: Final Product</h3>
                      <p className="card-text">
                        Once dried, the sheets are cut to standard sizes and assembled into chart papers and PADs. Each
                        product undergoes quality control to ensure it meets our standards for durability, texture, and
                        appearance. The finished products are then packaged using eco-friendly materials.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Every KAGAZ product is unique, with subtle variations in texture and color that reflect its
                          handcrafted nature.
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Features */}
      <section className="section-padding bg-light-green">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h2 className="display-5 fw-bold">Sustainability Features</h2>
              <div className="mx-auto" style={{ maxWidth: "700px" }}>
                <p className="lead">Our process is designed with sustainability at its core.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="bi bi-droplet fs-1 text-green"></i>
                  </div>
                  <h4>Water Conservation</h4>
                  <p>
                    Our process uses 70% less water than traditional paper manufacturing, and we recycle water
                    throughout our production cycle.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="bi bi-lightning fs-1 text-green"></i>
                  </div>
                  <h4>Energy Efficiency</h4>
                  <p>
                    We utilize natural drying methods and energy-efficient equipment to minimize our carbon footprint.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="bi bi-trash fs-1 text-green"></i>
                  </div>
                  <h4>Zero Waste</h4>
                  <p>
                    Any scraps or trimmings from our production are reincorporated into new batches, creating a
                    closed-loop system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="mb-4">Quality Control</h2>
              <p>
                At KAGAZ, we're committed to producing high-quality products that meet or exceed industry standards.
                Every chart paper and PAD undergoes rigorous testing to ensure:
              </p>
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item bg-transparent">
                  <i className="bi bi-check-circle text-green me-2"></i> Durability and longevity
                </li>
                <li className="list-group-item bg-transparent">
                  <i className="bi bi-check-circle text-green me-2"></i> Smooth writing surface
                </li>
                <li className="list-group-item bg-transparent">
                  <i className="bi bi-check-circle text-green me-2"></i> Consistent thickness and texture
                </li>
                <li className="list-group-item bg-transparent">
                  <i className="bi bi-check-circle text-green me-2"></i> Eco-friendly composition
                </li>
                <li className="list-group-item bg-transparent">
                  <i className="bi bi-check-circle text-green me-2"></i> Aesthetic appeal
                </li>
              </ul>
              <p>
                Our quality control team inspects each batch to ensure that our customers receive only the best
                products.
              </p>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <Image
                src="/cust_ord.png?height=400&width=600"
                alt="Quality Control"
                width={600}
                height={400}
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

