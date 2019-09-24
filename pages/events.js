import React from 'react';
import Videos from "../layouts/Videos";
import Header from "../components/Header";
import Nav from '../components/Navigation';
import VideoBanner from '../components/VideoBanner';
import VideoList from '../components/VideoList';

export default () => (
    <Videos>
        <Header />
        <Nav />
        <VideoBanner />
        <VideoList />
    </Videos>
)
