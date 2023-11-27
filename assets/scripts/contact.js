'use strict';

class Contact {
    _name;
    _city;
    _email;

    constructor(name, city, email) {
        this._name = name;
        this._city = city;
        this._email = email;
    }

    static checkName(name) {
        const regex = /^[a-zA-Z\s]+$/;
        return regex.test(`${name}`);
      }

      static checkCity(city) {
        const regex = /^[a-zA-Z\s]+$/;
        return regex.test(`${city}`);
      }

      static checkEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(`${email}`);
      }

    set name(name) {
        this._name = name;
    }

    set city(city) {
        this._city = city;
    }

    set email(email) {
        this._email = email;
    }

    get name() {
        return this._name;
    }

    get city() {
        return this._city;
    }

    get email() {
        return this._email;
    }

    display() {
        return {
            name: `Name: ${this._name}`,
            city: `City: ${this._city}`,
            email: `Email: ${this._email}`
        };
    }
}

export { Contact };