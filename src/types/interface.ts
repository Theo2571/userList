export interface UserItem {
  users: {
    count: number;
    results: [];
  };

  color: string;
  name: string;
  speed: number;
  time: number;
  loading: boolean;
  page: number;
  id: number;
}
