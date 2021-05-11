import { v4 as uuidV4 } from 'uuid';

class Category {
    id?: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;


    constructor() {
        // In case of empty id model create one.
        if (!this.id) this.id = uuidV4();
    }
}
export { Category };