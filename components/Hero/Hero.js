import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        An Experienced Front-end Developer passionate about making Impact and building beautiful modern websites.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/goketech'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;