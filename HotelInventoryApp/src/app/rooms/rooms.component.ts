import { Component, OnInit } from '@angular/core';
import { Rooms, RoomsList } from './rooms';
@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit
{
  
  hotelName = 'Hilton Hotel'
  noOfRooms = 10
  hiddenRooms = true

  toggle() 
  {
    this.hiddenRooms = !this.hiddenRooms
  }

   room : Rooms =
   {
    noOfRooms : 20,
    availableRooms : 5,
    bookedRooms : 15
   } 

   roomsList : RoomsList[] =[]; 
   constructor(){}
   ngOnInit(): void 
   {
    this.roomsList =
    [
      {
        roomNumber : 1,
        roomType : 'simple room',
        ameneties : 'wifi',
        price : 1000,
        image : 'unsplash',
        chekinTime : new Date('11-Nov-2022'),
        checkoutTime : new Date('12-Nov-2022')
      },
      {
        roomNumber : 2,
        roomType : 'normal room',
        ameneties : 'wifi',
        price : 1000,
        image : 'unsplash',
        chekinTime : new Date('11-Nov-2022'),
        checkoutTime : new Date('12-Nov-2022')
      },
      {
        roomNumber : 3,
        roomType : 'delux room',
        ameneties : 'wifi',
        price : 1000,
        image : 'unsplash',
        chekinTime : new Date('11-Nov-2022'),
        checkoutTime : new Date('12-Nov-2022')
      }
    ]
  }
}
