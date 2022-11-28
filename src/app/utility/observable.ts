import { Observable } from "rxjs/internal/Observable";

export function createHttpObservable(url:string): Observable<any> {
    return new Observable(observer => {
        const controller = new AbortController();
        const signal = controller.signal;
        fetch(url, {signal})
        .then((response) => {
            if(response.ok) {
            return response.json();
            } else {
           return observer.error('Request failed with status code: ' + response.status);
            }
        })
        .then(body => {
            observer.next(body);
            observer.complete();
        })
        .catch(err => {
            observer.error(err);
        });
        return () => controller.abort();
    });
}