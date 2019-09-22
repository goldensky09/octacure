import React from 'react';
import Link from 'next/link';
import Parallax from "../layouts/Parallax";
import Header from "../components/Header";
import Nav from '../components/Navigation';
import Section from '../components/Section';
import Banner from '../components/Banner';

export default () => (
  <Parallax>
    <Header />
    <Nav />
    <Banner />
    <Section img="one.jpg" id="one" next="two" />
    <Section img="two.jpg" id="two" next="three" />
    <Section img="three.jpg" id="three" next="four" />
    <Section img="four.jpg" id="four" next="five" />
    <Section img="five.jpg" id="five" next="six" />
    <Section img="six.jpg" id="six" next="seven" />
    <Section img="seven.jpg" id="seven" />
  </Parallax>
)
