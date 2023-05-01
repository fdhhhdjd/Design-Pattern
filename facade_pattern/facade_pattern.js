"use strict";

// Define complex subsystems
class HotelBooking {
  bookHotel() {
    console.log("Hotel booked.");
  }
}

class FlightBooking {
  bookFlight() {
    console.log("Flight booked.");
  }
}

class CarRental {
  rentCar() {
    console.log("Car rented.");
  }
}

// Define complex subsystems
class TravelFacade {
  constructor() {
    this.hotelBooking = new HotelBooking();
    this.flightBooking = new FlightBooking();
    this.carRental = new CarRental();
  }
  bookTravel() {
    this.hotelBooking.bookHotel();
    this.flightBooking.bookFlight();
    this.carRental.rentCar();

    console.log("Travel booked successfully!");
  }
}

// Use facade class to book travel
const travelFacade = new TravelFacade();
travelFacade.bookTravel();
