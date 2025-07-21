import { client } from 'zod-sdk';
import manifest from '@/manifest.json';
import { IFigmaRoutes } from 'lhc/index';

const lhcUrl = `${manifest.networkAccess.allowedDomains[0]}/api/public/figma`;

export const sdk = client.makeSDK<IFigmaRoutes>({
  baseUrl: lhcUrl,
});
