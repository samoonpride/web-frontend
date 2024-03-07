export interface Issue {
  issueId: number,
  duplicateIssueId?: number,
  assigneeIds: number[],
  title: string,
  latitude: number,
  longitude: number,
  thumbnailPath?: string,
  status: string,
}
