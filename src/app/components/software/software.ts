import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type SoftwareStatus = 'available' | 'beta' | 'development';

interface SoftwareItem {
  name: string;
  icon: string;
  description: string;
  status: SoftwareStatus;
  href: string;
}

@Component({
  selector: 'app-software',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="software" class="py-24 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900 relative overflow-hidden">
      <!-- Background accent -->
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>
      
      <div class="max-w-5xl mx-auto px-6 relative z-10">
        <div class="text-center mb-12">
          <span class="text-sm font-medium text-blue-400 uppercase tracking-wider">Our Software</span>
          <h2 class="text-3xl sm:text-4xl font-bold mt-3 mb-4">Tools We're Building</h2>
          <p class="text-slate-400 max-w-2xl mx-auto">
            We're developing practical, quality-driven tools to solve real operational challenges in HPC environments.
          </p>
        </div>

        <!-- Software Cards -->
        <div class="flex flex-wrap justify-center gap-6">
          <a *ngFor="let item of softwareItems" 
             [href]="item.href"
             class="group relative w-full max-w-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 card-glow">
            
            <!-- Status Badge -->
            <div class="absolute top-6 right-6">
              <span class="text-xs font-medium px-3 py-1 rounded-full"
                    [ngClass]="getStatusClasses(item.status)">
                {{ getStatusLabel(item.status) }}
              </span>
            </div>
            
            <!-- Icon -->
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
              <i class="fas text-white text-2xl" [ngClass]="item.icon"></i>
            </div>
            
            <!-- Content -->
            <h3 class="text-xl font-bold text-white mb-2">{{ item.name }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed mb-6">{{ item.description }}</p>
            
            <!-- Link -->
            <div class="flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:gap-3 transition-all">
              <span>Learn more</span>
              <i class="fas fa-arrow-right"></i>
            </div>
          </a>
        </div>
      </div>
    </section>
  `
})
export class SoftwareComponent {
  softwareItems: SoftwareItem[] = [
    {
      name: 'Keystone',
      icon: 'fa-cube',
      description: 'A unified platform that empowers sys admins, researchers, and leadership to maximize HPC resources with intuitive tools, real-time insights, and seamless collaboration.',
      status: 'development',
      href: '#'
    }
    // Add more software items here as needed
  ];

  getStatusLabel(status: SoftwareStatus): string {
    const labels: Record<SoftwareStatus, string> = {
      available: 'Available',
      beta: 'Beta',
      development: 'In Development'
    };
    return labels[status];
  }

  getStatusClasses(status: SoftwareStatus): string {
    const classes: Record<SoftwareStatus, string> = {
      available: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
      beta: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
      development: 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
    };
    return classes[status];
  }
}
