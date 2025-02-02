import React, { Suspense, lazy } from "react";

// Lazy-loaded component with a delay for simulation purposes
const LazyLoadedComponent = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./LazyComponent")), 2000); // 2-second delay
  });
});

function LazyLoading() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Lazy Load Demo</h1>

        {/* Suspense with fallback for lazy loading */}
        <Suspense fallback={<div className="text-center text-gray-500">Loading...</div>}>
          <LazyLoadedComponent />
        </Suspense>
      </div>
    </div>
  );
}



export default LazyLoading;
