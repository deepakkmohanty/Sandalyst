import { createFileRoute } from '@tanstack/react-router';
import { placeholderRegister } from '@/data/mock';
import { Heading } from '@/components/ui/brand-primitives';
export const Route=createFileRoute('/dev/placeholders')({head:()=>({meta:[{title:'Development register | Sandalyst'},{name:'description',content:'Sandalyst storefront replacement and confirmation register.'},{property:'og:title',content:'Development register | Sandalyst'},{property:'og:description',content:'Images, catalogue details and policies awaiting confirmation.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary'}]}),component:Page});
function Page(){return <main id="main-content" className="container section-space"><Heading label="Development build">Before the <em>next step.</em></Heading><ol className="placeholder-register">{placeholderRegister.map(item=><li key={item}>{item}</li>)}</ol></main>;}
