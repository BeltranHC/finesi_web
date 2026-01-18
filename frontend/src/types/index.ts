export interface Career {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl?: string;
  duration: number;
  degree?: string;
  skills?: string[];
  curriculum?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Teacher {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  imageUrl?: string;
  category: 'principal' | 'associate' | 'auxiliary' | 'contractor';
  degree?: string;
  specialization?: string;
  biography?: string;
  courses?: string[];
  officeHours?: string;
  career?: Career;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface News {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  imageUrl?: string;
  category: 'events' | 'academic' | 'research' | 'announcements';
  isPublished: boolean;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'teacher' | 'student' | 'guest';
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
