import React from 'react'
import Banner from '../components/Banner'
import BestSeller from '../components/BestSeller'
import LatestCollections from '../components/LatestCollections'

const Home = () => {
  return (
    <div>
      <Banner />
      <LatestCollections />
      <BestSeller/>
    </div>
  )
}

export default Home