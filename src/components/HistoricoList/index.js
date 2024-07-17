import React from 'react';
import {
  Container, 
  TipoText,
  Tipo,
  IconView,
  ValorText,
  DescriptionText,

} from './styles';


import Icon from 'react-native-vector-icons/Feather'

export default function HistoricoList({ data }){

  

  return(
    <Container>

      <DescriptionText>
        Descrição: {data.description}
      </DescriptionText>
      <Tipo>
        <IconView tipo={data.type}>
          <Icon 
            name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'}
            size={20} 
            color="#FFF" 
          />
          <TipoText>{data.type}</TipoText>
        </IconView>
      </Tipo>

      <ValorText>
        R$ {data.value}
      </ValorText>

    </Container>
  )
}