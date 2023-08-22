import React from 'react'

const MemberCard = ({where, name}) => {
    return (
        <div>
            <div className='member_card'>
                <h3>{where}</h3>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default MemberCard