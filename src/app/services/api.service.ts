import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://skynet.copsis.com:8181/';
  private catalogosaAPIPath = "sio4acatalogos-new/"
  private polizasAPIPath = "sio4apolizas-new/"
  private detallesPath = "Sio4SocioDetalleAPI"
  private CPPath = "Sio4CodigoPostalAPI"
  private direccionesPath = "Sio4SearchDireccionesSocioAPI"

  constructor(private http: HttpClient) { }

  getDetails(rfc: string, nombre: string): Observable<any> {
    const params = new HttpParams()
      .set('b', "4RTgmgPwfgPI%202vUxOcUtRPCqD2n%20Ce9xw3LOnfk6mw=")
      .set('s4_key', 'uLmdvb2dsZS5jb20vY2hhdC1kYXRhYmFzZS05NTdjMSIsIm5hbWUiOiJIZWJlc');

    const headers = new HttpHeaders({
      'accept': 'application/json, text/plain',
      'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdXRob3JpdGllcyI6IntcInR5cGVcIjpcInRva2VuXCJ9Iiwib3JpZ2luIjoidW5rbm93biIsImF1ZCI6Inxjb3BzaXNBdXRvc3xhdXRvc3wiLCJzcWxJbnN0YW5jZUlkIjoidWF0Iiwic3FsSW5zdGFuY2VOYW1lIjoicXVhdHRyby11YXQiLCJkYm4iOiJxdWF0dHJvMDAwMzEiLCJzb2Npb0VuYyI6InRSOHo3SVJzUllrYjlOejJlT2t1dVE9PSIsInBlcnNvbmFFbmMiOiI5NGMzcWFCVGxPQmJkVVdQQmt4RW1nPT0iLCJzdWIiOiJxMzFAcXVhdHRyb2NybS5teCIsImlhdCI6MTczMjIxMTAyNCwiZXhwIjoxNzMyMjU0MjI0fQ.tF76V1pJ9NKFDX_A15zyjrwpIKn8vEArJhF3fIYDlKE',
      'content-type': 'application/json; charset=utf-8'
    });

    return this.http.get<any>(`${this.apiUrl}${this.catalogosaAPIPath}${this.detallesPath}`, { headers, params });
  }

  getCodigoPostal(codigoPostal: string): Observable<{ estado: string; municipio: string; colonia: string }[]> {
    const params = new HttpParams()
      .set('b', '4RTgmgPwfgPI 2vUxOcUtRPCqD2n Ce9xw3LOnfk6mw=') 
      .set('s4_key', 'uLmdvb2dsZS5jb20vY2hhdC1kYXRhYmFzZS05NTdjMSIsIm5hbWUiOiJIZWJlc') 
      .set('f1', 64000); 
  
    const headers = new HttpHeaders({
      'accept': 'application/json, text/plain',
      'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdXRob3JpdGllcyI6IntcInR5cGVcIjpcInRva2VuXCJ9Iiwib3JpZ2luIjoidW5rbm93biIsImF1ZCI6Inxjb3BzaXNBdXRvc3xhdXRvc3wiLCJzcWxJbnN0YW5jZUlkIjoidWF0Iiwic3FsSW5zdGFuY2VOYW1lIjoicXVhdHRyby11YXQiLCJkYm4iOiJxdWF0dHJvMDAwMzEiLCJzb2Npb0VuYyI6InRSOHo3SVJzUllrYjlOejJlT2t1dVE9PSIsInBlcnNvbmFFbmMiOiI5NGMzcWFCVGxPQmJkVVdQQmt4RW1nPT0iLCJzdWIiOiJxMzFAcXVhdHRyb2NybS5teCIsImlhdCI6MTczMjIxMTAyNCwiZXhwIjoxNzMyMjU0MjI0fQ.tF76V1pJ9NKFDX_A15zyjrwpIKn8vEArJhF3fIYDlKE', 
      'content-type': 'application/json; charset=utf-8'
    });
  
    return this.http.get<{ estado: string; municipio: string; colonia: string }[]>(this.apiUrl + this.polizasAPIPath + this.CPPath, { headers, params });
  }

  getDirecciones(): Observable<any> {
    const params = new HttpParams()
      .set('b', '4RTgmgPwfgPI 202vUxOcUtRPCqD2n Ce9xw3LOnfk6mw=')
      .set('s4_key', 'uLmdvb2dsZS5jb20vY2hhdC1kYXRhYmFzZS05NTdjMSIsIm5hbWUiOiJIZWJlc')


    const headers = new HttpHeaders({
      'accept': 'application/json, text/plain',
      'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdXRob3JpdGllcyI6IntcInR5cGVcIjpcInRva2VuXCJ9Iiwib3JpZ2luIjoidW5rbm93biIsImF1ZCI6Inxjb3BzaXNBdXRvc3xhdXRvc3wiLCJzcWxJbnN0YW5jZUlkIjoidWF0Iiwic3FsSW5zdGFuY2VOYW1lIjoicXVhdHRyby11YXQiLCJkYm4iOiJxdWF0dHJvMDAwMzEiLCJzb2Npb0VuYyI6InRSOHo3SVJzUllrYjlOejJlT2t1dVE9PSIsInBlcnNvbmFFbmMiOiI5NGMzcWFCVGxPQmJkVVdQQmt4RW1nPT0iLCJzdWIiOiJxMzFAcXVhdHRyb2NybS5teCIsImlhdCI6MTczMjIxMTAyNCwiZXhwIjoxNzMyMjU0MjI0fQ.tF76V1pJ9NKFDX_A15zyjrwpIKn8vEArJhF3fIYDlKE',
      'content-type': 'application/json; charset=utf-8'
    });

    return this.http.get<any>(this.apiUrl + this.polizasAPIPath + this.CPPath, { headers, params });
  }
}



