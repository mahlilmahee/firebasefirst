import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinmentHeader from './AppoinmentHeader/AppoinmentHeader';
import AvaiableAppoinment from './AvailableAppoinment/AvaiableAppoinment';
const Appoinment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppoinmentHeader date={date} setDate={setDate}></AppoinmentHeader>
            
            <AvaiableAppoinment date={date} setDate={setDate}></AvaiableAppoinment>
        </div>
    );
};

export default Appoinment;