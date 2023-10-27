import React from 'react';
import { Box, IconButton, Stack, Heading, Text, Container } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const cards = [
  {
    title: 'Hanoi, Vietnam',
    text: "Immerse yourself in Vietnamese culture and history with a day trip from Hanoi to Ninh Binh",
    image:
      'https://lilystravel.com/wp-content/uploads/2019/11/HM.jpg',
  },
  {
    title: 'Park Güell, Barcelona',
    text: "Discover the unique architecture of Gaudí's masterpiece in Barcelona",
    image:
      'https://images.unsplash.com/photo-1593368858664-a7fe556ab936?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyayUyMGd1ZWxsfGVufDB8fDB8fHww',
  },
  
  {
    title: 'Great Barrier Reef, Queensland',
    text: "Explore the underwater magic of the Great Barrier Reef in the Australia coastline",
    image:
      'https://www.telegraph.co.uk/content/dam/travel/Spark/tourism-australia-2018/tourism-aus-turtle-teq.png',
  },
  {
    title: 'Flamengo Show, Seville',
    text: "Find the best original Flamengo shows in its birthplace in Andalusia",
    image:
"https://cdn.kimkim.com/files/a/images/88fa66240d212977f46eee8f60f121051ee1fc6b/original-d883c8b124a4fb821f097db56ada47e0.jpg"  },
  {
    title: 'Museum Island, Berlin',
    text: "Visit the biggest Museum compex worldwide in the German capital",
    image:"https://www.visitberlin.de/system/files/styles/visitberlin_hero_visitberlin_desktop_2x/private/image/Museumsinsel%2BDom_iStock_c_Chalabala_DL_PPT_0.jpg?h=ed48b44d&itok=GzX54IDM"  },
];

const CaptionCarousel = () => {
  const [slider, setSlider] = React.useState(null);

  const handlePrevClick = () => {
    slider?.slickPrev();
  };

  const handleNextClick = () => {
    slider?.slickNext();
  };

  return (
    <Box position="relative" height="500px" width="full" overflow="hidden">
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left="0%"  /* Customize the left position */
        top="60%"   /* Customize the top position */
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={handlePrevClick}
        style={{ fontSize: "20px", borderWidth: "1px", fontWeight: "bold" }}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right="48%"  /* Customize the right position */
        top="60%"   /* Customize the top position */
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={handleNextClick}
        style={{ fontSize: "20px", borderWidth: "1px", fontWeight: "bold" }}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height="600px"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w="full"
                maxW="lg"
                position="absolute"
                bottom="70" /* Move the text to the bottom */
                left="-300"   /* Move the text to the left */
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading fontSize={{ base: '2xl', md: 'xl', lg: '5xl' }} color="#e35b2f">
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="#ffffff">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CaptionCarousel;






