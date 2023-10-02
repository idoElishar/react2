import React,{useState} from 'react'
import Text from './Text'
import Select from './Select'
import Select2 from './Select2';
interface CardProps {
    title: string;
    imageUrl: string;
    text: string;
}
function Card({ title, imageUrl, text }: CardProps) {
    const [color, setColor] = useState('white');

    return (
        <div style={{background:color}}>
            <h1>{title}</h1>
            <img src={imageUrl} alt="tiger" width={150} />
            <p>{text}</p>
            <Select color={color} setColor={setColor} />
            <Select2 color={color} setColor={setColor} />
        </div>
    )
}

export default Card
