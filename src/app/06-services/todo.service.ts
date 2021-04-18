
import { Http } from '@angular/common/http';
import'rxjs/add/operator/map';

export class TodoService { 
  constructor(private http: Http) { 
  }

  add(todo: { title: string; }) {
    return this.http.post('...', todo).map((r: { json: () => any; }) => r.json());
  }

  getTodos() { 
    return this.http.get('...').map((r: { json: () => any; }) => r.json());
  }

  delete(id: any) {
    return this.http.delete('...').map((r: { json: () => any; }) => r.json());
  }
}