declare module '../AppwriteConfig' {
  export const databases: {
    createDocument: (
      databaseId: string,
      collectionId: string,
      documentId: string,
      data: any
    ) => Promise<any>;
  };
} 