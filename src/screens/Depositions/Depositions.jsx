import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'

import depoimento1 from '../../utils/assets/depositions/depoimento1.png';
import depoimento2 from '../../utils/assets/depositions/depoimento2.png';
import depoimento3 from '../../utils/assets/depositions/depoimento3.png';
import depoimento4 from '../../utils/assets/depositions/depoimento4.png';
import depoimento5 from '../../utils/assets/depositions/depoimento5.png';

const depositions = [
  {
    id: 1,
    name: 'Josimar Henrique da Silva',
    image: depoimento1, // TODO: importar de assets
    occupation: 'Diretor Presidente',
    company: 'Grupo Hebron',
    text: 'Há mais de 10 anos sou cliente da Renee Trajar. A qualidade, caimento e possibilidade de customização das roupas, aliados ao excelente atendimento e prazo de entrega são fatores decisivos para mim.',
  },
  {
    id: 2,
    name: 'William H. M. Garey',
    image: depoimento2,
    occupation: 'Advogado',
    company: 'Nelson Garey Advogados Associados',
    text: 'Sou cliente do Renee há uns 12 anos. Nosso primeiro contato foi por intermédio de meu pai, que já tem uma história de décadas com o querido Renee. O excelente atendimento antes e pós venda e a alta qualidade dos materiais usados colocam a Renee Trajar em um patamar acima dos demais do ramo.',
  },
  {
    id: 3,
    name: 'Domingos Orestes Chiomento',
    image: depoimento3,
    occupation: '',
    company: 'DOC Contabilidade empresarial',
    text: 'Seu corte tanto de camisas, bem como de ternos são mpecáveis, muitos dos meus amigos tem elogiado a vestimenta. Recomendo para quem gosta de perfeição. Estamos nos servindo o trabalho do Renee Trajar há mais de vinte anos.',
  },
  {
    id: 4,
    name: 'José Mauro Marques',
    image: depoimento4,
    occupation: 'Advogado',
    company: '',
    text: 'Tenho a honra de afirmar que enquanto nossas vidas perdurarem o meu conceito é sempre melhor em relação ao Renee Trajar, sua pessoa, ao profissional competente e idôneo, sempre pontual, atencioso e preocupado em atender da melhor maneira os anseios de seus clientes, incluindo este signatário.',
  },
  {
    id: 5,
    name: 'Custódio Pereira',
    image: depoimento5,
    occupation: 'Membro do CONSOCIAL',
    empresa: 'Conselho Superior de Responsabilidade Social da FIESP-SP',
    text: 'Conheço o excelente e qualificado trabalho do Renee Trajar e sua equipe há décadas. Para camisas e ternos, o Renee é imbatível, sempre com preços justos, produtos de excelente qualidade e especialmente tudo é feito com muito cuidado e qualidade. Cumpre os prazos com atendimento de alto nível. O Renee trabalha com perfeição nos detalhes.',
  },
]

export function Depositions() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {
          depositions.map(deposition => (
            <Carousel.Item key={deposition.id}>

              <img
                className="d-block w-100"
                src={deposition.image}
                alt={`image ${deposition.name}`}
              />
              <Carousel.Caption>
                <div>
                  <h3>{deposition.name} | {deposition.company}</h3>
                  <p>{deposition.text}</p>
                </div>
              </Carousel.Caption>

            </Carousel.Item>
          ))
        }
      </Carousel>
    </div>
  );
}