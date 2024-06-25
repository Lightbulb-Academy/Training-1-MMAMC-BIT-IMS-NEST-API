import { User } from "@prisma/client";
import { RoleEntity } from "src/roles/entities/role.entity";

export class UserEntity implements User {
    id: number;
    first_name: string;
    middle_name: string;
    last_name: string;
    email: string;
    password: string;
    role_id: number;
    created_at: Date;
    updated_at: Date;
    role: RoleEntity;
}
