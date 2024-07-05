'use client'

import Image from 'next/image'
import React from 'react'

export default function ProjectPreview({img, title, tags, desc, link}) {
  return (
    <div className='projectPreview'>
        <Image 
            src={img}
            width={300}
            alt={title + ' image'}
            quality={100}
        ></Image>
        <div className='projectPreviewProps'>
            <div className='flexRow'>
                <h3>{title}</h3>
                <div className='projectPreviewTags'>
                    {tags.map((tag, index) => {
                        return <div key={index} className={'tag ' + tag}>{tag}</div>
                    })}
                </div>
            </div>

            <div className="projectDesc">
                <p>{desc}</p>
                <button className='btnLink'
                    onClick={() => {
                        window.open(link, "_blank");
                    }}
                >Open Website</button>
            </div>
        </div>
        
    </div>
  )
}
