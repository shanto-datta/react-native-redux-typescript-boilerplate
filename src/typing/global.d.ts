declare global {
  interface Window {
    customGlobalVariable: string;
  }

  interface CustomType {
    id: number;
    name: string;
  }
}

export {};
