import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { COMPANY } from '../data/site';
export function PrimaryButton({children,href,className='',icon=true}) {return <a href={href} className={`btn-primary ${className}`}>{children}{icon&&<ArrowUpRight size={18}/>}</a>}
export function WhatsAppButton({children='Fale pelo WhatsApp',className='',message}) {const url=message?`${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`:COMPANY.whatsapp;return <a href={url} target="_blank" rel="noopener noreferrer" className={`btn-whatsapp ${className}`}><MessageCircle size={19}/>{children}</a>}
