/// <reference types="node" />
/**
 * @typedef {import('node:process')}
 */
/**
 * Libreca Optional Backend Service
 * --------------------------------
 * This Fastify instance provides:
 *  • /health   → simple uptime check
 *  • /version  → returns the package version from package.json
 *
 * You can extend it later with webhooks (e.g., Discord), cron hooks, or micro‑services
 * that shouldn't run in Vercel serverless.
 */

import Fastify from 'fastify';
import fp from 'fastify-plugin';
import { createRequire } from 'module';
// @ts-ignore
const customRequire = createRequire(import.meta.url);
const pkg = customRequire('../../package.json');

// ─── Fastify instance ───────────────────────────────────────────────────────────
const app = Fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: { translateTime: 'HH:MM:ss' }
    }
  }
});

// ─── Plugin: Health Route ──────────────────────────────────────────────────────
const healthPlugin = fp(async (f) => {
  f.get('/health', (_, reply) => {
    reply.send({ status: 'ok', uptime: process.uptime() });
  });
});

// ─── Plugin: Version Route ─────────────────────────────────────────────────────
const versionPlugin = fp(async (f) => {
  f.get('/version', (_, reply) => {
    reply.send({ version: pkg.version });
  });
});

// Register plugins
app.register(healthPlugin);
app.register(versionPlugin);

// ─── Start server ──────────────────────────────────────────────────────────────
const PORT = Number(process.env.PORT) || 4000;
app.listen({ port: PORT, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Libreca server running at ${address}`);
});