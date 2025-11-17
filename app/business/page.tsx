
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function BusinessPage() {
  return (
    <div className="bg-[#0a0a0b] text-white flex flex-col min-h-screen">
      <header>
        {/* Hero Section */}
        <section className="relative py-20 md:py-24 lg:py-32">
          <div className="container">
            <div className="flex flex-col items-center justify-center gap-8 text-center">
              <Button
                variant="ghost"
                className="bg-[rgba(250,250,250,0.05)] border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(250,250,250,0.08)] gap-3 px-6 rounded-full transition-colors"
              >
                <span className="text-[13px] font-medium text-white">
                  Supercharged with real-time analytics
                </span>
                <ChevronDown className="size-4 text-[#A3A3A3]" />
              </Button>

              <div className="max-w-3xl">
                <h1 className="font-bold text-5xl md:text-6xl lg:text-[72px] text-white tracking-[-2.16px] mb-6">
                  Business intelligence that grows with you
                </h1>

                <p className="text-neutral-400 text-lg md:text-xl mb-8">
                  Empowering businesses with cutting-edge tools to amplify data dissection and analytics. Get real-time insights, customer analytics, and boost productivity.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-neutral-50 hover:bg-neutral-200 text-[#0a0a0b] h-14 rounded-lg px-12 font-semibold">
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    className="h-14 rounded-lg border-[rgba(255,255,255,0.15)] bg-transparent hover:bg-[rgba(255,255,255,0.05)] px-12 font-semibold text-white"
                  >
                    Our Products & Services
                  </Button>
                </div>

                <p className="mt-8 text-neutral-400 text-sm">
                  Already have a Fainzy Business account?
                  <ArrowRight className="inline-block ml-2 h-3 w-3" />
                </p>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main className="flex-grow">
        {/* Dashboard Section */}
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="rounded-[16px] overflow-hidden shadow-lg">
              <img
                src="/dashboard.png"
                alt="Dashboard"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Products & Services Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="font-bold text-4xl md:text-5xl text-white mb-4">
                Our Products & Services
              </h2>
              <p className="text-neutral-500 text-lg">
                Comprehensive solutions designed to transform your business operations
              </p>
            </div>

            {/* Last Mile Delivery - ZiBot & Glide */}
            <div className="bg-[#111113] rounded-[16px] p-8 md:p-12 mb-12 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left: Content */}
                <div className="space-y-8">
                  <div>
                    <div className="inline-block bg-[rgba(250,250,250,0.08)] rounded-full px-4 py-2 mb-6">
                      <p className="text-xs text-[rgba(255,255,255,0.7)] uppercase tracking-wider font-medium">
                        Robotics
                      </p>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                      Last Mile Delivery Robot System
                    </h3>

                    <p className="text-neutral-400 text-base leading-relaxed mb-8">
                      Transform your delivery operations with our dual-platform solution. ZiBot offers autonomous robot delivery for sidewalks and indoor environments, while Glide provides fast scooter-based delivery for longer distances. Together, they create a complete last-mile delivery ecosystem.
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="flex gap-3">
                        <div className="bg-[#111113] rounded-lg p-2 flex-shrink-0">
                          <span className="text-2xl">🤖</span>
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm mb-1">
                            ZiBot Robot
                          </p>
                          <p className="text-neutral-500 text-xs">
                            Autonomous sidewalk delivery with 24/7 operation capability
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="bg-[#111113] rounded-lg p-2 flex-shrink-0">
                          <span className="text-2xl">🛴</span>
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm mb-1">
                            Glide Service
                          </p>
                          <p className="text-neutral-500 text-xs">
                            Fast electric scooter delivery for extended range
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="bg-[#111113] rounded-lg p-2 flex-shrink-0">
                          <span className="text-2xl">🗺️</span>
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm mb-1">
                            Smart Routing
                          </p>
                          <p className="text-neutral-500 text-xs">
                            AI-powered optimization for efficient delivery paths
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="bg-[#111113] rounded-lg p-2 flex-shrink-0">
                          <span className="text-2xl">📍</span>
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm mb-1">
                            Real-time Tracking
                          </p>
                          <p className="text-neutral-500 text-xs">
                            Live updates and precise ETA for every delivery
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="link"
                      className="p-0 text-[rgba(255,255,255,0.6)] hover:text-white transition-colors"
                    >
                      <span className="text-sm">Get Started</span>
                      <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>

                {/* Right: Images */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/slides/zibot.png"
                      alt="ZiBot"
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-4 left-4 bg-[rgba(10,10,11,0.85)] rounded-lg px-3 py-2">
                      <p className="text-xs text-[rgba(255,255,255,0.8)] uppercase tracking-wider">
                        ZiBot
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/glide.png"
                      alt="Glide"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Fainzy Consultancy */}
            <div className="bg-[#111113] rounded-[16px] p-8 md:p-12 mb-12 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative rounded-xl overflow-hidden shadow-lg h-80">
                  <img
                    src="/consultancy.jpg"
                    alt="Fainzy Consultancy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[rgba(10,10,11,0.85)] rounded-full px-3 py-2">
                    <p className="text-xs text-[rgba(255,255,255,0.7)] uppercase tracking-wider font-medium">
                      Consultancy
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                      Fainzy Consultancy
                    </h3>

                    <p className="text-neutral-400 text-base leading-relaxed">
                      Advanced AI-powered analytics to predict customer demand patterns, optimize inventory management, and streamline your supply chain operations.
                    </p>
                  </div>

                  <Button
                    variant="link"
                    className="p-0 text-[rgba(255,255,255,0.6)] hover:text-white transition-colors"
                  >
                    <span className="text-base font-semibold">Get Started</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* MiraX */}
            <div className="bg-[#111113] rounded-[16px] p-8 md:p-12 mb-12 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 order-2 lg:order-1">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                      MiraX
                    </h3>

                    <p className="text-neutral-400 text-base leading-relaxed">
                      Our in-restaurant delivery robot designed to minimize physical contact between staff and customers, seamlessly delivering orders throughout your establishment.
                    </p>
                  </div>

                  <Button
                    variant="link"
                    className="p-0 text-[rgba(255,255,255,0.6)] hover:text-white transition-colors"
                  >
                    <span className="text-sm">Get Started</span>
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Button>
                </div>

                <div className="relative rounded-xl overflow-hidden shadow-lg h-80 order-1 lg:order-2">
                  <img
                    src="/mirax.png"
                    alt="MiraX"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[rgba(10,10,11,0.85)] rounded-full px-3 py-2">
                    <p className="text-xs text-[rgba(255,255,255,0.7)] uppercase tracking-wider font-medium">
                      Custom Solution
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Efficient Food Ordering System */}
            <div className="bg-[#111113] rounded-[16px] p-8 md:p-12 mb-12 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative rounded-xl overflow-hidden shadow-lg h-80">
                  <img
                    src="/efficient.jpg"
                    alt="Efficient Food Ordering"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[rgba(10,10,11,0.85)] rounded-full px-3 py-2">
                    <p className="text-xs text-[rgba(255,255,255,0.7)] uppercase tracking-wider font-medium">
                      Food Service
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                      Efficient Food Ordering System
                    </h3>

                    <p className="text-neutral-400 text-base leading-relaxed">
                      Connect restaurants and customers on a unified platform where orders are seamlessly processed and delivered by our autonomous robot fleet.
                    </p>
                  </div>

                  <Button
                    variant="link"
                    className="p-0 text-[rgba(255,255,255,0.6)] hover:text-white transition-colors"
                  >
                    <span className="text-sm">Get Started</span>
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Hotel Robot Delivery System */}
            <div className="bg-[#111113] rounded-[16px] p-8 md:p-12 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 order-2 lg:order-1">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                      Hotel Robot Delivery System
                    </h3>

                    <p className="text-neutral-400 text-base leading-relaxed">
                      In-door hotel delivery robot that handles guest requests through an integrated tablet system, delivering items directly to rooms with precision.
                    </p>
                  </div>

                  <Button
                    variant="link"
                    className="p-0 text-[rgba(255,255,255,0.6)] hover:text-white transition-colors"
                  >
                    <span className="text-sm">Get Started</span>
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Button>
                </div>

                <div className="relative rounded-xl overflow-hidden shadow-lg h-80 order-1 lg:order-2">
                  <img
                    src="/hotel.png"
                    alt="Hotel Robot Delivery"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[rgba(10,10,11,0.85)] rounded-full px-3 py-2">
                    <p className="text-xs text-[rgba(255,255,255,0.7)] uppercase tracking-wider font-medium">
                      Hospitality
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

