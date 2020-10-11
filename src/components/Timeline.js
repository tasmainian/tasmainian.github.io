import React, { useState } from "react";
import HorizontalTimeline from 'react-horizontal-timeline'
import ExperienceCard from "./ExperienceCard"
import SimpleViewSlider from 'react-view-slider/simple'
import state from '../services/states'

export default function Timeline(props) {
  const VALUES =state.experience.map(e => {
    return e.date
  })
  const [value, setValue] = useState(VALUES.length-1);
  return (
    <>
    <section className="relative" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold text-center pb-5">
          Experience
        </h3>
        <div className="relative w-10/12 h-20 my-auto mx-auto" >
          <HorizontalTimeline 
            styles={{ background: '#ffffff', foreground: '#38b2ac', outline: '#cbd5e0' }}
            index={value}
            labelWidth={100}
            indexClick={(index) => {
              setValue(index);
            }}
            // isOpenBeginning = {false}
            // isOpenEnding = {false}
            values={ VALUES } />
        </div>
        <div className='text-center'>
          <SimpleViewSlider>
            <div key={value}>
              <ExperienceCard experience={state.experience[value]}/>
            </div>
          </SimpleViewSlider>,   
        </div>
        </div>
    </section>
    </>
  );
}
