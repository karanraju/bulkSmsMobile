export interface UserProfileButtonProps {
    title?: string;
    buttonData: UserProfileButtonItem[];
  }
  
export interface UserProfileButtonItem {
    title: string;
    icon: React.ReactNode;
    onPress: () => void;
  }
  