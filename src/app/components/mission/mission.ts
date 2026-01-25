import { Component } from '@angular/core';

@Component({
  selector: 'app-mission',
  standalone: true,
  template: `
    <section id="mission" class="py-24 bg-slate-900 relative">
      <div class="max-w-5xl mx-auto px-6">
        <div class="flex items-center gap-3 mb-8">
          <div class="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
          <span class="text-sm font-medium text-slate-500 uppercase tracking-wider">Our Mission</span>
          <div class="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        </div>

        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold mb-6">
            Software That <span class="text-gradient">Empowers</span> HPC
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8 text-slate-400 text-lg leading-relaxed">
          <p>
            At Better HPC, we develop software that empowers high-performance computing environments to operate 
            efficiently and reliably. Our solutions streamline complex workflows, automate repetitive tasks, 
            and address the daily operational challenges faced by HPC administrators.
          </p>
          <p>
            By focusing on robust, quality driven tools, we help HPC centers reduce operational friction, 
            optimize resource utilization, and deliver consistent, reproducible results to researchers and 
            engineers alike. Every product we build is grounded in real-world operational needs and designed 
            to simplify management at scale.
          </p>
        </div>
      </div>
    </section>
  `
})
export class MissionComponent {}
