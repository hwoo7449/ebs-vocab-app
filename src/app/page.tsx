export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">EBS 영단어 학습 앱</h1>
      <p className="text-xl mb-4">효과적인 영단어 학습을 시작하세요!</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        로그인
      </button>
    </main>
  )
}