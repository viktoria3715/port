export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center space-x-6">
          <img src="/your-photo.jpg" alt="Viktoria" className="w-32 h-32 rounded-full border" />
          <div>
            <h1 className="text-3xl font-bold">Viktoria Nikolaeva</h1>
            <p className="text-lg">Graphic Designer / Web3 Content Creator</p>
            <p className="text-sm text-gray-600">Telegram: @story_viktoria · bulavinafreelance@gmail.com</p>
          </div>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Selected Projects</h2>
          <ul className="space-y-4 text-sm">
            <li><strong>PP Box</strong>: <a href="https://pp-box.tilda.ws/" className="text-blue-600 underline" target="_blank">Healthy food website</a></li>
            <li><strong>Sahara AI</strong>: <a href="https://x.com/viki3517/status/1900509400206639496" className="text-blue-600 underline" target="_blank">Animations, memes, merch</a></li>
            <li><strong>Linera</strong>: <a href="https://x.com/viki3517/status/1909520430555181084" className="text-blue-600 underline" target="_blank">Infographics & videos</a></li>
            <li><strong>Fraction AI</strong>: <a href="https://drive.google.com/drive/folders/1OsmF2cTroMjbdDvu07dwqWlSIbzjEW7N" className="text-blue-600 underline" target="_blank">Brand kit & content</a></li>
            <li><strong>Somnia</strong>: <a href="https://x.com/viki3517/status/1922241997727007219" className="text-blue-600 underline" target="_blank">3D, mascots, infographics</a></li>
            <li><strong>Plume</strong>: <a href="https://x.com/viki3517/status/1886807662567796864" className="text-blue-600 underline" target="_blank">Memes & motion</a></li>
          </ul>
        </section>
      </div>
    </main>
  );
}