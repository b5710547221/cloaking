import axios from 'axios';
import { headers } from 'next/headers';
import P1 from "@/app/p1";
import P2 from "@/app/p2";

const API_KEY = '9550de6617b78f5024ae82c1925c3c2d'; // Replace with your actual API key
const BASE_URL = 'http://api.ipstack.com';

async function getGeoLocation(ip: string): Promise<{ country: string | null }> {
  try {
    const response = await axios.get(`${BASE_URL}/${ip}?access_key=${API_KEY}`);
    const data = response.data;

    return {
      country: data?.country_code || null,
    };
  } catch (error) {
    console.error('Error fetching geolocation:', error);
    return { country: null };
  }
}
export default async function Home() {
  // Fetch headers to get client IP
  const headersList = await headers();
  let ip =
    headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    headersList.get('x-real-ip') ||
    '127.0.0.1'  ||
    '::1'; // Default to localhost for testing
   if (ip === '::1' || ip === '127.0.0.1') {
    ip = '49.49.233.1'; // Example IP for Thailand
  }
  // Get geolocation data
  const geo = await getGeoLocation(ip);

  const isInThailand = geo.country === 'TH';

  return (
    <div>
     
      <div>
        {isInThailand ? 
        <P1/> : 
        <P2/>}
      </div>
      
    </div>
  );
}
