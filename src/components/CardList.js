import React from "react";
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
           {
            robots.map(({id, name, email}, index) => {
                return <Card key={id} id={id} name={name} email={email}/>
            })
           }
        </div>
    );
}

export default CardList;