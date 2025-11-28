import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, Sparkles, Music, Volume2, VolumeX, Play, Pause, SkipBack, SkipForward } from "lucide-react";
import image1 from "@assets/matching lockscreen batman and hello kitty_1764351307925.jpeg";
import image2 from "@assets/Lily_1764351307926.jpeg";
import image3 from "@assets/Batman & hello kitty_1764351307927.jpeg";
import image4 from "@assets/توت👸🏻⟡ نايف 🦸🏻_♂️ on TikTok_1764351307928.jpeg";
import gifImage from "@assets/From KlickPin CF Hello Kitty GIF _ Imagens animadas gif Coisas da hello kitty Emoticons animados_1764351307929.gif";
import audioFile1 from "@assets/عينك - غيث صباح الاصدار الخامس من _1764357789556.mp3";
import audioFile2 from "@assets/ريمييي_1764359852296.mp3";
import audioFile3 from "@assets/Mohammed Abdul Jabbar - Antah Tahbani (Official Audio) محمد عبد الجبار انت تحبني(mp3j.cc)_1764359996919.mp3";

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
  content: "game" | "flower-choice" | "flowers" | "question" | "answer";
}

const slides: Slide[] = [
  { id: 1, content: "game" },
  { id: 2, content: "flower-choice" },
  { id: 3, content: "flowers" },
  { id: 4, content: "question" },
  { id: 5, content: "answer" },
];

function Rose({ color }: { color: "red" | "white" }) {
  return (
    <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none">
      {color === "red" ? (
        <>
          {/* Petals */}
          <ellipse cx="50" cy="35" rx="8" ry="12" fill="#dc2626" transform="rotate(-20 50 35)" />
          <ellipse cx="50" cy="35" rx="8" ry="12" fill="#ef4444" transform="rotate(20 50 35)" />
          <ellipse cx="50" cy="35" rx="8" ry="12" fill="#dc2626" transform="rotate(60 50 35)" />
          <ellipse cx="50" cy="35" rx="8" ry="12" fill="#ef4444" transform="rotate(-60 50 35)" />
          <ellipse cx="50" cy="35" rx="8" ry="12" fill="#7f1d1d" transform="rotate(100 50 35)" />
          <ellipse cx="50" cy="35" rx="8" ry="12" fill="#dc2626" transform="rotate(-100 50 35)" />
          {/* Inner petals */}
          <ellipse cx="50" cy="30" rx="6" ry="8" fill="#991b1b" />
          {/* Stem */}
          <path d="M 50 50 Q 45 70 40 85" stroke="#16a34a" strokeWidth="2" />
          {/* Leaves */}
          <ellipse cx="35" cy="65" rx="6" ry="10" fill="#22c55e" transform="rotate(-40 35 65)" />
          <ellipse cx="55" cy="75" rx="6" ry="10" fill="#16a34a" transform="rotate(40 55 75)" />
        </>
      ) : (
        <>
          {/* White Rose Petals */}
          <ellipse cx="50" cy="35" rx="8" ry="12" fill="#ffffff" transform="rotate(-20 50 35)" />
          <ellipse cx="50" cy="35" rx="8" ry="12" fill="#f5f5f5" transform="rotate(20 50 35)" />
          <ellipse cx="50" cy="35" rx="8" ry="12" fill="#ffffff" transform="rotate(60 50 35)" />
          <ellipse cx="50" cy="35" rx="8" ry="12" fill="#f5f5f5" transform="rotate(-60 50 35)" />
          <ellipse cx="50" cy="35" rx="8" ry="12" fill="#ffffff" transform="rotate(100 50 35)" />
          <ellipse cx="50" cy="35" rx="8" ry="12" fill="#f5f5f5" transform="rotate(-100 50 35)" />
          {/* Inner petals */}
          <ellipse cx="50" cy="30" rx="6" ry="8" fill="#e5e5e5" />
          {/* Stem */}
          <path d="M 50 50 Q 45 70 40 85" stroke="#16a34a" strokeWidth="2" />
          {/* Leaves */}
          <ellipse cx="35" cy="65" rx="6" ry="10" fill="#22c55e" transform="rotate(-40 35 65)" />
          <ellipse cx="55" cy="75" rx="6" ry="10" fill="#16a34a" transform="rotate(40 55 75)" />
        </>
      )}
    </svg>
  );
}

function FloatingHeart() {
  const randomDelay = Math.random() * 0.5;
  const randomDuration = 2 + Math.random() * 1;
  const randomX = (Math.random() - 0.5) * 100;

  return (
    <motion.div
      className="absolute"
      initial={{ y: 0, x: 0, opacity: 1 }}
      animate={{
        y: -100,
        x: randomX,
        opacity: 0,
      }}
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        ease: "easeOut",
      }}
    >
      <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
    </motion.div>
  );
}

function HelloKitty({ image }: { image: string }) {
  const [hearts, setHearts] = useState<number[]>([0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [...prev, prev.length]);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative"
      initial={{ scale: 0, y: -30 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
    >
      {/* Floating Hearts */}
      {hearts.map((heart) => (
        <FloatingHeart key={heart} />
      ))}

      {/* Main Avatar Container */}
      <motion.div
        className="w-32 h-32 rounded-2xl overflow-hidden shadow-2xl border-4 border-pink-400/50"
        animate={{
          y: [0, -8, 0],
          rotate: [0, 1, -1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.img
          src={image}
          alt="Hello Kitty"
          className="w-full h-full object-cover"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 w-32 h-32 rounded-2xl bg-gradient-to-r from-pink-400/30 to-purple-400/30 blur-xl top-12"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Sparkle decoration */}
      <motion.div
        className="absolute -top-2 -right-2"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Sparkles className="w-6 h-6 text-yellow-300 fill-yellow-300" />
      </motion.div>
    </motion.div>
  );
}

function FloatingCircle({ circle }: { circle: DecorativeCircle }) {
  return (
    <motion.div
      className={`absolute rounded-full border-2 ${
        circle.isPink ? "border-pink-400/40" : "border-white/20"
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

interface GameSlideProps {
  onAnswer: (answer: boolean) => void;
}

function GameSlide({ onAnswer }: GameSlideProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelloKitty image={image1} />
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-4xl font-bold text-white mb-6" dir="rtl" data-testid="greeting-name">هلاوو ريم 💕</p>
        <p className="text-2xl text-pink-300 mb-4" dir="rtl">
          تعالي خلي نلعب سوة ؟ 😏
        </p>
        <p className="text-lg text-white/70" dir="rtl">الي يخسر يبوس خد الثاني 😉</p>
      </motion.div>
      <motion.button
        onClick={() => onAnswer(true)}
        className="px-10 py-4 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold text-lg transition-colors"
        data-testid="button-game-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >دوسي هنا يا اميرتي✨</motion.button>
    </motion.div>
  );
}

interface FlowerChoiceSlideProps {
  onChoice: (choice: "red" | "white") => void;
}

function FlowerChoiceSlide({ onChoice }: FlowerChoiceSlideProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelloKitty image={image2} />
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      >
        <p className="text-3xl text-white mb-2" dir="rtl" data-testid="flower-question">هممم سوأل:</p>
        <p className="text-2xl text-pink-300" dir="rtl">شنو احب اكثر؟</p>
      </motion.div>
      <motion.div
        className="flex gap-16 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <motion.button
          onClick={() => onChoice("red")}
          className="px-8 py-4 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold text-lg transition-colors flex items-center gap-3"
          data-testid="button-red-flower"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>انتِ؟</span>
          <Rose color="red" />
        </motion.button>

        <motion.button
          onClick={() => onChoice("white")}
          className="px-8 py-4 rounded-full bg-white/30 hover:bg-white/40 text-white font-semibold text-lg transition-colors flex items-center gap-3"
          data-testid="button-white-flower"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>الورد؟</span>
          <Rose color="white" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

interface FlowersSlideProps {
  choice: "red" | "white";
  onNext?: () => void;
}

function FlowersSlide({ choice, onNext }: FlowersSlideProps) {
  const flowers = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 60 + 20,
    delay: Math.random() * 1.5,
  }));

  const isRed = choice === "red";

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelloKitty image={image3} />
      <motion.div
        className="relative w-full h-96 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          className="absolute"
          style={{
            left: `${flower.x}%`,
            bottom: "-50px",
          }}
          initial={{ y: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: -400,
            opacity: [0, 1, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4,
            delay: flower.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
          data-testid={`flower-${flower.id}`}
        >
          <Rose color={isRed ? "red" : "white"} />
        </motion.div>
      ))}

      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
      >
        <p className="text-3xl text-white" dir="rtl" data-testid="flower-message">
          {isRed ? "صحيح بس مع الأسف اني طماع 🌹" : "غلطط اني احبج اكثررررر!!!! 🤍"}
        </p>
        <p className="text-xl text-pink-300 mt-4" dir="rtl">
          {isRed ? "ييلةة بوسيي وبلا زحة يستحسن تكون فويز" : "بما انو محترمتي مشاعري لحساسة\nانتِ عقابج عسير قربي شفتج بلة"}
        </p>
      </motion.div>
    </motion.div>
      <motion.button
        onClick={onNext}
        className="px-10 py-4 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold text-lg transition-colors"
        data-testid="button-continue-flowers"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >دوسي هنا✨</motion.button>
    </motion.div>
  );
}

interface QuestionSlideProps {
  onAnswer: (answer: boolean) => void;
  flowerChoice: "red" | "white";
}

function QuestionSlide({ onAnswer, flowerChoice }: QuestionSlideProps) {
  const [noAttempts, setNoAttempts] = useState(0);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const getRandomPosition = () => {
    const x = (Math.random() - 0.5) * 300;
    const y = (Math.random() - 0.5) * 200;
    return { x, y };
  };

  const handleNoClick = () => {
    const newAttempts = noAttempts + 1;
    setNoAttempts(newAttempts);
    
    if (newAttempts < 3) {
      setButtonPosition(getRandomPosition());
    } else {
      setTimeout(() => {
        onAnswer(false);
      }, 500);
    }
  };

  const narrativeSteps = [
    "بصراحة اني احبج وريد نكون سوة ونتِ",
    "هل ناوية تحبيني ونكون سوة",
    "اريدج وياي بكل خطوة",
  ];

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelloKitty image={image4} />
      <motion.div
        className="text-center space-y-4 w-full max-w-lg px-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {narrativeSteps.map((step, idx) => (
          <motion.p
            key={idx}
            className="text-sm sm:text-lg text-white/80 italic"
            dir="rtl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + idx * 0.2 }}
            data-testid={`narrative-${idx}`}
          >
            "{step}"
          </motion.p>
        ))}
      </motion.div>
      <motion.div
        className="text-center w-full px-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2" dir="rtl" data-testid="main-question">تحبيني لو لا؟</h2>
        <p className="text-pink-300 text-sm sm:text-lg" dir="rtl">
          لا تحاولين كل دروبج ترجعيلي 😉
        </p>
      </motion.div>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center w-full px-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <motion.button
          onClick={handleNoClick}
          className="px-8 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold text-lg transition-colors"
          data-testid="button-no-main"
          animate={{
            x: buttonPosition.x,
            y: buttonPosition.y,
            opacity: noAttempts >= 3 ? 0 : 1,
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {noAttempts === 0 ? "لا" : noAttempts === 1 ? "حنطيج فرصة ثانية" : "🙄جربي وضغطي مرة ثانية"}
        </motion.button>

        <motion.button
          onClick={() => onAnswer(true)}
          className="px-8 py-3 rounded-full bg-white/20 hover:bg-white/30 text-white font-semibold text-lg transition-colors"
          data-testid="button-yes-main"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >💖احبكك</motion.button>
      </motion.div>
      {noAttempts > 0 && noAttempts < 3 && (
        <motion.p
          className="text-sm sm:text-lg text-white/60 text-center px-2 w-full"
          dir="rtl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          data-testid="hint-message"
        >لازك بيج ما اعوفجج😊</motion.p>
      )}
    </motion.div>
  );
}

interface AnswerSlideProps {
  answer: boolean;
}

function AnswerSlide({ answer }: AnswerSlideProps) {
  const yesContinuation = [
    "اطشلك من تجي على الدرب",
    "بوسات وزرعلك السجة ورد",
    "من بيتك لحد بيتي",
  ];

  const noContinuation = [
    "بس الحب بعينك واضح",
    "محاولة الهروب خليتك أقرب",
    "الحب ما يكون سهل في البدايات",
  ];

  const continuation = answer ? yesContinuation : noContinuation;

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div className="relative">
        <motion.img
          src={gifImage}
          alt="Hello Kitty GIF"
          className="w-32 h-32 rounded-2xl shadow-2xl border-4 border-pink-400/50 object-cover"
          initial={{ scale: 0, y: -30 }}
          animate={{
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            scale: { type: "spring", stiffness: 150, damping: 12 },
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
        <motion.div
          className="absolute inset-0 w-32 h-32 rounded-2xl bg-gradient-to-r from-pink-400/30 to-purple-400/30 blur-xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
      <motion.div
        className="text-center space-y-4 max-w-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.h3
          className={`text-3xl font-bold mb-6 ${
            answer ? "text-pink-300" : "text-yellow-300"
          }`}
          dir="rtl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          data-testid="answer-title"
        >
          {answer ? "يمةةة فدوةةة! 💕" : "إي هالجواب ما صح..."}
        </motion.h3>

        {continuation.map((line, idx) => (
          <motion.p
            key={idx}
            className="text-lg text-white/80"
            dir="rtl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + idx * 0.2 }}
            data-testid={`final-message-${idx}`}
          >
            "{line}"
          </motion.p>
        ))}
      </motion.div>
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {answer ? (
          <motion.div
            className="text-center space-y-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 1.2 }}
          >
            <p className="text-2xl text-white font-semibold" dir="rtl">
              شكراً لأن شاركتيني 🌹
            </p>
            <p className="text-pink-300">❤️واني هم حكون شريك حياتج وحبيبج</p>
          </motion.div>
        ) : (
          <motion.div
            className="text-center space-y-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 1.2 }}
          >
            <p className="text-2xl text-white font-semibold" dir="rtl">
              أني صابر لك بس محصور بك 😊
            </p>
            <p className="text-yellow-300">
              🌟 ما تقدري تهربي من حب مثل حبي 🌟
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

interface SlideContentProps {
  content: Slide["content"];
  onGameAnswer?: (answer: boolean) => void;
  onFlowerChoice?: (choice: "red" | "white") => void;
  onFlowersNext?: () => void;
  onMainAnswer?: (answer: boolean) => void;
  flowerChoice?: "red" | "white";
}

function SlideContent({
  content,
  onGameAnswer,
  onFlowerChoice,
  onFlowersNext,
  onMainAnswer,
  flowerChoice,
}: SlideContentProps) {
  switch (content) {
    case "game":
      return <GameSlide onAnswer={onGameAnswer || (() => {})} />;
    case "flower-choice":
      return <FlowerChoiceSlide onChoice={onFlowerChoice || (() => {})} />;
    case "flowers":
      return <FlowersSlide choice={flowerChoice || "red"} onNext={onFlowersNext} />;
    case "question":
      return (
        <QuestionSlide
          onAnswer={onMainAnswer || (() => {})}
          flowerChoice={flowerChoice || "red"}
        />
      );
    case "answer":
      return <AnswerSlide answer={true} />;
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
  const [flowerChoice, setFlowerChoice] = useState<"red" | "white">("red");
  const [userAnswer, setUserAnswer] = useState<boolean | null>(null);
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(true);
  const [audioTime, setAudioTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [showTimeControl, setShowTimeControl] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const songs = [
    { id: 1, name: "عينك", file: audioFile1 },
    { id: 2, name: "ريمييي", file: audioFile2 },
    { id: 3, name: "انت تحبني", file: audioFile3 },
  ];

  const handleGameAnswer = (answer: boolean) => {
    if (!answer) {
      setCurrentSlide(0);
      return;
    }
    nextSlide();
  };

  const handleFlowerChoice = (choice: "red" | "white") => {
    setFlowerChoice(choice);
    nextSlide();
  };

  const handleMainAnswer = (answer: boolean) => {
    setUserAnswer(answer);
    setDisplayAnswer(true);
    setTimeout(() => {
      setCurrentSlide(4);
    }, 300);
  };

  const nextSlide = useCallback(() => {
    if (currentSlide === 3) return;
    setDirection(1);
    setCurrentSlide((prev) => prev + 1);
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide === 4) {
      setDisplayAnswer(false);
      setUserAnswer(null);
      setCurrentSlide(3);
      return;
    }
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 >= 0 ? prev - 1 : 0));
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide((prev) => {
      if (index === prev) return prev;
      setDirection(index > prev ? 1 : -1);
      return index;
    });
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setAudioTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setAudioDuration(audio.duration);
    };

    const handleCanPlay = () => {
      if (isAudioPlaying) {
        audio.play().catch(() => {
          setIsAudioPlaying(false);
        });
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("canplay", handleCanPlay);

    audio.play().catch(() => {
      setIsAudioPlaying(false);
    });

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("canplay", handleCanPlay);
    };
  }, [isAudioPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playAudio = async () => {
      try {
        audio.currentTime = 0;
        if (isAudioPlaying) {
          await audio.play();
        }
      } catch (err) {
        setIsAudioPlaying(false);
      }
    };

    setTimeout(playAudio, 100);
  }, [currentSongIndex, isAudioPlaying]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsAudioPlaying(!isAudioPlaying);
    }
  };

  const handleTimeChange = (newTime: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setAudioTime(newTime);
    }
  };

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handlePreviousSong = () => {
    setCurrentSongIndex((prev) => (prev === 0 ? songs.length - 1 : prev - 1));
  };

  const handleNextSong = () => {
    setCurrentSongIndex((prev) => (prev === songs.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
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
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const currentContent = slides[currentSlide];

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-[#2d1b4e] via-[#3d2a5f] to-[#1a0f3d] flex flex-col items-center justify-center overflow-hidden">
      {/* Audio Element */}
      <audio ref={audioRef} src={songs[currentSongIndex].file} loop />
      {/* Audio Control Section */}
      <motion.div
        className="absolute top-4 right-4 flex flex-col gap-3 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex gap-2 items-center">
          <motion.button
            onClick={handlePreviousSong}
            className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors"
            data-testid="button-prev-song"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="الأغنية السابقة"
          >
            <SkipBack className="w-5 h-5" />
          </motion.button>

          <motion.button
            onClick={toggleAudio}
            className="p-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white transition-colors"
            data-testid="button-audio-play-pause"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={isAudioPlaying ? "إيقاف" : "تشغيل"}
          >
            {isAudioPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </motion.button>

          <motion.button
            onClick={handleNextSong}
            className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors"
            data-testid="button-next-song"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="الأغنية التالية"
          >
            <SkipForward className="w-5 h-5" />
          </motion.button>

          <motion.button
            onClick={() => setShowTimeControl(!showTimeControl)}
            className="p-3 rounded-full bg-purple-500 hover:bg-purple-600 text-white transition-colors text-sm font-semibold"
            data-testid="button-time-control"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="تعديل الدقيقة"
          >
            ⏱️
          </motion.button>
        </div>

        {/* Song Info Display */}
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-white text-sm text-center bg-white/10 backdrop-blur-md rounded-lg px-3 py-2"
        >
          🎵 {songs[currentSongIndex].name}
        </motion.div>

        {/* Time Control Panel */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: showTimeControl ? 1 : 0,
            y: showTimeControl ? 0 : -10,
            pointerEvents: showTimeControl ? "auto" : "none",
          }}
          transition={{ duration: 0.2 }}
          className="bg-white/10 backdrop-blur-md rounded-lg p-4 min-w-max"
        >
          <div className="text-white text-sm mb-3 text-center font-semibold">
            {formatTime(audioTime)} / {formatTime(audioDuration)}
          </div>
          <input
            type="range"
            min="0"
            max={audioDuration || 0}
            value={audioTime}
            onChange={(e) => handleTimeChange(parseFloat(e.target.value))}
            className="w-48 h-2 bg-pink-300/30 rounded-lg appearance-none cursor-pointer accent-pink-500"
            data-testid="slider-audio-time"
          />
          <div className="text-white text-xs mt-2 text-center">اسحبيي حتة تقدمين</div>
        </motion.div>
      </motion.div>
      {/* Decorative Circles */}
      {decorativeCircles.map((circle) => (
        <FloatingCircle key={circle.id} circle={circle} />
      ))}
      {/* Main Content */}
      <div className="relative w-full h-full flex items-center justify-center px-4">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full max-w-2xl"
          >
            <SlideContent
              content={currentContent.content}
              onGameAnswer={handleGameAnswer}
              onFlowerChoice={handleFlowerChoice}
              onFlowersNext={nextSlide}
              onMainAnswer={handleMainAnswer}
              flowerChoice={flowerChoice}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Navigation */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-8">
        <motion.button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          data-testid="button-prev"
          disabled={currentSlide === 0}
          whileHover={{ scale: currentSlide !== 0 ? 1.1 : 1 }}
          whileTap={{ scale: currentSlide !== 0 ? 0.95 : 1 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <PaginationDots
          currentSlide={currentSlide}
          totalSlides={slides.length}
          onDotClick={goToSlide}
        />

        <motion.button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          data-testid="button-next"
          disabled={currentSlide === slides.length - 1}
          whileHover={{ scale: currentSlide !== slides.length - 1 ? 1.1 : 1 }}
          whileTap={{ scale: currentSlide !== slides.length - 1 ? 0.95 : 1 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
}
