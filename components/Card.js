import Image from "next/image";

export default function Card(props)
{
    return (
        <div className="card rounded shadow">
        <h3>{props.title}</h3>
            <Image
                src={props.src}
                width={300}
                alt="image"
            />
            
            <p>{props.description}</p>
            <button>Learn more</button>
        </div>
    );
}