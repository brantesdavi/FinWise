import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app'
import { getAuth, provideAuth } from '@angular/fire/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC3-K3rQv7KyXFYKq2Pdr4dAQgOb6CDHNg",
  authDomain: "finwise-br.firebaseapp.com",
  projectId: "finwise-br",
  storageBucket: "finwise-br.appspot.com",
  messagingSenderId: "320073205376",
  appId: "1:320073205376:web:a9fbbf729066bc72d20865",
  measurementId: "G-6CCDPVB4FY"
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth())
    ]),
  ]
};
