import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="space-y-3">
        <p className="text-sm text-gray-500 dark:text-gray-400">404</p>
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          页面不存在
        </h1>
        <p className="text-base text-gray-600 dark:text-gray-300">
          你访问的页面可能被移动、删除或输入了错误的地址。
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            返回首页
          </Link>
        </div>
      </div>
    </main>
  );
}