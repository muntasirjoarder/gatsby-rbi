import React from 'react'

const SectionWithBg = ({sectionclass, bgimage, children}) => (
    <section className={sectionclass} style={{ backgroundImage : `url(${bgimage})` }}>
            {children}
        </section>
)

export default SectionWithBg