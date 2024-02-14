interface Customer {
    id: number;
    name: string;
    msisdn: string;
    status: {
      daily: string,
      weekly: string,
      thirtyDay: string,
      sixtyDay: string,
      ninetyDay: string,
    };
    churnProbablity: number;
  }
  interface Tab {
    name: string,
    notification: number
  }
  