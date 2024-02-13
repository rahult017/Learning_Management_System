import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <div className="container" style={{ marginTop: '70px' }}>
      {/* Start  Latest Course */}
      <h3 className="pb-1 mb-4">Latest Courses  <a href="#" className="float-end">See All</a></h3>
      <div className="row mb-6">
        <div className="col-md-3">
          <div className="card">
          <Link to="/detail/1/"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to="/detail/1/">Card Title </Link></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
          <Link to="/detail/2/"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to="/detail/2/">Card Title </Link></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
          <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Card Title </a></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
          <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Card Title </a></h5>
            </div>
          </div>
        </div>
      </div>
      {/* End  Latest Courses */}

      {/* Start  Popular Courses */}
      <h3 className="pb-1 mb-4 mt-5">Popular Courses  <a href="#" className="float-end">See All</a></h3>
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card">
          <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Card Title </a></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
          <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Card Title </a></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
          <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Card Title </a></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
          <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Card Title </a></h5>
            </div>
          </div>
        </div>
      </div>
      {/* End Popular Courses */}

      {/* Start  Popular Teacher */}
      <h3 className="pb-1 mb-4"> Popular Teacher <a href="#" className="float-end">See All</a> </h3>
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card">
          <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Card Title </a></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
          <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Card Title </a></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
          <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Card Title </a></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
          <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Card Title </a></h5>
            </div>
          </div>
        </div>
      </div>
      {/* End  Popular  Teacher */}

      {/* Start Student Testimonial */}
      <h3 className="pb-1 mb-4">  Student Testimonial </h3>
      <div id="carouselExampleCaptions" className="carousel slide bg-dark text-white py-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <figure class="text-center">
              <blockquote class="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item">
            <figure class="text-center">
              <blockquote class="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item">
            <figure class="text-center">
              <blockquote class="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* End Student Testimonial*/}
    </div>
  );
}

export default HomeScreen;
