import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email?: string;
  password?: string;
  constructor(
    // Add the AuthService service
    private authService: AuthService,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  // Add the loginWithEmail method
  async loginWithEmail() {
    const loading = await this.loadingController.create({
      message: 'Connexion en cours...',
    });
    try {
      if (!this.email || !this.password)
        return this.presentAlert(
          'Identifiant manquant',
          'Veuillez saisir votre identifiant et votre mot de passe'
        );
      await loading.present();
      await this.authService.loginWithEmail(this.email, this.password);
      await loading.dismiss();
    } catch (error) {
      await loading.dismiss();
      console.error('Error signing in:', error);
      this.presentAlert(
        'Erreur de connexion',
        'Veuillez vérifier votre identifiant et votre mot de passe'
      );
    }
  }

  // Add alert method
  async presentAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Attention',
      subHeader: title,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
