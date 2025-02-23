// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';

// // import { routes } from './app.routes';
// import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http';

// export const appConfig: ApplicationConfig = {
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }),  provideClientHydration(withEventReplay()),provideHttpClient()]
// };



// app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';  // ✅ Import routes
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()), // ✅ Added fetch for SSR compatibility
    provideRouter(routes),           // ✅ Provide router for ActivatedRoute
  ],
};
