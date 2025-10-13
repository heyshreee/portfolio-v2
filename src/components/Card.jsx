import React from "react";
import styled from "styled-components";

const Card = ({ skill }) => {
  return (
    <StyledCard>
      <div className="card-inner">
        {/* Front: Skill Logo + Name */}
        <div className="card-front">
          {skill.icon && <skill.icon size={40} className="mb-2 logo" />}
          <p>{skill.name}</p>
        </div>

        {/* Back: Skill Level */}
        <div className="card-back">
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: `${skill.level}%` }} />
          </div>
          <p>{skill.level}%</p>
        </div>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 180px;
  height: 180px;
  perspective: 1000px;

  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.8s;
    cursor: pointer;
  }

  .card-inner:hover {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
    font-size: 18px;
  }

  .card-front {
    background-color: #1f1f2e;
    border: 2px solid #3b3b5c;
  }

  .card-back {
    background-color: #3b3b5c;
    border: 2px solid #1f1f2e;
    transform: rotateY(180deg);
    flex-direction: column;
    gap: 10px;
  }

  .logo {
    transition: transform 0.4s ease;
  }

  .card-front:hover .logo {
    transform: scale(1.3) rotate(10deg);
  }

  .skill-bar {
    width: 70%;
    height: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    overflow: hidden;
  }

  .skill-fill {
    height: 100%;
    background-color: #4f46e5;
    border-radius: 8px;
    transition: width 0.5s ease-in-out;
  }
`;

export default Card;
