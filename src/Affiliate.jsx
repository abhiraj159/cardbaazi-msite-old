import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Affiliate.css'

function Affiliate() {
    return(
        <>
        <div id="wrapper2">
        <div id="system-message-container">
        </div>

        <article class="item-page">

            <div class="pull-left"></div>
            <section class="banner mb-3">
                <div class="container-fluid p-0 m-0">
                    <img src="images/affiliate-banner-msite.jpg"
                        className="img-fluid w-100 h-auto" />
                </div>
            </section>

            <section id="stepsCard" class="zigzagbg" style="background-position-y: -3% !important;">
                <div class="container">
                    <div class="row text-center p-1 p-sm-5">
                        <h2 class="fw-bold pt-3 aff_pro_commonHeading aff_pro_heading">4 easy steps to <span
                                class="text-blue">avail
                                this unreal deal!</span></h2>
                        <p class="text-muted px-sm-3 pb-lg-3">How to get started</p>

                        <div class="col "><img
                                src="images/msite-affiliate-step-1.png"
                                class="img-fluid w-100 rounded" /></div>
                        <div class="col "><img
                                src="images/msite-affiliate-step-2.png"
                                class="img-fluid w-100 rounded" /></div>
                        <div class="w-100" style="margin:.7rem"></div>
                        <div class="col "><img
                                src="images/msite-affiliate-step-3.png"
                                class="img-fluid w-100 rounded" /></div>
                        <div class="col "><img
                                src="images/msite-affiliate-step-4.png"
                                class="img-fluid w-100 rounded" /></div>


                        
                    </div>
                </div>
            </section>
            
            <section id="">
                <div class="container">
                    <div class="row text-center py-4">
                        <h2 class="fw-bold aff_pro_commonHeading">Why choose <span class="text-blue">CardBaazi Partner
                                Program?
                            </span></h2>
                        <p class="text-muted">Win exciting cash prizes!</p>

                        <div class="col "><img src="images/affiliate-card-1.jpg"
                                class="img-fluid w-100 rounded" /></div>
                        <div class="col "><img src="images/affiliate-card-2.jpg"
                                class="img-fluid w-100 rounded" /></div>
                        <div class="w-100" style="margin:.7rem"></div>
                        <div class="col "><img src="images/affiliate-card-3.jpg"
                                class="img-fluid w-100 rounded" /></div>
                        <div class="col "><img src="images/affiliate-card-4.jpg"
                                class="img-fluid w-100 rounded" /></div>

                        
                    </div>
                </div>
            </section>
            <section id="affiliate" className="bg-light">
                
                <div className="container">
                    <div className="row align-items-center affPro pb-4 py-sm-4 ">
                        <div className="col-md-6"><img className="w-100"
                                src="images/affiliate-join-program.png" alt="" />
                        </div>
                        <div className="col-md-6 p-5 text-lg-start">
                            <h2 className="fw-bold aff_pro_commonHeading">Want to <span className="text-blue"> Join The
                                    Program?</span></h2>
                            <p className="text-muted">Start your journey of earning unlimited cashback by becoming our
                                esteemed partner.
                            </p>
                            <button className="btn btn-primary btn-lg buttonRadius affiliateJoinBtn" onclick="openScreen('BecomeAPartner');">Become a
                                    partner</button>
                            
                        </div>
                    </div>
                </div>
            </section>
            <section id="Faq">
                <div className="container">
                    <div className="row text-sm-start p-1 p-sm-1">
                        <h2 className="fw-bold py-3 aff_pro_commonHeading">FAQ<span className="text-blue">'s</span></h2>
                        <div className="accordion pb-5" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        How do cashbacks work?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse show"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Rake is a percentage of the value involved in each cash game. Every
                                        time your referred users play cash games on
                                        CardBaazi, you will earn upto 30% cashback on the rake.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Is there a cap on the earnings?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                                    data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">No, there is no capping to our affiliate’s earnings. Bring aboard as
                                        many players as you can and earn unlimited cashback.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                        How can I track my earnings?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">You will get access to a dashboard which you can use to track your
                                        progress and check how much you are earning through a
                                        particular player.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseFour" aria-expanded="false"
                                        aria-controls="flush-collapseFour">
                                        How can I sign-up to this program?
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                                    data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">You can fill the form given above to enrol in the CardBaazi Partner
                                        Program or email us at playerrelations@cardbaazi.com
                                        </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseFive" aria-expanded="false"
                                        aria-controls="flush-collapseFive">
                                        Is there a minimum period of time of collaboration?
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive"
                                    data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Yes, we will be partnering for a minimum one month.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                        What are the available modes of transaction to withdraw my earnings?
                                    </button>
                                </h2>
                                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix"
                                    data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">There are two options available for you:
                                        <ol className="ps-3">
                                            <li>Transfer Commission: By choosing this option you can transfer your earnings to your
                                                CardBaazi account.</li>
                                            <li>Affiliate Withdrawal: By choosing this option you can transfer your earnings
                                                directly to
                                                your linked bank account with
                                                5% TDS applicable.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>	
        </article>

    </div>
        </>
    );
}

export default Affiliate;