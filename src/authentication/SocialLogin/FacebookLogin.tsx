'use client';
import { Facebook } from 'lucide-react';
import React from 'react';
import { Login } from '../action';

const FacebookLogin = () => {
  return (
    <div onClick={() => Login('facebook')}>
      <Facebook className="w-6 h-6 text-white" />
      <p className="text-black cursor-pointer"> Login With Facebook</p>
    </div>
  );
};

export default FacebookLogin;
