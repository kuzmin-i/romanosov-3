import Head from 'next/head'
import Image from 'next/image'

import Map from '../screens/map'


import getPosts from '../lib/getPosts';
import PostPin from '../lib/postPin'

export default function Home({ posts }) {


  return (
    <div className="App">
        <Map pinData = {{'postPin': (props) => PostPin(props), 'allPins': posts}}/>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}
