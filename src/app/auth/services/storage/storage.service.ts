import { Injectable } from '@angular/core';

const TOKEN = "token";
const USER = "user";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(){}

  static isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__storage_test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      console.error('localStorage not available:', e);
      return false;
    }
  }

  static saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  static saveUser(user: any): void {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  static getToken(){
    return localStorage.getItem(TOKEN);
  }

  static getUser() {
  const userString = localStorage.getItem(USER);

  // Check if the item exists before parsing
  if (userString !== null) {
    return JSON.parse(userString);
  }

  // Return null or handle the case when the item is not found
  return null;
}


  static getUserRole(): string {
    const user = this.getUser();
    if (user == null) return "";
    return user.role;
  }

  static isAdminLoggedIn():boolean{
    if(this.getToken() == null)return false;
    const role: string = this.getUserRole();
    return role == "ADMIN";
}

  static isCustomerLoggedIn(): boolean {
    if (this.getToken()== null) return false;
    const role: string = this.getUserRole();
    return role === "CUSTOMER";
  }


  static logout(): void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }
}
