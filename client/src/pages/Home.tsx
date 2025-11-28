import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, Sparkles } from "lucide-react";
import image1 from "@assets/matching lockscreen batman and hello kitty_1764351307925.jpeg";
import image2 from "@assets/Lily_1764351307926.jpeg";
import image3 from "@assets/Batman & hello kitty_1764351307927.jpeg";
import image4 from "@assets/توت👸🏻⟡ نايف 🦸🏻_♂️ on TikTok_1764351307928.jpeg";
import gifImage from "@assets/From KlickPin CF Hello Kitty GIF _ Imagens animadas gif Coisas da hello kitty Emoticons animados_1764351307929.gif";

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
        <p className="text-4xl font-bold text-white mb-6" dir="rtl" data-testid="greeting-name">
          هاي يا ريمي 💕
        </p>
        <p className="text-2xl text-pink-300 mb-4" dir="rtl">
          جاهزة لعبة ؟ 😏
        </p>
        <p className="text-lg text-white/70" dir="rtl">
          اللي تخسرين معاي ما تهربين 😉
        </p>
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
      >
        يلا نبدا الحين ✨
      </motion.button>
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
        <p className="text-3xl text-white mb-2" dir="rtl" data-testid="flower-question">
          السؤال الأول:
        </p>
        <p className="text-2xl text-pink-300" dir="rtl">
          إيش تختارين، الأحمر ولا الأبيض؟
        </p>
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
          <span>الأحمر</span>
          <Rose color="red" />
        </motion.button>

        <motion.button
          onClick={() => onChoice("white")}
          className="px-8 py-4 rounded-full bg-white/30 hover:bg-white/40 text-white font-semibold text-lg transition-colors flex items-center gap-3"
          data-testid="button-white-flower"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>الأبيض</span>
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
          {isRed ? "تحبين الورد الأحمر 🌹" : "تحبين الورد الأبيض 🤍"}
        </p>
        <p className="text-xl text-pink-300 mt-4" dir="rtl">
          {isRed ? "أحمر مثل احمرار خدك" : "أبيض نقي مثل روحك"}
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
    >
      نكمل ✨
    </motion.button>
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
    "عرفت إنك خلقتي لي",
    "كل لحظة معاك حياة جديدة",
  ];

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelloKitty image={image4} />
      <motion.div
        className="text-center space-y-4 max-w-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {narrativeSteps.map((step, idx) => (
          <motion.p
            key={idx}
            className="text-lg text-white/80 italic"
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
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        <h2 className="text-4xl font-bold text-white mb-2" dir="rtl" data-testid="main-question">
          تحبيني؟
        </h2>
        <p className="text-pink-300 text-lg" dir="rtl">
          ما فيك تهربين مني 😉
        </p>
      </motion.div>

      <motion.div
        className="flex gap-8 items-center"
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
          {noAttempts === 0 ? "لا" : noAttempts === 1 ? "حنطيج فرصة ثانية" : "جربي وضغطي مرة ثانية"}
        </motion.button>

        <motion.button
          onClick={() => onAnswer(true)}
          className="px-8 py-3 rounded-full bg-white/20 hover:bg-white/30 text-white font-semibold text-lg transition-colors"
          data-testid="button-yes-main"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          نعم
        </motion.button>
      </motion.div>

      {noAttempts > 0 && noAttempts < 3 && (
        <motion.p
          className="text-lg text-white/60 text-center"
          dir="rtl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          data-testid="hint-message"
        >
          كل ما تقولين لا، تقربين أكثر 😊
        </motion.p>
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
