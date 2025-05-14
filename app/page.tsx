import CardStack from "@/components/card-stack";
import { eventCards } from "@/lib/data";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
  {/* Pink background */}
  <div className="absolute inset-0 bg-pink-200"></div>
  
  {/* Coral/salmon pink circle at top left */}
  <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-red-400"></div>
  
  {/* Light pink circle at right */}
  <div className="absolute top-32 -right-64 h-128 w-128 rounded-full bg-pink-200"></div>
  
  {/* Chartreuse/yellowish-green section at bottom */}
  <div className="absolute bottom-0 left-0 right-0 h-64 bg-yellow-500"></div>
  
  {/* Content container */}
  <div className="container relative z-10 mx-auto px-4 pt-6 pb-20">
    <CardStack initialCards={eventCards} />
  </div>
</div>
  );
}