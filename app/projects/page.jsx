import React from 'react'

import ProjectPreview from '../Components/ProjectPreview'
import imgBlogIt from '@/assets/projects/blogit.jpg'
import imgTimeTracker from '@/assets/projects/time-tracker.jpg'
import imgShophere from '@/assets/projects/shophere.jpg'

export default function Projects() {
  return (
    <section className='projects'>
        <h1 className='headerTitle'>This are my projects</h1>
        <div className='projectsContainer'>
            <ProjectPreview img={imgBlogIt} title="BlogIt" tags={['react']}
                desc="A blog creation web site, share your knowledge, stories, news, anything you want."
                link='https://david-avila.github.io/BlogIt/'
            />

            <ProjectPreview img={imgTimeTracker} title="Time Tracker" tags={['svelte', 'sveltekit']}
                desc="Keep track of the time you spend doing things. Trackers are saved for later use."
                link='https://david-time-tracker.vercel.app/'
            />

            <ProjectPreview img={imgShophere} title="Shophere" tags={['react', 'nextjs']}
                desc="A simple store using an external api. Show all products or see them by category."
                link='https://david-shophere.vercel.app/'
            />
        </div>
    </section>
  )
}
