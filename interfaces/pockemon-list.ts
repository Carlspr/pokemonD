export interface PockemonListResponse{
    count:number,
    next?: string,
    previous?: string,
    results: SmallPockemon[],

}

export interface SmallPockemon{
    name:string,
    url: string,
    id:number, 
    img:string,
}