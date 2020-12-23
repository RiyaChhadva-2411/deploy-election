import React from "react";
import "./Slider.css";
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
    render(){
        
        return(
            <div className="Slider_container mobile-card-container">
            <div className="heading">ELECTION OFFICERS</div>
        <div className="row text-center flex-nowrap flex-sm-wrap Slider_row_styling">  
        
        <div className=" col-10 col-sm-3 Slider_mx-sm-auto ">
        <div>
            <div className="Slider__photo">
            <img className="Slider__picture" src={image4} alt="picture of officer"/>
            <p className="Slider__names">Election Officer</p></div>
            <div className="Slider__fname">DR. MANOJ SANGLE</div>
            <div className="Slider__address">Om Shiv Vihar, Rahat Nagar, Behind Geeta Nagar,Akoli (Khurd), Akola-444002, Maharashtra</div>
            <div className="Slider__phone"><svg className="Slider__svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg> +91 9822924128</div>
        </div>
        </div>

      
        <div class=" col-10 col-sm-3 Slider_mx-sm-auto ">
        <div className="Slider__measurement">
            <div className="Slider__photo">
            <img className="Slider__picture" src={image1} alt="picture of officer"/>
            <p className="Slider__names">Co-Election Officer</p></div>
            <div className="Slider__fname">DR. ANIL PATKI</div>
            <div className="Slider__address">Flat No 11/12, Shridhar Krupa Complex, Gold Finch Peth, Solapur-413007</div>
            <div className="Slider__phone"><svg className="Slider__svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg> +91 9370425747</div>
        </div>
        </div>

        <div class="col-10 col-sm-3 Slider_mx-sm-auto">
        <div className="Slider__measurement">
            <div className="Slider__photo">
            <img className="Slider__picture" src={image5} alt="picture of officer"/>
            <p className="Slider__names">Co-Election Officer</p></div>
            <div className="Slider__fname">DR. DEVENDRA BACCHAV</div>
            <div className="Slider__address">Aarogya Sampada Ayu. Clinic,2, Rohini Apartment, Opposite Modern Cafe, Gangapur Road, Nashik-422005</div>
            <div className="Slider__phone"><svg className="Slider__svg" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg> 9422760940</div>
        </div>
    </div>   
  </div>
                </div>
        )
    }

}
export default Slider;



// import React from "react";
// import "./Slider.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import image4 from "../Images/image4.jpeg";
// import image2 from "../Images/image2.jpg";
// import image5 from "../Images/image5.jpeg";
// import image1 from "../Images/image1.jpg";

// import 'bootstrap/dist/css/bootstrap.min.css';

// const responsive={
//     extraLargeDesktop: {
//         //You can name the screensize as per your choice
//         breakpoint: {max: 4000, min: 3000},
//         items: 3
//     },
//     desktop: {
//         breakpoint: {max: 3000, min: 1024},
//         items: 3
//     },
//     tablet: {
//         breakpoint: {max: 1024, min: 464},
//         items: 3
//     },
//     mobile: {
//         breakpoint: {max: 464, min: 0},
//         items:   1.5  
//     }
// };
// class Slider extends React.Component{
//     constructor(props)
//     {
//         super(props);
//         this.state={
//             showOfficers: false,
//             officers:[
//                 {
//                     image: image4,
//                     spanName:"Election Officer",
//                     fname: "DR. MANOJ SANGLE",
//                     address: "Om Shiv Vihar, Rahat Nagar, Behind Geeta Nagar,Akoli (Khurd), Akola-444002, Maharashtra",
//                     phone: "+91 9822924128"
//                 },
//                 {
//                     image: image1,
//                     spanName: "Co-Election Officer",
//                     fname: "DR. ANIL PATKI",
//                     address: "Flat No 11/12, Shridhar Krupa Complex, Gold Finch Peth, Solapur-413007",
//                     phone: "+91 9370425747"
//                 },
//                 {
//                     image: image5,
//                     spanName: "Co-Election Officer",
//                     fname: "DR. DEVENDRA BACCHAV",
//                     address: "Aarogya Sampada Ayu. Clinic,2, Rohini Apartment, Opposite Modern Cafe, Gangapur Road, Nashik-422005",
//                     phone: "+91 9422760940"
//                 },
//             ],
//         }
//     }
//     render(){
//         console.log(this.state.doctors);
//         return(
//             <div className="Slider_container">
//             <div className="heading">ELECTION OFFICERS</div>
//             <div className="car">  
//                 <Carousel
//                   swipeable={true}
//                   dragaable={false}
//                   responsive={responsive}
//                   showArrows={false}
//                   ssr={false} //means to render carousel on server-side
//                   //autoplay={this.props.deviceType !== "mobile" ? true: false}
//                   //autoPlaySpped={1000}
//                   keyBoardControl={true}
//                   //customTransition="all .5"
//                   //transitionDuration={500}
//                   removeArrowOnDeviceType={["mobile"]}
//                   deviceType={this.props.deviceType}>
                  
//                   {
//                       this.state.officers.map((officer, index)=>

//                           <div className="row Slider__row">
//                               <div className="col-md-3 Slider__measurement">
//                                 <div className="Slider__photo"><img className="Slider__picture" src={officer.image} alt="picture of officer"/><p className="Slider__names">{officer.spanName}</p></div>
//                                 <div className="Slider__fname">{officer.fname}</div>
//                                 <div className="Slider__address">{officer.address}</div>
//                                 <div className="Slider__phone">{officer.phone}</div>
//                                </div>
//                           </div>
//                         )
//                   }

//                 </Carousel>
//                 </div>
//                 </div>
//         )
//     }

// }
// export default Slider;