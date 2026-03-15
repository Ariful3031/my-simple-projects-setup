import React from 'react'
import Banner from './Banner/Banner'
import { CommunitySection } from './CommunitySection/CommunitySection'
import { TopCourses } from './TopCourses/TopCourses'
import { TrendingCategories } from './TrendingCategories/TrendingCategories'
import { AllCourses } from './AllCourses/AllCourses'
import { Instructors } from './Instructors/Instructors'
import { LatestFeature } from './LatestFeature/LatestFeature'
import { FeedBacks } from './FeedBacks/FeedBacks'
import { Podcasts } from './Podcasts/Podcasts'
import { PlacedAt } from './PlacedAt/PlacedAt'
import { Blog } from './Blog/Blog'
import FAQSection from './FAQSection/FAQSection'

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <CommunitySection></CommunitySection>
            <TopCourses></TopCourses>
            <AllCourses></AllCourses>
            <Instructors></Instructors>
            <TrendingCategories></TrendingCategories>
            {/* <LatestFeature></LatestFeature> */}
            <FeedBacks></FeedBacks>
            <Podcasts></Podcasts>
            <Blog></Blog>
            <PlacedAt></PlacedAt>
            <FAQSection></FAQSection>

            {/* <h1 className='bg-primary-50'>Hello i am Ariful islam</h1>
            <h1 className='bg-primary-100'>Hello i am Ariful islam</h1>
            <h1 className='bg-primary-200'>Hello i am Ariful islam</h1>
            <h1 className='bg-primary-300'>Hello i am Ariful islam</h1>
            <h1 className='bg-primary-400'>Hello i am Ariful islam</h1>
            <h1 className='bg-primary-500'>Hello i am Ariful islam</h1>
            <h1 className='bg-primary-600'>Hello i am Ariful islam</h1>
            <h1 className='bg-primary-700'>Hello i am Ariful islam</h1>
            <h1 className='bg-primary-800'>Hello i am Ariful islam</h1>
            <h1 className='bg-primary-900'>Hello i am Ariful islam</h1> */}
        </div>
    )
}

export default Home