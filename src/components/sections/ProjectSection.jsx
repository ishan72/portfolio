import React from "react";
import ppsclogo from "../../assets/logos/ppsckarnali.jpeg";
import ormslogo from "../../assets/logos/orms.png";
import Container from "../../UI/Container";
import CardComponent from "../../UI/CardComponent";

function ProjectSection() {
  return (
    <Container index={3} title={"PROJECT"}>
      <div className="w-full flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-10 items-center justify-center md:justify-start">
        <CardComponent
          itemName={"PPSC"}
          itemImage={ppsclogo}
          itemLink={"https://ppsconline.karnali.gov.np/#/login"}
        />
        <CardComponent
          itemName={"ORMS"}
          itemImage={ormslogo}
          itemLink={"https://careers.nepalpolice.gov.np/#/login"}
        />
      </div>
    </Container>
  );
}

export default ProjectSection;
