import { StaffRole } from "src/app/constants/StaffRole";

export interface StaffCreateDto {
  username: string,
  password: string,
  role: StaffRole,
}
