/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/bg3MLSA.jpg";

const imageAltText = " 3 laptop image with coding Background ";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Vehical Management System",
    description:
      "A comprehensive system for tracking, maintaining, and optimizing vehicle fleets.",
    url: "https://github.com/Aerin2805/AKM_PROJECT",
  },
  {
    title: "Crime Control API",
    description:
      "Crime Control API: Empowering crime prevention through data-driven insights and proactive solutions.",
    url: "https://github.com/Aerin2805/API",
  },
  {
    title: "My Resume",
    description:
      "A proactive and adaptable professional leveraging diverse skills to drive impactful solutions and foster collaborative success.",
    url: "https://drive.google.com/file/d/11o0dhaJg_SSTfFIzxxZvFpIZ_Vze1kIK/view?usp=sharing",
  },
  {
    title: "Bull Stock: Empowering Smart Investments",
    description:
      "Your all-in-one platform for insightful analysis, virtual trading, and confident decision-making in stocks and cryptocurrencies.",
    url: "https://github.com/Aerin2805/Devheat_Ragnarok-main",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
