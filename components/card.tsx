"use client";

import { motion } from "framer-motion";
import { EventCard } from "@/lib/data";
import Image from "next/image";
import { Clock, DollarSign, Users, MapPin, CheckCircle } from "lucide-react";

interface CardProps {
  card: EventCard;
  index: number;
  totalCards: number;
  isTop: boolean;
  swipe: (direction: "left" | "right") => void;
}

export default function Card({ card, index, totalCards, isTop, swipe }: CardProps) {
  const cardStyles = {
    position: "absolute",
    width: "100%",
    height: "90%",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    zIndex: totalCards - index,
    transform: !isTop 
      ? `translateY(${index * 12}px) scale(${1 - index * 0.08})` 
      : "translateY(0) scale(1)",
    transformOrigin: "center bottom",
  };

  const clockAnimation = {
    rotate: [0, 360],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear"
    }
  };

  return (
    <motion.div
      style={cardStyles as any}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.7}
      onDragEnd={(_, info) => {
        if (info.offset.x > 100) {
          swipe("right");
        } else if (info.offset.x < -100) {
          swipe("left");
        }
      }}
      whileDrag={{ scale: 1.05 }}
      className="bg-white shadow-xl rounded-2xl overflow-hidden"
    >
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
        <div className="absolute top-0 right-0 left-0 bg-gradient-to-b from-pink-500/70 via-yellow-400/40 to-transparent h-32 z-0"></div>
        
        <div className="relative z-20 h-full flex flex-col">
          <div className="relative h-[60vh]">
            <div className="absolute top-4 right-4 z-30 bg-black/80 text-white py-1 px-3 rounded-full flex items-center space-x-1">
              <span className="text-xs font-medium">{card.category}</span>
            </div>
            
            <Image
              src={card.image}
              alt={card.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-black/90 text-white p-4 z-20">
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            
            <div className="flex items-center space-x-6 mb-2">
              <div className="flex items-center space-x-1">
                <DollarSign className="w-4 h-4 text-gray-400" />
                <span className="text-yellow-400 font-semibold">{card.price.toFixed(1)}</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <motion.div animate={clockAnimation}>
                  <Clock className="w-4 h-4 text-gray-400" />
                </motion.div>
                <span className="text-gray-300">{card.timeRange}</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">{card.guests} guests</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-1 mb-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="text-yellow-400">Location: {card.location}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <motion.div animate={clockAnimation}>
                  <Clock className="w-4 h-4 text-gray-400" />
                </motion.div>
                <span className="text-gray-300">Starts in {card.startsIn}</span>
              </div>
              
              <button className="bg-gray-600 rounded-full p-2">
                <CheckCircle className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}