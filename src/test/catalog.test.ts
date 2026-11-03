import { beforeEach,describe,expect,it } from 'vitest';
import { products,SHOW_DEV_FLAGS } from '@/data/mock';
import { canAdd,useShopStore } from '@/store/store';
describe('Client catalogue rules',()=>{
 beforeEach(()=>useShopStore.setState({bag:[],wishlist:[]}));
 it('contains exactly nine distinct mock products',()=>{expect(products).toHaveLength(9);expect(new Set(products.map(p=>p.id)).size).toBe(9);expect(products.every(p=>p.placeholder)).toBe(true);});
 it('keeps all sample prices between Rs. 899 and Rs. 1999',()=>{expect(Math.min(...products.map(p=>p.price))).toBe(899);expect(Math.max(...products.map(p=>p.price))).toBe(1999);expect(products.every(p=>p.price>=899&&p.price<=1999)).toBe(true);});
 it('offers only UK India sizes 3 through 8',()=>{for(const p of products)expect(p.sizes.map(s=>s.size)).toEqual([3,4,5,6,7,8]);expect(canAdd('P1',2)).toBe(false);expect(canAdd('P1',9)).toBe(false);});
 it('cannot add unavailable sizes',()=>{expect(canAdd('P1',8)).toBe(false);expect(useShopStore.getState().add('P1',8)).toBe(false);expect(useShopStore.getState().bag).toHaveLength(0);});
 it('does not enable photo swaps without separate variant images',()=>{expect(products.every(p=>p.variants.length===0)).toBe(true);});
 it('shows an AI-generated sample photo in every product photo slot',()=>{for(const p of products){expect(p.images[0]?.src).toBeTruthy();expect(p.devFlags).toContain('AI-generated sample photo · replace with the client photo before launch');}});
 it('keeps development flags enabled',()=>{expect(SHOW_DEV_FLAGS).toBe(true);});
 it('adds matching size pairs together and removes at zero quantity',()=>{const s=useShopStore.getState();expect(s.add('P1',4)).toBe(true);s.add('P1',4);expect(useShopStore.getState().bag).toEqual([{productId:'P1',size:4,quantity:2}]);s.quantity('P1',4,-2);expect(useShopStore.getState().bag).toEqual([]);});
});