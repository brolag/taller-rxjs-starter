/***** Parte I *****/

/**
 * Paso 0
 **/ 
// import { Observable, from } from 'rxjs'

// const nums = [2, 4, 6, 8, 10];
// const numsObservable$ = from(nums);

// const observer = {
//   next: value => console.log(value),
//   error: error => console.log(`Error:${error}`),
//   complete: () => console.log('Completado!')
// }

/**
 * Paso 1
 **/ 
//numsObservable$.subscribe(observer)

/**
 * Paso 2
 **/ 
// numsObservable$.subscribe(
//   value => console.log(value),
//   error => console.log(`Error:${error}`),
//   () => console.log('Completado!')
// )

/**
 * Paso 3
 **/ 
// const eventNumbers$ = Observable.create(subscriber => {
//   nums.forEach(number => 
//     number % 2 === 0 ? 
//     subscriber.next(number) : 
//     subscriber.error('El numero no es par')
//   )
//   subscriber.complete()
// });

// eventNumbers$.subscribe(
//   value => console.log(value),
//   error => console.log(`Error:${error}`),
//   () => console.log('Completado!')
// )

/***** Parte II *****/

/**
 * Paso 4
 **/ 
// import { Observable, from, fromEvent } from 'rxjs';

// const clicks$ = fromEvent(document, 'click');

// clicks$.subscribe(
//   value => console.log(value),
//   error => console.log(`Error:${error}`),
//   () => console.log('Completado')
// )



/**
 * Paso 5
 **/ 
// import { Observable, from, fromEvent } from 'rxjs';
// import { pluck, timeInterval, map } from 'rxjs/operators';

// const clicks$ = fromEvent(document, 'click');

// clicks$.pipe(
//   pluck('clientX'),
//   timeInterval(),
//   map(clickInfo => `${clickInfo.interval / 1000} seconds (${clickInfo.value})`)
// )
// .subscribe(
//   value => console.log(value),
//   error => console.log(`Error:${error}`),
//   () => console.log('Completado')
// )

/***** Parte III *****/


/**
 * Paso 6
 **/ 
// import { interval, pipe } from 'rxjs'; 
// import { concatMap, take, map } from 'rxjs/operators';


// const largo$ = interval(1000).pipe(take(4));
// const corto$ = interval(500).pipe(take(4));

// largo$.pipe(
//   concatMap(largo => 
//     corto$.pipe(
//         map(corto => console.log({ largo, corto }))
//     )
//   )
// )
// .subscribe(); 



/***** Parte IV *****/


/**
 * Paso 67
 **/ 
// import { ajax } from 'rxjs/ajax';
// import { map, catchError, pluck } from 'rxjs/operators';
// import { of } from 'rxjs';

// const obs$ = ajax.getJSON(`https://api.github.com/users/brolag/repos`).pipe(
//   map(data => data.map(repo => repo.full_name)),
//   catchError(error => {
//     console.log('error: ', error);
//     return of(error);
//   })
// );

// obs$.subscribe(
//   repos => {
//     const app = document.getElementById('app');
//     const ul = document.createElement('ul')
//     app.appendChild(ul);

//     repos.forEach(repo => {
//       const li = document.createElement('li');
//       const repoText = document.createTextNode(repo)
//       li.appendChild(repoText)
//       ul.append(li)
//     })
//   },
//   error => console.log(`Error:${error}`),
//   () => console.log('Completado')
// )

