import Image from "next/image"

export function VideoSection() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16 items-end">
          <div className="relative">
            <span className="text-7xl sm:text-8xl lg:text-9xl font-bold text-white/[0.04] absolute -top-8 -left-4 select-none pointer-events-none">
              DEMO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight relative z-10">
              See NanoQuinn Technology in Action
            </h2>
          </div>
          <div>
            <p className="text-lg text-white/60 leading-relaxed">
              Watch how our revolutionary nanotechnology transforms asset protection across industries — from manufacturing plants to marine vessels.
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl overflow-hidden aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop"
              alt="Industrial manufacturing"
              width={400}
              height={500}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&h=500&fit=crop"
              alt="Industrial plant"
              width={400}
              height={500}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=500&fit=crop"
              alt="Lab research"
              width={400}
              height={500}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop"
              alt="Solar panels"
              width={400}
              height={500}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-lime/20 flex items-center justify-center mb-6">
              <span className="text-lime text-2xl font-bold">01</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Corrosion Protection</h3>
            <p className="text-white/60">Advanced nano-coatings that prevent rust and degradation on any surface.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-lime/20 flex items-center justify-center mb-6">
              <span className="text-lime text-2xl font-bold">02</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Environmental Safety</h3>
            <p className="text-white/60">Eco-friendly formulations that meet the strictest environmental standards.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-lime/20 flex items-center justify-center mb-6">
              <span className="text-lime text-2xl font-bold">03</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Cost Efficiency</h3>
            <p className="text-white/60">Reduce maintenance costs by up to 80% with long-lasting protection.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
