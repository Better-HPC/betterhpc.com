import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section id="contact" class="py-24 bg-slate-950 relative overflow-hidden">
      <!-- Ambient glow -->
      <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"></div>
      
      <div class="max-w-2xl mx-auto px-6 relative z-10">
        <div class="text-center mb-12">
          <span class="text-sm font-medium text-blue-400 uppercase tracking-wider">Contact</span>
          <h2 class="text-3xl sm:text-4xl font-bold mt-3 mb-4">Let's Talk</h2>
          <p class="text-slate-400">Have a question or project in mind? Tell us about it!</p>
        </div>

        <form action="https://formsubmit.co/7672b3e7b4a4aad40c6a713f146283b0" method="POST" class="space-y-5">
          <input type="text" name="_honey" style="display:none">
          
          <div>
            <input required type="text" name="name" placeholder="Your name"
              class="w-full bg-slate-800/50 border border-slate-700 focus:border-blue-500 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all">
          </div>
          
          <div>
            <input required type="email" name="email" placeholder="Email"
              class="w-full bg-slate-800/50 border border-slate-700 focus:border-blue-500 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all">
          </div>
          
          <div>
            <textarea required name="message" rows="5" placeholder="Message"
              class="w-full bg-slate-800/50 border border-slate-700 focus:border-blue-500 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"></textarea>
          </div>
          
          <button type="submit" 
            class="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-3">
            Send Message
            <i class="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </section>
  `
})
export class ContactComponent {}
