import Image from 'next/image'
import logoPic2 from "@/app/assets/img-1.png";
export default async function p2() {
    return (
      <div>
        <Image
        src={logoPic2}
        width={500}
        height={500}
        alt="Picture of the author"
      />
         <p>this is a Foreign</p>
      </div>
    );
  }
  