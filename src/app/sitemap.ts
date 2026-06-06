import { MetadataRoute } from 'next';
import { travelManualData } from '@/data/indiaTravelManual';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wander-ai.com';

  // Core static routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/planner`,
      lastModified: new Date(),
      changeFrequency: 'always' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/manual`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Dynamic routes for all states in the manual
  const dynamicRoutes = travelManualData.map((state) => ({
    url: `${baseUrl}/manual/${state.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
