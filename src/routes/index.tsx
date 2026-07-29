import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Shield,
  Users,
  MessageCircle,
  ArrowRight,
  Check,
  Headphones,
  Clock,
} from "lucide-react";

import logo from "@/assets/logo.png";
import gameValorant from "@/assets/game-valorant.jpg";
import gameLol from "@/assets/game-lol.jpg";
import gameMaple from "@/assets/game-maple.jpg";
import gameLostArk from "@/assets/game-lostark.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "아이디몰 - 게임 계정 거래의 중심" },
      {
        name: "description",
        content:
          "아이디몰은 국내 최대 규모의 디스코드 게임 계정 거래 커뮤니티입니다. 철저한 인증과 실시간 모니터링으로 안전한 거래를 보장합니다.",
      },
      { property: "og:title", content: "아이디몰 - 게임 계정 거래의 중심" },
      {
        property: "og:description",
        content:
          "검증된 판매자와 구매자를 연결하는 가장 안전한 게임 계정 거래소, 아이디몰 공식 디스코드 서버입니다.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6173-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0942.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
    </svg>
  );
}

const games = [
  {
    title: "발로란트",
    count: "4,200+",
    image: gameValorant,
    tag: "VALORANT",
  },
  {
    title: "리그 오브 레전드",
    count: "2,800+",
    image: gameLol,
    tag: "LEAGUE OF LEGENDS",
  },
  {
    title: "메이플스토리",
    count: "1,500+",
    image: gameMaple,
    tag: "MAPLESTORY",
  },
  {
    title: "로스트아크",
    count: "900+",
    image: gameLostArk,
    tag: "LOST ARK",
  },
];

const safetyFeatures = [
  {
    icon: Shield,
    title: "철저한 사기 방지",
    description:
      "자체 블랙리스트와 실시간 모니터링으로 부적절한 사용자를 사전에 차단합니다.",
  },
  {
    icon: Headphones,
    title: "24/7 중개 지원",
    description:
      "숙련된 관리자가 거래 전 과정을 안전하게 중개하여 분쟁을 최소화합니다.",
  },
  {
    icon: Users,
    title: "투명한 거래 후기",
    description:
      "실제 거래 데이터와 생생한 후기를 통해 판매자의 신용도를 즉시 확인하세요.",
  },
];

const stats = [
  { value: "5,000+", label: "누적 거래" },
  { value: "2,491", label: "활동 유저" },
  { value: "24/7", label: "실시간 모니터링" },
];

const faqs = [
  {
    question: "아이디몰은 어떤 서버인가요?",
    answer:
      "아이디몰은 디스코드 기반 게임 계정 거래 커뮤니티입니다. 다양한 게임의 계정 매물을 안전하게 거래할 수 있습니다.",
  },
  {
    question: "거래는 어떻게 진행되나요?",
    answer:
      "서버에 입장 후 원하는 게임 채널에서 매물을 확인하고, 관리자의 중개 아래 안전하게 거래를 진행합니다.",
  },
  {
    question: "사기를 당하면 어떻게 하나요?",
    answer:
      "모든 거래는 관리자 중개 하에 이루어지며, 사기 의심 신고는 24시간 접수됩니다. 증거를 토대로 신속히 조치합니다.",
  },
];

function DiscordButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="https://discord.gg/invite"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-linear-to-r from-primary to-primary-glow text-primary-foreground font-semibold rounded-xl transition-all hover:brightness-110 hover:shadow-neon active:scale-95 ${className}`}
    >
      <DiscordIcon className="size-5" />
      {children}
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="아이디몰 로고"
              className="size-9 rounded-lg shadow-neon"
            />
            <span className="text-lg font-bold tracking-tight">아이디몰</span>
          </Link>
          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#games" className="transition-colors hover:text-foreground">
              지원 게임
            </a>
            <a
              href="#safety"
              className="transition-colors hover:text-foreground"
            >
              안전 보장
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground">
              FAQ
            </a>
          </div>
          <DiscordButton className="px-5 py-2.5 text-sm">
            서버 입장
          </DiscordButton>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[1200px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        </div>

        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full bg-primary" />
            </span>
            현재 1,240명 접속 중
          </div>

          <div className="mb-8">
            <img
              src={logo}
              alt="아이디몰"
              className="mx-auto size-28 rounded-2xl shadow-neon-lg md:size-36"
            />
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            가장 안전한{" "}
            <span className="bg-linear-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              게임 계정 거래
            </span>
            의 중심
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            아이디몰은 검증된 판매자와 구매자를 연결하는 디스코드 게임 계정 거래
            커뮤니티입니다. 철저한 인증과 실시간 모니터링으로 당신의 소중한
            거래를 보호합니다.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <DiscordButton className="px-8 py-4 text-base">
              지금 바로 서버 입장
            </DiscordButton>
            <a
              href="#games"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-card/80"
            >
              지원 게임 보기
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="border-y border-border/50 bg-card/30 py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-6 px-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className="text-2xl font-bold text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Games */}
      <section id="games" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Marketplace
              </p>
              <h2 className="text-3xl font-bold tracking-tight">
                인기 거래 품목
              </h2>
            </div>
            <p className="hidden text-sm text-muted-foreground md:block">
              현재 4개 주요 게임 거래 지원
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {games.map((game) => (
              <div
                key={game.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-neon"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    loading="lazy"
                    width={512}
                    height={640}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                    {game.tag}
                  </p>
                  <h3 className="mt-1 text-xl font-bold">{game.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    매물 {game.count} 건
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section id="safety" className="bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Safety
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              왜 아이디몰이 안전할까요?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {safetyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-neon"
              >
                <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <feature.icon className="size-6" />
                </div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              FAQ
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              자주 묻는 질문
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 rounded-full bg-primary/10 p-1.5 text-primary">
                    <MessageCircle className="size-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{faq.question}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card p-10 text-center md:p-16">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 to-primary-glow/10" />
            <div className="absolute -right-20 -top-20 size-64 rounded-full bg-primary/20 blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 size-64 rounded-full bg-primary-glow/20 blur-[100px]" />

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              지금 바로 아이디몰에 합류하세요
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              수천 명의 유저가 이미 선택한 안전한 게임 계정 거래 커뮤니티.
              디스코드 서버에서 지금 시작해보세요.
            </p>
            <div className="mt-8">
              <DiscordButton className="px-8 py-4 text-base">
                디스코드 서버 참가하기
              </DiscordButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="아이디몰 로고"
              className="size-8 rounded-lg shadow-neon"
            />
            <span className="font-bold">아이디몰</span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} 아이디몰. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="size-4" />
            <span>24/7 실시간 모니터링</span>
          </div>
        </div>
      </footer>

      {/* Floating Discord CTA */}
      <div className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-3rem)] max-w-md -translate-x-1/2">
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-card/95 p-4 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="아이디몰"
              className="size-10 rounded-lg shadow-neon"
            />
            <div>
              <p className="text-sm font-semibold">아이디몰 공식 서버</p>
              <p className="text-xs text-muted-foreground">
                현재 1,240명 활동 중
              </p>
            </div>
          </div>
          <DiscordButton className="px-4 py-2 text-xs">
            <span className="hidden sm:inline">입장</span>
            <span className="sm:hidden">입장</span>
          </DiscordButton>
        </div>
      </div>
    </div>
  );
}
