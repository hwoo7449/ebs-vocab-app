export default function Statistics() {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">학습 통계</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">일간 학습량</h2>
            <p>그래프가 들어갈 자리입니다.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">단어 숙달도</h2>
            <p>그래프가 들어갈 자리입니다.</p>
          </div>
        </div>
      </div>
    )
  }