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
  state = {
    scrollClass: '',
  };

  componentDidMount() {
    window.addEventListener('scroll', event => this.handleScroll(event));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  handleScroll(event) {
    console.log(event);
    const scroll = event.target.scrollingElement.scrollTop;
    if (scroll < 30) {
      this.setState({
        scrollClass: '',
      });
    } else if (scroll >= 30) {
      this.setState({
        scrollClass: 'section1',
      });
    } else if (scroll >= 60) {
      this.setState({
        scrollClass: 'section2',
      });
    } else {
      this.setState({
        scrollClass: 'section3',
      });
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <main className={this.state.scrollClass}>
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
