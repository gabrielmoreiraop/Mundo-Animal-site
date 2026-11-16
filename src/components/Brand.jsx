import { PawPrint } from 'lucide-react';
export default function Brand({light=false}) {
 return <a href="/" aria-label="Mundo Animal — página inicial" className="flex items-center gap-3 group">
  {/* Substitua pelo logotipo oficial em public/images/logo-mundo-animal.png, se disponível. */}
  <span className={`h-11 w-11 rounded-2xl grid place-items-center shadow-md transition-transform group-hover:-rotate-6 ${light?'bg-white text-navy':'bg-navy text-white'}`}><PawPrint size={25} strokeWidth={2.25}/></span>
  <span className="flex flex-col leading-none"><span className={`font-display text-[19px] md:text-[21px] font-extrabold tracking-[-.055em] ${light?'text-white':'text-navy'}`}>MUNDO <span className={light?'text-blue-200':'text-accent'}>ANIMAL</span></span><span className={`mt-1.5 text-[8px] font-bold tracking-[.30em] uppercase ${light?'text-blue-200':'text-muted'}`}>Cuidado em cada detalhe</span></span>
 </a>
}
