import React from "react";
import CallToAction from "./CallToAction";
import WhyWorkWithUs from "./WhyWorkWithUs";
import WeGuaranteeAndMainDirections from "./WeGuaranteeAndMainDirections";
import Portfolio from "./Portfolio";
import FocusAtention from "./FocusAtention";
import SevenSteps from "./SevenSteps";
import Reviews from "./Reviews";
import SiteDream from "./SiteDream";
const MainPage = () => {
  return (
    <div>
      <CallToAction />
      <WhyWorkWithUs />
      <WeGuaranteeAndMainDirections />
      <Portfolio />
      <FocusAtention/>
      <SevenSteps/>
      <Reviews/>
      <SiteDream/>
    </div>
  );
};

export default MainPage;
