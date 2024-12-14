'use server';
import { revalidatePath } from 'next/cache';
import { signIn, signOut } from '../auth';

export const handleFacebookLogin = async () => {
  try {
    await signIn('facebook', { reditectTo: '/' });
    revalidatePath('/');
  } catch (error) {
    console.error('Error While Facebbok Login', error);
  }
};

export const Logout = async () => {
  await signOut({ redirectTo: '/' });
  revalidatePath('/');
};
