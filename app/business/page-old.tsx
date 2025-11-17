import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

function Text() {
    return (
        <div className="basis-0 grow h-[19.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.5px] relative w-full">
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[13px] text-nowrap text-white top-px whitespace-pre">Supercharged with real-time analytics</p>
            </div>
        </div>
    );
}

function Icon() {
    return (
        <ChevronDown className="size-[16px] text-[#A3A3A3]" />
    );
}

function Container() {
    return (
        <Button
            variant="ghost"
            className="absolute bg-[rgba(250,250,250,0.05)] border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(250,250,250,0.08)] gap-[12px] h-[41.5px] left-[471.59px] px-[21px] rounded-[24px] top-0 w-[336.805px] transition-colors"
        >
            <Text />
            <Icon />
        </Button>
    );
}

function Heading() {
    return (
        <div className="absolute h-[158.391px] left-[190px] top-[73.5px] w-[900px]" data-name="Heading 1">
            <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[79.2px] left-[450.42px] not-italic text-[72px] text-center text-white top-[-0.5px] tracking-[-2.16px] translate-x-[-50%] w-[849px]">Business intelligence that grows with you</p>
        </div>
    );
}

function Paragraph() {
    return (
        <div className="absolute h-[96px] left-[290px] top-[255.89px] w-[700px]" data-name="Paragraph">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-[350.23px] not-italic text-[20px] text-center text-neutral-400 top-[-0.5px] translate-x-[-50%] w-[678px]">Empowering businesses with cutting-edge tools to amplify data dissection and analytics. Get real-time insights, customer analytics, and boost productivity.</p>
        </div>
    );
}

function BusinessLanding() {
    return (
        <Button
            className="bg-neutral-50 h-[60px] rounded-[8px] shrink-0 w-[194.75px] px-[48px] py-[18px] hover:bg-neutral-100 transition-colors"
            variant="secondary"
        >
            <span className="text-[#0a0a0b] text-[16px] text-nowrap whitespace-pre">Get Started</span>
        </Button>
    );
}

function BusinessLanding1() {
    return (
        <Button
            className="h-[62px] rounded-[8px] border border-[rgba(255,255,255,0.15)] bg-transparent hover:bg-[rgba(255,255,255,0.05)] px-[49px] py-[19px] transition-colors"
            variant="outline"
        >
            <span className="text-[16px] text-nowrap text-white whitespace-pre">{`Our Products & Services`}</span>
        </Button>
    );
}

function Container1() {
    return (
        <div className="absolute content-stretch flex gap-[16px] h-[62px] items-center justify-center left-[32px] top-[391.89px] w-[1216px]" data-name="Container">
            <BusinessLanding />
            <BusinessLanding1 />
        </div>
    );
}

function Icon1() {
    return (
        <div className="absolute left-[281.02px] size-[12px] top-[4.5px]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <g id="Icon">
                    <path d="M2.5 6H9.5" id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 2.5L9.5 6L6 9.5" id="Vector_2" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </svg>
        </div>
    );
}

function Link() {
    return (
        <div className="absolute h-[21px] left-[493.49px] top-[471.89px] w-[293.016px]" data-name="Link">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[137px] not-italic text-[14px] text-center text-neutral-400 text-nowrap top-0 translate-x-[-50%] whitespace-pre">Already have a Fainzy Business account?</p>
            <Icon1 />
        </div>
    );
}

function Container2() {
    return (
        <div className="absolute h-[493.891px] left-[71.5px] top-[125px] w-[1280px]" data-name="Container">
            <Container />
            <Heading />
            <Paragraph />
            <Container1 />
            <Link />
        </div>
    );
}

function Container3() {
    return (
        <div className="h-[653.891px] relative shrink-0 w-[1423px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1423 653.89\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -88.311 -88.311 0 711.5 130.78)\\\'><stop stop-color=\\\'rgba(30,30,31,0.02)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(10,10,11,1)\\\' offset=\\\'0.6\\\'/></radialGradient></defs></svg>')" }}>
            <Container2 />
        </div>
    );
}

function Section() {
    return (
        <div className="bg-[#0a0a0b] content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip relative shrink-0 w-[1911px]" data-name="Section">
            <Container3 />
        </div>
    );
}

function Section1() {
    return (
        <div className="bg-[#0a0a0b] relative shrink-0 w-full" data-name="Section">
            <div className="flex flex-col items-center size-full">
                <div className="box-border content-stretch flex flex-col items-center pb-0 pt-[40px] px-[32px] relative w-full">
                    <div className="h-[1086px] relative shrink-0 w-[1536px]" data-name="dashboard 1">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img alt="" className="absolute h-[117.24%] left-[-6.11%] max-w-none top-[-5.29%] w-[112.21%]" src={imgDashboard1} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Heading1() {
    return (
        <div className="h-[57.594px] relative shrink-0 w-[1216px]" data-name="Heading 2">
            <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[57.6px] left-[608px] not-italic text-[48px] text-center text-nowrap text-white top-[-0.5px] tracking-[-0.96px] translate-x-[-50%] whitespace-pre">{`Our Products & Services`}</p>
        </div>
    );
}

function Paragraph1() {
    return (
        <div className="h-[27px] relative shrink-0 w-[700px]" data-name="Paragraph">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-[349.8px] not-italic text-[17px] text-center text-neutral-500 text-nowrap top-0 translate-x-[-50%] whitespace-pre">Comprehensive solutions designed to transform your business operations</p>
        </div>
    );
}

function Container4() {
    return (
        <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
            <Heading1 />
            <Paragraph1 />
        </div>
    );
}

function Paragraph2() {
    return (
        <div className="basis-0 grow h-[16.5px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-full">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[11px] text-[rgba(255,255,255,0.7)] text-nowrap top-[0.5px] tracking-[1.2px] uppercase whitespace-pre">Robotics</p>
            </div>
        </div>
    );
}

function Container5() {
    return (
        <div className="absolute bg-[rgba(250,250,250,0.08)] box-border content-stretch flex h-[32.5px] items-center left-[40px] px-[14px] py-0 rounded-[1.67772e+07px] top-[48px] w-[93.523px]" data-name="Container">
            <Paragraph2 />
        </div>
    );
}

function Heading2() {
    return (
        <div className="absolute h-[28.594px] left-[40px] top-[104.5px] w-[528px]" data-name="Heading 3">
            <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28.6px] left-0 not-italic text-[22px] text-nowrap text-white top-[0.5px] whitespace-pre">Last Mile Delivery Robot System</p>
        </div>
    );
}

function Paragraph3() {
    return (
        <div className="absolute h-[96px] left-[40px] top-[149.09px] w-[528px]" data-name="Paragraph">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#a1a1a1] text-[15px] top-0 w-[519px]">Transform your delivery operations with our dual-platform solution. ZiBot offers autonomous robot delivery for sidewalks and indoor environments, while Glide provides fast scooter-based delivery for longer distances. Together, they create a complete last-mile delivery ecosystem.</p>
        </div>
    );
}

function Text1() {
    return (
        <div className="h-[30px] relative shrink-0 w-[20px]" data-name="Text">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[20px]">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[20px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">🤖</p>
            </div>
        </div>
    );
}

function Container6() {
    return (
        <div className="bg-[#111113] relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
                <Text1 />
            </div>
        </div>
    );
}

function Heading3() {
    return (
        <div className="h-[22.5px] relative shrink-0 w-full" data-name="Heading 4">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[15px] text-nowrap text-white top-[-1px] whitespace-pre">ZiBot Robot</p>
        </div>
    );
}

function Paragraph4() {
    return (
        <div className="h-[38px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19px] left-0 not-italic text-[13px] text-neutral-500 top-[0.5px] w-[188px]">Autonomous sidewalk delivery with 24/7 operation capability</p>
        </div>
    );
}

function Container7() {
    return (
        <div className="basis-0 grow h-[64.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[64.5px] items-start relative w-full">
                <Heading3 />
                <Paragraph4 />
            </div>
        </div>
    );
}

function Container8() {
    return (
        <div className="[grid-area:1_/_1] content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
            <Container6 />
            <Container7 />
        </div>
    );
}

function Text2() {
    return (
        <div className="h-[30px] relative shrink-0 w-[20px]" data-name="Text">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[20px]">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[20px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">🛴</p>
            </div>
        </div>
    );
}

function Container9() {
    return (
        <div className="bg-[#111113] relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
                <Text2 />
            </div>
        </div>
    );
}

function Heading4() {
    return (
        <div className="h-[22.5px] relative shrink-0 w-full" data-name="Heading 4">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[15px] text-nowrap text-white top-[-1px] whitespace-pre">Glide Service</p>
        </div>
    );
}

function Paragraph5() {
    return (
        <div className="h-[38px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19px] left-0 not-italic text-[13px] text-neutral-500 top-[0.5px] w-[199px]">Fast electric scooter delivery for extended range</p>
        </div>
    );
}

function Container10() {
    return (
        <div className="basis-0 grow h-[64.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[64.5px] items-start relative w-full">
                <Heading4 />
                <Paragraph5 />
            </div>
        </div>
    );
}

function Container11() {
    return (
        <div className="[grid-area:1_/_2] content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
            <Container9 />
            <Container10 />
        </div>
    );
}

function Text3() {
    return (
        <div className="h-[30px] relative shrink-0 w-[20px]" data-name="Text">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[20px]">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[20px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">🗺️</p>
            </div>
        </div>
    );
}

function Container12() {
    return (
        <div className="bg-[#111113] relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
                <Text3 />
            </div>
        </div>
    );
}

function Heading5() {
    return (
        <div className="h-[22.5px] relative shrink-0 w-full" data-name="Heading 4">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[15px] text-nowrap text-white top-[-1px] whitespace-pre">Smart Routing</p>
        </div>
    );
}

function Paragraph6() {
    return (
        <div className="h-[38px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19px] left-0 not-italic text-[13px] text-neutral-500 top-[0.5px] w-[172px]">AI-powered optimization for efficient delivery paths</p>
        </div>
    );
}

function Container13() {
    return (
        <div className="basis-0 grow h-[64.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[64.5px] items-start relative w-full">
                <Heading5 />
                <Paragraph6 />
            </div>
        </div>
    );
}

function Container14() {
    return (
        <div className="[grid-area:2_/_1] content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
            <Container12 />
            <Container13 />
        </div>
    );
}

function Text4() {
    return (
        <div className="h-[30px] relative shrink-0 w-[20px]" data-name="Text">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[20px]">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[20px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">📍</p>
            </div>
        </div>
    );
}

function Container15() {
    return (
        <div className="bg-[#111113] relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
                <Text4 />
            </div>
        </div>
    );
}

function Heading6() {
    return (
        <div className="h-[22.5px] relative shrink-0 w-full" data-name="Heading 4">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[15px] text-nowrap text-white top-[-1px] whitespace-pre">Real-time Tracking</p>
        </div>
    );
}

function Paragraph7() {
    return (
        <div className="h-[38px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19px] left-0 not-italic text-[13px] text-neutral-500 top-[0.5px] w-[182px]">Live updates and precise ETA for every delivery</p>
        </div>
    );
}

function Container16() {
    return (
        <div className="basis-0 grow h-[64.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[64.5px] items-start relative w-full">
                <Heading6 />
                <Paragraph7 />
            </div>
        </div>
    );
}

function Container17() {
    return (
        <div className="[grid-area:2_/_2] content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
            <Container15 />
            <Container16 />
        </div>
    );
}

function Container18() {
    return (
        <div className="absolute gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[153px] left-[40px] top-[285.09px] w-[528px]" data-name="Container">
            <Container8 />
            <Container11 />
            <Container14 />
            <Container17 />
        </div>
    );
}

function Text5() {
    return (
        <div className="basis-0 grow h-[19.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.5px] relative w-full">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.6)] text-nowrap top-px whitespace-pre">Get Started</p>
            </div>
        </div>
    );
}

function Icon2() {
    return (
        <div className="relative shrink-0 size-[14px]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <g id="Icon">
                    <path d={svgPaths.p3a9da503} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.3125" />
                </g>
            </svg>
        </div>
    );
}

function ButtonGetStarted() {
    return (
        <Button
            variant="link"
            className="absolute left-[40px] top-[470.09px] h-auto p-0 text-[rgba(255,255,255,0.6)] hover:text-white transition-colors"
        >
            <span className="text-[13px] leading-[19.5px]">Get Started</span>
            <ArrowRight className="ml-2 h-3.5 w-3.5" />
        </Button>
    );
}

function Container19() {
    return (
        <div className="[grid-area:1_/_1] h-[537.594px] relative shrink-0" data-name="Container">
            <Container5 />
            <Heading2 />
            <Paragraph3 />
            <Container18 />
            <ButtonGetStarted />
        </div>
    );
}

function ImageWithFallback() {
    return (
        <div className="absolute h-[490px] left-0 top-[0.02px] w-[352px]" data-name="ImageWithFallback">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[80.31%] left-[-45.94%] max-w-none top-[9.85%] w-[178.98%]" src={imgImageWithFallback} />
            </div>
        </div>
    );
}

function Paragraph8() {
    return (
        <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[11px] text-[rgba(255,255,255,0.8)] text-nowrap top-[0.5px] whitespace-pre">ZiBot</p>
        </div>
    );
}

function Container20() {
    return (
        <div className="absolute bg-[rgba(10,10,11,0.85)] box-border content-stretch flex flex-col h-[28.5px] items-start left-[16px] pb-0 pt-[6px] px-[12px] rounded-[6px] top-[445.09px] w-[50.977px]" data-name="Container">
            <Paragraph8 />
        </div>
    );
}

function Container21() {
    return (
        <div className="basis-0 grow h-[489.594px] min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0" data-name="Container">
            <ImageWithFallback />
            <Container20 />
        </div>
    );
}

function ImageWithFallback1() {
    return (
        <div className="absolute h-[194px] left-0 top-[189.02px] w-[352px]" data-name="ImageWithFallback">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[165.02%] left-[-15.83%] max-w-none top-[-39.55%] w-[226.67%]" src={imgImageWithFallback1} />
            </div>
        </div>
    );
}

function Paragraph9() {
    return (
        <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[11px] text-[rgba(255,255,255,0.8)] text-nowrap top-[0.5px] whitespace-pre">Glide</p>
        </div>
    );
}

function Container22() {
    return (
        <div className="absolute bg-[rgba(10,10,11,0.85)] box-border content-stretch flex flex-col h-[28.5px] items-start left-[16px] pb-0 pt-[6px] px-[12px] rounded-[6px] top-[445.09px] w-[50.688px]" data-name="Container">
            <Paragraph9 />
        </div>
    );
}

function Container23() {
    return (
        <div className="basis-0 grow h-[489.594px] min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0" data-name="Container">
            <ImageWithFallback1 />
            <Container22 />
        </div>
    );
}

function Container24() {
    return (
        <div className="[grid-area:1_/_2] h-[537.594px] relative shrink-0" data-name="Container">
            <div className="size-full">
                <div className="box-border content-stretch flex gap-[20px] h-[537.594px] items-start p-[24px] relative w-full">
                    <Container21 />
                    <Container23 />
                </div>
            </div>
        </div>
    );
}

function HeroProductCard() {
    return (
        <div className="bg-[#0a0a0b] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[538px] overflow-clip relative rounded-[16px] shrink-0 w-[1536px]" data-name="HeroProductCard">
            <Container19 />
            <Container24 />
        </div>
    );
}

function ImageWithFallback2() {
    return (
        <div className="absolute h-[620px] left-0 top-[0.02px] w-[633px]" data-name="ImageWithFallback">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
        </div>
    );
}

function Container25() {
    return (
        <div className="absolute bg-[rgba(10,10,11,0.85)] box-border content-stretch flex flex-col h-[32.5px] items-start left-[20px] pb-0 pt-[8px] px-[14px] rounded-[1.67772e+07px] top-[20px]" data-name="Container">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.7)] text-nowrap tracking-[1.2px] uppercase whitespace-pre">Consultancy</p>
        </div>
    );
}

function Container26() {
    return (
        <div className="h-[628px] overflow-clip relative rounded-[12px] shrink-0 w-[633px]" data-name="Container">
            <ImageWithFallback2 />
            <Container25 />
        </div>
    );
}

function Heading7() {
    return (
        <div className="absolute h-[28.594px] left-[28px] top-[28px] w-[746.664px]" data-name="Heading 3">
            <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28.6px] left-0 not-italic text-[28px] text-nowrap text-white top-[0.5px] whitespace-pre">Fainzy Consultancy</p>
        </div>
    );
}

function Paragraph10() {
    return (
        <div className="absolute h-[44px] left-[28px] overflow-clip top-[68.59px] w-[746.664px]" data-name="Paragraph">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[#a1a1a1] text-[18px] top-[0.5px] w-[714px]">Advanced AI-powered analytics to predict customer demand patterns, optimize inventory management, and streamline your supply chain operations.</p>
        </div>
    );
}

function Text6() {
    return (
        <div className="h-[20px] relative shrink-0 w-[108px]" data-name="Text">
            <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] left-0 not-italic text-[19px] text-[rgba(255,255,255,0.6)] text-nowrap top-px whitespace-pre">Get Started</p>
        </div>
    );
}

function Button1() {
    return (
        <Button
            variant="link"
            className="absolute left-[28px] top-[135.31px] h-auto p-0 text-[rgba(255,255,255,0.6)] hover:text-white transition-colors"
        >
            <span className="text-[19px] leading-[19.5px]">Get Started</span>
            <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
    );
}

function Container27() {
    return (
        <div className="h-[184px] relative shrink-0 w-[728px]" data-name="Container">
            <Heading7 />
            <Paragraph10 />
            <Button1 />
        </div>
    );
}

function ProductCard() {
    return (
        <div className="bg-[#0a0a0b] content-stretch flex h-[775px] items-center justify-between overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="ProductCard">
            <Container26 />
            <Container27 />
        </div>
    );
}

function Heading8() {
    return (
        <div className="absolute h-[28.594px] left-[28px] top-[28px] w-[333.336px]" data-name="Heading 3">
            <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28.6px] left-0 not-italic text-[28px] text-nowrap text-white top-[0.5px] whitespace-pre">MiraX</p>
        </div>
    );
}

function Paragraph11() {
    return (
        <div className="absolute h-[66px] left-[28px] overflow-clip top-[69.02px] w-[577px]" data-name="Paragraph">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[#a1a1a1] text-[14px] top-px w-[577px]">Our in-restaurant delivery robot designed to minimize physical contact between staff and customers, seamlessly delivering orders throughout your establishment.</p>
        </div>
    );
}

function Text7() {
    return (
        <div className="absolute h-[19.5px] left-0 top-0 w-[69.914px]" data-name="Text">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.6)] text-nowrap top-px whitespace-pre">Get Started</p>
        </div>
    );
}

function Icon3() {
    return (
        <div className="absolute left-[77.91px] size-[14px] top-[2.75px]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <g id="Icon">
                    <path d={svgPaths.p3a9da503} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.3125" />
                </g>
            </svg>
        </div>
    );
}

function Button2() {
    return (
        <Button
            variant="link"
            className="absolute left-[28px] top-[157.59px] h-auto p-0 text-[rgba(255,255,255,0.6)] hover:text-white transition-colors"
        >
            <span className="text-[13px] leading-[19.5px]">Get Started</span>
            <ArrowRight className="ml-2 h-3.5 w-3.5" />
        </Button>
    );
}

function Container28() {
    return (
        <div className="basis-0 grow h-[206.594px] min-h-px min-w-px relative shrink-0" data-name="Container">
            <Heading8 />
            <Paragraph11 />
            <Button2 />
        </div>
    );
}

function Paragraph12() {
    return (
        <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[11px] text-[rgba(255,255,255,0.7)] text-nowrap top-[0.5px] tracking-[1.2px] uppercase whitespace-pre">Custom Solution</p>
        </div>
    );
}

function Container29() {
    return (
        <div className="absolute bg-[rgba(10,10,11,0.85)] box-border content-stretch flex flex-col h-[32.5px] items-start left-[20px] pb-0 pt-[8px] px-[14px] rounded-[1.67772e+07px] top-[20px] w-[183px]" data-name="Container">
            <Paragraph12 />
        </div>
    );
}

function ImageWithFallback3() {
    return (
        <div className="absolute h-[620px] left-[20px] top-[0.02px] w-[633px]" data-name="ImageWithFallback">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[66.18%] left-[-13.62%] max-w-none top-[24%] w-[127.24%]" src={imgImageWithFallback3} />
            </div>
        </div>
    );
}

function Container30() {
    return (
        <div className="h-[620px] overflow-clip relative shrink-0 w-[633px]" data-name="Container">
            <Container29 />
            <ImageWithFallback3 />
        </div>
    );
}

function ProductCard1() {
    return (
        <div className="bg-[#0a0a0b] content-stretch flex h-[734px] items-center justify-between overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="ProductCard">
            <Container28 />
            <Container30 />
        </div>
    );
}

function Frame33() {
    return (
        <div className="content-stretch flex flex-col gap-[100px] items-start justify-center relative shrink-0 w-[1536px]">
            <ProductCard />
            <ProductCard1 />
        </div>
    );
}

function ImageWithFallback4() {
    return (
        <div className="absolute h-[620px] left-0 rounded-[12px] top-[1.02px] w-[633px]" data-name="ImageWithFallback">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgImageWithFallback4} />
        </div>
    );
}

function Paragraph13() {
    return (
        <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[11px] text-[rgba(255,255,255,0.7)] text-nowrap top-[0.5px] tracking-[1.2px] uppercase whitespace-pre">Food Service</p>
        </div>
    );
}

function Container31() {
    return (
        <div className="absolute bg-[rgba(10,10,11,0.85)] box-border content-stretch flex flex-col h-[32.5px] items-start left-[20px] pb-0 pt-[8px] px-[14px] rounded-[1.67772e+07px] top-[20px] w-[122.508px]" data-name="Container">
            <Paragraph13 />
        </div>
    );
}

function Container32() {
    return (
        <div className="h-[620px] overflow-clip relative rounded-[12px] shrink-0 w-[633px]" data-name="Container">
            <ImageWithFallback4 />
            <Container31 />
        </div>
    );
}

function Heading9() {
    return (
        <div className="absolute h-[28.594px] left-[28px] top-[28px] w-[333.328px]" data-name="Heading 3">
            <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28.6px] left-0 not-italic text-[22px] text-nowrap text-white top-[0.5px] whitespace-pre">Efficient Food Ordering System</p>
        </div>
    );
}

function Paragraph14() {
    return (
        <div className="absolute h-[66px] left-[28px] overflow-clip top-[69.02px] w-[577px]" data-name="Paragraph">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[#a1a1a1] text-[14px] top-px w-[584px]">Connect restaurants and customers on a unified platform where orders are seamlessly processed and delivered by our autonomous robot fleet.</p>
        </div>
    );
}

function Text8() {
    return (
        <div className="absolute h-[19.5px] left-0 top-0 w-[69.914px]" data-name="Text">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.6)] text-nowrap top-px whitespace-pre">Get Started</p>
        </div>
    );
}

function Icon4() {
    return (
        <div className="absolute left-[77.91px] size-[14px] top-[2.75px]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <g id="Icon">
                    <path d={svgPaths.p3a9da503} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.3125" />
                </g>
            </svg>
        </div>
    );
}

function Button3() {
    return (
        <Button
            variant="link"
            className="absolute left-[28px] top-[157.59px] h-auto p-0 text-[rgba(255,255,255,0.6)] hover:text-white transition-colors"
        >
            <span className="text-[13px] leading-[19.5px]">Get Started</span>
            <ArrowRight className="ml-2 h-3.5 w-3.5" />
        </Button>
    );
}

function Container33() {
    return (
        <div className="h-[196px] relative shrink-0 w-[666px]" data-name="Container">
            <Heading9 />
            <Paragraph14 />
            <Button3 />
        </div>
    );
}

function ProductCard2() {
    return (
        <div className="bg-[#0a0a0b] content-stretch flex h-[815px] items-center justify-between overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="ProductCard">
            <Container32 />
            <Container33 />
        </div>
    );
}

function Heading10() {
    return (
        <div className="h-[28.594px] relative shrink-0 w-[746.672px]" data-name="Heading 3">
            <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28.6px] left-0 not-italic text-[22px] text-nowrap text-white top-[0.5px] whitespace-pre">Hotel Robot Delivery System</p>
        </div>
    );
}

function Paragraph15() {
    return (
        <div className="h-[44px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[#a1a1a1] text-[14px] top-[0.02px] w-[848px]">In-door hotel delivery robot that handles guest requests through an integrated tablet system, delivering items directly to rooms with precision.</p>
        </div>
    );
}

function Frame34() {
    return (
        <div className="content-stretch flex flex-col h-[82px] items-start justify-between relative shrink-0 w-full">
            <Heading10 />
            <Paragraph15 />
        </div>
    );
}

function Text9() {
    return (
        <div className="absolute h-[19.5px] left-0 top-0 w-[69.914px]" data-name="Text">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.6)] text-nowrap top-px whitespace-pre">Get Started</p>
        </div>
    );
}

function Icon5() {
    return (
        <div className="absolute left-[77.91px] size-[14px] top-[2.75px]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <g id="Icon">
                    <path d={svgPaths.p3a9da503} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.3125" />
                </g>
            </svg>
        </div>
    );
}

function Button4() {
    return (
        <Button
            variant="link"
            className="h-auto p-0 text-[rgba(255,255,255,0.6)] hover:text-white transition-colors"
        >
            <span className="text-[13px] leading-[19.5px]">Get Started</span>
            <ArrowRight className="ml-2 h-3.5 w-3.5" />
        </Button>
    );
}

function Container34() {
    return (
        <div className="box-border content-stretch flex flex-col h-[206px] items-start justify-between p-[28px] relative shrink-0 w-[645px]" data-name="Container">
            <Frame34 />
            <Button4 />
        </div>
    );
}

function Paragraph16() {
    return (
        <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[11px] text-[rgba(255,255,255,0.7)] text-nowrap top-[0.5px] tracking-[1.2px] uppercase whitespace-pre">Custom Solution</p>
        </div>
    );
}

function Container35() {
    return (
        <div className="absolute bg-[rgba(10,10,11,0.85)] box-border content-stretch flex flex-col h-[32.5px] items-start left-[20px] pb-0 pt-[8px] px-[14px] rounded-[1.67772e+07px] top-[20px] w-[112.539px]" data-name="Container">
            <Paragraph16 />
        </div>
    );
}

function ImageWithFallback5() {
    return (
        <div className="absolute h-[620px] left-0 top-[0.02px] w-[633px]" data-name="ImageWithFallback">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageWithFallback5} />
        </div>
    );
}

function Container36() {
    return (
        <div className="h-[620px] overflow-clip relative shrink-0 w-[633px]" data-name="Container">
            <Container35 />
            <ImageWithFallback5 />
        </div>
    );
}

function ProductCard3() {
    return (
        <div className="bg-[#0a0a0b] content-stretch flex h-[809px] items-center justify-between overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="ProductCard">
            <Container34 />
            <Container36 />
        </div>
    );
}

function Frame32() {
    return (
        <div className="content-stretch flex flex-col gap-[100px] items-start relative shrink-0 w-[1536px]">
            <ProductCard2 />
            <ProductCard3 />
        </div>
    );
}

function Container37() {
    return (
        <div className="content-stretch flex flex-col gap-[100px] h-[1661px] items-start relative shrink-0 w-full" data-name="Container">
            <Frame33 />
            <Frame32 />
        </div>
    );
}

function DarkModeAboutUsPage() {
    return (
        <div className="bg-[#0a0a0b] content-stretch flex flex-col gap-[100px] h-[2037px] items-start relative shrink-0 w-[1536px]" data-name="Dark Mode About Us Page">
            <Container4 />
            <HeroProductCard />
            <Container37 />
        </div>
    );
}

function BusinessLanding2() {
    return (
        <div className="bg-[#0a0a0b] content-stretch flex flex-col gap-[100px] h-[6337px] items-center relative shrink-0 w-[1920px]" data-name="BusinessLanding">
            <Section />
            <Section1 />
            <DarkModeAboutUsPage />
        </div>
    );
}

function Frame1() {
    return (
        <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative w-full">
                    <BusinessLanding2 />
                </div>
            </div>
        </div>
    );
}

function Frame9() {
    return (
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[453px]">
            <div className="h-[70px] relative shrink-0 w-[84px]" data-name="logo-white 1">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoWhite1} />
            </div>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] min-w-full not-italic relative shrink-0 text-[#cecece] text-[20px] tracking-[-0.4px] w-[min-content]">Pioneering the New Normal</p>
        </div>
    );
}

function Frame23() {
    return (
        <Button variant="ghost" className="box-border h-auto justify-start p-0 py-[2px] w-full hover:text-white transition-colors">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c9c9c9] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">Home</p>
        </Button>
    );
}

function Frame24() {
    return (
        <Button variant="ghost" className="box-border h-auto justify-start p-0 py-[2px] w-full hover:text-white transition-colors">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c9c9c9] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">{`About `}</p>
        </Button>
    );
}

function Frame25() {
    return (
        <Button variant="ghost" className="box-border h-auto justify-start p-0 py-[2px] w-full hover:text-white transition-colors">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c9c9c9] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">Products</p>
        </Button>
    );
}

function Frame26() {
    return (
        <Button variant="ghost" className="box-border h-auto justify-start p-0 py-[2px] w-full hover:text-white transition-colors">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c9c9c9] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">Careers</p>
        </Button>
    );
}

function Frame3() {
    return (
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0">
            <Frame23 />
            <Frame24 />
            <Frame25 />
            <Frame26 />
        </div>
    );
}

function Frame27() {
    return (
        <Button variant="ghost" className="box-border h-auto justify-start p-0 py-[2px] w-full hover:text-white transition-colors">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c9c9c9] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">Contact</p>
        </Button>
    );
}

function Frame28() {
    return (
        <Button variant="ghost" className="box-border h-auto justify-start p-0 py-[2px] w-full hover:text-white transition-colors">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c9c9c9] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">Blog</p>
        </Button>
    );
}

function Frame29() {
    return (
        <Button variant="ghost" className="box-border h-auto justify-start p-0 py-[2px] w-full hover:text-white transition-colors">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c9c9c9] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">Fainzy Business</p>
        </Button>
    );
}

function Frame4() {
    return (
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0">
            <Frame27 />
            <Frame28 />
            <Frame29 />
        </div>
    );
}

function Frame30() {
    return (
        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
            <Frame3 />
            <Frame4 />
        </div>
    );
}

function Frame8() {
    return (
        <div className="content-stretch flex flex-col h-[212px] items-start justify-between relative shrink-0 w-[385px]">
            <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[24px] not-italic relative shrink-0 text-[#b3b3b3] text-[12px] tracking-[2.04px] uppercase w-full">Main Pages</p>
            <Frame30 />
        </div>
    );
}

function Frame19() {
    return (
        <Button variant="ghost" className="box-border h-auto justify-start p-0 py-[2px] w-full hover:text-white transition-colors">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c9c9c9] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">Download</p>
        </Button>
    );
}

function Frame20() {
    return (
        <Button variant="ghost" className="box-border h-auto justify-start p-0 py-[2px] w-full hover:text-white transition-colors">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c9c9c9] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">Help center</p>
        </Button>
    );
}

function Frame21() {
    return (
        <Button variant="ghost" className="box-border h-auto justify-start p-0 py-[2px] w-full hover:text-white transition-colors">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c9c9c9] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">Blog</p>
        </Button>
    );
}

function Frame22() {
    return (
        <Button variant="ghost" className="box-border h-auto justify-start p-0 py-[2px] w-full hover:text-white transition-colors">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c9c9c9] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">Jobs</p>
        </Button>
    );
}

function Frame10() {
    return (
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <Frame19 />
            <Frame20 />
            <Frame21 />
            <Frame22 />
        </div>
    );
}

function Frame5() {
    return (
        <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 w-[169px]">
            <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[24px] not-italic relative shrink-0 text-[#b3b3b3] text-[12px] tracking-[2.04px] uppercase w-full">business</p>
            <Frame10 />
        </div>
    );
}

function Instagram() {
    return (
        <div className="relative shrink-0 size-[24px]" data-name="instagram">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="instagram">
                    <path d={svgPaths.p7c9e180} id="stroke" stroke="var(--stroke-0, #C9C9C9)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                    <path d={svgPaths.p2afa6280} id="stroke_2" stroke="var(--stroke-0, #C9C9C9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p141b8480} fill="var(--fill-0, #C9C9C9)" id="stroke_3" stroke="var(--stroke-0, #C9C9C9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </g>
            </svg>
        </div>
    );
}

function Frame15() {
    return (
        <Button
            variant="ghost"
            className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full h-auto p-0 justify-start hover:text-white transition-colors"
        >
            <Instagram />
            <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#c9c9c9] text-[14px] tracking-[-0.28px]">Instagram</p>
        </Button>
    );
}

function Twitter() {
    return (
        <div className="relative shrink-0 size-[24px]" data-name="twitter">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="twitter">
                    <path d={svgPaths.p105c9700} id="stroke" stroke="var(--stroke-0, #C9C9C9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </g>
            </svg>
        </div>
    );
}

function Frame17() {
    return (
        <Button
            variant="ghost"
            className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full h-auto p-0 justify-start hover:text-white transition-colors"
        >
            <Twitter />
            <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#c9c9c9] text-[14px] tracking-[-0.28px]">Twitter</p>
        </Button>
    );
}

function Facebook() {
    return (
        <div className="relative shrink-0 size-[24px]" data-name="facebook">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="facebook">
                    <path d={svgPaths.p2afa6280} id="stroke" stroke="var(--stroke-0, #C9C9C9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M10 11.5H14" id="stroke_2" stroke="var(--stroke-0, #C9C9C9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p1fb15490} id="stroke_3" stroke="var(--stroke-0, #C9C9C9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </g>
            </svg>
        </div>
    );
}

function Frame16() {
    return (
        <Button
            variant="ghost"
            className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full h-auto p-0 justify-start hover:text-white transition-colors"
        >
            <Facebook />
            <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#c9c9c9] text-[14px] tracking-[-0.28px]">Facebook</p>
        </Button>
    );
}

function Instagram1() {
    return (
        <div className="relative shrink-0 size-[24px]" data-name="instagram">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="instagram">
                    <path d={svgPaths.p7c9e180} id="stroke" opacity="0" stroke="var(--stroke-0, #C9C9C9)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                    <path d={svgPaths.p2afa6280} id="stroke_2" stroke="var(--stroke-0, #C9C9C9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p141b8480} fill="var(--fill-0, #C9C9C9)" id="stroke_3" opacity="0" stroke="var(--stroke-0, #C9C9C9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </g>
            </svg>
        </div>
    );
}

function Frame18() {
    return (
        <Button
            variant="ghost"
            className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full h-auto p-0 justify-start hover:text-white transition-colors"
        >
            <Instagram1 />
            <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#c9c9c9] text-[14px] tracking-[-0.28px]">LinkedIn</p>
        </Button>
    );
}

function Frame14() {
    return (
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <Frame15 />
            <Frame17 />
            <Frame16 />
            <Frame18 />
        </div>
    );
}

function Frame6() {
    return (
        <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 w-[228px]">
            <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[24px] not-italic relative shrink-0 text-[#b3b3b3] text-[12px] tracking-[2.04px] uppercase w-full">social</p>
            <Frame14 />
        </div>
    );
}

function Frame7() {
    return (
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-[878px]">
            <Frame8 />
            <Frame5 />
            <Frame6 />
        </div>
    );
}

function Frame11() {
    return (
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1536px]">
            <Frame9 />
            <Frame7 />
        </div>
    );
}

function Frame2() {
    return (
        <Button
            variant="outline"
            className="rounded-[4px] border-2 border-[#c9c9c9] bg-transparent hover:bg-[rgba(201,201,201,0.1)] px-[20px] py-[8px] transition-colors"
        >
            <span className="text-[#c9c9c9] text-[12px] tracking-[2.04px] uppercase">ACCEPT</span>
        </Button>
    );
}

function Frame13() {
    return (
        <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#a6aead] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">We use cookies for better service.</p>
            <Frame2 />
        </div>
    );
}

function Frame31() {
    return (
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1536px]">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#a6aead] text-[14px] tracking-[-0.28px] w-[1080px]">Copyright © 2025 Fainzy Technologies LTD. All rights reserved</p>
            <Frame13 />
        </div>
    );
}

function Frame12() {
    return (
        <div className="box-border content-stretch flex items-center justify-between px-0 py-[32px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#e1e2e2] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
            <Frame31 />
        </div>
    );
}

function Footer() {
    return (
        <div className="bg-[#0a0a0b] box-border content-stretch flex flex-col gap-[40px] items-center pb-0 pt-[80px] px-0 relative shrink-0 w-[1920px]" data-name="FOOTER">
            <Frame11 />
            <Frame12 />
        </div>
    );
}

function Logo() {
    return (
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="logo">
            <div className="h-[70px] relative shrink-0 w-[84px]" data-name="logo-white 1">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoWhite1} />
            </div>
        </div>
    );
}

function Left() {
    return (
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[92px]" data-name="left">
            <Logo />
        </div>
    );
}

function Right() {
    return (
        <div className="content-stretch flex gap-[60px] items-center justify-end relative shrink-0" data-name="right">
            <Button variant="ghost" className="h-auto p-0 text-[#f1f4f4] text-[12px] tracking-[2.04px] uppercase hover:text-white transition-colors">
                Home
            </Button>
            <Button variant="ghost" className="h-auto p-0 text-[#f1f4f4] text-[12px] tracking-[2.04px] uppercase hover:text-white transition-colors">
                Login
            </Button>
            <Button variant="ghost" className="h-auto p-0 text-[#f1f4f4] text-[12px] tracking-[2.04px] uppercase hover:text-white transition-colors">
                Faq
            </Button>
        </div>
    );
}

function Frame() {
    return (
        <div className="h-[22px] relative shrink-0 w-[90px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 22">
                <g id="Frame 1">
                    <path clipRule="evenodd" d={svgPaths.p1596600} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
                    <path d={svgPaths.pa090000} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path clipRule="evenodd" d={svgPaths.p2c597d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
                </g>
            </svg>
        </div>
    );
}

function NavContent() {
    return (
        <div className="content-stretch flex h-[91px] items-center justify-between relative shrink-0 w-[1536px]" data-name="Nav content">
            <Left />
            <Right />
            <Frame />
        </div>
    );
}

function Nav() {
    return (
        <div className="absolute content-stretch flex flex-col gap-[8px] h-[96.928px] items-center left-0 top-0 w-[1920px]" data-name="Nav">
            <NavContent />
        </div>
    );
}

export default function Business() {
    return (
        <div className="bg-[#0a0a0b] content-stretch flex flex-col items-start relative size-full" data-name="Business">
            <Frame1 />
            <Footer />
            <Nav />
        </div>
    );
}