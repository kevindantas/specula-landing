import React, { Component } from 'react';
import {SectionsContainer, Section} from 'react-fullpage';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FirstSlide from './components/FirstSlide';
import Team from './components/Team';

const options = {
  sectionClassName:     'section',
  anchors:              ['intro', 'sectionTwo', 'sectionThree'],
  scrollBar:            false,
  navigation:           true,
  verticalAlign:        false,
  sectionPaddingTop:    '50px',
  sectionPaddingBottom: '50px',
  arrowNavigation:      true
};


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <main>
          <SectionsContainer {...options}>
            <Section>
              <FirstSlide />
            </Section>
            <Section>
              <Team />
            </Section>
          </SectionsContainer>
        </main>
      </div>
    );
  }
}

export default App;
