import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectDetail {
  id: string;
  category: string;
  title: string;
  summary: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
}

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-page.html',
  styleUrl: './first-page.css'
})
export class FirstPage implements OnInit, OnDestroy {

  scrolled = false;

  activeProject: ProjectDetail | null = null;

  projects: ProjectDetail[] = [
    {
      id: 'visitor-pass',
      category: 'JAVA · SPRING BOOT · MICROSERVICES',
      title: 'VisitorPass',
      summary:
        'Full-stack visitor management platform for residential communities.',
      description:
        'Residents create visitor passes and guards validate entry using QR-based verification. The backend uses independently deployable Spring Boot services with Kafka-based asynchronous communication.',
      highlights: [
        'JWT authentication, OAuth 2.0 and RBAC',
        'Spring Boot microservices with Apache Kafka',
        'QR pass generation and validation using ZXing',
        'Angular frontend with Docker-based deployment'
      ],
      tech: [
        'Java',
        'Spring Boot',
        'Spring Security',
        'JWT',
        'Angular',
        'Kafka',
        'Docker',
        'MySQL'
      ],
      github: 'https://github.com/khushbu0810/visitor-pass'
    },

    {
      id: 'eventflow',
      category: 'FULL STACK · REAL-TIME',
      title: 'EventFlow',
      summary:
        'Event booking and venue management platform with real-time availability.',
      description:
        'A full-stack booking platform using WebSocket communication for live availability updates and MinIO for media and document storage.',
      highlights: [
        'Real-time availability updates using WebSocket',
        'Secure authentication for organisers and attendees',
        'Media and document storage using MinIO',
        'Booking and revenue reporting'
      ],
      tech: [
        'Java',
        'Spring Boot',
        'Angular',
        'MySQL',
        'WebSocket',
        'MinIO'
      ]
    },

    {
      id: 'payment-platform',
      category: 'BACKEND · MICROSERVICES',
      title: 'Payment Enterprise Platform',
      summary:
        'Backend-focused system for transactional workflows.',
      description:
        'A service-based backend exploring transactional workflows through clear service boundaries, idempotent APIs and predictable transaction states.',
      highlights: [
        'Service-based architecture',
        'RESTful and idempotent APIs',
        'Structured validation and error handling',
        'Clear separation of service responsibilities'
      ],
      tech: [
        'Java',
        'Spring Boot',
        'REST',
        'Microservices'
      ]
    }
  ];

  ngOnInit(): void {
    this.onScroll();
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 30;
  }

  scroll(id: string): void {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }



  closeProject(): void {
    this.activeProject = null;
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.activeProject) {
      this.closeProject();
    }
  }
}