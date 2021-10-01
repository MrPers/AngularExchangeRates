import { Injectable } from '@angular/core';

export const URLpath = "https://localhost:44318/api/";
export const currencies: Array<string> = ["USD", "EUR", "RUB"];
export const currency: string = "RUB";
export interface User{
  name:string;
  phone:string;
  email:string;
  password:string;
}

export class ConstantsService {
  constructor() { }

}
