type TableDataItem = {
    key: string;
    value: string;
  };
  
export type TableInfoProps = {
    headingTitle?: string;
    headingValue?: string;
    tableData: TableDataItem[];
  };