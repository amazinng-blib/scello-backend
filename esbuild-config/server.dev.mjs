import * as esbuild from 'esbuild';

let ctx;

try {
  ctx = await esbuild.context({
    entryPoints: ['src/index.ts'],
    bundle: true,
    sourcemap: true,
    minify: false,
    platform: 'node',
    target: ['node20.12.2'],
    packages: 'external',
    define: {
      'process.env.NODE_ENV': "'development'",
    },
    outfile: 'dist/index.js',
  });

  await ctx.watch();
  console.log('Watching server...');
} catch (error) {
  console.error('An error occurred:', error);
  process.exit(1);
}
