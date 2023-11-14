import React from 'react';
import MealPlanCard from './MealPlanCard';
import TrialRequestModal from './TrialRequestModal';
// import ContactUs from './ContactUs';
import RaitingFeedback from './Raiting';
// import FounderPage from './MoreInfo';
import '../Styles/Home.css'
import MyTeamPage from './OurTeam';
import Counter from './Counter';
import MoreInfo from './MoreInfo';

function Home() {
  return (
    <div>
      
     <MealPlanCard/>
<br/>
<br/>
<br/>
<br/>

      {/* Render the modal */}
      <section id="Customer_Count_Section">
      <Counter />
      </section>

      {/* Add id attributes to sections */}
      <section id="req-trail-section">
        <TrialRequestModal/>
      </section>

      <section id="MoreInfo_section">
        <MoreInfo/>
      </section> 

     <section id="feedback_Section">
        <RaitingFeedback/>
      </section>

      <section id="MyTeam_Section">
       <MyTeamPage/>
      </section>

    </div>
  );
}

export default Home;
