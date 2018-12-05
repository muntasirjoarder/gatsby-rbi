import React from 'react'

const Blurb = ({blurbicon, title, blurbbody}) => (
    <div class="col-12 col-md-4 app-holder">
    <div class="inner text-center">
        <img src={blurbicon} alt=""/>
        <h3 dangerouslySetInnerHTML={{__html: title}} />
        <p dangerouslySetInnerHTML={{__html: blurbbody}} />
    </div>
</div>
)

export default Blurb