import React, { useState } from 'react';
import './MeasurementCard.css';
import dayjs from 'dayjs';

const MeasurementCard = ({ measurement, index, onDelete, handleEdit }) => {
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
        { label: 'Additional Comments', key: 'comments' },
    ];

    // Format timestamp to readable format
    const timestamp = dayjs(measurement.timestamp);
    const formattedTimestamp = timestamp.isValid() 
      ? timestamp.format('dddd, MMM. D, YYYY - h:mm:ss A') 
      : 'Invalid Date';
    console.log(formattedTimestamp);

    return (
        <div className='measurement-card'>
            <h3>
                <span className='client-label'>Client: </span>
                <span className='client-name'>{measurement.name}</span>
            </h3>
            <p>
                <span className='phone-label'>Phone: </span>
                <span className='phone-number'>{measurement.phone }</span>
            </p>
            <p>Recorded: {formattedTimestamp}</p>

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
                                <td>{measurement[field.key] || '-'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <div className='action-buttons'>
                <button className='edit-button' onClick={() => handleEdit(index)}>Edit</button>
                <button className='delete-button' onClick={() => onDelete(index)}>Delete</button>
            </div>
        </div>
    );
};

export default MeasurementCard;
