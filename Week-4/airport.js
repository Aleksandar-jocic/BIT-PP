'use strict';

(function () {
    function Person(name, surname) {
        this.firstName = name;
        this.lastName = surname;
        this.getData = function () {
            var fullName;
            fullName = this.firstName + " " + this.lastName
            return fullName
        }
    }
    function Seat(number, cat) {

        this.seatNumber = number;
        this.seatCat = cat;
        //
        if (typeof parseInt(number) !== 'number') {
            this.seatNumber = parseInt((100 - 20) * Math.random + 20);
        }
        if (cat === undefined) {
            this.seatCat = 'E';
        }
        //
        this.getData = function () {
            var fullSeat = '';
            fullSeat = this.seatNumber + ', ' + this.seatCat;
            return fullSeat
        }
    }
    function Passenger(person, seat) {
        this.person = person
        this.seat = seat
        this.getData = function () {
            var fullPassenger = '';
            fullPassenger = this.seat.getData() + ', ' + this.person.getData();
            return fullPassenger
        }
    }
    function Flight(relation, date) {
        this.relation = relation;
        this.date = new Date(date).toDateString();
        this.listOfPassengers = [];
        this.addPassenger = function (passenger) {
            this.listOfPassengers.push(passenger)
        }
        this.getData = function () {
            var string = "";
            var fullFlight = '';
            for (var i = 0; i < this.listOfPassengers.length; i++) {

                string += this.listOfPassengers[i].getData() + "\n";
            }
            fullFlight = this.date + ', ' + this.relation + '\n' + string;
            return fullFlight
        }
    }
    function Airport(name) {
        this.AirportName = 'Nikola Tesla';
        this.listOfFlights = [];
        this.addFlight = function (flight) {
            this.listOfFlights.push(flight)
        }
        this.getData = function () {


            var totalSumOfPassengers = 0;
            var flightDetails = '';
            for (var j = 0; j < this.listOfFlights.length; j++) {
                flightDetails += this.listOfFlights[j].getData() + '\n';
                for (var k = 0; k < this.listOfFlights[j].listOfPassengers.length; k++) {
                    totalSumOfPassengers++;
                }
            }

            var totalListOfFlights = function () {

            }

            return 'Airport: ' + this.AirportName + ', total passengers: ' + totalSumOfPassengers + '\n' + flightDetails
        }




    }
    //reg func
    function createFlight(relation, date) {
        return new Flight(relation, date)
    }
    //reg func
    function createPassenger(number, cat, firstName, lastName) {
        var person = new Passenger(firstName, lastName);
        var seat = new Seat(number, cat);

        return new Passenger(person, seat)
    }
    //airports
    var ApName = new Airport();
    //flights
    var flightOne = createFlight('Belgrade - New York', 'Oct 25 2017');
    var flightTwo = createFlight('Barcelona - Belgrade', 'Nov 11 2017');
    //passengers
    var snow = createPassenger(12, 'e', 'John', 'Snow');
    var lannister = createPassenger(14, 'e', 'Tyrion', 'Lannister');
    var cersei = createPassenger(67, 'b', 'Cersei', 'Lannister');
    var daenerys = createPassenger(66, 'b', 'Daenerys', 'Targaryen');
    //addPassengersToFlights
    flightOne.addPassenger(snow);
    flightOne.addPassenger(cersei);
    flightTwo.addPassenger(daenerys);
    flightTwo.addPassenger(lannister);
    //addFlighttoAp
    ApName.addFlight(flightOne);
    ApName.addFlight(flightTwo);




    console.log(snow.person.getData())


    // console.log(flightOne);
    // console.log(flightTwo);
    // console.log(snow);
    // console.log(Flight);
    // console.log(ApName.getData());





})();