export default function Study() {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">단어 학습</h1>
        <div className="bg-white p-6 rounded shadow max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">English Word</h2>
          <p className="text-gray-600 mb-4">단어의 뜻을 맞혀보세요.</p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
            뜻 보기
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            다음 단어
          </button>
        </div>
      </div>
    )
  }