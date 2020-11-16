import React from "react";
import "./Slider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image4 from "../Images/image4.jpeg";
import image2 from "../Images/image2.jpg";
import image5 from "../Images/image5.jpeg";
import image1 from "../Images/image1.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';

const responsive={
    extraLargeDesktop: {
        //You can name the screensize as per your choice
        breakpoint: {max: 4000, min: 3000},
        items: 3
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 3
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items:   1.5  
    }
};
class Slider extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            showOfficers: false,
            officers:[
                {
                    image: image4,
                    spanName:"Election Officer",
                    fname: "DR. MANOJ SANGLE",
                    address: "Om Shiv Vihar, Rahat Nagar, Behind Geeta Nagar,Akoli (Khurd), Akola-444002, Maharashtra",
                    phone: "+91 9822924128"
                },
                {
                    image: image1,
                    spanName: "Co-Election Officer",
                    fname: "DR. ANIL PATKI",
                    address: "Flat No 11/12, Shridhar Krupa Complex, Gold Finch Peth, Solapur-413007",
                    phone: "+91 9370425747"
                },
                {
                    image: image5,
                    spanName: "Co-Election Officer",
                    fname: "DR. DEVENDRA BACCHAV",
                    address: "Aarogya Sampada Ayu. Clinic,2, Rohini Apartment, Opposite Modern Cafe, Gangapur Road, Nashik-422005",
                    phone: "+91 9422760940"
                },
            ],
        }
    }
    render(){
        console.log(this.state.doctors);
        return(
            <div className="Slider_container">
            <div className="heading">ELECTION OFFICERS</div>
            <div className="car">  
                <Carousel
                  swipeable={true}
                  dragaable={false}
                  responsive={responsive}
                  showArrows={false}
                  ssr={false} //means to render carousel on server-side
                  //autoplay={this.props.deviceType !== "mobile" ? true: false}
                  //autoPlaySpped={1000}
                  keyBoardControl={true}
                  //customTransition="all .5"
                  //transitionDuration={500}
                  removeArrowOnDeviceType={["mobile"]}
                  deviceType={this.props.deviceType}>
                  
                  {
                      this.state.officers.map((officer, index)=>

                          <div className="row Slider__row">
                              <div className="col-md-3 Slider__measurement">
                                <div className="Slider__photo"><img className="Slider__picture" src={officer.image} alt="picture of officer"/><p className="Slider__names">{officer.spanName}</p></div>
                                <div className="Slider__fname">{officer.fname}</div>
                                <div className="Slider__address">{officer.address}</div>
                                <div className="Slider__phone">{officer.phone}</div>
                               </div>
                          </div>
                        )
                  }

                </Carousel>
                </div>
                </div>
        )
    }

}
export default Slider;