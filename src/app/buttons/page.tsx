import { Metadata } from 'next'
import ButtonInteractionsClient from '@/components/ButtonInteractionsClient'

export const metadata: Metadata = {
  title: '버튼 인터랙션 데모 | Pairy Design System',
  description: '30가지 좋아요/북마크 버튼 클릭 반응 테스트',
}

export default function ButtonsPage() {
  return <ButtonInteractionsClient />
}
