import React from 'react';

const Add_City =  () => (
    <form>
        <input className="city-name" placeholder="City Name"/>
        <input className="time-zone" placeholder="Time: 'Europe/Paris'"/>
        <button type="submit">Add City</button>
    </form>
);

export default Add_City;