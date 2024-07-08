import React from 'react'

import ProjectPreview from '../Components/ProjectPreview'
import imgPortfolio from '@/assets/projects/portfolio.jpg'
import imgBlogIt from '@/assets/projects/blogit.jpg'
import imgTimeTracker from '@/assets/projects/time-tracker.jpg'
import imgShophere from '@/assets/projects/shophere.jpg'

export default function Projects() {
  return (
    <section className='projects'>
        <h2 className='headerTitle'>This are my projects</h2>
        <div className='projectsContainer'>

            <ProjectPreview img={imgShophere} title="Shophere" tags={['js', 'react', 'nextjs']}
                desc="A simple store using an external api. Show all products or see them by category."
                link='https://david-shophere.vercel.app/'
            />

            <ProjectPreview img={imgPortfolio} title="My Portfolio" tags={['js', 'react', 'nextjs']}
                desc="This website you are currently on is made using React and Nextjs"
            />

            <ProjectPreview img={imgBlogIt} title="BlogIt" tags={['js', 'react']}
                desc="A blog creation web site, share your knowledge, stories, news, anything you want."
                link='https://david-avila.github.io/BlogIt/'
            />

            <ProjectPreview img={imgTimeTracker} title="Time Tracker" tags={['js', 'svelte']}
                desc="Keep track of the time you spend doing things. Trackers are saved for later use."
                link='https://david-time-tracker.vercel.app/'
            />

        </div>
    </section>
  )
}
