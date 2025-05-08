export interface VitalsCardProps {
  style?: object;
  title?: string;
  priority?: string;
  data?: string;
  value?: string;
  vitalDetails?: () => void;
}
