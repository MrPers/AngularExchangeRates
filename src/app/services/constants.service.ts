import { Injectable } from '@angular/core';

export const URLpath = "https://localhost:44318/api/";
export const currency: string = "RUB";
export const scale: string = "year";
export const scales: Array<string> = [
  "second",
  "minute",
  "hour",
  "day",
  "month",
  "year"
];
export interface User{
  name:string;
  phone:string;
  email:string;
  password:string;
}

export class ConstantsService {
  name: string = "";
  constructor() { }
}
