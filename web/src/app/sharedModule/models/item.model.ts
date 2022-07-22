  export interface IItem {
      id: number;
      brand?: string;
      model?: string;
      type: string;
      price: number;
      isActive: boolean;
      name?: string;
      isDeleted?:boolean;
  }
  export interface IItemListResponse{
    status:number,
    data:Array<IItem>
  }
