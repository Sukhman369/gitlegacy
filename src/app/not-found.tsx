import { Metadata } from 'next';
import { NotFoundClient } from '../components/NotFoundClient';

export const metadata: Metadata = {
  title: '404 - Page Not Found | GitLegacy',
  description: 'The requested GitHub contribution route or developer tool could not be found.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return <NotFoundClient />;
}
