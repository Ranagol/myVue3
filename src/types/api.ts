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

//This is a type, that is needed for delete, create, update axios operation, where we need the object.id
export interface ObjectWithId {
  id: Number,
}

export interface Post {
  userId: Number,
  id: Number,
  title: String,
  body: String
}