import { render } from '@testing-library/react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Imp_notice.css'
import image5 from "../Images/image5.jpeg";
function Imp_notice() {
    return(
       
        <div className="Imp_notice_container">
            
                <div className="row">
                <div className="col-sm-7">
                    <div className="Imp_notice_heading">
                        Important notice
                    </div>
                    <div className="Imp_notice_sub_heading">
                        by General Secretary <br/>
                            NIMA CC
                    </div>
                   
                </div>
                </div>

                    <div className="row flex-column-reverse flex-md-row">
                    <div className="col-sm-7 col-xs-12 ">
                    <div className="Imp_notice_salutation">
                        To,<br/>
                        All the members of NIMA CC<br/>
                        Respected sir,
                    </div>
                    <div className="Imp_notice_body">
                        This is to inform you that there is a misprint in the nomination form send 
                        to you by me with the Notice of the 61st Annual Central Council Meeting
                        of NIMA about the nomination paper must reach the election officer on 
                        or before date 08 March 2020. In the form it is misprinted as 7th April 
                        2020. In the last line of nomination form. But the correct date is 10th 
                        March 2020. 
                    </div>
                    <div className="Imp_notice_thanking">
                         Yours Sincerely,<br/>
                         Dr. Malhar Shetty<br/>
                         Gen. Secretary   <br/>
                         <br/>
                        <div className="Imp_notice_please_read"> *Please read last date to reach nomination paper as 25th March 2019.</div> 
                    </div>
                </div>

                <div className="col-sm-5 col-xs-12 ">
                <div className="Imp_notice_gen_secretary">
                 <div  className="Imp_notice_Slider_photo">
                     <img className= "Imp_notice_Slider_picture" src={image5} />
                     <p className="Imp_notice_Slider_names">Gen. Secretary</p>
                 </div>
                
                 <div className="Imp_notice_Slider_fname">
                     DR. SHANTILAL KISHAN SHARMA
                 </div>
                </div>
                </div>

            </div>
        </div>
        
    )
     
}


export default Imp_notice;

