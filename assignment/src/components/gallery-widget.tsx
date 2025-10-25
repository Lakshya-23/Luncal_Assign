import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { WidgetCard } from "./widget-card";

const galleryImages = [
    "/images/building-1.jpg",
    "/images/building-2.jpg",
    "/images/building-3.jpg",
    "/images/building-4.jpg",
  ];

export function GalleryWidget() {
  return (
    <WidgetCard>
      <div className="flex flex-col gap-6 pl-4">
        <div className="flex items-center justify-between">
          <div className="rounded-full bg-secondary px-6 py-2.5 shadow-soft-inset">
            <h3 className="font-medium text-foreground">Gallery</h3>
          </div>
          <div className="flex items-center gap-2">
            <Button className="rounded-full bg-primary px-4 py-2 text-xs font-semibold shadow-soft-outset">
              + ADD IMAGE
            </Button>
            
            <CarouselPrevious className="relative cursor-pointer -left-1 top-0 h-9 w-9 translate-y-0 rounded-full border-none  text-foreground shadow-black shadow-lg  hover:bg-primary hover:text-primary-foreground active:shadow-none " />
            <CarouselNext className="relative left-0  cursor-pointer top-0 h-9 w-9 translate-y-0 rounded-full border-none  text-foreground shadow-black shadow-lg hover:bg-primary hover:text-primary-foreground active:shadow-none" />
          </div>
        </div>
        
        <CarouselContent className="py-4">
          {galleryImages.map((src, index) => (
            <CarouselItem key={index} className="basis-1/3 group cursor-pointer">
              <div 
                className="aspect-square w-full overflow-hidden rounded-xl
                           transform transition-all duration-300 ease-in-out
                           origin-top-left
                           group-hover:z-10 
                           group-hover:shadow-soft-outset
                           group-hover:scale-105
                           group-hover:-rotate-2" 
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover 
                             transition-all duration-300 ease-in-out 
                             grayscale group-hover:grayscale-0"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
    </WidgetCard>
  );
}

export function GalleryWrapper() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <GalleryWidget />
    </Carousel>
  );
}