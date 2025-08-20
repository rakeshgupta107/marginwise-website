import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>MarginWise – Smart Margin Optimisation</title>
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-800">
        <nav className="flex items-center justify-between p-6 border-b bg-white shadow-sm">
          <div className="text-xl font-bold text-indigo-600">MarginWise</div>
          <ul className="flex gap-6 text-sm font-medium">
            <li><a href="#" className="hover:text-indigo-600">Home</a></li>
            <li><a href="#" className="hover:text-indigo-600">Features</a></li>
            <li><a href="#" className="hover:text-indigo-600">Pricing</a></li>
            <li><a href="#" className="hover:text-indigo-600">Login</a></li>
          </ul>
        </nav>

        <section className="flex flex-col items-center justify-center text-center py-24 px-4">
          <h1 className="text-4xl font-bold mb-4">Optimise Your Margins. Maximise Your Profits.</h1>
          <p className="text-lg text-gray-600 max-w-xl mb-6">
            Upload your product and sales data to discover how attribute-driven margin adjustments can improve your bottom line.
          </p>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
            Get Started
          </button>
        </section>
      </main>
    </>
  )
}
