import React from 'react'
import Card from './Card'

const Cardlist = ({ Robots }) => {

    return (
        <div>

            {
                Robots.map((user, i) => {
                    return (
                        <Card key={i} id={Robots[i].id}
                            Name={Robots[i].Name}
                            email={Robots[i].email} />
                    )
                })
            }
        </div>
    )
}

export default Cardlist
