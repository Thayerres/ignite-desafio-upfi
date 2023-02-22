import { Grid, GridItem, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string>('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  // TODO FUNCTION HANDLE VIEW IMAGE
  const handleViewImage = (imgUrl: string) => {
    setImageUrl(imgUrl);
  };

  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={10}>
        {cards?.map(card => {
          return (
            <GridItem onClick={onOpen}>
              <Card data={card} viewImage={handleViewImage} />
            </GridItem>
          );
        })}
      </Grid>

      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={imageUrl} />
    </>
  );
}
