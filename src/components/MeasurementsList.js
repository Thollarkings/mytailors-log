import React from 'react';
import MeasurementCard from './MeasurementCard';

const MeasurementsList = ({ measurements, onDelete, handleEdit }) => {
    return (
        <div>
            {measurements.map((measurement, index) => (
                <MeasurementCard
                    key={index}
                    measurement={measurement}
                    index={index}
                    onDelete={onDelete}
                    handleEdit={handleEdit} // Pass handleEdit to MeasurementCard
                />
            ))}
        </div>
    );
};

export default MeasurementsList;
