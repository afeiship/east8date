import routerx from '@jswork/routerx';
import viteRequire from '@jswork/vite-require';
import routerRC from './.routerc.json';

const moduleFiles = import.meta.glob('./**/*.tsx', { eager: true });
const viteReq = viteRequire(moduleFiles);

export default routerx(routerRC as any, viteReq);
