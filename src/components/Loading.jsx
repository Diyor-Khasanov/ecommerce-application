export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>

          <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 border-r-purple-600 rounded-full animate-spin"></div>

          <div className="absolute inset-3 bg-linear-to-br from-blue-500 to-purple-600 rounded-full animate-pulse"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full shadow-lg"></div>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Loading
          </h2>

          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-pink-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>

          <p className="text-gray-600 text-sm">Please wait while we prepare everything...</p>
        </div>
      </div>
    </div>
  );
}

export function OrbitingLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
        </div>

        <div className="absolute inset-0 animate-spin">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
        </div>
        <div className="absolute inset-0 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full"></div>
        </div>
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '2s' }}>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-pink-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export function BarsLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-indigo-50 to-purple-50">
      <div className="flex space-x-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-16 bg-linear-to-t from-blue-600 to-purple-600 rounded-full animate-pulse"
            style={{
              animationDelay: `${i * 150}ms`,
              animationDuration: '1s'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export function RippleLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative w-32 h-32">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 border-4 border-blue-500 rounded-full opacity-0"
            style={{
              animation: 'ripple 2s cubic-bezier(0, 0.2, 0.8, 1) infinite',
              animationDelay: `${i * 0.6}s`
            }}
          ></div>
        ))}
        <style jsx>{`
          @keyframes ripple {
            0% {
              transform: scale(0);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export function CardFlipLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-gray-900 to-gray-800">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div
            className="absolute inset-0 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg shadow-2xl"
            style={{
              animation: 'flip 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite'
            }}
          ></div>
        </div>
        <h3 className="text-white text-xl font-semibold">Loading...</h3>
        <style jsx>{`
          @keyframes flip {
            0%, 100% {
              transform: rotateY(0deg) rotateX(0deg);
            }
            25% {
              transform: rotateY(180deg) rotateX(0deg);
            }
            50% {
              transform: rotateY(180deg) rotateX(180deg);
            }
            75% {
              transform: rotateY(0deg) rotateX(180deg);
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export function DotsWaveLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex space-x-3">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 bg-linear-to-br from-blue-500 to-purple-600 rounded-full"
            style={{
              animation: 'wave 1.2s ease-in-out infinite',
              animationDelay: `${i * 0.1}s`
            }}
          ></div>
        ))}
        <style jsx>{`
          @keyframes wave {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
