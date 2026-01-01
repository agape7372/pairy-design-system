import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Pairy Design System</h1>
      <p className="text-lg text-gray-600 mb-12">
        버튼 인터랙션 및 애니메이션 데모 모음
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/pairy-design-system/buttons/"
          className="block p-6 rounded-2xl border-2 hover:border-pink-300 hover:bg-pink-50 transition-all"
        >
          <h2 className="text-xl font-semibold mb-2">Button Variants</h2>
          <p className="text-gray-600 text-sm">
            30가지 좋아요/북마크 버튼 인터랙션
          </p>
        </Link>

        <Link
          href="/pairy-design-system/physics/"
          className="block p-6 rounded-2xl border-2 hover:border-pink-300 hover:bg-pink-50 transition-all"
        >
          <h2 className="text-xl font-semibold mb-2">Physics Buttons</h2>
          <p className="text-gray-600 text-sm">
            물리 기반 버튼 애니메이션
          </p>
        </Link>

        <Link
          href="/pairy-design-system/animations/"
          className="block p-6 rounded-2xl border-2 hover:border-pink-300 hover:bg-pink-50 transition-all"
        >
          <h2 className="text-xl font-semibold mb-2">Animations</h2>
          <p className="text-gray-600 text-sm">
            모션 및 트랜지션 데모
          </p>
        </Link>
      </div>
    </div>
  );
}
