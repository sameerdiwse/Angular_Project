import { Component } from '@angular/core';
import { Rooms, RoomsList } from './rooms';
@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.sass']
})
export class RoomsComponent {
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

   roomsList : RoomsList[] =
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
