import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, Sparkles, Star } from "lucide-react";

interface DecorativeCircle {
  id: number;
  size: number;
  top: string;
  left: string;
  delay: number;
  isPink: boolean;
}

const decorativeCircles: DecorativeCircle[] = [
  { id: 1, size: 40, top: "15%", left: "15%", delay: 0, isPink: false },
  { id: 2, size: 30, top: "20%", left: "80%", delay: 0.2, isPink: true },
  { id: 3, size: 50, top: "70%", left: "10%", delay: 0.4, isPink: false },
  { id: 4, size: 35, top: "75%", left: "85%", delay: 0.6, isPink: true },
  { id: 5, size: 25, top: "40%", left: "5%", delay: 0.8, isPink: false },
  { id: 6, size: 45, top: "35%", left: "90%", delay: 1, isPink: true },
];

interface Slide {
  id: number;
  content: "welcome" | "greeting" | "message" | "hearts" | "stars";
}

const slides: Slide[] = [
  { id: 1, content: "welcome" },
  { id: 2, content: "greeting" },
  { id: 3, content: "message" },
  { id: 4, content: "hearts" },
  { id: 5, content: "stars" },
];

function FloatingCircle({ circle }: { circle: DecorativeCircle }) {
  return (
    <motion.div
      className={`absolute rounded-full border-2 ${
        circle.isPink
          ? "border-pink-400/40"
          : "border-white/20"
      }`}
      style={{
        width: circle.size,
        height: circle.size,
        top: circle.top,
        left: circle.left,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { delay: circle.delay, duration: 0.5 },
        scale: { delay: circle.delay, duration: 0.5 },
        y: {
          delay: circle.delay,
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    />
  );
}

function Avatar() {
  return (
    <motion.div
      className="relative"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-lg shadow-black/20">
        <motion.div
          className="text-6xl"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 100 100" className="w-20 h-20">
            <circle cx="50" cy="50" r="40" fill="#f5f5f5" />
            <circle cx="35" cy="42" r="5" fill="#333" />
            <circle cx="65" cy="42" r="5" fill="#333" />
            <ellipse cx="50" cy="58" rx="12" ry="8" fill="#ffb6c1" opacity="0.6" />
            <path
              d="M 35 55 Q 50 68 65 55"
              stroke="#333"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="25" cy="50" r="8" fill="#ffb6c1" opacity="0.4" />
            <circle cx="75" cy="50" r="8" fill="#ffb6c1" opacity="0.4" />
            <ellipse cx="50" cy="25" rx="25" ry="12" fill="#e8e8e8" />
            <circle cx="35" cy="22" r="8" fill="#f0f0f0" />
            <circle cx="65" cy="22" r="8" fill="#f0f0f0" />
          </svg>
        </motion.div>
      </div>
      <motion.div
        className="absolute -bottom-1 -right-1 w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Heart className="w-4 h-4 text-white fill-white" />
      </motion.div>
    </motion.div>
  );
}

function WelcomeSlide() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Avatar />
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h1
          className="text-3xl font-bold text-white mb-2"
          dir="rtl"
          data-testid="text-greeting-title"
        >
          هلوو اسراء
        </h1>
        <motion.p
          className="text-pink-300 text-xl tracking-widest"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          &#60;&#60;&#60;&#60;
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

function GreetingSlide() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-20 h-20 rounded-full bg-pink-500/30 flex items-center justify-center"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-12 h-12 rounded-full bg-pink-400/50" />
      </motion.div>
      <motion.h2
        className="text-4xl font-bold text-white"
        dir="rtl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        data-testid="text-hellooo"
      >
        هلاووو
      </motion.h2>
    </motion.div>
  );
}

function MessageSlide() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-6 text-center px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Sparkles className="w-16 h-16 text-pink-400" />
      </motion.div>
      <motion.p
        className="text-2xl text-white/90 leading-relaxed"
        dir="rtl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        data-testid="text-special-message"
      >
        انتي شخص مميز جداً
      </motion.p>
      <motion.p
        className="text-lg text-pink-300"
        dir="rtl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        واتمنى لك يوم سعيد
      </motion.p>
    </motion.div>
  );
}

function HeartsSlide() {
  const hearts = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 15,
    x: Math.random() * 80 + 10,
    delay: Math.random() * 2,
  }));

  return (
    <motion.div
      className="relative w-full h-64 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.x}%`,
            bottom: "20%",
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: -200,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          <Heart
            className="text-pink-400 fill-pink-400"
            style={{ width: heart.size, height: heart.size }}
          />
        </motion.div>
      ))}
      <motion.p
        className="text-2xl text-white z-10"
        dir="rtl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
        data-testid="text-love-message"
      >
        بحبك كتير
      </motion.p>
    </motion.div>
  );
}

function StarsSlide() {
  const stars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 15 + 8,
    x: Math.random() * 90 + 5,
    y: Math.random() * 90 + 5,
    delay: Math.random() * 2,
  }));

  return (
    <motion.div
      className="relative w-full h-64 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          initial={{ scale: 0, rotate: 0 }}
          animate={{
            scale: [0, 1, 0],
            rotate: 180,
          }}
          transition={{
            duration: 2,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Star
            className="text-yellow-300 fill-yellow-300"
            style={{ width: star.size, height: star.size }}
          />
        </motion.div>
      ))}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-2xl text-white mb-2" dir="rtl" data-testid="text-star-message">
          انتي نجمة
        </p>
        <p className="text-lg text-yellow-300" dir="rtl">
          تضيئين حياتي
        </p>
      </motion.div>
    </motion.div>
  );
}

function SlideContent({ content }: { content: Slide["content"] }) {
  switch (content) {
    case "welcome":
      return <WelcomeSlide />;
    case "greeting":
      return <GreetingSlide />;
    case "message":
      return <MessageSlide />;
    case "hearts":
      return <HeartsSlide />;
    case "stars":
      return <StarsSlide />;
    default:
      return null;
  }
}

function PaginationDots({
  currentSlide,
  totalSlides,
  onDotClick,
}: {
  currentSlide: number;
  totalSlides: number;
  onDotClick: (index: number) => void;
}) {
  return (
    <div className="flex items-center gap-2" data-testid="pagination-dots">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`rounded-full transition-all duration-300 ${
            index === currentSlide
              ? "w-3 h-3 bg-white"
              : "w-2 h-2 bg-white/30 hover:bg-white/50"
          }`}
          data-testid={`dot-${index}`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        prevSlide();
      } else if (e.key === "ArrowLeft") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    let startX = 0;
    let endX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23] relative overflow-hidden"
      data-testid="greeting-container"
    >
      {decorativeCircles.map((circle) => (
        <FloatingCircle key={circle.id} circle={circle} />
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex items-center justify-center w-full px-4"
          >
            <SlideContent content={slides[currentSlide].content} />
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        data-testid="button-prev"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        data-testid="button-next"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <PaginationDots
          currentSlide={currentSlide}
          totalSlides={slides.length}
          onDotClick={goToSlide}
        />
      </div>
    </div>
  );
}
