import { Metadata } from 'next'
import PhysicsButtonsClient from '@/components/PhysicsButtonsClient'

export const metadata: Metadata = {
  title: '물리 버튼 데모 | Pairy Design System',
  description: '물리 기반 버튼 애니메이션',
}

export default function PhysicsPage() {
  return <PhysicsButtonsClient />
}
