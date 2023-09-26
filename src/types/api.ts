export interface ErrorFromApi {
  message: string
}

//This is an axios object type, temporery solution only
export interface AxiosApi {
  get:Function;
  put:Function;
  post:Function;
  delete:Function;
}

export interface Post {
  userId: Number,
  id: Number,
  title: String,
  body: String
}