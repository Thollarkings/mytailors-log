import React, { useState, useEffect } from 'react';

const MeasurementForm = ({ onSave, editingIndex, setEditingIndex }) => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (editingIndex !== null) {
            const measurements = JSON.parse(localStorage.getItem('clientMeasurements')) || [];
            setFormData(measurements[editingIndex]);
        } else {
            setFormData({});
        }
    }, [editingIndex]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...formData, timestamp: new Date().toLocaleString() });
        setFormData({});
    };

  return (
    <div className="collapsible-content">
      <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Client's Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
          placeholder="Client's name"
          required
        />
        
        <label htmlFor="phone">Client's Phone Number *</label>
        <input
          type="number"
          id="phone"
          name="phone"
          value={formData.phone || ''}
          onChange={handleChange}
          placeholder="XXX XXX XXXX"
          required
        />

        <label htmlFor="head">Head</label>
        <input
          type="number"
          id="head"
          name="head"
          value={formData.head || ''}
          onChange={handleChange}
          placeholder="Enter head measurement"
          min="0"
         
        />

        <label htmlFor="shoulderToShoulder">Shoulder to Shoulder</label>
        <input
          type="number"
          id="shoulderToShoulder"
          name="shoulderToShoulder"
          value={formData.shoulderToShoulder || ''}
          onChange={handleChange}
          placeholder="Enter shoulder to shoulder measurement"
          min="0"
          max="100"
        />

        <label htmlFor="neck">Neck</label>
        <input
          type="number"
          id="neck"
          name="neck"
          value={formData.neck || ''}
          onChange={handleChange}
          placeholder="Enter neck measurement"
          min="0"
          max="100"
        />

        <label htmlFor="chest">Chest</label>
        <input
          type="number"
          id="chest"
          name="chest"
          value={formData.chest || ''}
          onChange={handleChange}
          placeholder="Enter chest measurement"
          min="0"
          max="150"
        />

        <label htmlFor="waist">Waist</label>
        <input
          type="number"
          id="waist"
          name="waist"
          value={formData.waist || ''}
          onChange={handleChange}
          placeholder="Enter waist measurement"
          min="0"
          max="150"
        />

        <label htmlFor="shoulderToNipple">Shoulder to Nipple</label>
        <input
          type="number"
          id="shoulderToNipple"
          name="shoulderToNipple"
          value={formData.shoulderToNipple || ''}
          onChange={handleChange}
          placeholder="Enter shoulder to nipple measurement"
          min="0"
          max="100"
        />

        <label htmlFor="shoulderToUnderbust">Shoulder to Underbust</label>
        <input
          type="number"
          id="shoulderToUnderbust"
          name="shoulderToUnderbust"
          value={formData.shoulderToUnderbust || ''}
          onChange={handleChange}
          placeholder="Enter shoulder to underbust measurement"
          min="0"
          max="100"
        />

        <label htmlFor="shoulderToWaist">Shoulder to Waist</label>
        <input
          type="number"
          id="shoulderToWaist"
          name="shoulderToWaist"
          value={formData.shoulderToWaist || ''}
          onChange={handleChange}
          placeholder="Enter shoulder to waist measurement"
          min="0"
          max="100"
        />

        <label htmlFor="nippleToNipple">Nipple to Nipple</label>
        <input
          type="number"
          id="nippleToNipple"
          name="nippleToNipple"
          value={formData.nippleToNipple || ''}
          onChange={handleChange}
          placeholder="Enter nipple to nipple measurement"
          min="0"
          max="100"
        />

        <label htmlFor="sleeveLength">Sleeve Length</label>
        <input
          type="number"
          id="sleeveLength"
          name="sleeveLength"
          value={formData.sleeveLength || ''}
          onChange={handleChange}
          placeholder="Enter sleeve length measurement"
          min="0"
          max="150"
        />

        <label htmlFor="roundSleeve">Round Sleeve</label>
        <input
          type="number"
          id="roundSleeve"
          name="roundSleeve"
          value={formData.roundSleeve || ''}
          onChange={handleChange}
          placeholder="Enter round sleeve measurement"
          min="0"
          max="100"
        />

        <label htmlFor="hip">Hip</label>
        <input
          type="number"
          id="hip"
          name="hip"
          value={formData.hip || ''}
          onChange={handleChange}
          placeholder="Enter hip measurement"
          min="0"
          max="150"
        />

        <label htmlFor="halfLength">Half Length</label>
        <input
          type="number"
          id="halfLength"
          name="halfLength"
          value={formData.halfLength || ''}
          onChange={handleChange}
          placeholder="Enter half length measurement"
          min="0"
          max="100"
        />

        <label htmlFor="topLength">Top Length</label>
        <input
          type="number"
          id="topLength"
          name="topLength"
          value={formData.topLength || ''}
          onChange={handleChange}
          placeholder="Enter top length measurement"
          min="0"
          max="150"
        />

        <label htmlFor="gownLength">Gown Length</label>
        <input
          type="number"
          id="gownLength"
          name="gownLength"
          value={formData.gownLength || ''}
          onChange={handleChange}
          placeholder="Enter gown length measurement"
          min="0"
          max="200"
        />

        <label htmlFor="trouserWaist">Trouser Waist</label>
        <input
          type="number"
          id="trouserWaist"
          name="trouserWaist"
          value={formData.trouserWaist || ''}
          onChange={handleChange}
          placeholder="Enter trouser waist measurement"
          min="0"
          max="150"
        />

        <label htmlFor="crotch">Crotch</label>
        <input
          type="number"
          id="crotch"
          name="crotch"
          value={formData.crotch || ''}
          onChange={handleChange}
          placeholder="Enter crotch measurement"
          min="0"
          max="100"
        />

        <label htmlFor="trouserLength">Trouser Length</label>
        <input
          type="number"
          id="trouserLength"
          name="trouserLength"
          value={formData.trouserLength || ''}
          onChange={handleChange}
          placeholder="Enter trouser length measurement"
          min="0"
          max="150"
        />

        <label htmlFor="thigh">Thigh</label>
        <input
          type="number"
          id="thigh"
          name="thigh"
          value={formData.thigh || ''}
          onChange={handleChange}
          placeholder="Enter thigh measurement"
          min="0"
          max="100"
        />

        <label htmlFor="waistToKnee">Waist to Knee</label>
        <input
          type="number"
          id="waistToKnee"
          name="waistToKnee"
          value={formData.waistToKnee || ''}
          onChange={handleChange}
          placeholder="Enter waist to knee measurement"
          min="0"
          max="150"
        />

        <label htmlFor="calf">Calf</label>
        <input
          type="number"
          id="calf"
          name="calf"
          value={formData.calf || ''}
          onChange={handleChange}
          placeholder="Enter calf measurement"
          min="0"
          max="100"
        />

        <label htmlFor="ankle">Ankle</label>
        <input
          type="number"
          id="ankle"
          name="ankle"
          value={formData.ankle || ''}
          onChange={handleChange}
          placeholder="Enter ankle measurement"
          min="0"
          max="100"
        />

        <label htmlFor="insideLegSeam">Inside Leg Seam</label>
        <input
          type="number"
          id="insideLegSeam"
          name="insideLegSeam"
          value={formData.insideLegSeam || ''}
          onChange={handleChange}
          placeholder="Enter inside leg seam measurement"
          min="0"
          max="150"
        />

        <label htmlFor="comments">Additional Comments</label>
        <textarea
          id="comments"
          name="comments"
          value={formData.comments || ''}
          onChange={handleChange}
          placeholder="Add comments here"
        ></textarea>

        <button type="submit">Save Measurements</button>
      </form>
    </div>
  );
};

export default MeasurementForm;