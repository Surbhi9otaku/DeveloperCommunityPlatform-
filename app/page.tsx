```tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">
          Developer Community Platform
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Share ideas, ask questions, and connect with fellow developers.
        </p>

        <div className="flex justify-center gap-4 mb-10">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Create Post
          </button>

          <button className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100">
            Browse Posts
          </button>
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Recent Posts
          </h2>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-medium">
              Welcome to DevConnect
            </h3>

            <p className="text-gray-600 mt-2">
              Start sharing your projects, ideas and coding experiences.
            </p>

            <div className="mt-4 flex gap-2">
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                nextjs
              </span>

              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                mongodb
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
```

