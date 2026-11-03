import black from '@/assets/brand/logo-black.png.asset.json';
import gold from '@/assets/brand/logo-gold.png.asset.json';
export function Logo({dark=false,monogram=false,className=''}:{dark?:boolean;monogram?:boolean;className?:string}){return <span className={`${monogram?'brand-monogram':'brand-lockup'} ${className}`}><img src={(dark?gold:black).url} alt="Sandalyst" width="977" height="661" decoding="async"/></span>;}
