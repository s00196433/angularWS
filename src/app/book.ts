export interface Book {
    /*right change ?*/
    _id : string,
    title: string,
    year_written: number,
    edition: string,
    price: number,
    author : { name : string, nationality : string},
    tags: string[];
}
