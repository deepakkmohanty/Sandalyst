import * as Dialog from '@radix-ui/react-dialog';
import { motion,useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Button } from './button';
import { Icon } from './icon';
export function Overlay({open,onClose,title,children,drawer=false,left=false}:{open:boolean;onClose:()=>void;title:string;children:ReactNode;drawer?:boolean;left?:boolean}){const reduced=useReducedMotion();return <Dialog.Root open={open} onOpenChange={value=>{if(!value)onClose();}}><Dialog.Portal><Dialog.Overlay className="overlay-scrim"/><Dialog.Content asChild aria-describedby={undefined}><motion.div className={`brand-overlay ${drawer?'drawer':''} ${left?'left':''}`} initial={reduced?false:{opacity:0,...(drawer?{x:left?-60:60}:{y:24})}} animate={{opacity:1,x:0,y:0}} transition={{type:'spring',stiffness:260,damping:30}}><div className="overlay-header"><Dialog.Title>{title}</Dialog.Title><Dialog.Close asChild><Button variant="ghost" size="icon" aria-label="Close"><Icon name="X"/></Button></Dialog.Close></div>{children}</motion.div></Dialog.Content></Dialog.Portal></Dialog.Root>;}
