import { Bone, Cross, Dog, Droplets, Fence, Turtle } from 'lucide-react';
export const phone = '22998659299';
export const whatsapp = 'https://wa.me/5522998659299';
export const instagram = 'https://www.instagram.com/cra_mundo_animal/';
export const maps = 'https://maps.app.goo.gl/nepJKXGkLGDjvkAi9?g_st=ic';
export const address = 'Rua Manoel França da Silva, Grussaí, São João da Barra – RJ, CEP 28200-000';
export const photos = {
  hero:'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1500&q=84',
  dog:'https://images.unsplash.com/photo-1693615775129-f2004d6e3e0b?auto=format&fit=crop&w=1100&q=85',
  cat:'https://images.unsplash.com/photo-1604967431505-b534f35c5541?auto=format&fit=crop&w=900&q=80',
  friends:'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=85',
  paws:'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80',
  horse:'https://images.unsplash.com/photo-1534307671554-38a3c670a3c7?auto=format&fit=crop&w=900&q=80',
  reptile:'https://images.unsplash.com/photo-1517982127246-5bba4e1f985f?auto=format&fit=crop&w=900&q=80',
};
export const categories = [
 {id:'racoes', title:'Rações & alimentação',short:'Rações',desc:'Opções para a alimentação e a rotina de diferentes animais.', icon:Dog, number:'01',accent:'sky'},
 {id:'veterinarios',title:'Produtos veterinários',short:'Veterinários',desc:'Linha de cuidados e medicamentos veterinários sob consulta.',icon:Cross,number:'02',accent:'blue'},
 {id:'acessorios',title:'Acessórios para pets',short:'Acessórios',desc:'Itens que acompanham os momentos de cada pet.',icon:Bone,number:'03',accent:'mint'},
 {id:'rurais',title:'Animais rurais',short:'Rurais',desc:'Produtos destinados também ao cuidado de animais rurais.',icon:Fence,number:'04',accent:'sand'},
 {id:'higiene',title:'Higiene & cuidados',short:'Higiene',desc:'Categorias de limpeza, conforto e bem-estar.',icon:Droplets,number:'05',accent:'lavender'},
 {id:'exoticos',title:'Répteis & exóticos',short:'Exóticos',desc:'Uma seleção de categorias para necessidades específicas.',icon:Turtle,number:'06',accent:'peach'},
];
export const examples = [
 {category:'racoes',name:'Alimentação para cães',description:'Categoria ilustrativa. Consulte opções e disponibilidade.',label:'Exemplo de categoria',photo:photos.dog},
 {category:'racoes',name:'Alimentação para gatos',description:'Categoria ilustrativa. Consulte opções e disponibilidade.',label:'Exemplo de categoria',photo:photos.cat},
 {category:'veterinarios',name:'Cuidados veterinários',description:'Categoria ilustrativa. Medicamentos apenas sob orientação adequada.',label:'Exemplo de categoria',photo:null},
 {category:'acessorios',name:'Coleiras e acessórios',description:'Categoria ilustrativa. Consulte os itens disponíveis na loja.',label:'Exemplo de categoria',photo:photos.paws},
 {category:'rurais',name:'Linha para animais rurais',description:'Categoria ilustrativa. Consulte os produtos disponíveis.',label:'Exemplo de categoria',photo:photos.horse},
 {category:'higiene',name:'Higiene e bem-estar',description:'Categoria ilustrativa. Consulte as opções de cuidados.',label:'Exemplo de categoria',photo:null},
 {category:'exoticos',name:'Cuidados para répteis',description:'Categoria ilustrativa. Consulte as opções disponíveis.',label:'Exemplo de categoria',photo:photos.reptile},
];
export function waMessage(topic){return `${whatsapp}?text=${encodeURIComponent(`Olá! Vim pelo site da Mundo Animal e gostaria de saber mais sobre ${topic}.`)}`}
