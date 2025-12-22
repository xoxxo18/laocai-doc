import nextra from 'nextra';


// 1. 配置 Nextra (指定主题和配置文件)
const withNextra = nextra({
  // 其他 Nextra 专属配置...
});

// 2. 配置标准的 Next.js
const nextConfig = {
  // 结合你之前的 GitHub Pages 需求，建议加上以下两行：
  output: 'export',
  images: {
    unoptimized: true, // 静态导出必须关闭 Next.js 自带的图片优化
  },
  
  // 其他常规 Next.js 配置...
  reactStrictMode: true,

  turbopack: {
    resolveAlias: {
      // Nextra/MDX 在 Turbopack 下会从这个“虚拟模块”导入 useMDXComponents
      // 这里需要 alias 到实际存在的 mdx-components 文件路径
      'next-mdx-import-source-file': './mdx-components.tsx'
    }
  }
};

// 3. 导出包裹后的配置
export default withNextra(nextConfig);