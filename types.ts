import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  iconName: 'ShieldCheck' | 'CreditCard' | 'PackageCheck' | 'Headset';
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface SupportedSite {
  id: number;
  name: string;
  description: string;
  icon?: string; // URL or local path placeholder
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  targetAudience: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  outlines: {
    heading: string;
    summary: string;
  }[];
}

export interface FAQItem {
  question: string;
  answer: string;
}