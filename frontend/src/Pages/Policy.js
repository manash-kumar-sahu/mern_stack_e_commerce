import React from "react";
import Layout from "./../Components/layout/Layout";
import privacy from "../images/privacy.svg"

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus " style={{marginTop:"20px"}}>
        <div className="col-md-6 ">
          <img
            src={privacy}
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Enzuzo's privacy policy has an easy-to-navigate structure based on a pull-down menu, where it lists important details such as the nature of data collected, user rights, cookie policies, and how to make a data request.<br/> 
          It also discusses third party services and personally identifiable information might be shared with them.<br/>
           <br/>The information displayed in each menu item is carefully organized with bullet points and short paragraphs so that you're able to understand the policy without feeling overwhelmed. 

            As a Canadian company, Enzuzo's privacy policy complies with Canada's personal information protection law, by informing users exactly what information is collected and processed</p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
