import React from 'react';
import tw from 'tailwind-styled-components';

export default const AshCard = () => {
  return (
    <Card>
      <Image
        src="Pokeball.png"
        alt="Pokeball"
        width={70}
        height={70}
      />
      <Typography>Ash's Pokemon</Typography>
      <Image
        src="Pokeball.png"
        alt="Pokeball"
        width={70}
        height={70}
      />
    </Card>
  );
};

const Card = tw.div`
  w-96
  h-16
  flex
  flex-row
  items-center
  justify-center
  mt-[-120px]
  bg-white
  text-white
  rounded-lg
  shadow-lg
  p-4
`;

const Typography = tw.div`
  text-lg
  text-center
  text-black
  p-2
`;

const Image = tw.img`
  w-16
  h-16
`;

export default AshCard;