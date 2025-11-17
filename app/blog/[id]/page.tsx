import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Share2, Bookmark, Facebook, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import BackButtonClient from "./BackButtonClient";

export default function BlogPost() {
    // Related posts
    const relatedPosts = [
        {
            id: 2,
            category: "Technology",
            title: "AI and Machine Learning: The Brain Behind Smart Delivery Robots",
            description: "Explore the sophisticated AI algorithms that power ZiBot's decision-making, path planning, and obstacle avoidance capabilities.",
            date: "October 18, 2025",
            readTime: "10 min read",
            image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBBSXxlbnwxfHx8fDE3NjI4OTM1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
            id: 3,
            category: "Case Study",
            title: "Customer Success Story: How Restaurant Chain MiraX Increased Efficiency by 40%",
            description: "Learn how implementing our delivery robots helped a major restaurant chain reduce wait times and improve customer satisfaction.",
            date: "October 15, 2025",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1758989388630-d629d4ea9806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI4OTM1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
            id: 4,
            category: "Technology",
            title: "The Sensor Technology That Makes Autonomous Navigation Possible",
            description: "A deep dive into the advanced sensory array that allows ZiBot to navigate complex environments safely and efficiently.",
            date: "October 12, 2025",
            readTime: "9 min read",
            image: "https://images.unsplash.com/photo-1688585931817-fdd211458b60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbm9tb3VzJTIwcm9ib3QlMjBuYXZpZ2F0aW9ufGVufDF8fHx8MTc2Mjg5MzU0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
    ];

    return (
        <>
            {/* Main Content */}
            <div className="pt-[140px] pb-[80px] px-[150px] max-w-[1920px] mx-auto">
                {/* Back Button (client component) */}
                <BackButtonClient />

                {/* Article Header */}
                <div className="max-w-[900px] mx-auto mb-[48px]">
                    <Badge className="bg-[rgba(250,250,250,0.2)] text-white border-0 hover:bg-[rgba(250,250,250,0.3)] mb-[24px]">
                        Business
                    </Badge>

                    <h1 className="font-['Inter:Bold',sans-serif] font-bold leading-[56px] text-[48px] text-white mb-[24px]">
                        5 Ways Autonomous Robots Are Transforming the Hospitality Industry
                    </h1>

                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] text-[20px] text-[#c9c9c9] mb-[32px]">
                        From room service to concierge duties, discover how robots like ZiBot are enhancing guest experiences in hotels worldwide.
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between pb-[24px] border-b border-[#3a3a3a]">
                        <div className="flex items-center gap-[32px]">
                            <div className="flex items-center gap-[12px]">
                                <div className="size-[48px] rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center">
                                    <span className="font-['Inter:Bold',sans-serif] text-white text-[18px]">SF</span>
                                </div>
                                <div>
                                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-white">Sarah Foster</p>
                                    <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#c9c9c9]">Senior Robotics Analyst</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-[24px]">
                                <div className="flex items-center gap-[8px]">
                                    <Calendar className="size-[16px] text-[#c9c9c9]" />
                                    <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#c9c9c9]">October 20, 2025</span>
                                </div>
                                <div className="flex items-center gap-[8px]">
                                    <Clock className="size-[16px] text-[#c9c9c9]" />
                                    <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#c9c9c9]">6 min read</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-[16px]">
                            <Button variant="ghost" size="icon" className="text-[#c9c9c9] hover:text-white hover:bg-[rgba(250,250,250,0.1)]">
                                <Bookmark className="size-[20px]" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-[#c9c9c9] hover:text-white hover:bg-[rgba(250,250,250,0.1)]">
                                <Share2 className="size-[20px]" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="max-w-[1200px] mx-auto mb-[64px]">
                    <div className="w-full h-[600px] rounded-[24px] overflow-hidden bg-[#1a1a1b] relative">
                        <Image
                            src="https://images.unsplash.com/photo-1629248242733-43d4013f33a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNlcnZpY2UlMjByb2JvdHxlbnwxfHx8fDE3NjI4OTM1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Autonomous robot in hotel lobby"
                            fill
                            className="absolute inset-0 object-cover"
                        />
                    </div>
                </div>

                {/* Article Content */}
                <div className="max-w-[800px] mx-auto">
                    <div className="prose prose-invert max-w-none">
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] text-[18px] text-[#e5e5e5] mb-[32px]">
                            The hospitality industry is undergoing a technological revolution, and autonomous robots are at the forefront of this transformation. Hotels worldwide are adopting robotic solutions to enhance guest experiences, improve operational efficiency, and address labor shortages. Here&apos;s how these intelligent machines are reshaping the hospitality landscape.
                        </p>

                        <h2 className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] text-[32px] text-white mt-[48px] mb-[24px]">
                            1. Contactless Room Service Delivery
                        </h2>
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] text-[18px] text-[#e5e5e5] mb-[32px]">
                            Gone are the days of waiting for a staff member to deliver your late-night snack. Autonomous delivery robots like ZiBot navigate hotel corridors independently, using advanced sensors and AI to avoid obstacles and locate guest rooms with precision. This technology became especially valuable during the pandemic, offering a truly contactless delivery experience that many guests now prefer.
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] text-[18px] text-[#e5e5e5] mb-[32px]">
                            Hotels report that robotic room service has reduced delivery times by up to 40% while freeing staff to focus on more complex guest interactions. The robots can carry multiple items at once, handle elevator navigation autonomously, and even notify guests via phone or app when they arrive at the door.
                        </p>

                        <h2 className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] text-[32px] text-white mt-[48px] mb-[24px]">
                            2. Enhanced Guest Engagement and Entertainment
                        </h2>
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] text-[18px] text-[#e5e5e5] mb-[32px]">
                            Modern hospitality robots aren&apos;t just functional—they&apos;re designed to delight. Many feature touchscreens, friendly personalities, and interactive capabilities that entertain guests, especially children. Hotels report that robot encounters often become memorable moments that guests share on social media, providing valuable marketing benefits.
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] text-[18px] text-[#e5e5e5] mb-[32px]">
                            These robots can provide information about hotel amenities, local attractions, and dining recommendations. Some models even offer entertainment features like music playback or interactive games, creating unique touchpoints that differentiate one hotel from another in an increasingly competitive market.
                        </p>

                        <h2 className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] text-[32px] text-white mt-[48px] mb-[24px]">
                            3. Streamlined Housekeeping Operations
                        </h2>
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] text-[18px] text-[#e5e5e5] mb-[32px]">
                            Housekeeping departments are leveraging robots to transport linens, toiletries, and cleaning supplies throughout the property. This automation allows housekeeping staff to work more efficiently, spending less time on material transport and more time on cleaning and guest services.
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] text-[18px] text-[#e5e5e5] mb-[32px]">
                            Advanced robots can even assist with inventory management, automatically tracking supply levels and alerting managers when restocking is needed. This predictive capability helps prevent shortages and ensures that housekeeping teams always have the materials they need to maintain high service standards.
                        </p>

                        <h2 className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] text-[32px] text-white mt-[48px] mb-[24px]">
                            4. 24/7 Concierge Services
                        </h2>
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] text-[18px] text-[#e5e5e5] mb-[32px]">
                            Robotic concierges are becoming increasingly sophisticated, offering round-the-clock assistance without the need for additional staffing. These AI-powered assistants can handle multiple languages, provide detailed information about local attractions, make restaurant reservations, and even call taxis or rideshares for guests.
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] text-[18px] text-[#e5e5e5] mb-[32px]">
                            For international travelers, this technology is particularly valuable. The robots can communicate fluently in dozens of languages, eliminating language barriers and ensuring that every guest receives the same high level of service regardless of their native tongue.
                        </p>

                        <h2 className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] text-[32px] text-white mt-[48px] mb-[24px]">
                            5. Data-Driven Service Optimization
                        </h2>
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] text-[18px] text-[#e5e5e5] mb-[32px]">
                            Perhaps the most significant long-term benefit of hospitality robots is the data they collect. Every interaction, delivery, and journey through the hotel provides valuable insights into guest behavior, service bottlenecks, and operational efficiency.
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] text-[18px] text-[#e5e5e5] mb-[32px]">
                            Hotels use this data to optimize staffing schedules, predict peak demand periods, and identify opportunities for service improvements. The robots&apos; sensors also help map the most efficient routes through the property, reducing delivery times and energy consumption. This continuous feedback loop enables hotels to constantly refine their operations and enhance the guest experience.
                        </p>

                        {/* Quote Block */}
                        <div className="bg-gradient-to-r from-[#1a1a1b] to-[#2a2a2b] border-l-4 border-[#6366f1] p-[32px] rounded-[12px] my-[48px]">
                            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[36px] text-[20px] text-white italic mb-[16px]">
                                &ldquo;The integration of autonomous robots has transformed our operations. Our staff can focus on creating memorable guest experiences while the robots handle routine deliveries efficiently and reliably.&rdquo;
                            </p>
                            <p className="font-['Inter:Regular',sans-serif] text-[16px] text-[#c9c9c9]">
                                — Michael Chen, General Manager, Grand Hyatt San Francisco
                            </p>
                        </div>

                        <h2 className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] text-[32px] text-white mt-[48px] mb-[24px]">
                            The Future of Hospitality Robotics
                        </h2>
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] text-[18px] text-[#e5e5e5] mb-[32px]">
                            As the technology continues to evolve, we can expect even more sophisticated applications. Future robots may handle check-in procedures, transport luggage from vehicles to rooms, and even perform basic maintenance tasks. The key to success will be finding the right balance between automation and human touch—using robots to handle routine tasks while freeing staff to provide the personalized service that makes hospitality special.
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] text-[18px] text-[#e5e5e5] mb-[32px]">
                            The hotels that thrive in this new era will be those that view robots not as replacements for staff, but as tools that enable their teams to deliver exceptional experiences. With the right implementation strategy, autonomous robots can help hospitality businesses improve efficiency, reduce costs, and create unforgettable moments for their guests.
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="flex items-center gap-[12px] mt-[64px] pt-[32px] border-t border-[#3a3a3a]">
                        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#c9c9c9]">Tags:</span>
                        {['Hospitality', 'Robotics', 'Automation', 'AI', 'Hotel Technology'].map((tag) => (
                            <Badge key={tag} variant="outline" className="bg-[rgba(250,250,250,0.05)] text-[#c9c9c9] border-[#3a3a3a] hover:bg-[rgba(250,250,250,0.1)]">
                                {tag}
                            </Badge>
                        ))}
                    </div>

                    {/* Share Section */}
                    <div className="flex items-center justify-between mt-[48px] pt-[32px] border-t border-[#3a3a3a]">
                        <div>
                            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-white mb-[8px]">Share this article</p>
                            <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#c9c9c9]">Help others discover this content</p>
                        </div>
                        <div className="flex items-center gap-[12px]">
                            <Button variant="outline" size="icon" className="bg-[rgba(250,250,250,0.05)] border-[#3a3a3a] text-[#c9c9c9] hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2]">
                                <Facebook size={18} />
                            </Button>
                            <Button variant="outline" size="icon" className="bg-[rgba(250,250,250,0.05)] border-[#3a3a3a] text-[#c9c9c9] hover:bg-[#1da1f2] hover:text-white hover:border-[#1da1f2]">
                                <Twitter size={18} />
                            </Button>
                            <Button variant="outline" size="icon" className="bg-[rgba(250,250,250,0.05)] border-[#3a3a3a] text-[#c9c9c9] hover:bg-[#0a66c2] hover:text-white hover:border-[#0a66c2]">
                                <Linkedin size={18} />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Related Posts */}
                <div className="max-w-[1200px] mx-auto mt-[96px]">
                    <h2 className="font-['Inter:Bold',sans-serif] font-bold leading-[48px] text-[36px] text-white mb-[40px]">
                        Related Articles
                    </h2>
                    <div className="grid grid-cols-3 gap-[32px]">
                        {relatedPosts.map((post) => (
                            <div key={post.id} className="bg-[#0a0a0b] relative rounded-[16px] shrink-0 overflow-clip cursor-pointer outline-0 border-0 hover:transform hover:scale-[1.02] transition-all">
                                <div className="content-stretch flex flex-col items-start justify-between relative rounded-[inherit] outline-none border-none size-full">
                                    <div className="h-[200px] overflow-clip relative shrink-0 w-full">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="absolute inset-0 object-cover rounded-t-[16px]"
                                        />
                                    </div>
                                    <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
                                        <Badge className="bg-[rgba(250,250,250,0.2)] text-white border-0 hover:bg-[rgba(250,250,250,0.3)]">
                                            {post.category}
                                        </Badge>
                                        <h3 className="font-['Inter:Bold',sans-serif] font-bold leading-[25px] text-[18px] text-white w-full">
                                            {post.title}
                                        </h3>
                                        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                                            <div className="flex gap-[4px] items-center">
                                                <Calendar className="size-[12px] text-[#c9c9c9]" />
                                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#c9c9c9] text-[12px] text-nowrap">
                                                    {post.date}
                                                </p>
                                            </div>
                                            <div className="flex gap-[4px] items-center">
                                                <Clock className="size-[12px] text-[#c9c9c9]" />
                                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#c9c9c9] text-[12px] text-nowrap">
                                                    {post.readTime}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div aria-hidden="true" className="absolute border border-[#3a3a3a] border-solid inset-0 pointer-events-none rounded-[16px]" />
                            </div>
                        ))}
                    </div>

                    {/* Newsletter CTA */}
                    <div className="max-w-[1200px] mx-auto mt-[96px]">
                        <div className="bg-gradient-to-b from-[#0e0e0f] to-[#0a0a0b] rounded-[24px] p-[64px] text-center">
                            <h2 className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[48px] text-[40px] text-white mb-[16px]">
                                Never Miss an Update
                            </h2>
                            <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[28px] text-[18px] text-[#c9c9c9] mb-[32px] max-w-[600px] mx-auto">
                                Subscribe to our newsletter for the latest insights on robotics, AI, and autonomous delivery technology.
                            </p>
                            <div className="flex gap-[16px] max-w-[500px] mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-[8px] px-[16px] py-[12px] text-white placeholder:text-[rgba(255,255,255,0.5)] focus:outline-none focus:border-[rgba(255,255,255,0.4)]"
                                />
                                <Button className="bg-neutral-50 text-[#0a0a0b] hover:bg-neutral-200 rounded-[8px] px-[24px]">
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
