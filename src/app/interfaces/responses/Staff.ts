import { Issue } from "./Issue";

export interface Staff {
  id: number,
  username: string,
  role: string,
  issues: Issue[],
  createdDate: Date,
  lastModifiedDate: Date,
}
