import React from "react";
import styled from "styled-components";
import { RiUserHeartLine } from "react-icons/ri";

const AboutCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          {/* Back Side */}
          <div className="back">
            <div className="back-content">
              <RiUserHeartLine className="about-me-icon" size={50} />
              <h2>About Me</h2>
              <p>
                I’m <strong>Sriram</strong>, a Cyber Security student passionate
                about ethical hacking, secure app development, and network
                defense. I enjoy building efficient systems and learning how to
                make them safer.
              </p>
            </div>
          </div>

          {/* Front Side */}
          <div className="front">
            <div className="profile">
              <img
                src="https://avatars.githubusercontent.com/u/000000?v=4" // replace with your image
                alt="Sriram"
                className="avatar"
              />
            </div>
            <div className="front-content">
              <h3 className="name">Sriram</h3>
              <p className="role">Cyber Security Student</p>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;

  .card {
    width: 250px;
    height: 320px;
    perspective: 1000px;
    cursor: pointer;
  }

  .content {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.7s;
  }

  .card:hover .content {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 0 20px #0ff3ff33;
  }

  /* FRONT SIDE */
  .front {
    background: radial-gradient(circle at top left, #0f172a, #020617);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #00b4d8;
  }

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid #00b4d8;
    object-fit: cover;
    margin-bottom: 1rem;
    box-shadow: 0 0 20px #00b4d888;
  }

  .name {
    color: #00d8ff;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .role {
    color: #94a3b8;
    font-size: 0.95rem;
  }

  /* BACK SIDE */
  .back {
    background: linear-gradient(145deg, #0a0a0a, #00111a);
    transform: rotateY(180deg);
    border: 1px solid #00b4d8;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .back-content {
    text-align: center;
    color: #e2e8f0;
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }

  .about-me-icon {
    color: #00d8ff;
    filter: drop-shadow(0 0 8px #00d8ff);
  }

  .back-content h2 {
    color: #00d8ff;
    font-size: 1.3rem;
  }

  .back-content p {
    color: #94a3b8;
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

export default AboutCard;
