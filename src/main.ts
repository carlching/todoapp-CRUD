import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

/*   https://github.com/ashusharma1991/firebase-authentication-with-angular-9
  https://www.youtube.com/watch?v=Stj9I9_Q_6w&list=PLbCi1k95dW0FmxIpQDLtlRalvXDsZIXfT
  https://www.youtube.com/watch?v=JG612peXUEU
  https://alligator.io/angular/firebase-authentication-angularfire2/ */
