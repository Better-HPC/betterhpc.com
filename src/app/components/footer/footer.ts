import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="py-8 bg-slate-950 border-t border-slate-800/50">
      <div class="max-w-5xl mx-auto px-6">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-md bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <i class="fas fa-microchip text-white text-xs"></i>
            </div>
            <span class="font-semibold text-sm">Better HPC</span>
          </div>
          
          <div class="text-slate-600 text-sm">
            © {{ currentYear }} Better HPC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
