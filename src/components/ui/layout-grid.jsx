import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export const LayoutGrid = ({ cards = [], className }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    if (selected?.id === card.id) {
      setLastSelected(selected);
      setSelected(null);
    } else {
      setLastSelected(selected);
      setSelected(card);
    }
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div
      className={cn(
        "w-full h-full p-2 sm:p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative",
        className
      )}
    >
      {cards.map((card, i) => (
        <div
          key={card.id ?? i}
          className={cn(card.className, "min-h-[260px] md:min-h-[320px]")}
        >
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "overflow-hidden cursor-pointer",
              selected?.id === card.id
                ? "rounded-2xl cursor-pointer absolute inset-0 h-4/5 md:h-3/4 w-full md:w-3/5 max-w-3xl m-auto z-50 flex justify-center items-center flex-wrap flex-col shadow-2xl border border-white/20 bg-[#0D0D0D]"
                : lastSelected?.id === card.id
                ? "z-40 bg-[#181818] border border-[#303030] rounded-2xl h-full w-full relative"
                : "bg-[#181818] border border-[#303030] rounded-2xl h-full w-full relative hover:border-[#315EFB]/60 transition-colors"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && (
              <SelectedCard
                selected={selected}
                onClose={() => handleOutsideClick()}
              />
            )}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "fixed inset-0 bg-[#0D0D0D]/85 backdrop-blur-sm z-30 transition-all",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 1 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected, onClose }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-2xl shadow-2xl relative z-[60]">
      {onClose && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 z-[80] p-2 rounded-full bg-[#0D0D0D]/80 hover:bg-[#0D0D0D] text-white/80 hover:text-white transition-all backdrop-blur-md border border-white/20"
          aria-label="Close preview"
        >
          <X className="w-4 h-4" />
        </button>
      )}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.85,
        }}
        className="absolute inset-0 h-full w-full bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/65 to-transparent z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 60,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 60,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-6 md:px-8 pb-6 md:pb-8 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};

export default LayoutGrid;
