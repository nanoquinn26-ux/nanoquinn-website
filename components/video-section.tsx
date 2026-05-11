export function VideoSection() {
  return (
    <section className="py-20 sm:py-32 bg-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <span className="inline-block px-10 py-4 rounded-full bg-[#D4A826] text-black text-base font-bold mb-8 shadow-md uppercase tracking-widest">
            See It in Action
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-background">
            NanoQuinn Technology, Demonstrated.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-background/10">
          <video
            className="w-full h-auto"
            controls
            playsInline
            preload="metadata"
          >
            <source src="/videos/nanoquinn-intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}
