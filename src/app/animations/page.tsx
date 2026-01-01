import { Metadata } from 'next'
import AnimationDemoClient from '@/components/AnimationDemoClient'

export const metadata: Metadata = {
  title: '애니메이션 데모 | Pairy Design System',
  description: '모션 및 트랜지션 데모',
}

export default function AnimationsPage() {
  return <AnimationDemoClient />
}
