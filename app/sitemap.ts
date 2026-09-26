import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', 'about', 'industries', 'services', 'careers', 'contact', 'insights'].map((path) => ({ url: `https://sapphirebluegroup.co.za/${path}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: path === '' ? 1 : 0.8 }))
}
