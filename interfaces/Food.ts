export interface DishInterface{
    resName: string,
    time: string,
    distance: string,
    offer: string,
}
export interface ExplorerDishInterface{
    label: string,
    subLebel: string,
    new: boolean
}
export interface MainDishInterface{
    resName: string,
    type: string,
    cusine: string,
    price: string,
    rating: string,
    offer: string
}
export interface MainDishOfResInterface{
    dishName: string,
    price: number, 
    ratings: number,
    description: string
}
export interface DataItem {
    lab: string; // Assuming `data` items have a `lab` property, update this based on actual data structure
  }
  
  // Define the props that the ReorderDishCard will receive
  export interface ReorderDishCardProps {
    data: DataItem; // Passing data as a prop to ReorderDishCard
  }