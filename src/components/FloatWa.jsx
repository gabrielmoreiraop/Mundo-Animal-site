import React from 'react';import {MessageCircle} from 'lucide-react';import {whatsapp} from '../data/site';
export default function FloatWa(){return <a className="float-wa" href={whatsapp} aria-label="Conversar com Mundo Animal pelo WhatsApp" title="Falar pelo WhatsApp" target="_blank" rel="noopener noreferrer"><MessageCircle size={25} fill="white" strokeWidth={1.8}/></a>}
