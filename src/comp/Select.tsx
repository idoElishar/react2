import React from 'react';

function Select(props:any) {
    const { color, setColor } = props; 

    const handleChange = (e:any) => {
        const selectedColor = e.target.value;
        setColor(selectedColor); 
    };

    return (
        <div>
            <label htmlFor="colors">Choose a color:</label>
            <select onChange={handleChange} name="colors" id="colors" value={color}>
                <option value="white">white</option>
                <option value="yellow">yellow</option>
                <option value="orange">orange</option>
            </select>
        </div>
    );
}

export default Select;
