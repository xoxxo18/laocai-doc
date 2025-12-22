import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-linear-to-br from-white to-black/2 p-8 shadow-sm dark:border-white/10 dark:from-white/6 dark:to-white/2 sm:p-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-linear-to-br from-violet-400/40 to-cyan-300/30 blur-3xl dark:from-violet-400/25 dark:to-cyan-300/20" />
          <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-linear-to-br from-amber-300/35 to-pink-400/25 blur-3xl dark:from-amber-300/20 dark:to-pink-400/15" />
        </div>

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-black/70 backdrop-blur dark:border-white/10 dark:bg-white/6 dark:text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            文档已就绪 · 支持静态部署
          </div>

          <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">
            牢财文档
            <span className="block text-black/60 dark:text-white/60">
              简约、清晰、快速上手
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-black/70 dark:text-white/70 sm:text-lg">
            面向使用者的说明书与最佳实践集合。用最少的文字，解决最实际的问题。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/docs/getting-start"
              className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black/20 dark:bg-white dark:text-black dark:hover:bg-white/90 dark:focus:ring-white/20"
            >
              开始使用
            </Link>
            <Link
              href="/docs/introduction"
              className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white/70 px-5 py-3 text-sm font-semibold text-black/80 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-black/10 dark:border-white/15 dark:bg-white/6 dark:text-white/80 dark:hover:bg-white/9 dark:focus:ring-white/10"
            >
              阅读简介
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          title="结构清晰"
          desc="以任务为中心组织目录，先给结论，再给细节。"
        />
        <FeatureCard
          title="可静态部署"
          desc="适配 Next.js export 输出，轻松放到任意静态托管。"
        />
        <FeatureCard
          title="体验优先"
          desc="简洁留白、舒适字号与对比度，阅读不疲劳。"
        />
      </section>

      <section className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/4 sm:mt-14 sm:p-8">
        <h2 className="text-base font-semibold text-black dark:text-white">
          快速开始（本地预览静态站点）
        </h2>
        <div className="mt-4 grid gap-3 text-sm text-black/70 dark:text-white/70 sm:grid-cols-2">
          <Step k="1" text="构建导出：bun run build（生成 out/）" />
          <Step k="2" text="启动静态服务：bun x serve out 或 npx --yes serve out" />
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/4">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-base font-semibold text-black dark:text-white">
          {title}
        </h3>
        <span className="h-8 w-8 rounded-xl border border-black/10 bg-linear-to-br from-black/2 to-black/6 dark:border-white/10 dark:from-white/4 dark:to-white/8" />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-black/70 dark:text-white/70">
        {desc}
      </p>
    </div>
  );
}

function Step({ k, text }: { k: string; text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-black/10 bg-white/60 p-4 dark:border-white/10 dark:bg-white/3">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-black text-xs font-semibold text-white dark:bg-white dark:text-black">
        {k}
      </div>
      <p className="leading-relaxed">{text}</p>
    </div>
  );
}
