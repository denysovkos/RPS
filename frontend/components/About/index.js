import React, {Component} from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

const AboutContainer = styled.div`
  margin: 15px;
  display: flex;
  justify-content: center;
`;

class About extends Component {
  render() {
    return (
      <AboutContainer>
        Welcome to auth part of app
      </AboutContainer>
    )
  }
}

export default About;
