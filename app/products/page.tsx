import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Products() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-light-green py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-4 fw-bold">Our Products</h1>
              <p className="lead">
                Discover our range of eco-friendly educational materials made from recycled textile waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Filters */}
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex flex-wrap justify-content-center gap-2">
                <button className="btn btn-outline-primary active">All Products</button>
                <button className="btn btn-outline-primary">Chart Papers</button>
                <button className="btn btn-outline-primary">Writing PADs</button>
                <button className="btn btn-outline-primary">Custom Products</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Gallery */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            {/* Product 1 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm product-card">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="A4 Chart Paper"
                  width={400}
                  height={300}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4>A4 Chart Paper</h4>
                  <p>
                    Standard A4 size chart paper made from 100% recycled textile waste. Perfect for school projects and
                    presentations.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-success fw-bold">₹50 per sheet</span>
                    <span className="badge bg-success">In Stock</span>
                  </div>
                </div>
                <div className="card-footer bg-white border-0">
                  <button
                    className="btn btn-outline-primary w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#productModal1"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm product-card">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="A3 Chart Paper"
                  width={400}
                  height={300}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4>A3 Chart Paper</h4>
                  <p>
                    Large A3 size chart paper ideal for detailed presentations and art projects. Made from recycled
                    textile waste.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-success fw-bold">₹80 per sheet</span>
                    <span className="badge bg-success">In Stock</span>
                  </div>
                </div>
                <div className="card-footer bg-white border-0">
                  <button
                    className="btn btn-outline-primary w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#productModal2"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm product-card">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Small Writing PAD"
                  width={400}
                  height={300}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4>Small Writing PAD</h4>
                  <p>
                    Compact writing PAD with 50 sheets. Perfect for notes and quick sketches. Eco-friendly and
                    sustainable.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-success fw-bold">₹30 per PAD</span>
                    <span className="badge bg-success">In Stock</span>
                  </div>
                </div>
                <div className="card-footer bg-white border-0">
                  <button
                    className="btn btn-outline-primary w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#productModal3"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm product-card">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Medium Writing PAD"
                  width={400}
                  height={300}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4>Medium Writing PAD</h4>
                  <p>Standard size writing PAD with 100 sheets. Great for everyday use in schools and offices.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-success fw-bold">₹50 per PAD</span>
                    <span className="badge bg-success">In Stock</span>
                  </div>
                </div>
                <div className="card-footer bg-white border-0">
                  <button
                    className="btn btn-outline-primary w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#productModal4"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Product 5 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm product-card">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Large Writing PAD"
                  width={400}
                  height={300}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4>Large Writing PAD</h4>
                  <p>
                    Large format writing PAD with 75 sheets. Ideal for artists, designers, and detailed note-taking.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-success fw-bold">₹80 per PAD</span>
                    <span className="badge bg-warning text-dark">Low Stock</span>
                  </div>
                </div>
                <div className="card-footer bg-white border-0">
                  <button
                    className="btn btn-outline-primary w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#productModal5"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Product 6 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm product-card">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Custom School Kit"
                  width={400}
                  height={300}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4>Custom School Kit</h4>
                  <p>
                    Customizable school kit including chart papers and PADs. Available with school branding and in bulk
                    quantities.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-success fw-bold">Contact for pricing</span>
                    <span className="badge bg-primary">Custom Order</span>
                  </div>
                </div>
                <div className="card-footer bg-white border-0">
                  <Link href="/contact" className="btn btn-outline-primary w-100">
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="section-padding bg-light-green">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h2 className="display-5 fw-bold">Product Features</h2>
              <div className="mx-auto" style={{ maxWidth: "700px" }}>
                <p className="lead">What makes KAGAZ products special and sustainable.</p>
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
                  <h4>100% Recycled</h4>
                  <p>Made entirely from recycled textile waste, saving resources and reducing landfill waste.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="bi bi-pencil fs-1 text-green"></i>
                  </div>
                  <h4>Excellent Writing Surface</h4>
                  <p>Smooth texture that works well with all types of pens, pencils, and markers.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="bi bi-shield-check fs-1 text-green"></i>
                  </div>
                  <h4>Durable & Long-lasting</h4>
                  <p>Strong fiber composition ensures our products are tear-resistant and long-lasting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Orders */}
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="mb-4">Bulk & Custom Orders</h2>
              <p>Looking for larger quantities or custom products for your school, office, or organization?</p>
              <p>
                We offer special pricing for bulk orders and can customize our products to meet your specific needs,
                including:
              </p>
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item bg-transparent">
                  <i className="bi bi-check-circle text-green me-2"></i> Custom sizes and formats
                </li>
                <li className="list-group-item bg-transparent">
                  <i className="bi bi-check-circle text-green me-2"></i> Branded products with your logo
                </li>
                <li className="list-group-item bg-transparent">
                  <i className="bi bi-check-circle text-green me-2"></i> Special packaging options
                </li>
                <li className="list-group-item bg-transparent">
                  <i className="bi bi-check-circle text-green me-2"></i> Educational kits for schools
                </li>
              </ul>
              <Link href="/contact" className="btn btn-primary">
                Contact Us for Bulk Orders
              </Link>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Bulk Orders"
                width={600}
                height={400}
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Modals */}
      {/* These would be implemented with JavaScript in a real application */}

      <Footer />
    </>
  )
}

