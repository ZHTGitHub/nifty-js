declare function date<T>(value: T): { 
  year: number; 
  month: number;
  day: number;
  date: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  time: number;

  normalMonth: number;

  am00Time: number;
  pm24Time: number;
}