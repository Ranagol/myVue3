export interface ErrorFromApi {
  message: string
}

export interface AxiosApi {
  get:Function;
  put:Function;
  post:Function;
  delete:Function;
}

export interface ObjectWithId {
  id: Number,
}

export interface Post {
  userId: Number,
  id: Number,
  title: String,
  body: String
}