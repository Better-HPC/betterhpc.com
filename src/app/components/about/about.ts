import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExpertiseCard {
  icon: string;
  iconColor: string;
  borderHover: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-24 bg-slate-950">
      <div class="max-w-5xl mx-auto px-6">
        <div class="mb-16">
          <span class="text-sm font-medium text-blue-400 uppercase tracking-wider">About Us</span>
          <h2 class="text-3xl sm:text-4xl font-bold mt-3 mb-6">
            Built by People Who<br class="hidden sm:block"> <span class="text-gradient">Know HPC</span>
          </h2>
          
          <div class="space-y-6 text-slate-400 text-lg leading-relaxed max-w-3xl">
            <p>
              Better HPC was founded by engineers and systems architects with real-world experience managing 
              HPC environments. Our team understands the operational realities and technical challenges that 
              shape modern HPC operations. We build software guided by this expertise, focusing on solutions 
              that simplify daily operations, reduce friction, and empower administrators and researchers alike.
            </p>
            <p>
              Our team partners directly with HPC centers, research institutions, and national labs to design 
              tools that solve practical problems in modern compute ecosystems. Every tool we create reflects 
              our commitment to practical, user-driven design informed by real-world HPC workflows.
            </p>
          </div>
        </div>

        <!-- Expertise Cards -->
        <div class="grid md:grid-cols-3 gap-6">
          <div *ngFor="let card of expertiseCards" 
               class="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 transition-all duration-300 card-glow"
               [ngClass]="card.borderHover">
            <div class="w-12 h-12 rounded-xl border flex items-center justify-center mb-5 group-hover:scale-110 transition-all"
                 [ngClass]="card.iconColor">
              <i class="fas text-xl" [ngClass]="card.icon"></i>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ card.title }}</h3>
            <p class="text-slate-500 text-sm leading-relaxed">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  expertiseCards: ExpertiseCard[] = [
    {
      icon: 'fa-cogs',
      iconColor: 'bg-blue-500/10 border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20',
      borderHover: 'hover:border-blue-500/30',
      title: 'Operational Expertise',
      description: 'Years of production HPC experience help guide every architectural detail.'
    },
    {
      icon: 'fa-layer-group',
      iconColor: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20',
      borderHover: 'hover:border-cyan-500/30',
      title: 'Scalable Software',
      description: 'Designed and tested for complex, demanding operational environments.'
    },
    {
      icon: 'fa-flask',
      iconColor: 'bg-violet-500/10 border-violet-500/20 text-violet-400 group-hover:bg-violet-500/20',
      borderHover: 'hover:border-violet-500/30',
      title: 'Research-Driven',
      description: 'Direct input from HPC admins and users drives a high quality user experience.'
    }
  ];
}
