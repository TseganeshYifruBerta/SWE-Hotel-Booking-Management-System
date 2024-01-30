import Image from 'next/image'
interface loadProps {
    image:string
}

const LoadImage : React.FC<loadProps> = ({image}) => {
    return(
        <div>
<Image src={image} alt={''} width={500} height={500}/>
        </div>
    )
}

export default LoadImage