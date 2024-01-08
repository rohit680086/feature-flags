import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagRestService {

  constructor(private httpClient: HttpClient) { }

  getFeatureFlags(){
    return this.httpClient.get('');
  }
}
