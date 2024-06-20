export interface IItemsResponse {
    items: IItem[];
}

export interface IItem {
    name: string;
    id: number;
    health?: number;
    damage?: number;
    maxLevel: number;
    elixirCost: number;
    iconUrls: IIConUrls;
    rarity: string;
}

interface IIConUrls {
    medium: string;
}
