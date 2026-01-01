'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Heart, Star, Zap } from 'lucide-react'

export default function AnimationDemoClient() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null)

  const demos = [
    {
      id: 'spring',
      title: 'Spring Animation',
      icon: Zap,
      animation: {
        scale: [1, 1.2, 1],
        rotate: [0, 10, -10, 0],
      },
    },
    {
      id: 'bounce',
      title: 'Bounce Effect',
      icon: Heart,
      animation: {
        y: [0, -20, 0],
        scale: [1, 1.1, 1],
      },
    },
    {
      id: 'pulse',
      title: 'Pulse Glow',
      icon: Star,
      animation: {
        scale: [1, 1.15, 1],
        opacity: [1, 0.8, 1],
      },
    },
    {
      id: 'sparkle',
      title: 'Sparkle Effect',
      icon: Sparkles,
      animation: {
        rotate: [0, 360],
        scale: [1, 1.2, 1],
      },
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Animation Demos</h1>
      <p className="text-gray-600 mb-8">
        Framer Motion 기반 애니메이션 예시
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {demos.map((demo) => (
          <motion.button
            key={demo.id}
            className="p-6 rounded-2xl border-2 border-gray-200 hover:border-pink-300 flex flex-col items-center gap-3 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveDemo(demo.id)}
          >
            <motion.div
              animate={activeDemo === demo.id ? demo.animation : {}}
              transition={{
                duration: 0.6,
                repeat: activeDemo === demo.id ? Infinity : 0,
                repeatDelay: 0.5,
              }}
              className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center"
            >
              <demo.icon className="w-6 h-6 text-pink-500" />
            </motion.div>
            <span className="text-sm font-medium">{demo.title}</span>
          </motion.button>
        ))}
      </div>

      <div className="mt-12 p-8 rounded-2xl bg-gray-50 text-center">
        <p className="text-gray-500">
          {activeDemo
            ? `"${demos.find((d) => d.id === activeDemo)?.title}" 애니메이션 실행 중`
            : '버튼을 클릭하여 애니메이션을 확인하세요'}
        </p>
        {activeDemo && (
          <button
            className="mt-4 px-4 py-2 text-sm text-pink-500 hover:underline"
            onClick={() => setActiveDemo(null)}
          >
            중지
          </button>
        )}
      </div>

      <div className="mt-8 p-4 rounded-lg bg-yellow-50 border border-yellow-200">
        <p className="text-sm text-yellow-800">
          전체 애니메이션 데모는 메인 Pairy 앱에서 확인할 수 있습니다.
        </p>
      </div>
    </div>
  )
}
