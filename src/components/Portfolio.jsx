import React, { useState } from "react";
import "../style/portfolio.scss";
import TitleTemplate from "./template/TitleTemplate";
import PortfolioItemTemplate from "./template/PortfolioItemTemplate";
const Portfolio = () => {
  const [portfolioArray] = useState([
    {
      image: "IMAGE.svg",
      id: "1",
    },
    {
      image: "IMAGE (1).svg",
      id: "2",
    },
    {
      image: "IMAGE (2).svg",
      id: "3",
    },
    {
      image: "IMAGE (3).svg",
      id: "4",
    },
    {
      image: "IMAGE (4).svg",
      id: "5",
    },
    {
      image: "IMAGE (5).svg",
      id: "6",
    },
  ]);

  return (
    <div>
      <div className="portfolio_wrap">
        <TitleTemplate text={"Портфоліо робіт"} />

        <div className="portfolio_items_wrap">
          {portfolioArray.map((item) => (
            <PortfolioItemTemplate key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="portfolio_button_wrap">
      <div className="portfolio_button_block">
        <button className="portfolio_button">Більше</button>
      </div>
      </div>
    </div>
  );
};

export default Portfolio;
