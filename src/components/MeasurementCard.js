import React, { useState } from 'react';
import './MeasurementCard.css';

const MeasurementCard = ({ measurement, index, onDelete, setEditingIndex }) => {
    const [detailsVisible, setDetailsVisible] = useState(false);

    // Define measurement fields with labels and keys
    const measurementFields = [
        { label: 'Head', key: 'head' },
        { label: 'Shoulder to Shoulder', key: 'shoulderToShoulder' },
        { label: 'Neck', key: 'neck' },
        { label: 'Chest', key: 'chest' },
        { label: 'Waist', key: 'waist' },
        { label: 'Shoulder to Nipple', key: 'shoulderToNipple' },
        { label: 'Shoulder to Underbust', key: 'shoulderToUnderbust' },
        { label: 'Shoulder to Waist', key: 'shoulderToWaist' },
        { label: 'Nipple to Nipple', key: 'nippleToNipple' },
        { label: 'Sleeve Length', key: 'sleeveLength' },
        { label: 'Round Sleeve', key: 'roundSleeve' },
        { label: 'Hip', key: 'hip' },
        { label: 'Half Length', key: 'halfLength' },
        { label: 'Top Length', key: 'topLength' },
        { label: 'Gown Length', key: 'gownLength' },
        { label: 'Trouser Waist', key: 'trouserWaist' },
        { label: 'Crotch', key: 'crotch' },
        { label: 'Trouser Length', key: 'trouserLength' },
        { label: 'Thigh', key: 'thigh' },
        { label: 'Waist to Knee', key: 'waistToKnee' },
        { label: 'Calf', key: 'calf' },
        { label: 'Ankle', key: 'ankle' },
        { label: 'Inside Leg Seam', key: 'insideLegSeam' },
    ];

    return (
        <div className='measurement-card'>
            <h3>
        <span className='client-label'>Client:  </span> 
        <span className='client-name'>{measurement.name}</span>
    </h3>
    <p>
        <span className='phone-label'>Phone:      </span> 
        <span className='phone-number'>{measurement.phone}</span>
    </p>
            <p>Recorded: {measurement.timestamp}</p>

            <button onClick={() => setDetailsVisible(prev => !prev)}>
                {detailsVisible ? 'Hide Measurement Details' : 'Show Measurement Details'}
            </button>

            {detailsVisible && (
                <table>
                    <thead>
                        <tr>
                            <th>Measurement</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {measurementFields.map(field => (
                            <tr key={field.key}>
                                <td>{field.label}:</td>
                                <td>{measurement[field.key] || 'N/A'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <div>
                <button onClick={() => setEditingIndex(index)}>Edit</button>
                <button onClick={() => onDelete(index)}>Delete</button>
            </div>
        </div>
    );
};

export default MeasurementCard;