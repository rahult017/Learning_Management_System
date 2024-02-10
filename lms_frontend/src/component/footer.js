function FooterScreen() {
    return (
        <footer className="footer bg-dark text-white mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <h5 className="text-uppercase">About Us</h5>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nisi sit amet nunc congue fringilla.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <h5 className="text-uppercase">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-muted">Home</a></li>
                            <li><a href="#" className="text-muted">Courses</a></li>
                            <li><a href="#" className="text-muted">Teacher</a></li>
                            <li><a href="#" className="text-muted">About Us</a></li>
                            <li><a href="#" className="text-muted">Privacy Policy</a></li>
                            <li><a href="#" className="text-muted">Terms of Use</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <h5 className="text-uppercase">Contact Us</h5>
                        <ul className="list-unstyled">
                            <li>123 Street Name, City</li>
                            <li>info@example.com</li>
                            <li>(123) 456-7890</li>
                        </ul>
                    </div>
                </div>
                <hr className="bg-light" />
                <div className="row align-items-center">
                    <div className="col-md-6 text-md-start text-center">
                        <p className="mb-md-0">&copy; 2024 Your Website. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-md-end text-center">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item"><a href="#"><i className="fab fa-facebook"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterScreen;
