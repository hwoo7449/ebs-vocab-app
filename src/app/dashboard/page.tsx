export default function Dashboard() {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">대시보드</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">학습 진행 상황</h2>
            <p>총 1200개 중 300개 학습 완료</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">오늘의 목표</h2>
            <p>40개 단어 학습하기</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">퀵 링크</h2>
            <ul>
              <li><a href="/study" className="text-blue-500 hover:underline">학습 시작</a></li>
              <li><a href="/statistics" className="text-blue-500 hover:underline">통계 보기</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }