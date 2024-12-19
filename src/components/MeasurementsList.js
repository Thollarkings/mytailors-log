import React from 'react';
import MeasurementCard from './MeasurementCard';

const MeasurementsList = ({ measurements, onDelete, setEditingIndex }) => {
    return (
        <div>
            {measurements.map((measurement, index) => (
                <MeasurementCard
                    key={index}
                    measurement={measurement}
                    index={index}
                    onDelete={onDelete}
                    setEditingIndex={setEditingIndex}
                />
            ))}
        </div>
    );
};

export default MeasurementsList;