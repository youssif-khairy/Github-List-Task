export interface GithubListModel {
  name:string;
  description : string;
  owner : OwnerContent;
  open_issues_count : number;
  watchers_count: number; //number of stars
  pushed_at:Date;
}


type OwnerContent = {
  avatar_url :string,
  name:string
}
