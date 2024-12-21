import React, { useState, useEffect } from 'react';
import MeasurementForm from './components/MeasurementForm';
import MeasurementsList from './components/MeasurementsList';
import Header from './components/Header';
import './App.css';

const App = () => {
    const [measurements, setMeasurements] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [formVisible, setFormVisible] = useState(false); // State to control form visibility

    useEffect(() => {
        loadMeasurements();
    }, []);

    const loadMeasurements = () => {
        const data = JSON.parse(localStorage.getItem('clientMeasurements')) || [];
        // Sort the measurements by timestamp in descending order
        const sortedData = data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        setMeasurements(sortedData);
    };

    const handleSave = (measurementData) => {
        const updatedMeasurements = [...measurements];
        if (editingIndex !== null) {
            updatedMeasurements[editingIndex] = measurementData;
            setEditingIndex(null);
        } else {
            updatedMeasurements.push(measurementData);
        }

        localStorage.setItem('clientMeasurements', JSON.stringify(updatedMeasurements));
        // Sort again after saving to maintain order
        const sortedData = updatedMeasurements.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        setMeasurements(sortedData);
        setFormVisible(false);
    };

    const handleDelete = (index) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this measurement?");
        if (confirmDelete) {
            const updatedMeasurements = measurements.filter((_, i) => i !== index);
            localStorage.setItem('clientMeasurements', JSON.stringify(updatedMeasurements));
            setMeasurements(updatedMeasurements);
        }
    };

    const handleEdit = (index) => {
        setEditingIndex(index); // Set the index of the measurement being edited
        setFormVisible(true); // Make the form visible when editing
    };

    const handleExportAll = () => {
        const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(measurements, null, 2))}`;
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute('href', dataStr);
        downloadAnchor.setAttribute('download', 'measurements.json');
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        document.body.removeChild(downloadAnchor);
    };

    const handleImportAll = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const importedData = JSON.parse(e.target.result);
                    if (Array.isArray(importedData)) {
                        const mergedData = [...measurements, ...importedData];
                        const uniqueData = mergedData.filter((item, index, self) =>
                            index === self.findIndex((t) => t.timestamp === item.timestamp)
                        );
                        localStorage.setItem('clientMeasurements', JSON.stringify(uniqueData));
                        setMeasurements(uniqueData);
                    } else {
                        alert('Invalid JSON file. Please ensure it contains an array of measurements.');
                    }
                } catch (error) {
                    alert('Invalid JSON file. Please check the file content.');
                }
            };
            reader.readAsText(file);
        }
    };

    const filteredMeasurements = measurements.filter(measurement =>
        measurement.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='main'>
            <Header />
            <div className='content'>
                <div className='left-panel'>
                    <div className='search'>
                        <input
                            type="text"
                            placeholder="Search by name"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className='button1' onClick={() => setFormVisible(prev => !prev)}>
                        {formVisible ? 'Hide Data Log Book' : 'Show Data Log Book'}
                    </button>
                    {formVisible && (
                        <MeasurementForm 
                            onSave={handleSave} 
                            editingIndex={editingIndex} 
                            setEditingIndex={setEditingIndex} 
                        />
                    )}
                </div>
                <div className='right-panel'>
                    <h1>Measurement Tracker</h1>
                    <div className='export-import-buttons'>
    <button className='export-button' onClick={handleExportAll}>Export All</button>
    <button 
        className='import-button' 
        onClick={() => document.getElementById('file-input').click()}
    >
        Import All
    </button>
    <input 
        type='file' 
        id='file-input' 
        accept='.json' 
        onChange={handleImportAll} 
        style={{ display: 'none' }} 
    />
</div>
                    <MeasurementsList 
                        measurements={filteredMeasurements} 
                        onDelete={handleDelete} 
                        setEditingIndex={setEditingIndex} 
                        handleEdit={handleEdit} // Pass handleEdit to MeasurementsList
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
