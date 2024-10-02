import { ITraining } from '../../Types/interfaces';
import { CardContainer, Circle, CircleText, Description, IconContainer, Title, Image } from './styles';

export default function CardHome({ data }: { data: ITraining }) {
  return (
    <CardContainer>
      <Circle>
        <CircleText>02</CircleText>
      </Circle>
      <IconContainer>
        <Image src="image.png" draggable="false"></Image>
      </IconContainer>
      <Title>{data.name}</Title>
      <Description>{data.description}</Description>
    </CardContainer>
  );
}
