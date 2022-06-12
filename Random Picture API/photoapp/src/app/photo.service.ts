import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface CallResponse{
  urls:{
    regular:string
  };
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http:HttpClient) { }

  getPhotos()
  {
    return this.http.get<CallResponse>('https://api.unsplash.com/photos/random',{
      headers: {
        Authorization: 'Client-ID 9x_Wxlq3YtU61D4xsJGJaqyTQ0_dAupvBdT0y1V5zrE'
      }
    }
    );
  }
    
}
