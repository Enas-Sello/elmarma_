import teamTest from '@/public/assets/teamtest.png';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
const allTeams: any[] = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {}
];
const AllTeamsCarousel = () => {
  return (
    <Carousel
      className="bg-primary bg-opacity-10 shadow-inner p-3 rounded"
      opts={{
        loop: true
      }}
      plugins={[
        Autoplay({
          delay: 1000
        })
      ]}>
      <CarouselContent className="gap-4 flex">
        {allTeams.map((team, i) => (
          <CarouselItem key={i} className="basis-12">
            <div className="w-11 h-11">
              <Image
                src={team.img || teamTest}
                priority={true}
                alt="team"
                placeholder="blur"
                className=" object-cover w-full h-full "
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
};

export default AllTeamsCarousel;
