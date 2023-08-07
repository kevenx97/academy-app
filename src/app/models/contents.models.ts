export interface List {
  name: string;
  img: string;
  status?: string;
}

export interface Contents {
  name: string;
  type: 'class' | 'workout';
  list: List[];
}