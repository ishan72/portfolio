import React from "react";
import Container from "../../UI/Container";
import CardComponent from "../../UI/CardComponent";

function ProjectSection() {
  return (
    <Container index={3} title={"PROJECT"}>
      <div className="w-full">
        <CardComponent />
      </div>
    </Container>
  );
}

export default ProjectSection;
