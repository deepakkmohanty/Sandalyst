import { ArrowUpRight,ArrowRight,ArrowLeft,Search,Heart,ShoppingBag,UserRound,Menu,X,Plus,Minus,Truck,Footprints,RotateCcw,MessageCircle,ChevronDown,Pause,Play,Check,Trash2,MoveUpRight,SlidersHorizontal, type LucideIcon } from 'lucide-react';
const icons = {ArrowUpRight,ArrowRight,ArrowLeft,Search,Heart,ShoppingBag,UserRound,Menu,X,Plus,Minus,Truck,Footprints,RotateCcw,MessageCircle,ChevronDown,Pause,Play,Check,Trash2,MoveUpRight,SlidersHorizontal};
export type IconName = keyof typeof icons;
export function Icon({name,size=20,...props}:{name:IconName;size?:16|20|24}&React.SVGProps<SVGSVGElement>){const Component:LucideIcon=icons[name];return <Component size={size} strokeWidth={1.5} aria-hidden="true" {...props}/>;}
