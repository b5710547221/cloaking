import Image from 'next/image'
import logoPic from "@/app/assets/Flyer.png";
export default async function p1() {
    return (
      <div>
        
        <Image
        src={logoPic}
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <p>this is a Thai</p>
    
        
      </div>
    );
  }
  