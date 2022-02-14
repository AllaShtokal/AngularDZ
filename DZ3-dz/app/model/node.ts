export interface Node {
    id: number;
    name: string;
    parentId: number | null;
    children: Node[];
}
