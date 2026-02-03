import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[200px] font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent opacity-20 select-none">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Oops! The page you're looking for seems to have wandered off.
            </p>
            <p className="text-gray-500">
              It might have been moved, deleted, or perhaps it never existed.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              to="/"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:border-purple-600 hover:text-purple-600 transition-all duration-300"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NotFoundMinimal() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 leading-none">
            404
          </h1>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Lost in Space
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          The page you're looking for has drifted into the void.
        </p>

        <Link
          to="/"
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

export function NotFoundPlayful() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-3xl">
        <div className="mb-8 relative">
          <div className="inline-block relative">
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-16 left-12 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-800 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute top-16 right-12 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-800 rounded-full animate-pulse"></div>
              </div>

              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                <svg className="w-16 h-8 text-white" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
                  <path d="M 20 40 Q 50 20 80 40" />
                </svg>
              </div>

              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-1 h-8 bg-gray-700"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full mx-auto animate-ping"></div>
              </div>
            </div>

            <div className="absolute top-0 -right-8 w-6 h-6 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-0 -left-8 w-4 h-4 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-4">
          Oops!
        </h1>
        <p className="text-2xl text-gray-600 mb-2">Error 404 - Page Not Found</p>
        <p className="text-gray-500 mb-8 max-w-lg mx-auto">
          Looks like our robot got a bit confused. The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Take Me Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-300 transition-all duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export function NotFoundClean() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
      <div className="text-center">
        <div className="inline-block mb-8 relative">
          <div className="text-[120px] md:text-[180px] font-black text-gray-200 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl"><Search /></div>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We couldn't find the page you were looking for. Let's get you back on track.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
