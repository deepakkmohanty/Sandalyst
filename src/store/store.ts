import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { products } from '@/data/mock';
export type BagItem = { productId: string; size: number; quantity: number };
export function canAdd(productId: string,size: number) { return products.some(p=>p.id===productId && p.sizes.some(s=>s.size===size && s.stock)); }
type Store = { bag: BagItem[]; wishlist: string[]; add: (id:string,size:number)=>boolean; quantity: (id:string,size:number,delta:number)=>void; toggleWish: (id:string)=>void };
export const useShopStore = create<Store>()(persist((set) => ({bag:[],wishlist:[],add:(id,size)=>{if(!canAdd(id,size))return false;set(s=>{const found=s.bag.find(i=>i.productId===id&&i.size===size);return {bag:found?s.bag.map(i=>i===found?{...i,quantity:i.quantity+1}:i):[...s.bag,{productId:id,size,quantity:1}]};});return true;},quantity:(id,size,delta)=>set(s=>({bag:s.bag.map(i=>i.productId===id&&i.size===size?{...i,quantity:i.quantity+delta}:i).filter(i=>i.quantity>0)})),toggleWish:(id)=>set(s=>({wishlist:s.wishlist.includes(id)?s.wishlist.filter(x=>x!==id):[...s.wishlist,id]}))}),{name:'sandalyst-preview',storage:createJSONStorage(()=>localStorage),skipHydration:true}));
type UI = { panel: 'search'|'bag'|'wishlist'|'mobile'|'later'|null; later: string; open:(panel:UI['panel'])=>void; showLater:(name:string)=>void };
export const useUI = create<UI>()(set=>({panel:null,later:'',open:panel=>set({panel}),showLater:later=>set({panel:'later',later})}));
