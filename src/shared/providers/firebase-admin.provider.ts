import * as admin from 'firebase-admin';

export const firebaseAdminProvider = {
  provide: 'FIREBASE_ADMIN',
  useFactory: () => {
    if (!admin.apps.length) {
      const defaultApp = admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.PROJECT_ID,
          clientEmail: process.env.CLIENT_EMAIL,
          privateKey: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'),
        }),
      });
      return { defaultApp };
    } else {
      return { defaultApp: admin.app() };
    }
  },
};
