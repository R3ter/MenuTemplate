
export type MenuItem = {
    id: string;
    title: string;
    desc: string;
    image: string;
    available: boolean;
    price: number;
    availabilityState: string;
    hot: boolean;
    new: boolean;
    order: number;
    optionCount: number;
  };
  
  export type Category = {
    id: string;
    title: string;
    order: number;
    image: string;
    items: MenuItem[];
  };