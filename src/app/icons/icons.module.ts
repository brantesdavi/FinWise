import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faGithub, faGoogle, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faArrowRight, faArrowUp, faBars, faDollarSign, faGlobe, faMask, faObjectUngroup, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  exports: [FontAwesomeModule]
})
export class IconsModule { 
  constructor(library: FaIconLibrary){
    library.addIcons(faGoogle, faDollarSign, faArrowDown, faArrowUp);
  }
}
