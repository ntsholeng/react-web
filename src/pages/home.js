import React from "react";

class Home extends React.Component{
    render()
    {
        return(
        <div> 
            
                    <header class="header_section">
            <div class="container">
            <nav class="navbar navbar-expand-lg custom_nav-container ">
                <a class="navbar-brand" href="#">
                <div class="logo_box">
                    <img src="assets/images/logo2.png" alt="" />
                </div>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mr-2">
                    <li class="nav-item active">
                    <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="service.html">Services</a>
                    </li>
                    
                    <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contacts</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="login.html">Login </a>
                    </li>
                </ul>
                
                </div>
            </nav>
            </div>
        </header>
        
        <section class=" slider_section">
            <div id="carouselExampleIndicators" class="carousel slide vert" data-ride="carousel">
            <ol class="carousel-indicators">
            
            
                
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <div class="slider_box">
                    <div class="fixed_company-detail">
                    <p>
                        KHEZWOITConsultant
                    </p>
                    </div>
                    <div class="slider-detail">
                    <div class="slider_detail-heading">
                        <h2>
                        Welcome to
                        </h2>
                        
                        <h1>
                        KHEZWO IT Consultant 
                        </h1>
                    </div>
                    <div class="slider_detail-text">
                        <p>
                            
                        To be recognised as excellent and effective leaders in IT 
        consulting business, in the whole of Southern Africa, both public and private
        sector enterprises. 
                            
                        </p>
                    </div>
                    
                    </div>
                </div>
                </div>
            
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </section>

        
        <section class="welcome_section layout_padding">
            <div class="container-fluid">
            <div class="row">
                <div class=" col-md-6">
                <div>
                    <img class="img-fluid" src="assets/images/welcome.jpg" alt="" />
                </div>
                </div>
                <div class=" col-md-6">
                <div class="welcome_detail">
                    
                
                    <p>
                    From IT strategy consulting and comprehensive technology roadmaps to the end-to-end development of scalable solutions, Intellectsoft delivers a full-cycle software development services that adapt seamlessly to your project requirements and business needs.
                    </p>
                    <div class="welcome_detail-btn">
                    <a href="about.html">
                        <span>
                        Read More
                        </span>
                        <img src="assets/images/arrow-black.png" alt="" class="ml-2" />
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        
        <section class="info_section layout_padding">
            <div class="container">
            <div class="row">
                <div class=" col-md-4 info_detail">
                <div>
                    <p>
                    We get to understand the needs of our clients so that we can tailor solutions to their exact needs, and deliver high-value results that transform their businesses.
                    </p>
                </div>
                </div>
                <div class=" col-md-4 address_container">
                <div>
                    <h3>
                    
                    </h3>
                    <div class="address_link-container">
                    <a href="">
                        <img src="assets/images/location.png" alt="" />
                        <span> Address: 73 Canal Street, Pretoria, 0002
                        </span>
                    </a>
                    <a href="">
                        <img src="assets/images/phone.png" alt="" />
                        <span> Tel: +27 12 456 789
                        </span>
                    </a>
                    <a href="">
                        <img src="assets/images/mail.png" alt="" />
                        <span>
                        Email: khezwoitconHomesultant@gmail.com
                        </span>
                    </a>
                    </div>
                </div>
                </div>
        </div>
            </div>
        </section>

      
        </div>
        );
    }
}

export default Home;