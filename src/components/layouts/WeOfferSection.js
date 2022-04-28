import React, {Component} from "react";

class WeOfferSection extends Component {
    render() {
        return (
            <section className="section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-title">What <span className="has-line">We Offer</span></h2>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="mt-40 text-center hover-grayscale">
                                <img src={process.env.PUBLIC_URL + '/assets/images/we-offer/01.png'} alt="" />
                                <h3 className="mt-20 font-weight-600 text-secondary">E-LEARNING</h3>
                                <p className="mt-20">Acadment’s E-learning feature has its own unique features with Real-Time Access | 
                                Personalized Learning | Global | Possibly Adaptive | Paperless.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="mt-40 text-center hover-grayscale">
                                <img src={process.env.PUBLIC_URL + '/assets/images/we-offer/02.png'} alt="" />
                                <h3 className="mt-20 font-weight-600 text-secondary">Virtual Classrooms</h3>
                                <p className="mt-20">Virtual classes bring the lecture to you. At the Acadment, our technology 
                                allows the instructors to deliver traditional classroom learning experiences over the Internet.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="mt-40 text-center hover-grayscale">
                                <img src={process.env.PUBLIC_URL + '/assets/images/we-offer/03.png'} alt="" />
                                <h3 className="mt-20 font-weight-600 text-secondary">LIVE VIDEO LECTURES</h3>
                                <p className="mt-20">Acadment provides interactive business & management
                                 live video lectures conducted by eminent faculties from reputed organizations.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="mt-40 text-center hover-grayscale">
                                <img src={process.env.PUBLIC_URL + '/assets/images/we-offer/04.png'} alt="" />
                                <h3 className="mt-20 font-weight-600 text-secondary">E-Library</h3>
                                <p className="mt-20">E-library is the most useful learning tool for students.
                                E-library is accessible to all students with their login credentials.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="mt-40 text-center hover-grayscale">
                                <img src={process.env.PUBLIC_URL + '/assets/images/we-offer/05.png'} alt="" />
                                <h3 className="mt-20 font-weight-600 text-secondary">LMS</h3>
                                <p className="mt-20">Learning Management System is the place where a student will get their Admission
                                 Details, Program Structure, Assignments & much more.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="mt-40 text-center hover-grayscale">
                                <img src={process.env.PUBLIC_URL + '/assets/images/we-offer/06.png'} alt="" />
                                <h3 className="mt-20 font-weight-600 text-secondary">RECORDED VIDEO LECTURES</h3>
                                <p className="mt-20">Recorded lectures are stored in our E-library for student’s 
                                reference purpose. Student can any time use this option for reference.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WeOfferSection;