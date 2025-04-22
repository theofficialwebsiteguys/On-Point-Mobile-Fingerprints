import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { MarqueeComponent } from '../marquee/marquee.component';
import { ContactComponent } from '../contact/contact.component';
import { PricingComponent } from '../pricing/pricing.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent, CommonModule, MarqueeComponent, ContactComponent, PricingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  services = [
    {
      title: 'Florida FDLE Live Scan',
      description: 'Official Level 2 fingerprinting for Florida licensing, employment, and regulatory purposes.',
      image: 'assets/services/fdle.png'
    },
    {
      title: 'Level 2 Livescan',
      description: 'Fast and secure biometric fingerprinting for state background checks and ORI-submitted applications.',
      image: 'assets/services/livescan.png'
    },
    {
      title: 'ATF Fingerprinting',
      description: 'Fingerprinting for ATF Form 1 and Form 4 applications, including NFA items and suppressor ownership.',
      image: 'assets/services/atf.png'
    },
    {
      title: 'FBI Fingerprinting',
      description: 'National fingerprint background checks via FBI FD-258 cards or digital submissions.',
      image: 'assets/services/fbi.png'
    },
    {
      title: 'Ink Fingerprinting',
      description: 'Traditional ink card fingerprinting on FD-258 and other standard cards for out-of-state uses.',
      image: 'assets/services/ink.png'
    },
    {
      title: 'Employment Background Check',
      description: 'Fingerprinting services tailored for pre-employment screening and HR compliance.',
      image: 'assets/services/employment.png'
    },
    {
      title: 'Passport Photos',
      description: 'Professional passport and ID photos that meet U.S. and international requirements.',
      image: 'assets/services/passport.png'
    },
    {
      title: 'Notary Services',
      description: 'Mobile notary public services available on-site for contracts, forms, and affidavits.',
      image: 'assets/services/notary.png'
    }
  ];
  
}
