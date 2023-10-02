import React from 'react'

function Select2(props: any) {
    const { color, setColor } = props;
    function handleChange(event: any) {
        setColor(event.target.value);
    }
    return (
        <div>
            <input onChange={handleChange} type="text" value={color} />
        </div>
    )
}

export default Select2
